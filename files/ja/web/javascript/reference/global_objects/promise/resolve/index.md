---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 3fe5c1d405128b70e38347931153fd2ce10b3545
---

{{JSRef}}

**`Promise.resolve()`** は静的メソッドで、 {{jsxref("Promise")}} を与えられた値で「解決」させます。値がプロミスの場合は、そのプロミスが返されます。その値が [Thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) であれば、`Promise.resolve()` は `then()` メソッドを、準備した 2 つのコールバックと共に呼び出します。それ以外の場合は、その値で履行するプロミスが返されます。

この関数は複数階層のプロミス風オブジェクト (例えば、何かで解決するプロミスで解決するプロミス) を単一の階層に平坦化します。

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## 構文

```js-nolint
Promise.resolve(value)
```

### 引数

- `value`
  - : この `Promise` で解決する際の引数。解決するための `Promise` または Thenable にすることもできます。

### 返値

与えられた値で解決された {{jsxref("Promise")}}、または value がプロミスオブジェクトであった場合、値として渡されたプロミスです。解決されたプロミスは、履行、拒否、待機のいずれかの状態になることができます。例えば、拒否されたプロミスが解決しても、結果は拒否されたプロミスのままです。

## 解説

`Promise.resolve()` はプロミスを _解決_ します。これはプロミスを履行したり拒否したりすることとは異なります。用語の定義については、[プロミスの説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#description)を参照してください。簡単に言うと、 `Promise.resolve()` は、最終的な状態が他のプロミス、 Thenable オブジェクト、または他の値に依存しているプロミスを返します。

`Promise.resolve()` は汎用で、サブクラス化を対応しています。つまり、`Promise` のサブクラスで呼び出すことができ、その結果はサブクラス型のプロミスになります。これを行うには、サブクラスのコンストラクターは [`Promise()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) コンストラクターと同じ定義で実装する必要があります。引数として `resolve` と `reject` コールバックで呼び出すことができる単一の `executor` 関数を受け入れることができます。

`Promise.resolve()` は、ネイティブの `Promise` のインスタンスを特別扱いしています。 `value` が `Promise` またはそのサブクラスに属し、 `value.constructor === Promise` の場合、新しい `Promise` インスタンスを作成せずに、`Promise.resolve()` で直接 `value` を返すことができます。そうでない場合、`Promise.resolve()` は基本的に `new Promise((resolve) => resolve(value))` の一括指定となります。

解決ロジックの大部分は，実際には `Promise()` コンストラクターに渡される[リゾルバー関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#resolver_function)で実装されます。概要をまとめると、次のようになります。

- [Thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) でない値が渡された場合，返されたプロミスはその値ですでに履行されたものとなります。
  Thenable が渡された場合、`then` メソッドを呼び出され、引数としてリゾルバー関数のペアを渡すことで、返されるプロミスはその Thenable の状態を採用することになります。（しかし、ネイティブのプロミスはラッパーを作成せずに直接 `Promise.resolve()` を通すので、ネイティブのプロミスでは `then` メソッドは呼ばれません）。リゾルバー関数が別の Thenable オブジェクトを受け取ると、それは再び解決されるので、最終的なプロミスの履行値は決して Thenable になることはないでしょう。

## 例

### 静的な Promise.resolve メソッドの使用

```js
Promise.resolve("Success").then(
  (value) => {
    console.log(value); // "Success"
  },
  (reason) => {
    // 呼び出されない
  },
);
```

### 配列で解決

```js
const p = Promise.resolve([1, 2, 3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### 別の Promise で解決

`Promise.resolve()` は、既存の `Promise` インスタンスを再利用します。ネイティブのプロミスを解決する場合は、ラッパーを作成せずに同じプロミスインスタンスを返します。

```js
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`value: ${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// ログ（順番通り）:
// original === cast ? true
// value: 33
```

ログの順番が反転するのは、 `then` ハンドラーが非同期に呼び出されるために発生します。詳しくは {{jsxref("Promise/then", "then()")}} のリファレンスを参照してください。

### Thenable で解決してエラーを発生させる

```js
// Thenable オブジェクトを解決
const p1 = Promise.resolve({
  then(onFulfill, onReject) {
    onFulfill("fulfilled!");
  },
});
console.log(p1 instanceof Promise); // true、オブジェクトが Promise にキャストされた

p1.then(
  (v) => {
    console.log(v); // "fulfilled!"
  },
  (e) => {
    // 呼び出されない
  },
);

// Thenable throws before callback
// Promise rejects
const thenable = {
  then(onFulfilled) {
    throw new TypeError("Throwing");
    onFulfilled("Resolving");
  },
};

const p2 = Promise.resolve(thenable);
p2.then(
  (v) => {
    // 呼び出されない
  },
  (e) => {
    console.error(e); // TypeError: Throwing
  },
);

// Thenable はコールバックの後で Promise が解決した場合に
// 例外を発生させます。
const thenable = {
  then(onFulfilled) {
    onFulfilled("Resolving");
    throw new TypeError("Throwing");
  },
};

const p3 = Promise.resolve(thenable);
p3.then(
  (v) => {
    console.log(v); // "Resolving"
  },
  (e) => {
    // not called
  },
);
```

入れ子になった Thenable は、単一のプロミスに「深く平坦化」されます。

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(thenable).then((v) => {
  console.log(v); // 42
});
```

> **警告:** 自分自身に解決する thenable に対して `Promise.resolve()` を呼び出さないでください。これは無限にネストしたプロミスを平坦化しようとするため、無限の再帰を引き起こします。

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // 無z限の再帰を引き起こす
```

### Promise 以外のコンストラクターに対する resolve() の呼び出し

`Promise.resolve()` は汎用的なメソッドです。これは `Promise()` コンストラクタと同じ定義を実装した任意のコンストラクターで呼び出すことができます。例えば、`resolve` として `console.log` を渡すコンストラクターで呼び出すことができます。

```js
class NotPromise {
  constructor(executor) {
    // "resolve" と "reject" 関数はネイティブのプロミスと同じような振る舞いはしませんが、
    // Promise.resolve() は同じようにそれらを呼び出します。
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

Promise.resolve.call(NotPromise, "foo"); // Logs "Resolved foo"
```

入れ子になった Thenable を平坦化する機能は `Promise()` コンストラクターのリゾルバー関数で実装されています。そのため、他のコンストラクターで呼び出すと、そのコンストラクターがリゾルバーをどのように実装しているかによって入れ子の Thenable が平坦化されない場合があります。

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // Thenable は他の Thenable に履行されます
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve.call(NotPromise, thenable); // "Resolved { then: [Function: then] }" と出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}

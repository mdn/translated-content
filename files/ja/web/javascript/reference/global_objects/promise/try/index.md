---
title: Promise.try()
short-title: try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: a6a2daec3965d85ef6dfc06cfd3507c1b2f886e2
---

**`Promise.try()`** 静的メソッドは、あらゆる種類のコールバック（復帰か例外か、同期的か非同期的にかかわらず）を受け取り、その結果を {{jsxref("Promise")}} に変換します。

## 構文

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### 引数

- `func`
  - : 指定された引数 (`arg1`, `arg2`, …, `argN`) とともに同期的に呼び出される関数。値を返す、エラーを発生させる、プロミスを返すなど、何らかの動作を行うことができます。
- `arg1`, `arg2`, …, `argN`
  - : `func` に渡す引数。

### 返値

{{jsxref("Promise")}} で、次のようなものです。

- `func` が同期的に値を返す場合は、すでに履行されたもの。
- `func` が同期的にエラーを発生した場合は、すでに拒否されたもの。
- 非同期で履行または拒否された場合、`func` はプロミスを返します。返値はプロミスに[解決](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)されます。つまり、組み込みの {{jsxref("Promise")}} オブジェクトはそのままの形で返されます。

## 解説

コールバックを受け取る API もあります。 コールバックは同期または非同期のどちらでも可能です。 結果をプロミスでラップすることで、すべてを統一的に処理したい場合、最もわかりやすい方法は、{{jsxref("Promise/resolve", "Promise.resolve(func())")}} でしょう。 問題は、`func()` で同期的にエラーが発生した場合、このエラーが補足されず、拒否されたプロミスに変換されないことです。

この式を `try...catch` で囲むことが可能です。

```js
let result;
try {
  result = Promise.resolve(func());
} catch (error) {
  result = Promise.reject(error);
}
```

問題は、`try...catch`が式ではないため、他の関数に渡すなど、式の位置で直接使用することができないという点です。

したがって、関数呼び出しの結果を、履行済みか拒否済みかを問わず、プロミスに変換する際には、一般的に次のようにするのが最適です。

```js
new Promise((resolve) => resolve(func()));
```

組み込みの `Promise()` コンストラクターの場合、実行関数から発生したエラーは自動的に捕捉され、拒否に変換されるため、これにより同期エラーも防止されます。問題は、無条件に新しい `Promise` オブジェクトが作成されてしまうことであり、`func()` がすでに `Promise` を返している場合にはこれは不要です。一方、`Promise.resolve()` は、そのような余分なプロミスのラッピングを防ぐように賢く設計されています。

`Promise.try()` は、`try...catch` 手法とほぼ完全に同等ですが、より簡潔であり、式として使用できる点が異なります。

```js
Promise.try(func);
```

> [!NOTE]
> `Promise.try()` は当初、`new Promise()` と同様に、無条件に新しいプロミスを作成するように仕様化され、実装されていましたが、現在はそうではなくなりました。詳細は[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

なお、`Promise.try()` はこれと非常に似ていますが、同等ではありません。

```js
Promise.resolve().then(func);
```

違いは、{{jsxref("Promise/then", "then()")}} に渡されたコールバックは常に非同期で呼び出されるのに対し、`Promise()` コンストラクターの実行は同期で呼び出されることです。 `Promise.try` も関数を同期で呼び出し、可能であれば即座にプロミスを解決します。

`Promise.try()` を {{jsxref("Promise/catch", "catch()")}} および {{jsxref("Promise/finally", "finally()")}} と組み合わせて使用することで、単一の連鎖で同期的および非同期的なエラーの両方を処理することができ、プロミスエラー処理を同期的エラー処理とほとんど同じように見せることができます。

{{domxref("Window/setTimeout", "setTimeout()")}} と同様に、 `Promise.try()` はコールバックに渡される追加の引数を受け入れます。これは、次のようにする代わりに、次のように意味しています。

```js
Promise.try(() => func(arg1, arg2));
```

このようにすることができます。

```js
Promise.try(func, arg1, arg2);
```

これらは同等ですが、後者は余分なクロージャの作成を避け、より効率的です。


`Promise.try()` は汎用的であり、サブクラス化に対応しています。つまり、`Promise` のサブクラスに対して呼び出すことができ、その結果にはそのサブクラスの型のプロミスが含まれます。これを行うには、サブクラスのコンストラクターが [`Promise()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) コンストラクターと同じシグネチャを実装している必要があります。つまり、`resolve` および `reject` コールバックを引数として呼び出すことができる単一の `executor` 関数を受け入れる必要があります。

## 例

### Promise.try() の使用

次の例では、コールバックをプロミスに「引き上げ」、結果を処理し、エラー処理を行います。

```js
function doSomething(action) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Done"));
}

doSomething(() => "Sync result");

doSomething(() => {
  throw new Error("Sync error");
});

doSomething(async () => "Async result");

doSomething(async () => {
  throw new Error("Async error");
});
```

async/await では、同じコードは次のようになります。

```js
async function doSomething(action) {
  try {
    const result = await action();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}
```

### Promise 以外のコンストラクターにおける try() の呼び出し

`Promise.try()` は汎用メソッドです。これは、`Promise()` コンストラクターと同じシグネチャを実装する任意のコンストラクターで呼び出すことができます。

以下は、実際の `Promise.try()` にやや忠実な近似表現です（ただし、やはりこれはポリフィルとして使用すべきではありません）。

```js
Promise.try = function (func, ...args) {
  let result;
  try {
    result = func(...args);
  } catch (error) {
    return Promise.reject.call(this, error);
  }
  return Promise.resolve.call(this, result);
};
```

`Promise.try()` は、{{jsxref("Promise.resolve()")}} および {{jsxref("Promise.reject()")}} に委譲して返値を生成しますが、これら 2 つの関数はいずれも汎用的です。

例えば、コンストラクターで `console.log` を `resolve` 関数と `reject` 関数の `executor` として渡すことで呼び出すことができます。

```js
class NotPromise {
  constructor(executor) {
    // "resolve" および "reject" 関数の挙動は、ネイティブのプロミスの
    // ものと同様だが、Promise.try() は resolve を呼び出すだけ
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }

  static try = Promise.try;
}

const p = NotPromise.try(() => "hello");
// 出力: Resolved hello
// p は NotPromise インスタンス

const p2 = NotPromise.try(() => {
  throw new Error("oops");
});
// 出力: Rejected Error: oops
// p は NotPromise インスタンス
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise.try` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#promisetry)
- [es-shims による `Promise.try` のポリフィル](https://www.npmjs.com/package/promise.try)
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)ガイド
- {{jsxref("Promise")}}
- [`Promise()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

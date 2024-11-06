---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`finally()`** は {{jsxref("Promise")}} インスタンスのメソッドで、プロミスが決定したとき（履行されたか拒否されたかのどちらか）に呼び出される関数を準備します。直ちに他の {{jsxref("Promise")}} オブジェクトを返すため、プロミスの他のメソッドを[連鎖](/ja/docs/Web/JavaScript/Guide/Using_promises#連鎖)呼び出しすることができます。

これによって、プロミスの {{jsxref("Promise/then", "then()")}} ハンドラーと {{jsxref("Promise/catch", "catch()")}} ハンドラーでコードが重複することを避けることができます。

{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}

## 構文

```js-nolint
promiseInstance.finally(onFinally)
```

### 引数

- `onFinally`
  - : このプロミスが決定したときに非同期で実行する関数です。返値が拒否されたプロミスでない限り、その返値は無視されます。関数は引数なしで呼び出されます。

### 返値

同等の {{jsxref("Promise")}} を返します。この新しいプロミスは、現在のプロミスの状態に関わらず、常に返されるまで待機します。 `onFinally` でエラーが発生したり、拒否されたプロミスが返された場合、新しいプロミスは同じ値で拒否されます。それ以外の場合、新しいプロミスは現在のプロミスと同じ状態で決定されます。

## 解説

プロミスが決定した後、結果に関わらず何らかの処理や後始末を行いたいなら、`finally()` メソッドは役立ちます。

`finally()` メソッドは {{jsxref("Promise/then", "then(onFinally, onFinally)")}} の呼び出しとよく似ていますが、いくつかの点が異なります。

- 関数をインラインで作成する場合、関数を 2 度宣言するか、変数を作成するかのどちらかで、一度に渡すことができます。
- `onFinally` コールバックは一切引数を受け取りません。この用途では、拒否された理由や履行された値などを提供する必要がなく、それらを気にしないときに適しています。
- 通常、`finally()` を呼び出すと、元のプロミスの最終的な状態を反映するようになります。ですから例えば、
  - `Promise.resolve(2).then(() => 77, () => {})` が最終的に `77` の値で履行されるプロミスを返すのとは異なり、`Promise.resolve(2).finally(() => 77)` は最終的に `2` の値で履行されるプロミスを返します。
  - 同様に、`Promise.reject(3).then(() => {}, () => 88)` が最終的に `88` の値で履行されるプロミスを返すのとは異なり、`Promise.reject(3).finally(() => 88)` は最終的に `3` の値で拒否されるプロミスを返します。

> **メモ:** `finally` コールバックの中で `throw` （あるいは拒否されたプロミスを返すこと）しても、返されたプロミスは拒否されます。例えば、 `Promise.reject(3).finally(() => { throw 99; })` と `Promise.reject(3).finally(() => Promise.reject(99))` はどちらも `99` という理由をつけて、返ってきたプロミスを拒否することになります。

{{jsxref("Promise/catch", "catch()")}} と同様に、 `finally()` は内部的に呼び出されたオブジェクトの `then` メソッドを呼び出します。もし `onFinally` が関数でない場合、 `then()` は `onFinally` を両方の引数として呼び出されます。これは {{jsxref("Promise.prototype.then()")}} にとって、有益なハンドラーが添付されないということを意味します。そうでなければ、`then()` は内部で作成された 2 つの関数で呼び出され、以下のような振る舞いをします。

> [!WARNING]
> これは説明用のものであり、ポリフィルではありません。

```js
promise.then(
  (value) => Promise.resolve(onFinally()).then(() => value),
  (reason) =>
    Promise.resolve(onFinally()).then(() => {
      throw reason;
    }),
);
```

`finally()` は `then()` を呼び出すので、サブクラス化に対応しています。さらに、上記の {{jsxref("Promise.resolve()")}} の呼び出しに注目してください。実際には、 `onFinally()` の返値は `Promise.resolve()` と同じアルゴリズムで解決されますが、解決されたプロミスを構築するために使用される実際のコンストラクターはサブクラスとなります。 `finally()` はこのコンストラクターを [`promise.constructor[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species) で取得します。

## 例

### finally() の使用

```js
let isLoading = true;

fetch(myRequest)
  .then((response) => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then((json) => {
    /* さらに JSON を処理します */
  })
  .catch((error) => {
    console.error(error); // この行は、 console = {} の場合など、例外が発生する可能性がある
  })
  .finally(() => {
    isLoading = false;
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise.prototype.finally` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-promise)
- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}

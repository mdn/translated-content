---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: b67fd42cfb01dd4d9504c4182b462851588a0bad
---

{{JSRef}}{{SeeCompatTable}}

**`Promise.try()`** 静的メソッドは、あらゆる種類のコールバック（返す、発生する、同期的、非同期的）を受け取り、その結果を {{jsxref("Promise")}} でラップします。

## 構文

```js-nolint
Promise.try(func)
```

### 引数

- `func`
  - : 引数なしで同期的に呼び出される関数です。何らかの処理を行うことができ、返値を返すことも、エラーを発生させることも、プロミスを返すことも可能です。

### 返値

{{jsxref("Promise")}} で、次のようなものです。

- `func` が同期的に値を返す場合は、すでに履行されたもの。
- `func` が同期的にエラーを発生した場合は、すでに拒否されたもの。
- 非同期で履行または拒否された場合、`func` はプロミスを返します。

## 解説

コールバックを受け取る API もあります。 コールバックは同期または非同期のどちらでも可能です。 結果をプロミスでラップすることで、すべてを統一的に処理したい場合、最もわかりやすい方法は、{{jsxref("Promise/resolve", "Promise.resolve(func())")}} でしょう。 問題は、`func()` で同期敵にエラーが発生した場合、このエラーが補足されず、拒否されたプロミスに変換されないことです。

一般的な手法（履行されたか拒否されたかに関わらず、関数呼び出しの結果をプロミスに持ち上げる）は、以下のようにすることが多いです。

```js
new Promise((resolve) => resolve(func()));
```

しかし、`Promise.try()` はもっと便利です。

```js
Promise.try(func);
```

組み込みの `Promise()` コンストラクターでは、実行時に発生したエラーは自動的に捕捉され、拒否に変換されます。そのため、これらの 2 つの手法はほぼ同等ですが、`Promise.try()` の方がより簡潔で読みやすい点が異なります。

なお、`Promise.try()` はこれと非常に似ていますが、同等ではありません。

```js
Promise.resolve().then(func);
```

違いは、{{jsxref("Promise/then", "then()")}} に渡されたコールバックは常に非同期で呼び出されるのに対し、`Promise()` コンストラクターの実行は同期で呼び出されることです。 `Promise.try` も関数を同期で呼び出し、可能であれば即座にプロミスを解決します。

`Promise.try()` を {{jsxref("Promise/catch", "catch()")}} および {{jsxref("Promise/finally", "finally()")}} と組み合わせて使用することで、単一の連鎖で同期的および非同期的なエラーの両方を処理することができ、プロミスエラー処理を同期的エラー処理とほとんど同じように見せることができます。

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
Promise.try = function (func) {
  return new this((resolve, reject) => {
    try {
      resolve(func());
    } catch (error) {
      reject(error);
    }
  });
};
```

`Promise.try()` の実装方法（つまり、`try...catch`）により、`this` を任意のカスタムコンストラクターに設定して `Promise.try()` を安全に呼び出すことができ、同期してエラーが発生することはありません。

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the native
    // promise's, but Promise.try() just calls resolve
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const p = Promise.try.call(NotPromise, () => "hello");
// Logs: Resolved hello

const p2 = Promise.try.call(NotPromise, () => {
  throw new Error("oops");
});
// Logs: Rejected Error: oops
```

`Promise()` とは異なり、この `NotPromise()` コンストラクターは、executor を実行する際に例外を適切に処理しません。しかし、`throw`が発生しても、`Promise.try()` は例外を捕捉し、それを `reject()` に渡してログ出力します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise.try` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#promisetry)
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)ガイド
- {{jsxref("Promise")}}
- [`Promise()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

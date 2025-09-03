---
title: Promise.reject()
short-title: reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Promise.reject()`** は静的メソッドで、引数で与えられた理由で拒否された `Promise` オブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Promise.reject()")}}

```js interactive-example
function resolved(result) {
  console.log("Resolved");
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error("fail")).then(resolved, rejected);
// 予想される結果: Error: fail
```

## 構文

```js-nolint
Promise.reject(reason)
```

### 引数

- `reason`
  - : この `Promise` が拒否された理由です。

### 返値

与えられた理由で拒否された {{jsxref("Promise")}} です。

## 解説

静的な `Promise.reject` 関数は拒否された `Promise` を返します。デバッグのために捕捉するエラーを選別したい場合は、 `reason` を `instanceof` {{jsxref("Error")}} にかけると良いでしょう。

`Promise.reject()` は汎用的であり、サブクラス化に対応しています。つまり、 `Promise` のサブクラスで呼び出すことができ、その結果はサブクラスの種類のプロミスになります。これを行うには、サブクラスのコンストラクターは [`Promise()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) コンストラクターと同じ呼び出し定義を実装する必要があります。これは、 `resolve` と `reject` コールバックを引数として呼び出すことができる単一の `executor` 関数を引数に取ります。 `Promise.reject()` は、本質的に `new Promise((resolve, reject) => reject(reason))` の短縮形です。

{{jsxref("Promise.resolve()")}} とは異なり、 `Promise.reject()` は `reason` がすでに `Promise` であっても、常に新しい `Promise` オブジェクトで `reason` をラップします。

## 例

### 静的な Promise.reject() メソッドの使用

```js
Promise.reject(new Error("fail")).then(
  () => {
    // not called
  },
  (error) => {
    console.error(error); // Stacktrace
  },
);
```

### プロミスの拒否

{{jsxref("Promise.resolve")}} とは異なり、 `Promise.reject` メソッドは既存の `Promise` インスタンスを再利用することはありません。常に `reason` を包んだ新しい `Promise` インスタンスを返します。

```js
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
```

### Promise 以外のコンストラクターに対する reject() の呼び出し

`Promise.reject()` は汎用的なメソッドです。これは `Promise()` コンストラクターと同じ呼び出し定義を実装した任意のコンストラクターで呼び出すことができます。例えば、 `console.log` を `reject` として渡すコンストラクターで呼び出すことができます。

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the
    // native promise's, but Promise.reject() calls them in the same way.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

Promise.reject.call(NotPromise, "foo"); // Logs "Rejected foo"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}

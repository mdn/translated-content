---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Promise
  - リファレンス
browser-compat: javascript.builtins.Promise.reject
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/reject
---
{{JSRef}}

**`Promise.reject()`** メソッドは、引数で与えられた理由で拒否された `Promise` オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/promise-reject.html")}}

## 構文

```js
Promise.reject(reason);
```

### 引数

- `reason`
  - : この `Promise` が拒否された理由です。

### 返値

与えられた理由で拒否された {{jsxref("Promise")}} です。

## 解説

静的な `Promise.reject` 関数は拒否された `Promise` を返します。デバッグのために捕捉するエラーを選別したい場合は、 `reason` を `instanceof` {{jsxref("Error")}} にかけると良いでしょう。

## 例

### 静的な Promise.reject() メソッドの使用

```js
Promise.reject(new Error('fail')).then(function() {
  // 呼び出されない
}, function(error) {
  console.error(error); // Stacktrace
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}

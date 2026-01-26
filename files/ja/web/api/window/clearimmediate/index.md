---
title: "Window: clearImmediate() メソッド"
short-title: clearImmediate()
slug: Web/API/Window/clearImmediate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

このメソッドは、{{DOMxRef("window.setImmediate")}} で指定されたアクションをクリアします。

## 構文

```js-nolint
clearImmediate(immediateID)
```

### 引数

- `immediateID`
  - : {{DOMxRef("window.setImmediate")}} から返された ID です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
let immediateID = setImmediate(() => {
  // 何かのコードを実行
});

document.getElementById("button").addEventListener(() => {
  clearImmediate(immediateID);
});
```

## 仕様書

現在の仕様には含まれていません。
[効率的なスクリプト実行](https://w3c.github.io/setImmediate/#si-setImmediate)仕様は開発が停止されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Polyfill of `clearImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- {{DOMxRef("Window.setImmediate()")}}

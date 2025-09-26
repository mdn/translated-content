---
title: "EditContext: attachedElements() メソッド"
slug: Web/API/EditContext/attachedElements
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの **`attachedElements()`** メソッドは、要素が 1 個だけ格納された {{jsxref("Array")}} を返します。この要素は、この `EditContext` オブジェクトと関連付けられた要素です。

## 構文

```js-nolint
attachedElements()
```

### 返値

1 個の {{domxref("HTMLElement")}} オブジェクトが格納された {{jsxref("Array")}} です。

1 個の `EditContext` のインスタンスに関連付けられる要素は 1 個だけなので、返される配列は常に 1 個の要素を持ちます。将来この API が複数の要素の関連付けに対応するように拡張された場合、返り値は複数の要素が格納された配列になるでしょう。

## 例

### `EditContext` のインスタンスに関連付けられた要素の取得

この例は、`attachedElements` メソッドを用いて `EditContext` のインスタンスに関連付けられた要素を取得する方法を示しています。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

const attachedElements = editContext.attachedElements();
console.log(attachedElements[0] === canvas); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("EditContext")}} インターフェイス

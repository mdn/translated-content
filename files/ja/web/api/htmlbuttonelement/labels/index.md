---
title: "HTMLButtonElement: labels プロパティ"
slug: Web/API/HTMLButtonElement/labels
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

**`HTMLButtonElement.labels`** は読み取り専用プロパティで、この
{{HTMLElement("button")}} 要素に関連付けられた {{HTMLElement("label")}} 要素を {{domxref("NodeList")}} で返します。

## 値

{{domxref("NodeList")}} で、この `<button>` 要素に関連付けられた `<label>` 要素を返します。

## 例

### HTML

```html
<label id="label1" for="test">Label 1</label>
<button id="test">Button</button>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("test");
  for (const label of button.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

### 結果

{{EmbedLiveSample("Examples", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

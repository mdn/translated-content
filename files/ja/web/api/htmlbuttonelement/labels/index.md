---
title: HTMLButtonElement.labels
slug: Web/API/HTMLButtonElement/labels
tags:
  - API
  - HTML DOM
  - プロパティ
  - リファレンス
browser-compat: api.HTMLButtonElement.labels
translation_of: Web/API/HTMLButtonElement/labels
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
window.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("test");
  for(var i = 0; i < button.labels.length; i++) {
    console.log(button.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

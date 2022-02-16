---
title: HTMLInputElement.labels
slug: Web/API/HTMLInputElement/labels
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLInputElement.labels
translation_of: Web/API/HTMLInputElement/labels
---
{{APIRef("DOM")}}

**`HTMLInputElement.labels`** は読み取り専用プロパティで、 `hidden` 以外の {{HTMLElement("input")}} 要素に関連付けられた {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。この要素が `hidden` 型であった場合は、このプロパティは `null` を返します。

## 構文

```js
var labelElements = input.labels;
```

### 返値

{{domxref("NodeList")}} で、その `<input>` 要素に関連付けられた `<label>` 要素が入ります。

## 例

### HTML

```html
<label id="label1" for="test">Label 1</label>
<input id="test"/>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("test");
  for(var i = 0; i < input.labels.length; i++) {
    console.log(input.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: HTMLSelectElement.labels
slug: Web/API/HTMLSelectElement/labels
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLSelectElement.labels
translation_of: Web/API/HTMLSelectElement/labels
---
{{APIRef("DOM")}}

**`HTMLSelectElement.labels`** は読み取り専用のプロパティで、{{HTMLElement("select")}} 要素に関連付けられた {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。

## 構文

```js
var labelElements = select.labels;
```

### 返値

{{domxref("NodeList")}} で、`<select>` 要素に関連付けられた `<label>` 要素が入ります。

## 例

### HTML

```html
<label id="label1" for="test">Label 1</label>
<select id="test">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const select = document.getElementById("test");
  for(var i = 0; i < select.labels.length; i++) {
    console.log(select.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

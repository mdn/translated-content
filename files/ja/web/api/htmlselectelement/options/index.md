---
title: HTMLSelectElement.options
slug: Web/API/HTMLSelectElement/options
tags:
  - API
  - HTMLSelectElement
  - Options
  - プロパティ
  - 読み取り専用
  - ウェブ
browser-compat: api.HTMLSelectElement.options
translation_of: Web/API/HTMLSelectElement/options
---
{{APIRef("DOM")}}

**`HTMLSelectElement.options`** は読み取り専用のプロパティで、{{domxref("HTMLOptionsCollection")}} で {{HTMLElement("select")}} 要素に含まれる {{HTMLElement("option")}} 要素を返します。

## 構文

```js
var options = select.options;
```

## 返値

{{domxref("HTMLOptionsCollection")}} で、`<select>` 要素に含まれる `<option>` 要素を返します。

<h2 id="Example">例</h2>

### HTML

```html
<label for="test">ラベル</label>
<select id="test">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const select = document.getElementById("test");
  for(var i = 0; i < select.options.length; i++) {
    console.log(select.options[i].label); // "Option 1" および "Option 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

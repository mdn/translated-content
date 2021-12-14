---
title: HTMLSelectElement.selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
tags:
  - API
  - HTML DOM
  - HTML フォーム
  - HTMLSelectElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLSelectElement.selectedIndex
translation_of: Web/API/HTMLSelectElement/selectedIndex
---
{{APIRef("HTML DOM")}}

**`HTMLSelectElement.selectedIndex`** は `long` 値であり、選択されている {{HTMLElement("option")}} 要素のうち、`multiple` の値に応じて最初または最後のものを返します。`-1` の値は選択されている要素がないことを示します。

## 構文

```js
var index = selectElem.selectedIndex;
selectElem.selectedIndex = index;
```

<h2 id="Example">例</h2>

### HTML

```html
<p id="p">selectedIndex: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
var selectElem = document.getElementById('select')
var pElem = document.getElementById('p')

// When a new <option> is selected
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Add that data to the <p>
  pElem.innerHTML = 'selectedIndex: ' + index;
})
```

{{EmbedLiveSample("Example", "200px", "80px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

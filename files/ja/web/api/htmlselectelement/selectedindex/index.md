---
title: "HTMLSelectElement: selectedIndex プロパティ"
short-title: selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLSelectElement.selectedIndex`** は `long` 値であり、選択されている {{HTMLElement("option")}} 要素のうち、`multiple` の値に応じて最初または最後のものを返します。`-1` の値は選択されている要素がないことを示します。

## 値

数値です。

## 例

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
const selectElem = document.getElementById("select");
const pElem = document.getElementById("p");

// When a new <option> is selected
selectElem.addEventListener("change", () => {
  const index = selectElem.selectedIndex;
  // Add that data to the <p>
  pElem.textContent = `selectedIndex: ${index}`;
});
```

### 結果

{{EmbedLiveSample("Examples", "200px", "120px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

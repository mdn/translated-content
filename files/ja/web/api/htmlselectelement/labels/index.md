---
title: "HTMLSelectElement: labels プロパティ"
short-title: labels
slug: Web/API/HTMLSelectElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLSelectElement.labels`** は読み取り専用のプロパティで、この {{HTMLElement("select")}} 要素に関連付けられた {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。

## 値

{{domxref("NodeList")}} で、`<select>` 要素に関連付けられた `<label>` 要素が入ります。

## 例

### HTML

```html
<label id="label1" for="test">ラベル 1</label>
<select id="test">
  <option value="1">選択肢 1</option>
  <option value="2">選択肢 2</option>
</select>
<label id="label2" for="test">ラベル 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("test");
  for (const label of select.labels) {
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

---
title: "HTMLSelectElement: options プロパティ"
short-title: options
slug: Web/API/HTMLSelectElement/options
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

**`HTMLSelectElement.options`** は読み取り専用のプロパティで、この {{HTMLElement("select")}} 要素に含まれる {{HTMLElement("option")}} のリストを {{domxref("HTMLOptionsCollection")}} の形で返します。

### 値

{{domxref("HTMLOptionsCollection")}} 型で、この `<select>` 要素に含まれている `<options>` を返します。

## 例

### HTML

```html
<label for="test">ラベル</label>
<select id="test">
  <option value="1">選択肢 1</option>
  <option value="2">選択肢 2</option>
</select>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("test");
  for (const option of select.options) {
    console.log(option.label); // "Option 1" と "Option 2"
  }
});
```

### 結果

{{EmbedLiveSample("Examples", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

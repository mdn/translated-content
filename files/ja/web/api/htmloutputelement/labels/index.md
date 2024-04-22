---
title: "HTMLOutputElement: labels プロパティ"
short-title: labels
slug: Web/API/HTMLOutputElement/labels
---

{{APIRef("DOM")}}

**`HTMLOutputElement.labels`** は読み取り専用プロパティで、この {{HTMLElement("output")}} 要素に関連付けられた {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。

## 値

この `<output>` 要素に関連付けられた `<label>` 要素の {{domxref("NodeList")}} を返します。

## 例

### HTML

```html
<label id="label1" for="test">ラベル 1</label>
<output id="test">Output</output>
<label id="label2" for="test">ラベル 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("test");
  for (const label of output.labels) {
    console.log(label.textContent); // "ラベル 1" and "ラベル 2"
  }
});
```

### 結果

{{EmbedLiveSample("Examples", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

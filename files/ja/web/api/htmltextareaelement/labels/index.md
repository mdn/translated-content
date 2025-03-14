---
title: "HTMLTextAreaElement: labels プロパティ"
short-title: labels
slug: Web/API/HTMLTextAreaElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

**`HTMLTextAreaElement.labels`** は読み取り専用のプロパティで、この
{{HTMLElement("textArea")}} 要素に関連付けられた {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。

## 値

{{domxref("NodeList")}} で、この `<textArea>` 要素に関連付けられた `<label>` 要素が入ります。

## 例

### HTML

```html
<label id="label1" for="test">Label 1</label>
<textarea id="test">Some text</textarea>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("test");
  for (const label of textArea.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

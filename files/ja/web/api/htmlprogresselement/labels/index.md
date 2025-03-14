---
title: "HTMLProgressElement: labels プロパティ"
short-title: labels
slug: Web/API/HTMLProgressElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

**`HTMLProgressElement.labels`** は読み取り専用プロパティで、この {{HTMLElement("progress")}} 要素に関連付けられている {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。

## 値

この `<progress>` 要素に結びつけられている `<label>` 要素の入った {{domxref("NodeList")}} です。

## 例

### HTML

```html
<label id="label1" for="test">Label 1</label>
<progress id="test" value="70" max="100">70%</progress>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("test");
  for (const label of progress.labels) {
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

---
title: "HTMLInputElement: labels プロパティ"
short-title: labels
slug: Web/API/HTMLInputElement/labels
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

**`HTMLInputElement.labels`** は読み取り専用プロパティで、{{HTMLElement("input")}} 要素に関連付けられた {{HTMLElement("label")}} 要素を {{domxref("NodeList")}} で返します。この要素が `hidden` 型であった場合は、このプロパティは `null` を返します。

## 値

{{domxref("NodeList")}} で、その `<input>` 要素に関連付けられた `<label>` 要素が入ります。

## 例

### HTML

```html
<label id="label1" for="test">ラベル 1</label>
<input id="test" />
<label id="label2" for="test">ラベル 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("test");
  for (const label of input.labels) {
    console.log(label.textContent); // "ラベル 1" および "ラベル 2"
  }
});
```

### 結果

{{EmbedLiveSample("Examples", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

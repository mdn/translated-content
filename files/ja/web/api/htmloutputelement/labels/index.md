---
title: "HTMLOutputElement: labels プロパティ"
short-title: labels
slug: Web/API/HTMLOutputElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

**`HTMLOutputElement.labels`** は読み取り専用プロパティで、この {{HTMLElement("output")}} 要素に関連付けられた {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。

## 値

この `<output>` 要素に関連付けられた `<label>` 要素の {{domxref("NodeList")}} を返します。

## 例

### HTML

```html
<label id="label1" for="test">ラベル 1</label>
<output id="test">出力</output>
<label id="label2" for="test">ラベル 2</label>
```

### JavaScript

```js
const output = document.getElementById("test");
for (const label of output.labels) {
  console.log(label.textContent); // "ラベル 1" と "ラベル 2"
}
```

{{EmbedLiveSample("例", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

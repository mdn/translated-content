---
title: "HTMLElement: isContentEditable プロパティ"
short-title: isContentEditable
slug: Web/API/HTMLElement/isContentEditable
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.isContentEditable`** は読み取り専用のプロパティで、論理値であり、要素の内容が編集可能な場合は `true` を返します。それ以外の場合は `false` を返します。

## 値

論理値です。

## 例

### HTML

```html
<p id="firstParagraph">編集不可能な段落</p>
<p id="secondParagraph" contenteditable="true">編集可能な段落</p>

<p id="infoText1">最初の段落を編集できますか？</p>
<p id="infoText2">2 番目の段落を編集できますか？</p>
```

### JavaScript

```js
const firstParagraph = document.getElementById("firstParagraph");
const secondParagraph = document.getElementById("secondParagraph");

const infoText1 = document.getElementById("infoText1");
const infoText2 = document.getElementById("infoText2");

infoText1.textContent += ` ${firstParagraph.isContentEditable}`;
infoText2.textContent += ` ${secondParagraph.isContentEditable}`;
```

### 結果

{{ EmbedLiveSample('Examples', '100%', 160) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement/contentEditable")}}
- [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) グローバル属性

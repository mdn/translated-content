---
title: HTMLElement.isContentEditable
slug: Web/API/HTMLElement/isContentEditable
tags:
  - API
  - 編集
  - HTML DOM
  - HTMLElement
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.HTMLElement.isContentEditable
translation_of: Web/API/HTMLElement/isContentEditable
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.isContentEditable`** は読み取り専用のプロパティで、論理型であり、要素の内容が編集可能な場合は `true` を返します。それ以外の場合は `false` を返します。

## 値

論理値です。

## 例

### HTML

```html
<p id="myText1">編集不可能な段落</p>
<p id="myText2" contentEditable="true">編集可能な段落</p>

<p id="infoText1">最初の段落を編集できますか？</p>
<p id="infoText2">2 番目の段落を編集できますか？</p>
```

### JavaScript

```js
document.getElementById('infoText1').innerHTML += document.getElementById('myText1').isContentEditable;
document.getElementById('infoText2').innerHTML += document.getElementById('myText2').isContentEditable;
```

### 結果

{{ EmbedLiveSample('Example') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement/contentEditable")}}
- {{htmlattrxref("contenteditable")}} グローバル属性

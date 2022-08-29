---
title: HTMLTableElement.createCaption()
slug: Web/API/HTMLTableElement/createCaption
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - メソッド
  - NeedsSpecTable
  - リファレンス
browser-compat: api.HTMLTableElement.createCaption
translation_of: Web/API/HTMLTableElement/createCaption
---
{{APIRef("HTML DOM")}}

**`HTMLTableElement.createCaption()`** メソッドは、この {{HtmlElement("table")}} に関連付けられた {{HtmlElement("caption")}} 要素を返します。
この表に `<caption>` 要素がない場合が、このメソッドは生成して返します。

> **Note:** キャプションが存在しない場合、 `createCaption()` は新しいキャプションを表に直接挿入します。 {{domxref("Document.createElement()")}} を使用して新しい `<caption>` 要素を生成する場合とは異なり、キャプションを個別に追加する必要はありません。

## 構文

```js
HTMLTableElement = table.createCaption();
```

### 返値

{{domxref("HTMLTableCaptionElement")}}

## 例

この例は JavaScript を使用して、表に最初は存在しないキャプションを追加します。

### HTML

```html
<table>
  <tr><td>Cell 1.1</td><td>Cell 1.2</td><td>Cell 1.3</td></tr>
  <tr><td>Cell 2.1</td><td>Cell 2.2</td><td>Cell 2.3</td></tr>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');
let caption = table.createCaption();
caption.textContent = 'このキャプションは JavaScript で生成されました。';
```

### 例

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

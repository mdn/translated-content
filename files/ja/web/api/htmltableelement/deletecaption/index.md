---
title: HTMLTableElement.deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - メソッド
  - NeedsSpecTable
  - リファレンス
browser-compat: api.HTMLTableElement.deleteCaption
translation_of: Web/API/HTMLTableElement/deleteCaption
---
{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteCaption()`** メソッドは、 {{HtmlElement("caption")}} 要素をこの {{HtmlElement("table")}} から削除します。この表に関連付けられた `<caption>` 要素がない場合は、このメソッドは何もしません。

## 構文

```js
HTMLTableElement.deleteCaption()
```

## 例

この例は、 JavaScript を使用して表のキャプションを削除します。

### HTML

```html
<table>
  <caption>このキャプションは削除されます。</caption>
  <tr><td>セル 1.1</td><td>セル 1.2</td></tr>
  <tr><td>セル 2.1</td><td>セル 2.2</td></tr>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');
table.deleteCaption();
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

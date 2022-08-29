---
title: HTMLTableElement.deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - メソッド
  - NeedsSpecTable
  - リファレンス
browser-compat: api.HTMLTableElement.deleteTHead
translation_of: Web/API/HTMLTableElement/deleteTHead
---
{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteTHead()`** は、 {{HTMLElement("thead")}} 要素をこの {{HtmlElement("table")}} から取り除きます。

## 構文

```js
HTMLTableElement.deleteTHead();
```

## 例

この例は、 JavaScript を使用して表のヘッダーを削除します。

### HTML

```html
<table>
  <thead><th>名前</th><th>職業</th></thead>
  <tr><td>Bob</td><td>配管工</td></tr>
  <tr><td>Jim</td><td>屋根職人</td></tr>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');
table.deleteTHead();
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

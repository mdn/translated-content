---
title: HTMLTableElement.deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - メソッド
  - NeedsSpecTable
  - リファレンス
browser-compat: api.HTMLTableElement.deleteTFoot
translation_of: Web/API/HTMLTableElement/deleteTFoot
---
{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteTFoot()`** は、 {{HTMLElement("tfoot")}} 要素をこの {{HtmlElement("table")}} から取り除きます。

## 構文

```js
HTMLTableElement.deleteTFoot();
```

## 例

この例は、 JavaScript を使用して表のフッターを削除します。

### HTML

```html
<table>
  <thead><th>名前</th><th>スコア</th></thead>
  <tr><td>Bob</td><td>541</td></tr>
  <tr><td>Jim</td><td>225</td></tr>
  <tfoot><th>平均</th><td>383</td></tfoot>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');
table.deleteTFoot();
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

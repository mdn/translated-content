---
title: HTMLTableRowElement.rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
tags:
  - API
  - HTML DOM
  - NeedsSpecTable
  - プロパティ
  - リファレンス
browser-compat: api.HTMLTableRowElement.rowIndex
translation_of: Web/API/HTMLTableRowElement/rowIndex
---
{{ APIRef("HTML DOM") }}

**`HTMLTableRowElement.rowIndex`** は読み取り専用プロパティで、表 ({{HtmlElement("table")}}) 全体に対する行の相対的な位置を表します。

{{HtmlElement("thead")}}、{{HtmlElement("tbody")}}、{{HtmlElement("tfoot")}} の各要素が HTML の中で順不同であっても、ブラウザーは表を正しい順序で描画します。従って行のカウントは `<thead>` から `<tbody>` へ、 `<tbody>` から `<tfoot>` へと進みます。

## 値

行の位置を返します。行が表に所属していない場合は `-1` です。

## 例

この例は、 JavaScript を使用して表のすべての行に行番号を振ります。

### HTML

```html
<table>
  <thead>
    <tr><th>品目</th>        <th>価格</th></tr>
  </thead>
  <tbody>
    <tr><td>バナナ</td>     <td>$2</td></tr>
    <tr><td>オレンジ</td>     <td>$8</td></tr>
    <tr><td>トップサーロイン</td> <td>$20</td></tr>
  </tbody>
  <tfoot>
    <tr><td>合計</td>       <td>$30</td></tr>
  </tfoot>
</table>
```

### JavaScript

```js
let rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  let z = document.createElement("td");
  z.textContent = `(#${row.rowIndex} 行目)`;
  row.appendChild(z);
});
```

### 結果

{{EmbedLiveSample("Example")}}

## ブラウザーの互換性

{{Compat}}

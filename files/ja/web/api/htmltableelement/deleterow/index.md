---
title: HTMLTableElement.deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - メソッド
  - NeedsSpecTable
  - リファレンス
browser-compat: api.HTMLTableElement.deleteRow
translation_of: Web/API/HTMLTableElement/deleteRow
---
{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteRow()`** メソッドは、特定の行 ({{HtmlElement("tr")}}) をこの {{HtmlElement("table")}} から削除します。

## 構文

```js
HTMLTableElement.deleteRow(index)
```

### 引数

- `index`
  - : `index` は整数で、削除する行を表します。
    ただし、特殊な値 `-1` を使用すると、表の最後の行を削除することができます。

### 返値

返値なし

### 例外

引数で指定された削除する行番号が、利用可能な行数以上である場合、あるいは負の数で、表の最終行を表す特別な値 `-1` ではない場合、例外 `INDEX_SIZE_ERR` が発生します。

## 例

この例は、 JavaScript を使用して表の 2 番目の行を削除します。

### HTML

```html
<table>
  <tr><td>セル 1.1</td><td>セル 1.2</td><td>セル 1.3</td></tr>
  <tr><td>セル 2.1</td><td>セル 2.2</td><td>セル 2.3</td></tr>
  <tr><td>セル 3.1</td><td>セル 3.2</td><td>セル 3.3</td></tr>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');

// 2 番目の行を削除
table.deleteRow(1);
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

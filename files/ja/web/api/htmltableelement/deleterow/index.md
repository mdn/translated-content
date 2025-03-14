---
title: "HTMLTableElement: deleteRow() メソッド"
short-title: deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteRow()`** メソッドは、特定の行 ({{HtmlElement("tr")}}) をこの {{HtmlElement("table")}} から削除します。

## 構文

```js-nolint
deleteRow(index)
```

### 引数

- `index`
  - : `index` は整数で、削除する行を表します。
    ただし、特殊な値 `-1` を使用すると、表の最後の行を削除することができます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` が利用可能な行数以上である場合、あるいは負の数で、表の最終行を表す特別な値 `-1` ではない場合に発生します。

## 例

この例は、 JavaScript を使用して表の 2 番目の行を削除します。

### HTML

```html
<table>
  <tr>
    <td>セル 1.1</td>
    <td>セル 1.2</td>
    <td>セル 1.3</td>
  </tr>
  <tr>
    <td>セル 2.1</td>
    <td>セル 2.2</td>
    <td>セル 2.3</td>
  </tr>
  <tr>
    <td>セル 3.1</td>
    <td>セル 3.2</td>
    <td>セル 3.3</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");

// 2 番目の行を削除
table.deleteRow(1);
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

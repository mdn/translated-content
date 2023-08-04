---
title: "HTMLTableElement: insertRow() メソッド"
short-title: insertRow()
slug: Web/API/HTMLTableElement/insertRow
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.insertRow()`** メソッドは、新しい行を表す ({{HtmlElement("tr")}}) をこの {{HtmlElement("table")}} に挿入し、その新しい行への参照を返します。

表に複数の {{HtmlElement("tbody")}} 要素があった場合、既定では、新しい行は最後の `<tbody>` に挿入されます。指定した `<tbody>` にこの行を挿入するには、次のようにします。

```js
let specific_tbody = document.getElementById(tbody_id);
let row = specific_tbody.insertRow(index);
```

> **メモ:** `insertRow()` は、表に直接行を挿入します。 {{domxref("Document.createElement()")}} を使用して新しい `<tr>` 要素を作成する場合のように、行を個別に追加する必要はありません。

## 構文

```js-nolint
insertRow()
insertRow(index)
```

{{domxref("HTMLTableElement")}} は HTML の {{HtmlElement("table")}} 要素への参照です。

### 引数

- `index` {{optional_inline}}
  - : 新しい行の位置です。 `index` が `-1` または行数と同じであった場合は、最後の行として追加されます。
    `index` を省略した場合の既定値は `-1` です。

### 返値

新しい行を参照する {{domxref("HTMLTableRowElement")}} です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` が行数よりも大きい場合に発生します。

## 例

この例では `insertRow(-1)` を使用して、表に新しい行を追加します。

それから {{domxref("HTMLTableRowElement.insertCell()")}} を使用して新しいセルをその行に追加します。（有効な HTML にするためには、 `<tr>` には 1 つ以上の `<td>` 要素が必要です。）最後に、 {{domxref("Document.createTextNode()")}} と {{domxref("Node.appendChild()")}} を使用してそのセルにテキストを追加します。

### HTML

```html
<table id="my-table">
  <tr>
    <td>行 1</td>
  </tr>
  <tr>
    <td>行 2</td>
  </tr>
  <tr>
    <td>行 3</td>
  </tr>
</table>
```

### JavaScript

```js
function addRow(tableID) {
  // 表への参照を取得
  let tableRef = document.getElementById(tableID);

  // 表の末尾に行を挿入
  let newRow = tableRef.insertRow(-1);

  // その行の 0 の位置にセルを挿入
  let newCell = newRow.insertCell(0);

  // そのセルにテキストノードを追加
  let newText = document.createTextNode("新しい最下行");
  newCell.appendChild(newText);
}

// addRow() を表の ID で呼び出す
addRow("my-table");
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTableRowElement.insertCell()")}}
- 行を表す HTML 要素: {{domxref("HTMLTableRowElement")}}

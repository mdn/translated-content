---
title: "HTMLTableRowElement: insertCell() メソッド"
short-title: insertCell()
slug: Web/API/HTMLTableRowElement/insertCell
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLTableRowElement.insertCell()`** メソッドは、新しいセル ({{HtmlElement("td")}}) を表の行 ({{HtmlElement("tr")}}) に挿入し、そのセルの参照を返します。

> **メモ:** `insertCell()` はセルを直接行に挿入します。 {{domxref("Document.createElement()")}} を使用して新しい `<td>` 要素を作成した場合のように、 {{domxref("Node.appendChild()")}} を使用して個別にセルを追加する必要はありません。
>
> ただし、 `insertCell()` を使用して新しい `<th>` 要素を作成することはできません。

## 構文

```js-nolint
insertCell()
insertCell(index)
```

{{domxref("HTMLTableRowElement")}} は HTML の {{HtmlElement("tr")}} 要素への参照です。

### 引数

- `index` {{optional_inline}}
  - : 新しいセルの位置を指定します。 `index` が `-1` またはセル数と等しい場合、そのセルは行の最後のセルとして追加されます。 `index` が省略された場合は、既定で `-1` となります。

### 返値

{{domxref("HTMLTableCellElement")}} で、新しいセルへの参照です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` がセル数よりも大きい場合に発生します。

## 例

この例では、 {{domxref("HTMLTableElement.insertRow()")}} を使用して表に新しい行を追加します。

それから `insertCell(0)` を使用して、新しいセルを新しい行に追加します。（有効な HTML にするためには、 `<tr>` は 1 つ以上の `<td>` 要素を持つ必要があります。）最後に、 {{domxref("Document.createTextNode()")}} と {{domxref("Node.appendChild()")}} を使用していくらかのテキストを追加します。

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

  // 表の末尾に行を追加
  let newRow = tableRef.insertRow(-1);

  // 行の 0 の位置にセルを追加
  let newCell = newRow.insertCell(0);

  // セルにテキストノードを追加
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

- {{domxref("HTMLTableElement.insertRow()")}}
- セルを表す HTML 要素: {{domxref("HTMLTableCellElement")}}

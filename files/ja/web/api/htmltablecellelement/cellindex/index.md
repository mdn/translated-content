---
title: "HTMLTableCellElement: cellIndex プロパティ"
short-title: cellIndex
slug: Web/API/HTMLTableCellElement/cellIndex
l10n:
  sourceCommit: 3466b077e26ce0293b7b95cba0bd05559c3a3194
---

{{ APIRef("HTML DOM") }}

**`cellIndex`** は {{domxref("HTMLTableCellElement")}} インターフェイスの読み取り尾専用プロパティで、行 ({{htmlelement("tr")}}) の中におけるセルの位置を表します。最初のセルのインデックスは `0` です。

## 値

セルのインデックスを返します。セルがどの行にも属していない場合は `-1` を返します。

## 例

この例では、`tbody` の 1 行目のすべてのセル番号にラベルを追加します。

### HTML

```html
<table>
  <thead>
    <tr>
      <th>商品</th>
      <th>価格</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>バナナ</td>
      <td>$2</td>
    </tr>
    <tr>
      <td>米</td>
      <td>$2.5</td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### JavaScript

```js
const rows = document.querySelectorAll("tbody tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent} (セル #${cell.cellIndex})`;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

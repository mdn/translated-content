---
title: "HTMLTableCellElement: rowSpan プロパティ"
short-title: rowSpan
slug: Web/API/HTMLTableCellElement/rowSpan
l10n:
  sourceCommit: 2406bfdc031740afbd500a1fc953a76a4b7f8484
---

{{ APIRef("HTML DOM") }}

**`rowSpan`** は {{domxref("HTMLTableCellElement")}} インターフェイスのプロパティで、このセルがまたがる行の数を表します。これにより、セルは表の複数の行にまたがって空間を占めることができるようになります。これは [`rowspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性に対応しています。

## 値

行の数を表す正の値。`0`の場合は、その列の残りすべての行です。

> [!NOTE]
> 新しい値を設定する際、0 以外の値は、最も近い正の数値に丸められます。

## 例

この例では、本文の最初のセルがまたがる行の数を変更するための 2 つのボタンが提供されています。

### HTML

```html
<table>
  <thead>
    <tr>
      <th>列 1</th>
      <th>列 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td rowspan="2">2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
<button id="increase">rowspan を増やす</button>
<button id="decrease">rowspan を減らす</button>
<div>1 列目の 2 つ目のセルは <output>2</output> 行にまたがります。</div>
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
// 要素に関連するインターフェイスを取得する
const row = document.querySelectorAll("tbody tr")[1];
const cell = row.cells[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.rowSpan += 1;

  // 表示を更新
  output.textContent = cell.rowSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.rowSpan -= 1;

  // 表示を更新
  output.textContent = `${cell.rowSpan === 0 ? "all remaining" : cell.rowSpan}`;
});
```

### 結果

{{EmbedLiveSample("Examples", "100%", 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTableCellElement.colSpan")}}
- {{domxref("HTMLTableColElement.span")}}

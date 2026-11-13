---
title: "HTMLTableCellElement: colSpan プロパティ"
short-title: colSpan
slug: Web/API/HTMLTableCellElement/colSpan
l10n:
  sourceCommit: 2406bfdc031740afbd500a1fc953a76a4b7f8484
---

{{ APIRef("HTML DOM") }}

**`colSpan`** は {{domxref("HTMLTableCellElement")}} インターフェイスのプロパティで、このセルがまたがる列の数を表します。これにより、セルは表の複数の列にまたがって空間を占めることができるようになります。これは [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性に対応しています。

## 値

列の数を表す正の数値です。

> [!NOTE]
> 新しい値を設定する際、その値は最も近い正の数値に丸められます。

## 例

この例では、本文の最初のセルがまたがる列の数を変更するための 2 つのボタンが提供されています。

### HTML

```html
<table>
  <thead>
    <tr>
      <th>列 1</th>
      <th>列 2</th>
      <th>列 3</th>
      <th>列 4</th>
      <th>列 5</th>
      <th>列 6</th>
      <th>列 7</th>
      <th>列 8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
  </tbody>
</table>
<button id="increase">colspan を増やす</button>
<button id="decrease">colspan を減らす</button>
<div>最初のセルは <output>2</output> 列にまたがります。</div>
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
const cell = document.querySelectorAll("tbody tr td")[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.colSpan += 1;

  // 表示を更新
  output.textContent = cell.colSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.colSpan -= 1;

  // 表示を更新
  output.textContent = cell.colSpan;
});
```

### 結果

{{EmbedLiveSample("Examples", "100%", 175)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTableCellElement.rowSpan")}}
- {{domxref("HTMLTableColElement.span")}}

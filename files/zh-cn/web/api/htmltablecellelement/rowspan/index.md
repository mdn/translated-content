---
title: HTMLTableCellElement：rowSpan 属性
slug: Web/API/HTMLTableCellElement/rowSpan
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableCellElement")}} 接口的 **`rowSpan`** 只读属性表示此单元格必须跨越的行数；这允许单元格在表格的多行之间占据空间。它反映 [`rowSpan`](/zh-CN/docs/Web/HTML/Reference/Elements/td#rowSpan) 属性。

## 值

一个表示行数的正数。如果是 `0`，则表示该列中所有剩余行。

> [!NOTE]
> 当设置新值时，任何不是 0 的值会被*钳制*到最接近的严格正数。

## 示例

示例提供了两个按钮来修改主体第一个单元格的行跨度。

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
<button id="increase">增加列跨度</button>
<button id="decrease">减少列跨度</button>
<div>第一个列的第二个单元格跨越<output> 2 </output>行。</div>
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
// 获取相关接口元素
const row = document.querySelectorAll("tbody tr")[1];
const cell = row.cells[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.rowSpan = cell.rowSpan + 1;

  // 更新显示
  output.textContent = ` ${cell.rowSpan} `;
});

decreaseButton.addEventListener("click", () => {
  cell.rowSpan = cell.rowSpan - 1;

  // 更新显示
  output.textContent = `${cell.rowSpan == 0 ? "所有剩余的" : " " + cell.rowSpan + " "}`;
});
```

### 结果

{{EmbedLiveSample("示例", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLTableCellElement.colSpan")}}
- {{domxref("HTMLTableColElement.span")}}

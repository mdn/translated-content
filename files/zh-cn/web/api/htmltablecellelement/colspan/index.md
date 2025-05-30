---
title: HTMLTableCellElement：colSpan 属性
slug: Web/API/HTMLTableCellElement/colSpan
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableCellElement")}} 接口的 **`colSpan`** 只读属性表示此单元格必须跨越的列数；这允许单元格在表格的多列之间占据空间。它反映 [`colspan`](/zh-CN/docs/Web/HTML/Reference/Elements/td#colspan) 属性。

## 值

一个表示列数的正数。

> [!NOTE]
> 当设置新值时，该值会被*钳制*到最接近的严格正数。

## 示例

示例提供了两个按钮来修改主体第一个单元格的列跨度。

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
<button id="increase">增加列跨度</button>
<button id="decrease">减少列跨度</button>
<div>第一个单元格跨越 <output>2</output> 列。</div>
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
const cell = document.querySelectorAll("tbody tr td")[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.colSpan = cell.colSpan + 1;

  // 更新显示
  output.textContent = cell.colSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.colSpan = cell.colSpan - 1;

  // 更新显示
  output.textContent = cell.colSpan;
});
```

### 结果

{{EmbedLiveSample("示例", "100%", 175)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLTableCellElement.rowSpan")}}
- {{domxref("HTMLTableColElement.span")}}

---
title: HTMLTableRowElement：cells 属性
slug: Web/API/HTMLTableRowElement/cells
l10n:
  sourceCommit: e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableRowElement")}} 接口的 **`cells`** 只读属性返回一个行中包含单元格的动态 {{domxref("HTMLCollection")}}。`HTMLCollection` 是动态的，且当单元格添加或移除时可自动更新。

## 值

一个实时的 {{domxref("HTMLTableCellElement")}} 对象的 {{domxref("HTMLCollection")}}。

## 示例

此示例使用 `HTMLTableRowElement.cells` 展示行中单元格的数量。

### HTML

```html
<table>
  <thead>
    <tr>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      <th>C4</th>
      <th>C5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>单元格 1</td>
      <td>单元格 2</td>
    </tr>
  </tbody>
</table>

<button id="add">添加单元格</button>
<button id="remove">移除最后的单元格</button>
<div>第一行有 <output>2</output> 个单元格。</div>
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
const bodySection = document.querySelectorAll("tbody")[0];
const row = bodySection.rows[0]; // 选择表格体部分的第一行
const cells = row.cells; // 集合是动态的，因此总是最新的
const cellNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateCellNumber() {
  cellNumberDisplay.textContent = cells.length;
}

addButton.addEventListener("click", () => {
  // 在第一行的末尾添加单元格
  const newCell = row.insertCell();
  newCell.textContent = `单元格 ${cells.length}`;

  // 更新行数
  updateCellNumber();
});

removeButton.addEventListener("click", () => {
  // 从表格体删除行
  row.deleteCell(-1);

  // 更新行数
  updateCellNumber();
});
```

### 结果

{{EmbedLiveSample("示例", "100%", 175)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLTableRowElement.insertCell()")}}
- {{domxref("HTMLTableRowElement.deleteCell()")}}

---
title: HTMLTableRowElement：deleteCell() 方法
slug: Web/API/HTMLTableRowElement/deleteCell
l10n:
  sourceCommit: 712156520cf3aaca9f9b37d9a82831063eb9c87b
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLTableRowElement")}} 接口的 **`deleteCell()`** 方法从给定的 {{HtmlElement("tr")}} 中移除特定的行单元格。

## 语法

```js-nolint
deleteCell(index)
```

### 参数

- `index`
  - : 要移除单元格的单元格索引。如果 `index` 值是 `-1` 或者等于单元格的数量，则移除行的最后一个单元格。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `IndexSizeError` {{domxref("DOMException")}}
  - : 如果 `index` 大于单元格数或小于 `-1`，则抛出该异常。

## 示例

此示例使用 {{domxref("HTMLTableRowElement.insertCell()")}} 将新的单元格附加到行中。

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

- {{domxref("HTMLTableElement.insertRow()")}}
- 表示单元格的 HTML 元素：{{domxref("HTMLTableCellElement")}}

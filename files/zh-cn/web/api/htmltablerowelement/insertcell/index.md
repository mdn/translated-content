---
title: HTMLTableRowElement：insertCell() 方法
slug: Web/API/HTMLTableRowElement/insertCell
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLTableRowElement")}} 接口的 **`insertCell()`** 方法将一个新单元格（{{HtmlElement("td")}}）插入到表行（{{HtmlElement("tr")}}）中，然后返回新单元格的引用。

> [!NOTE]
> `insertCell()` 将单元格直接插入行中，如果使用 {{domxref("Document.createElement()")}} 创建新的 `<td>` 元素，则不需要使用 {{domxref("Node.appendChild()")}} 单独追加单元格。
>
> 你不能使用 `insertCell()` 来创建一个新的 `<th>` 元素。

## 语法

```js-nolint
insertCell()
insertCell(index)
```

### 参数

- `index` {{optional_inline}}
  - : 新单元格的单元格索引，如果 `index` 是 `-1` 或者等于单元格数，新单元格附加到行的最后一个单元格。如果省略 `index`，则默认值是 `-1`。

### 返回值

一个引用新单元格的 {{domxref("HTMLTableCellElement")}}。

### 异常

- `IndexSizeError` {{domxref("DOMException")}}
  - : 如果 `index` 大于单元格数，则抛出此异常。

## 示例

此示例使用 `HTMLTableRowElement.insertCell()` 将新的单元格附加到行中。

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

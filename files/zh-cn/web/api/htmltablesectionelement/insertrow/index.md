---
title: HTMLTableSectionElement：insertRow() 方法
slug: Web/API/HTMLTableSectionElement/insertRow
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLTableSectionElement")}} 接口的 **`insertRow()`** 方法在给定的表格分段元素（{{HTMLElement("thead")}}、{{HTMLElement("tfoot")}} 或 {{HTMLElement("tbody")}}）插入一个新行（{{HtmlElement("tr")}}），然后返回新行的引用。

> **备注：** `insertRow()` 将行直接插入到分段（section）中，该行不需要像使用 {{domxref("Document.createElement()")}} 创建新的 `<tr>` 元素那样单独追加。

## 语法

```js-nolint
insertRow()
insertRow(index)
```

### 参数

- `index` {{optional_inline}}
  - : 新行的行索引，如果 `index` 是 `-1` 或者等于行数，新行作为最后一行附加。如果省略 `index`，则默认值是 `-1`。

### 返回值

一个引用新行的 {{domxref("HTMLTableRowElement")}}。

### 异常

- `IndexSizeError` {{domxref("DOMException")}}
  - : 如果 `index` 大于行数或小于 `-1`，则抛出此异常。

## 示例

在这个示例中，有两个按钮允许你对表格主体添加和移除行，它还使用表中当前行数更新 {{HTMLElement("output")}} 元素。

### HTML

```html
<table>
  <thead>
    <th>列 1</th>
    <th>列 2</th>
    <th>列 3</th>
  </thead>
  <tbody>
    <tr>
      <td>X</td>
      <td>Y</td>
      <td>Z</td>
    </tr>
  </tbody>
</table>
<button id="add">添加一行</button>
<button id="remove">移除最后一行</button>
<div>表格主体有 <output>1</output> 行。</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td {
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
const rows = bodySection.rows; // 集合是动态的，因此其总是最新的
const rowNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateRowNumber() {
  rowNumberDisplay.textContent = rows.length;
}

addButton.addEventListener("click", () => {
  // 在主体的末尾添加一个新行
  const newRow = bodySection.insertRow();

  // 在新行内添加单元格
  ["A", "B", "C"].forEach(
    (elt) => (newRow.insertCell().textContent = `${elt}${rows.length}`),
  );

  // 更新行计数
  updateRowNumber();
});

removeButton.addEventListener("click", () => {
  // 从主体删除行
  bodySection.deleteRow(-1);

  // 更新行计数
  updateRowNumber();
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
- {{domxref("HTMLTableElement.insertRow()")}}

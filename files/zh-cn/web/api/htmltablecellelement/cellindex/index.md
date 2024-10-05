---
title: HTMLTableCellElement：cellIndex 属性
slug: Web/API/HTMLTableCellElement/cellIndex
l10n:
  sourceCommit: 3466b077e26ce0293b7b95cba0bd05559c3a3194
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableCellElement")}} 接口的 **`cellIndex`** 只读属性表示单元格在其所在行（{{htmlelement("tr")}}）中的位置。第一个单元格的索引是 `0`。

## 值

返回单元格的索引，或如果单元格不属于任何行，则返回 `-1`。

## 示例

此示例为 `tbody` 中第一行的所有单元格编号添加标签。

### HTML

```html
<table>
  <thead>
    <tr>
      <th>商品</th>
      <th>价格</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>香蕉</td>
      <td>$2</td>
    </tr>
    <tr>
      <td>大米</td>
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
  cell.textContent = `${cell.textContent}（单元格 #${cell.cellIndex}）`;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

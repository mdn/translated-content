---
title: HTMLTableElement.deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement.deleteTHead()`** 方法删除指定 {{HtmlElement("table")}} 的 {{HTMLElement("thead")}} 元素。

## 语法

```plain
HTMLTableElement.deleteTHead();
```

## 示例

本示例使用 JavaScript 删除表格的头部。

### HTML

```html
<table>
  <thead>
    <th>Name</th>
    <th>Occupation</th>
  </thead>
  <tr>
    <td>Bob</td>
    <td>Plumber</td>
  </tr>
  <tr>
    <td>Jim</td>
    <td>Roofer</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTHead();
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

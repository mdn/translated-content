---
title: HTMLTableRowElement：sectionRowIndex 属性
slug: Web/API/HTMLTableRowElement/sectionRowIndex
l10n:
  sourceCommit: 502544e192e1bc8d05453f88eb00e8bfde705c65
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableRowElement")}} 接口的 **`sectionRowIndex`** 只读属性表示当前部分（{{htmlelement("thead")}}、{{htmlelement("tbody")}} 和 {{htmlelement("tfoot")}}）的行位置。

## 值

返回该行的索引，如果该行不属于表的一部分，则返回 `-1`。

## 示例

本示例使用 JavaScript 标记表 `tbody` 中的所有行号。

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
      <td>橘子</td>
      <td>$8</td>
    </tr>
    <tr>
      <td>西冷牛排</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>总计</td>
      <td>$30</td>
    </tr>
  </tfoot>
</table>
```

### JavaScript

```js
const rows = document.querySelectorAll("tbody tr");

rows.forEach((row) => {
  const z = document.createElement("td");
  z.textContent = `(行 #${row.sectionRowIndex})`;
  row.appendChild(z);
});
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLTableRowElement.rowIndex")}}

---
title: HTMLTableCellElement：headers 属性
slug: Web/API/HTMLTableCellElement/headers
l10n:
  sourceCommit: 3466b077e26ce0293b7b95cba0bd05559c3a3194
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableCellElement")}} 接口的 **`headers`** 属性包含一组为此特定单元格充当*表头*的 {{HTMLElement("th")}} 元素的 ID 列表。

## 值

一个包含由空格分割的 ID 的字符串。

## 示例

此示例列出表格中最后一次被点击的单元格的 ID：

### HTML

```html
<table>
  <tr>
    <th rowspan="2" id="h">家庭作业（ID = h）</th>
    <th colspan="3" id="e">考试（ID = e）</th>
    <th colspan="3" id="p">项目（ID = p）</th>
  </tr>
  <tr>
    <th id="e1" headers="e">1（ID = e1）</th>
    <th id="e2" headers="e">2（ID = e2）</th>
    <th id="ef" headers="e">期末（ID = ef）</th>
    <th id="p1" headers="p">1（ID = p1）</th>
    <th id="p2" headers="p">2（ID = p2）</th>
    <th id="pf" headers="p">期末（ID = pf）</th>
  </tr>
  <tr>
    <td headers="h">15%</td>
    <td headers="e e1">15%</td>
    <td headers="e e2">15%</td>
    <td headers="e ef">20%</td>
    <td headers="p p1">10%</td>
    <td headers="p p2">10%</td>
    <td headers="p pf">15%</td>
  </tr>
</table>
最后一次点击的单元格的表头 ID：<output>无</output>。
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
const table = document.querySelector("table");
const output = document.querySelector("output");

table.addEventListener("click", (ev) => {
  output.textContent = ev.target.headers ? ev.target.headers : "无";
});
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

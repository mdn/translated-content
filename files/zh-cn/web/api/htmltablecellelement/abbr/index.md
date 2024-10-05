---
title: HTMLTableCellElement：abbr 属性
slug: Web/API/HTMLTableCellElement/abbr
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableCellElement")}} 接口的 **`abbr`** 属性指示与单元格相关联的缩写。如果单元格不是表头单元格 {{HTMLElement("th")}}，则忽略该属性。

它反映 {{HTMLElement("th")}} 元素的 `abbr` 属性。

> [!NOTE]
> 此属性在浏览器中不具有视觉效果。它添加信息以帮助辅助技术（像屏幕阅读器）能够使用这个缩写。

## 值

一个字符串。

## 示例

此示例将每个第一单元格的行表头相关联的缩写添加为前缀。

### HTML

```html
<table>
  <thead>
    <tr>
      <th abbr="Maker">制造商</th>
      <th abbr="Model">汽车型号</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>特斯拉</td>
      <td>3</td>
    </tr>
    <tr>
      <td>比亚迪</td>
      <td>海豚</td>
    </tr>
    <tr>
      <td>大众</td>
      <td>ID.3</td>
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
const rows = document.querySelectorAll("thead tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent}（${cell.abbr}）`;
}
```

### 结果

{{EmbedLiveSample("示例", "100%", 220)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

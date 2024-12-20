---
title: HTMLTableCellElement：scope 属性
slug: Web/API/HTMLTableCellElement/scope
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableCellElement")}} 接口的 **`scope`** 属性指示 {{HTMLElement("th")}} 单元格的范围。

使用 `scope` 属性对表头单元格进行配置，以应用于指定的行或者列，或者应用于当前行组（即相同的祖先 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}} 或 {{HTMLElement("tfoot")}} 元素）内尚未指定范围的单元格。如果未为 `scope` 指定值，则表头不会以这种方式与单元格相关联。`scope` 的允许值有：

> [!NOTE]
> 此属性在浏览器中不具有视觉效果。它添加语义信息以辅助技术（像屏幕阅读器）以更连贯的方式呈现表格。

## 值

以下值之一：

- `col`
  - : 表头单元格适用于同一列（如果同时使用 `colspan`，则为列组）下单元格，直至列尾或该列中另一个 `<th>` 设定新的范围。
- `colgroup`
  - : 表头单元格适用于当前列组中所有尚未设定范围的单元格。此值仅在单元格位于列组时允许使用。
- `row`
  - : 表头单元格适用于同一行（如果同时使用 `rowspan`，则为行组）中的单元格，直至行尾或同一行中另一个 `<th>` 设定新的范围。
- `rowgroup`
  - : 表头单元格适用于当前行组中所有尚未设定范围的单元格。此值仅在单元格位于行组时允许使用。
- 空字符串（`""`）
  - : 表头单元格没有预定义的范围；用户代理将根据上下文线索确定范围。

## 示例

此示例为 `tbody` 第一行的所有单元格编号添加标签。

### HTML

```html
<table>
  <caption>
    最高的大坝
  </caption>
  <tr>
    <td></td>
    <th scope="col">大坝</th>
    <th scope="col">国家</th>
    <th scope="col">高度</th>
  </tr>
  <tr>
    <td>1.</td>
    <th scope="row">锦屏一级水电站</th>
    <td>中国</td>
    <td>305 m</td>
  </tr>
  <tr>
    <td>2.</td>
    <th scope="row">努列克坝</th>
    <td>塔吉克斯坦</td>
    <td>300 m</td>
  </tr>
  <tr>
    <td>3.</td>
    <th scope="row">两河口水电站</th>
    <td>中国</td>
    <td>295 m</td>
  </tr>
  <tr>
    <td>4.</td>
    <th scope="row">小湾水电站</th>
    <td>中国</td>
    <td>292 m</td>
  </tr>
  <tr>
    <td>5.</td>
    <th scope="row">白鹤滩水电站</th>
    <td>中国</td>
    <td>289 m</td>
  </tr>
  <tr>
    <td>6.</td>
    <th scope="row">溪洛渡水电站</th>
    <td>中国</td>
    <td>285.5 m</td>
  </tr>
  <tr>
    <td>7.</td>
    <th scope="row">大迪克桑斯坝</th>
    <td>瑞士</td>
    <td>285 m</td>
  </tr>
</table>
```

### 结果

{{EmbedLiveSample("示例", "100%", 260)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

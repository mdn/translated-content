---
title: <th>
slug: Web/HTML/Reference/Elements/th
---

**HTML `<th>` 元素**定义表格内的表头单元格。这部分特征是由 [`scope`](#scope) 和 [`headers`](#headers) 属性准确定义的。

{{InteractiveExample("HTML Demo: &lt;th&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Alien football stars
  </caption>
  <tr>
    <th scope="col">Player</th>
    <th scope="col">Gloobles</th>
    <th scope="col">Za'taak</th>
  </tr>
  <tr>
    <th scope="row">TR-7</th>
    <td>7</td>
    <td>4,569</td>
  </tr>
  <tr>
    <th scope="row">Khiresh Odo</th>
    <td>7</td>
    <td>7,223</td>
  </tr>
  <tr>
    <th scope="row">Mia Oolong</th>
    <td>9</td>
    <td>6,219</td>
  </tr>
</table>
```

```css interactive-example
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

td {
  text-align: center;
}

tr:nth-of-type(even) {
  background-color: #eee;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}
```

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `abbr`
  - : 一个简短的描述，作为对表头单元格内容的替代标签，用于在其他上下文中引用该单元格。一些用户代理（如语音阅读器）可能会在内容本身之前呈现此描述。
- `colspan`
  - : 一个非负整数值，指示表头单元格跨越或扩展多少列。默认值为 `1`。用户代理会将大于 1000 的值视为不正确，而默认将其设置为 1。
- `headers`
  - : 包含了一个空格分隔的字符串（对应于为此表头单元格提供标题的 `<th>` 元素的 `id` 属性）的列表。
- `rowspan`
  - : 一个非负整数值，指示表头单元格跨越或扩展多少行。默认值为 `1`。如果该值被设置为 `0`，这个单元格就被扩展到 `<th>` 所属的表格分组部分（{{HTMLElement("thead")}}、{{HTMLElement("tbody")}} 或 {{HTMLElement("tfoot")}}）的最后一个单元。比 `65534` 大的值被会被裁剪到 `65534`。
- `scope`
  - : 定义了表头元素（在 `<th>` 中定义）关联的单元格。可能的{{Glossary("enumerated", "枚举")}}值如下：
    - `row`：表头关联所属的行中所有的单元格。
    - `col`：表头关联所属的列中所有的单元格。
    - `rowgroup`：表头属于一个行组并与其中所有单元格相关联。
    - `colgroup`：表头属于一个列组并与其中所有单元格相关联。

    如果未指定 `scope` 属性，或其值不是 `row`、`col`、`rowgroup` 或 `colgroup`，则浏览器会自动选择标题单元格适用的单元格集。

### 已弃用的属性

以下属性已被弃用，不应使用。下面记录它们是为了在更新现有代码时提供参考，并供参考历史。

- `align` {{deprecated_inline}}
  - : 指定单元格内容的水平对齐方式。可能的{{Glossary("enumerated", "枚举")}}值有：`left`、`center`、`right`、`justify`、`char`。在受支持的情况下，`char` 值可以让文本内容根据 [`char`](#char) 属性中指定的字符以及 [`charoff`](#charoff) 属性指定的偏移量进行对齐。该属性已弃用，请使用 CSS {{cssxref("text-align")}} 属性代替。
- `axis` {{deprecated_inline}}
  - : 包含一个空格分隔的字符串列表。每个字符串对应一组该表头适用的单元格的 `id` 属性。该属性以弃用，请使用 [`scope`](#scope) 属性代替。
- `bgcolor` {{deprecated_inline}}
  - : 定义表头单元格的背景色。其值为 HTML 颜色；可以是带有“#”前缀的 [6 位十六进制的 RGB 代码](/zh-CN/docs/Web/CSS/Reference/Values/hex-color)或[颜色关键字](/zh-CN/docs/Web/CSS/Reference/Values/named-color)。不支持其他的 CSS {{cssxref("color_value", "&lt;color&gt;")}} 值。该属性已弃用，请使用 CSS {{cssxref("background-color")}} 属性代替。
- `char` {{deprecated_inline}}
  - : 无任何行为。它最初用于将内容与表头单元格的指定字符对齐。当尝试对齐数字或货币值时，其值通常包含一个句点（`.`）。如果 [`align`](#align) 属性没有设置为 `char`，则此属性将被忽略。
- `charoff` {{deprecated_inline}}
  - : 无任何行为。它最初用于指定表头单元格内容与 [`char`](#char) 属性指定的字符之间的偏移量。
- `height` {{deprecated_inline}}
  - : 定义建议的表头单元格高度。该属性已弃用，请使用 CSS {{cssxref("height")}} 属性代替。
- `valign` {{deprecated_inline}}
  - : 指定表头单元格内文本的垂直对齐方式。可能的{{Glossary("enumerated", "枚举值")}}有：`baseline`、`bottom`、`middle` 和 d `top`。该属性已弃用，请使用 CSS {{cssxref("vertical-align")}} 属性代替。
- `width` {{deprecated_inline}}
  - : 定义建议的表头单元格宽度。该属性已弃用，请使用 CSS {{cssxref("width")}} 属性代替。

## 使用说明

- 只能在 {{HTMLElement("tr")}} 元素内使用 `<th>`。
- 在简单的上下文中，在表头单元格（`<th>` 元素）上使用 [`scope`](#scope) 属性是多余的，因为 [`scope`](#scope) 会被默认推断。然而，某些辅助技术可能无法正确推断，因此指定标题范围可能会改善用户体验。
- 当使用 [`colspan`](#colspan) 和 [`rowspan`](#rowspan) 属性来使表头单元格跨越多个列和行时，未定义这些属性的单元格（默认为 1）会自动适配表结构中的空闲可用空间，跨越 1x1 单元格，如下图所示：

![演示表格单元的列和行跨越的插图：单元格 1、3 和 4 跨越两行；单元格 2 跨越两列；单元格 5 和 6 适配第二行第二列和第三列的可用单元格](column-row-span.png)

> [!NOTE]
> 这些属性不能用于重叠单元格。

## 示例

参考 {{HTMLElement("table")}} 中 `<th>` 的示例内容。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容 content</a
        >，但不能有页眉（header）、页脚（footer）、分段内容或标题内容作为后代元素。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        开始标签是必须的。<br />结束标签有时可以省略：当其后是 {{HTMLElement("th")}} 或
        {{HTMLElement("td")}} 元素，或者其后没有其他数据内容在其父元素内。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>{{HTMLElement("tr")}} 元素。</td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role"><code>columnheader</code></a> 或 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role"><code>rowheader</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLTableCellElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [学习：HTML 表格](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}、{{HTMLElement("col")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("td")}}、 {{HTMLElement("tfoot")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}：其他与表格相关的元素
- {{cssxref("background-color")}}：用于设置每个表头单元格的背景颜色的 CSS 属性
- {{cssxref("border")}}：用于控制表头单元格边框的 CSS 属性
- {{cssxref("height")}}：用于控制建议的表头单元格高度的 CSS 属性
- {{cssxref("text-align")}}：用于水平对齐每个表头单元格的内容的 CSS 属性
- {{cssxref("vertical-align")}}：用于垂直对齐每个表头单元格的内容的 CSS 属性
- {{cssxref("width")}}：用于控制建议的表头单元格宽度的 CSS 属性
- {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}：用于选择所需的表头单元格的 CSS 伪类

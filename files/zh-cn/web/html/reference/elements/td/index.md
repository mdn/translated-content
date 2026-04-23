---
title: <td>：表格数据单元格元素
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

[HTML](/zh-CN/docs/Web/HTML) 元素 **`<td>`** 定义了表格中包含数据的单元格，它可以用作 {{HTMLElement("tr")}} 元素的子元素。

{{InteractiveExample("HTML 演示：&lt;td&gt;", "tabbed-taller")}}

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

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `colspan`
  - : 包含一个非负整数值，表示数据单元格跨越或扩展的列数。默认值为 `1`。用户代理会将大于 1000 的值视为不正确，并设置为默认值（`1`）。
- `headers`
  - : 包含空格分隔的字符串列表，每个字符串与为该表格单元格提供标题的 {{HTMLElement("th")}} 元素的 `id` 属性相对应。
- `rowspan`
  - : 包含一个非负整数值，表示数据单元格跨越或延伸了多少行。默认值为 `1`；如果设置为 `0`，则单元格将一直延伸到表格分组部分（{{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}}，即使是隐式定义）的末尾。高于 `65534` 的值会被截断为 `65534`。

### 已弃用属性

以下属性已被弃用，不应再使用。下文记录了这些属性，供更新现有代码时参考，也仅供参考。

- `abbr` {{deprecated_inline}}
  - : 包含对数据单元格内容的简短描述。某些用户代理（如语音阅读器）可能会在内容本身之前显示该描述。将简短内容放在单元格内，并将较长的描述放在 [`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title) 属性中，因为该属性已被弃用。或者，最好将内容包含在数据单元格中，并使用 CSS 来[可视化地截断溢出的文本](/zh-CN/docs/Web/CSS/Reference/Properties/text-overflow)。

- `align` {{deprecated_inline}}
  - : 指定数据单元格的水平对齐方式。可能的{{Glossary("enumerated", "枚举")}}值包括 `left`、`center`、`right`、`justify` 和 "char"。如果支持，`char` 值将根据 [`char`](#char) 属性中定义的字符和 [`charoff`](#charoff) 属性定义的偏移量对文本内容进行对齐。请使用 {{cssxref("text-align")}} CSS 属性代替，因为该属性已被弃用。

- `axis` {{deprecated_inline}}
  - : 包含以空格分隔的字符串列表，每个字符串与数据单元格适用的单元格组的 `id` 属性相对应。

- `bgcolor` {{deprecated_inline}}
  - : 定义数据单元格的背景颜色。该值是 HTML 颜色；可以是以 `#` 为前缀的 [6 位十六进制 RGB 代码](/zh-CN/docs/Web/CSS/Reference/Values/hex-color)，也可以是[颜色关键字](/zh-CN/docs/Web/CSS/Reference/Values/named-color)。不支持其他 CSS {{cssxref("color_value", "&lt;color&gt;")}} 值。由于该属性已被弃用，请使用 {{cssxref("background-color")}} CSS 属性代替。

- `char` {{deprecated_inline}}
  - : 没有任何作用。其最初目的是指定内容与数据单元格中的某个字符对齐。当尝试对齐数字或货币值时，其典型值包括句号（`.`）。如果 [`align`](#align) 未设置为 `char`，该属性将被忽略。

- `charoff` {{deprecated_inline}}
  - : 没有任何作用。它最初用于指定数据单元格内容与 [`char`](#char) 属性指定的对齐字符之间的偏移字符数。

- `height` {{deprecated_inline}}
  - : 定义推荐的数据单元格高度。请使用 {{cssxref("height")}} CSS 属性代替，因为该属性已被弃用。

- `scope` {{deprecated_inline}}
  - : 定义标题（在 {{HTMLElement("th")}} 中定义）元素相关的单元格。可能的{{Glossary("enumerated", "枚举")}}值包括 `row`、`col`、`rowgroup` 和 `colgroup`。该属性只能与 {{HTMLElement("th")}} 元素一起使用，以定义作为页眉的行或列，因为 `<td>` 元素已弃用该属性。

- `valign` {{deprecated_inline}}
  - : 指定数据单元格的垂直对齐方式。可能的{{Glossary("enumerated", "枚举")}}值包括 `baseline`、`bottom`、`middle` 和 `top`。由于该属性已被弃用，请使用 {{cssxref("vertical-align")}} CSS 属性代替。

- `width` {{deprecated_inline}}
  - : 定义推荐的数据单元格宽度。由于该属性已被弃用，请使用 {{cssxref("width")}} CSS 属性代替。

## 使用说明

- `<td>` 只可在 {{HTMLElement("tr")}} 元素中使用。
- 当使用 [`colspan`](#colspan) 和 [`rowspan`](#rowspan) 属性跨越多列和多行的数据单元格时，未定义这些属性（默认值为 `1`）的单元格会被自动调整到表格结构中跨越 1x1 单元格的空闲可用空间中，如下图所示：

  ![演示表格单元格跨列和跨行的图示：单元格 1、3 和 4 跨两行；单元格 2 跨两列；单元格 5 和 6 自适应作为第二行第二列和第三列的可用单元格](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > 这些属性不得用于重叠单元格。

## 示例

请参阅 {{HTMLElement("table")}} 获取介绍通用标准和最佳实践的完整表格示例。

### 基本数据单元格

本例使用 `<td>` 元素和其他与表格相关的元素来介绍一个包含音标字母数据的基本表格。

#### HTML

某些表格行（{{HTMLElement("tr")}} 元素）同时包含标题单元格（{{HTMLElement("th")}} 元素）和数据单元格 `<td>` 元素。作为每行第一个子元素的 {{HTMLElement("th")}} 元素构成表格的第一列，每个 `<th>` 为该行中的数据单元格提供行标题。每个相应的 `<td>` 元素包含与各自列标题和行标题单元格对齐的数据。

> [!NOTE]
> 通常情况下，为便于理解列中的信息，会使用带有列标题的表头组。{{HTMLElement("thead")}} 和 {{HTMLElement("tbody")}} 元素可用于将这些列标题和数据分组到相应的表头和表体部分。在本示例中，为了将注意力集中在数据单元格上并降低本示例的复杂性，我们并没有这样做。

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### CSS

表格及其单元格的样式使用了一些基本的 CSS。CSS [属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)和 {{cssxref(":nth-of-type")}} 伪类用于替换单元格的外观，使表格中的信息更易于理解和识别。

```css
td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
  background-color: #eee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### 结果

{{EmbedLiveSample("基本数据单元格", 650, 140)}}

### 行列扩展

本示例通过增加一个“ABC”单元格，扩展并增强了[上一示例](#基本数据单元格)中的基本表格。

#### HTML

在第一行（{{HTMLElement("tr")}} 元素）中引入额外的数据单元格（`<td>` 元素）。这样就在表格中创建了第四列。

通过使用 [`rowspan`](#rowspan) 属性，“ABC”单元格跨越了表格的前三行。随后各行的最后一个数据单元格各跨两列。这是通过 [`colspan`](#colspan) 属性实现的，从而使它们在表格结构中正确对齐。请注意，为了说明这一点，表格中还添加了一行（{{HTMLElement("tr")}} 元素）。

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
    <td rowspan="3">ABC</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td colspan="2">DELL tah</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Echo</td>
    <td colspan="2">ECK oh</td>
  </tr>
</table>
```

#### CSS

CSS 中使用了 {{cssxref(":first-of-type")}} 和 {{cssxref(":last-of-type")}} 伪类来选择和样式化新增的“ABC”数据单元格。

```css
tr:first-of-type td:last-of-type {
  width: 60px;
  background-color: #505050;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
  background-color: #eee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### 结果

{{EmbedLiveSample("行列扩展", 650, 170)}}

### 将数据单元格与表头关联

对于数据单元格（`<td>` 元素）和标题单元格（{{HTMLElement("th")}} 元素）之间更为复杂的关系，仅使用带有 [`scope`](/zh-CN/docs/Web/HTML/Reference/Elements/th#scope) 属性的 {{HTMLElement("th")}} 元素可能无法满足辅助技术（尤其是屏幕阅读器）的要求。

#### HTML

为了改善[上一示例](#行列扩展)的{{Glossary("accessibility", "无障碍")}}效果，并使屏幕阅读器等能够说出与每个数据单元格相关的标题，可以引入 [`headers`](#headers) 属性和 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性。与“ABC”数据单元格（即字母“A”、“B”和“C”）相关的每个行标题单元格（{{HTMLElement("th")}} 元素）都有一个唯一的标识符，即 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性。然后，“ABC”数据单元格（`<td>` 元素）在 [`headers`](#headers) 属性的空格分隔列表中使用这些 `id` 值。

> [!NOTE]
> 建议为 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性使用更具描述性和更有用的值。文档中的每个 `id` 都必须是唯一的。在本例中，`id` 值为单字符，以保持对 [`headers`](#headers) 属性概念的关注。

```html
<table>
  <tr>
    <th id="a" scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
    <td headers="a b c" rowspan="3">ABC</td>
  </tr>
  <tr>
    <th id="b" scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th id="c" scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td colspan="2">DELL tah</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Echo</td>
    <td colspan="2">ECK oh</td>
  </tr>
</table>
```

#### 结果

虽然[视觉结果](#结果_2)与[上一个示例表格](#行和列扩展)相比没有变化，但每个数据单元格（`<td>`）现在都与其行标题单元格（`<th>`）明确关联。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>分段根。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        开始标签是必需的。<br />结束标签在该元素立即跟随 {{HTMLElement("th")}} 或
        <code>&lt;td&gt;</code> 元素、或其父元素没有更多数据时，可以省略。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>{{HTMLElement("tr")}} 元素。</td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        如果是 {{HTMLElement("table")}} 元素的后代，则为
        <code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role"
            >cell</a
          ></code
        >；如果是具有 <code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        > 角色的元素的后代，则为
        <code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
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

- [学习：HTML 表格基础](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}、{{HTMLElement("col")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("th")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}：其他表格相关元素
- {{cssxref("background-color")}}：设置每个数据单元格背景颜色的 CSS 属性
- {{cssxref("border")}}：控制数据单元格边框的 CSS 属性
- {{cssxref("height")}}：控制推荐数据单元格高度的 CSS 属性
- {{cssxref("text-align")}}：水平对齐每个数据单元格内容的 CSS 属性
- {{cssxref("vertical-align")}}：垂直对齐每个数据单元格内容的 CSS 属性
- {{cssxref("width")}}：控制推荐数据单元格宽度的 CSS 属性
- {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}：选择所需数据单元格的 CSS 伪类

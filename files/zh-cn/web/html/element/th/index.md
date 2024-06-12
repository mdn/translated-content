---
title: <th>
slug: Web/HTML/Element/th
---

{{HTMLSidebar}}

**HTML `<th>` 元素**定义表格内的表头单元格。这部分特征是由 [`scope`](#scope) 和 [`headers`](#headers) 属性准确定义的。

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

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

- `align` {{Deprecated_Inline}}

  - : 这个枚举属性指定单元格内容的水平对齐方式。可能的值有：

    - `left`: 单元格内容左对齐
    - `center`: 单元格内容居中
    - `right`: 单元格内容右对齐
    - `justify` (仅文字内容): 内容拉伸以覆盖单元格
    - `char` (仅文字内容): 内容相对`<th>`标签中的某个字符对齐（默认值是页面语言的小数点字符）。该字符由 [`char`](#char) 和 [`charoff`](#charoff) 属性定义。对齐方式的默认值是 `left`。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。
    >
    > - `left`、`center`、`right` 或 `justify` 这些对齐效果，应该使用 CSS 的 {{cssxref("text-align")}} 来实现。
    > - `char` 的对齐效果使用 CSS 的 {{cssxref("text-align")}} 实现，[`char`](#char) 亦同。

- `axis` {{Deprecated_Inline}}

  - : 这个属性包含了一个空间分隔的字符串的列表。每个字符串是一组单元格的 ID，而该表头适用于这个 ID。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。应该使用 [`scope`](#scope) 属性代替。

- `bgcolor` {{Deprecated_inline}}

  - : 定义表头单元格的背景色。其值为 HTML 颜色；可以是带有“#”前缀的 [6 位十六进制的 RGB 代码](/zh-CN/docs/Web/CSS/hex-color)或[颜色关键字](/zh-CN/docs/Web/CSS/named-color)。不知其其他的 CSS {{cssxref("color_value", "&lt;color&gt")}} 值。该属性已弃用，请使用 CSS {{cssxref("background-color")}} 属性代替。

- `char` {{Deprecated_inline}}

  - : 列中的内容与 `<th>` 元素中的字母对齐。通常其值包含一个句点（`.`）来排列数字或者货币值。如果 [`align`](#align) 没有被设置为 `char`，这个属性就会被忽略。

- `charoff` {{Deprecated_inline}}

  - : 这个属性用来将列数据移到 **char** 属性指定字母的右边。其值指定了移动的长度。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。

- `valign` {{Deprecated_inline}}

  - : 这个属性指定了单元格内文本的垂直对齐方式。这个属性可能有以下值：

    - `baseline`: 将文本置于单元格底部并将其与字母的[baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29)对齐而不是与底部。若字母没有 `baseline` 以下的部分（即为无[降部](https://www.wikiwand.com/zh/%E9%99%8D%E9%83%A8)）那么 `baseline` 值起到的效果便和 `bottom` 相同。
    - `bottom`: 将文本置于底部。
    - `middle`: 将文本置于单元格中央。
    - `top`: 将文本置于单元格顶部。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。使用 CSS {{cssxref("vertical-align")}}特性代替。

- `width` {{Deprecated_inline}}

  - : 定义一个建议的标题单元格宽度。该属性已弃用，请使用 CSS {{cssxref("width")}} 属性代替。

## 使用说明

- 只能在 {{HTMLElement("tr")}} 元素内使用 `<th>`。
- 在简单的上下文中，在表头单元格（`<th>` 元素）上使用 [`scope`](#scope) 属性是多余的，因为 [`scope`](#scope) 会被默认推断。然而，某些辅助技术可能无法正确推断，因此指定标题范围可能会改善用户体验。
- 当使用 [`colspan`](#colspan) 和 [`rowspan`](#rowspan) 属性来使表头单元格跨越多个列和行时，未定义这些属性的单元格（默认为 1）会自动适配表结构中的空闲可用空间，跨越 1x1 单元格，如下图所示：

![演示表格单元的列和行跨越的插图：单元格 1、3 和 4 跨越两行；单元格 2 跨越两列；单元格 5 和 6 适配第二行第二列和第三列的可用单元格](column-row-span.png)

> **备注：** 这些属性不能用于重叠单元格。

## 示例

参考 {{HTMLElement("table")}} 中 `<th>` 的示例内容。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
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
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role"><code>columnheader</code></a> 或 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/rowheader_role"><code>rowheader</code></a>
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

- [学习：HTML 表格](/zh-CN/docs/Learn/HTML/Tables)
- {{HTMLElement("caption")}}、{{HTMLElement("col")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("td")}}、 {{HTMLElement("tfoot")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}：其他与表格相关的元素
- {{cssxref("background-color")}}：用于设置每个表头单元格的背景颜色的 CSS 属性
- {{cssxref("border")}}：用于控制表头单元格边框的 CSS 属性
- {{cssxref("height")}}：用于控制建议的表头单元格高度的 CSS 属性
- {{cssxref("text-align")}}：用于水平对齐每个表头单元格的内容的 CSS 属性
- {{cssxref("vertical-align")}}：用于垂直对齐每个表头单元格的内容的 CSS 属性
- {{cssxref("width")}}：用于控制建议的表头单元格宽度的 CSS 属性
- {{cssxref(":nth-of-type")}}、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}：用于选择所需的表头单元格的 CSS 伪类

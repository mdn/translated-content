---
title: <tfoot>
slug: Web/HTML/Element/tfoot
---

HTML 元素 **`<tfoot>`** 定义了一组表格中各列的汇总行。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">内容类别</a></th>
   <td>无。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容 </th>
   <td>0 或多个{{HTMLElement("tr")}} 元素。</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>开始标签是必需的。在父元素 {{HTMLElement("table")}} 没有后续内容的情况下，结束标签可被省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>{{HTMLElement("table")}} 元素。{{HTMLElement("tfoot")}} 必须出现在一个或多个 {{HTMLElement("caption")}}，{{HTMLElement("colgroup")}}，{{HTMLElement("thead")}}, {{HTMLElement("tbody")}}，或 {{HTMLElement("tr")}} 元素之后。注意这是自 HTML5 起有的要求。<br>
    {{HTMLElement("tfoot")}} 元素不能放在任何 {{HTMLElement("tbody")}} 或 {{HTMLElement("tr")}} 元素之后。注意，这与上述 HTML5 的标准相冲突。</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>任意。</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLTableSectionElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes).

- `align` {{Deprecated_inline}}

  - : 此枚举属性指定每个单元格内容所使用的水平对齐方式。可选值为：

    - `left`，单元格内容左对齐
    - `center`，单元格内容居中对齐
    - `right`，单元格内容右对齐
    - `justify`，插入空白调整单元格中的文本内容（译者注：即两端对齐）
    - `char`，将文本内容与一个具有最小偏移量的特定字符对齐，字符和偏移量分别由[`char`](/zh-CN/docs/Web/HTML/Element/tbody#char) 和 [`charoff`](/zh-CN/docs/Web/HTML/Element/tbody#charoff) 属性定义。若此值未设置，则假定为 `left`。

    > **备注：** 此属性在最新标准中已被废弃（不支持），所以请勿使用。
    >
    > - 为达到与`left`, `center`, `right`或`justify`相同的效果，请使用 CSS {{cssxref("text-align")}}属性。
    > - 为达到与 char 值相同的效果，在 CSS3 中可将 [`char`](/zh-CN/docs/Web/HTML/Element/tfoot#char) 的值用作 {{cssxref("text-align")}} 的属性值。

- `bgcolor` {{Non-standard_inline}}

  - : 此属性定义了列内单元格的背景色。定义此属性使用'#'作为前缀，其后是定义于[sRGB](https://www.w3.org/Graphics/Color/sRGB)的 6 位十六进制码。也可使用 16 种预定义的色彩字符串之一。

    > **备注：** 请勿使用此属性，因为这并非标准，且只有某些特定版本的 Microsoft Internet Explorer（IE 浏览器）支持：{{HTMLElement("tfoot")}}元素应使用[CSS](/zh-CN/docs/Web/CSS)设计。若想得到与**bgcolor**属性相似的效果，可在相关的 {{HTMLElement("td")}}或{{HTMLElement("th")}}元素中使用[CSS](/zh-CN/docs/Web/CSS) {{cssxref("background-color")}}属性。

- `char` {{Deprecated_inline}}

  - : 此属性设置单元格对齐的基准字符。当对齐数字或货币值时，一个典型值会带有一个句点 (.)。如果[`align`](/zh-CN/docs/Web/HTML/Element/tfoot#align)未设置为`char`，此属性将被忽略。

    > **备注：** 请勿使用此属性，因为在最新标准中此属性被废弃（且不受支持）。想要达到与[`char`](/zh-CN/docs/Web/HTML/Element/tbtfootody#char)相同的效果，在 CSS3 中，可将{{cssxref("text-align")}}属性设置为[`char`](/zh-CN/docs/Web/HTML/Element/tfoot#char)的属性值。

- `charoff` {{Deprecated_inline}}

  - : 此属性用作表明列内数据对于对齐基准字符的偏移字符数，对其基准字符由`char`属性指定。

    > **备注：** 请勿使用此属性，因为在最新标准中此属性被废弃（且不受支持）。

- `valign` {{Deprecated_inline}}

  - : 此属性指定表头（译者注：英文原文为 table header，疑似错误）中每一行内的文本的垂直对齐方式。此属性的可选值为：

    - `baseline`，会使文本尽可能接近单元格底部，但并不向底部对齐，而将它们以字符[基线](https://zh.wikipedia.org/wiki/%E5%9F%BA%E7%B7%9A)对齐。如果所有字符的大小相同，此值与`bottom`的效果相同；
    - `bottom`，设置文本向下对齐；
    - `middle`，设置文本居中对齐；
    - and `top`，设置文本向上对齐。

    > **备注：** 请勿使用此属性，因为在最新标准中此属性被废弃（且不受支持）：使用 CSS 属性{{cssxref("vertical-align")}}作为替代。

## 示例

请查看{{HTMLElement("table")}}页面中`<tfoot>`的相关示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他 table 相关的 HTML 元素：{{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- 在设计`<tfoot>`时可能会有特殊效果的 CSS 属性和伪类：

  - {{cssxref(":nth-child")}}伪类：设置列内元素的对齐方式；
  - {{cssxref("text-align")}}属性：可设置单元格内容与同一字符对齐，例如'.'。

{{HTMLSidebar}}

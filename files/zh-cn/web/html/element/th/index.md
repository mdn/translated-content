---
title: <th>
slug: Web/HTML/Element/th
---

**HTML `<th>` 元素**定义表格内的表头单元格。这部分特征是由 [`scope`](/zh-CN/docs/Web/HTML/Element/th#scope) 和 [`headers`](/zh-CN/docs/Web/HTML/Element/th#headers) 属性准确定义的。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容范畴</a></th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">允许内容</th>
   <td>
    <div class="content-models">
    <div id="table-mdls">流内容（除 header、footer、sectioning content 或 heading content 的继承。）</div>
    </div>
   </td>
  </tr>
  <tr>
   <th scope="row">遗漏标签</th>
   <td>开始标签是必需要的，而结束标签有时可以省略：当其后是{{HTMLElement("th")}} 或 {{HTMLElement("td")}} ，或者其后没有其他数据内容在其父元素内，。</td>
  </tr>
  <tr>
   <th scope="row">允许的父级元素</th>
   <td> {{HTMLElement("tr")}} 元素</td>
  </tr>
  <tr>
   <th scope="row"><dfn>元素类型</dfn></th>
   <td>任何</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLTableHeaderCellElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)

- `abbr` {{Deprecated_Inline}}

  - : 这个属性包含一个关于单元格内容的简单的介绍。一个用户代理（例如，语音阅读器）可能出现在描述之前。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。相对的，你可以把简短的描述放置于单元格内，把较长的描述内容放到 title 属性内。

- `align` {{Deprecated_Inline}}

  - : 这个枚举属性指定单元格内容的水平对齐方式。可能的值有：

    - `left`: 单元格内容左对齐
    - `center`: 单元格内容居中
    - `right`: 单元格内容右对齐
    - `justify` (仅文字内容): 内容拉伸以覆盖单元格
    - `char` (仅文字内容): 内容相对`<th>`标签中的某个字符对齐（默认值是页面语言的小数点字符）。该字符由[`char`](/zh-CN/docs/Web/HTML/Element/th#char) 和[`charoff`](/zh-CN/docs/Web/HTML/Element/th#charoff) 属性定义。对齐方式的默认值是 `left`.

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。
    >
    > - `left`, `center`, `right` 或 `justify` 这些对齐效果，应该使用 CSS 的{{cssxref("text-align")}} 来实现。
    > - `char` 的对齐效果使用 CSS 的 {{cssxref("text-align")}} 实现， [`char`](/zh-CN/docs/Web/HTML/Element/th#char)亦同。{{unimplemented_inline}} in CSS3.

- `axis` {{Deprecated_Inline}}

  - : 这个属性包含了一个空间分隔的字符串的列表。每个字符串是一组单元格的 ID，而该表头适用于这个 ID。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。应该使用 [`scope`](/zh-CN/docs/Web/HTML/Element/th#scope) 属性代替。

- `bgcolor` {{Non-standard_inline}}

  - : 这个属性定义了每列中每单元格的背景色。它由带有‘#’前缀的 6 位数的十六进制码组成，并在[sRGB](https://www.w3.org/Graphics/Color/sRGB)中被定义。这个属性可能会用到十六个预定义的颜色字符串儿之一。

    > **备注：** 不要使用这个属性，它不是标准属性且仅在某些版本的 Microsoft Internet Explorer 支持：{{HTMLElement("th")}} 元素应当用[CSS](/zh-CN/docs/CSS)来样式化。为了创造出同样的效果只需要使用[CSS](/zh-CN/docs/CSS)中的{{cssxref("background-color")}}属性就可以啦。

- `char` {{Deprecated_inline}}

  - : 列中的内容与`<th>` 元素中的字母对齐。通常其值包含一个 (.) 来排列数字或者货币值。如果 [`align`](/zh-CN/docs/Web/HTML/Element/th#align)没有被设置为`char`，这个属性就会被忽略。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。为了达到同样的效果，你可以指定该字母为{{cssxref("text-align")}} 属性中的第一个值，或通过 CSS3 中的{{unimplemented_inline}}。

- `charoff` {{Deprecated_inline}}

  - : 这个属性用来将列数据移到 **char** 属性指定字母的右边。其值指定了移动的长度。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。

- `colspan`
  - : 这个属性包含一个正整数表示了每单元格中扩展列的数量。默认值为`1` 。超过 1000 的值被视作 1000。
- `headers`
  - : 这个属性包含了一个空间分隔的字符串的列表，每个与其他{{HTMLElement("th")}}元素相关联的`id` 属性一一对应。
- `rowspan`
  - : 这个属性包含一个正整数表示了每单元格中扩展列的数量。默认值为`1.` 如果该值被设置为 `0`, 这个单元格就被扩展为 ({{HTMLElement("thead")}}，{{HTMLElement("tbody")}} 或{{HTMLElement("tfoot")}}) 中表格部分的最后一个元素。比 65534 大的值被视作 65534。
- `scope`

  - : 这个枚举属性定义了表头元素 (在{{HTMLElement("th")}}中定义) 关联的单元格。它可能有以下值：

    - `row`: 表头关联一行中所有的单元格。
    - `col`: 表头关联一列中所有的单元格。
    - `rowgroup`:表头属于一个行组并与其中所有单元格相关联。这些单元格可以被放在表头的左侧或右侧，取决于 {{HTMLElement("table")}} 元素中 [`dir`](/zh-CN/docs/Web/HTML/Global_attributes/dir) 属性的值。
    - `colgroup`: 表头属于一个列组并与其中所有单元格相关联。
    - `auto`

- `valign` {{Deprecated_inline}}

  - : 这个属性指定了单元格内文本的垂直对齐方式。这个属性可能有以下值：

    - `baseline`: 将文本置于单元格底部并将其与字母的[baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29)对齐而不是与底部。若字母没有 `baseline` 以下的部分（即为无[降部](https://www.wikiwand.com/zh/%E9%99%8D%E9%83%A8)）那么 `baseline` 值起到的效果便和 `bottom` 相同。
    - `bottom`: 将文本置于底部。
    - `middle`: 将文本置于单元格中央。
    - `top`: 将文本置于单元格顶部。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。使用 CSS {{cssxref("vertical-align")}}特性代替。

- `width` {{Deprecated_inline}}

  - : 这个属性用来定义一个期望的单元格宽。额外的空间可以藉由[cellspacing](/zh-CN/docs/Web/API/HTMLTableElement/cellSpacing)和 [cellpadding](/zh-CN/docs/Web/API/HTMLTableElement/cellPadding) 属性来增加，并且{{HTMLElement("col")}}元素的宽也可以创造额外空间。但是，如果一列宽太窄以至于无法恰当显示 某单元格时，它会被自动加宽。

    > **备注：** 不要使用这个属性，因为它已经在最新标准中过时。使用 CSS {{cssxref("width")}}属性代替。

## 示例

参考 {{HTMLElement("table")}} 中 `<th>`的示例内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}.

{{HTMLSidebar}}

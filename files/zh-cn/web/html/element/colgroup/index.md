---
title: <colgroup>
slug: Web/HTML/Element/colgroup
---

{{HTMLSidebar}}

HTML 中的 表格列组（_Column Group_ **\<colgroup>**）标签用来定义表中的一组列表。

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容类别</a></th>
   <td>无。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>If the <a href="/zh-CN/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> attribute is present: none, it is an {{Glossary("empty element")}}.<br>
    If the attribute is not present: zero or more {{HTMLElement("col")}} element</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>如果元素的第一个子元素存在且是一个 {{HTMLElement("col")}} 元素，而且在它之前没有省略了结束标签的 {{HTMLElement("colgroup")}} 元素，元素的开始标签可以被省略。<br>
    如果之后没有紧跟一个空格或注释，元素的结束标签可以被省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>一个 {{HTMLElement("table")}} 元素。The {{HTMLElement("colgroup")}} must appear after any optional {{HTMLElement("caption")}} element but before any {{HTMLElement("thead")}}, {{HTMLElement("th")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} and {{HTMLElement("tr")}} element.</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA roles</th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLTableColElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此标签支持 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `align` {{deprecated_inline}}

  - : 这个可枚举的属性定义每一列的元素内容的水平对齐方式，支持的值有：

    - `left`，元素中的内容左对齐
    - `center`，元素中的内容居中对齐
    - `right`，元素中的内容右对齐
    - `justify`，插入空格，使元素中内容两端对齐
    - `char`，针对确定的字符，设置一个最小偏移量，来进行布局，通过 [`char`](/zh-CN/docs/Web/HTML/Element/col#char) 和 [`charoff`](/zh-CN/docs/Web/HTML/Element/col#charoff) 属性进行定义 {{unimplemented_inline(2212)}}。此属性的默认值为 `left`。后代 {{HTMLElement("col")}} 元素可以用它们自己的 [`align`](/zh-CN/docs/Web/HTML/Element/col#align) 属性值来重写该属性。

    > **备注：** 不要使用这个属性，它在最新的标准中已经不被支持。
    >
    > - 若要实现与 `left`, `center`, `right` 或 `justify` 相同的效果：
    > - 不要为一个 {{HTMLElement("colgroup")}} 元素选择器设置 {{cssxref("text-align")}} 属性.，因为{{HTMLElement("td")}} 元素并不是 {{HTMLElement("colgroup")}} 元素的后代，不继承于它。
    > - 如果表格不使用 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) 属性，每列用一个 `td:nth-child(an+b)` 的 CSS 选择器，a 是表格中列的总数，b 是当前列在表格中的位列次序号。只有在这个选择器之后， {{cssxref("text-align")}} 属性可以使用。
    > - 如果表格使用了 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) 属性，可以通过合并足够多的属性选择器来实现同样的效果，比如 `[colspan=n]`，但这不常用。
    > - 若要实现与 `char` 相同的效果：在 CSS3 中，你可以使用 [`char`](/zh-CN/docs/Web/HTML/Element/colgroup#char) 作为 {{cssxref("text-align")}} 的属性值。 {{unimplemented_inline}}

- `bgcolor` {{Non-standard_inline}}

  - : 这个属性用于定义列组中的每一个列成员的背景颜色。在 [sRGB](http://www.w3.org/Graphics/Color/sRGB) 的定义中，它是一个以 '#' 开头的 6 位 16 进制值，有 16 个预定义的表示颜色的字符串可以使用

    > **备注：** 不要使用这个并未标准化的属性，它只在 IE 的某些版本中生效，{{HTMLElement("colgroup")}} 标签应该使用 CSS 来定义样式。要实现和 **bgcolor** 属性相似的效果，可以在相关的 {{HTMLElement("td")}} 标签上使用 {{cssxref("background-color")}} 属性。 |

- `char` {{deprecated_inline}}

  - : This attribute specifies the alignment of the content in a column group to a character. Typical values for this include a period (.) when attempting to align numbers or monetary values. If [`align`](/zh-CN/docs/Web/HTML/Element/colgroup#align) is not set to `char`, this attribute is ignored, though it will still be used as the default value for the [`align`](/zh-CN/docs/Web/HTML/Element/col#align) of the {{HTMLElement("col")}} which are members of this column group.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the [`char`](/zh-CN/docs/Web/HTML/Element/colgroup#char), in CSS3, you can use the character set using the [`char`](/zh-CN/docs/Web/HTML/Element/colgroup#char) attribute as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- `charoff` {{deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the **char** attribute.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard.

- `span`

  - : This attribute contains a positive integer indicating the number of consecutive columns the `<colgroup>` element spans. If not present, its default value is `1`.

    > **备注：** This attribute is applied on the attributes of the column group, it has no effect on the CSS styling rules associated with it or, even more, to the cells of the column's members of the group. The `span` attribute is not permitted if there are one or more `<col>` elements within the `<colgroup>`.

- `valign` {{deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard:
    >
    > - Do not try to set the {{cssxref("vertical-align")}} property on a selector giving a {{HTMLElement("colgroup")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("colgroup")}} element, they won't inherit it.
    > - If the table doesn't use a [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the {{cssxref("vertical-align")}} property can be used.
    > - If the table does use a [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- `width`
  - : This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form `0*`, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as `0.5*` also can be used.

## 示例

请参考 {{HTMLElement("table")}} 页面以查看 `<colgroup>` 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与表格有关的 HTML 元素：{{HTMLElement("caption")}}，{{HTMLElement("col")}}，{{HTMLElement("table")}}，{{HTMLElement("tbody")}}，{{HTMLElement("td")}}，{{HTMLElement("tfoot")}}，{{HTMLElement("th")}}，{{HTMLElement("thead")}}，{{HTMLElement("tr")}}；
- 对 `<col>` 元素编写样式时特别有用的 CSS 属性和伪类：

  - {{cssxref("width")}} 属性可用于控制列宽；
  - {{cssxref(":nth-child")}} 伪类可用于针对特定单元格设置对齐方式；
  - {{cssxref("text-align")}} 属性可用于按照某一个字符对齐所有单元格的内容，例如 '.'。

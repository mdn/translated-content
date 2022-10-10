---
title: <td>：表格数据单元格元素
slug: Web/HTML/Element/td
---

{{HTMLRef}}

**HTML `<td>` 元素** 定义了一个包含数据的表格单元格。It participates in the _table model_.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td>Sectioning root.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>The start tag is mandatory.<br>
    The end tag may be omitted, if it is immediately followed by a {{HTMLElement("th")}} or {{HTMLElement("td")}} element or if there are no more data in its parent element.</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>{{HTMLElement("tr")}} 元素。</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLTableDataCellElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素支持[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- {{htmlattrdef("abbr")}} {{Deprecated_Inline}}
  - : This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.

    > **备注：** Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the **title** attribute.
- {{htmlattrdef("align")}} {{Deprecated_Inline}}
  - : This enumerated attribute specifies how the cell content's horizontal alignment will be handled. Possible values are:

    - `left`: The content is aligned to the left of the cell.
    - `center`: The content is centered in the cell.
    - `right`: The content is aligned to the right of the cell.
    - `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.
    - `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the {{htmlattrxref("char", "td")}} and {{htmlattrxref("charoff", "td")}} attributes {{unimplemented_inline(2212)}}.The default value when this attribute is not specified is `left`.

    > **备注：** Do not use this attribute as it is obsolete in the latest standard.
    >
    > - To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS {{cssxref("text-align")}} property to the element.
    > - To achieve the same effect as the `char` value, give the {{cssxref("text-align")}} property the same value you would use for the {{htmlattrxref("char", "td")}}. {{unimplemented_inline}} in CSS3.

- {{htmlattrdef("axis")}} {{Deprecated_Inline}}
  - : This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.

    > **备注：** Do not use this attribute as it is obsolete in the latest standard.
- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}
  - : This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings.

    > **备注：** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The {{HTMLElement("td")}} element should be styled using [CSS](/zh-CN/docs/CSS). To create a similar effect use the {{cssxref("background-color")}} property in [CSS](/zh-CN/docs/CSS) instead.

- {{htmlattrdef("char")}} {{Deprecated_Inline}}
  - : The content in the cell element is aligned to a character. Typical values include a period (.) to align numbers or monetary values. If {{htmlattrxref("align", "td")}} is not set to `char`, this attribute is ignored.

    > **备注：** Do not use this attribute as it is obsolete in the latest standard. To achieve the same effect, you can specify the character as the first value of the {{cssxref("text-align")}} property, {{unimplemented_inline}} in CSS3.
- {{htmlattrdef("charoff")}} {{Deprecated_Inline}}
  - : This attribute is used to shift column data to the right of the character specified by the **char** attribute. Its value specifies the length of this shift.

    > **备注：** Do not use this attribute as it is obsolete in the latest standard.
- {{htmlattrdef("colspan")}}
  - : This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
- {{htmlattrdef("headers")}}
  - : This attribute contains a list of space-separated strings, each corresponding to the **id** attribute of the {{HTMLElement("th")}} elements that apply to this element.
- {{htmlattrdef("height")}} {{Deprecated_inline("html 4")}}
  - : This attribute is used to define a recommended cell height.

    > **备注：** Do not use this attribute as it is obsolete in the latest standard: use the CSS {{cssxref("height")}} property instead.
- {{htmlattrdef("rowspan")}}
  - : This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534.
- {{htmlattrdef("scope")}} {{Deprecated_Inline}}
  - : This enumerated attribute defines the cells that the header (defined in the {{HTMLElement("th")}}) element relates to.

    > **备注：** Using this attribute with a table cell element is obsolete in the latest standard. Use this attribute only with the {{HTMLElement("th")}} element to define the row or column for which it is a header.
- {{htmlattrdef("valign")}} {{Deprecated_Inline}}
  - : This attribute specifies how a text is vertically aligned inside a cell. Possible values for this attribute are:

    - `baseline`: Positions the text near the bottom of the cell and aligns it with the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom. If characters don't descend below the baseline, the baseline value achieves the same effect as `bottom`.
    - `bottom`: Positions the text near the bottom of the cell.
    - `middle`: Centers the text in the cell.
    - and `top`: Positions the text near the top of the cell.

    > **备注：** Do not use this attribute as it is obsolete in the latest standard: use the CSS {{cssxref("vertical-align")}} property instead.
- {{htmlattrdef("width")}} {{Deprecated_inline("html 4")}}
  - : This attribute is used to define a recommended cell width. Additional space can be added with the [cellspacing](/zh-CN/docs/Web/API/HTMLTableElement/cellSpacing) and [cellpadding](/zh-CN/docs/Web/API/HTMLTableElement/cellPadding) properties and the width of the {{HTMLElement("col")}} element can also create extra width. But, if a column's width is too narrow to show a particular cell properly, it will be widened when displayed.

    > **备注：** Do not use this attribute as it is obsolete in the latest standard: use the CSS {{cssxref("width")}} property instead.

## 例子

请在 {{HTMLElement("table")}} 上查看 `<td>` 的例子。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与表格有关的 HTML 元素：{{HTMLElement("caption")}}、{{HTMLElement("col")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("table")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("th")}}、{{HTMLElement("thead")}}、{{HTMLElement("tr")}}。

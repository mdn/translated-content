---
title: <tr>
slug: Web/HTML/Element/tr
---

**HTML `<tr>` 元素**定义表格中的行。同一行可同时出现{{HTMLElement("td")}} 和{{HTMLElement("th")}} 元素。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td>None</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>Zero or more {{HTMLElement("td")}} or {{HTMLElement("th")}} elements, or a mix of them</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>Start tag is mandatory. End tag may be omitted if the {{HTMLElement("tr")}} element is immediately followed by a {{HTMLElement("tr")}} element, or if the parent table group ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} or {{HTMLElement("tfoot")}}) element doesn't have any more content</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>{{HTMLElement("table")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} or {{HTMLElement("tfoot")}} element</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLTableRowElement")}}</td>
  </tr>
 </tbody>
</table>

## Attributes

表格标签支持 [全局特性](/zh-CN/docs/HTML/Global_attributes)。还有一些过期的特性，你应该避免使用它们，但是可以了解它们，会在你阅读旧代码的时候有所帮助。

- `align` {{Deprecated_inline}}

  - : 该枚举属性指定每个单元格中内容的水平对齐方式，可使用的属性值如下：

    - `left`, 内容在单元格中左对齐
    - `center`, 内容在单元格中居中
    - `right`, 内容在单元格中右对齐
    - `justify`, 增加文本内容之间的空白以伸展这行文本，使得该单元格中的多行文本具有相同的长度。
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](/zh-CN/docs/Web/HTML/Element/tr#char) and [`charoff`](/zh-CN/docs/Web/HTML/Element/tr#charoff) attributes {{unimplemented_inline("2212")}}If this attribute is not set, the parent node's value is inherited.

    > **备注：** Do not use this attribute as it is obsolete (not supported) in the latest standard.
    >
    > - To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS {{cssxref("text-align")}} property on it.
    > - To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](/zh-CN/docs/Web/HTML/Element/tr#char) as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- `bgcolor` {{Deprecated_inline}}

  - : This attribute defines the background color of each cell of the row. It can be either an [hexadecimal `#RRGGBB` or `#RGB` value](</zh-CN/docs/Web/CSS/color_value#rgb()>) or a [color keyword](/zh-CN/docs/Web/CSS/color_value#Color_keywords).

    > **备注：** the {{HTMLElement("tr")}} element should be styled using [CSS](/zh-CN/docs/CSS). To give a similar effect to the **bgcolor** attribute, use the [CSS](/zh-CN/docs/CSS) property {{cssxref("background-color")}}.

- `char` {{Deprecated_inline}}

  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If [`align`](/zh-CN/docs/Web/HTML/Element/tr#align) is not set to `char`, this attribute is ignored.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the [`char`](/zh-CN/docs/Web/HTML/Element/tr#char), in CSS3, you can use the character set using the [`char`](/zh-CN/docs/Web/HTML/Element/tr#char) attribute as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- `charoff` {{Deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard.

- `valign` {{Deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS {{cssxref("vertical-align")}} property on it.

## Examples

See {{HTMLElement("table")}} for examples on `<tr>`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<tr>` element:

  - the {{cssxref(":nth-child")}} pseudo-class to set the alignment on the cells of the column;
  - the {{cssxref("text-align")}} property to align all cells content on the same character, like '.'.<

{{HTMLSidebar}}

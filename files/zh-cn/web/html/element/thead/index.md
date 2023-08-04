---
title: <thead>
slug: Web/HTML/Element/thead
---

[HTML](/zh-CN/docs/Web/HTML) 的 **`<thead>`** 元素定义了一组定义表格的列头的行。

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容类别</a></th>
   <td>无。</td>
  </tr>
  <tr>
   <th scope="row">允许内容</th>
   <td>零或多个{{ HTMLElement("tr") }}元素。</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>开头的标签是强制的。如果{{ HTMLElement("thead") }} 元素后直接跟 {{ HTMLElement("tbody") }}或{{ HTMLElement("tfoot") }}元素，结尾的标签可以被省略。</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>A {{ HTMLElement("table") }} element. The {{ HTMLElement("thead") }} must appear after any {{ HTMLElement("caption") }} or {{ HTMLElement("colgroup") }} element, even implicitly defined, but before any {{ HTMLElement("tbody") }}, {{ HTMLElement("tfoot") }} and {{ HTMLElement("tr") }} element.</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLTableSectionElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

This element includes the [global attributes](/zh-CN/docs/Web/HTML/Global_attributes).

- `align` {{Deprecated_Inline}}

  - : This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](/zh-CN/docs/Web/HTML/Element/thead#char) and [`charoff`](/zh-CN/docs/Web/HTML/Element/thead#charoff) attributes {{ unimplemented_inline("2212") }}.If this attribute is not set, the `left` value is assumed.

    > **备注：** Do not use this attribute as it is obsolete (not supported) in the latest standard.
    >
    > - To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS {{ cssxref("text-align") }} property on it.
    > - To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](/zh-CN/docs/Web/HTML/Element/thead#char) as the value of the {{ cssxref("text-align") }} property {{ unimplemented_inline() }}.

- `bgcolor` {{ Non-standard_inline() }}

  - : This attribute defines the background color of each cell of the column. It is one of the 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB), prefixed by a '#'. One of the sixteen predefined color strings may be used.

    > **备注：** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: the {{ HTMLElement("thead") }} element should be styled using [CSS](/zh-CN/docs/CSS). To give a similar effect to the **bgcolor** attribute, use the [CSS](/zh-CN/docs/CSS) property {{ cssxref("background-color") }}, on the relevant {{ HTMLElement("td") }} or {{ HTMLElement("th") }} elements.

- `char` {{Deprecated_Inline}}

  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If [`align`](/zh-CN/docs/Web/HTML/Element/tr#align) is not set to `char`, this attribute is ignored.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the [`char`](/zh-CN/docs/Web/HTML/Element/thead#char), in CSS3, you can use the character set using the [`char`](/zh-CN/docs/Web/HTML/Element/thead#char) attribute as the value of the {{ cssxref("text-align") }} property {{ unimplemented_inline() }}.

- `charoff` {{Deprecated_Inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard.

- `valign` {{Deprecated_Inline}}

  - : This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - `top`, which will put the text as close to the top of the cell as it is possible.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS {{ cssxref("vertical-align") }} property on it.

## 示例

See {{ HTMLElement("table") }} for examples on `<thead>`.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Other table-related HTML Elements: {{ HTMLElement("caption") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }}, {{ HTMLElement("td") }}, {{ HTMLElement("tfoot") }}, {{ HTMLElement("th") }}, {{ HTMLElement("tr") }};
- CSS properties and pseudo-classes that may be specially useful to style the `<thead>` element:

  - the {{ cssxref(":nth-child") }} pseudo-class to set the alignment on the cells of the column;
  - the {{ cssxref("text-align") }} property to align all cells content on the same character, like '.'.<

{{HTMLSidebar}}

---
title: <col>
slug: Web/HTML/Element/col
---

{{HTMLRef}}

**HTML `<col>` 元素** 定义表格中的列，并用于定义所有公共单元格上的公共语义。它通常位于{{HTMLElement("colgroup")}}元素内。

此元素允许使用 CSS 进行样式列，但只有少数属性将对该列产生影响（请参阅列表的[CSS 2.1 规范](https://www.w3.org/TR/CSS21/tables.html#columns)）。

- _[Content categories](/zh-CN/docs/HTML/Content_categories)_ None.
- _Permitted content_ None, it is an {{Glossary("empty element")}}.
- _Tag omission_ The start tag is mandatory, but, as it is a void element, the use of an end tag is forbidden.
- _Permitted parent elements_ {{HTMLElement("colgroup")}} only, though it can be implicitly defined as its start tag is not mandatory. The {{HTMLElement("colgroup")}} must not have a {{htmlattrxref("span", "colgroup")}} attribute.
- \_Permitted ARIA roles_None
- _DOM interface_ {{domxref("HTMLTableColElement")}}

## 属性

该元素包含一些全局属性 [全局属性](/zh-CN/docs/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{Deprecated_inline("html4.01")}}
  - : This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the {{htmlattrxref("char", "col")}} and {{htmlattrxref("charoff", "col")}} attributes {{unimplemented_inline(2212)}}.If this attribute is not set, its value is inherited from the {{htmlattrxref("align", "colgroup")}} of the {{HTMLElement("colgroup")}} element this `<col>` element belongs too. If there are none, the `left` value is assumed.

    > **备注：** Do not use this attribute as it is obsolete (not supported) in the latest standard.
    > To achieve the same effect as the `left`, `center`, `right` or `justify` values:
    >
    > - Do not try to set the {{cssxref("text-align")}} property on a selector giving a {{HTMLElement("col")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("col")}} element, they won't inherit it.
    > - If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use the `td:nth-child(an+b)` CSS selector where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the {{cssxref("text-align")}} property can be used.
    > - If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.
    > - To achieve the same effect as the `char` value, in CSS3, you can use the value of the {{htmlattrxref("char", "col")}} as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}
  - : 定义列中对应的每个单元格的背景色。其值是 [sRGB](http://www.w3.org/Graphics/Color/sRGB) 定义的 6 位 16 进制代码之一，前缀为 '#'。也可以使用以下 16 个预定义的颜色字符

    注意：不要使用这个属性，它是非标准的，并且只实现了 IE 浏览器中的部分版本：{{HTMLElement("col")}} 元素的样式应该使用 [CSS](/zh-CN/docs/CSS). 在{{HTMLElement("td")}}元素上使用 [CSS](/zh-CN/docs/CSS) 的 {{cssxref("background-color")}} 属性即可实现相同效果。

- {{htmlattrdef("char")}} {{Deprecated_inline("html4.01")}}
  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "col")}} is not set to `char`, this attribute is ignored.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the {{htmlattrxref("char", "col")}}, in CSS3, you can use the character set using the {{htmlattrxref("char", "col")}} attribute as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.
- {{htmlattrdef("charoff")}} {{Deprecated_inline("html4.01")}}
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard.
- {{htmlattrdef("span")}}
  - : 该属性值为一个正整数，表示该 \<col> 元素横跨的列数。默认值为 1
- {{htmlattrdef("valign")}} {{Deprecated_inline("html4.01")}}
  - : This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](http://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **备注：** Do not use this attribute as it is obsolete (and not supported) in the latest standard:
    >
    > - Do not try to set the {{cssxref("vertical-align")}} property on a selector giving a {{HTMLElement("col")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("col")}} element, they won't inherit it.
    > - If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use the `td:nth-child(an+b)` CSS selector where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the {{cssxref("vertical-align")}} property can be used.
    > - If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- {{htmlattrdef("width")}} {{Deprecated_Inline}}
  - : This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form `0*`, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as `0.5*` also can be used.

## 示例

详见 {{HTMLElement("table")}} 页面 `<col>` 标签的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<col>` element:

  - the {{cssxref("width")}} property to control the width of the column;
  - the {{cssxref(":nth-child")}} pseudo-class to set the alignment on the cells of the column;
  - the {{cssxref("text-align")}} property to align all cells content on the same character, like '.'.

{{ HTMLRef }}

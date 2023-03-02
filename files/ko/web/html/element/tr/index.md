---
title: <tr>
slug: Web/HTML/Element/tr
---

## 개요

The _HTML Table Row Element_ (`<tr>`) defines a row of cells in a table. Those can be a mix of {{HTMLElement("td")}} and {{HTMLElement("th")}} elements.

## 사용 문맥

| [콘텐츠 범주](/ko/docs/HTML/Content_categories) | None.                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 허용되는 콘텐츠                                                           | Zero or more {{HTMLElement("td")}} or {{HTMLElement("th")}} elements, or a mix of them                                                                                                                                                                                                                                               |
| 태그 생략                                                                 | The start tag is mandatory. The end tag may be omitted if the {{HTMLElement("tr")}} element is immediately followed by a {{HTMLElement("tr")}} element, or if the parent table group ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} or {{HTMLElement("tfoot")}}) element doesn't have any more content. |
| 허용되는 부모 요소                                                        | A {{HTMLElement("table")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} or {{HTMLElement("tfoot")}} element.                                                                                                                                                                                                |
| Normative document                                                        | [HTML, "The `tr` element"](http://www.whatwg.org/html/#the-tr-element)                                                                                                                                                                                                                                                                             |

## 속성

This element includes the [global attributes](/ko/docs/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cells
    - `center`, centering the content in the cells
    - `right`, aligning the content to the right of the cells
    - `justify`, widening the spaces in the textual content so that the content is justified in the cells
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the {{htmlattrxref("char", "tr")}} and {{htmlattrxref("charoff", "tr")}} attributes {{unimplemented_inline("2212")}}.

    If this attribute is not set, the parent node's value is inherited.

    > **참고:**Do not use this attribute as it is obsolete (not supported) in the latest standard.- To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS {{cssxref("text-align")}} property on it.
    >
    > - To achieve the same effect as the `char` value, in CSS3, you can use the value of the {{htmlattrxref("char", "tr")}} as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

<!---->

- {{htmlattrdef("bgcolor")}} {{deprecated_inline}}

  - : This attribute defines the background color of each cell of the row. It can be either an [#RRGGBB code](/ko/docs/CSS/color_value#HTML.2fSVG.2fX11.c2.a0_Color_Keywords) or an [SVG color keyword](/#HTML.2fSVG.2fX11.c2.a0_Color_Keywords).

    > **참고:** **Usage note:** the {{HTMLElement("tr")}} element should be styled using [CSS](/ko/docs/CSS). To give a similar effect to the **bgcolor** attribute, use the [CSS](/ko/docs/CSS) property {{cssxref("background-color")}}.

<!---->

- {{htmlattrdef("char")}} {{deprecated_inline}}

  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "tr")}} is not set to `char`, this attribute is ignored.

    > **참고:**Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the {{htmlattrxref("char", "tr")}}, in CSS3, you can use the character set using the {{htmlattrxref("char", "tr")}} attribute as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

<!---->

- {{htmlattrdef("charoff")}} {{deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.

    > **참고:**Do not use this attribute as it is obsolete (and not supported) in the latest standard.

<!---->

- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](http://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **참고:**Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS {{cssxref("vertical-align")}} property on it.

## DOM 인터페이스

This element implements the {{domxref("HTMLTableRowElement")}} interface.

## 예제

See {{HTMLElement("table")}} for examples on `<tr>`.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<tr>` element:

  - the {{cssxref(":nth-child")}} pseudo-class to set the alignment on the cells of the column;
  - the {{cssxref("text-align")}} property to align all cells content on the same character, like '.'.<

{{HTMLSidebar}}

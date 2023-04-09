---
title: <td>
slug: Web/HTML/Element/td
---

{{HTMLSidebar}}

_Table cell_ [HTML](/ko/docs/Web/HTML) 요소 (**`<td>`**) 는 데이터를 포함하는 표의 셀을 정의합니다. 이것은 *표 모델*에 참여합니다.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a>and send us a pull request.</p>

| [컨텐츠 범주](/ko/docs/Web/HTML/Content_categories) | 없음.                                                                                                                                                                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 허용된 컨텐츠                                       | 플로우 컨텐츠                                                                                                                                                                                                  |
| 태그 생략                                           | 시작 태그는 있어야 합니다. 종료 태그는 요소 바로 뒤에 {{HTMLElement("th")}}이나 {{HTMLElement("td")}} 요소가 뒤따르거나, 부모 요소에 더 이상 다른 데이터가 없을 경우 생략 가능합니다.            |
| 허용된 부모 요소                                    | {{HTMLElement("tr")}} 요소                                                                                                                                                                              |
| 표준 문서                                           | [HTML5, section 4.9.9](http://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-td-element) ([HTML4.01, section 11.2.6](http://www.w3.org/TR/REC-html40/struct/tables.html#h-11.2.6)) |

## 속성

이 요소는 [전역 속성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("abbr")}} {{deprecated_inline}}

  - : This attribute contains a short abbreviated description of the content of the cell. Some user-agents, such as speech readers, may present this description before the content itself.

    > **참고:**이 속성은 최신 표준에서 폐기되었기 떄문에 사용해서는 안됩니다: instead either consider starting the cell content by an independent abbreviated content itself or use the abbreviated content as the cell content and use the long content as the description of the cell by putting it in the **title** attribute.

- {{htmlattrdef("align")}} {{Deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the {{htmlattrxref("char", "td")}} and {{htmlattrxref("charoff", "td")}} attributes {{unimplemented_inline(2212)}}.

    If this attribute is not set, the `left` value is assumed.

    > **참고:**Do not use this attribute as it is obsolete (not supported) in the latest standard.- To achieve the same effect as the `left`, `center`, `right`, or `justify` values, use the CSS {{cssxref("text-align")}} property on it.
    >
    > - To achieve the same effect as the `char` value, in CSS3, you can use the value of the {{htmlattrxref("char", "td")}} as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- {{htmlattrdef("axis")}} {{deprecated_inline}}

  - : This attribute contains a list of space-separated strings. Each string is the ID of a group of cells that this header applies to.

    > **참고:**Do not use this attribute as it is obsolete in the latest standard: instead use the {{htmlattrxref("scope", "td")}} attribute.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : This attribute defines the background color of each cell of the column. It is one of the 6-digit hexadecimal codes as defined in [sRGB](http://www.w3.org/Graphics/Color/sRGB), prefixed by a '#'. One of the sixteen predefined color strings may be used:

    |     | `black` = "#000000"   |     | `green` = "#008000"  |
    | --- | --------------------- | --- | -------------------- |
    |     | `silver` = "#C0C0C0"  |     | `lime` = "#00FF00"   |
    |     | `gray` = "#808080"    |     | `olive` = "#808000"  |
    |     | `white` = "#FFFFFF"   |     | `yellow` = "#FFFF00" |
    |     | `maroon` = "#800000"  |     | `navy` = "#000080"   |
    |     | `red` = "#FF0000"     |     | `blue` = "#0000FF"   |
    |     | `purple` = "#800080"  |     | `teal` = "#008080"   |
    |     | `fuchsia` = "#FF00FF" |     | `aqua` = "#00FFFF"   |

    > **참고:** **Usage note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: the {{HTMLElement("td")}} element should be styled using [CSS](/ko/docs/CSS). To give a similar effect to the **bgcolor** attribute, use the [CSS](/ko/docs/Web/CSS) property {{cssxref("background-color")}} instead.

<dl><dt>{{htmlattrdef("char")}} {{Deprecated_inline}}</dt><dd>This attribute is used to set the character to align the cells in a column. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "td")}} is not set to <code>char</code>, this attribute is ignored.<div class="note"><strong>Note: </strong>Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the {{htmlattrxref("char", "thead")}}, in CSS3, you can use the character set using the {{htmlattrxref("char", "th")}} attribute as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.</div></dd><dt>{{htmlattrdef("charoff")}} {{Deprecated_inline}}</dt><dd>This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the <strong>char</strong> attribute.<div class="note"><strong>Note: </strong>Do not use this attribute as it is obsolete (and not supported) in the latest standard.</div></dd><dt>{{htmlattrdef("colspan")}}</dt><dd>This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is <code>1</code>; if its value is set to <code>0</code>, it extends until the end of the {{HTMLElement("colgroup")}}, even if implicitly defined, that the cell belongs to. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).<div class="note"><strong>Note: </strong>In HTML5 this attribute only accepts values greater than zero since it <a href="http://dev.w3.org/html5/spec/single-page.html#attr-tdth-colspan">must not be used to overlap cells</a>. Besides, Firefox is the only browser to support the 0 value as defined in the HTML 4.01 specification.</div></dd><dt>{{htmlattrdef("headers")}}</dt><dd>This attribute contains a list of space-separated strings, each corresponding to the <strong>id</strong> attribute of the {{HTMLElement("th")}} elements that apply to this element.</dd><dt>{{htmlattrdef("rowspan")}}</dt><dd>This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is <code>1</code>; if its value is set to <code>0</code>, it extends until the end of the table section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, even if implicitly defined, that the cell belongs to. Values higher than 65534 are clipped down to 65534.</dd><dt>{{htmlattrdef("scope")}} {{deprecated_inline}}</dt><dd></dd><dt>{{htmlattrdef("valign")}} {{Deprecated_inline}}</dt><dd>This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are:<ul><li><code>baseline</code>, which will put the text as close to the bottom of the cell as it is possible, but align it on the <a href="http://en.wikipedia.org/wiki/Baseline_%28typography%29">baseline</a> of the characters instead of the bottom of them. If characters are all of the same size, this has the same effect as <code>bottom</code>.</li><li><code>bottom</code>, which will put the text as close to the bottom of the cell as it is possible</li><li><code>middle</code>, which will center the text in the cell</li><li>and <code>top</code>, which will put the text as close to the top of the cell as it is possible.</li></ul><div class="note"><strong>Note: </strong>Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS {{cssxref("vertical-align")}} property on it.</div></dd></dl>

## DOM 인터페이스

이 요소는 {{domxref("HTMLTableDataCellElement")}} 인터페이스를 구현합니다.

## 예제

Please see the {{HTMLElement("table")}} page for examples on `<td>`.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 표 관련 요소들: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}.

{{HTMLSidebar}}

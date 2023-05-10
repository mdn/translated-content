---
title: <colgroup>
slug: Web/HTML/Element/colgroup
---

{{HTMLSidebar}}

**HTML `<colgroup>` 요소**는 표의 열을 묶는 그룹을 정의합니다.

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a>and send us a pull request.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>없음.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        {{htmlattrxref("span", "colgroup")}} 특성이 존재하는 경우
        없음. {{glossary("empty element", "빈 요소")}}입니다.<br />그렇지
        않은 경우 0개 이상의 {{htmlelement("col")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        첫 번째 자식이 {{htmlelement("col")}} 요소이며, 바로 앞의 요소가
        닫는 태그를 생략한 <code>&#x3C;colgroup></code> 요소가 아닐 때, 여는
        태그를 생략할 수 있습니다.<br />바로 뒤에 스페이스나 주석이 오지 않으면
        닫는 태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("table")}} 요소. <code>&#x3C;colgroup></code>은
        모든 {{HTMLElement("thead")}}, {{HTMLElement("th")}},
        {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}},
        {{HTMLElement("tr")}} 요소 앞에 위치해야 하며,
        <code>&#x3C;table></code> 안에 {{htmlelement("caption")}}
        요소가 존재하는 경우 <code>&#x3C;caption></code> 뒤에 와야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : 열 그룹의 배경색. '#' 문자로 시작하는 [6자리 16진수 RGB 코드](/ko/docs/Web/CSS/color_value#RGB_색상) 또는 [사전 정의된 색상 키워드](/ko/docs/Web/CSS/color_value#색상_키워드)를 사용할 수 있습니다.

    > **참고:** 표준 특성이 아니므로 사용하지 마세요. 배경색을 적용하려면 CSS {{cssxref("background-color")}} 특성을 사용해야 합니다.

- {{htmlattrdef("span")}}
  - : `<colgroup>`이 차지할 열의 수를 나타내는 양의 정수. 기본값은 1입니다. 내부에 {{htmlelement("col")}} 요소가 존재하면 사용할 수 없습니다.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the {{htmlattrxref("char", "col")}} and {{htmlattrxref("charoff", "col")}} attributes.

    If this attribute is not set, the `left` value is assumed. The descendant {{HTMLElement("col")}} elements may override this value using their own {{htmlattrxref("align", "col")}} attribute.

    > **Note:** Do not try to set the {{cssxref("text-align")}} property on a selector giving a {{HTMLElement("colgroup")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("colgroup")}} element, they won't inherit it.
    >
    > If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use one `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the `text-align` property can be used.
    >
    > If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}

  - : The background color of the table. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/color_value#rgb_colors), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/color_value#color_keywords) can also be used.

    To achieve a similar effect, use the CSS {{cssxref("background-color")}} property.

- {{htmlattrdef("char")}} {{deprecated_inline}}
  - : This attribute specifies the alignment of the content in a column group to a character. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "colgroup")}} is not set to `char`, this attribute is ignored, though it will still be used as the default value for the {{htmlattrxref("align", "col")}} of the {{HTMLElement("col")}} which are members of this column group.
- {{htmlattrdef("charoff")}} {{deprecated_inline}}
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the `char` attribute.
- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not try to set the {{cssxref("vertical-align")}} property on a selector giving a `<colgroup>` element. Because {{HTMLElement("td")}} elements are not descendant of the `<colgroup>` element, they won't inherit it.
    >
    > If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use the `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the `vertical-align` property can be used.
    >
    > If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

## 예제

`<colgroup>` 요소의 예제는 {{htmlelement("table")}} 요소 문서에서 볼 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

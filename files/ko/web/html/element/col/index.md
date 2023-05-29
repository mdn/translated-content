---
title: <col>
slug: Web/HTML/Element/col
---

{{HTMLSidebar}}

**HTML `<col>` 요소**는 표의 열을 나타내며, 열에 속하는 칸에 공통된 의미를 부여할 때 사용합니다. {{htmlelement("colgroup")}} 안에서 찾을 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

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
        없음. {{glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{htmlattrxref("span", "colgroup")}} 특성을 지정하지 않은
        {{HTMLElement("colgroup")}} 요소.
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

- {{htmlattrdef("span")}}
  - : `<col>`이 차지할 열의 수를 나타내는 양의 정수. 기본값은 1입니다.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell

    If this attribute is not set, its value is inherited from the {{htmlattrxref("align", "colgroup")}} of the {{HTMLElement("colgroup")}} element this `<col>` element belongs too. If there are none, the `left` value is assumed.

    > **Note:** To achieve the same effect as the `left`, `center`, `right` or `justify` values, do not try to set the {{cssxref("text-align")}} property on a selector giving a `<col>` element. Because {{HTMLElement("td")}} elements are not descendant of the `<col>` element, they won't inherit it.
    >
    > If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.
    >
    > If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}

  - : The background color of the table. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/color_value#rgb_colors), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/color_value#color_keywords) can also be used.

    To achieve a similar effect, use the CSS {{cssxref("background-color")}} property.

- {{htmlattrdef("char")}} {{deprecated_inline}}
  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "col")}} is not set to `char`, this attribute is ignored.
- {{htmlattrdef("charoff")}} {{deprecated_inline}}
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the `char` attribute.
- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not try to set the {{cssxref("vertical-align")}} property on a selector giving a `<col>` element. Because {{HTMLElement("td")}} elements are not descendant of the `<col>` element, they won't inherit it.
    >
    > If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use the `td:nth-child(an+b)` CSS selector where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the `vertical-align` property can be used.
    >
    > If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form `0*`, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as `5*` also can be used.

## 예제

`<col>` 요소의 예제는 {{htmlelement("table")}} 요소 문서에서 볼 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

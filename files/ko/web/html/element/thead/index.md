---
title: '<thead>: 표 머릿글 요소'
slug: Web/HTML/Element/thead
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
browser-compat: html.elements.thead
---

{{HTMLRef}}

**`<thead>`** [HTML](/ko/docs/Web/HTML) 요소는 테이블의 열의 머리글인 행들의 집합입니다.

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>없음.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>0개 이상의 {{HTMLElement("tr")}} 요소.</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        여는 태그는 필수입니다. {{HTMLElement("thead")}} 요소 뒤에 {{HTMLElement("tbody")}} 또는 {{HTMLElement("tfoot")}} 요소가 바로 이어지는 경우에는 닫는 태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("table")}} 요소. {{HTMLElement("thead")}} 요소는 무조건 {{HTMLElement("caption")}} 또는 {{HTMLElement("colgroup")}} 요소 뒤에 (암시적으로 정의된 경우에도) 위치해야 하지만, {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} 과 {{HTMLElement("tr")}} 요소의 앞에 위치해야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <code
          ><a href="/ko/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role"
            >rowgroup</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

### 더 이상 사용하지 않는 특성

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : 아래에 나열된 속성들은 각 셀 컨텐츠의 수평 정렬 방법을 지정합니다. 가능한 값:

    - `left`, 컨텐츠를 셀의 왼쪽으로 정렬합니다.
    - `center`, 컨텐츠를 셀의 가운데로 정렬합니다.
    - `right`, 컨텐츠를 셀의 오른쪽으로 정렬합니다.
    - `justify`, 컨텐츠가 셀의 양쪽으로 정렬되도록 텍스트 컨텐츠에 공백을 삽입합니다.
    - `char`, {{htmlattrxref("char", "thead")}} 와 {{htmlattrxref("charoff", "thead")}} 특성에 의해 정해지는 최소 오프셋을 가진 특수 문자에 대해 텍스트 컨텐츠를 정렬합니다.

    만약 값이 따로 할당되어 있지 않다면 `left` 가 기본값으로 지정됩니다.

    > **주의:** 이 속성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오.
    >
    > - `left`, `center`, `right` 또는 `justify` 값과 같은 효과를 내고 싶다면, CSS {{cssxref("text-align")}} 속성을 적용하세요.
    > - `char` 값과 같은 효과를 내고 싶다면, CSS3에서 {{cssxref("text-align")}} 속성의 값으로 {{htmlattrxref("char", "thead")}}의 값을 사용할 수 있습니다.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : 이 특성은 열의 각 셀의 배경색을 정의합니다. 앞에 '#'을 붙인 [sRGB](https://www.w3.org/Graphics/Color/sRGB) 6자리 16진수 코드입니다. 미리 정의된 16개의 색상 문자열을 사용할 수도 있습니다.

    - `black` = "#000000"
    - `green` = "#008000"
    - `silver` = "#C0C0C0"
    - `lime` = "#00FF00"
    - `gray` = "#808080"
    - `olive` = "#808000"
    - `white` = "#FFFFFF"
    - `yellow` = "#FFFF00"
    - `maroon` = "#800000"
    - `navy` = "#000080"
    - `red` = "#FF0000"
    - `blue` = "#0000FF"
    - `purple` = "#800080"
    - `teal` = "#008080"
    - `fuchsia` = "#FF00FF"
    - `aqua` = "#00FFFF"

    > **Note:** 이 특성은 표준이 아니며, Microsoft Internet Explorer의 몇몇 버전에서만 구현되므로 사용하지 마십시오. {{HTMLElement("thead")}} 요소에 스타일을 적용하려면 [CSS](/en-US/docs/Web/CSS)를 사용해야 합니다. **bgcolor** 특성과 비슷한 효과를 내고 싶다면, 관련된 {{HTMLElement("td")}} 또는 {{HTMLElement("th")}} 요소에 [CSS](/en-US/docs/Web/CSS) {{cssxref("background-color")}} 속성을 사용하세요.

- {{htmlattrdef("char")}} {{deprecated_inline}}

  - : 이 특성은 열의 셀을 정렬할 문자를 설정하는 데 사용됩니다. 숫자 또는 통화 값을 정렬할 때에는 일반적으로 마침표(.)가 포함됩니다. 만약 {{htmlattrxref("align", "thead")}}이 `char`로 설정되어 있지 않으면, 이 특성은 무시됩니다.

    > **Note:** 이 특성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오. {{htmlattrxref("char", "thead")}}와 같은 효과를 내고 싶다면, CSS3에서 {{htmlattrxref("char", "thead")}} 특성을 {{cssxref("text-align")}} 속성의 값으로 하여 문자 집합을 사용할 수 있습니다.

- {{htmlattrdef("charoff")}} {{deprecated_inline}}

  - : 이 특성은 **char** 특성으로 지정된 정렬 문자에서 열 데이터를 오프셋할 문자의 수를 나타내는 데 사용됩니다.

    > **주의:** 이 특성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오.

- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : 이 특성은 표 머리글의 각 행 내에 있는 텍스트의 수직 정렬 방식을 지정합니다. 이 특성에 사용 가능한 값:

    - `baseline`, 텍스트를 가능한 셀의 하단에 가깝게, 하지만 텍스트의 [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29)에 맞춰 배치합니다. 만약 문자들의 크기가 모두 같다면, 이것은 `bottom`과 같은 효과를 가집니다.
    - `bottom`, 텍스트를 가능한 한 셀의 하단에 가깝게 배치합니다.
    - `middle`, 텍스트를 셀의 가운데에 배치합니다.
    - `top`, 텍스트를 가능한 한 셀의 상단에 가깝게 배치합니다.

    > **Note:** 이 특성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오. 대신 CSS의 {{cssxref("vertical-align")}} 속성을 적용하세요.

## 예제

`<thead>`에 대한 예제는 {{HTMLElement("table")}}을 참고해 주세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테이블과 관련된 다른 HTML 요소들: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}.
- `<thead>` 요소에 스타일을 지정할 때 특히 유용할 CSS 속성과 가상 클래스들:

  - 각 열의 셀들을 정렬할 때 사용하는 {{cssxref(":nth-child")}} 가상 클래스.
  - '.'같은 동일한 문자에 모든 셀 내용을 정렬할 때 사용하는 {{cssxref("text-align")}} 속성.

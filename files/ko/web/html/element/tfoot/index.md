---
title: "<tfoot>: 표 바닥글 요소"
slug: Web/HTML/Element/tfoot
---

{{HTMLSidebar}}

[HTML](/ko/docs/Web/HTML) 요소는 테이블의 열을 요약하는 행들의 집합입니다.
{{EmbedInteractiveExample("pages/tabbed/tfoot.html","tabbed-taller")}}

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
      <td>0개 이상의 {{HTMLElement("tr")}} 요소.</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        여는 태그는 필수입니다. 부모 {{HTMLElement("table")}} 요소에 더
        이상의 컨텐츠가 없는 경우에는 닫는 태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("table")}}요소. {{HTMLElement("tfoot")}}
        요소는 무조건 {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}},
        {{HTMLElement("tbody")}}, 또는 {{HTMLElement("tr")}} 요소
        뒤에 위치해야 합니다. 이것이 HTML5에서의 요구 사항임에 주의해야
        합니다.<br />HTML4에서는 {{HTMLElement("tfoot")}} 요소는
        {{HTMLElement("tbody")}} 와 {{HTMLElement("tr")}} 요소의
        뒤에 배치할 수 없습니다. 이것은 위의 HTML5에서의 요구 사항과 완전히
        모순된다는 것에 주의해야 합니다.
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

다음 특성은 더 이상 사용되지 않으므로 사용해서는 안 됩니다. 이 특성들은 기존 코드를 업데이트할 때 참조하는 용도와, 역사적인 흥미를 위해서만 작성되어 있습니다.

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : 아래에 나열된 속성들은 각 셀 컨텐츠의 수평 정렬 방법을 지정합니다. 가능한 값:

    - `left`, 컨텐츠를 셀의 왼쪽으로 정렬합니다.
    - `center`, 컨텐츠를 셀의 가운데로 정렬합니다.
    - `right`, 컨텐츠를 셀의 오른쪽으로 정렬합니다.
    - `justify`, 컨텐츠가 셀의 양쪽으로 정렬되도록 텍스트 컨텐츠에 공백을 삽입합니다.
    - `char`, [`char`](/ko/docs/Web/HTML/Element/tbody#char) 와 [`charoff`](/ko/docs/Web/HTML/Element/tbody#charoff) 특성에 의해 정해지는 최소 오프셋을 가진 특수 문자에 대해 텍스트 컨텐츠를 정렬합니다.
      만약 값이 따로 할당되어 있지 않다면 `left` 가 기본값으로 지정됩니다.

    > **주의:**
    >
    > - `left`, `center`, `right` 또는 `justify` 값과 같은 효과를 내고 싶다면, CSS {{cssxref("text-align")}} 속성을 적용하세요.
    > - `char` 값과 같은 효과를 내고 싶다면, CSS3에서 [`char`](/ko/docs/Web/HTML/Element/tfoot#char)의 값을 {{cssxref("text-align")}} 속성의 {{unimplemented_inline}} 값으로 사용할 수 있습니다.

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}
  - : 표의 배경 색입니다. '`#`'이 앞에 붙는 [6자리의 16진수 RGB 코드](/ko/docs/Web/CSS/color_value#rgb_colors) 형식으로 작성합니다. 이미 정의되어 있는 [color keywords](/ko/docs/Web/CSS/color_value#color_keywords) 도 사용할 수 있습니다.
    비슷한 효과를 적용하고 싶다면 CSS {{cssxref("background-color")}} 속성을 사용합니다.
- {{htmlattrdef("char")}} {{deprecated_inline}}
  - : 이 특성은 열을 특정 문자에 대해 정렬하도록 지정합니다. 숫자 또는 통화 값을 정렬할 때에는 일반적으로 마침표(.)가 포함됩니다. 만약 [`align`](/ko/docs/Web/HTML/Element/tfoot#align) 이 `char`로 설정되어 있지 않으면, 이 특성은 무시됩니다.
- {{htmlattrdef("charoff")}} {{deprecated_inline}}
  - : 이 특성은 `char` 특성으로 지정된 정렬 문자에서 열 데이터를 오프셋할 문자의 수를 나타내는 데 사용됩니다.
- {{htmlattrdef("valign")}} {{deprecated_inline}}
  - : 이 특성은 표 바닥글의 각 행 내에 있는 텍스트의 수직 정렬 방식을 지정합니다. 이 특성에 사용 가능한 값:
- `baseline`, 텍스트를 가능한 한 셀의 하단에 가깝게, 하지만 텍스트의 [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) 에 맞춰 배치합니다. 만약 문자들의 크기가 모두 같다면, 이것은 `bottom`과 같은 효과를 가집니다.
- `bottom`, 텍스트를 가능한 한 셀의 하단에 가깝게 배치합니다.
- `middle`, 텍스트를 셀의 가운데에 배치합니다.
- `top`, 텍스트를 가능한 한 셀의 상단에 가깝게 배치합니다.

> **주의:** 이 속성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오. 대신 CSS의 {{cssxref("vertical-align")}} 속성을 적용하세요.

## 예제

에 대한 예제는 {{HTMLElement("table")}}을 참고해 주세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테이블과 관련된 다른 HTML 요소들: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}.
- `tfoot` 요소에 스타일을 지정할 때 특히 유용할 CSS 속성과 가상 클래스들:
  - 각 열의 셀들을 정렬할 때 사용하는 {{cssxref(":nth-child")}} 가상 클래스.
  - '.'같은 동일한 문자에 모든 셀 내용을 정렬할 때 사용하는 {{cssxref("text-align")}} 속성.

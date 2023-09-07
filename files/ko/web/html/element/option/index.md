---
title: <option>
slug: Web/HTML/Element/option
---

{{HTMLSidebar}}

**HTML `<option>` 요소**는 {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("datalist")}} 요소의 항목을 정의합니다. 그러므로, `<option>`을 사용해 팝업 메뉴 등 목록에서 하나의 항목을 나타낼 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

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
        텍스트. 이스케이프 처리한 문자(<code>&#x26;eacute;</code> 등)도 가능.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        여는 태그는 필수입니다. 바로 뒤따르는 요소가
        {{htmlelement("optgroup")}}, 다른
        <code>&#x3C;option></code>이거나, 자신이 부모의 마지막 자식이라면 닫는
        태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("select")}}, {{HTMLElement("optgroup")}},
        {{HTMLElement("datalist")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("disabled")}}
  - : 지정한 경우 이 옵션을 선택할 수 없습니다. 브라우저에서, 비활성화 옵션은 주로 회색으로 보이며, 클릭과 포커스 등 모든 이벤트를 받지 않습니다. `<option>`에 `disabled` 특성을 추가하지 않더라도, {{HTMLElement("optgroup")}} 등 조상 요소로 인해 비활성화될 수 있습니다.
- {{htmlattrdef("label")}}
  - : 옵션의 뜻을 나타내는 텍스트. 지정하지 않은 경우, 요소의 텍스트 콘텐츠를 대신 사용합니다.
- {{htmlattrdef("selected")}}
  - : 지정한 경우 초기에 이 옵션을 선택한 상태로 설정합니다. [`multiple`](/ko/docs/Web/HTML/Element/select#multiple)를 지정하지 않은 {{HTMLElement("select")}} 요소의 자손인 경우, 하나의 `<option>`만 `selected` 특성을 가질 수 있습니다.
- {{htmlattrdef("value")}}
  - : 양식 데이터를 구성할 때 사용할 값. 지정하지 않은 경우, 요소의 텍스트 콘텐츠를 대신 사용합니다.

## 예제

{{HTMLElement("select")}} 요소를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

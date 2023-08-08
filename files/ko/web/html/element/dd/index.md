---
title: <dd>
slug: Web/HTML/Element/dd
---

{{HTMLSidebar}}

**HTML `<dd>` 요소**는 정의 목록 요소({{HTMLElement("dl")}})에서 앞선 용어({{htmlelement("dt")}})에 대한 설명, 정의, 또는 값을 제공합니다.

{{EmbedInteractiveExample("pages/tabbed/dd.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>없음.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        여는 태그는 필수입니다. 바로 다음 요소가 <code>&#x3C;dd></code> 또는
        {{HTMLElement("dt")}}거나, 자신이 부모의 마지막 자식이라면 닫는
        태그는 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("dl")}} 또는 ({{glossary("WHATWG")}}
        HTML에서) {{HTMLElement("dl")}} 안의 {{htmlelement("div")}}
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 이전 형제 요소</th>
      <td>{{HTMLElement("dt")}} 또는 다른 <code>&#x3C;dd></code>.</td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/definition_role'><code>definition</code></a></td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("nowrap")}} {{Non-standard_inline}}
  - : 값이 `yes`면 너비의 끝에서 정의 텍스트의 줄이 바뀌지 않습니다. 기본값은 `no`입니다.

## 예제

예제를 보려면 [`<dl>` 예제](/ko/docs/HTML/Element/dl#예제)를 보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLELement("dl")}}
- {{HTMLElement("dt")}}

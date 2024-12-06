---
title: <dt> 설명 용어
slug: Web/HTML/Element/dt
---

{{HTMLSidebar}}

**HTML `<dt>` 요소**는 설명 혹은 정의 리스트에서 용어를 정의합니다. 따라서 반드시 {{htmlelement("dl")}}(설명 목록) 요소 안에 위치해야 합니다. 보통 하나의 `<dt>` 뒤에 하나의 {{htmlelement("dd")}} 요소가 뒤따르는 것이 일반적이나, 여러 개의 `<dt>` 요소가 연속으로 있는 경우, 바로 다음 {{htmlelement("dd")}} 요소가 앞의 `<dt>` 요소들을 한 번에 설명합니다.

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request. -->

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 예제

[\<dl> 요소의 예제](/ko/docs/Web/HTML/Element/dl#예제)를 확인하세요.

## 기술 요약
<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/HTML/Content_categories"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>없음.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. 단, {{htmlelement("header")}},
        {{htmlelement("footer")}}, 구획 콘텐츠, 제목 콘텐츠 자손은
        불가능.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        여는 태그는 필수입니다. 바로 다음 요소가 {{htmlelement("dd")}}
        또는 <code>&#x3C;dt></code>거나, 자신이 부모의 마지막 자식이라면 닫는
        태그 생략 가능.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("dl")}} 안의, {{htmlelement("dd")}} 혹은
        다른 <code>&#x3C;dt></code> 앞. 또는 ({{glossary("WHATWG")}}
        HTML에서) {{htmlelement("dl")}} 안의
        {{htmlelement("div")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td><a href='https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role'>해당 역할 없음</a></td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role"><code>listitem</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}} Gecko 1.9.2(Firefox 4)부터 Firefox는 이 요소에 대한 HTMLSpanElement 인터페이스를 구현함.</td>
    </tr>
  </tbody>
</table>


## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("dd")}}, {{HTMLElement("dl")}}

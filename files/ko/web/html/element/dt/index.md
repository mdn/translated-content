---
title: "<dt>: 설명 용어 요소"
slug: Web/HTML/Element/dt
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

**`<dt>`** [HTML](https://github.com/en-US/docs/Web/HTML) 요소는 설명 또는 정의 목록에서 용어를 지정하며, 반드시 {{HTMLElement("dl")}} 요소 안에서 사용해야 합니다. 일반적으로 {{HTMLElement("dd")}} 요소가 뒤따르지만, 연속된 여러 `<dt>` 요소는 모두 다음에 나오는 단일 {{HTMLElement("dd")}} 요소에 의해 정의되는 여러 용어를 나타냅니다.

뒤이어 나오는 {{HTMLElement("dd")}} (설명 세부사항) 요소는 `<dt>`로 지정된 용어와 관련된 정의나 기타 관련 텍스트를 제공합니다.

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 예제

예시는 [`<dl>` 요소에 제공된 예제](https://github.com/en-US/docs/Web/HTML/Element/dl#예제)를 참고하세요.

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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">해당 역할 없음</a></td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><a href="/ko/docs/Web/Accessibility/ARIA/Roles/listitem_role"><code>listitem</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}} Gecko 1.9.2(Firefox 4)부터 Firefox는 이 요소에 대한 {{domxref("HTMLSpanElement")}} 인터페이스를 구현함.</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("dd")}}, {{HTMLElement("dl")}}

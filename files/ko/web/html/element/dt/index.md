---
title: <dt>
slug: Web/HTML/Element/dt
---

{{HTMLSidebar}}

**HTML `<dt>` 요소**는 설명 혹은 정의 리스트에서 용어를 나타냅니다. {{htmlelement("dl")}} 요소 안에 위치해야 합니다. 보통 {{htmlelement("dd")}} 요소가 뒤따르지만, 여러 개의 \<dt> 요소를 연속해 배치하면 바로 다음 {{htmlelement("dd")}} 요소로 한꺼번에 서술할 수 있습니다.

뒤따르는 {{htmlelement("dd")}} 요소가 `<dt>`로 지정한 용어의 정의와 기타 관련 글을 제공합니다.

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

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
        >. 단, {{htmlelement("header")}},
        {{htmlelement("footer")}}, 구획 콘텐츠, 제목 콘텐츠 자손은
        불가능합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        여는 태그는 필수입니다. 바로 다음 요소가 {{htmlelement("dd")}}
        또는 <code>&#x3C;dt></code>거나, 자신이 부모의 마지막 자식이라면 닫는
        태그는 생략할 수 있습니다.
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
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/term_role'><code>term</code></a></td>
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

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 예제

[\<dl> 요소의 예제](/ko/docs/Web/HTML/Element/dl#예제)를 확인하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("dd")}}, {{HTMLElement("dl")}}

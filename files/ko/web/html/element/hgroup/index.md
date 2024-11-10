---
title: <hgroup>
slug: Web/HTML/Element/hgroup
---

{{HTMLSidebar}}

**HTML `<hgroup>` 요소**는 문서 구획의 다단계 제목을 나타냅니다. 다수의 `{{htmlelement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}}` 요소를 묶을 때 사용합니다.

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 제목 콘텐츠, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        하나 이상의 {{HTMLElement("h1")}}, {{HTMLElement("h2")}},
        {{HTMLElement("h3")}}, {{HTMLElement("h4")}},
        {{HTMLElement("h5")}}, {{HTMLElement("h6")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 규칙</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/tab_role'><code>tab</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

> **참고:** `<hgroup>` 요소는 W3C HTML5 명세에서 제거되었고, WHATWG판 HTML에만 남아있습니다. 그러나 대부분의 브라우저에서 부분적으로 구현 중이므로 사라지지는 않을 것으로 보입니다.
> 다만, `<hgroup>` 요소의 주요 목적이 [HTML 명세의 개요 알고리즘](/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)에서 제목의 표시 방법을 설정하기 위함이며, **어떠한 브라우저도 개요 알고리즘을 구현하지 않았음**을 고려할 때, `<hgroup>`의 의미는 이론적으로만 유효합니다.
> W3C HTML5 명세에서 `<hgroup>` 없이 [부제, 보조 제목, 태그라인의 마크업 방법](https://www.w3.org/TR/html52/common-idioms-without-dedicated-elements.html#common-idioms-without-dedicated-elements)에 대한 조언을 제공하고 있습니다.

`<hgroup>` 요소는 문서 구획의 주 제목과 2차 제목을 연결해, 제목-부제목과 같은 "다단계 제목"을 만들 수 있습니다.

다른 말로 하면, `<hgroup>` 요소는 자신의 2차 `{{htmlelement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}}`이 문서 개요에 자신의 구획을 생성하는 것을 방지합니다.

따라서 [HTML 개요 알고리즘](/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)이 생성한 추상적 개요 내에서, `<hgroup>`은 논리적인 단일 제목을 형성하고, `<hgroup>`의 자식 제목 요소가 그 안에 하나로 포함됩니다.

## 예제

```html
<hgroup>
  <h1>주요 제목</h1>
  <h2>부제목</h2>
</hgroup>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 구획 관련 다른 요소: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [HTML5 문서의 구획과 개요](/ko/docs/Sections_and_Outlines_of_an_HTML5_document).

---
title: <main>
slug: Web/HTML/Element/main
---

{{HTMLSidebar}}

**HTML `<main>` 요소**는 문서 {{HTMLElement("body")}}의 주요 콘텐츠를 나타냅니다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어집니다.

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-standard")}}

[`hidden`](/ko/docs/Web/HTML/Global_attributes#hidden) 속성 없이는 문서에 하나보다 많은 `<main>` 요소가 존재해선 안됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리">콘텐츠 카테고리</a>
      </th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          title="HTML/Content_categories#Flow_content"
          >플로우 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          title="HTML/Content_categories#Flow_content"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 요소. 단,
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >구조적으로 올바른 <code>&#x3C;main></code> 요소</a
        >여야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        기본적으로 <code>main</code> 역할 포함,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a> 가능.
      </td>
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

`<main>` 요소의 콘텐츠는 문서의 유일한 내용이어야 합니다. 사이드바, 탐색 링크, 저작권 정보, 사이트 로고, 검색 폼 등 여러 문서에 걸쳐 반복되는 콘텐츠는 포함해선 안됩니다. 그러나 검색 폼이 페이지의 주요 기능이라면 예외로 둘 수 있습니다.

`<main>`은 요소 개요에 영향을 주지 않습니다. {{htmlelement("body")}} 등의 요소나 {{htmlelement("h2")}}와 같은 제목 요소와 달리 `<main>`은 페이지의 개념적 구조를 바꾸지 않으며 온전히 정보 제공용입니다.

## 예제

```html
<!-- other content -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      These bright red apples are the most common found in many supermarkets.
    </p>
    <p>...</p>
    <p>...</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for apple pies.</p>
    <p>...</p>
    <p>...</p>
  </article>
</main>

<!-- other content -->
```

## 접근성 고려사항

### 랜드마크

`<main>` 요소는 [`main` 랜드마크](/ko/docs/Web/Accessibility/ARIA/Roles/Main_role) 역할과 동일하게 행동합니다. [랜드마크](/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques)는 접근성 보조기술이 문서의 큰 구획을 찾고 이동할 때 쓰입니다. 구형 브라우저를 지원할 필요가 없다면, `role="main"`보다 `<main>` 요소를 사용하세요.

### 건너뛰기 링크

건너뛰기 링크, 스킵 내비게이션(skipnav)은 접근성 보조기술이 주요 탐색 구획, 정보 배너 등 반복되는 큰 구획을 빠르게 넘어갈 수 있도록 지원하는 기법으로, 사용자가 페이지의 주요 내용으로 신속하게 접근할 수 있도록 도와줍니다.

`<main>` 요소에 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 요소를 추가해 건너뛰기 링크의 대상으로 지정하세요.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

### 읽기 모드

브라우저 읽기 모드는 문서 콘텐츠를 변환할 때 `<main>` 요소와 더불어 [제목](/ko/docs/Web/HTML/Element/Heading_Elements)과 [콘텐츠 구획](/ko/docs/Web/HTML/Element#콘텐츠_구획) 요소를 사용합니다.

- [Building websites for Safari Reader Mode and other reading apps.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## 명세

{{Specifications}}

## 브라우저 호환성

대부분의 브라우저에서 `<main>` 요소를 지원합니다. 그러나 Internet Explorer 11 이하를 지원할 땐 `<main>` 요소에 `"main"` {{glossary("ARIA")}} 역할을 명시해 접근성을 확보하는 것이 좋습니다.

```html
<main role="main">...</main>
```

{{Compat}}

## 같이 보기

- 기본 구조 요소: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- 구획 관련 요소: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}
- [ARIA: Main role](/ko/docs/Web/Accessibility/ARIA/Roles/Main_role)

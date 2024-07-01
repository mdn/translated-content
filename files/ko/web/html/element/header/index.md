---
title: <header>
slug: Web/HTML/Element/header
---

{{HTMLSidebar}}

**HTML `<header>` 요소**는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. 단, 다른 <code>&#x3C;header></code> 또는
        {{htmlelement("footer")}}가 자손으로 올 수 없습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. 단, {{htmlelement("address")}},
        {{htmlelement("footer")}}, 또는 다른 <code>&#x3C;header></code>의
        자손으로 사용할 수 없습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/group_role'><code>group</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>
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

`<header>` 요소는 구획 콘텐츠가 아니므로 개요에 구획을 생성하지 않습니다. 대신 주위 구획의 제목({{htmlelement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}} 요소)을 감싸기 위한 요소지만, 필수 사항은 **아닙니다**.

### 역사적 사용처

`<header>`는 {{glossary("HTML5")}}에서야 명세에 포함됐지만, 사실 HTML의 시작부터 존재했습니다. [세계 최초의 웹사이트](http://info.cern.ch/)에서 확인할 수 있듯 원래는 {{htmlelement("head")}}요소로서 사용했지만, 어느 순간부터 다른 이름이 됐습니다. 덕분에 `<header>`는 나중에 다른 역할을 맡을 수 있었습니다.

## 예제

### 페이지 제목

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

### 글 제목

```html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>
      Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by
      Jane Smith
    </p>
  </header>
  <p>
    We live on a planet that's blue and green, with so many things still unseen.
  </p>
  <p>
    <a href="https://janesmith.com/the-planet-earth/">Continue reading....</a>
  </p>
</article>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

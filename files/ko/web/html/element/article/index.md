---
title: <article>
slug: Web/HTML/Element/article
---

{{HTMLSidebar}}

**HTML `<article>` 요소**는 문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다. 사용 예제로 게시판과 블로그 글, 매거진이나 뉴스 기사 등이 있습니다.

{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}

하나의 문서가 여러 개의 `<article>`을 가질 수 있습니다. 예컨대 사용자가 스크롤하면 계속해서 다음 글을 보여주는 블로그의 경우, 각각의 글이 `<article>` 요소가 되며, 그 안에는 또 여러 개의 {{htmlelement("section")}}이 존재할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a
            href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
            title="HTML/Content_categories"
            >콘텐츠 카테고리</a
          ></dfn
        >
      </th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          title="HTML/Content categories#Flow content"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구획_콘텐츠"
          >구획 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#뚜렷한_컨텐츠"
          >뚜렷한 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>가능한 콘텐츠</dfn></th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          title="HTML/Content_categories#Flow_content"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>태그 생략</dfn></th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row"><dfn>가능한 부모 요소</dfn></th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#Flow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.<br /><code>&#x3C;article></code> 요소는
        {{HTMLElement("address")}}의 후손이 될 수 없음에 주의하세요.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/article_role'><code>article</code></a></td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/application_role'><code>application</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/document_role'><code>document</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/feed_role'><code>feed</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/main_role'><code>main</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/none_role'><code>none</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/region_role'><code>region</code></a>
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

- 각각의 `<article>`을 식별할 수단이 필요합니다. 주로 제목({{htmlelement('h1')}}-{{htmlelement('h6')}}) 요소를 `<article>`의 자식으로 포함하는 방법을 사용합니다.
- `<article>` 요소가 중첩되어 있을 때, 안쪽에 있는 요소는 바깥쪽에 있는 요소와 관련된 글을 나타냅니다. 예를 들어 블로그 글의 댓글은, 글을 나타내는 `<article>` 요소 안에 중첩한 `<article>`로 나타낼 수 있습니다.
- `<article>` 요소의 작성자 정보를 {{HTMLElement("address")}} 요소를 이용하여 제공할 수 있습니다. 그러나 중첩 `<article>`에는 적용되지 않습니다.
- `<article>` 요소의 작성일자와 시간은 {{HTMLElement("time")}} 요소의 [`datetime`](/ko/docs/Web/HTML/Element/time#datetime) 속성을 이용하여 설명할 수 있습니다. 참고로 {{HTMLElement("time")}} 요소의 [`pubdate`](/ko/docs/Web/HTML/Element/time#pubdate) 속성은 더 이상 {{glossary("W3C")}} {{glossary("HTML5")}} 표준안에 포함되지 않습니다.

## 예제

```html
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on <time datetime="2015-05-16 19:00">May 16</time> by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>Posted on <time datetime="2015-05-17 19:00">May 17</time> by Tom.</p>
      </footer>
    </article>
  </section>
  <footer>
    <p>Posted on <time datetime="2015-05-15 19:00">May 15</time> by Staff.</p>
  </footer>
</article>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

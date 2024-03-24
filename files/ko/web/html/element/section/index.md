---
title: "<section>: 일반 구획 요소"
slug: Web/HTML/Element/section
---

{{HTMLSidebar}}

**HTML `<section>` 요소**는 HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용합니다. 보통 `<section>`은 제목을 포함하지만, 항상 그런 것은 아닙니다.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

> **참고:** 요소의 콘텐츠를 외부와 구분하여 단독으로 묶는 것이 나아보인다면 {{htmlelement("article")}} 요소가 더 좋은 선택일 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구획_콘텐츠"
          >구획 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
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
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.<br />단, <code>&#x3C;section></code> 요소는
        {{HTMLElement("address")}}의 자손이 될 수 없습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/alert_role'><code>alert</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/alertdialog_role'><code>alertdialog</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/application_role'><code>application</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/banner_role'><code>banner</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/complementary_role'><code>complementary</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/contentinfo_role'><code>contentinfo</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/dialog_role'><code>dialog</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/document_role'><code>document</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/feed_role'><code>feed</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/log_role'><code>log</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/main_role'><code>main</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/marquee_role'><code>marquee</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/navigation_role'><code>navigation</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/search_role'><code>search</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/status_role'><code>status</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/tabpanel_role'><code>tabpanel</code></a>
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

- 각각의 `<section>`을 식별할 수단이 필요합니다. 주로 제목({{htmlelement('h1')}}-{{htmlelement('h6')}}) 요소를 `<section>`의 자식으로 포함하는 방법을 사용합니다.
- 요소의 콘텐츠를 따로 구분해야 할 필요가 있으면 {{htmlelement("article")}} 요소를 고려하세요.
- `<section>` 요소를 일반 컨테이너로 사용하지 마세요. 특히 단순한 스타일링이 목적이라면 {{htmlelement("div")}} 요소를 사용해야 합니다. 대개, 문서 요약에 해당 구획이 논리적으로 나타나야 하면 `<section>`이 좋은 선택입니다.

## 예제

### 이전

```html
<div>
  <h2>Heading</h2>
  <img>some image</img>
</div>
```

### 이후

```html
<section>
  <h2>Heading</h2>
  <img>some image</img>
</section>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [ARIA: Region role](/ko/docs/Web/Accessibility/ARIA/Roles/Region_role)

---
title: "<h1>–<h6>: HTML 구획 제목 요소"
slug: Web/HTML/Element/Heading_Elements
---

{{HTMLSidebar}}

**HTML `<h1>`–`<h6>` 요소**는 6단계의 구획 제목을 나타냅니다. 구획 단계는 `<h1>`이 가장 높고 `<h6>`은 가장 낮습니다.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

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
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#제목_콘텐츠"
          >제목 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
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
        >를 허용하는 모든 요소. {{HTMLElement("hgroup")}} 요소의 자식으로
        사용하지 마세요. 더 이상 쓰이지 않는 요소입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/tab_role'><code>tab</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

`<h1>`-`<h6>` 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

- 사용자 에이전트가 제목의 정보를 사용해 자동으로 문서 콘텐츠의 표를 만드는 등의 작업을 수행할 수 있습니다.
- 글씨 크기를 위해 제목 태그를 사용하지 마세요. 대신 {{glossary("CSS")}}의 {{cssxref("font-size")}} 속성을 사용하세요.
- 제목 단계를 건너뛰는 것을 피하세요. 언제나 `<h1>`로 시작해서, `<h2>`, 순차적으로 기입하세요.
- 페이지 당 하나의 `<h1>`만 사용하세요. 여러 개를 써도 오류는 나지 않겠지만, 단일 `<h1>`이 모범 사례로 꼽힙니다. 논리적으로 생각했을 때도, `<h1>`은 가장 중요한 제목이므로 전체 페이지의 목적을 설명해야 할 것입니다. 두 개의 제목을 가진 책이나, 여러 개의 이름을 가진 영화는 볼 수 없죠! 또한 스크린 리더 사용자와 {{glossary("SEO")}}에도 더 적합합니다.

## 예제

### 모든 제목 단계

다음 코드는 모든 단계의 제목을 보입니다.

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

{{ EmbedLiveSample('모든_제목_단계', '280', '300', '') }}

### 예제 페이지

다음 코드는 약간의 제목과 내용을 보여줍니다.

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

{{ EmbedLiveSample('예제_페이지', '280', '480', '') }}

## 접근성 고려사항

### 탐색

스크린 리더 사용자가 흔히 사용하는 탐색 기법은 제목에서 제목으로 뛰어넘으며 페이지 콘텐츠를 빠르게 파악하는 것입니다. 따라서 제목 단계를 뛰어넘으면 중간에 빠진 제목이 어디 있는 건지 모르므로 사용자의 혼란을 야기할 수 있습니다.

#### 하지 말것

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

#### 할것

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### 중첩

하위 구획으로 제목을 중첩해 콘텐츠의 구조를 나타낼 수 있습니다. 대부분의 스크린 리더는 페이지의 제목을 정렬한 목록도 생성해 제공하므로, 사용자가 빠르게 콘텐츠 구조를 파악할 수 있도록 도와줍니다.

1. `h1` Beetles

   1. `h2` Etymology
   2. `h2` Distribution and Diversity
   3. `h2` Evolution

      1. `h3` Late Paleozoic
      2. `h3` Jurassic
      3. `h3` Cretaceous
      4. `h3` Cenozoic

   4. `h2` External Morphology

      1. `h3` Head

         1. `h4` Mouthparts

      2. `h3` Thorax

         1. `h4` Prothorax
         2. `h4` Pterothorax

      3. `h3` Legs
      4. `h3` Wings
      5. `h3` Abdomen

중첩 제목에서, 하위 구획을 닫을 땐 제목 단계를 위로 "건너뛸" 수 있습니다.

- [Headings • Page Structure • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_—_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### 구획 콘텐츠 레이블

스크린 리더 사용자가 자주 사용하는 다른 기술은 [콘텐츠 구획](/ko/docs/Web/HTML/Element#콘텐츠_구획)의 목록을 생성한 후, 이를 통해 페이지 레이아웃을 파악하는 것입니다.

콘텐츠 구획에는 [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)와 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성을 함께 사용해 이름, 즉 레이블을 붙일 수 있습니다. 레이블은 현재 구획의 목적을 간결하게 설명해야 합니다. 레이블 기법은 한 페이지에 다수의 구획이 있을 때 유용하게 사용할 수 있습니다.

#### 예제

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">주 탐색창</h2>
    <!-- navigation items -->
  </nav>
</header>

<!-- page content -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">하단 탐색창</h2>
    <!-- navigation items -->
  </nav>
</footer>
```

위의 예제에서 스크린 리더는 두 개의 {{HTMLElement("nav")}} 구획이 있으며, 하나는 "주 탐색창", 다른 하나는 "하단 탐색창"이라고 불린다는 사실을 표현합니다. 레이블을 지정하지 않았다면, 사용자가 각 `<nav>` 요소의 콘텐츠를 일일히 분석해 목적을 알아내야 했을 것입니다.

- [Using the aria-labelledby attribute](/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}

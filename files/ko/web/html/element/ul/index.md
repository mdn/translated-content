---
title: <ul>
slug: Web/HTML/Element/ul
---

{{HTMLSidebar}}

**HTML `<ul>` 요소**는 정렬되지 않은 목록을 나타냅니다. 보통 불릿으로 표현합니다.

{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. 또한, 최소 하나의 {{htmlelement("li")}} 요소를 자식으로 둔다면
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#뚜렷한_컨텐츠"
          >뚜렷한 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        0개 이상의 {{htmlelement("li")}},
        {{htmlelement("script")}}, {{htmlelement("template")}}
        요소.
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
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/directory_role'><code>directory</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/group_role'><code>group</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/listbox_role'><code>listbox</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/menu_role'><code>menu</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/menubar_role'><code>menubar</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/radiogroup_role'><code>radiogroup</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/tablist_role'><code>tablist</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/toolbar_role'><code>toolbar</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/tree_role'><code>tree</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

- {{ htmlattrdef("compact") }} {{Deprecated_inline}}

  - : This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the {{glossary("user agent")}}, and it doesn't work in all browsers.

    > **Warning:** Do not use this attribute, as it has been deprecated: use [CSS](/ko/docs/CSS) instead. To give a similar effect as the `compact` attribute, the CSS property {{cssxref("line-height")}} can be used with a value of `80%`.

- {{ htmlattrdef("type") }} {{Deprecated_inline}}

  - : This attribute sets the bullet style for the list. The values defined under [HTML3.2](/ko/docs/HTML3.2) and the transitional version of [HTML 4.0/4.01](/ko/docs/HTML4.01) are:

    `circle`
    `disc`
    `square`

    A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: `<code>`triangle`.

    If not present and if no [CSS](/ko/docs/CSS) {{ cssxref("list-style-type") }} property applies to the element, the user agent selects a bullet type depending on the nesting level of the list.

    > **Warning:** Do not use this attribute, as it has been deprecated; use the [CSS](/ko/docs/Web/CSS) {{ cssxref("list-style-type") }} property instead.

## 사용 일람

보통 비정렬 목록의 항목은 선행하는 불릿 [마커](/ko/docs/Web/CSS/::marker)와 함께 표시합니다.

`<ul>`과 {{htmlelement("ol")}}은 필요한 만큼 중첩할 수 있고, 서로 교차할 수도 있습니다.

`<ul>`과 {{htmlelement("ol")}}은 모두 목록을 나타냅니다. 차이가 있다면 `<ul>`에서는 순서가 중요하지 않다는 점입니다. 항목의 순서를 바꿨을 때 의미도 바뀐다면 {{htmlelement("ol")}}을 사용하세요. 그렇지 않으면 `<ul>`을 사용할 수 있습니다.

## 예제

### 간단한 예제

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

{{EmbedLiveSample("간단한_예제", 400, 100)}}

### 중첩 목록

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- Same for the second nested unordered list! -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <!-- Closing </li> tag for the li that
                  contains the third unordered list -->
      <li>second item third subitem</li>
    </ul>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

{{EmbedLiveSample("중첩_목록", 400, 220)}}

### 비정렬 목록 안의 정렬 목록

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

{{EmbedLiveSample("비정렬_목록_안의_정렬_목록", 400, 150)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 리스트 관련 다른 요소: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- `<ol>` 요소와 유용하게 사용할 수 있는 CSS 속성

  - 서수를 표현할 방식을 지정하는 {{cssxref("list-style")}} 속성.
  - 복잡한 중첩 목록을 처리하기 위한 [CSS 카운터](/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
  - 더 이상 사용하지 않는 `compact` 특성을 대체할 수 있는 {{cssxref("line-height")}}
  - 항목의 들여쓰기를 조정하기 위한 {{cssxref("margin")}} 속성.

---
title: <li>
slug: Web/HTML/Element/li
---

{{HTMLSidebar}}

**HTML `<li>` 요소**는 목록의 항목을 나타냅니다. 반드시 정렬 목록({{htmlelement("ol")}}), 비정렬 목록({{htmlelement("ul")}}, 혹은 메뉴({{htmlelement("menu")}}) 안에 위치해야 합니다. 메뉴와 비정렬 목록에서는 보통 불릿으로 항목을 나타내고, 정렬 목록에서는 숫자나 문자를 사용한 오름차순 카운터로 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리">콘텐츠 카테고리</a>
      </th>
      <td>없음.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        다른 <code>&#x3C;li></code> 요소 바로 뒤따르거나 자신이 부모의 마지막
        자식인 경우 닫는 태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("ul")}}, {{HTMLElement("ol")}},
        {{HTMLElement("menu")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitem_role'><code>menuitem</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role'><code>menuitemcheckbox</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role'><code>menuitemradio</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/option_role'><code>option</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/radio_role'><code>radio</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/separator_role'><code>separator</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/tab_role'><code>tab</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/treeitem_role'><code>treeitem</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("value")}}

  - : {{HTMLElement("ol")}} 요소 내부에서 항목의 현재 서수 값을 나타내는 정수. 리스트가 로마 숫자나 문자로 표시되더라도 이 특성에는 숫자만 넣을수 있습니다. `value`를 지정한 항목을 뒤따르는 다른 항목은 이 값에서부터 번호를 매깁니다. `value` 속성은 비정렬 목록({{HTMLElement("ul")}})과 메뉴({{HTMLElement("menu")}})에서는 아무 의미가 없습니다.

    > **참고:** HTML4에서는 `value`의 사용을 중단했지만 HTML5에서 다시 도입했습니다.

- {{htmlattrdef("type")}} {{Deprecated_inline}}

  - : 넘버링 타입을 나타내는 문자.

    - `a`: 소문자 글자
    - `A`: 대문자 글자
    - `i`: 소문자 로마 숫자
    - `I`: 대문자 문자 숫자
    - `1`: 숫자

    부모 {{HTMLElement("ol")}} 요소에서 지정하는 유형을 덮어씁니다.

    > **참고:** 이 속성은 사용 중단됐습니다. 대신 CSS {{cssxref("list-style-type")}} 속성을 사용하세요.

## 예제

더 자세한 예제는 {{htmlelement("ol")}}과 {{htmlelement("ul")}}을 참고하세요.

### 정렬 목록

```html
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```

{{EmbedLiveSample("정렬_목록")}}

### 사용자 지정 값을 가진 정렬 목록

```html
<ol type="I">
  <li value="3">third item</li>
  <li>fourth item</li>
  <li>fifth item</li>
</ol>
```

{{EmbedLiveSample("사용자_지정_값을_가진_정렬_목록")}}

### 비정렬 목록

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

{{EmbedLiveSample("비정렬_목록")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 리스트 관련 다른 요소: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}.
- `<li>` 요소와 유용하게 사용할 수 있는 CSS 속성

  - 서수를 표현할 방식을 지정하는 {{cssxref("list-style")}} 속성.
  - 복잡한 중첩 목록을 처리하기 위한 [CSS 카운터](/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
  - 항목의 들여쓰기를 조정하기 위한 {{cssxref("margin")}} 속성.

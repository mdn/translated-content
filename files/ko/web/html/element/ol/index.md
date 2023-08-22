---
title: <ol>
slug: Web/HTML/Element/ol
---

{{HTMLSidebar}}

**HTML `<ol>` 요소**는 정렬된 목록을 나타냅니다. 보통 숫자 목록으로 표현합니다.

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

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
      <td>{{DOMxRef("HTMLOListElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("reversed")}}
  - : 목록의 순서 역전 여부. 즉, 내부에 지정한 항목이 역순으로 배열된 것인지 나타냅니다.
- {{htmlattrdef("start")}}
  - : 항목을 셀 때 시작할 수. `type`이 로마 숫자나 영어 문자인 경우에도 아라비아 숫자로 나타낸 정수(1, 2, 3...)만 가능합니다. 그러므로 영어 문자 "d"나 로마 숫자 "iv"부터 세려고 한다면 `start="4"`를 사용하세요.
- {{htmlattrdef("type")}}

  - : 항목을 셀 때 사용할 카운터 유형.

    - `'a'`는 소문자 알파벳,
    - `'A'`는 대문자 알파벳,
    - `'i'`는 소문자 로마 숫자,
    - `'I'`는 대문자 로마 숫자,
    - `'1'` 는 숫자(기본값)을 나타냅니다.

    `type`은 아래의 모든 {{htmlelement("li")}}에 적용되지만, [`type`](/ko/docs/Web/HTML/Element/li#type) 특성을 가진 `<li>`는 그 값을 대신 사용합니다.

    > **참고:** 항목을 각각의 숫자/문자로 참조하는 기술적 또는 법률적 문서가 아니라면 CSS {{cssxref("list-style-type")}} 속성을 대신 사용하세요.

## 사용 일람

보통 정렬 목록의 항목은 선행하는 숫자나 문자 등 [마커](/ko/docs/Web/CSS/::marker)와 함께 표시합니다.

`<ol>`과 {{htmlelement("ul")}}은 필요한 만큼 중첩할 수 있고, 서로 교차할 수도 있습니다.

`<ol>`과 {{htmlelement("ul")}}은 모두 목록을 나타냅니다. 차이가 있다면 `<ol>`에서는 순서가 중요하다는 점입니다. 예를 들어,

- 단계별 요리법
- 내비게이션
- 영양정보에서 비율의 내림차순으로 정렬한 원재료 목록

항목의 순서를 바꿨을 때 의미도 바뀐다면 `<ol>`을 사용하세요. 그렇지 않으면 {{htmlelement("ul")}}을 사용할 수 있습니다.

## 예제

### 간단한 예제

```html
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```

{{EmbedLiveSample("간단한_예제", 400, 100)}}

### 로마 숫자로 표기

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Greivances</li>
  <li>Conclusion</li>
</ol>
```

{{EmbedLiveSample("로마_숫자로_표기", 400, 100)}}

### `start` 특성 사용하기

```html
<p>Finishing places of contestants not in the winners’ circle:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin’ Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

{{EmbedLiveSample("start_특성_사용하기", 400, 100)}}

### 중첩 목록

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag not here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

{{EmbedLiveSample("중첩_목록", 400, 150)}}

### 정렬 목록 안의 비정렬 목록

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <!-- Here is the closing </li> tag -->
  <li>third item</li>
</ol>
```

{{EmbedLiveSample("정렬_목록_안의_비정렬_목록", 400, 150)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 리스트 관련 다른 요소: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- `<ol>` 요소와 유용하게 사용할 수 있는 CSS 속성

  - 서수를 표현할 방식을 지정하는 {{cssxref("list-style")}} 속성.
  - 복잡한 중첩 목록을 처리하기 위한 [CSS 카운터](/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
  - 더 이상 사용하지 않는 `compact` 특성을 대체할 수 있는 {{cssxref("line-height")}}
  - 항목의 들여쓰기를 조정하기 위한 {{cssxref("margin")}} 속성.

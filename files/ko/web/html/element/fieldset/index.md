---
title: "<fieldset>: 필드셋 요소"
slug: Web/HTML/Element/fieldset
---

{{HTMLSidebar}}

**HTML `<fieldset>` 요소**는 웹 양식의 여러 컨트롤과 레이블({{htmlelement("label")}})을 묶을 때 사용합니다.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

위의 예제에서 보듯, `<fieldset>` 요소는 HTML 양식 속에서 그룹을 만들 수 있으며 {{htmlelement("legend")}} 요소로 그룹의 설명을 제공할 수 있습니다. 여러 특성을 지정할 수 있는데, 그 중 중요한 것 하나는 페이지 내 {{htmlelement("form")}} 요소의 `id`를 받을 수 있는 `form` 특성으로, `<form>` 바깥의 `<fieldset>` 요소를 해당 양식에 포함해야 할 때 사용합니다. 다른 하나는 `disabled`로, `<fieldset>`의 모든 콘텐츠를 한 번에 비활성화할 수 있습니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("disabled")}}
  - : 지정한 경우, 모든 자손 컨트롤을 비활성화합니다. 비활성 컨트롤은 편집할 수 없고, {{htmlelement("form")}}을 제출할 때 데이터에 포함되지 않습니다. 마우스 클릭, 포커스 등 브라우저 이벤트도 모두 받지 않습니다. 브라우저는 비활성 컨트롤을 주로 회색으로 표시합니다. 단, {{htmlelement("legend")}} 안의 양식 요소는 비활성 상태로 전환되지 않습니다.
- {{htmlattrdef("form")}}
  - : `<fieldset>` 요소와 연결할 {{htmlelement("form")}} 요소("양식 소유자")의 [`id`](/ko/docs/Web/HTML/Global_attributes#id). `<fieldset>`이 해당 `<form>` 안에 위치하지 않아도 연결할 수 있습니다.
- {{htmlattrdef("name")}}

  - : 그룹과 연관지을 이름.

    > **참고:** `<fieldset>`에 대한 설명은 자신이 포함한 첫 번째 {{htmlelement("legend")}} 요소가 담당합니다.

## CSS 스타일링

`<fieldset>`에 스타일을 적용하기 전에 고려해야 하는 부분이 있습니다.

`<fieldset>`의 {{cssxref("display")}} 속성의 값은 기본적으로 `block`이며, 새로운 [블록 서식 맥락](/ko/docs/Web/Guide/CSS/Block_formatting_context)을 형성합니다. 인라인형 `display` 값을 지정하면 `inline-block`, 그렇지 않으면 `block`처럼 행동합니다. `<fieldset>`은 기본 스타일로 콘텐츠를 감싸는 `2px` 너비의 `groove` 테두리, 작은 양의 내부 여백, 그리고 {{cssxref("min-inline-size", "min-inline-size: min-content")}}를 갖습니다.

{{htmlelement("legend")}} 요소는 `<fieldset>`의 블록 시작 방향(대개 위쪽) 테두리 위를 가로지르는 위치에 놓입니다. `<legend>` 또한 자신의 블록 서식 맥락을 만들며, 너비는 자신의 콘텐츠에 맞춰져 늘어나거나 줄어듭니다. `display`는 항상 블록형이 됩니다. 즉, `display: inline`도 `block`처럼 동작합니다.

`<fieldset>`의 콘텐츠는 별도의 익명 상자가 담게 됩니다. 익명 상자는 `<fieldset>`으로부터 특정 속성을 상속합니다. `<fielset>`에 `display: grid` 또는 `display: inline-grid`를 지정하면 익명 상자는 그리드 서식 맥락을 가지며, `display: flex` 또는 `display: inline-flex`를 지정하면 익명 상자가 플렉스 서식 맥락을 갖습니다. 그 외의 경우 블록 서식 맥락입니다.

> **참고:** 글 작성 시점에서, Microsoft Edge와 Google Chrome에는 {{htmlelement("fieldset")}} 내부에서 플렉스박스와 그리드 레이아웃을 사용할 수 없는 버그가 존재합니다. [GitHub 이슈](https://github.com/w3c/csswg-drafts/issues/321)에서 버그 추적 링크를 확인할 수 있습니다.

## 예제

### 간단한 필드셋

다음 예제는 {{htmlelement("legend")}}와 하나의 컨트롤을 가진 단순한 `<fieldset>`을 보입니다.

```html
<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
    <input type="radio" id="radio" />
    <label for="radio">Spirit of radio</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('간단한_필드셋', '100%', '80') }}

### 비활성 필드셋

다음 예제는 두 개의 컨트롤을 가진 비활성 `<fieldset>`을 보입니다. 각각의 컨트롤은 `disabled` 특성이 없으나, 필드셋으로 인해 함께 비활성 상태가 된 점을 확인할 수 있습니다.

```html
<form action="#">
  <fieldset disabled>
    <legend>Disabled fieldset</legend>
    <div>
      <label for="name">Name: </label>
      <input type="name" id="text" value="Chris" />
    </div>
    <div>
      <label for="pwd">Archetype: </label>
      <input type="password" id="text" value="Wookie" />
    </div>
  </fieldset>
</form>
```

{{ EmbedLiveSample('비활성_필드셋', '100%', '110') }}

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 구획 루트,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >(<a href="/ko/docs/Web/Guide/HTML/Content_categories#나열됨">나열됨</a
        >), 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        선택적인 {{HTMLElement("legend")}} 요소와 그 이후의
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
        >를 허용하는 모든 요소.
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
      <td>{{domxref("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

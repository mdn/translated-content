---
title: content-visibility
slug: Web/CSS/content-visibility
page-type: css-property
browser-compat: css.properties.content-visibility
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

**`content-visibility`** [CSS](/ko/docs/Web/CSS) 속성은 요소가 내용을 렌더링할지 여부를 제어하며, 강력한 포함 규칙 세트를 적용하여 필요한 때까지 레이아웃 및 렌더링 작업의 많은 부분을 생략할 수 있도록 사용자 에이전트가 조정할 수 있게 합니다. 이 속성은 사용자 에이전트가 요소의 렌더링 작업(레이아웃 및 페인팅 포함)을 필요할 때까지 건너뛰게 하여 초기 페이지 로드 속도를 크게 향상시킵니다.

> [!NOTE] > {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 이벤트는 `content-visibility: auto`가 설정된 요소에서 렌더링 작업이 시작되거나 건너뛰기를 멈출 때마다 발생합니다. 이 이벤트를 통해 애플리케이션 코드가 렌더링 프로세스를 시작하거나 중지할 수 있어, 필요하지 않을 때는 예를 들어 {{htmlelement("canvas")}}에서 그리기 작업을 중단하여 처리 능력을 절약할 수 있습니다.

{{EmbedInteractiveExample("pages/css/content-visibility.html")}}

## 구문

```css
/* Keyword values */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Global values */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

### 값

- `visible`
  - : 효과가 없습니다. 요소의 콘텐츠가 일반적으로 레이아웃되고 렌더링됩니다.
- `hidden`
  - : 요소가 [컨텐츠를 건너뜁니다](/ko/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). 건너뛴 콘텐츠는 페이지 내 검색, 탭 순서 탐색 등 사용자 에이전트 기능에 접근할 수 없으며, 선택되거나 포커스될 수 없습니다. 이는 콘텐츠에 `display: none`을 설정하는 것과 유사합니다.
- `auto`
  - : 요소에 레이아웃 포함, 스타일 포함 및 페인트 포함이 적용됩니다. 요소가 [사용자와 관련이 없다면](/ko/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) 콘텐츠를 건너뜁니다. `hidden`과 달리, 건너뛴 콘텐츠는 페이지 내 검색, 탭 순서 탐색 등의 사용자 에이전트 기능에 정상적으로 접근 가능해야 하며, 포커스 및 선택 또한 정상적으로 되어야 합니다.

## 설명

### content-visibility의 애니메이션 및 트랜지션

[지원하는 브라우저](#browser_compatibility)는 [불연속 애니메이션 유형](/ko/docs/Web/CSS/CSS_animated_properties#discrete) 변형을 사용하여 `content-visibility`를 애니메이션하거나 트랜지션할 수 있습니다.

일반적으로 불연속 애니메이션은 애니메이션 중간(50%)에 속성이 두 값 사이에서 전환되는 것을 의미합니다. 그러나 `content-visibility`의 경우, 브라우저는 전체 애니메이션 시간 동안 애니메이션된 콘텐츠가 표시되도록 두 값 간 전환을 조정합니다. 예를 들어:

- `content-visibility`를 `hidden`에서 `visible`로 애니메이션할 때, 애니메이션 시작 시점인 `0%`에서 `visible`로 전환되어 전체 애니메이션 시간 동안 콘텐츠가 표시됩니다.
- `content-visibility`를 `visible`에서 `hidden`으로 애니메이션할 때, 애니메이션이 끝나는 `100%` 시점에서 `hidden`으로 전환되어 전체 애니메이션 시간 동안 콘텐츠가 표시됩니다.

이 동작은 콘텐츠가 즉시 사라지는 대신 부드러운 전환(예: 페이드 아웃)으로 콘텐츠를 제거하고자 할 때 유용합니다. 예를 들어, `content-visibility: hidden`을 사용하여 DOM에서 콘텐츠를 제거하려 할 때 유용하게 사용할 수 있습니다.

[CSS 트랜지션](/ko/docs/Web/CSS/CSS_transitions)으로 `content-visibility`를 애니메이션할 때는, `content-visibility`에 [`transition-behavior: allow-discrete`](/ko/docs/Web/CSS/transition-behavior)를 설정해야 합니다. 이렇게 설정하면 `content-visibility` 트랜지션이 효과적으로 활성화됩니다.

> [!NOTE]
> 요소의 `content-visibility` 값을 트랜지션할 때, 트랜지션된 속성에 대해 시작 값을 설정할 필요가 없습니다. 이는 [`display` 속성 애니메이션](/ko/docs/Web/CSS/display#animating_display) 시 [`@starting-style`](/ko/docs/Web/CSS/@starting-style) 블록을 설정해야 하는 경우와 다릅니다. `content-visibility`는 `display`처럼 요소를 DOM에서 숨기지 않고, 단지 요소의 콘텐츠 렌더링을 건너뛰기 때문입니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{CSSSyntax}}

## 접근성

`content-visibility: auto` 속성을 사용하여 화면에 보이지 않는 콘텐츠도 문서 객체 모델과 접근성 트리에 남아 있게 됩니다. 이를 통해 `content-visibility: auto`를 사용하여 페이지 성능을 개선하면서도 접근성에 부정적인 영향을 주지 않을 수 있습니다.

화면에 보이지 않는 콘텐츠의 스타일은 렌더링되지 않으므로, `display: none` 또는 `visibility: hidden`으로 숨긴 요소도 여전히 접근성 트리에 나타납니다. 요소가 접근성 트리에 나타나지 않게 하려면, `aria-hidden="true"`를 사용하세요.

## 예제

### auto를 사용하여 긴 페이지의 렌더링 비용 줄이기

다음 예제는 `content-visibility: auto`를 사용하여 화면에 보이지 않는 섹션의 페인팅 및 렌더링을 건너뛰는 방법을 보여줍니다.
`section`이 뷰포트 밖에 있을 때는 콘텐츠의 페인팅이 건너뛰어지고, 해당 섹션이 뷰포트에 가까워지면 다시 페인팅이 시작됩니다. 이를 통해 페이지 로드 속도와 상호작용 성능이 모두 개선됩니다.

#### HTML

```html
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>
<!-- … -->
```

#### CSS

`contain-intrinsic-size` 속성은 각 `section` 요소의 높이와 너비에 기본 크기인 500px을 추가합니다. 섹션이 한 번 렌더링된 후에는, 뷰포트에서 스크롤되어 벗어나더라도 렌더링된 고유 크기를 유지합니다.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### hidden을 사용하여 가시성 관리하기

다음 예제는 JavaScript를 사용하여 콘텐츠 가시성을 관리하는 방법을 보여줍니다. `display: none;` 대신 `content-visibility: hidden;`을 사용하면 숨길 때 콘텐츠의 렌더링 상태가 유지되어 렌더링이 더 빠르게 이루어집니다.

#### HTML

```html
<div class="hidden">
  <button class="toggle">Show</button>
  <p>
    This content is initially hidden and can be shown by clicking the button.
  </p>
</div>
<div class="visible">
  <button class="toggle">Hide</button>
  <p>
    This content is initially visible and can be hidden by clicking the button.
  </p>
</div>
```

#### CSS

`content-visibility` 속성은 `visible` 및 `hidden` 클래스를 가진 요소의 자식인 단락 요소들에 설정됩니다. 예제에서는 부모 `div` 요소의 CSS 클래스에 따라 단락의 콘텐츠를 표시하거나 숨길 수 있습니다.

`contain-intrinsic-size` 속성은 콘텐츠 크기를 나타내기 위해 포함됩니다. 이 속성은 콘텐츠가 숨겨질 때 레이아웃 이동을 줄이는 데 도움이 됩니다.

```css
p {
  contain-intrinsic-size: 0 1.1em;
  border: dotted 2px;
}

.hidden > p {
  content-visibility: hidden;
}

.visible > p {
  content-visibility: visible;
}
```

#### JavaScript

```js
const handleClick = (event) => {
  const button = event.target;
  const div = button.parentElement;
  button.textContent = div.classList.contains("visible") ? "Show" : "Hide";
  div.classList.toggle("hidden");
  div.classList.toggle("visible");
};

document.querySelectorAll("button.toggle").forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

#### 결과

{{ EmbedLiveSample('Using hidden to manually manage visibility') }}

### content-visibility 애니메이션 처리

이 예제에서는 클릭하거나 아무 키나 누르면 콘텐츠가 표시되거나 숨겨지는 {{htmlelement("div")}} 요소가 있습니다.

#### HTML

```html
<p>
  Click anywhere on the screen or press any key to toggle the
  <code>&lt;div&gt;</code> content between hidden and showing.
</p>

<div>
  This is a <code>&lt;div&gt;</code> element that animates between
  <code>content-visibility: hidden;</code>and
  <code>content-visibility: visible;</code>. We've also animated the text color
  to create a smooth animation effect.
</div>
```

#### CSS

CSS에서 처음에 `<div>`에 `content-visibility: hidden;`을 설정하여 콘텐츠를 숨깁니다. 이후 `@keyframe` 애니메이션을 설정하여 `<div>`를 표시하고 숨기는 클래스에 연결합니다. 이 과정에서 `content-visibility`와 [`color`](/ko/docs/Web/CSS/color)를 애니메이션하여 콘텐츠가 표시되거나 숨겨질 때 부드러운 애니메이션 효과를 제공합니다.

```css
div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  content-visibility: hidden;
}

/* Animation classes */

.show {
  animation: show 0.7s ease-in forwards;
}

.hide {
  animation: hide 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes show {
  0% {
    content-visibility: hidden;
    color: rgb(0 0 0 / 0%);
  }

  100% {
    content-visibility: visible;
    color: rgb(0 0 0 / 100%);
  }
}

@keyframes hide {
  0% {
    content-visibility: visible;
    color: rgb(0 0 0 / 100%);
  }

  100% {
    content-visibility: hidden;
    color: rgb(0 0 0 / 0%);
  }
}
```

#### JavaScript

마지막으로, JavaScript를 사용하여 `<div>`에 `.show` 및 `.hide` 클래스를 적절히 적용함으로써, 표시 및 숨김 상태 전환 시 애니메이션이 적용되도록 합니다.

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList[0] === "show") {
    divElem.classList.remove("show");
    divElem.classList.add("hide");
  } else {
    divElem.classList.remove("hide");
    divElem.classList.add("show");
  }
}
```

#### 결과

렌더링 결과는 다음과 같습니다.

{{ EmbedLiveSample("Animating content-visibility", "100%", "300") }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS Containment](/ko/docs/Web/CSS/CSS_containment)
- [`contain-intrinsic-size`](/ko/docs/Web/CSS/contain-intrinsic-size)
- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)

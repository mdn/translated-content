---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
original_slug: Web/CSS/content-visibility
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

**`content-visibility`** [CSS](/ko/docs/Web/CSS) 속성은 요소가 가진 콘텐츠를 모두 렌더할지 여부를 제어하며, 강력한 독립성 규칙을 통하여 사용자 에이전트가 큰 규모의 레이아웃 및 렌더링을 필요로 할 때까지 이 작업을 잠재적으로 생략할 수 있도록 합니다. 이는 사용자 에이전트가 요소의 렌더링 작업(레이아웃과 페인팅을 포함한)을 필요로 할 때까지는 생략할 수 있게 해주며 이로 인해 초기 페이지를 불러오는 속도를 더 빠르게 합니다.

> [!NOTE] > {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 이벤트는 `content-visibility: auto` 가 적용된 어떠한 요소든 렌더링 작업이 생략되기 시작하거나 끝날 때에 발생합니다. 이는 애플리케이션 코드에 렌더링 절차가 필요하지 않을 때 (예시, {{htmlelement("canvas")}} 에 그림을 그리는 경우) 이 작업을 시작하거나 중단하여 처리 능력을 최적화할 수 있는 편리한 방법을 제공합니다.

{{InteractiveExample("CSS Demo: content-visibility")}}

```css interactive-example-choice
content-visibility: visible;
```

```css interactive-example-choice
content-visibility: hidden;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="container" id="example-element">
    <div class="child">
      <span>This is an inner div</span>
    </div>
  </div>
</section>
```

```css interactive-example
.container {
  width: 140px;
  height: 140px;
  border: 3px solid rgb(64, 28, 163);
  background-color: rgb(135, 136, 184);
  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  border: 3px solid rgb(64, 28, 163);
  background-color: wheat;
  color: black;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## 구문

```css
/* 키워드 값 */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* 전역 값 */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

### 값

- `visible`
  - : 아무런 효과도 발생하지 않습니다. 요소의 콘텐츠는 평범하게 렌더됩니다.
- `hidden`
  - : 요소가 해당 [요소의 컨텐츠를 생략합니다](/ko/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). 생략된 콘텐츠는 페이지 내 찾기나 탭에 의한 네비게이션 등 사용자 에이전트 특성에 접근할 수 없고, 선택되거나 포커스될 수도 없습니다. 요소에 `display: none` 가 적용된 것과 유사합니다.
- `auto`
  - : 요소는 레이아웃 격리, 스타일 격리, 페인트 격리를 활성화합니다. 만일 요소가 [사용자와 관계](/ko/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user)가 없다면, 이 역시 요소를 생략합니다. hidden과는 다르게, 생략된 요소는 여전히 페이지 내 찾기나 탭에 의한 네비게이션 등 사용자 에이전트 특성에 접근이 가능하며, 평범하게 선택되거나 포커스도 가능합니다.

## 설명

### content-visibility 속성에 애니메이션과 전환 적용하기

[지원하는 브라우저는](#browser_compatibility) 는 [비연속 애니메이션 타입](/ko/docs/Web/CSS/CSS_animated_properties#discrete)의 변형을 사용하여 `content-visibility` 를 애니메이션/전환합니다.

비연속 애니메이션은 일반적으로 속성이 애니메이션이 진행되는 중간 지점 50% 에서 두 가지 값 사이를 즉각적으로 전환한다는 것을 의미합니다. 하지만 `content-visibility` 를 사용하는 경우에는 브라우저는 전체 애니메이션 지속 시간 동안 애니메이션 콘텐츠를 보여주기 위해 두 값 사이를 전환합니다. 예시를 확인해 보세요.

- `content-visibility` 가 `hidden` 에서 `visible` 로 전환된다면, 애니메이션의 `0%` 시점에서 값이 `visible` 로 전환되어 애니메이션이 진행되는 동안 내용이 보이게 됩니다.
- `content-visibility` 가 `visible` 에서 `hidden` 으로 전환된다면, 애니메이션의 `100%` 시점에서 값이 `hidden` 으로 전환되어 애니메이션이 진행되는 동안 내용이 보이게 됩니다.

이 동작은 DOM에서 `content-visibility: hidden` 를 사용하여 요소를 제거하는 진입점이나 마무리 애니메이션을 생성할 때 이를 즉각적으로 사라지게 하는 대신 부드러운 전환(페이드 아웃 등) 을 할 때에 더 유용하게 사용됩니다.

`content-visibility` 를 [CSS 전환](/ko/docs/Web/CSS/CSS_transitions)과 함께 애니메이션화할 때, [`transition-behavior: allow-discrete`](/ko/docs/Web/CSS/transition-behavior) 가 `content-visibility` 에 설정이 되어 있어야 합니다. 이는 `content-visibility` 전환을 효과적으로 동작하게 합니다.

> [!NOTE]
> 요소의 `content-visibility` 값을 전환할 때, [`display` 를 전환할](/ko/docs/Web/CSS/display#animating_display)때처럼 [`@starting-style`](/ko/docs/Web/CSS/@starting-style) 블록을 사용하여 전환의 시작 값을 제공할 필요가 없습니다. 이는 `content-visibility` 가 `display` 처럼 DOM에서 요소를 숨기지 않고 요소의 콘텐츠 렌더링을 생략하기 때문입니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{CSSSyntax}}

## 접근성

`content-visibility: auto` 속성이 적용된 화면 밖의 콘텐츠는 문서 객체 모델과 접근성 트리 내에 그대로 남아 있습니다. 이를 통해 `content-visibility: auto` 를 사용해 페이지 성능을 향상시키면서도 접근성에 부정적인 영향을 주지 않을 수 있습니다.

화면 밖의 콘텐츠에 대한 스타일이 렌더링되지 않더라도, 의도적으로 `display: none` 또는 `visibility: hidden` 으로 숨긴 요소는 접근성 트리에는 여전히 나타납니다.
접근성 트리에서 요소를 제거하려면 `aria-hidden="true"` 를 사용하세요.

## 예제

### auto를 사용하여 긴 페이지에서 렌더링 비용 줄이기

다음 예제에서는 `content-visibility: auto` 를 사용하여 화면 밖의 섹션에 대해 페인팅 및 렌더링을 생략하는 방법을 보여줍니다.
뷰포트에서 벗어난 `section` 의 콘텐츠는 해당 섹션이 뷰포트 근처로 올 때까지 페인팅이 건너뛰어지며, 이를 통해 페이지 불러오기와 상호작용 성능이 개선됩니다.

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

`contain-intrinsic-size` 속성은 각각의 `section` 요소에 500px의 기본 높이와 넓이 값을 추가합니다. 요소가 렌더된 이후에도 이는 뷰포트에서 스크롤이 되더라도 원래의 크기를 유지합니다.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### 가시성을 위한 hidden 사용하기

다음 예제는 콘텐츠의 가시성을 JavaScript를 이용하여 관리하는 예제입니다.
`display: none;` 을 사용하는 대신 `content-visibility: hidden;` 를 사용하면 숨겨진 상태에서도 콘텐츠의 렌더링 상태를 유지하며, 렌더링 속도가 더 빠릅니다.

#### HTML

```html
<div class="hidden">
  <button class="toggle">Show</button>
  <p>이 콘텐츠는 초기에는 숨겨져 있지만 버튼을 클릭하여 볼 수 있습니다.</p>
</div>
<div class="visible">
  <button class="toggle">Hide</button>
  <p>이 콘텐츠는 초기에는 보이지만 버튼을 클릭하여 숨길 수 있습니다.</p>
</div>
```

#### CSS

`content-visibility` 속성은 `visible` 과 `hidden` 클래스가 적용된 요소의 직속 자식인 단락들에 설정됩니다. 이 예제에서는 부모 div 요소에 적용된 CSS 클래스에 따라 단락 내의 콘텐츠가 보이거나 숨겨질 수 있습니다.

`contain-intrinsic-size` 속성은 콘텐츠의 크기를 나타내기 위해 포함되었습니다. 이는 콘텐츠가 숨겨질 때 레이아웃 깜빡임을 최소화합니다.

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

### content-visibility에 애니메이션 적용하기

이 예제에서는 클릭하거나 아무 키를 눌러 보이거나 보이지 않게 되는 토글 콘텐츠를 가진 {{htmlelement("div")}} 요소가 존재합니다.

#### HTML

```html
<p>
  화면의 아무 곳을 클릭하거나 아무 키를 눌러
  <code>&lt;div&gt;</code> 콘텐츠가 보여지거나 숨겨지는 토글을 동작하게
  해보세요.
</p>

<div>
  여기 애니메이션 <code>&lt;div&gt;</code> 요소가 존재합니다.
  <code>content-visibility: hidden;</code> 그리고
  <code>content-visibility: visible;</code>. 텍스트 색상에 부드러운 애니메이션
  효과를 생성합니다.
</div>
```

#### CSS

CSS에서는 `<div>` 에 초기에 `content-visibility: hidden;` 를 적용하여 콘텐츠를 숨깁니다. 그리고 `@keyframe` 애니메이션을 설정하고, 이로 인해 `<div>` 가 보이거나 숨겨질 수 있도록 클래스에 추가합니다. 이 과정에서 `content-visibility` 와 [`색상`](/ko/docs/Web/CSS/Reference/Properties/color)을 애니메이션화하여 콘텐츠가 보이거나 숨겨질 때 부드러운 애니메이션 효과로 동작할 수 있게 합니다.

```css
div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  content-visibility: hidden;
}

/* 애니메이션 클래스 */

.show {
  animation: show 0.7s ease-in forwards;
}

.hide {
  animation: hide 0.7s ease-out forwards;
}

/* 애니메이션 키프레임 */

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

JavaScript를 사용하여 `.show` 및 `.hide` 클래스를 `<div>` 에 적절하게 적용하여 보이거나 숨겨지는 상태를 토글할 수 있는 애니메이션을 구현합니다.

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

화면에 렌더된 결과는 다음과 같습니다.

{{ EmbedLiveSample("Animating content-visibility", "100%", "300") }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS Containment](/ko/docs/Web/CSS/CSS_containment)
- [`contain-intrinsic-size`](/ko/docs/Web/CSS/contain-intrinsic-size)
- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
- [content-visibility: 렌더링 동작을 향상시키는 새로운 CSS 속성](https://web.dev/articles/content-visibility) (web.dev)

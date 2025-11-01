---
title: transition-duration
slug: Web/CSS/Reference/Properties/transition-duration
original_slug: Web/CSS/transition-duration
l10n:
  sourceCommit: 1608a85abb1d05dadc63f27c93fc3e4b7e630db0
---

**`transition-duration`** [CSS](/ko/docs/Web/CSS) 속성은 트랜지션 애니메이션이 완료되는 데 걸리는 시간을 설정합니다. 기본값은 `0s` 로, 애니메이션이 발생하지 않습니다.

{{InteractiveExample("CSS Demo: transition-duration")}}

```css interactive-example-choice
transition-duration: 500ms;
transition-property: margin-right;
```

```css interactive-example-choice
transition-duration: 2s;
transition-property: background-color;
```

```css interactive-example-choice
transition-duration: 2s;
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-duration: 3s, 1s;
transition-property: margin-right, color;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: #fff;
  margin-right: 40%;
}
```

여러 개의 지속 시간을 지정할 수 있으며, 각 지속 시간은 마스터 목록 역할을 하는 {{ cssxref("transition-property") }} 속성에 지정된 대로 해당 프로퍼티에 적용됩니다. 지정된 지속 시간 수가 마스터 목록보다 적으면 사용자 에이전트는 지속 시간 목록을 반복합니다. 지정된 기간의 수가 마스터 목록보다 많으면 목록이 적절한 크기로 잘립니다. 두 경우 모두 CSS 선언은 유효하게 유지됩니다.

## 구문

```css
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Global values */
transition-duration: inherit;
transition-duration: initial;
transition-duration: revert;
transition-duration: revert-layer;
transition-duration: unset;
```

### 값

- `<time>`
  - : {{cssxref("&lt;time&gt;")}} 은 속성의 이전 값에서 새로운 값으로 전환하는 데 걸리는 시간을 나타냅니다. `0s`의 시간은 전환이 발생하지 않음을 의미하며, 즉 두 상태 사이의 전환이 즉시 일어납니다. 시간에 음수 값을 지정하면 해당 선언이 무효가 됩니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 다양한 지속 시간을 보여주는 예시

#### HTML

```html
<div class="box duration-1">0.5 seconds</div>

<div class="box duration-2">2 seconds</div>

<div class="box duration-3">4 seconds</div>

<button id="change">Change</button>
```

#### CSS

```css
.box {
  margin: 20px;
  padding: 10px;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 18px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
}

.duration-1 {
  transition-duration: 0.5s;
}

.duration-2 {
  transition-duration: 2s;
}

.duration-3 {
  transition-duration: 4s;
}
```

#### JavaScript

```js
function change() {
  const elements = document.querySelectorAll("div.box");
  for (const element of elements) {
    element.classList.toggle("transformed-state");
  }
}

const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", change);
```

#### 결과

{{EmbedLiveSample("다양한_지속_시간을_보여주는_예시",275,200)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Using CSS transitions](/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}

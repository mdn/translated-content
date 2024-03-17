---
title: transition-property
slug: Web/CSS/transition-property
l10n:
  sourceCommit: bed59f268d5e299beb538e435f08c4f4ce685980
---

{{CSSRef}}

**`transition-property`** [CSS](/ko/docs/Web/CSS) 속성은 [transition effect](/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) 을 적용해야 하는 CSS 속성을 명시합니다.

{{EmbedInteractiveExample("pages/css/transition-property.html")}}

단축 속성을 지정하면 (e.g., {{cssxref("background")}}), 애니메이션 가능한 모든 세부 속성이 지정됩니다.

## 구문

```css
/* Keyword values */
transition-property: none;
transition-property: all;

/* <custom-ident> values */
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

/* Multiple values */
transition-property: test1, animation4;
transition-property: all, height, color;
transition-property:
  all,
  -moz-specific,
  sliding;

/* Global values */
transition-property: inherit;
transition-property: initial;
transition-property: revert;
transition-property: revert-layer;
transition-property: unset;
```

### 값

- `none`
  - : 어떤 속성도 트랜지션되지 않습니다.
- `all`
  - : 트랜지션 가능한 모든 속성은 트랜지션됩니다.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : 값이 변경될 때 트랜지션 효과를 적용할 속성을 식별하는 문자열입니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 기본 예제

버튼을 호버하거나 포커싱하면, 1초 동안 색상이 트랜지션됩니다. 여기서 `transition-property`는 [`background-color`](/ko/docs/Web/CSS/background-color)입니다.

#### HTML

```html
<button class="target">Focus me!</button>
```

#### CSS

```css hidden
html {
  height: 100vh;
}

button {
  font-size: 1.4rem;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
}
```

```css
.target {
  transition-property: background-color;
  transition-duration: 1s;
  background-color: #ccc;
}

.target:hover,
.target:focus {
  background-color: #eee;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

더 많은 `transition-property` 예제는 [Using CSS transitions](/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)에서 확인할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Using CSS transitions](/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}

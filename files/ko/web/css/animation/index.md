---
title: animation
slug: Web/CSS/animation
l10n:
  sourceCommit: e50172e0d7844ebf17e0eac05d5274a7df26d180
---

{{CSSRef}}

**`animation`** [단축](/ko/docs/Web/CSS/Shorthand_properties) [CSS](/ko/docs/Web/CSS) 속성은 스타일 사이에 에니메이션을 적용합니다. {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, 그리고 {{cssxref("animation-play-state")}}의 단축형입니다.

{{EmbedInteractiveExample("pages/css/animation.html")}}

## 구성 속성

이 속성은 다음 CSS 속성의 단축형입니다.

- [`animation-delay`](/ko/docs/Web/CSS/animation-delay)
- [`animation-direction`](/ko/docs/Web/CSS/animation-direction)
- [`animation-duration`](/ko/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/ko/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/ko/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/ko/docs/Web/CSS/animation-name)
- [`animation-play-state`](/ko/docs/Web/CSS/animation-play-state)
- [`animation-timing-function`](/ko/docs/Web/CSS/animation-timing-function)

## 구문

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slidein;

/* 애니메이션 두 개 */
animation:
  3s linear slidein,
  3s ease-out 5s slideout;
```

`animation` 속성은 쉼표로 구분된 하나 이상의 단일 애니메이션으로 지정됩니다.

각각의 애니메이션은 다음과 같이 지정됩니다.

- {{cssxref("&lt;time&gt;")}} 값이 0개, 1개 또는 2개 존재

- 다음 값이 0개 또는 1개 존재

  - {{cssxref("animation", "&lt;single-easing-function&gt;", "#single-easing-function")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#single-animation-iteration-count")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#single-animation-direction")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#single-animation-fill-mode")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#single-animation-play-state")}}

- 애니메이션의 선택적인 이름. `none`, {{cssxref("&lt;custom-ident&gt;")}}, 또는 {{cssxref("&lt;string&gt;")}}일 수 있음.

> **참고:** 현재 구현은 재설정 전용이므로 {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}}, 그리고 {{cssxref("animation-range-end")}}가 현재 이 목록에 포함되어 있지 않습니다. 즉, `animation`을 포함하면 이전에 선언된 `animation-timeline` 값이 `auto`로 재설정되고, 이전에 선언된 `animation-range-start`와 `animation-range-end` 값은 `normal`로 재설정되지만, 이러한 속성은 `animation`을 통해 설정할 수 없습니다. [CSS 스크롤 기반 애니메이션](/ko/docs/Web/CSS/CSS_scroll-driven_animations)을 만들 때 적용하려면 애니메이션 단축을 선언한 후 이러한 속성을 선언해야 합니다.

### 값

- `<single-easing-function>`
  - : 전환 유형을 결정합니다. 값은 {{cssxref("easing-function")}}에서 사용할 수 있는 값 중 하나여야 합니다.
- `<single-animation-iteration-count>`
  - : 애니메이션이 재생되는 횟수입니다. 값은 {{cssxref("animation-iteration-count")}}에서 사용 가능한 값 중 하나여야 합니다.
- `<single-animation-direction>`
  - : 애니메이션이 재생되는 방향입니다. 값은 {{cssxref("animation-direction")}}에서 사용 가능한 값 중 하나여야 합니다.
- `<single-animation-fill-mode>`
  - : 실행 전후에 애니메이션 대상에 스타일을 적용시키는 방법을 결정합니다. 값은 {{cssxref("animation-fill-mode")}}에서 사용 가능한 값 중 하나여야 합니다..
- `<single-animation-play-state>`
  - : 애니메이션의 재생 여부를 결정합니다. 값은 {{cssxref("animation-play-state")}}에서 사용 가능한 값 중 하나여야 합니다.

## 설명

각 애니메이션 정의 내에서 시간 값의 순서는 중요합니다. {{cssxref("&lt;time&gt;")}}으로 파싱할 수 있는 첫 번째 값은 {{cssxref("animation-duration")}}에 할당되고, 두 번째 값은 {{cssxref("animation-delay")}}에 할당됩니다.

각 애니메이션 정의에서 다른 값의 순서는 {{cssxref("animation-name")}} 값을 다른 값과 구별하는 데에도 중요합니다. `animation` 단축 값이 `animation-name` 이외의 `animation` 속성 값으로 파싱할 수 있는 경우, 이 값은 `animation-name`이 아닌 그 속성에 먼저 적용됩니다. 이러한 이유로 `animation` 단축을 사용할 때 `animation-name` 값을 값 목록의 마지막 값으로 지정하는 것이 좋습니다. 이는 쉼표로 구분된 여러 개의 애니메이션 단축을 지정하는 경우에도 마찬가지입니다.

애니메이션을 적용하려면 애니메이션 이름을 반드시 설정해야 하지만, `animation` 축약의 모든 값은 선택 사항이며, 각 `animation` 구성 요소의 초기 값이 기본값입니다. `animation-name`의 초기 값은 `none`입니다. 즉, `animation` 단축 속성에 `animation-name` 값이 선언되지 않으면 속성에 적용할 애니메이션이 없는 것입니다.

`animation` 단축 속성에서 `animation-duration` 값이 생략되면 이 속성의 값은 기본적으로 `0s`로 설정됩니다. 이 경우 애니메이션은 계속 발생하지만( [`animationStart`](/ko/docs/Web/API/Element/animationstart_event)와 [`animationEnd`](/ko/docs/Web/API/Element/animationend_event) 이벤트는 발생함) 애니메이션이 표시되진 않습니다.

## 접근성 문제

깜박이는 애니메이션은 주의력 결핍 과잉 행동 장애(ADHD)와 같은 인지 문제가 있는 사람들에게 문제가 될 수 있습니다. 또한 특정 종류의 움직임은 전정 장애, 간질, 편두통 그리고 암소시성 민감증을 유발할 수 있습니다.

축소된 애니메이션 경험에 선호도를 표현한 사용자를 위한 우대 경험을 만들기 위해 애니메이션을 일시 중지하거나 비활성화하는 메커니즘을 제공하고 [움직임 감소 미디어 쿼리](/ko/docs/Web/CSS/@media/prefers-reduced-motion)를 사용하는 것을 고려하십시오.

- [움직임 민감성을 위한 더 안전한 웹 애니메이션 설계 · A List Apart 기사](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [움직임 감소 미디어 쿼리 소개 | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [반응형 움직임 디자인 | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN WCAG 이해하기, 가이드라인 2.2 설명](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Success Criterion 2.2.2 이해하기 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

> **참고:** [CSS 박스 모델](/ko/docs/Web/CSS/CSS_box_model) 속성에 애니메이션을 적용하는 것은 권장되지 않습니다. 어떤 박스 모델 속성을 애니메이션하는 것은 본질적으로 CPU를 많이 사용합니다. 대신 [transform](/ko/docs/Web/CSS/transform) 속성에 애니메이션을 적용하는 것을 고려하십시오.

### 해 뜨기

여기서 우리는 하늘색 하늘을 가로지르는 노란 태양 애니메이션을 만들어봅니다.
태양이 뷰포트 중앙으로 올라간 다음 시야에서 사라집니다.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden; /* 수평선 아래 태양의 일부를 숨깁니다. */
  background-color: lightblue;
  display: flex;
  justify-content: center; /* 태양을 배경 중앙에 배치합니다. */
}

.sun {
  background-color: yellow;
  border-radius: 50%; /* 둥근 배경을 만듭니다. */
  height: 100vh; /* 태양을 뷰포트의 크기로 만듭니다. */
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate sun-rise;
}

@keyframes sun-rise {
  from {
    /* 태양을 뷰포트 너머로 밀어냅니다. */
    transform: translateY(110vh);
  }
  to {
    /* 태양을 기본 위치로 되돌립니다. */
    transform: translateY(0);
  }
}
```

{{EmbedLiveSample('Sun_Rise')}}

### 여러 속성 애니메이션

이전 예제의 태양 애니메이션에 추가하여, 태양이 뜨고 질 때 태양의 색상을 변경하는 두 번째 애니메이션을 추가합니다. 태양은 수평선 아래에 있을 때 진한 빨간색으로 시작하여 상단에 도달하면 밝은 주황색으로 바뀝니다.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate animating-multiple-properties;
}

/* 단일 애니메이션에서 여러 속성을 애니메이션할 수 있습니다. */
@keyframes animating-multiple-properties {
  from {
    transform: translateY(110vh);
    background-color: red;
    filter: brightness(75%);
  }
  to {
    transform: translateY(0);
    background-color: orange;
    /* 설정되지 않은 속성, 즉 'filter'는 기본값으로 되돌아갑니다. */
  }
}
```

{{EmbedLiveSample('Animating Multiple Properties')}}

### 여러 애니메이션 적용하기

여기 하늘색 배경에 뜨고 지는 태양이 있습니다.
태양은 점점 무지개 색으로 변합니다.
태양의 위치와 색상의 타이밍은 독립적입니다.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /* 여러 애니메이션은 쉼표로 구분되고, 각 애니메이션의 매개변수는 독립적으로 설정됩니다. */
  animation:
    4s linear 0s infinite alternate rise,
    24s linear 0s infinite psychedelic;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

{{EmbedLiveSample('Applying Multiple Animations')}}

### 여러 애니메이션 캐스케이딩

여기 밝은 파란색 배경에 노란색 태양이 있습니다. 태양은 뷰포트의 왼쪽과 오른쪽 사이에서 튕깁니다. rise 애니메이션이 정의됐더라도 태양은 뷰포트에 남아 있습니다. 상승 애니메이션의 transform 속성은 bounce 애니메이션으로 '덮어써지게' 됩니다.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /*
    캐스케이딩으로 나중에 선언된 애니메이션은
    이전에 선언된 애니메이션 속성을 재정의합니다.
  */
  /* bounce는 rise가 설정한 transform을 '덮어쓰므로' 태양은 수평으로만 움직입니다. */
  animation:
    4s linear 0s infinite alternate rise,
    4s linear 0s infinite alternate bounce;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

{{EmbedLiveSample('Cascading Multiple Animations')}}

추가 예제는 [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations#examples)를 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 애니매이션 사용하기](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API

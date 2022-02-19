---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
tags:
  - API
  - AnimationEvent
  - CSSOM
  - Property
  - Reference
  - Web Animations
browser-compat: api.AnimationEvent.elapsedTime
translation_of: Web/API/AnimationEvent/elapsedTime
---
{{APIRef("Web Animations API")}}

**`AnimationEvent.elapsedTime`** 읽기 전용 속성은 이벤트가 발생한 시점까지 애니메이션이 재생된 총 시간을 나타내는 `float` 값입니다. 초 단위며, 애니메이션이 일시정지된 시간은 제외합니다. {{event("animationstart")}} 이벤트의 `elapsedTime`은 {{cssxref("animation-delay")}}의 값이 음수인 경우에만 `(-1 * delay)`가 되고, 그 외에는 `0.0`입니다.

## 구문

```js
time = AnimationEvent.elapsedTime
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- 애니메이션 관련 CSS 속성과 @규칙: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}
- 이 속성이 속한 {{domxref("AnimationEvent")}} 인터페이스.
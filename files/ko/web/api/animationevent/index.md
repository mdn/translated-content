---
title: AnimationEvent
slug: Web/API/AnimationEvent
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - Web Animations
browser-compat: api.AnimationEvent
translation_of: Web/API/AnimationEvent
---
{{APIRef("Web Animations API")}}

**`AnimationEvent`** 인터페이스는 [에니메이션](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)과 관련된 정보를 제공하는 이벤트를 나타냅니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : 주어진 매개변수로 `AnimationEvent`를 생성합니다.

## 속성

{{domxref("Event")}} 인터페이스의 속성을 상속합니다.

- {{domxref("AnimationEvent.animationName")}} {{readonlyInline}}
  - : 애니메이션을 생성한 {{cssxref("animation-name")}}의 값을 가지는 {{domxref("DOMString")}}입니다.
- {{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}
  - : 이 이벤트가 발생한 시점까지 애니메이션이 재생된 총 시간을 나타내는 `float` 값입니다. 초 단위며, 애니메이션이 일시정지된 시간은 제외합니다. `animationstart` 이벤트의 `elapsedTime`은 {{cssxref("animation-delay")}}의 값이 음수인 경우에만 `(-1 * delay)`가 되고, 그 외에는 `0.0`입니다.
- {{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}
  - : 애니메이션이 재생 중인 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)의 이름을 값으로 가진 {{domxref("DOMString")}}입니다. `'::'`으로 시작합니다. 애니메이션이 일반 요소에서 재생 중이라면 빈 문자열(`''`)을 반환합니다.

## 메서드

{{domxref("Event")}} 인터페이스의 메서드를 상속합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- 애니메이션 관련 CSS 속성과 @규칙: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}

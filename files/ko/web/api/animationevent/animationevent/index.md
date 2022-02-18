---
title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
tags:
  - API
  - AnimationEvent
  - CSSOM
  - Constructor
  - Reference
  - Web Animations
browser-compat: api.AnimationEvent.AnimationEvent
translation_of: Web/API/AnimationEvent/AnimationEvent
---
{{APIRef("Web Animations API")}}

**`AnimationEvent()`** 생성자는 애니메이션에 관련된 이벤트를 나타내는 {{domxref("AnimationEvent")}} 객체를 새로 생성하고 반환합니다.

## 구문

```js
animationEvent = new AnimationEvent(type, {animationName: aPropertyName,
                                            elapsedTime  : aFloat,
                                            pseudoElement: aPseudoElementName});
```

### 매개변수

`AnimationEvent()` 생성자는 {{domxref("Event.Event", "Event()")}} 생성자의 매개변수도 상속합니다.

- `type`
  - : `AnimationEvent`의 유형을 나타내는 대소문자 구별 {{domxref("DOMString")}}입니다. `'animationstart'`, `'animationend'`, `'animationiteration'`을 사용할 수 있습니다.
- `animationName` {{optional_inline}}
  - : 트랜지션에 관련된 {{cssxref("animation-name")}} CSS 속성 값을 나타내는 {{domxref("DOMString")}}입니다. 기본 값은 `""`입니다.
- `elapsedTime` {{optional_inline}}
  - : 이벤트가 발생한 시점까지 애니메이션이 재생된 총 시간을 나타내는 `float` 값입니다. 초 단위며, 애니메이션이 일시정지된 시간은 제외합니다. `"animationstart"` 이벤트의 `elapsedTime`은 {{cssxref("animation-delay")}}의 값이 음수인 경우에만 `(-1 * delay)`가 되고, 그 외에는 `0.0`입니다. 기본 값은 `0.0`입니다.
- `pseudoElement` {{optional_inline}}
  - : 애니메이션이 재생된 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)의 이름을 값으로 가진 {{domxref("DOMString")}}입니다. `'::'`으로 시작합니다. 의사 요소가 아닌 요소에서 재생된 애니메이션에서는 빈 문자열(`''`)을 반환합니다.

### 반환 값

지정한 옵션에 따라 새롭게 생성한 {{domxref("AnimationEvent")}}.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- 애니메이션 관련 CSS 속성과 @규칙: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}
- 이 생성자가 속한 {{domxref("AnimationEvent")}} 인터페이스.
---
title: "AnimationEvent: AnimationEvent() 생성자"
short-title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

**`AnimationEvent()`** 생성자는 애니메이션에 관련된 이벤트를 나타내는 {{domxref("AnimationEvent")}} 객체를 새로 생성하고 반환합니다.

## 구문

```js-nolint
new AnimationEvent(type)
new AnimationEvent(type, options)
```

### 매개변수

- `type`
  - : `AnimationEvent`의 유형을 나타내는 문자열입니다. 대소문자를 구분하며 브라우저는`animationstart`, `animationend`, `animationiteration`을 사용합니다.
- `options` {{optional_inline}}
  - : {{domxref("Event/Event", "Event()")}}에서 사용할 수 있는 속성에 더해 다음 속성들도 포함하는 객체입니다.
    - `animationName` {{optional_inline}}
      - : 트랜지션에 연관된 {{cssxref("animation-name")}} CSS 속성 값을 담은 문자열입니다. 기본 값은 `""`입니다.
    - `elapsedTime` {{optional_inline}}
      - : 이 이벤트가 발생한 시점까지 애니메이션이 재생된 총 시간을 나타내는 `float` 값입니다. 초 단위며, 애니메이션이 일시중지됐던 시간은 제외합니다. `animationstart` 이벤트의 `elapsedTime`은 {{cssxref("animation-delay")}}의 값이 음수인 경우에만 `(-1 * delay)`가 되고, 그 외에는 `0.0`입니다.
    - `pseudoElement` {{optional_inline}}
      - : 애니메이션이 재생 중인 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)의 이름을 담은, `'::'`으로 시작하는 문자열입니다. 애니메이션이 일반 요소에서 재생 중이라면 빈 문자열(`''`)을 반환합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- 애니메이션 관련 CSS 속성과 @규칙: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}
- 이 생성자가 속한 {{domxref("AnimationEvent")}} 인터페이스.

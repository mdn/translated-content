---
title: "AnimationEvent: pseudoElement 속성"
short-title: pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
l10n:
  sourceCommit: 26a4b252b196202c9923eeb11cca0cad2663005d
---

{{APIRef("Web Animations")}}

**`AnimationEvent.pseudoElement`** 읽기 전용 속성은 애니메이션이 재생 중인 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)의 이름을 담은, `'::'`으로 시작하는 문자열입니다. 애니메이션이 일반 요소에서 재생 중이라면 빈 문자열(`''`)을 반환합니다.

## 값

애니메이션이 재생 중인 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)의 이름을 담은, `'::'`으로 시작하는 문자열입니다. 애니메이션이 일반 요소에서 재생 중이라면 빈 문자열(`''`)을 반환합니다.

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
- 이 속성이 속한 {{domxref("AnimationEvent")}} 인터페이스.

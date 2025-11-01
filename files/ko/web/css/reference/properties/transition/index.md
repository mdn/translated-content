---
title: transition
slug: Web/CSS/Reference/Properties/transition
original_slug: Web/CSS/transition
---

{{SeeCompatTable}}

## Summary

**`transition`** [CSS](/en-US/CSS)속성은 {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }} 과 {{ cssxref("transition-delay") }}를 위한 [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)입니다. 이 속성으로 엘리먼트의 두 가지 상태 사이에 변화를 줄 수 있습니다. 엘리먼트의 각 상태는 [가상 클래스](/ko/docs/Web/CSS/Pseudo-classes) 를 사용해 정의된 {{cssxref(":hover")}} 이나 {{cssxref(":active")}} 또는 JavaScript를 사용해 동적으로 만들어진 것들입니다.

{{cssinfo}}

## Syntax

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-left 4s;

/* property name | duration | delay */
transition: margin-left 4s 1s;

/* property name | duration | timing function | delay */
transition: margin-left 4s ease-in-out 1s;

/* Apply to 2 properties */
transition:
  margin-left 4s,
  color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

이 속성에서 각 항목의 순서는 중요합니다: 시간으로 해석될 수 있는 값이 첫번째에 위치한다면 {{cssxref("transition-duration")}} 로 적용되고, 두번째에 위치한다면 {{cssxref("transition-delay")}} 로 적용됩니다.

속성값 목록이 알맞은 길이를 갖지 않는다면 어떻게 처리될지 궁금하다면 [속성값 목록이 다른 개수를 가진 경우](/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#%ec%86%8d%ec%84%b1%ea%b0%92_%eb%aa%a9%eb%a1%9d%ec%9d%b4_%eb%8b%a4%eb%a5%b8_%ea%b0%9c%ec%88%98%eb%a5%bc_%ea%b0%80%ec%a7%84_%ea%b2%bd%ec%9a%b0)를 참고하세요. 요컨대, 실제 속성의 개수보다 많이 기술된 것은 무시됩니다.

### Formal syntax

{{csssyntax}}

## Examples

[CSS 트랜지션 사용하기](/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) 에 다양한 CSS transition 예제가 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using CSS transitions](/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}

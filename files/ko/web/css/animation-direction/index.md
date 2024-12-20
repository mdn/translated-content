---
title: animation-direction
slug: Web/CSS/animation-direction
---

{{CSSRef}}

**`animation-direction`** [CSS](/ko/docs/Web/CSS) 속성은 애니메이션이 앞으로, 뒤로 또는 앞뒤로 번갈아 재생되어야하는지 여부를 지정합니다.

```css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Global values */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
```

축약 속성 {{cssxref ( "animation")}}을 사용하여 모든 애니메이션 속성을 한꺼번에 설정하는 것이 편리합니다.

{{cssinfo}}

## 문법(Syntax)

### 값(Values)

- `normal`
  - : 애니메이션은 매 사이클마다 정방향으로 재생됩니다. 즉, 순환 할 때마다 애니메이션이 시작 상태로 재설정되고 다시 시작됩니다. 이것은 기본값입니다.
- `reverse`
  - : 애니메이션은 매 사이클마다 역방향으로 재생됩니다. 즉, 순환 할 때마다 애니메이션이 종료 상태로 재설정되고 다시 시작됩니다. 애니메이션 단계가 거꾸로 수행되고 타이밍 기능 또한 반대로됩니다. 예를 들어, ease-in 타이밍 기능은 ease-out형태로 변경됩니다.
- `alternate`
  - : 애니메이션은 매 사이클마다 각 주기의 방향을 뒤집으며, 첫 번째 반복은 정방향으로 진행됩니다. 사이클이 짝수인지 홀수인지를 결정하는 카운트가 하나에서 시작됩니다.
- `alternate-reverse`
  - : 애니메이션은 매 사이클마다 각 주기의 방향을 뒤집으며, 첫 번째 반복은 역방향으로 진행됩니다. 사이클이 짝수인지 홀수인지를 결정하는 카운트가 하나에서 시작됩니다.

> [!NOTE]
> animation- \* 속성에 여러 개의 쉼표로 구분 된 값을 지정하면 {{cssxref ( "animation-name")}} 속성에 지정된 애니메이션에 할당되는 값의 수에 따라 다른 방식으로 지정됩니다. 자세한 내용은 [여러 애니메이션 속성 값 설정](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)을 참조하십시오.

### Formal syntax

{{csssyntax}}

## 예제(Examples)

[CSS animations](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)를 보십시오.

## 명세

{{Specifications}}

## 브라우저 호환성(Browser compatibility)

{{Compat}}

## 같이 보기(See also)

- [Using CSS animations](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API

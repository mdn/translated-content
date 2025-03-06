---
title: animation-duration
slug: Web/CSS/animation-duration
---

{{CSSRef}} {{SeeCompatTable}}

**`animation-duration`** [CSS](/ko/docs/Web/CSS) 속성은 애니메이션이 한 사이클을 완료하는 데 걸리는 시간을 지정합니다.

```css
/* Single animation */
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;
```

축약 속성 {{ cssxref("animation") }}를 사용하여 모든 애니메이션 속성을 한꺼번에 설정하는 것이 편리합니다.

{{cssinfo}}

## 문법(Syntax)

### Values

- `{{cssxref("&lt;time&gt;")}}`
  - : 애니메이션이 한 사이클을 완료하는 데 걸리는 지속 시간입니다. 이것은 초(s) 또는 밀리 초 (ms)로 지정 될 수 있습니다. 값은 양수 또는 0이어야하며 단위는 필수입니다. 기본값인 0의 값은 애니메이션이 작동하지 않아야 함을 나타냅니다.

> [!NOTE]
> 음수 값은 유효하지 않으므로 선언이 무시됩니다. 접두사가 붙은 구현은 그것들을 0과 동일하게 간주 할 수 있습니다.

> [!NOTE]
> animation- \* 속성에 여러 개의 쉼표로 구분 된 값을 지정하면 {{cssxref ( "animation-name")}} 속성에 지정된 애니메이션에 얼마나 많은 값이 있는지에 따라 다른 방식으로 지정됩니다. 자세한 내용은 [Setting multiple animation property values](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)를 참조하십시오.

### Formal syntax

{{csssyntax}}

## 예제(Examples)

[CSS 애니메이션 예제](/en-US/CSS/CSS_animations)를 참조하십시오.

## 명세

{{Specifications}}

## 브라우저 호환성(Browser compatibility)

{{Compat}}

## 같이 보기(See also)

- [Using CSS animations](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API

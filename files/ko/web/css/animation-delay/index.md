---
title: animation-delay
slug: Web/CSS/animation-delay
---

{{CSSRef}}

**`animation-delay`** [CSS](/ko/docs/Web/CSS) 속성은 애니메이션이 시작할 시점을 지정합니다. 시작 즉시, 잠시 후에, 또는 애니메이션이 일부 진행한 시점부터 시작할 수 있습니다.

{{EmbedInteractiveExample("pages/css/animation-delay.html")}}

{{cssxref("animation")}} 단축 속성을 사용해 애니메이션 관련 속성을 편리하게 같이 지정할 수 있습니다.

## 구문

```css
/* Single animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;
```

### 값

- `{{cssxref("&lt;time&gt;")}}`

  - : 애니메이션이 시작될 요소가 적용되는 순간부터의 시간 오프셋입니다. 이 값은 초 또는 밀리 초 (ms)로 지정할 수 있습니다. 이 값은 필수입니다.

    양수 값은 지정된 시간이 경과 한 후 애니메이션이 시작되어야 함을 나타냅니다. 기본값인 0의 값은 애니메이션이 적용되는 즉시 시작해야 함을 나타냅니다.

    음수 값을 지정하면 애니메이션이 즉시 시작되지만 애니메이션 주기의 도중에 시작됩니다. 예를 들어 애니메이션 지연 시간으로 -1s를 지정하면 애니메이션이 즉시 시작되지만 애니메이션 시퀀스의 1초부터 시작됩니다. 만약 animation-delay에 음수 값을 지정했지만 시작값이 절대값이면 시작값은 애니메이션이 요소에 적용된 시점부터 가져옵니다.

> **참고:** `animation- *` 속성에 여러 개의 쉼표로 구분 된 값을 지정하면 [`animation-name`](/ko/docs/Web/CSS/animation-name) 속성에 지정된 애니메이션에 할당되는 값의 수에 따라 다른 방식으로 지정됩니다. 자세한 내용은 [여러 애니메이션 속성 값 설정](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values)을 참조하십시오.

### 형식 구문

{{csssyntax}}

## 예제

[CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)를 보세요.

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API

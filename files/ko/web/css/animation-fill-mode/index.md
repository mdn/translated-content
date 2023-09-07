---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
---

{{CSSRef}}

**`animation-fill-mode`** [CSS](/en/CSS) 속성은 CSS 애니메이션이 실행 전과 후에 대상에 스타일을 적용하는 방법을 지정합니다.

```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```

축약 속성 [`animation`](/ko/docs/Web/CSS/animation)을 사용하여 모든 애니메이션 속성을 한꺼번에 설정하는 것이 편리합니다.

{{cssinfo}}

## 문법(Syntax)

### 값(Values)

- `none`
  - : 애니메이션은 실행되지 않을 때 대상에 스타일을 적용하지 않습니다. 요소는 대신 적용된 다른 CSS 규칙을 사용하여 표시됩니다. 이것은 기본값입니다.
- `forwards`

  - : 대상은 실행 된 애니메이션의 마지막 [keyframe](/ko/docs/CSS/@keyframes)에 의해 설정된 계산 된 값을 유지합니다. 마지막 키 프레임은 {{cssxref("animation-direction")}}및 {{cssxref("animation-iteration-count")}}의 값에 따라 다릅니다.

    | `animation-direction` | `animation-iteration-count` | last keyframe encountered |
    | --------------------- | --------------------------- | ------------------------- |
    | `normal`              | even or odd                 | `100%` or `to`            |
    | `reverse`             | even or odd                 | `0%` or `from`            |
    | `alternate`           | even                        | `0%` or `from`            |
    | `alternate`           | odd                         | `100%` or `to`            |
    | `alternate-reverse`   | even                        | `100%` or `to`            |
    | `alternate-reverse`   | odd                         | `0%` or `from`            |

- `backwards`

  - : 애니메이션은 대상에 적용되는 즉시 첫 번째 관련 [keyframe](/ko/docs/CSS/@keyframes) 에 정의 된 값을 적용하고 {{cssxref("animation-delay")}} 기간 동안 이 값을 유지합니다. 첫 번째 관련 키프레임은 {{cssxref("animation-direction")}}의 값에 따라 다릅니다.

    | `animation-direction`            | first relevant keyframe |
    | -------------------------------- | ----------------------- |
    | `normal` or `alternate`          | `0%` or `from`          |
    | `reverse` or `alternate-reverse` | `100%` or `to`          |

- `both`
  - : 애니메이션은 앞뒤 양쪽 모두의 규칙을 따르므로 애니메이션 속성이 양방향으로 확장됩니다.

> **참고:** animation- \* 속성에 여러 개의 쉼표로 구분 된 값을 지정하면 [`animation-name`](/ko/docs/Web/CSS/animation-name) 속성에 지정된 애니메이션에 할당되는 값의 수에 따라 다른 방식으로 지정됩니다. 자세한 내용은 [여러 애니메이션 속성 값 설정](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values)을 참조하십시오.

### Formal syntax

{{csssyntax}}

## 예제(Examples)

다음 예제에서 animation-fill-mode의 효과를 볼 수 있습니다. 무한 시간 동안 실행되는 애니메이션의 경우 원래 상태 (기본값)로 되돌리기보다는 최종 상태로 유지하는 방법을 보여줍니다.

### HTML

```html
<p>회색 박스 위에 마우스를 올려보세요!</p>
<div class="demo">
  <div class="grows">이 글씨는 커집니다.</div>
  <div class="growsandstays">이 글씨는 커지며, 커진 상태를 유지합니다.</div>
</div>
```

### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
}

@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

{{EmbedLiveSample('Example',700,300)}}

자세한 예제는 [CSS animations](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)를 보십시오.

## 명세

{{Specifications}}

## 브라우저 호환성(Browser compatibility)

{{Compat}}

## 같이 보기(See also)

- [Using CSS animations](/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API

---
title: 한 번에 여러 배경 사용하기
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

**여러 개의 배경**을 한 번에 적용할 수도 있습니다. 첫 번째 배경이 맨 위에, 마지막 배경이 맨 밑에 위치하는 레이어 구조를 사용하게 됩니다. 마지막 배경에만 배경색을 적용할 수 있습니다.

여러 배경을 적용하는 건 쉽습니다.

```css
.myclass {
  background:
    background1,
    background 2,
    ...,
    backgroundN;
}
```

{{ cssxref("background") }} [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)뿐 아니라 {{cssxref("background-color")}}를 제외한 단일 속성에서도 사용할 수 있습니다. 즉, {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}에는 목록을 값으로 지정할 수 있습니다.

## 예제

다음 예제는 Firefox 로고, 거품, [선형 그레이디언트](/ko/docs/Web/CSS/linear-gradient) 총 세 개의 배경을 사용합니다.

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image: url(firefox.png), url(bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### 결과

{{EmbedLiveSample('예제','600','400')}}

결과에서 볼 수 있듯, {{cssxref("background-image")}}에서 첫 번째로 지정한 Firefox 로고가 맨 위, 그 다음이 거품 그림이고 선형 그레이디언트는 모든 '이미지' 밑에 위치합니다. 하위 속성({{ cssxref("background-repeat") }}, {{ cssxref("background-position") }})의 각 값도 순서에 맞는 배경에 적용됩니다. 따라서 `background-repeat`의 첫 번째 값은 처음(맨 위) 배경에 적용되고, 두 번째와 두 번째 배경, 세 번째와 세 번째 배경...도 같습니다.

## 같이 보기

- [CSS 그레이디언트 사용하기](/ko/docs/CSS/Using_CSS_gradients)

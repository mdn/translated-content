---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{CSSRef}}

**`linear-gradient()`** [CSS](/ko/docs/Web/CSS) [함수](/ko/docs/Web/CSS/CSS_Functions)는 두 개 이상의 색상이 직선을 따라 점진적으로 변화되는 선형 그라데이션 그림을 생성합니다. 그 결과는 {{CSSxRef("&lt;gradient&gt;")}} 데이터 유형의 객체이며, 이는 {{CSSxRef("&lt;image&gt;")}}의 특별한 종류 중 하나입니다.

{{EmbedInteractiveExample("pages/css/function-linear-gradient.html")}}

## 구문

```css
/* 45도 경사를 기준으로
  파란색에서 시작해서 빨간색으로 변화하는 그라데이션 */
linear-gradient(45deg, blue, red);

/* 오른쪽 아래에서 왼쪽 위로,
  파란색에서 시작해서 빨간색으로 변화하는 그라데이션 */
linear-gradient(to left top, blue, red);

/* 색이 중지되는 지점을 명시. 아래에서 위로 시작하여,
   파란색에서 시작한 뒤 총 길이의 40% 지점에서 초록색으로 변화하고,
   마지막에는 빨간색으로 변화하는 그라데이션 */
linear-gradient(0deg, blue, green 40%, red);

/* 색상 힌트. 왼쪽에서 오른쪽으로,
   빨간색에서 시작한 뒤 그라데이션의 길이의 10% 지점에서 중간 색상에 도달하여
   나머지 90%의 길이는 파란색으로 변화하는 그라데이션 */
linear-gradient(.25turn, red, 10%, blue);

/* 여러 색 중지 지점을 명시. 45도 경사를 기준으로
   왼쪽 아래의 절반은 빨간색, 오른쪽 위의 절반은 파란색으로
   뚜렷한 선을 기준으로 변화하는 그라데이션 */
linear-gradient(45deg, red 0 50%, blue 50% 100%);
```

### 값들

- `<side-or-corner>`

  - : 그라데이션의 시작 지점의 위치. 이 값이 지정될 때에는 `to`라는 값과 함께 최대 2개의 키워드를 가질 수 있습니다. 한 경우는 `left`와 `right` 값을 통해 수평선을 의미하는 방식이고, 다른 경우는 `top`과 `bottom`을 이용해 수직선을 의미하는 방식입니다. 각 키워드의 순서는 중요하지 않습니다. 만약 이 값이 명시되지 않으면, 기본적으로 `to bottom`이 지정됩니다.

    `to top`, `to bottom`, `to left`, 그리고 `to right`은 각각 각도 `0deg`, `180deg`, `270deg`, `90deg`과 동일합니다. 다른 값의 경우는 각도 그 자체로 해석됩니다.

- {{CSSxRef("&lt;angle&gt;")}}

  - : 그라데이션 선 방향의 각도. `0deg`은 `to top`과 동일한 의미를 가지며 값이 증가할수록 시계 방향으로 회전합니다.

- `<linear-color-stop>`

  - : {{CSSxRef("&lt;color&gt;")}} 값의 색 중지점으로, 하나 혹은 두 개의 중지 위치에 대한 값이 뒤따라옵니다. 중지 위치에 대한 값은 그라데이션의 축을 따라 정해지는 {{CSSxRef("&lt;percentage&gt;")}} 혹은 {{CSSxRef("&lt;length&gt;")}} 값 입니다.

- `<color-hint>`
  - : 인접한 색상 중지점 사이에서, 그라데이션이 어떻게 색을 어떻게 변화시킬지를 정의하기 위한 보간 정보. 길이는 두 색상 중지점 사이의 어떤 지점에서 중간 색상에 도달해야 하는지를 명시합니다. 만약 이 값이 명시되지 않으면, 색상 변화의 중간지점은 두 색상 중지점의 중간이 됩니다.

> **참고:** [CSS 그라데이션의 색 중지점](#선형_그라데이션의_구성)의 렌더링 방식은 [SVG 그라데이션](/ko/docs/Web/SVG/Tutorial/Gradients)과 동일한 규칙을 따릅니다.
>
> Mozilla Firefox, 특히 80.0b3 버전에서는 위의 첫 예제가 동일하게 렌더링되지 않음에 유의하세요. 동일하게 렌더링되기 위해서는 HTML의 height 특성을 100% 혹은 100vh로 설정해야 합니다.

## 설명

다른 그라데이션 방식처럼, 선형 그라데이션은 [자체적인 크기 정보가 없습니다](/ko/docs/Web/CSS/image#description). 즉, 선호되는 크기나 비율에 대한 정보가 없습니다. 그라데이션의 구체적인 크기는 해당 그라데이션이 적용되는 요소의 크기에 맞추어집니다.

컨테이너를 반복하면서 채우는 선형 그라데이션을 생성하기 위해서는 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} 함수를 사용하세요.

`<gradient>`는 `<image>` 데이터 유형에 속하기 때문에, `<image>`가 사용되는 곳에만 쓰일 수 있습니다. 이러한 이유로, `linear-gradient()`는 {{CSSxRef("background-color")}} 속성이나 {{CSSxRef("&lt;color&gt;")}} 데이터 유형을 사용하는 다른 속성에는 적용할 수 없습니다.

### 선형 그라데이션의 구성

선형 그라데이션은 하나의 축(그라데이션 선)과 2개 혹은 그 이상의 색 중지점 들로 구성됩니다. 축의 각 점은 구별되는 색상에 대응됩니다. 부드러운 그라데이션을 표현하기 위해, `linear-gradient()` 함수는 그라데이션 선에 수직이 되도록 일련의 색상 선들을 그립니다. 각각의 선이 지나가는 부분의 색상은 그라데이션 선과 수직선이 교차하는 부분의 색상과 동일합니다.

![linear-gradient.png](linear-gradient.png)

그라데이션 선은 그라데이션 이미지를 포함하는 컨테이너 박스의 중심과 각도에 의해서 결정됩니다. 그라데이션의 색상들은 두 개 혹은 그 이상의 점에 의해 결정되며, 이 점은 시작점과 끝점 그리고 그 사이의 추가적인 색 중지점들로 구성됩니다.

시작점은 그라데이션 선에서 첫 색상이 시작되는 위치입니다. 끝점은 마지막 색상이 끝나는 위치입니다. 이 각각의 두 지점들은 같은 사분면에 존재하는 박스 모서리로부터 시작되는 수직선과 그라데이션 선의 교차점으로 정의됩니다. 끝점은 시작점과 대칭 관계라고 이해할 수 있습니다. 조금은 복잡해보이는 이 정의는 매직 코너라는 흥미로운 효과를 만들게 됩니다. 즉, 시작점과 끝점에 가장 가까운 모서리는 대응되는 점과 동일한 색상을 갖게 됩니다.

#### 그라데이션 재구성하기

그라데이션 선에 더 많은 색 중지점을 추가함으로써, 더 많은 색상 간의 변화를 표현하도록 재구성할 수 있습니다. 색 중지점의 위치는 {{CSSxRef("&lt;length&gt;")}}과 {{CSSxRef("&lt;percentage&gt;")}}을 사용해서 명시할 수 있습니다. 만약 색상의 위치를 지정하지 않으면 이전과 이후에 정의된 색상의 중간 지점에 위치하게 됩니다. 아래의 두 그라데이션은 동일한 그라데이션을 의미합니다.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

기본적으로 색상의 변화는 하나의 색 중지점으로부터 그 다음 색 중지점으로 부드럽게 표현되며, 색상 사이의 중간 지점에 중간 색상이 표현됩니다. 중간 색상이 표현되는 지점은 두 색 중지점 사이에 % 색상 힌트를 추가함으로써 이동시킬 수 있습니다. 아래의 예제는 시작점으로부터 10% 지점까지는 빨간색으로 표현하고 90% 지점부터 마지막까지는 파란색으로 표현하면서 그 사이의 중간 색상이 표현될 위치를 30%로 지정합니다. 만약 30%가 지정되지 않았다면 50% 위치에 중간 색상이 표현됩니다.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

만약 두 개 이상의 색 중지점이 같은 위치로 지정되면 색상의 변화는 처음과 마지막 색상 사이에 해당 위치의 뚜렷한 선을 기준으로 표현됩니다.

색 중지점은 오름차순으로 정의되어야 합니다. 뒤따르는 색 중지점이 더 낮은 값을 가지고 있는 경우 이전 색 중지점의 값을 덮어쓰게 되면서 뚜렷한 선이 생기게 됩니다. 아래의 예제는 40% 지점부터는 빨간색이 노란색으로 바뀌면서 이후 25% 지점을 지나면서 파란색으로 변화가 표현됩니다.

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

다중 위치 색 중지점을 사용하는 것도 가능합니다. 색상은 두 이접한 색 중지점으로 정의될 수 있으며 CSS 정의에서 두 위치를 포함할 수 있습니다. 아래의 세 가지 그라데이션은 동일하게 표현됩니다.

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

기본적으로 0% 색 중지점을 갖는 색상이 없으면 가장 첫번째로 정의된 색상이 그 지점에 표현됩니다. 비슷하게 마지막 색 중지점을 갖는 색상이 없으면 가장 마지막에 정의된 색상이 100%까지 표현됩니다.

## 형식 구문

{{csssyntax}}

## 예제

### 45도 각도를 가지는 그라데이션

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(45deg, red, blue);
}
```

{{EmbedLiveSample("Gradient_at_a_45-degree_angle", 120, 120)}}

### 그라데이션 선의 60% 지점부터 시작되는 그라데이션

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(135deg, orange 60%, cyan);
}
```

{{EmbedLiveSample("Gradient_that_starts_at_60_of_the_gradient_line", 120, 120)}}

### 다중 위치 색 중지점을 갖는 그라데이션

This example uses multi-position color stops, with adjacent colors having the same color stop value, creating a striped effect.

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(
    to right,
    red 20%,
    orange 20% 40%,
    yellow 40% 60%,
    green 60% 80%,
    blue 80%
  );
}
```

{{EmbedLiveSample("Gradient_with_multi-position_color_stops", 120, 120)}}

### 더 많은 선형 그라데이션 예제

더 많은 예제를 보기 위해서는 [CSS 그라데이션 사용하기](/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients)를 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 그라데이션 사용하기](/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- 다른 그라데이션 함수들: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{CSSxRef("&lt;image&gt;")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}

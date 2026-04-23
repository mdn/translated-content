---
title: CSS 그라디언트 사용하기
slug: Web/CSS/Guides/Images/Using_gradients
original_slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 9c8c461dc350668ad326fa9aad604ce9da800df2
---

**CSS 그라디언트**는 두 개 혹은 그 이상의 색상들 사이에서 점진적인 변화를 만들어내는 {{cssxref("&lt;gradient&gt;")}} 데이터 타입, 그 중에서도 {{cssxref("&lt;image&gt;")}} 타입을 대표합니다. {{cssxref("gradient/linear-gradient", "linear-gradient()")}} 함수를 이용한 선형, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} 함수를 이용한 방사형, {{cssxref("gradient/conic-gradient", "conic-gradient()")}} 함수를 이용한 원뿔형, 세 개의 그라디언트 타입 중 하나를 골라 사용할 수 있습니다. 또한 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, 그리고 {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} 함수들을 사용하면 반복되는 그라디언트를 만들 수도 있습니다.

그라디언트는 배경과 같이 `<image>` 를 사용할 수 있는 어디에서나 사용될 수 있습니다. 그라디언트는 동적으로 생성이 되기 때문에, 같은 효과를 내기 위해 사용하던 전통적인 래스터 이미지 파일의 필요성을 없앨 수 있었습니다. 또한, 그라디언트는 브라우저에 의해 생성되므로 이를 확대했을 때 래스터 이미지보다 더 나아 보이고 실시간으로 크기를 조절할 수 있습니다.

선형 그라디언트부터 소개를 하고, 이와 관련된 예제를 통하여 모든 그라디언트 유형에서 지원되는 기능을 소개한 다음 방사형, 원뿔형, 그리고 반복되는 그라디언트를 소개하도록 하겠습니다.

## 선형 그라디언트 사용하기

선형 그라디언트는 직선으로 뻗는 방향으로 색상의 띠를 생성합니다.

### 기본 선형 그라디언트

기본이 되는 선형 그라디언트를 만들기 위해서는 두 가지 색상을 특정하기만 하면 됩니다. 이들은 색상 정지 지점이라고 불립니다. 최소한 두 가지 색상을 지정해야 하지만, 그 이상도 원하는 만큼 지정할 수 있습니다.

```html hidden
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('A_basic_linear_gradient', 120, 120) }}

### 방향 변경하기

기본적으로, 선형 그라디언트는 위에서 아래로 향합니다. 방향을 설정하여 그라디언트의 회전을 변경할 수 있습니다.

```html hidden
<div class="horizontal-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}
```

{{ EmbedLiveSample('Changing_the_direction', 120, 120) }}

### 대각선 그라디언트

하나의 꼭지점에서 다른 꼭지점으로 향하는 대각선의 그라디언트도 생성할 수 있습니다.

```html hidden
<div class="diagonal-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 100px;
}
```

```css
.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}
```

{{ EmbedLiveSample('Diagonal_gradients', 200, 100) }}

### 각도 이용하기

방향에 관한 더 많은 제어를 원한다면 그라디언트에 각도를 부여할 수도 있습니다.

```html hidden
<div class="angled-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}
```

{{ EmbedLiveSample('Using_angles', 120, 120) }}

각도를 이용할 때에는 `0deg` 값은 아래에서 위로 향하는 수직의 그라디언트를 생성하고, `90deg` 값은 왼쪽에서 오른쪽으로 향하는 수평의 그라디언트를 생성하며, 이들은 모두 시계 방향으로 진행됩니다. 음수 각도는 반시계 방향으로 진행됩니다.

![네 개의 상자의 각도를 나열하고 빨간색에서 흰색으로 변하는 것과 관련된 그라디언트를 보여줍니다. 0deg는 아래쪽에서부터 시작하고 위로 향하며, 90deg는 왼쪽에서 시작하여 오른쪽으로 향합니다. 180deg는 위에서 시작하여 아래로 향하고, -90deg 는 오른쪽에서 시작하야 왼쪽으로 향합니다.](linear_red_angles.png)

## 색상 선언하기 & 효과 만들기

모든 CSS 그라디언트 유형은 위치에 따라 달라지는 색상들의 범위입니다. CSS 그라디언트에 의해 생성된 색상은 위치에 따라 지속적으로 변화될 수 있어 부드러운 색상 전환이 가능합니다. 이는 단색의 띠를 만들거나 두 가지 색상 사이의 전환을 만드는 것도 가능합니다. 다음은 모든 그라디언트 함수들에 사용할 수 있는 것들입니다.

### 두 가지 이상의 색상 사용하기

반드시 두 가지의 색상만 사용할 필요 없이 원하는 만큼 색상을 다양하게 사용할 수 있습니다. 기본적으로 색상은 그라디언트를 따라 균등하게 배치됩니다.

```html hidden
<div class="auto-spaced-linear-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.auto-spaced-linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}
```

{{ EmbedLiveSample('Using_more_than_two_colors', 120, 120) }}

### 색상 정지 지점 위치 설정하기

색상 정지 지점을 기본 위치로만 이용하지 않아도 됩니다. 위치를 미세하기 조정하기 위해 각각의 색상 정지 지점에 0개, 하나, 혹은 두 개의 백분율, 혹은 방사형과 선형의 경우에는 절대 길이를 부여할 수 있습니다. 위치를 백분율로 지정할 경우에는, `0%` 은 시작 지점이 되는 반면 `100%` 는 끝 지점을 표현합니다. 하지만, 의도한대로 효과를 내고 싶다면 범위에서 벗어난 값을 사용할 수도 있습니다. 만일 위치를 지정하지 않을 경우에는 해당 색상 정지 지점의 위치는 자동으로 계산됩니다. 첫번째 색상 정지 지점은 `0%` 에, 마지막 색상 정지 지점은 `100%` 가 되고, 다른 색상 정지 지점은 인접한 다른 색상 정지 지점 사이의 중간에 위치하게 됩니다.

```html hidden
<div class="multicolor-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.multicolor-linear {
  background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```

{{ EmbedLiveSample('Positioning_color_stops', 120, 120) }}

### 명확한 선 생성하기

두 가지 색상 사이에 점진적인 전환 대신 명확한 선을 만들어 줄무늬를 만들고자 할 때는 인접한 색상 정지 지점을 동일한 위치에 설정할 수 있습니다. 이 예제에서는 색상들이 그라디언트의 중간 지점인 `50%` 에서 색상 정지 지점을 공유합니다.

```html hidden
<div class="striped"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.striped {
  background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}
```

{{ EmbedLiveSample('Creating_hard_lines', 120, 120) }}

### 그라디언트 힌트

기본적으로 그라디언트 변형은 하나의 색상에서 다음 색상으로 전환됩니다. 색상 힌트를 포함하면 색상 전환의 중간 지점을 특정한 지점으로 이동할 수 있습니다. 이 예제에서는 중간 지점을 50% 지점에서 10% 지점으로 이동합니다.

```html hidden
<div class="color-hint"></div>
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
}
```

```css
.color-hint {
  background: linear-gradient(blue, 10%, pink);
}
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('Gradient_hints', 120, 120) }}

### 색상 띠와 줄무늬 만들기

그라디언트 내부에서 전환이 없는 고체의 색상 영역을 포함하기 위해서는 색상 정지 지점을 위한 두 개의 위치를 포함해야 합니다. 색상 정지 지점은 두 개의 위치값을 가질 수 있는데, 이는 다른 위치에서 같은 색상을 가진 연속적인 두 색상 정지 지점과 동일합니다. 색상은 첫번째 색상 정지 지점에서 완전한 채도에 도달하고, 두번째 색상까지 해당 채도를 그대로 유지한 뒤 인접한 색상 정지 지점의 첫번째 위치를 통해 해당 색상 정지 지점의 색상으로 전환됩니다.

```html hidden
<div class="multiposition-stops"></div>
<div class="multiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.multiposition-stops {
  background: linear-gradient(
    to left,
    lime 20%,
    red 30%,
    red 45%,
    cyan 55%,
    cyan 70%,
    yellow 80%
  );
  background: linear-gradient(
    to left,
    lime 20%,
    red 30% 45%,
    cyan 55% 70%,
    yellow 80%
  );
}
.multiposition-stop2 {
  background: linear-gradient(
    to left,
    lime 25%,
    red 25%,
    red 50%,
    cyan 50%,
    cyan 75%,
    yellow 75%
  );
  background: linear-gradient(
    to left,
    lime 25%,
    red 25% 50%,
    cyan 50% 75%,
    yellow 75%
  );
}
```

{{ EmbedLiveSample('Creating_color_bands_stripes', 120, 120) }}

위 첫번째 예시에서 라임색 0% 지점에서 시작하여 20% 지점으로 향하고, 그라디언트 너비의 다음 10% 동안 라임색에서 빨간색으로 전환이 됩니다. 그리고 30% 지점에서 완전한 빨간색에 도달하게 되고 그라디언트의 45% 지점까지 이를 유지합니다. 거기서 푸른색으로 점차 변하고, 그라디언트의 15% 동안 완전히 푸른색이 되며 그 후 이를 유지합니다.

두번째 예시에서는 각각의 색상에서 두번째 색상 정지 지점은 인접한 색상의 첫번째 색상 정지 지점과 같은 위치에 있어 줄무늬를 생성합니다.

두 가지 예시에서 그라디언트는 두 번 쓰였습니다. 첫번째는 CSS 이미지 레벨 3 방식으로 각 색상 정지 지점마다 색상을 반복하고, 두번째 예시는 CSS 이미지 레벨 4의 방법으로 다중 색상 정지 지점을 사용하여 선형 색상 정지 지점 선언에 두 개의 색상 정지 지점 길이를 포함시킵니다.

### 그라디언트의 진행 제어하기

기본적으로 그라디언트는 두 가지 인접한 색상 사이에서 균등하게 진행이 되며, 그 중간 지점은 두 색상 사이 색상 정지 지점의 중간 색상 값이 됩니다. 두 색상 정지 지점 사이의 {{Glossary("interpolation", "보간법")}}이나 진행은 색상 힌트 위치를 포함시켜 제어할 수 있습니다. 이 예제에서는 라임과 푸른색 사이 그라디언트가 50% 지점이 아닌 20% 지점에서 중간 지점에 도달하게 됩니다. 두번째 예제는 힌트를 포함하지 않기 때문에 색상 힌트가 얼마나 차이를 만들 수 있는지에 대해 강조합니다.

```html hidden
<div class="colorhint-gradient"></div>
<div class="regular-progression"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.colorhint-gradient {
  background: linear-gradient(to top, lime, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, lime, cyan);
}
```

{{ EmbedLiveSample('Controlling_the_progression_of_a_gradient', 120, 120) }}

### 그라디언트 겹치기

그라디언트는 투명도를 지원합니다. 다수의 배경을 중첩하여 심미적인 효과를 달성할 수도 있습니다. 배경은 위에서부터 아래로 중첩되고, 처음으로 정의한 것이 상단에 위치하게 됩니다.

```html hidden
<div class="layered-image"></div>
```

```css hidden
div {
  width: 300px;
  height: 150px;
}
```

```css
.layered-image {
  background:
    linear-gradient(to right, transparent, mistyrose), url("critters.png");
}
```

{{ EmbedLiveSample('Overlaying_gradients', 300, 150) }}

### 중첩된 그라디언트

그라디언트를 다른 그라디언트와 중첩시킬 수도 있습니다. 위에 있는 그라디언트가 완전히 불투명해지지 않는 한, 아래쪽에 있는 그라디언트도 여전히 보이는 상태로 있게 됩니다.

```html hidden
<div class="stacked-linear"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-linear {
  background:
    linear-gradient(217deg, rgb(255 0 0 / 80%), rgb(255 0 0 / 0%) 70.71%),
    linear-gradient(127deg, rgb(0 255 0 / 80%), rgb(0 255 0 / 0%) 70.71%),
    linear-gradient(336deg, rgb(0 0 255 / 80%), rgb(0 0 255 / 0%) 70.71%);
}
```

{{ EmbedLiveSample('Stacked_gradients', 200, 200) }}

### 그라디언트 혼합하기

투명도 외에도 여러 개의 반투명한 그라디언트를 중첩시키거나 래스터 배경 이미지 위에 그라디언트를 겹치는 등 그라디언트는 다른 CSS 효과들과 함께 사용될 수 있습니다. 이 예제에서는 네 개의 {{htmlelement("div")}} 요소에 두 개의 동일한 불투명의 이미지 배경이 사용되고 있습니다. 마지막 세 개의 요소에는 두 개의 배경 이미지를 혼합하여 서로 다른 효과를 생성하는 {{cssxref("background-blend-mode")}} CSS 속성 값을 적용합니다.

```html hidden
<div class="original"></div>
<div class="screen"></div>
<div class="overlay"></div>
<div class="difference"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
div {
  background:
    linear-gradient(to top, red, blue),
    linear-gradient(to right, #5500ff, #00ff55);
}

.screen {
  background-blend-mode: screen;
}

.overlay {
  background-blend-mode: overlay;
}

.difference {
  background-blend-mode: difference;
}
```

{{ EmbedLiveSample('Blending_gradients', 120, 120) }}

## 방사형 그라디언트 사용하기

방사형 그라디언트는 선형 그라디언트와 유사하지만 중심 지점에서 방사향으로 퍼져나간다는 점에 차이가 있습니다. 그 중심 지점의 위치를 지정할 수 있고, 방사형 그라디언트를 원형이나 타원형으로 만들 수도 있습니다.

### 기본 방사형 그라디언트

선형 그라디언트처럼, 방사형 그라디언트를 생성하기 위해 필요한 것은 두 가지 색상입니다. 기본적으로 그라디언트의 중심 지점은 50% 50% 지점에 있으며, 그라디언트는 박스의 {{glossary("aspect ratio")}} 와 일치하는 타원형입니다.

```html hidden
<div class="simple-radial"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.simple-radial {
  background: radial-gradient(red, blue);
}
```

{{ EmbedLiveSample('A_basic_radial_gradient', 120, 120) }}

### 색상 정지 지점 위치 설정하기

선형 그라디언트처럼 방사형 색상 정지 지점에도 백분율이나 절대 길이를 부여하여 위치를 설정할 수 있습니다.

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_radial_color_stops', 120, 120) }}

### 그라디언트의 중심 위치 설정하기

그라디언트의 중심을 키워드, 백분율 혹은 절대 길이로 위치시킬 수 있습니다. 길이와 백분율은 하나만 존재할 경우에 반복되고, 그렇지 않으면 왼쪽에서의 위치와 위쪽에서의 위치 순서로 지정됩니다.

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_the_center_of_the_gradient', 120, 120) }}

### 방사형 그라디언트 크기 조절하기

선형 그라디언트와는 다르게 방사형 그라디언트에는 크기를 설정할 수 있습니다. 가능한 값으로는 `closest-corner`, `closest-side`, `farthest-corner`, 그리고 `farthest-side` 가 있으며 `farthest-corner` 가 기본값입니다. 원은 길이로 크기를 조정할 수 있고, 타원은 길이 또는 백분율로 크기를 조정할 수 있습니다.

#### 예제: 타원형을 위한 `closest-side`

이 예제는 크기의 값으로 `closest-side` 를 사용하는데, 이는 시작(중심 지점)으로부터의 둘러싸는 상자의 가장 가까운 변까지의 거리로 설정된다는 의미입니다.

```html hidden
<div class="radial-ellipse-side"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-side {
  background: radial-gradient(
    ellipse closest-side,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_closest-side_for_ellipses', 240, 100) }}

#### 예제: 타원형을 위한 `farthest-corner`

이 예제는 방금 전 예제와 유사하지만 크기가 `farthest-corner` 로 특정된다는 데에 차이가 있습니다. 이는 그라디언트의 크기가 시작(중심 지점)으로부터의 둘러싸는 상자의 가장 멀리 위치한 모서리까지의 거리로 설정된다는 의미입니다.

```html hidden
<div class="radial-ellipse-far"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-far {
  background: radial-gradient(
    ellipse farthest-corner at 90% 90%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_farthest-corner_for_ellipses', 240, 100) }}

#### 예제: 원형을 위한 `closest-side`

이 예제는 `closest-side` 를 사용하고, 이는 원의 반지름이 그라디언트의 중심과 가장 가까운 변 사이의 거리가 되도록 만듭니다. 이 경우에는 그라데이션이 왼쪽에서 25%, 아래쪽에서 25% 떨어진 위치에 배치되고, div 요소의 높이가 너비보다 작기 때문에 반지름은 중심과 아래쪽 변 사이의 거리입니다.

```html hidden
<div class="radial-circle-close"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-close {
  background: radial-gradient(
    circle closest-side at 25% 75%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_closest-side_for_circles', 240, 120) }}

#### 예제: 타원형을 위한 길이나 백분율

타원형 한정으로, 타원의 크기를 길이나 백분율을 이용하여 조절할 수 있습니다. 첫번째 값은 가로 반지름을 나타내고 두번째 값은 세로 반지름을 나타내는데, 백분율을 사용하는 경우 이는 해당 차원의 박스 크기에 상응합니다. 아래 예제에서는 가로 반지름에 적용하기 위해 백분율을 사용합니다.

```html hidden
<div class="radial-ellipse-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-ellipse-size {
  background: radial-gradient(
    ellipse 50% 50px,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_length_or_percentage_for_ellipses', 240, 120) }}

#### 예제: 원형을 위한 길이

원형에서는 크기는 {{cssxref("length")}} 의 값을 이용할 수 있습니다. 이는 원형의 크기에 해당됩니다.

```html hidden
<div class="radial-circle-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-size {
  background: radial-gradient(circle 50px, red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_length_for_circles', 240, 120) }}

### 중첩 방사형 그라디언트

선형 그라디언트와 마찬가지로 방사형 그라디언트도 중첩하여 사용할 수 있습니다. 첫번째 값은 위에 위치하고, 마지막 값은 아래에 위치합니다.

```html hidden
<div class="stacked-radial"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-radial {
  background:
    radial-gradient(
      circle at 50% 0,
      rgb(255 0 0 / 50%),
      rgb(255 0 0 / 0%) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgb(0 0 255 / 50%),
      rgb(0 0 255 / 0%) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgb(0 255 0 / 50%),
        rgb(0 255 0 / 0%) 70.71%
      )
      beige;
  border-radius: 50%;
}
```

{{ EmbedLiveSample('Stacked_radial_gradients', 200, 200) }}

## 원뿔형 그라디언트 사용하기

**`conic-gradient()`** [CSS](/ko/docs/Web/CSS) 함수는 중심 지점 주위를 회전하는 동안 (중심에서 방사되는 형태가 아닌) 이루어지는 색상 전환의 그라디언트를 생성합니다. 원뿔형 그라디언트의 예제로는 파이 차트와 {{glossary("color wheel", "color wheels")}} 이 있지만, 체커 보드나 다른 흥미로운 효과를 만드는 데에도 원뿔형 그라디언트가 사용됩니다.

원뿔형 그라디언트의 문법은 방사형 그라디언트의 문법과 유사하지만 색상 정지 지점이 중심에서 퍼져나오는 선이 아니라 원의 둘레에 그라디언트가 배치됩니다. 색상 정지 지점은 백분율이나 각도로 지정되고, 절대 길이는 사용할 수 없습니다.

방사형 그라디언트에서는, 색상이 타원의 중심에서 바깥쪽으로 모든 방향으로 전환됩니다. 원뿔형 그라디언트에서는 색상이 원의 중심 주위를 회전하는 것처럼 전환되며, 위쪽에서 시작하여 시계 방향으로 진행됩니다. 방사형 그라디언트와 마찬가지로 그라디언트의 중심을 위치시킬 수 있으며, 선형 그라디언트와 마찬가지로 그라디언트의 각도를 변경할 수 있습니다.

### 기본 원뿔형 그라디언트

선형과 방사형 그라디언트와 같이, 원뿔형 그라디언트를 생성하기 위해 필요한 것은 두 가지 색상입니다. 기본적으로 그라디언트의 중심은 50% 50% 지점이고, 그라디언트의 시작은 위쪽을 향합니다.

```html hidden
<div class="simple-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-conic {
  background: conic-gradient(red, blue);
}
```

{{ EmbedLiveSample('A_basic_conic_gradient', 120, 120) }}

### 원뿔의 중심 위치 설정하기

방사형 그라디언트처럼 원뿔형 그라디언트의 중심 위치를 키워드, 백분율 혹은 절대 길이로 설정이 가능하며, 이는 키워드 "at"과 함께 사용됩니다.

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_the_conic_center', 120, 120) }}

### 각도 변경하기

기본적으로, 지정된 다른 색상 정지 지점은 원을 기준으로 균등하게 위치합니다. 원뿔형 그라디언트의 시작 각도를 "from" 키워드를 사용하여 각도나 길이로 지정할 수 있으며, 색상 정지 지점의 위치를 각도나 길이를 포함하여 다르게 지정할 수도 있습니다.

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);
}
```

{{ EmbedLiveSample('Changing_the_angle', 120, 120) }}

## 반복 그라디언트 사용하기

{{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} 와 {{cssxref("gradient/conic-gradient", "conic-gradient()")}} 함수는 반복된 색상 정지 지점을 자동적으로 지원하지 않습니다. 그러나, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, 그리고 {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} 함수는 이를 실행하기에 적합합니다.

첫번째 색상 중지 지점 값과 마지막 색상 중지 지점 값 사이의 길이가 반복되는 그라디언트 라인의 크기입니다. 첫번째 색상 중지 지점에 색상만 있고 색 중지 길이가 없는 경우 값은 기본적으로 0으로 설정됩니다. 마지막 색상 중지 지점에 색상만 있고 중지 길이가 없는 경우 값은 기본적으로 100%로 설정됩니다. 둘 다 선언되지 않은 경우, 그라디언트 라인은 100%로 간주되며 선형 혹은 원뿔형 그라디언트는 반복되지 않고 방사형 그라디언트는 그라디언트의 반지름이 중심에서 가장 먼 모서리까지의 거리보다 작은 경우에만 반복됩니다. 첫번째 색상 중지가 선언되고 값이 0보다 큰 경우, 그라디언트가 반복됩니다. 이는 첫번째 색상 중지 지점과 마지막 색상 중지 지점 사이의 차이가 100% 또는 360도보다 작은 경우입니다.

### 반복되는 선형 그라디언트

이 예제에서는 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}를 사용하여 직선으로 반복적으로 진행되는 그라디언트를 생성합니다. 색상은 그라디언트가 반복될 때 다시 순환합니다. 이 경우 그라디언트 선의 길이는 10px입니다.

```html hidden
<div class="repeating-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-linear {
  background: repeating-linear-gradient(
    -45deg,
    red,
    red 5px,
    blue 5px,
    blue 10px
  );
}
```

{{ EmbedLiveSample('Repeating_linear_gradients', 120, 120) }}

### 다수의 반복되는 선형 그라디언트

규칙적인 선형이나 방사형 그라디언트와 마찬가지로 하나 위에 다른 것을 겹쳐 다수의 그라디언트를 포함시킬 수 있습니다. 이는 오직 그라디언트가 다른 그라디언트 이미지에 대해 부분적으로 투명하여 연속된 다른 그라디언트가 투명한 부분을 통해 보이거나, 다른 [background-sizes](/ko/docs/Web/CSS/background-size)를 사용하거나, 선택적으로 다른 [background-position](/ko/docs/Web/CSS/background-position) 속성 값을 상요한 경우에만 유효합니다.

이 경우에 그라디언트 선은 각각 300px, 230px, 300px 길이입니다.

```html hidden
<div class="multi-repeating-linear"></div>
```

```css hidden
div {
  width: 600px;
  height: 400px;
}
```

```css
.multi-repeating-linear {
  background:
    repeating-linear-gradient(
      190deg,
      rgb(255 0 0 / 50%) 40px,
      rgb(255 153 0 / 50%) 80px,
      rgb(255 255 0 / 50%) 120px,
      rgb(0 255 0 / 50%) 160px,
      rgb(0 0 255 / 50%) 200px,
      rgb(75 0 130 / 50%) 240px,
      rgb(238 130 238 / 50%) 280px,
      rgb(255 0 0 / 50%) 300px
    ),
    repeating-linear-gradient(
      -190deg,
      rgb(255 0 0 / 50%) 30px,
      rgb(255 153 0 / 50%) 60px,
      rgb(255 255 0 / 50%) 90px,
      rgb(0 255 0 / 50%) 120px,
      rgb(0 0 255 / 50%) 150px,
      rgb(75 0 130 / 50%) 180px,
      rgb(238 130 238 / 50%) 210px,
      rgb(255 0 0 / 50%) 230px
    ),
    repeating-linear-gradient(
      23deg,
      red 50px,
      orange 100px,
      yellow 150px,
      green 200px,
      blue 250px,
      indigo 300px,
      violet 350px,
      red 370px
    );
}
```

{{ EmbedLiveSample('Multiple_repeating_linear_gradients', 600, 400) }}

### 격자 그라디언트

격자를 만들기 위해서는 투명도가 있는 그라디언트 몇 개를 겹쳐야 합니다. 첫번째 배경 선언에서는 모든 색상 정지 지점을 개별적으로 나열합니다. 두번째 배경 속성 선언에서는 여러 위치의 색상 정지 지점 문법을 사용합니다.

```html hidden
<div class="plaid-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.plaid-gradient {
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgb(255 127 0 / 25%) 50px,
      rgb(255 127 0 / 25%) 56px,
      transparent 56px,
      transparent 63px,
      rgb(255 127 0 / 25%) 63px,
      rgb(255 127 0 / 25%) 69px,
      transparent 69px,
      transparent 116px,
      rgb(255 206 0 / 25%) 116px,
      rgb(255 206 0 / 25%) 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      rgb(255 127 0 / 25%) 50px,
      rgb(255 127 0 / 25%) 56px,
      transparent 56px,
      transparent 63px,
      rgb(255 127 0 / 25%) 63px,
      rgb(255 127 0 / 25%) 69px,
      transparent 69px,
      transparent 116px,
      rgb(255 206 0 / 25%) 116px,
      rgb(255 206 0 / 25%) 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgb(143 77 63 / 25%) 5px,
      rgb(143 77 63 / 25%) 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgb(143 77 63 / 25%) 5px,
      rgb(143 77 63 / 25%) 10px
    );

  background:
    repeating-linear-gradient(
      90deg,
      transparent 0 50px,
      rgb(255 127 0 / 25%) 50px 56px,
      transparent 56px 63px,
      rgb(255 127 0 / 25%) 63px 69px,
      transparent 69px 116px,
      rgb(255 206 0 / 25%) 116px 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0 50px,
      rgb(255 127 0 / 25%) 50px 56px,
      transparent 56px 63px,
      rgb(255 127 0 / 25%) 63px 69px,
      transparent 69px 116px,
      rgb(255 206 0 / 25%) 116px 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent 0 5px,
      rgb(143 77 63 / 25%) 5px 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent 0 5px,
      rgb(143 77 63 / 25%) 5px 10px
    );
}
```

{{ EmbedLiveSample('Plaid_gradient', 200, 200) }}

### 반복되는 방사형 그라디언트

이 예제에서는 {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}를 사용하여 중심 지점으로부터 반복적으로 방사되는 그라디언트를 생성합니다. 색상은 그라디언트 반복에 따라 순환하게 됩니다.

```html hidden
<div class="repeating-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-radial {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{ EmbedLiveSample('Repeating_radial_gradients', 120, 120) }}

### 다수의 반복되는 방사형 그라디언트

```html hidden
<div class="multi-target"></div>
```

```css hidden
div {
  width: 250px;
  height: 150px;
}
```

```css
.multi-target {
  background:
    repeating-radial-gradient(
        ellipse at 80% 50%,
        rgb(0 0 0 / 50%),
        rgb(0 0 0 / 50%) 15px,
        rgb(255 255 255 / 50%) 15px,
        rgb(255 255 255 / 50%) 30px
      )
      top left no-repeat,
    repeating-radial-gradient(
        ellipse at 20% 50%,
        rgb(0 0 0 / 50%),
        rgb(0 0 0 / 50%) 10px,
        rgb(255 255 255 / 50%) 10px,
        rgb(255 255 255 / 50%) 20px
      )
      top left no-repeat yellow;
  background-size:
    200px 200px,
    150px 150px;
}
```

{{ EmbedLiveSample('Multiple_repeating_radial_gradients', 250, 150) }}

### 반복되는 원뿔형 그라디언트

이 예제는 {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}를 사용하여 중심 지점 주위로 반복적으로 회전하는 그라디언트를 생성합니다. 이 경우에는 선언된 색상 정지 지점이 네 번 반복됩니다.

```html hidden
<div class="repeating-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-conic {
  background: repeating-conic-gradient(
    #66ccff 0% 8.25%,
    #6633ff 8.25% 16.5%,
    #ff3399 16.5% 25%
  );
}
```

{{ EmbedLiveSample('Repeating_conic_gradients', 120, 120) }}

### 다수의 반복되는 원뿔형 그라디언트

선형 그라디언트와 방사형으로 반복되는 그라디언트와 마찬가지러 여러 개의 원뿔형 그라디언트를 겹칠 수 있습니다. 서로 다른 `at <position>` 값을 이용하여 원뿔형 그라디언트가 중심에서 겹치지 않도록 하고 서로 다른 `from <angle>` 값을 이용하여 반복하는 효과가 일치하지 않도록 하는 흥미로운 효과를 만들어낼 수도 있습니다. 이 예제에서는 반투명의 반복되는 방사형 그라디언트가 각각의 색상 구성을 네 차례 반복하며 겹쳐 있습니다. 겹쳐진 그라디언트를 육안으로 확인할 수 있도록 만들어야 한다면 겹쳐진 상태의 가장 위의 그라디언트 색상이 부분적으로 투명하거나, {{cssxref("background-blend-mode")}} CSS 속성을 사용해야 합니다.

```html hidden
<div class="multi-repeating-conic"></div>
```

```css hidden
div {
  width: 250px;
  height: 250px;
}
```

```css
.multi-repeating-conic {
  background:
    repeating-conic-gradient(
      from 0deg at 80% 50%,
      #5691f580 0% 8.25%,
      #b338ff80 8.25% 16.5%,
      #f8305880 16.5% 25%
    ),
    repeating-conic-gradient(
      from 15deg at 50% 50%,
      #e856f580 0% 8.25%,
      #ff384c80 8.25% 16.5%,
      #e7f83080 16.5% 25%
    ),
    repeating-conic-gradient(
      from 0deg at 20% 50%,
      #f58356ff 0% 8.25%,
      #caff38ff 8.25% 16.5%,
      #30f88aff 16.5% 25%
    );
}
```

{{ EmbedLiveSample('Multiple_repeating_conic_gradients', 250, 250) }}

## 같이 보기

- 그라디언트 함수: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- 그라디언트와 연관된 CSS 데이터 타입: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- 그라디언트와 연관된 CSS 속성: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS 그라디언트 패턴 갤러리, by Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS 그라디언트 라이브러리, by Estelle Weyl](https://standardista.com/cssgradients/)
- [CSS 그라디언트 생성기](https://cssgenerator.org/gradient-css-generator.html)
- [심화 CSS 그라디언트 생성기](https://colorbeta.com/)

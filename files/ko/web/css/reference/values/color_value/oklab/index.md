---
title: oklab()
slug: Web/CSS/Reference/Values/color_value/oklab
original_slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

**`oklab()`** 함수 표기법은 주어진 색상을 Oklab {{glossary("color space", "색 공간")}}으로 표현하는데, 이는 인간의 눈이 색을 인식하는 방식을 모방하려고 합니다.

Oklab은 지각 기반 색 공간으로, 다음과 같은 작업에 유용합니다.

- 이미지의 명암을 그대로 유지하면서 회색조로 변환하기
- 색상의 채도를 조절하면서 색조와 밝기는 그대로 유지하기
- 부드럽고 균일한 색상 그라데이션 만들기 (예: {{HTMLElement("canvas")}} 요소에서 수동으로 보간(interpolation)하는 경우).

`oklab()`은 Oklab 색 공간의 직교 좌표계(즉, a 축과 b 축)를 사용하여 색상을 표현합니다. 이 방식은 RGB보다 더 넓은 범위의 색상, 예를 들어 와이드 감마 및 P3 색상을 표현할 수 있습니다. 만약 극좌표 기반의 색상 시스템(크로마와 색조)을 원한다면 {{cssxref("color_value/oklch", "oklch()")}}를 사용하세요.

## 구문

```css
/* Absolute values */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* Relative values */
oklab(from green l a b / 0.5)
oklab(from #0000FF calc(l + 0.1) a b / calc(alpha * 0.9))
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### 값

아래는 절대 색상과 [상대 색상](/ko/docs/Web/CSS/CSS_colors/Relative_colors)에 허용되는 값에 대한 설명입니다.

#### 절댓값 구문

```plain
oklab(L a b[ / A])
```

매개변수는 다음과 같습니다.

- `L`
  - : `0`과 `1` 사이의 {{CSSXref("&lt;number&gt;")}}, `0%`와 `100%` 사이의 {{CSSXref("&lt;percentage&gt;")}}, 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. 이 값은 색상의 인지된 밝기(얼마나 밝게 보일지)를 지정합니다. 숫자 `0`은 `0%` (검은색), 숫자 `1`은 `100%` (흰색)에 해당합니다.
- `a`
  - : `-0.4`와 `0.4` 사이의 {{CSSXref("&lt;number&gt;")}}, `-100%`와 `100%` 사이의 {{CSSXref("&lt;percentage&gt;")}}, 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. 이 값은 Oklab 색상 공간의 `a` 축을 따라 색상이 얼마나 녹색 (값이 `-0.4`에 가까울수록) 또는 빨간색 (값이 `+0.4`에 가까울수록)인지를 결정합니다. 이 값들은 부호가 있는 값으로, 양수와 음수를 모두 허용하며, 이론적으로는 한계가 없어 `±0.4` (`±100%`) 범위를 벗어난 값을 설정할 수 있습니다. 그러나 실제로는 `±0.5`를 초과할 수 없습니다.
- `b`
  - : `-0.4`와 `0.4` 사이의 {{CSSXref("&lt;number&gt;")}}, `-100%`와 `100%` 사이의 {{CSSXref("&lt;percentage&gt;")}}, 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. 이 값은 Oklab 색상 공간의 `b` 축을 따라 색상의 얼마나 파란색 (값이 `-0.4`에 가까울수록) 또는 노란색 (값이 `+0.4`에 가까울수록)인지를 결정합니다. 이 값들은 부호가 있는 값으로, 양수와 음수를 모두 허용하며, 이론적으로는 한계가 없어 `±0.4` (`±100%`) 범위를 벗어난 값을 설정할 수 있습니다. 그러나 실제로는 `±0.5`를 초과할 수 없습니다.
- `A` {{optional_inline}}
  - : 색상의 알파 채널 값을 나타내는 {{CSSXref("&lt;alpha-value&gt;")}}로, 숫자 `0`은 `0%` (완전히 투명), 숫자 `1`은 `100%` (완전히 불투명)을 나타냅니다. 또한, `none` 키워드를 사용하여 알파 채널이 없음을 명시적으로 지정할 수 있습니다. `A` 채널 값이 명시되지 않으면 기본값은 100% 입니다. 값이 포함될 경우에는 슬래시 (`/`)가 앞에 붙습니다.

> [!NOTE]
> 자세한 내용은 [Missing color components](/ko/docs/Web/CSS/color_value#missing_color_components) 섹션에서 `none`이 미치는 영향을 확인하세요.

#### 상댓값 구문

```plain
oklab(from <color> L a b[ / A])
```

매개변수는 다음과 같습니다.

- `from <color>`
  - : 키워드 `from`은 상대 색상을 정의할 때 항상 포함되며, 뒤에 **기준 색상**을 나타내는 {{cssxref("&lt;color&gt;")}}값이 옵니다. 이 기준 색상은 상대 색상의 기반이 되는 원래 색상으로, 다른 상대 색상을 포함한 _모든_ 유효한 {{cssxref("&lt;color&gt;")}} 문법을 사용할 수 있습니다.
- `L`
  - : `0`과 `1` 사이의 {{CSSXref("&lt;number&gt;")}}, `0%`와 `100%` 사이의 {{CSSXref("&lt;percentage&gt;")}}, 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. 이 값은 색상의 인지된 밝기(얼마나 밝게 보일지)를 지정합니다. 숫자 `0`은 `0%` (검은색), 숫자 `1`은 `100%` (흰색)에 해당합니다.
- `a`
  - : `-0.4`와 `0.4` 사이의 {{CSSXref("&lt;number&gt;")}}, `-100%`와 `100%` 사이의 {{CSSXref("&lt;percentage&gt;")}}, 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. 이 값은 Oklab 색상 공간의 `a` 축을 따라 색상이 얼마나 녹색 (값이 `-0.4`에 가까울수록) 또는 빨간색 (값이 `+0.4`에 가까울수록)인지를 결정합니다. 이 값들은 부호가 있는 값으로, 양수와 음수를 모두 허용하며, 이론적으로는 한계가 없어 `±0.4` (`±100%`) 범위를 벗어난 값을 설정할 수 있습니다. 그러나 실제로는 `±0.5`를 초과할 수 없습니다.
- `b`
  - : `-0.4`와 `0.4` 사이의 {{CSSXref("&lt;number&gt;")}}, `-100%`와 `100%` 사이의 {{CSSXref("&lt;percentage&gt;")}}, 또는 키워드 `none` (이 경우 `0%`와 동일)을 사용할 수 있습니다. 이 값은 Oklab 색상 공간의 `b` 축을 따라 색상의 얼마나 파란색 (값이 `-0.4`에 가까울수록) 또는 노란색 (값이 `+0.4`에 가까울수록)인지를 결정합니다. 이 값들은 부호가 있는 값으로, 양수와 음수를 모두 허용하며, 이론적으로는 한계가 없어 `±0.4` (`±100%`) 범위를 벗어난 값을 설정할 수 있습니다. 그러나 실제로는 `±0.5`를 초과할 수 없습니다.
- `A` {{optional_inline}}
  - : 색상의 알파 채널 값을 나타내는 {{CSSXref("&lt;alpha-value&gt;")}}로, 숫자 `0`은 `0%` (완전히 투명), 숫자 `1`은 `100%` (완전히 불투명)을 나타냅니다. 또한, `none` 키워드를 사용하여 알파 채널이 없음을 명시적으로 지정할 수 있습니다. `A` 채널 값이 명시되지 않으면 기본값은 100% 입니다. 값이 포함될 경우에는 슬래시 (`/`)가 앞에 붙습니다.

#### 상대 색상 출력 채널 구성 요소 정의

`oklab()` 함수 내에서 상대 색상 구문을 사용할 경우, 브라우저는 기준 색상이 이미 Oklab 색상으로 지정되어 있지 않다면 이를 동등한 Oklab 색상으로 변환합니다. 이 색상은 세 가지 개별 색상 채널 값. `l` (명도), `a` (녹색/빨간색 축), `b` (파란색/노란색 축), 알파 채널 값(`alpha`)으로 정의됩니다. 이 채널 값들은 출력 색상 채널 값을 정의할 때 함수 내에서 사용할 수 있도록 제공됩니다.

- `l` 채널 값은 `0`부터 `1` 사이(포함)의 `<number>`로 이행됩니다.
- `a`와 `b` 채널 값은 각각 `-0.4`부터 `0.4` 사이(포함)의 `<number>`로 이행됩니다.
- `alpha` 채널 값은 `0`부터 `1` 사이(포함)의 `<number>`로 이행됩니다.

상대 색상을 정의할 때, 출력 색상의 각 채널은 여러 가지 방식으로 표현할 수 있습니다. 아래에서는 이를 설명하기 위해 몇 가지 예제를 살펴보겠습니다.

첫 번째와 두 번째 예제에서는 상대 색상 구문을 사용하지만, 첫 번째 예제는 기준 색상과 동일한 색상을 출력하며, 두 번째 예제는 기준 색상과 전혀 관계없는 색상을 출력합니다. 즉, 실제로는 상대 색상을 생성하지 않습니다! 실제 코드에서는 이러한 방식보다는 절대 색상 값을 직접 사용하는 것이 일반적입니다. 하지만 상대적인 `oklab()` 구문을 학습하는 출발점으로 이러한 예제를 포함하였습니다.

기준 색상을 `hsl(0 100% 50%)` (즉, `red`)로 설정해 보겠습니다. 다음 함수는 기준 색상과 동일한 색상을 출력합니다. 이는 기준 색상의 `l`, `a`, `b` 채널 값(`0.627966`, `0.22488`, and `0.125859`)을 그대로 출력 채널 값으로 사용하기 때문입니다.

```css
oklab(from hsl(0 100% 50%) l a b)
```

이 함수의 출력 색상은 `oklab(0.627966 0.22488 0.125859)` 입니다.

다음 함수는 출력 색상의 채널 값을 절대값으로 지정하여, 기준 색상과 무관한 완전히 다른 색상을 출력합니다.

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

위 예제에서는 출력 색상이 `oklab(0.421 0.165 -0.101)`로 설정됩니다.

다음 함수는 기준 색상을 기반으로 상대적인 색상을 생성합니다.

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

예시

- `hsl()` 기준 색상을 동등한 `oklab()` 색상으로 변환합니다 — `oklab(0.627966 0.22488 0.125859)`.
- 출력 색상의 `L` 및 `b` 채널 값을 기준 색상의 `L` 및 `b` 채널 값과 동일하게 설정합니다. 해당 값은 각각 `0.627966`과 `0.125859`입니다.
- 출력 색상의 `a` 채널 값은 기준 색상과 무관한 새로운 값 `-0.3`으로 설정합니다.

최종 출력 색상은 `oklab(0.627966 -0.3 0.125859)`입니다.

> [!NOTE]
> 앞서 언급했듯이, 출력 색상이 기준 색상과 다른 색상 모델을 사용할 경우, 기준 색상은 백그라운드에서 출력 색상과 동일한 모델로 변환됩니다. 이는 동일한 채널을 사용하여 호환 가능하도록 표현하기 위함입니다.

지금까지 본 예제에서는 기준 색상과 출력 색상 모두 알파 채널을 명시적으로 지정하지 않았습니다. 출력 색상의 알파 채널이 지정되지 않으면, 기준 색상의 알파 채널 값과 동일한 값이 기본값으로 설정됩니다. 또한, 기준 색상의 알파 채널이 명시되지 않았고, 그것이 상대 색상이 아니라면, 기본값은 `1`이 됩니다. 따라서, 위의 예제에서 기준 색상과 출력 색상의 알파 채널 값은 모두 `1`입니다.

기준 색상과 출력 색상의 알파 채널 값을 명시적으로 지정하는 몇 가지 예제를 살펴보겠습니다. 첫 번째 예제에서는 출력 색상의 알파 채널 값을 기준 색상의 알파 채널 값과 동일하게 설정합니다. 반면, 두 번째 예제에서는 기준 색상의 알파 채널 값과 관계없이 다른 출력 알파 채널 값을 지정합니다.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Computed output color: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

다음 예제에서는, `hsl()` 기준 색상이 다시 `oklab()`에 해당하는 값인 `oklab(0.627966 0.22488 0.125859)`으로 변환됩니다. {{cssxref("calc")}}을 사용하여 `L`, `a`, `b`, `A` 값에 연산을 적용한 결과, 최종 출력 색상은 `oklab(0.827966 0.14488 -0.0741406 / 0.9)`이 됩니다.

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> 기준 색상의 채널 값들은 `<number>` 값으로 변환되므로, 계산할 때 반드시 숫자를 더해야 합니다. 이는 특정 채널이 일반적으로 `<percentage>`, `<angle>` 또는 기타 값 유형을 허용하는 경우에도 마찬가지입니다. 예를 들어, `<number>` 값에 `<percentage>` 값을 더하는 것은 동작하지 않습니다.

### 형식 구문

{{csssyntax}}

## 예제

### 명도 조정

다음 예제에서는 `oklab()` 함수의 명도, a 축, 그리고 b 축 값을 조정할 때의 변화를 보여줍니다.

#### HTML

```html
<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>

<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
[data-color="red-dark"] {
  background-color: oklab(0.05 0.4 0.4);
}
[data-color="red"] {
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="red-light"] {
  background-color: oklab(0.95 0.4 0.4);
}

[data-color="green-dark"] {
  background-color: oklab(5% -100% 0.4);
}
[data-color="green"] {
  background-color: oklab(50% -100% 0.4);
}
[data-color="green-light"] {
  background-color: oklab(95% -100% 0.4);
}

[data-color="blue-dark"] {
  background-color: oklab(0.05 -0.3 -0.4);
}
[data-color="blue"] {
  background-color: oklab(0.5 -0.3 -0.4);
}
[data-color="blue-light"] {
  background-color: oklab(0.95 -0.3 -0.4);
}
```

#### 결과

{{EmbedLiveSample("Adjusting", "", "200")}}

### 투명도 조정

다음 예제는 `oklab()` 함수의 `A` (알파) 값을 조정할 때의 변화를 보여줍니다.
`red` 및 `red-alpha` 요소는 `#background-div` 요소 위에 겹쳐 있어, 투명도가 어떻게 적용되는지를 확인할 수 있습니다.
`red-alpha` 요소의 투명도를 `0.4`로 설정하면, `red` 요소보다 더 투명하게 보이게 됩니다.

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
#background-div {
  background-color: lightblue;
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklab(0.628 0.225 0.126);
}
[data-color="red-alpha"] {
  background-color: oklab(0.628 0.225 0.126 / 0.4);
}
```

#### 결과

{{EmbedLiveSample("Adjusting_opacity", "100%", 155)}}

### 색상 축 조정

이 예제는 `oklab()` 함수에서 `a` 및 `b` 값을 a 축과 b 축의 양 끝과 중간 지점에 설정했을 때의 효과를 보여줍니다. a 축은 녹색(`-0.4`)에서 빨간색(`0.4`)으로 이동하고, b 축은 노란색(`-0.4`)에서 파란색(`0.4`)으로 이동합니다.

#### HTML

```html
<div data-color="red-yellow"></div>
<div data-color="red-zero"></div>
<div data-color="red-blue"></div>

<div data-color="zero-yellow"></div>
<div data-color="zero-zero"></div>
<div data-color="zero-blue"></div>

<div data-color="green-yellow"></div>
<div data-color="green-zero"></div>
<div data-color="green-blue"></div>
```

#### CSS

CSS의 {{cssxref("background-color")}} 속성을 사용하여 `oklab()` 색상 함수의 `a` 및 `b` 값을 a 축과 b 축을 따라 변화시켜 각 경우에서 최대, 중간, 최솟값이 미치는 영향을 보여줍니다.

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
/* a-axis max, variable b-axis */
[data-color="red-yellow"] {
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="red-zero"] {
  background-color: oklab(0.5 0.4 0);
}
[data-color="red-blue"] {
  background-color: oklab(0.5 0.4 -0.4);
}

/* a-axis center, variable b-axis */
[data-color="zero-yellow"] {
  background-color: oklab(0.5 0 0.4);
}
[data-color="zero-zero"] {
  background-color: oklab(0.5 0 0);
}
[data-color="zero-blue"] {
  background-color: oklab(0.5 0 -0.4);
}

/* a-axis min, variable b-axis */
[data-color="green-yellow"] {
  background-color: oklab(0.5 -0.4 0.4);
}
[data-color="green-zero"] {
  background-color: oklab(0.5 -0.4 0);
}
[data-color="green-blue"] {
  background-color: oklab(0.5 -0.4 -0.4);
}
```

#### 결과

{{EmbedLiveSample("Adjusting_color_axes", "", "200")}}

왼쪽 열은 b 축의 노란색 끝 (`-0.4`)에 있고, 오른쪽 열은 b 축의 파란색 끝 (`0.4`)에 위치합니다. 맨 위 행은 a 축의 빨간색 끝 (`-0.4`)을, 맨 아래 행은 a 축의 녹색 끝 (`0.4`)을 나타냅니다. 가운데 열과 행은 각각 각 축의 중간 지점이며, 중앙 셀은 회색으로 표시됩니다. 이는 빨강, 초록, 노랑, 파랑이 포함되지 않은 상태로, 두 축의 값이 모두 `0`인 경우입니다.

### a 축 및 b 축을 따라 선형 그라디언트 적용

이 예제에는 `oklab()` 함수의 값이 a 축(빨간색에서 녹색)과 b 축(노란색에서 파란색)을 따라 어떻게 변화하는지를 보여주는 선형 그라디언트를 포함합니다. 각 그라디언트 이미지에서 한 축은 고정된 상태를 유지하고, 다른 축은 낮은 값에서 높은 값으로 점진적으로 변화합니다.

```html hidden
<div data-color="red-to-green-yellow">
  <span>red</span><span>`b`= -0.4 (yellow)</span><span>green</span>
</div>
<div data-color="red-to-green-zero">
  <span>red</span><span>no yellow or blue</span><span>green</span>
</div>
<div data-color="red-to-green-blue">
  <span>red</span><span>`b`= 0.4 (blue)</span><span>green</span>
</div>

<div data-color="yellow-to-blue-red">
  <span>yellow</span><span>`a` = -0.4 (red)</span><span>blue</span>
</div>
<div data-color="yellow-to-blue-zero">
  <span>yellow</span><span>no red or green</span><span>blue</span>
</div>
<div data-color="yellow-to-blue-green">
  <span>yellow</span><span>`a` = 0.4 (green)</span><span>blue</span>
</div>
```

#### CSS

```css hidden
div {
  height: 50px;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  background-color: #ffffffcc;
  padding: 3px;
}
```

```css-nolint
/* a-axis gradients */
[data-color="red-to-green-yellow"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% -0.4 0.4));
}
[data-color="red-to-green-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0), oklab(50% -0.4 0));
}
[data-color="red-to-green-blue"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 -0.4), oklab(50% -0.4 -0.4));
}

/* b-axis gradients */
[data-color="yellow-to-blue-red"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% 0.4 -0.4));
}
[data-color="yellow-to-blue-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0 0.4), oklab(50% 0 -0.4));
}
[data-color="yellow-to-blue-green"] {
  background-image: linear-gradient(to right, oklab(50% -0.4 0.4),oklab(50% -0.4 -0.4));
}
```

#### 결과

{{EmbedLiveSample("Linear gradients along the a-axis and b-axis", '', '420')}}

### oklab()을 사용한 상대 색상

이 예제는 세 개의 {{htmlelement("div")}} 요소에 서로 다른 배경색을 적용합니다. 가운데 요소는 수정되지 않은 `--base-color`가 사용되고, 왼쪽과 오른쪽 요소에는 각각 밝아진 버전과 어두워진 버전의 `--base-color` 변형을 적용합니다.

이 변형 색상들은 상대 색상을 사용하여 정의됩니다. `--base-color` [사용자 정의 속성](/ko/docs/Web/CSS/--*)이 `oklab()` 함수에 전달되며, 출력 색상의 명도 채널을 조정하여 원하는 효과를 만듭니다. 이를 위해 `calc()` 함수를 사용하며, 밝은 색상은 명도 채널에 `0.15`(15%)를 더하고, 어두운 색상은 `0.15`(15%)를 빼서 조정합니다.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: orange;
}

#one {
  background-color: oklab(from var(--base-color) calc(l + 0.15) a b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklab(from var(--base-color) calc(l - 0.15) a b);
}
```

#### 결과

출력 결과는 다음과 같습니다.

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- The [`<color>` data type](/ko/docs/Web/CSS/color_value) for a list of all color notations
- {{cssxref("color_value/lab","lab()")}} and {{cssxref("color_value/oklch","oklch()")}} color functions
- [Using relative colors](/ko/docs/Web/CSS/CSS_colors/Relative_colors)
- [CSS colors](/ko/docs/Web/CSS/CSS_colors) module
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) on bottosson.github.io (2023)
- [OKLAB color wheel](https://observablehq.com/@shan/oklab-color-wheel) on observablehq.com

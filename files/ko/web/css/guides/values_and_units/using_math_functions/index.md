---
title: Using CSS math functions
slug: Web/CSS/Guides/Values_and_units/Using_math_functions
original_slug: Web/CSS/CSS_values_and_units/Using_CSS_math_functions
l10n:
  sourceCommit: 8b70438172c589ea52ffb24714818da73d759537
---

**CSS 수학 함수들** 은 요소의 `height`, `animation-duration`, 또는 `font-size` 와 같은 속성 값을 수학적 표현식으로 작성하는 것을 가능하게 합니다.

수학을 사용하지 않고도 `rem`, `vw`, 그리고 `%`와 같은 내장 [CSS 단위들](/ko/docs/Learn_web_development/Core/Styling_basics/Values_and_units)을 통하여 HTML 요소를 더 유연하게 스타일링하여 특정 사용자 경험을 향상시킬 수 있습니다.

그러나, 단일 값과 단위들을 사용하여 요소들을 스타일링하는 것은 어딘가 제한적이라고 충분히 느껴질 수 있습니다. 다음 경우들을 생각해 보세요.

1. "navbar 의 높이를 제외한 뷰포트만큼의 높이" 를 콘텐츠 영역의 높이로 설정하고 싶을 수 있습니다.
2. 두 개의 요소의 너비를 합산하여 세 번째 요소의 너비에 이를 적용하고 싶을 수 있습니다.
3. 특정한 텍스트의 가변적인 `font-size` 가 일정한 크기를 넘어서지 않도록 방지하고 싶을 수 있습니다.

이러한 모든 경우에, 구현하고자 하는 바를 달성하기 위해서는 수학 연산의 힘을 빌릴 필요가 있습니다. 하나의 해결책으로는 JavaScript로 인하여 정의된 수학적 함수에 의존하여 스크립트에서 연산된 결과를 기반으로 하여 요소의 스타일을 동적으로 설정할 수도 있습니다.

위 예제를 포함한 많은 인스턴스에서, **CSS에 직접적으로 적용할 수 있는 내장 수학 함수들을 사용할 수 있습니다.** 이 해결책은 종종 구현이 더 간단하고 JavaScript 을 사용하는 것보다 브라우저가 더욱 빠르게 수행할 수 있습니다.

종합적으로, 개발자들은 스타일시트에서 [20여 가지의 수학 함수](/ko/docs/Web/CSS/CSS_Functions#math_functions)들을 조합하여 사용할 수 있습니다. 이 안내서에서는 평균 이상으로 자주 사용되는 네 가지 함수와 고급 기능에 대해 설명합니다.

## `calc()`: 기본 수학 연산자

위에서 살펴보았던 세 가지 경우 중 앞선 두 가지는 덧셈과 뺄셈의 연산 결과에 따라 요소에 스타일을 설정하는 것입니다. 이는 {{CSSxRef("calc", "calc()")}} 의 사용 사례 중 하나가 될 수 있습니다.

**`calc()`** 함수는 CSS 속성의 값을 **덧셈, 뺄셈, 곱셈, 나눗셈** 을 사용하여 지정할 수 있게 해줍니다. 이 함수는 종종 `%` 와 `px` 처럼 다른 단위를 가진 CSS 값들을 결합하는 데에 사용됩니다.

`calc()` 수학 함수는 수학 표현식을 파라미터로 취하고, 이 수학 표현식의 결괏값을 반환합니다. 예시:

```css
property: calc(expression);
```

### `calc()` 예제

아래 플레이 아이콘을 클릭하여 `calc()` 예제가 코드에서 어떻게 동작하는지 직접 확인해 보세요.

```html hidden
<div class="calc1">
  <code>width: calc(10px + 100px);</code>
</div>
<div class="calc2">
  <code>width: calc(2em * 5);</code>
</div>
<div class="calc3">
  <code>width: calc(100% - 32px);</code>
</div>
<div class="calc4">
  <code>width: calc(var(--predefined-width) - calc(16px * 2));</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: red;
  color: white;
  height: 48px;
}

.calc1 > code {
  /* 결과 width: `110px` */
  width: calc(10px + 100px);
}

.calc2 > code {
  /* 결과 width: `10em` */
  width: calc(2em * 5);
}

.calc3 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  width: calc(100% - 32px);
}

.calc4 > code {
  --predefined-width: 100%;
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  width: calc(var(--predefined-width) - calc(16px * 2));
}
```

{{EmbedLiveSample('calc_Example', '100%', 212) }}

## `min()`: 집합에서 최솟값 찾기

CSS 속성의 값이 특정한 숫자를 초과시키고 싶지 않은 경우가 있을 수 있습니다. 예를 들어 말해보자면, 콘텐츠 컨테이너의 너비가 "화면의 전체 너비" 그리고 "500 픽셀" 중 작은 너비로 설정하고 싶을 수 있습니다. 이러한 경우에 CSS 수학 함수인 {{CSSxRef("min", "min()")}} 를 사용할 수 있습니다.

`min()` 수학 함수는 쉼표로 구분된 값을 인수로 받아 해당 집합 중 가장 작은 값을 반환합니다. 다음 예제를 살펴보겠습니다.

```css
property: min(<first value>, <second value>, <third value>, ...);
```

이 함수는 종종 `%` 와 `px` 처럼 서로 다른 단위의 값을 가진 두 개의 값을 비교할 때 사용됩니다.

### `min()` 예제

아래 플레이 아이콘을 클릭하여 `min()` 예제가 코드에서 어떻게 동작하는지 직접 확인해 보세요.

```html hidden
<div class="min1">
  <code>width: min(9999px, 50%);</code>
</div>
<div class="min2">
  <code>width: min(9999px, 100%);</code>
</div>
<div class="min3">
  <code>width: min(120px, 150px, 90%);</code>
</div>
<div class="min4">
  <code>width: min(80px, 90%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: darkblue;
  color: white;
  height: 48px;
}

.min1 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `50%` 일 가능성이 높습니다. */
  width: min(9999px, 50%);
}

.min2 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `100%` 일 가능성이 높습니다. */
  width: min(9999px, 100%);
}

.min3 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `120px` 일 가능성이 높습니다. */
  width: min(120px, 150px, 90%);
}

.min4 > code {
  /* Output width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `80px` 일 가능성이 높습니다. */
  width: min(80px, 90%);
}
```

{{EmbedLiveSample('min_Example', '100%', 212) }}

## `max()`: 집합에서 최댓값 찾기

`min()` 과 비슷하게, CSS 속성의 값이 특정한 숫자 미만으로 설정하고 싶지 않은 경우가 있을 수 있습니다. 예를 들어, 콘텐츠 컨테이너의 너비를 "화면의 전체 너비" 그리고 "500 픽셀" 중 더 높은 숫자로 설정하고 싶을 수 있습니다. 이러한 경우에 CSS 수학 함수인 {{CSSxRef("max", "max()")}} 를 사용할 수 있습니다.

`max()` 수학 함수는 쉼표로 구분된 값을 인수로 받아 해당 집합 중 가장 큰 값을 반환합니다. 다음 예제를 살펴보겠습니다.

```css
property: max(<first value>, <second value>, <third value>, ...);
```

이 함수는 종종 `%` 와 `px` 처럼 서로 다른 단위의 값을 가진 두 개의 값을 비교할 때 사용됩니다

`min()` 과 `max()` 에 대한 예제의 유사성과 차이점이 존재한다는 것을 참고해야 합니다.

### `max()` 예제

아래 플레이 아이콘을 클릭하여 `max()` 예제가 코드에서 어떻게 동작하는지 직접 확인해 보세요.

```html hidden
<div class="max1">
  <code>width: max(50px, 50%);</code>
</div>
<div class="max2">
  <code>width: max(50px, 100%);</code>
</div>
<div class="max3">
  <code>width: max(20px, 50px, 90%);</code>
</div>
<div class="max4">
  <code>width: max(80px, 80%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkmagenta;
  color: white;
  height: 48px;
}

.max1 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `50%` 일 가능성이 높습니다. */
  width: max(50px, 50%);
}

.max2 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `100%` 일 가능성이 높습니다. */
  width: max(50px, 100%);
}

.max3 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `90%` 일 가능성이 높습니다. */
  width: max(20px, 50px, 90%);
}

.max4 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `80%` 일 가능성이 높습니다. */
  width: max(80px, 80%);
}
```

{{EmbedLiveSample('max_Example', '100%', 212) }}

## `clamp()`: 두 값 사이의 값으로 제한하기

{{CSSxRef("clamp", "clamp()")}} 를 사용하면 `min()` 과 `max()` 함수를 조합할 수 있습니다. `clamp()` 수학 함수는 최솟값, 체한할 값, 최댓값을 인자로 받습니다. 다음 예제를 살펴보겠습니다.

```css
property: clamp(<minimum value>, <value to be clamped>, <maximum value>);
```

- 제한되어야 하는 값이 전달된 최솟값보다 작으면, 함수는 최솟값을 반환합니다.
- 제한되어야 하는 값이 전달된 최댓값보다 크다면, 함수는 최댓값을 반환합니다.
- 제한되어야 하는 값이 최솟값과 최댓값 사이의 값이라면, 함수는 원래의 값을 반환합니다.

이 함수는 종종 `%` 와 `px` 처럼 서로 다른 단위의 값을 가진 두 개의 값을 비교할 때 사용됩니다

### `clamp()` 예제

아래 플레이 아이콘을 클릭하여 `clamp()` 예제가 코드에서 어떻게 동작하는지 직접 확인해 보세요.

```html hidden
<div class="clamp1">
  <code>width: clamp(10%, 1px, 90%);</code>
</div>
<div class="clamp2">
  <code>width: clamp(10%, 9999px, 90%);</code>
</div>
<div class="clamp3">
  <code>width: clamp(125px, 1px, 250px);</code>
</div>
<div class="clamp4">
  <code>width: clamp(25px, 9999px, 150px);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkgreen;
  color: white;
  height: 48px;
}

.clamp1 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `20%` 일 가능성이 높습니다. */
  width: clamp(20%, 1px, 80%);
}

.clamp2 > code {
  /* 결과 width: 컨테이너 너비에 따라 다릅니다. */
  /* 이 페이지에서는 컨테이너 너비의 `90%` 일 가능성이 높습니다. */
  width: clamp(10%, 9999px, 90%);
}

.clamp3 > code {
  /* Output width: `125px` */
  width: clamp(125px, 1px, 250px);
}

.clamp4 > code {
  /* Output width: `150px` */
  width: clamp(25px, 9999px, 150px);
}
```

{{EmbedLiveSample('clamp_Example', '100%', 212) }}

## 고급 CSS 수학 함수

DOM 요소를 배치하거나 스타일링할 때, 네 가지 기본 수학 함수인 {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, 그리고 {{CSSxRef("clamp", "clamp()")}} 는 종종 충분한 역할을 합니다. 그러나, 수학 학습 자료, 3D 시각화, 혹은 CSS 애니메이션을 구현하는 등의 고급 용도에는 다음 함수들을 사용하는 것을 고려해볼 수 있습니다.

- [스텝값 함수](/ko/docs/Web/CSS/CSS_Functions#stepped_value_functions)
  - {{CSSxRef("round", "round()")}}: **주어진 값의 반올림 전략** 을 계산합니다.
  - {{CSSxRef("mod", "mod()")}}: **약수와 같은 부호** 를 가진 약수 연산의 **나머지** 를 계산합니다.
  - {{CSSxRef("rem", "rem()")}}: **나눗셈과 같은 부호** 를 가진 나눗셈 연산의 **나머지** 를 계산합니다.
- [삼각 함수](/ko/docs/Web/CSS/CSS_Functions#trigonometric_functions)
  - {{CSSxRef("sin", "sin()")}}: 숫자의 **삼각 함수 사인** 을 계산합니다.
  - {{CSSxRef("cos", "cos()")}}: 숫자의 **삼각 함수 코사인** 을 계산합니다.
  - {{CSSxRef("tan", "tan()")}}: 숫자의 **삼각 함수 탄젠트** 를 계산합니다.
  - {{CSSxRef("asin", "asin()")}}: 숫자의 **삼각 함수 역사인** 을 계산합니다.
  - {{CSSxRef("acos", "acos()")}}: 숫자의 **삼각 함수 역코사인** 을 계산합니다.
  - {{CSSxRef("atan", "atan()")}}: 숫자의 **삼각 함수 역탄젠트** 를 계산합니다.
  - {{CSSxRef("atan2", "atan2()")}}: 주어진 두 숫자의 **삼각 함수 역탄젠트** 를 계산합니다.
- [지수 함수](/ko/docs/Web/CSS/CSS_Functions#exponential_functions)
  - {{CSSxRef("pow", "pow()")}}: 숫자를 다른 숫자의 **지수로 거듭제곱하여** 계산합니다.
  - {{CSSxRef("sqrt", "sqrt()")}}: 숫자의 **제곱근** 을 계산합니다.
  - {{CSSxRef("hypot", "hypot()")}}: 주어진 숫자의 **제곱의 합의 제곱근** 을 계산합니다.
  - {{CSSxRef("log", "log()")}}: (`e` 를 기본 밑으로 사용한) 숫자의 **로그** 를 계산합니다.
  - {{CSSxRef("exp", "exp()")}}: 다른 숫자의 **`e` 의 지수로 거듭제곱하여** 계산합니다.
- [부호 함수](/ko/docs/Web/CSS/CSS_Functions#sign-related_functions)
  - {{CSSxRef("abs", "abs()")}}: 숫자의 **절댓값** 을 계산합니다.
  - {{CSSxRef("sign", "sign()")}}: 숫자의 **부호 (양수, 음수, 혹은 0)** 를 계산합니다.

## 결론

- CSS 수학 함수를 사용하면 JavaScript 코드를 사용하지 않고도 반응형 사용자 인터페이스를 구축할 수 있습니다.
- CSS 수학 함수는 때로는 레이아웃 중단점을 정의하기 위해 [CSS 미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries) 대신으로 사용될 수 있습니다.
- 2023년도에는, Interop 프로젝트의 구성원은 [개선에 초점을 맞춘 "CSS 수학 함수" 를 채택했습니다](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). 이는 브라우저의 벤더들이 CSS 수학 함수가 브라우저와 장치 사이에서 동일한 작동을 하도록 보장하는 데에 협력한다는 의미입니다.

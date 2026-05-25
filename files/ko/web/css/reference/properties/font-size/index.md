---
title: font-size
slug: Web/CSS/Reference/Properties/font-size
original_slug: Web/CSS/font-size
---

**`font-size`** [CSS](/ko/docs/Web/CSS) 속성은 폰트의 크기(대문자 "M"의 크기)를 지정합니다. 폰트 크기를 바꾸면 `em` 과 `ex` 등과 같은 {{cssxref("&lt;length&gt;")}} 단위로 계산된 항목들의 크기를 바꿉니다.

{{InteractiveExample("CSS Demo: font-size")}}

```css interactive-example-choice
font-size: 1.2rem;
```

```css interactive-example-choice
font-size: x-small;
```

```css interactive-example-choice
font-size: smaller;
```

```css interactive-example-choice
font-size: 12px;
```

```css interactive-example-choice
font-size: 80%;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

## 구문

```css
/* <absolute-size> 값 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> 값 */
font-size: smaller;
font-size: larger;

/* <length> 값 */
font-size: 12px;
font-size: 0.8em;

/* <percentage> 값 */
font-size: 80%;

/* math value */
font-size: math;

/* 전역 값 */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

### 값

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`
  - : [Absolute-size](/ko/docs/Web/CSS/Reference/Values/absolute-size) 키워드는 사용자의 기본 폰트(`medium`) 크기에 따라 정해집니다. `<font size="1"` 부터
    `<font size="7">` 와 같은 HTML 과 유사하게 표현됩니다. 기본 유저 폰트 크기는 `<font size="3">입니다`.
- `larger`, `smaller`
  - : [Relative-size](/ko/docs/Web/CSS/Reference/Values/relative-size) 키워드에 따라 부모 엘리먼트의 폰트 크기에서 일정 비율로 늘이거나 줄입니다.

- {{cssxref("&lt;length&gt;")}}
  - : {{cssxref("&lt;length&gt;")}}는 항상 양수입니다. 만약 단위가 `em` 이나 `ex` 로 표현되어 있으면, 부모 엘리먼트의 크기에 상대적으로
    정해집니다. 예를 들어, 0.5em 은 부모 엘리먼트 폰트 크기의 절반이 현재 엘리먼트의 폰트 크기입니다. 만약 단위가 `rem` 으로 지정되어 있다면, 폰트 크기는
    `html` (루트) 엘리먼트의 폰트 크기에 따라 상대적으로 정해집니다.
- `{{cssxref("&lt;percentage&gt;")}}
  - : 양수인 {{cssxref("&lt;percentage&gt;")}} 는, 부모 엘리먼트의 폰트 크기의 비율입니다.
    > [!NOTE]
    > 접근성을 최대화하기 위해서, 사용자의 기본 폰트 사이즈와 관련된 값을 사용하는 것이 권장됩니다.

- `math`
  - : 부모 엘리먼트의 `font-size`와 관련된 `font-size` 속성의 math 엘리먼트의 계산된 값을 정할 때 [단위 규칙](https://w3c.github.io/mathml-core/#the-math-script-level-property)이 적용됩니다.
    [math-depth](/ko/docs/Web/CSS/Reference/Properties/math-depth) 속성에서 더 많은 정보를 볼 수 있습니다.

## 접근법

폰트 크기는 키워드나 pixel과 em의 수치 값처럼 여러가지 방법으로 지정할 수 있습니다. 각 웹 페이지에 맞는 적합한 방법을 선택해야 합니다.

### 키워드

키워드는 웹의 폰트 크기를 정하는 좋은 방법입니다. 키워드로 엘리먼트의 폰트 크기를 정하면 웹 페이지의 모든 페이지의 폰트 크기가 상대적으로 지정되어 쉽게 전체 페이지의 폰트 크기를 늘이거나 줄일 수 있습니다.

### 픽셀

픽셀 단위의 정확함이 필요하면, 폰트 크기를 픽셀 단위로 (`px`) 설정하는 것이 좋은 선택입니다. px 값은 정적이고 운영체제 독립적이며 브라우저 독립적인 방법으로 브라우저에 글자들이 정확히 몇 픽셀 높이로 렌더링 되어야 하는지를 정할 수 있습니다. 브라우저가 비슷한 효과를 내기 위해 각기 다른 방법을 사용하기 때문에 렌더링된 결과가 브라우저마다 아주 조금씩 달라질 수 있습니다.

폰트 크기 설정을 조합해서 쓸 수 있습니다. 예를 들어, 부모 엘리먼트의 크기를 `16px` 로 정하고 자식 엘리먼트의 크기를 `larger`로 설정하면, 자식엘리먼트의 폰트 크기는 페이지에 있는 부모 엘리먼트보다 크게 보입니다.

> [!NOTE]
> 폰트 크기를 픽셀로 정하는 것은 사용자가 폰트 크기를 브라우저를 이용해 바꿀 수 없기 때문에 _[접근성이 떨어집니다](https://en.wikipedia.org/wiki/Web_accessibility)_. (예를 들어 시각에 제약이 있는 사용자가 폰트 크기를 웹 디자이너가 설정한 크기보다 더 크게 설정하려고 할 수 있습니다.) 그러므로, 접근성 높은 페이지를 만들고자 한다면, 폰트 크기를 픽셀 단위로 설정하는 것을 지양해야 합니다.

### `em`

`em` 값은 동적인 또는 계산된 폰트 크기를 생성합니다.(역사적으로 `em` 단위는 글꼴에서 대문자 "M"의 너비에서 유래되었습니다.) 수치 값은 사용된 `font-size`의 배수가 됨을 나타냅니다. 아래 예시를 참고하십시오.

```css
p {
  font-size: 2em;
}
```

이 경우, `<p>` 엘리먼트의 폰트 크기는 엘리먼트가 상속받은 `font-size`의 두 배입니다. 더 나아가, `1em`의 `font-size`는 엘리먼트가 사용된 곳의 `font-size` 계산 값과 같습니다.

폰트 크기를 설정하는 또 하나의 방법은 `em` 값으로 설정하는 것입니다. `em` 값은 동적입니다. `font-size` 속성을 정의할 때, em 은 부모 엘리먼트의 폰트 크기와 같습니다. 만약, 전체 페이지에서 폰트 크기를 정의하지 않으면 높은 가능성으로 브라우저 기본인 16px로 지정됩니다. 따라서 기본 값일때 1em = 16px 이고 2em = 32px 를 나타냅니다. 만약 body 엘리먼트의 `font-size` 를 20px로 정한 경우, 1em = 20px 이고 2em = 40px 입니다. 2 라는 값은 현재 크기의 배수를 나타냄을 주의해야 합니다.

em 표현을 pixel 값으로 표현해야 한다면 이 공식을 사용할 수 있습니다.

```
em = 구하고자 하는 엘리먼트의 pixel 값 / 부모 엘리먼트의 font-size pixel 값
```

예를 들어 페이지의 `<body>` 엘리먼트의 폰트 크기가 1em이고, 브라우저 기본 값이 1em = `16px`로 정의되어 있다고 가정해보겠습니다. 만약 `12px` 폰트 크기로 지정하고 싶다면 `0.75em`(12/16 = 0.75) 로 정해야 합니다. 비슷하게, `10px`로 정하고 싶다면 `0.625em`(10/16 = 0.625) 로 정합니다. `22px` 은 `1.375em`(22/16 = 1.375) 으로 표현합니다.

`em` 은 자동적으로 폰트의 크기를 적용해주기 때문에 CSS 에서 유용한 단위입니다.

중요하게 기억할 점은, em 값은 합성 값입니다. 위의 CSS 에 아래 HTML 을 적용해보겠습니다.

```css
body {
  font-size: 100%;
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

그 결과는

{{EmbedLiveSample("Ems", 400, 100)}}

브라우저의 기본 `font-size` 가 16px 이라고 가정해보면, "outer" 는 25.6px 로 그려지고 , "inner" 는 40.96px로 그려집니다. 왜냐하면 {{HTMLElement("span")}}의 `font-size` 가 1.6 em 으로 부모의 `font-size`에 상대적인데, 그 부모의 `font-size`도 상대적으로 계산되기 때문입니다. 이러한 동작을 **합성**이라고 부릅니다.

### `rem`

`rem` 값은 합성 문제를 회피하기 위해 고안되었습니다. `rem` 값은 부모 엘리먼트가 아니라 최상위 `html` 엘리먼트에 상대적입니다. 다르게 표현하면, rem 은 부모 크기에 의해 폰크 크기가 정해지지 않도록 하여 합성 문제를 제거합니다.

아래 CSS 는 이전 예제와 거의 동일합니다. 딱 하나 다른 점은 단위가 `rem` 으로 바뀌었습니다.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

이 CSS 를 같은 HTML 에 적용하면 이렇게 보입니다

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

이 예제에서 "outer inner outer" 는 모두 25.6px 로 보입니다 (브라우저의 기본 폰트 설정이 16px 인 경우).

### `ex`

`em` 단위처럼, `ex` 단위를 사용한 엘리먼트의 폰트 크기도 동적이거나 계산된 값입니다. 같은 방식으로 작동하지만 `ex`를 사용하면 페이지에서 [첫번째로 사용 가능한 폰트](https://drafts.csswg.org/css-fonts/#first-available-font)의 x 높이가 `font-size`가 됩니다. 수치 값은 엘리먼트의 상속된 폰트 크기와 합성 값에 곱해집니다.

`ex`처럼 더 자세한 [폰트 관련 길이 단위](https://drafts.csswg.org/css-values-4/#font-relative-length)에 대한 설명은 W3C 에디터의 글을 확인하세요.

## 형식 정의

{{cssinfo}}

### 형식 구문

{{csssyntax}}

## 예제

### 폰트 크기 설정하기

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### 결과

{{EmbedLiveSample('폰트 크기 설정하기','600','250')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{cssxref("font-size-adjust")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
- SVG {{SVGAttr("font-size")}} 속성
- [Web 개발 학습하기: 기본적인 텍스트 및 글꼴 스타일링](/ko/docs/Learn_web_development/Core/Text_styling/Fundamentals)

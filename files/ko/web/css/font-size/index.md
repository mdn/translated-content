---
title: font-size
slug: Web/CSS/font-size
---

{{CSSRef}}

**`font-size`** [CSS](/ko/docs/CSS) 속성은 폰트의 크기(대문자 "M"의 크기)를 지정합니다. 폰트 크기를 바꾸면 `em` 과 `ex` {{cssxref("&lt;length&gt;")}} 단위로 계산된 다른 항목들의 크기를 바꿉니다.

{{EmbedInteractiveExample("pages/css/font-size.html")}}

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

/* <relative-size> 값 */
font-size: larger;
font-size: smaller;

/* <length> 값 */
font-size: 12px;
font-size: 0.8em;

/* <percentage> 값 */
font-size: 80%;

/* 전역 값 */
font-size: inherit;
font-size: initial;
font-size: unset;
```

The `font-size` property is specified in one of the following ways:

- As one of the [absolute-size](#absolute-size) or [relative-size](#relative-size) keywords
- As a `<length>` or a `<percentage>`, relative to the parent element's font size

### 값

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`
  - : 키워드는 사용자의 기본 폰트(`medium`) 크기에 따라 정해집니다. `<font size="1"` 부터
    `<font size="7">` 와 같은 HTML 과 유사하게 표현됩니다. 기본 유저 폰트 크기는 `<font size="3">입니다`.
- `larger`, `smaller`
  - : 키워드에 따라 부모 엘리먼트의 폰트 크기에서 일정 비율로 늘이거나 줄입니다.
- {{cssxref("&lt;length&gt;")}}
  - : {{cssxref("&lt;length&gt;")}}는 항상 양수입니다. 만약 단위가 `em` 이나 `ex` 로 표현되어 있으면, 부모 엘리먼트의 크기에 상대적으로
    정해집니다. 예를 들어, 0.5em 은 부모 엘리먼트 폰트 크기의 절반이 현재 엘리먼트의 폰트 크기입니다. 만약 단위가 `rem` 으로 지정되어 있다면, 폰트 크기는
    `html` (루트) 엘리먼트의 폰트 크기에 따라 상대적으로 정해집니다.
- `{{cssxref("&lt;percentage&gt;")}}
  - : 양수인 {{cssxref("&lt;percentage&gt;")}} 는, 부모 엘리먼트의 폰트 크기의 비율입니다.

### 형식 구문

{{csssyntax}}

## 접근법

폰트 크기는 키워드나 pixel과 em처럼 수치 단위처럼 여러가지 방법으로 지정할 수 있습니다. 각 웹 페이지에 맞는 적합한 방법을 선택해야 합니다.

### 키워드

키워드는 웹의 폰트 크기를 정하는 좋은 방법입니다. 키워드로 엘리먼트의 폰트 크기를 정하면 웹 페이지의 모든 페이지의 폰트 크기가 상대적으로 지정되어 쉽게 전체 페이지의 폰트 크기를 늘이거나 줄일 수 있습니다.

### 픽셀

픽셀 단위의 정확함이 필요하면, 폰트 크기를 픽셀 단위로 (`px`) 설정하는 것이 좋은 선택입니다. px 값은 정적이고 운영체제 독립적이며 브라우저 독립적인 방법으로 브라우저에 글자들이 정확히 몇 픽셀 높이로 렌더링 되어야 하는지를 정할 수 있습니다다. 브라우저가 비슷한 효과를 내기 위해 각기 다른 방법을 사용하기 때문에 렌더링된 결과가 브라우저마다 아주 조금씩 달라질 수 있습니다.

폰트 크기 설정을 조합해서 쓸 수 있습니다다. 예를 들어, 부모 엘리먼트의 크기를 `16px` 로 정하고 자식 엘리먼트의 크기를 `larger`로 설정하면, 자식엘리먼트의 폰트 크기는 페이지에 있는 부모 엘리먼트보다 크게 보입니다.

> **참고:** 폰트 크기를 픽셀로 정하는 것은 사용자가 폰트 크기를 브라우저를 이용해 바꿀 수 없기 때문에 _[접근성이 떨어집니다](https://en.wikipedia.org/wiki/Web_accessibility)_. (예를 들어 시각에 제약이 있는 사용자가 폰트 크기를 웹 디자이너가 설정한 크기보다 더 크게 설정하려고 할 수 있습니다.) 그러므로, 접근성 높은 페이지를 만들고자 한다면, 폰트 크기를 픽셀 단위로 설정하는 것을 지양해야 합니다.

### `em` 값

폰트 크기를 설정하는 또 하나의 방법은 `em` 값으로 설정하는 것입니다. `em` 값은 동적입니다. `font-size` 속성을 정의할 때, em 은 부모 엘리먼트의 폰트 크기와 같습니다. 만약, 전체 페이지에서 폰트 크기를 정의하지 않으면 높은 가능성으로 브라우저 기본인 16px로 지정됩니다. 따라서 기본 값일때 1em = 16px 이고 2em = 32px 를 나타냅니다. 만약 body 엘리먼트의 `font-size` 를 20px로 정한 경우, 1em = 20px 이고 2em = 40px 입니다. 2 라는 값은 현재 크기의 배수를 나타냄을 주의해야 합니다.

em 표현을 pixel 값으로 표현해야 한다면 이 공식을 사용할 수 있습니다.

```
em = 구하고자 하는 엘리먼트의 pixel 값 / 부모 엘리먼트의 font-size pixel 값
```

예를 들어 페이지의 폰트 크기가 1em이고, 브라우저 기본 값이 1em = 16px로 정의되어 있다고 가정해보겠습니다. 만약 12px 폰트 크기로 지정하고 싶다면 0.75em(12/16 = 0.75) 로 정해야 합니다. 비슷하게, 10px로 정하고 싶다면 0.625em(10/16 = 0.625) 로 정합니다. 22px 은 1.375em 으로 표현합니다.

문서 전체의 폰트 크기를 정할때 많이 쓰이는 방법은 body 태그의 폰트 크기를 10px 과 같은 62.5% (기본값 16px의 62.5%) 나 0.625em 으로 정하는 것 입니다. 이제 다른 엘리먼트의 폰트 크기를 계산하기 쉬운 px 을 10으로 나눈 em 단위를 이용해서 설정할 수 있습니다. 이 경우 6px = 0.6em 로, 8px = 0.8em, 12px = 1.2em, 14px = 1.4em, 16px = 1.6em 로 표현합니다.

```css
body {
  font-size: 62.5%; /* font-size 1em = 10px 브라우저의 기본 설정 */
}
span {
  font-size: 1.6em; /* 1.6em = 16px */
}
```

em 은 자동적으로 폰트의 크기를 적용해주기 때문에 CSS 에서 유용한 단위입니다.

중요하게 기억할 점은, em 값은 합성 값입니다. 위의 CSS 에 아래 HTML 을 적용해보겠습니다.

```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

그 결과는

{{EmbedLiveSample("Ems", 400, 40)}}

브라우저의 기본 `font-size` 가 16px 이라고 가정해보면, "outer" 는 16px 로 그려지고 , "inner" 는 25.6px로 그려집니다. 왜냐하면 span의 `font-size` 가 1.6 em 으로 부모의 `font-size`에 상대적인데, 그 부모의 `font-size`도 상대적으로 계산되기 때문입니다. 이러한 동작을 **합성**이라고 부릅니다.

### `rem`

`rem` 값은 합성 문제를 회피하기 위해 고안되었습니다. `rem` 값은 부모 엘리먼트가 아니라 최상위 `html` 엘리먼트에 상대적입니다. 다르게 표현하면, rem 은 부모 크기에 의해 폰크 크기가 정해지지 않도록 하여 합성 문제를 제거합니다.

아래 CSS 는 이전 예제와 거의 동일합니다. 딱 하나 다른 점은 단위가 `rem` 으로 바뀌었습니다.

```css
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6rem;
}
```

이 CSS 를 같은 HTML 에 적용하면 이렇게 보입니다

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 40)}}

이 예제에서 "outer inner outer" 는 모두 16px 로 보입니다 (브라우저의 기본 폰트 설정이 16px 인 경우).

## 예제

### 예제 1

```css
/* 문단 텍스트의 크기를 매우 크게 설정 */
p {
  font-size: xx-large;
}

/* h1 (제목 1)을 주변 텍스트보다 2.5배 큼 */
h1 {
  font-size: 250%;
}

/* span 태그 안의 텍스트를 16px 로 설정 */
span {
  font-size: 16px;
}
```

### 예제 2

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

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### 결과

{{EmbedLiveSample('예제_2','600','200')}}

## 참고

{{Cssxref("font-size")}} 속성의 `em` 과 `ex` 단위는 부모 엘리먼트의 폰트 크기에 상대적입니다(자기 엘리먼트의 폰트 크기에 상대적인 다른 속성과는 다르게). 이는 `em` 단위와 퍼센트 단위가 {{Cssxref("font-size")}} 에서 동일하게 동작함을 의미합니다.

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

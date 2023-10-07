---
title: width
slug: Web/CSS/width
---

{{CSSRef}}

CSS **`width`** 속성은 요소의 너비를 설정합니다. 기본값은 콘텐츠 영역의 너비이지만, {{cssxref("box-sizing")}}이 `border-box`라면 테두리 영역의 너비를 설정합니다.

{{EmbedInteractiveExample("pages/css/width.html")}}

{{cssxref("min-width")}}와 {{cssxref("max-width")}} 속성은 `width`를 덮어씁니다.

## 구문

```css
/* <length> */
width: 300px;
width: 25em;

/* <percentage> */
width: 75%;

/* 키워드 */
width: 25em border-box;
width: 75% content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content(20em);
width: auto;

/* 전역 값 */
width: inherit;
width: initial;
width: unset;
```

`width` 속성은 다음과 같이 지정합니다.

- [`min-content`](#min-content), [`max-content`](#max-content), [`fit-content`](#fit-content), [`auto`](#auto) 키워드 중 하나.
- 하나의 [`<length>`](#length) 또는 [`<percentage>`](#percentage) 값.

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 너비의 절댓값.
- {{cssxref("&lt;percentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 너비의 백분율. 컨테이닝 블록이 요소 너비에 영향을 받는 경우의 결과 레이아웃은 정해지지 않습니다.
- `auto`
  - : 요소의 너비를 브라우저가 계산해 지정합니다.
- `max-content`
  - : 본질적인 선호 너비.
- `min-content`
  - : 본질적인 최소 너비.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}}`
  - : `min(max-content, max(min-content, <length-percentage>))`의 결과.

### 형식 구문

{{csssyntax}}

## 예제

### 기본 너비

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">
  모질라 커뮤니티는 많은 수의 대단한 소프트웨어를 제작합니다.
</p>
```

{{EmbedLiveSample('기본_너비', '500px', '64px')}}

### `px`과 `em`

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">픽셀 너비</div>
<div class="em_length">em 너비</div>
```

{{EmbedLiveSample('px과_em', '500px', '64px')}}

### 백분율

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">백분율 너비</div>
```

{{EmbedLiveSample('백분율', '500px', '64px')}}

### `max-content`

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}
```

```html
<p class="maxgreen">
  Mozilla 커뮤니티는 많은 수의 대단한 소프트웨어를 제작합니다.
</p>
```

{{EmbedLiveSample('max-content_2', '500px', '64px')}}

### `min-content`

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
  width: min-content;
}
```

```html
<p class="minblue">
  Mozilla 커뮤니티는 많은 수의 대단한 소프트웨어를 제작합니다.
</p>
```

{{EmbedLiveSample('min-content_2', '500px', '155px')}}

## 접근성 고려사항

페이지를 확대하거나 글꼴 크기를 늘렸을 때 `width` 속성을 지정한 요소가 잘리거나 다른 내용을 가리지 않도록 확인하세요.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 명세

{{Specifications}}{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{cssxref("height")}}, {{cssxref("box-sizing")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}

---
title: min-width
slug: Web/CSS/Reference/Properties/min-width
original_slug: Web/CSS/min-width
---

**`min-width`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 최소 너비를 설정합니다. `min-width`는 {{cssxref("width")}} 속성의 [사용값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2)이 자신의 값보다 작아지는걸 방지합니다.

{{InteractiveExample("CSS Demo: min-width")}}

```css interactive-example-choice
min-width: 150px;
```

```css interactive-example-choice
min-width: 20em;
```

```css interactive-example-choice
min-width: 75%;
```

```css interactive-example-choice
min-width: 40ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Change the minimum width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

`min-width`가 {{cssxref("max-width")}} 또는 {{cssxref("width")}}보다 커지면 요소의 너비는 `min-width`의 값을 사용합니다.

## 구문

```css
/* <length> 값 */
min-width: 3.5em;

/* <percentage> 값 */
min-width: 10%;

/* 키워드 값 */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fill-available;

/* 전역 값 */
min-width: inherit;
min-width: initial;
min-width: unset;
```

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 고정 길이로 나타낸 최대 너비. 음수 값은 유효하지 않습니다.
- {{cssxref("&lt;percentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/Web/CSS/CSS_display/Containing_block) 너비에 대한 백분율로 나타낸 최대 너비. 음수 값은 유효하지 않습니다.

#### 키워드 값

- `auto`
  - : 최소 너비를 정하지 않음.
- `max-content` {{ experimental_inline() }}
  - : 본질적인 선호 높이.
- `min-content` {{ experimental_inline() }}
  - : 본질적인 최소 높이.
- `fill-available`{{ experimental_inline() }}
  - : 컨테이닝 블록의 너비에서 가로축 안쪽 및 바깥 여백과 테두리의 공간을 제외한 높이. (일부 브라우저는 매우 오래 된 이름인 `available`로 구현함을 참고하세요.)
- `fit-content` {{ experimental_inline() }}
  - : `min(max-content, max(min-content, fill-available))`과 같음.

### 형식 구문

{{csssyntax}}

## 예제

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [박스 모델 입문](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{ Cssxref("width") }}, {{ Cssxref("max-width") }}

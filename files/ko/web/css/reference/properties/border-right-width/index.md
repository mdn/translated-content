---
title: border-right-width
slug: Web/CSS/Reference/Properties/border-right-width
original_slug: Web/CSS/border-right-width
---

[CSS](/ko/docs/Web/CSS) **`border-right-width`** 속성은 요소의 오른쪽 테두리 너비를 지정합니다.

{{InteractiveExample("CSS Demo: border-right-width")}}

```css interactive-example-choice
border-right-width: thick;
```

```css interactive-example-choice
border-right-width: 2em;
```

```css interactive-example-choice
border-right-width: 4px;
```

```css interactive-example-choice
border-right-width: 2ex;
```

```css interactive-example-choice
border-right-width: 0;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 구문

```css
/* 키워드 값*/
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* <length> 값 */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* 전역 값 */
border-right-width: inherit;
border-right-width: initial;
border-right-width: unset;
```

### 값

- `<line-width>`
  - : 테두리의 너비입니다.0 이상의 {{cssxref("&lt;length&gt;")}} 또는 키워드를 사용할 수 있습니다. 키워드는 다음 세 가지 중 하나여야 합니다.

    | `thin`   |     | 얇은 테두리 |
    | -------- | --- | ----------- |
    | `medium` |     | 중간 테두리 |
    | `thick`  |     | 굵은 테두리 |

    > [!NOTE]
    > 각 키워드의 굵기를 정의한 명세는 없기 때문에 결과는 구현별로 상이할 수 있습니다. 다만 굵기는 언제나 `thin ≤ medium ≤ thick`이고, 하나의 문서 내에서 동일합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 테두리의 너비 비교

#### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

#### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-right-width: thick;
}
div:nth-child(2) {
  border-right-width: 2em;
}
```

#### 결과

{{EmbedLiveSample('테두리의_너비_비교', '100%')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테두리 너비 관련 CSS 속성: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, and {{Cssxref("border-width")}}.
- 오른쪽 테두리 관련 CSS 속성: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, and {{Cssxref("border-right-color")}}.

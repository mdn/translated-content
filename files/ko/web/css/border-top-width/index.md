---
title: border-top-width
slug: Web/CSS/border-top-width
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`border-top-width`** 속성은 요소의 위쪽 테두리 너비를 지정합니다.

{{EmbedInteractiveExample("pages/css/border-top-width.html")}}

## 구문

```css
/* 키워드 값*/
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* <length> 값 */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* 전역 값 */
border-top-width: inherit;
border-top-width: initial;
border-top-width: unset;
```

### 값

- `<line-width>`

  - : 테두리의 너비입니다. 0 이상의 {{cssxref("&lt;length&gt;")}} 또는 키워드를 사용할 수 있습니다. 키워드는 다음 세 가지 중 하나여야 합니다.

    | `thin`   |     | 얇은 테두리 |
    | -------- | --- | ----------- |
    | `medium` |     | 중간 테두리 |
    | `thick`  |     | 넓은 테두리 |

    > [!NOTE]
    > 각 키워드의 굵기를 정의한 명세는 없기 때문에 결과는 구현별로 상이할 수 있습니다. 다만 굵기는 언제나 `thin ≤ medium ≤ thick`이고, 하나의 문서 내에서 동일합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-top-width: thick;
}
div:nth-child(2) {
  border-top-width: 2em;
}
```

### 결과

{{EmbedLiveSample('예제', '100%')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테두리 너비 관련 CSS 속성: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, and {{Cssxref("border-width")}}.
- 위쪽 테두리 관련 CSS 속성: {{Cssxref("border")}}, {{Cssxref("border-top")}}, {{Cssxref("border-top-style")}}, and {{Cssxref("border-top-color")}}.

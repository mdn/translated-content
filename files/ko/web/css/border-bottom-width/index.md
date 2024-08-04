---
title: border-bottom-width
slug: Web/CSS/border-bottom-width
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`border-bottom-width`** 속성은 요소의 아래 테두리 너비를 지정합니다.

{{EmbedInteractiveExample("pages/css/border-bottom-width.html")}}

## 구문

```css
/* 키워드 값 */
border-bottom-width: thin;
border-bottom-width: medium;
border-bottom-width: thick;

/* <length> 값 */
border-bottom-width: 10em;
border-bottom-width: 3vmax;
border-bottom-width: 6px;

/* 전역 값 */
border-bottom-width: inherit;
border-bottom-width: initial;
border-bottom-width: unset;
```

### 값

- `<line-width>`

  - : 테두리의 너비입니다. 0 이상의 {{cssxref("&lt;length&gt;")}} 또는 키워드를 사용할 수 있습니다. 키워드는 다음 세 가지 중 하나여야 합니다.

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

### 아래 테두리의 너비 비교

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
  border-bottom-width: thick;
}
div:nth-child(2) {
  border-bottom-width: 2em;
}
```

#### 결과

{{EmbedLiveSample('아래_테두리의_너비_비교', '100%')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테두리 너비 관련 CSS 속성: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}, and {{Cssxref("border-width")}}.
- 아래 테두리 관련 CSS 속성: {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, {{Cssxref("border-bottom-style")}}, and {{Cssxref("border-bottom-color")}}.

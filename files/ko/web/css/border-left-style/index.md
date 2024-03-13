---
title: border-left-style
slug: Web/CSS/border-left-style
---

{{CSSRef}}

**`border-left-style`** [CSS](/ko/docs/Web/CSS) 속성은 요소 테두리의 왼쪽 스타일을 지정합니다.

{{EmbedInteractiveExample("pages/css/border-left-style.html")}}

> **참고:** 명세는 서로 다른 스타일의 테두리가 꼭지점에서 만날 때 어떻게 그려야 할지는 정의하고 있지 않습니다.

## 구문

```css
/* 키워드 값 */
border-left-style: none;
border-left-style: hidden;
border-left-style: dotted;
border-left-style: dashed;
border-left-style: solid;
border-left-style: double;
border-left-style: groove;
border-left-style: ridge;
border-left-style: inset;
border-left-style: outset;

/* 전역 값 */
border-left-style: inherit;
border-left-style: initial;
border-left-style: unset;
```

`border-left-style` 속성은 {{cssxref("border-style")}} 속성에 사용할 수 있는 키워드 중 하나를 사용해 지정할 수 있습니다.

### 형식 구문

{{csssyntax}}

## 예제

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* Define look of the table */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-left-style example classes */
.b1 {
  border-left-style: none;
}
.b2 {
  border-left-style: hidden;
}
.b3 {
  border-left-style: dotted;
}
.b4 {
  border-left-style: dashed;
}
.b5 {
  border-left-style: solid;
}
.b6 {
  border-left-style: double;
}
.b7 {
  border-left-style: groove;
}
.b8 {
  border-left-style: ridge;
}
.b9 {
  border-left-style: inset;
}
.b10 {
  border-left-style: outset;
}
```

#### 결과

{{EmbedLiveSample('예제', 300, 200)}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테두리 스타일 관련 CSS 속성: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-style")}}.
- 왼쪽 테두리 관련 CSS 속성: {{cssxref("border-left")}}, {{cssxref("border-left-color")}}, {{cssxref("border-left-width")}}.

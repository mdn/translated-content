---
title: border-right-style
slug: Web/CSS/border-right-style
---

{{CSSRef}}

**`border-right-style`** [CSS](/ko/docs/Web/CSS) 속성은 요소 테두리의 오른쪽 스타일을 지정합니다.

{{EmbedInteractiveExample("pages/css/border-right-style.html")}}

> **참고:** 명세는 서로 다른 스타일의 테두리가 꼭지점에서 만날 때 어떻게 그려야 할지는 정의하고 있지 않습니다.

## 구문

```css
/* 키워드 값 */
border-right-style: none;
border-right-style: hidden;
border-right-style: dotted;
border-right-style: dashed;
border-right-style: solid;
border-right-style: double;
border-right-style: groove;
border-right-style: ridge;
border-right-style: inset;
border-right-style: outset;

/* 전역 값 */
border-right-style: inherit;
border-right-style: initial;
border-right-style: unset;
```

`border-right-style` 속성은 {{cssxref("border-style")}} 속성에 사용할 수 있는 키워드 중 하나를 사용해 지정할 수 있습니다.

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

/* border-right-style example classes */
.b1 {
  border-right-style: none;
}
.b2 {
  border-right-style: hidden;
}
.b3 {
  border-right-style: dotted;
}
.b4 {
  border-right-style: dashed;
}
.b5 {
  border-right-style: solid;
}
.b6 {
  border-right-style: double;
}
.b7 {
  border-right-style: groove;
}
.b8 {
  border-right-style: ridge;
}
.b9 {
  border-right-style: inset;
}
.b10 {
  border-right-style: outset;
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

- 테두리 스타일 관련 CSS 속성: {{cssxref("border-top-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-left-style")}}, {{cssxref("border-style")}}.
- 오른쪽 테두리 관련 CSS 속성: {{cssxref("border-right")}}, {{cssxref("border-right-color")}}, {{cssxref("border-right-width")}}.

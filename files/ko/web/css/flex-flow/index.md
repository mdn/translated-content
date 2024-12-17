---
title: flex-flow
slug: Web/CSS/flex-flow
---

{{CSSRef}}

**`flex-flow`** [CSS](/ko/docs/Web/CSS) 속성은 {{cssxref("flex-direction")}}, {{cssxref("flex-wrap")}} 속성의 [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)입니다.

{{EmbedInteractiveExample("pages/css/flex-flow.html")}}

## 구문

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'>과 <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* 전역 값 */
flex-flow: inherit;
flex-flow: initial;
flex-flow: unset;
```

### 값

자세한 내용은 {{cssxref("flex-direction")}}과 {{cssxref("flex-wrap")}} 속성을 참고하세요.

### 형식 구문

{{csssyntax}}

## 예제

```css
element {
  /* Main-axis is the block direction with reversed main-start and main-end. Flex items are laid out in multiple lines */
  flex-flow: column-reverse wrap;
}
```

## 명세

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS 플렉스박스 가이드: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS 플렉스박스 가이드: _[Ordering flex items](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_

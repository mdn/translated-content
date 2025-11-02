---
title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
original_slug: Web/CSS/flex-flow
---

**`flex-flow`** [CSS](/ko/docs/Web/CSS) 속성은 {{cssxref("flex-direction")}}, {{cssxref("flex-wrap")}} 속성의 [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)입니다.

{{InteractiveExample("CSS Demo: flex-flow")}}

```css interactive-example-choice
flex-flow: row wrap;
```

```css interactive-example-choice
flex-flow: row-reverse nowrap;
```

```css interactive-example-choice
flex-flow: column wrap-reverse;
```

```css interactive-example-choice
flex-flow: column wrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

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

---
title: flex-grow
slug: Web/CSS/flex-grow
---

{{CSSRef}}

**`flex-grow`** [CSS](/ko/docs/Web/CSS) property 는 `flex-item` 요소가, `flex-container` 요소 내부에서 할당 가능한 공간의 정도를 선언합니다. 만약 **형제 요소**로 렌더링 된 모든 `flex-item` 요소들이 동일한 `flex-grow` 값을 갖는다면, `flex-container` 내부에서 동일한 공간을 할당받습니다. 하지만 `flex-grow` 값으로 다른 소수값을 지정한다면, 그에 따라 다른 공간값을 나누어 할당받게 됩니다.

보통 `flex-grow`를 사용할땐, {{ Cssxref("flex-shrink") }}, {{ Cssxref("flex-basis") }} 속성을 함께 사용합니다. 그리고 일반적으로는 모든 값이 설정되었음을 보장하기 위하여 {{ Cssxref("flex") }} 속성을 이용해 **축약형**으로 사용합니다.

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

## Syntax

```css
/* <number> values */
flex-grow: 3;
flex-grow: 0.6;

/* Global values */
flex-grow: inherit;
flex-grow: initial;
flex-grow: unset;
```

`flex-grow` 속성에 대한 값은 [`<number>`](#number) 단독으로 표현합니다.

### Values

- `<number>`
  - : 관련 링크를 참고하세요. {{cssxref("&lt;number&gt;")}}. 단, 음수값은 허용되지 않습니다.

### Formal syntax

{{csssyntax}}

## Example

### HTML

```html
<h4>This is a Flex-Grow</h4>
<h5>A,B,C and F are flex-grow:1 . D and E are flex-grow:2 .</h5>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
  <div class="box" style="background-color:brown;">F</div>
</div>
```

### CSS

```css
#content {
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0, 0, 0, 0.2);
}
```

### Result

{{EmbedLiveSample('Example', '700px', '300px', '', 'Web/CSS/flex-grow')}}

## 명세서

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
- [\`flex-grow\` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) article by Manuel Matuzovic on CSS-Tricks, which illustrates how flex-grow works

---
title: flex-shrink
slug: Web/CSS/flex-shrink
---

{{CSSRef}}

**`flex-shrink`** [CSS](/ko/docs/CSS) property는 `flex-item` 요소의 `flex-shrink` 값을 설정하는 속성입니다. 만약 `flex-item` 요소의 크기가 `flex-container` 요소의 크기보다 클 때 flex-shrink 속성을 사용하는데, 설정된 숫자값에 따라 `flex-container` 요소 내부에서 `flex-item` 요소의 크기가 **축소**됩니다.

{{EmbedInteractiveExample("pages/css/flex-shrink.html")}}

## Syntax

```css
/* <number> values */
flex-shrink: 2;
flex-shrink: 0.6;

/* Global values */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
```

The `flex-shrink` property is specified as a single [`<number>`](#number).

### Values

- `<number>`
  - : 관련 링크를 참고하세요{{cssxref("&lt;number&gt;")}}. 단, 음수값은 허용되지 않습니다.

### Formal syntax

{{csssyntax}}

## Example

### HTML

```html
<p>The width of content is 500px; the flex-basis of the flex items is 120px.</p>
<p>A, B, C have flex-shrink:1 set. D and E have flex-shrink:2 set</p>
<p>The width of D and E is less than the others.</p>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
```

### CSS

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box {
  flex-shrink: 1;
}

.box1 {
  flex-shrink: 2;
}
```

### Result

{{ EmbedLiveSample('Example', 500, 300) }}

## 명세서

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_

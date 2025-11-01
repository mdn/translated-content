---
title: margin-inline-end
slug: Web/CSS/Reference/Properties/margin-inline-end
original_slug: Web/CSS/margin-inline-end
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ru/docs/Web/CSS) Свойство **`margin-inline-end`** определяет отступ логического края элемента, который сопоставляется с физическим отступом в зависимости от режима написания, направленности и расположения текста. То есть оно соответствует {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} или {{cssxref("margin-left")}} свойству в зависимости от числа определяющего {{cssxref("writing-mode")}}, {{cssxref("direction")}}, и {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: margin-inline-end")}}

```css interactive-example-choice
margin-inline-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline-end: 20%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">One</div>
    <div class="col transition-all" id="example-element">Two</div>
    <div class="col">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
/* <length> values */
margin-inline-end: 10px; /* An absolute length */
margin-inline-end: 1em; /* relative to the text size */
margin-inline-end: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-inline-end: auto;

/* Global values */
margin-inline-end: inherit;
margin-inline-end: initial;
margin-inline-end: unset;
```

It relates to {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, and {{cssxref("margin-inline-start")}}, which define the other margins of the element.

{{cssinfo}}

### Values

The `margin-inline-end` property takes the same values as the {{cssxref("margin-left")}} property.

### Formal syntax

{{csssyntax}}

## Example

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  margin-inline-end: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Example", 140, 140)}}

## Specification

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("margin-inline-start")}}
- The mapped physical properties: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}

---
title: margin-inline-end
slug: Web/CSS/margin-inline-end
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ru/docs/Web/CSS) Свойство **`margin-inline-end`** определяет отступ логического края элемента, который сопоставляется с физическим отступом в зависимости от режима написания, направленности и расположения текста. То есть оно соответствует {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} или {{cssxref("margin-left")}} свойству в зависимости от числа определяющего {{cssxref("writing-mode")}}, {{cssxref("direction")}}, и {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/margin-inline-end.html")}}

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

| Specification                                                                             | Status                              | Comment            |
| ----------------------------------------------------------------------------------------- | ----------------------------------- | ------------------ |
| {{SpecName("CSS Logical Properties", "#propdef-margin-inline-end", "margin-inline-end")}} | {{Spec2("CSS Logical Properties")}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("margin-inline-start")}}
- The mapped physical properties: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}

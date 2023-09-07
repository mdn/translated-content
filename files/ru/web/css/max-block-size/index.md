---
title: max-block-size
slug: Web/CSS/max-block-size
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ru/docs/Web/CSS) свойство **`max-block-size`** определяет максимальный горизонтальный или вертикальный размер блока в зависимости от вида ориентации экрана. Это свойство соответствует либо {{cssxref("max-width")}}, либо {{cssxref("max-height")}}, в зависимости от значения определённого в {{cssxref("writing-mode")}}. Если последнее свойство вертикально ориентировано, значит значение свойства `max-block-size` относится к максимальной ширине блока, в противном случае относится к максимальной высоте блока. It relates to {{cssxref("max-inline-size")}}, which defines the other dimension of the element.

```css
/* <length> values */
max-block-size: 300px;
max-block-size: 25em;

/* <percentage> values */
max-block-size: 75%;

/* Keyword values */
max-block-size: none;
max-block-size: max-content;
max-block-size: min-content;
max-block-size: fit-content;
max-block-size: fill-available;

/* Global values */
max-block-size: inherit;
max-block-size: initial;
max-block-size: unset;
```

{{cssinfo}}

## Syntax

### Values

Свойство `max-block-size` принимает такие же значения как {{cssxref("max-width")}} и {{cssxref("max-height")}} свойства.

### Formal syntax

{{csssyntax}}

## Example

### HTML Content

```html
<p class="exampleText">Example text</p>
```

### CSS Content

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-block-size: 200px;
}
```

{{EmbedLiveSample("Example")}}

## Specification

| Specification                                                                       | Status                              | Comment            |
| ----------------------------------------------------------------------------------- | ----------------------------------- | ------------------ |
| {{SpecName("CSS Logical Properties", "#propdef-max-block-size", "max-block-size")}} | {{Spec2("CSS Logical Properties")}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("max-width")}} and {{cssxref("max-height")}}
- {{cssxref("writing-mode")}}

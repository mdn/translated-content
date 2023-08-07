---
title: inline-size
slug: Web/CSS/inline-size
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`inline-size`** определяет горизонтальные или вертикальные размеры блока в зависимости от режима написания (writing mode). Оно соответствует свойствам {{cssxref("width")}} и {{cssxref("height")}} и зависит от свойства {{cssxref("writing-mode")}}.

{{EmbedInteractiveExample("pages/css/inline-size.html")}}

## Syntax

```css
/* <length> values */
inline-size: 300px;
inline-size: 25em;

/* <percentage> values */
inline-size: 75%;

/* Keyword values */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content(20em);
inline-size: auto;

/* Global values */
inline-size: inherit;
inline-size: initial;
inline-size: unset;
```

Если режим написания (writing mode) — вертикальный, значение `inline-size` относится к высоте элемента; в противном случае, оно относиться к ширине элемента. Связанное свойство — {{cssxref("block-size")}}, которое определяет другие размеры элемента.

### Значения

Свойство `inline-size` принимает те же значения, что и свойства {{cssxref("width")}} и {{cssxref("height")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline size in pixels

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_size_in_pixels")}}

## Specifications

| Specification                                                                 | Status                              | Comment            |
| ----------------------------------------------------------------------------- | ----------------------------------- | ------------------ |
| {{SpecName("CSS Logical Properties", "#propdef-inline-size", "inline-size")}} | {{Spec2("CSS Logical Properties")}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}

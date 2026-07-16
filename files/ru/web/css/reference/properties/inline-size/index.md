---
title: inline-size
slug: Web/CSS/Reference/Properties/inline-size
original_slug: Web/CSS/inline-size
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`inline-size`** определяет горизонтальные или вертикальные размеры блока в зависимости от режима написания (writing mode). Оно соответствует свойствам {{cssxref("width")}} и {{cssxref("height")}} и зависит от свойства {{cssxref("writing-mode")}}.

{{InteractiveExample("CSS Demo: inline-size")}}

```css interactive-example-choice
inline-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the inline-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- The mapped physical properties: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}

---
title: writing-mode
slug: Web/CSS/writing-mode
---

{{CSSRef}}{{SeeCompatTable}}

## Summary

Свойство **`writing-mode`** устанавливает горизонтальное или вертикальное положение текста также как и направление блока.

Свойство определяет направление потока блока, в каком направлении складываются контейнеры уровня блока и направление в котором инлайновый контент находится в родительском блоке. Также свойство `writing-mode` определяет порядок контента блочного уровня.

{{cssinfo}}

## Синтаксис

```css
/* Keyword values */
writing-mode: horizontal-tb;
writing-mode: horizontal-bt;
writing-mode: vertical-rl;
writing-mode: vertical-lr;

/* Global values */
writing-mode: inherit;
writing-mode: initial;
writing-mode: unset;
```

### Значения

- `horizontal-tb`
  - : Content flows horizontally from left to right, vertically from top to bottom. The next horizontal line is positioned below the previous line.
- `horizontal-bt`
  - : Content flows horizontally from left to right, vertically from bottom to top. The next horizontal line is positioned above the previous line.
- `vertical-rl`
  - : Content flows vertically from top to bottom, horizontally from right to left. The next vertical line is positioned to the left of the previous line.
- `vertical-lr`
  - : Content flows vertically from top to bottom, horizontally from left to right. The next vertical line is positioned to the right of the previous line.
- `lr` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb`.
- `lr-tb` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb`.
- `rl` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb`.
- `tb` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `vertical-rl`.
- `tb-rl` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `vertical-rl`.

### Formal syntax

{{csssyntax}}

## Пример

```html
<p class="exampleText">Example text</p>
```

```css
.exampleText {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("Пример", 100, 160)}}

## Specification

| Specification                                                     | Status                          | Comment            |
| ----------------------------------------------------------------- | ------------------------------- | ------------------ |
| {{SpecName("CSS3 Writing Modes", "#block-flow", "writing-mode")}} | {{Spec2("CSS3 Writing Modes")}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- SVG [`writing-mode`](/ru/docs/Web/SVG/Attribute/writing-mode) attribute
- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}

---
title: units-per-em
slug: Web/SVG/Attribute/units-per-em
---

{{SVGRef}}{{deprecated_header("SVG 2")}}

The **`units-per-em`** attribute specifies the number of coordinate units on the "em square", an abstract square whose height is the intended distance between lines of type in the same type size. This is the size of the design grid on which {{Glossary("glyph", "glyphs")}} are laid out.

> **备注：** This value is almost always necessary as nearly every other attribute requires the definition of a design grid.

Only one element is using this attribute: {{SVGElement("font-face")}}

## Usage notes

| Value         | [`<number>`](/zh-CN/docs/Web/SVG/Content_type#Number) |
| ------------- | ----------------------------------------------------- |
| Default value | `1000`                                                |
| Animatable    | No                                                    |

- `<number>`
  - : This value indicates the the number of coordinate units on the em square.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

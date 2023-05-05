---
title: <length-percentage>
slug: Web/CSS/length-percentage
---

{{CSSRef}}

The **`<length-percentage>`** [CSS](/zh-CN/docs/Web/CSS) [data type](/zh-CN/docs/Web/CSS/CSS_Types) represents a value that can be either a {{Cssxref("length")}} or a {{Cssxref("percentage")}}.
The **`<length-percentage>`** CSS 数据类型表示一个值，该值可以是\<length>或\<percentage>。

## Syntax

Refer to the documentation for {{Cssxref("length")}} and {{Cssxref("percentage")}} for details of the individual syntaxes allowed by this type.

## Use in `calc()`

Where a `<length-percentage>` is specified as an allowable type, this means that the percentage resolves to a length and therefore can be used in a {{cssxref("calc", "calc()")}} expression. Therefore, all of the following values are acceptable for {{cssxref("width")}}:

```css example-good
width: 200px;
width: 20%;
width: calc(100% - 200px);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

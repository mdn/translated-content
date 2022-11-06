---
title: CSS Functional Notation
slug: Web/CSS/CSS_Functions
---

{{CSSRef}}

**CSS 功能符号**是一种 [CSS 值](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)，可以表示更复杂的数据类型或调用特殊的数据处理或计算。

## 句法

```
selector {
  property: functional-notation( [argument]? [, argument]! );
}
```

The syntax starts with the **name of the functional notation**, followed by a left parenthesis `(`. Next up are the notation argument(s), and the function is finished off with a closing parenthesis `)`.

Functions can take multiple arguments, which are formatted similarly to CSS property values. Whitespace is allowed, but they are optional inside the parentheses. In some functional notations multiple arguments are separated by commas, while others use spaces.

## 索引

Functional notation defined by a set of CSS specifications includes the following:

A

- {{CSSxRef("abs", "abs()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("acos", "acos()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("font-variant-alternates/annotation()", "annotation()")}} (font)
- {{CSSxRef("asin", "asin()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("atan", "atan()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("atan2", "atan2()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("attr")}}

B

- {{CSSxRef("filter-function/blur", "blur()")}} (filter)
- {{CSSxRef("filter-function/brightness", "brightness()")}} (filter)

C

- {{CSSxRef("calc")}} (math)
- {{CSSxRef("font-variant-alternates/character-variant()", "character-variant()")}} (font)
- {{CSSxRef("circle", "circle()")}} (shape)
- {{CSSxRef("clamp")}} (math)
- {{CSSxRef("color()")}} (colors) {{Experimental_Inline}}
- {{CSSxRef("conic-gradient")}}
- {{CSSxRef("cos", "cos()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("counter")}}
- {{CSSxRef("counters")}}
- {{CSSxRef("filter-function/contrast", "contrast()")}} (filter)
- {{CSSxRef("cross-fade")}} {{Experimental_Inline}}
- {{CSSxRef("cubic-bezier", "cubic-bezier()")}}

D

- {{CSSxRef("device-cmyk", "device-cmyk()")}} (colors) {{Experimental_Inline}}
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}} (filter)

E

- {{CSSxRef("element")}} {{Experimental_Inline}}
- {{CSSxRef("env")}} {{Experimental_Inline}}
- {{CSSxRef("ellipse", "ellipse()")}} (shape)
- {{CSSxRef("exp", "exp()")}} (math) {{Experimental_Inline}}

F

- {{CSSxRef("fit-content", "fit-content()")}}
- {{CSSxRef("format", "format()")}}

G

- {{CSSxRef("filter-function/grayscale", "grayscale()")}} (filter)

H

- {{CSSxRef("hsl", "hsl()")}} (colors)
- {{CSSxRef("hsla", "hsla()")}} (colors)
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}} (filter)
- {{CSSxRef("hwb", "hwb()")}} (colors) {{Experimental_Inline}}
- {{CSSxRef("hypot", "hypot()")}} (math) {{Experimental_Inline}}

I

- {{CSSxRef("imagefunction", "image()")}} {{Experimental_Inline}}
- {{CSSxRef("image-set")}} {{Experimental_Inline}}
- {{CSSxRef("inset()")}} (shape)
- {{CSSxRef("filter-function/invert", "invert()")}} (filter)

L

- {{CSSxRef("lab", "lab()")}} (colors) {{Experimental_Inline}}
- {{CSSxRef("lch", "lch()")}} (colors) {{Experimental_Inline}}
- {{CSSxRef("leader", "leader()")}}
- {{CSSxRef("linear-gradient")}}
- {{CSSxRef("local", "local()")}} {{Experimental_Inline}}
- {{CSSxRef("log", "log()")}} (math) {{Experimental_Inline}}

M

- {{CSSxRef("transform-function/matrix", "matrix()")}} (transform)
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} (transform)
- {{CSSxRef("max")}} (math)
- {{CSSxRef("min")}} (math)
- {{CSSxRef("minmax")}} (math)
- {{CSSxRef("mod", "mod()")}} (math) {{Experimental_Inline}}

O

- {{CSSxRef("filter-function/opacity", "opacity()")}} (filter)
- {{CSSxRef("font-variant-alternates/ornaments()", "ornaments()")}} (font)

P

- {{CSSxRef("paint")}} {{Experimental_Inline}}
- {{CSSxRef("path", "path()")}} (shape)
- {{CSSxRef("transform-function/perspective", "perspective()")}} (transform)
- {{CSSxRef("polygon", "polygon()")}} (shape)
- {{CSSxRef("pow", "pow()")}} (math) {{Experimental_Inline}}

R

- {{CSSxRef("radial-gradient")}}
- {{CSSxRef("rem", "rem()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("repeat")}}
- {{CSSxRef("repeating-linear-gradient")}}
- {{CSSxRef("repeating-radial-gradient")}}
- {{CSSxRef("repeating-conic-gradient")}}
- rgb() (colors)
- rgba() (colors)
- {{CSSxRef("transform-function/rotate", "rotate()")}} (transform)
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}} (transform)
- {{CSSxRef("transform-function/rotateX", "rotateX()")}} (transform)
- {{CSSxRef("transform-function/rotateY", "rotateY()")}} (transform)
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}} (transform)
- {{CSSxRef("round", "round()")}} (math) {{Experimental_Inline}}

S

- {{CSSxRef("filter-function/saturate", "saturate()")}} (filter)
- {{CSSxRef("transform-function/scale", "scale()")}} (transform)
- {{CSSxRef("transform-function/scale3d", "scale3d()")}} (transform)
- {{CSSxRef("transform-function/scaleX", "scaleX()")}} (transform)
- {{CSSxRef("transform-function/scaleY", "scaleY()")}} (transform)
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}} (transform)
- {{CSSxRef("filter-function/sepia", "sepia()")}} (filter)
- {{CSSxRef("sign", "sign()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("sin", "sin()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("transform-function/skew", "skew()")}} (transform)
- {{CSSxRef("transform-function/skewX", "skewX()")}} (transform)
- {{CSSxRef("transform-function/skewY", "skewY()")}} (transform)
- {{CSSxRef("sqrt", "sqrt()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("steps", "steps()")}}
- {{CSSxRef("font-variant-alternates/styleset()", "styleset()")}} (font)
- {{CSSxRef("font-variant-alternates/stylistic()", "stylistic()")}} (font)
- {{CSSxRef("font-variant-alternates/swash()", "swash()")}} (font)
- {{CSSxRef("symbols", "symbols()")}}

T

- {{CSSxRef("tan", "tan()")}} (math) {{Experimental_Inline}}
- {{CSSxRef("target-counter", "target-counter()")}} {{Experimental_Inline}}
- {{CSSxRef("target-counters", "target-counters()")}} {{Experimental_Inline}}
- {{CSSxRef("target-text", "target-text()")}} {{Experimental_Inline}}
- {{CSSxRef("toggle", "toggle()")}} {{Experimental_Inline}}
- {{CSSxRef("transform-function/translate", "translate()")}} (transform)
- {{CSSxRef("transform-function/translate3d", "translate3d()")}} (transform)
- {{CSSxRef("transform-function/translateX", "translateX()")}} (transform)
- {{CSSxRef("transform-function/translateY", "translateY()")}} (transform)
- {{CSSxRef("transform-function/translateZ", "translateZ()")}} (transform)

U

- {{CSSxRef("url()", "url()")}}

V

- {{CSSxRef("var")}}

## 规范

{{Specifications}}

## 参见

- [CSS Values and Units](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)
- [Introduction to CSS: Values and Units](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)

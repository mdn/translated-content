---
title: CSS Funktionsnotation
slug: Web/CSS/CSS_Functions
tags:
  - CSS
  - CSS Datentypen
  - CSS Funktion
  - Funktionen
  - Funktionsnotation
  - Referenz
  - Typen
  - datentpen
translation_of: Web/CSS/CSS_Functions
---
{{CSSRef}}

Die CSS-Funktionsnotation ist ein Typ von [CSS-Werten](/de/docs/Web/CSS/CSS_Values_and_Units), der komplexere Datentypen darstellen oder spezielle Datenverarbeitungen oder Berechnungen aufrufen kann.

## Syntax

    selector {
      property: functional-notation( [argument]? [, argument]! );
    }

Die Syntax beginnt mit dem **Namen der funktionalen Notation**, gefolgt von einer linken Klammer `(`. Als Nächstes folgen das/die Notationsargument(e), und die Funktion wird mit einer schließenden Klammer `)` abgeschlossen.

Funktionen können mehrere Argumente annehmen, die ähnlich wie CSS-Eigenschaftswerte formatiert sind. Leerzeichen sind erlaubt, aber innerhalb der Klammern sind sie optional. In einigen Funktionsnotationen werden mehrere Argumente durch Kommas getrennt, während andere Leerzeichen verwenden.

## Index

Zu den funktionalen Notationen, die durch eine Reihe von CSS-Spezifikationen definiert sind, gehören die folgenden:

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

- {{CSSxRef("fit-content()", "fit-content()")}}
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
- {{CSSxRef("path()", "path()")}} (shape)
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

## Spezifikationen

| Specification                        | Status                           | Comment                                                                                                                                                                                                                                                                                                  |
| ------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Values")}} | {{Spec2("CSS4 Values")}} | Hinzugefügte Funktionsnotation `toggle()`, `attr()`, `calc()`, `min()`, `max()`, `clamp()`, `round()`, `mod()`, `rem()`, `mod()`, `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`, `pow()`, `sqrt()`, `hypot()`, `log()`, `exp()`, `abs()` und `sign()`.                              |
| {{SpecName("CSS3 Values")}} | {{Spec2("CSS3 Values")}} | Fügt die Funktionsnotation `calc()` zu.                                                                                                                                                                                                                                                                  |
| {{SpecName("CSS4 Colors")}} | {{Spec2("CSS4 Colors")}} | Fügt kommmalose Syntaxen für die funktionale Notation `rgb()`, `rgba()`, `hsl()`, und `hsla()` hinzu. Erlaubt Alpha-Werte in `rgb()` und `hsl()`, und macht `rgba()` und `hsla()` into (deprecated) zu (veralteten) Aliasen für diese. Fügt die Funktionen `hwb()`, `device-cmyk()` und `color()` hinzu. |
| {{SpecName("CSS3 Colors")}} | {{Spec2("CSS3 Colors")}} | Fügt `rgba()`, `hsl()`, `hsla()` als funktionale Notation hinzu.                                                                                                                                                                                                                                         |
| {{SpecName("CSS4 Images")}} | {{Spec2("CSS4 Images")}} | Fügt `element()`, `image()`, `image-set()` und `conic-gradient()` als Funktionsnotation hinzu.                                                                                                                                                                                                           |

## Siehe auch

- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung zu CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Werten_Einheiten)

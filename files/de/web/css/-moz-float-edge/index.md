---
title: '-moz-float-edge'
slug: Web/CSS/-moz-float-edge
tags:
  - CSS
  - CSS Eigenschaft
  - CSS:Mozilla Erweiterungen
  - Layout
  - NeedsCompatTable
  - NeedsLiveSample
  - Non-standard
translation_of: Web/CSS/-moz-float-edge
---
{{CSSRef}}{{Non-standard_header}}

## Übersicht

Die nicht standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob die Höhen- und Breiteneigenschaften des Elements die Dicke des Außenabstands, des Rands oder des Innenabstands beinhalten.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;

/* Globale Werte */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

### Werte

- `border-box`
  - : Die Höhen- und Breiteneigenschaften beinhalten den Inhalt, Innenabstand und Rand, aber nicht den Außenabstand.
- `content-box`
  - : Die Höhen- und Breiteneigenschaften beinhalten den Inhalt, aber weder Innenabstand, Rand, noch Außenabstand.
- `margin-box`
  - : Die Höhen- und Breiteneigenschaften beinhalten den Inhalt, Innenabstand, Rand und Außenabstand.
- `padding-box`
  - : Die Höhen- und Breiteneigenschaften beinhalten den Inhalt und Innenabstand, aber nicht den Rand oder Außenabstand.

### Formale Syntax

{{csssyntax}}

## Beispiel

```css
hr {
  display: block;
  height: 2px;
  border: 1px inset;
  margin: 0.5em auto 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

## Siehe auch

{{bug(432891)}}

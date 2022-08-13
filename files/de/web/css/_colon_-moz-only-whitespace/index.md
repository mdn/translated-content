---
title: ':-moz-only-whitespace'
slug: Web/CSS/:-moz-only-whitespace
tags:
  - CSS
  - CSS Referenz
  - NeedsCompatTable
  - Non-standard
  - Pseudoklasse
translation_of: Web/CSS/:-moz-only-whitespace
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `:-moz-only-whitespace` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) matcht ein Element, dass keine Kindelemente hat oder leere Textknoten oder Textknoten, die nur Leerzeichen enthalten. Nur falls es Elementknoten oder Textknoten mit einem oder mehreren Zeichen innerhalb des Elements gibt, matcht das Element diese Pseudoklasse nicht mehr.

## Syntax

    span:-moz-only-whitespace { Stileigenschaften }

## Beispiel

### CSS

```css
span:-moz-only-whitespace::before {
  background-color: lime;
}
```

### HTML

```html
<span> </span>
```

{{EmbedLiveSample("Beispiel", "50", "20")}}

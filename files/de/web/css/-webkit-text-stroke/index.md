---
title: '-webkit-text-stroke'
slug: Web/CSS/-webkit-text-stroke
tags:
  - CSS
  - Eigenschaft
  - Non-standard
  - Referenz
translation_of: Web/CSS/-webkit-text-stroke
---
{{CSSRef}}{{Non-standard_header}}

## Übersicht

Die **`-webkit-text-stroke`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die [Breite](/de/docs/Web/CSS/length) und [Farbe](/de/docs/Web/CSS/color_value) der Umrandung von Textzeichen an. Sie ist eine Kurzschreibweise für die Langschreibungseigenschaften {{cssxref("-webkit-text-stroke-width")}} und {{cssxref("-webkit-text-stroke-color")}}.

{{cssinfo}}

## Syntax

```css
/* Breiten- und Farbwerte */
-webkit-text-stroke: 4px navy;

/* Globale Werte */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: unset;
```

### Werte

- `<length>`
  - : Die Breite der Umrandung.
- `<color>`
  - : Die Farbe der Umrandung.

### Formale Syntax

{{csssyntax}}

## Beispiel

### HTML

```html
<p id="example">Die Umrandung dieses Texts ist rot.</p>
```

### CSS

```css
#example {
  font-size: 50px;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

{{EmbedLiveSample("Beispiel", 650, 60)}}

## Spezifikationen

Nicht Teil einer Spezifikation.

Apple hat eine [Beschreibung in der Safari CSS Referenz](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_text_stroke).

## Browser Kompatibilität

{{Compat}}

\[1] Ab Gecko 48 hinter der Einstellung `layout.css.prefixes.webkit` implementiert, dort noch standarmäßig `false`;
ab Gecko 49 {{geckoRelease("49.0")}} standardmäßig `true`.

## Siehe auch

- [Surfin' Safari Blogeintrag, der dieses Feature ankündigt](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks Artikel, der dieses Feature erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}

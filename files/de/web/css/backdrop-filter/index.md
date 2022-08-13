---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
tags:
  - CSS
  - CSS Eigenschaft
  - Grafik
  - Layout
  - NeedsContent
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Referenz
  - SVG
  - SVG Filter
  - Web
translation_of: Web/CSS/backdrop-filter
---
{{CSSRef}}{{SeeCompatTable}}

## Übersicht

Die `backdrop-filter` CSS Eigenschaft beschreibt den Bereich hinter einem Element für Effekte wie Unschärfe oder Farbverschiebung, welcher anschließend durch das Element gesehen werden kann, indem die Transparenz/Deckkraft des Elements angepasst wird.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwert */
backdrop-filter: none;

/* URL zu SVG-Filter */
backdrop-filter: url(commonfilters.svg#filter);

/* Filterfunktionen */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Mehrere Filterfunktionen */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Globale Werte */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: unset;
```

### Werte

TODO

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
backdrop-filter: blur(10px);
```

## Spezifikationen

| Spezifikation                                                                                    | Status                           | Kommentar                |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------ |
| {{SpecName('Filters 2.0', '#BackdropFilterProperty', 'backdrop-filter')}} | {{Spec2('Filters 2.0')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.backdrop-filter")}}

## Siehe auch

- {{cssxref("filter")}}
- [Blog Post von Dom Neill mit Beispielen](http://www.domneill.com/blog/posts/2015/07/28/my-favourite-new-features-in-webkit-and-safari/)
- [Erstellen von iOS-ähnlichen Transparenzeffekten in CSS mit backdrop-filter](http://product.voxmedia.com/til/2015/2/17/8053347/css-ios-transparency-with-webkit-backdrop-filter)

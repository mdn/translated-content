---
title: border-image-source
slug: Web/CSS/border-image-source
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Ränder
  - Referenz
translation_of: Web/CSS/border-image-source
---
{{CSSRef("CSS Borders")}}

## Übersicht

Die `border-image-source` [CSS](/de/docs/Web/CSS) Eigenschaft definiert den {{cssxref("&lt;image&gt;")}} Wert, der anstatt dem Stil des Randes verwendet wird. Falls diese Eigenschaft auf `none` gesetzt wird, wird der Stil verwendet, der durch {{cssxref("border-style")}} definiert wird.

> **Hinweis:** Obwohl jeder {{cssxref("&lt;image&gt;")}} Wert innerhalb dieser CSS Eigenschaft verwendet werden kann, ist die Browserunterstützung bisher noch begrenzt und einige Browser unterstützen nur Bilder, die über die `url()` Funktion angegeben werden.

{{cssinfo}}

## Syntax

```css
/* Kein Randbild, stattdessen wird der angegebene border-style verwendet */
border-image-source: none;

/* image.jpg wird als Bild verwendet */
border-image-source: url(image.jpg);

/* Farbverlauf wird als Bild verwendet */
border-image-source: linear-gradient(to top, red, yellow);

/* Globale Werte */
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;
```

### Formale Syntax

{{csssyntax}}

## Beispiele

Siehe {{cssxref("border-image")}} für Beispiele, welchen Einfluss die verschiedenen Werte haben.

## Spezifikationen

| Spezifikation                                                                                            | Status                                   | Anmerkung                |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Backgrounds', '#border-image-source', 'border-image-source')}} | {{Spec2('CSS3 Backgrounds')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.border-image-source")}}

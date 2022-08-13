---
title: width
slug: Web/CSS/@media/width
tags:
  - CSS
  - Referenz
translation_of: Web/CSS/@media/width
---
{{cssref}}

**`width`** ist eine [CSS](/de/docs/Web/CSS) Medien-Eigenschaft, die verwendet werden kann um Stile basierend auf der Breite der Anzeige (Viewport) zuzuordnen. Die Breite muss als {{cssxref("&lt;length&gt;")}} Wert definiert werden.

## Syntax

**`width`** ist ein Breichswert, d.h. **`min-width`** und **max-width** sind ebenfalls verfügbar.

```css
/* Exakte Breite */
@media (width: 300px) {}

/* Viewport Minimale Breite */
@media (min-width: 50em) {}

/* Viewport Maximale Breite */
@media (max-width: 1000px) {}
```

## Spezifikationen

| Spezifikation                                                            | Status                                   | Kommentar            |
| ------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('CSS4 Media Queries', '#media', '@media')}} | {{Spec2('CSS4 Media Queries')}} | Keine Änderung.      |
| {{SpecName('CSS3 Media Queries', '#width', 'width')}} | {{Spec2('CSS3 Media Queries')}} | Initiale Definition. |

## Browserkompatibilität

{{Compat("css.at-rules.media.width")}}

---
title: text-rendering
slug: Web/CSS/text-rendering
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Text
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Referenz
  - SVG
translation_of: Web/CSS/text-rendering
---
{{CSSRef}}

## Übersicht

Die **`text-rendering`** CSS Eigenschaft liefert der Renderingengine Informationen darüber, wie die Darstellung von Text optimiert werden soll.

Der Browser macht Abstriche bezüglich Geschwindigkeit, Lesbarkeit und geometrischer Präzision. Die `text-rendering` Eigenschaft ist eine SVG Eigenschaft, die in keinem CSS Standard definiert ist. Jedoch erlauben Gecko und WebKit Browser es unter Windows, Mac OS X und Linux, diese Eigenschaft auf HTML und XML Inhalte anzuwenden.

Ein offensichtlicher Effekt ist `optimizeLegibility`, welches Ligaturen (ff, fi, fl etc.) in Text kleiner als 20px für einige Schriftarten aktiviert (zum Beispiel Microsofts _Calibri_, _Candara_, _Constantia_ und _Corbel_ oder die _DejaVu_ Schriftfamilie).

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* Globale Werte */
text-rendering: inherit;
text-rendering: initial;
text-rendering: unset;
```

### Werte

- `auto`
  - : Der Browser bestimmt, wann auf Geschwindigkeit, Lesbarkeit oder geometrische Präzision optimiert werden soll, wenn Text gezeichnet wird. Für Unterschiede, wie dieser Wert von den Browser interpretiert wird, siehe die Kompatibilitätstabelle.
- `optimizeSpeed`
  - : Der Browser betont Geschwindigkeit gegenüber Lesbarkeit und geometrischer Präzision, wenn Text gezeichnet wird. Dies deaktiviert Unterschneidung und Ligaturen.
- `optimizeLegibility`
  - : Der Browser betont Lesbarkeit gegenüber Geschwindigkeit und geometrischer Präzision, wenn Text gezeichnet wird. Dies aktiviert Unterschneidung und optionale Ligaturen.
- `geometricPrecision`
  - : Der Browser betont geometrischer Präzision gegenüber Geschwindigkeit und Lesbarkeit. Bestimmte Aspekte von Schriften — wie Unterschneidung — skalieren nicht linear. Daher erlaubt es dieser Wert, Text in diesen Schriften gut aussehen zu lassen.Wenn Text in SVG hoch- oder runterskaliert wird, berechnen Browser die finale Größe des Texts (welche durch die angegebene Schriftgröße und die Skalierung bestimmt wird) und fordern eine Schriftart dieser berechneten Größe vom Schriftsystem der Plattform an. Aber falls eine Schriftgröße von beispielsweise 9 mit einer Skalierung von 140% angefordert wird, existiert die sich ergebende Schriftgröße von 12.6 nicht explizit im Schriftsystem, sodass der Browser stattdessen die Schriftgröße auf 12 abrundet. Dies resultiert in einer schrittweisen Skalierung von Text.Der `geometricPrecision` Wert — falls von der Renderingengine vollständig unterstützt — erlaubt es, Text übergangslos zu skalieren. Große Skalierungsfaktoren können eine weniger schöne Textdarstellung zur Folge haben, aber die Größe ist, was erwartet wird — weder auf- noch abgerundet auf die nächstmögliche Schriftgröße, die von Windows oder Linux unterstützt wird.> **Note:** **Hinweis**: WebKit wendet exakt den angegebenen Wert an, aber Gecko behandelt den Wert genauso wie `optimizeLegibility`.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
/* stellt sicher, dass alle Schriften innerhalb des HTML Dokuments in all ihrer Pracht dargestellt werden,
   aber verhindert unangemessene Ligaturen in Elementen mit der Klasse 'foo' */

body {
  text-rendering: optimizeLegibility;
}

.foo {
  text-rendering: optimizeSpeed;
}
```

### Livebeispiele

| CSS Code                                                                  | Unterschneidung | Ligaturen    |
| ------------------------------------------------------------------------- | --------------- | ------------ |
| font: 19.9px 'DejaVu Serif', Constantia;                                  | LYoWAT          | ff fi fl ffl |
| font: 20px 'DejaVu Serif', Constantia;                                    | LYoWAT          | ff fi fl ffl |
| font: 3em 'DejaVu Serif', Constantia; text-rendering: optimizeSpeed;      | LYoWAT          | ff fi fl ffl |
| font: 3em 'Dejavu Serif', Constantia; text-rendering: optimizeLegibility; | LYoWAT          | ff fi fl ffl |

## Spezifikationen

| Spezifikation                                                                                            | Status                   | Kommentar                |
| -------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| {{SpecName('SVG1.1', 'painting.html#TextRenderingProperty', 'text-rendering')}} | {{Spec2('SVG1.1')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.text-rendering")}}

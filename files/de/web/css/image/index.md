---
title: <image>
slug: Web/CSS/image
tags:
  - CSS
  - CSS Bilder
  - CSS Datentyp
  - Grafik
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/image
---
{{CSSRef}}

## Übersicht

Der `<image>` [CSS](/de/docs/Web/CSS) Datentyp repräsentiert ein 2D Bild. Es gibt zwei Arten von Bildern in CSS: einfache statische Bilder, die meist über einen URL referenziert werden, und dynamisch generierte Bilder wie Farbverläufe oder Abbildungen von Teilen der HTML Struktur.

CSS kann verschiedene Arten von Bildern verarbeiten:

- Bilder mit _inneren Maßen_, d. h. einer natürlichen Größe, wie bei einem JPEG Bild, das feste Maße hat.
- Bilder mit _mehreren inneren Maßen_, die in mehreren Versionen innerhalb der Datei existieren, wie bei einigen ICO Formaten. In diesem Fall entspricht das innere Maß dem flächenmäßig größten Bild mit dem Seitenverhältnis, das dem der beinhaltenden Box am nächsten kommt.
- Bilder ohne innerem Maß, die jedoch ein _inneres Seitenverhältnis_ zwischen ihrer Breite und Höhe haben, wie beispielsweise einige Vektorbilder im SVG Format.
- Bilder ohne _innere Maße noch innerem Seitenverhältnis_, wie beispielsweise CSS Farbverläufen.

CSS bestimmt die _konkrete Objektgröße_ anhand dieser _inneren Maße_, der _angegebenen Größe_ definiert durch CSS Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}} oder {{cssxref("background-size")}} und der _Standard Objektgröße_, die durch die Art der Eigenschaft definiert wird, in der das Bild verwendet wird:

| Objektart                                                                                                                                                                           | Standard Objektgröße                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("background-image")}}                                                                                                                                            | Die Größe des Hintergrund Positionierungsbereichs des Elements                                                        |
| {{cssxref("list-style-image")}}                                                                                                                                            | Die Größe eines Zeichens in `1em`                                                                                     |
| {{cssxref("border-image")}}                                                                                                                                                | Die Größe des Randbildbereichs des Elements                                                                           |
| {{cssxref("cursor")}}                                                                                                                                                        | Eine durch den Browser definierte Größe, die der normalen Größe eines Mauszeigers auf dem benutzten System entspricht |
| Ersetzter Inhalt wie die Kombination der CSS Eigenschaft {{cssxref("content")}} mit den CSS Pseudoelementen {{cssxref("::after")}} und {{cssxref("::before")}} | Ein `300px`` × 150px` Rechteck                                                                                     |

Die konkrete Objektgröße wird mit Hilfe des folgenden Algorithmus berechnet:

- Falls die angegebene Größe sowohl Breite als auch Höhe definiert, werden diese Werte als die konkrete Objektgröße verwendet.
- Falls die angegebene Größe einen der beiden Werte für Breite und Höhe definiert, wird der fehlende Wert durch das innere Seitenverhältnis bestimmt, sofern vorhanden, die inneren Maße, falls der angegebene Wert passt, oder es wird die Standard Objektgröße für den fehlenden Wert verwendet.
- Falls die angegebene Größe weder Breite noch Höhe definiert, wird die konkrete Objektgröße so berechnet, dass sie dem inneren Seitenverhältnis der Bilder entspricht, jedoch die Standard Objektgröße in keinem Maß übersteigt. Falls das Bild kein inneres Seitenverhältnis hat, wird das innere Seitenverhältnis des Objekts verwendet, dem es zugewiesen ist; falls das Objekt keines hat, wird die fehlende Breite oder Höhe von der Standard Objektgröße herangezogen.

Bilder können von diversen CSS Eigenschaften verwendet werden, wie {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("content")}}, {{cssxref("list-style-image")}} oder {{cssxref("cursor")}}.

> **Hinweis:** Nicht alle Browser unterstützen alle Arten von Bildern in allen Eigenschaften. Der Unterpunkt [Browser Kompatibilität](#Browser_Kompatibilität) enhält hierzu eine detaillierte Liste.

## Syntax

Ein `<image>` CSS Datentyp kann die folgenden Bilder repräsentieren:

- Ein Bild, dass durch einen {{cssxref("&lt;uri&gt;")}} CSS Datentyp und die `url()` Funktion angegeben wird
- Einen CSS {{cssxref("&lt;gradient&gt;")}};
- Einen Teil einer Seite, der durch die {{cssxref("element", "element()")}} Funktion definiert wird.

## Beispiele

Dies sind gültige Bildwerte:

    url(test.jpg)                          Die url() Funktion, sofern test.jpg ein Bild ist
    linear-gradient(to bottom, blue, red)  Ein <gradient>
    element(#colonne3)                     Ein Teil einer Seite, der durch die element() Funktion referenziert wird,,
                                           sofern 'colonne3' eine existierende CSS ID auf der Seite darstellt.

Dies sind ungültige Bildwerte:

    cervin.jpg                             Eine Bilddatei muss durch die url() Funktion angegeben werden.
    url(report.pdf)                        Die Datei, die über die url() Funktion angesprochen wird, muss ein Bild sein.
    element(#fakeid)                       Falls 'fakeid' keine in der Seite existierende CSS ID darstellt.

## Spezifikationen

| Spezifikation                                                                | Status                           | Kommentar                                                                                                                                                |
| ---------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Images', '#image-notation', 'image()')}} | {{Spec2('CSS3 Images')}} | Vor [CSS3](/de/docs/Web/CSS/CSS3) gab es keinen explizit definierten `<image>` Datentyp. Bilder konnten nur durch die `url()` Funktion definiert werden. |

## Browser Kompatibilität

{{Compat("css.types.image")}}

## Siehe auch

- [Farbverläufe in CSS](/de/docs/Farbverläufe_in_CSS), {{cssxref("&lt;gradient&gt;")}}, {{cssxref("linear-gradient","linear-gradient()")}}, {{cssxref("radial-gradient","radial-gradient()")}}, {{cssxref("repeating-linear-gradient","repeating-linear-gradient()")}}, {{cssxref("repeating-radial-gradient","repeating-radial-gradient()")}};
- {{cssxref("element","element()")}};

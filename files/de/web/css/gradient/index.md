---
title: <gradient>
slug: Web/CSS/gradient
tags:
  - CSS
  - CSS Datentyp
  - Grafik
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/gradient
---
{{CSSRef}}

## Übersicht

Der `<gradient>` [CSS](/de/docs/CSS) Datentyp beschreibt ein {{cssxref("&lt;image&gt;")}}, das aus einem progressiven Verlauf zwischen zwei oder mehreren Farben besteht. Ein CSS Farbverlauf ist kein {{cssxref("&lt;color&gt;")}} Wert, aber ein Bild [ohne innere Maße](/de/docs/Web/CSS/image#keine_inneren_Maße); das bedeutet, es hat weder eine natürliche oder bevorzugte Größe, noch ein bevorzugtes Seitenverhältnis. Seine konkrete Größe passt sich dem Element an, dem es zugewiesen wurde.

Es gibt drei Arten von Farbverläufen:

- _Lineare Farbverläufe_, erzeugt durch die {{cssxref("linear-gradient()")}} Funktion, wo die Farbe weich entlang einer imaginären Linie verläuft.

  ```html
  Ein durch einen Farbverlauf erzeugter Regenbogen
  ```

  ```css
  body {
  background: -moz-linear-gradient(left,red,orange,yellow, green, blue,indigo,violet);
  background: -webkit-linear-gradient(left,red,orange,yellow, green, blue,indigo,violet);
  background: -ms-linear-gradient(left,red,orange,yellow, green, blue,indigo,violet);
  background: -o-linear-gradient(left,red,orange,yellow, green, blue,indigo,violet);
  background: linear-gradient(to right,red,orange,yellow, green, blue,indigo,violet);
  }
  ```

  {{EmbedLiveSample('linear-gradient', 600, 20)}}

- _Radiale Farbverläufe_, erzeugt durch die {{cssxref("radial-gradient()")}} Funktion. Je weiter sich ein Punkt vom Ursprung entfernt befindet, desto weiter entfernt ist er von der Originalfarbe.

  ```html
  Radialer Farbverlauf

  ```

  ```css
  body {
  background: -moz-radial-gradient(red, yellow, rgb(30, 144, 255)) repeat scroll 0% 0% transparent;
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
  }
  ```

  {{EmbedLiveSample('radial-gradient', 600, 20)}}

- _Wiederholende Farbverläufe_, welche lineare oder radiale Farbverläufe fester Größe sind, die sich solange wiederholen bis die gesamte Box gefüllt ist.

  ```html
  Wiederholender Farbverlauf
  ```

  ```css
  body {
  background: -moz-repeating-linear-gradient(top left -45deg, red, red 5px, white 5px, white 10px);
  background: repeating-linear-gradient(to top left, red, red 5px, white 5px, white 10px);
  }
  ```

  {{EmbedLiveSample('repeating-gradient', 600, 20)}}

Wie in allen Fällen, in denen zwischen Farben interpoliert wird, werden Farbverläufe im alpha-vormultiplizierten Farbraum berechnet. Dies verhindert unerwartete Grauschattierungen, wenn sowohl Farbe als auch Deckkraft variieren.

## Spezifikationen

| Spezifikation                                                                    | Status                           | Kommentar                |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{SpecName('CSS3 Images', '#gradients', '&lt;gradient&gt;')}} | {{Spec2('CSS3 Images')}} | Ursprüngliche Definition |

## Browser Kompatibilität

Jeder Farbverlaufstyp hat eine unterschiedliche Kompatibilitätsmatrix. Bitte daher die individuellen Artikel lesen.

## Siehe auch

- [Farbverläufe in CSS](/de/docs/Farbverläufe_in_CSS), {{cssxref("linear-gradient()")}}, {{cssxref("radial-gradient()")}}, {{cssxref("repeating-linear-gradient()")}}, {{cssxref("repeating-radial-gradient()")}}

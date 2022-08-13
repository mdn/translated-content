---
title: <integer>
slug: Web/CSS/integer
tags:
  - CSS
  - CSS Datentyp
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/integer
---
{{CSSRef}}

## Übersicht

Der [CSS](/de/docs/CSS "CSS") Wert `<integer>` ist eine Ganzzahl zwischen 0 und 9. data type denotes an integer number, positive or negative. Davor kann ein + oder - stehen. Steht nichts davor ist der Interger positiv.

Integer kommen bspw. in {{cssxref("z-index")}}, {{cssxref("line-height")}}, {{cssxref("counter-increment")}} oder {{Cssxref("column-count")}} vor.

Ein `<integer>` entspricht auch dem Wert {{cssxref("&lt;number&gt;")}}.

> **Note:** Es gibt keine offizielle Begrenzung des Wertes. Opera unterstützt nur Werte bis 215-1, der Internet Explorer bis 220-1. Während der Entwicklung von CSS3 wurde dies ausführlich diskutiert. Der letzte Stand, April 2012, war \[-227-1; 227-1] [#](http://lists.w3.org/Archives/Public/www-style/2012Apr/0633.html), aber auch 224-1 und 230-1 wurden vorgeschlagen [#](http://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html) [#](http://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html). Im letzten Entwurf der Spezifikation wurde kein Limit festgelegt.

## Interpolation

Werte des `<integer>` CSS Datentyps können interpoliert werden, um Animationen zu ermöglichen. In diesem Fall werden sie als ganzzahlige Einzelschritte interpoliert. Die Berechnung erfolgt, als ob sie reale Fließkommazahlen wären und der Einzelwert wird durch die [Abrundungsfunktion](https://de.wikipedia.org/wiki/Abrundungsfunktion_und_Aufrundungsfunktion#Abrundungsfunktion_oder_Gau.C3.9Fklammer) ermittelt. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundenen {{cssxref("timing-function", "Timingfunktion")}} bestimmt.

## Beispiele

Gültige Integer:

    12          Positiver Integer (ohne führendes +)
    +123        Positiver integer (mit führendem +)
    -456        Negativer integer
    0           Null
    +0          Null mit führendem +
    -0          Null mit führendem - (obwohl seltsam, ist dies ein erlaubter Wert)

Ungültige Integer:

    12.0        Dist ist eine {{cssxref("&lt;number&gt;")}}, kein <integer>, obwohl sie eine Ganzzahl darstellt
    12.         Der Punkt sollte nicht Teil eines <integer> sein
    +---12      Nur ein führendes +/- ist erlaubt
    ten         Buchstaben sind nicht erlaubt
    _5          Sonderzeichen sind nicht erlaubt
    \35         Escapte Unicodezeichen sind nicht erlaubt, auch wenn diese einer Ganzzahl entsprechen (hier: 5)
    \4E94       Nicht-arabische Numerale sind nicht erlaubt, auch nicht escapt (hier: die japanische 5, 五)
    3e4         Wissenschaftliche Notation ist nicht gültig für <integer>

## Spezifikationen

| Spezifikation                                                                            | Status                           | Anmerkung                                                     |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| {{SpecName('CSS3 Values', '#integers', '&lt;integer&gt;')}}         | {{Spec2('CSS3 Values')}} | keine wesentliche Änderung gegenüber CSS Level 2 (Revision 1) |
| {{SpecName('CSS2.1', 'syndata.html#numbers', '&lt;integer&gt;')}} | {{Spec2('CSS2.1')}}         | Explizit definiert                                            |
| {{SpecName('CSS1', '', '&lt;integer&gt;')}}                                 | {{Spec2('CSS1')}}         | Implizit definiert                                            |

## Browser Kompatibilität

{{Compat("css.types.integer")}}

## Siehe auch

- {{cssxref("&lt;number&gt;")}}

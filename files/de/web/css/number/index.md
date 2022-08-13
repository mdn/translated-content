---
title: <number>
slug: Web/CSS/number
tags:
  - CSS
  - CSS Datentyp
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/number
---
{{CSSRef}}

Der `<number>` [CSS](/de/docs/Web/CSS) Datentyp repräsentiert eine Zahl, entweder Ganzzahl oder Bruchzahl. Ihre Syntax erweitert die des {{cssxref("&lt;integer&gt;")}} Datentyps. Um einen Bruchwert darzustellen, wird der Bruchteil — ein '.' gefolgt von einer oder mehreren Ziffern — einem beliebigen {{cssxref("&lt;integer&gt;")}} Datentyp angehängt. Wie für {{cssxref("&lt;integer&gt;")}} Datentypen wird auch für `<number>` Werte keine Einheit angegeben, welche keine CSS Größe ist.

## Interpolation

Werte des `<number>` CSS Datentyps können interpoliert werden, um Animationen zu ermöglichen. In diesem Fall werden sie als reale Fließkommazahlen interpoliert. Die Geschwindigkeit der Interpolation wird durch die der Animation zugehörigen {{cssxref("timing-function", "Timingfunktion")}} bestimmt.

## Beispiele

Dies sind gültige Zahlenwerte:

    12          Reiner <integer> ist ebenfalls eine <number>
    4.01        Positive <number>, die keine Ganzzahl ist
    -456.8      Negative <number>, die keine Ganzzahl ist
    0.0         Null
    +0.0        Null mit führendem +
    -0.0        Null mit führendem - (obwohl seltsam, ist dies ein erlaubter Wert)
    .60         Ziffern vor dem Punkt sind optional
    10e3        Wissenschaftliche Notation ist erlaubt
    -3.4e-2     Komplexester Fall wissenschaftlicher Notation

Dies sind ungültige Zahlenwerte:

    12.         Dem Punkt sollte eine Zahl folgen
    +-12.2      Nur ein führendes +/- ist erlaubt
    12.1.1      Nur ein Punkt ist erlaubt

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                                                        |
| ------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------- |
| {{SpecName('CSS3 Values', '#numbers', '&lt;number&gt;')}}         | {{Spec2('CSS3 Values')}} | Keine wesentliche Änderung in Bezug auf CSS Level 2 (Revision 1) |
| {{SpecName('CSS2.1', 'syndata.html#numbers', '&lt;number&gt;')}} | {{Spec2('CSS2.1')}}         | Explizit definiert                                               |
| {{SpecName('CSS1', '', '&lt;number&gt;')}}                             | {{Spec2('CSS1')}}         | Implizit definiert                                               |

## Browser Kompatibilität

{{Compat("css.types.number")}}

## Siehe auch

- {{CSSxRef("&lt;integer&gt;")}}

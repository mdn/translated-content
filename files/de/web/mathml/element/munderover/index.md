---
title: <munderover>
slug: Web/MathML/Element/munderover
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/munderover
---
{{MathMLRef}}

Das Element `<munderover>` wird in MathML eingesetzt, um Akzente und Grenzwerte sowohl ober- als auch unterhalb von Ausdrücken zu platzieren.

## Syntax

    <munderover>base underscript overscript</munderover>

## Attribute

- accentunder
  - : Wenn `true`, dann wird das `underscript` als _Akzent_ und damit etwas näher am Ausdruck dargestellt.
    Wenn `false` (Vorgabewert), dann wird das `underscript` als _Grenzwert_ unter dem Ausdruck dargestellt.
- accent
  - : Wenn `true`, dann wird das `overscript` als _Akzent_ und damit etwas näher am Ausdruck dargestellt.
    Wenn `false` (Vorgabewert), dann wird das `overscript` als _Grenzwert_ über dem Ausdruck dargestellt.
- align
  - : Die Ausrichtung von `underscript` und `overscript`. Mögliche Werte sind: `left`, `center`, und `right`.
- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).

## Beispiele

Beispiel: ![integral-0-infinity](/files/3198/munderover.png)

```html
<math displaystyle="true">

  <munderover >
    <mo> &#x222B; <!--INTEGRAL--> </mo>
    <mn> 0 </mn>
    <mi> &#x221E; <!--INFINITY--> </mi>
  </munderover>

</math>
```

{{EmbedLiveSample("", 300, 300)}}

## Spezifikationen

| Standard                                                                                         | Status                       | Bemerkung             |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.munderover', 'munderover') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.munderover', 'munderover') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("mover") }} (Overscript)

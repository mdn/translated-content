---
title: <mover>
slug: Web/MathML/Element/mover
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mover
---
{{MathMLRef}}

Das Element `<mover>` wird in MathML für Akzente und die Angabe von Grenzwerten oberhalb von Ausdrücken eingesetzt.

## Syntax

    <mover>base overscript</mover>

## Attribute

- accent
  - : Wenn `true`, dann wird das `overscript` als _Akzent_ und damit etwas näher am Ausdruck dargestellt.
    Wenn `false` (Vorgabewert), dann wird das `overscript` als _Grenzwert_ über dem Ausdruck dargestellt.
- align
  - : Die Ausrichtung des `overscript`. Mögliche Werte sind: `left`, `center`, und `right`.
- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).

## Beispiele

Beispiel: ![x+y+z](/files/3196/mover.png)

Darstellung in Deinem Browser: <math><mover accent="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏞</mo></mover></math>

```html
<math>

<mover accent="true">
  <mrow>
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
    <mo> + </mo>
    <mi> z </mi>
  </mrow>
  <mo> &#x23DE; <!--TOP CURLY BRACKET--> </mo>
</mover>

</math>
```

## Spezifikationen

| Standard                                                                             | Status                       | Bemerkung             |
| ------------------------------------------------------------------------------------ | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mover', 'mover') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mover', 'mover') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)

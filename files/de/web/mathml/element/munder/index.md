---
title: <munder>
slug: Web/MathML/Element/munder
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/munder
---
{{MathMLRef}}

Das Element `<munder>` wird in MathML für Akzente und die Angabe von Grenzwerten unterhalb von Ausdrücken eingesetzt.

## Syntax

    <munder>base underscript</munder>

## Attribute

- accentunder
  - : Wenn `true`, dann wird das `underscript` als _Akzent_ und damit etwas näher am Ausdruck dargestellt.
    Wenn `false` (Vorgabewert), dann wird das `underscript` als _Grenzwert_ unter dem Ausdruck dargestellt.
- align
  - : Die Ausrichtung des `underscript`. Mögliche Werte sind: `left`, `center`, und `right`.
- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).

## Beispiele

Beispiel: ![x+y+z](/files/3197/munder.png)

Darstellung in Deinem Browser: <math><munder accentunder="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏟</mo></munder></math>

```html
<math>

<munder accentunder="true">
  <mrow>
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
    <mo> + </mo>
    <mi> z </mi>
  </mrow>
  <mo> &#x23DF; <!--BOTTOM CURLY BRACKET--> </mo>
</munder>

</math>
```

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.munder', 'munder') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.munder', 'munder') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mover") }} (Overscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)

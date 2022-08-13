---
title: <msup>
slug: Web/MathML/Element/msup
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/msup
---
{{MathMLRef}}

Das Element `<msup>` wird in MathML eingesetzt, um einen Ausdruck mit einem Exponenten (einer hochgestellten Zahl) zu versehen.

## Syntax

    <msup>base superscript</msup>

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- superscriptshift
  - : [Maßangabe](/de/docs/MathML/Attributes/Values#Lengths) des Mindestabstandes, um den der Exponent von der Grundlinie des Ausdrucks _angehoben_ wird.

## Beispiele

Beispiel: ![x1](/files/3203/msup.png)

Darstellung in Deinem Browser: <math><msup><mi>X</mi> <mn>2</mn></msup></math>

```html
<math>

  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>

</math>
```

## Spezifikationen

| Standard                                                                         | Status                       | Bemerkung             |
| -------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.msup', 'msup') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.msup', 'msup') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweise zu Gecko

- Seit Gecko 26.0 {{geckoRelease("26")}} kann `<none />` nicht mehr als Kind-Element eingesetzt werden. Die Darstellung ist jetzt an die von {{MathMLElement("msub")}} und {{MathMLElement("mmultiscripts")}} angeglichen.

## Siehe auch

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)

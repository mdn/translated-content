---
title: <msubsup>
slug: Web/MathML/Element/msubsup
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/msubsup
---
{{MathMLRef}}

Das Element `<msubsup>` wird in MathML eingesetzt, um einen Ausdruck sowohl mit einer tiefergestellten Zahl als auch mit einer höhergestellten Zahl zu versehen.

## Syntax

    <msubsup>base subscript superscript</msubsup>

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- subscriptshift
  - : [Maßangabe](/de/docs/MathML/Attributes/Values#Lengths) des Mindestabstandes, um den die tiefergestellte Zahl von der Grundlinie des Ausdrucks _abgesenkt_ wird.
- superscriptshift
  - : [Maßangabe](/de/docs/MathML/Attributes/Values#Lengths) des Mindestabstandes, um den der Exponent von der Grundlinie des Ausdrucks _angehoben_ wird.

## Beispiele

Beispiel: ![x1](/files/3204/msubsup.png)

```html
<math displaystyle="true">

  <msubsup>
    <mo> &#x222B;<!--Integral --> </mo>
    <mn> 0 </mn>
    <mn> 1 </mn>
  </msubsup>

</math>
```

{{EmbedLiveSample("", 300, 300)}}

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.msubsup', 'msubsup') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.msubsup', 'msubsup') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweise zu Gecko

- Starting with Gecko 26.0 {{geckoRelease("26")}} it is no longer possible to use `<none />` as a child element. The rendering has been made more consistent with equivalent configurations of {{MathMLElement("msub")}}, {{MathMLElement("msup")}} and {{MathMLElement("mmultiscripts")}} .

## Siehe auch

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)

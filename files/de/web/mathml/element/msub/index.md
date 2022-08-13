---
title: <msub>
slug: Web/MathML/Element/msub
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/msub
---
{{MathMLRef}}

Das Element `<msub>` wird in MathML eingesetzt, um einen Ausdruck mit einem Index (einer tiefergestellten Zahl) zu versehen.

## Syntax

    <msub>base subscript</msub>

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

## Beispiele

Beispiel: ![x1](/files/3202/msub.png)

```html
<math>

  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>

</math>
```

{{EmbedLiveSample("", 300, 300)}}

## Spezifikationen

| Standard                                                                         | Status                       | Bemerkung             |
| -------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.msub', 'msub') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.msub', 'msub') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweis zu Gecko

- Seit Gecko 26.0 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2) kann `<none />` nicht mehr als Kind-Element eingesetzt werden. Die Darstellung ist jetzt an die von [`<msup>`](https://developer.mozilla.org/de/docs/Web/MathML/Element/msub "<msub>") und [`<mmultiscripts>`](https://developer.mozilla.org/de/docs/Web/MathML/Element/mmultiscripts "<mmultiscripts>") angeglichen.

## Siehe auch

- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)

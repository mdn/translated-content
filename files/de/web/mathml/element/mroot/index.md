---
title: <mroot>
slug: Web/MathML/Element/mroot
tags:
  - MathML
  - MathML:Element
  - MathML:General Lay
  - Referenz
translation_of: Web/MathML/Element/mroot
---
{{MathMLRef}}

Das `<mroot>`-Element wird in MathML benutzt, um Wurzeln mit einem beliebigen Exponenten darzustellen. Zwei Argumente werden akzeptiert, was zu der Syntaxis führt: `<mroot> Basis Exponent </mroot>`.

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Farbe für Text und Wurzelzeichen. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).

## Beispiele

Beispiel: ![x](/files/3200/mroot.png)

Darstellung in Deinem Browser: <math><mroot><mi>x</mi> <mn>3</mn></mroot></math>

```html
<math>

 <mroot>
    <mi>x</mi>
    <mn>3</mn>
 </mroot>

</math>
```

## Spezifikationen

| Standard                                                                             | Status                       | Comment                   |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mroot', 'mroot') }} | {{ Spec2('MathML3') }} | jetzige Specification     |
| {{ SpecName('MathML2', 'chapter3.html#presm.mroot', 'mroot') }} | {{ Spec2('MathML2') }} | anfängliche Specification |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("msqrt") }} (Quadratwurzel, ohne Exponent)

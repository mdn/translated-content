---
title: <msqrt>
slug: Web/MathML/Element/msqrt
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/msqrt
---
{{MathMLRef}}

Das Element `<msqrt>` wird in MathML eingesetzt, um eine (Quadrat-)Wurzel darzustellen, wobei der Exponent 2 nicht ausgeschrieben wird. Die Wurzel benötigt nur ein Argument, was zu folgender Schreibweise führt: `<msqrt> Basis </msqrt>`.

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Farbe für Basis und Wurzelzeichen. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).

## Beispiele

Beispiel: ![root-x](/files/3201/msqrt.png)

Darstellung in Deinem Browser: <math><msqrt><mi>x</mi></msqrt></math>

```html
<math>

  <msqrt>
    <mi>x</mi>
  </msqrt>

</math>
```

## Spezifikationen

| Standard                                                                             | Status                       | Bemerkung             |
| ------------------------------------------------------------------------------------ | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.msqrt', 'msqrt') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.msqrt', 'msqrt') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mroot") }} (Wurzel, mit beliebigem Exponent)

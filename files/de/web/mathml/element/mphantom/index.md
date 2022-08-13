---
title: <mphantom>
slug: Web/MathML/Element/mphantom
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mphantom
---
{{MathMLRef}}

Das `<mphantom>`-Element in MathML wird nicht dargestellt, nimmt aber den Platz ein, als wenn es dargestellt würde. (engl. phantom = Trugbild, Erscheinung)

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).

## Beispiele

Beispiel: ![x+  z](/files/3199/mphantom.png)

Darstellung in Deinem Browser: <math><mrow><mi>x </mi><mo>+ </mo><mphantom><mi>y </mi><mo>+ </mo></mphantom><mi>z</mi></mrow></math>

```html
<math>

<mrow>
  <mi> x </mi>
  <mo> + </mo>
  <mphantom>
    <mi> y </mi>
    <mo> + </mo>
  </mphantom>
  <mi> z </mi>
</mrow>

</math>
```

## Spezifikationen

| Standard                                                                                     | Status                       | Bemerkung             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mphantom', 'mphantom') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mphantom', 'mphantom') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mspace") }}
- {{ MathMLElement("mpadded") }}

---
title: <mfrac>
slug: Web/MathML/Element/mfrac
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mfrac
---
{{MathMLRef}}

Das Element `<mfrac>` wird in MathML verwendet, um Brüche darzustellen. (engl. fraction = Bruch, Teil)

## Syntax

    <mfrac>Zähler Nenner</mfrac>

## Attribute

- bevelled
  - : Dieses Attribut bestimmt die Art der Bruchdarstellung: Wenn es `true` gesetzt ist, werden Zähler und Nenner nebeneinander gesetzt und durch eine Schrägstrich verbunden. Der Vorgabewert ist `false`, wobei der Bruch mit einem waagerechten Bruchstrich gesetzt werden.
- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- denomalign
  - : Die horizontale Ausrichtung des Nenners (unter dem Bruchstrich). Der Standardwert ist `center`, weiterhin sind `left` und `right` möglich.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- linethickness
  - : Die Dicke des waagerechten Bruchstrichs. Der Vorgabewert ist `medium`, außerdem können hier `thin`, `thick`, und andere [Längenangaben](/de/docs/CSS/length) gemacht werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- numalign
  - : Die horizontale Ausrichtung des Zählers (oberhalb des Bruchstrichs). Der Standardwert ist `center`, weiterhin sind `left` und `right` möglich.

## Beispiele

Beispiel: ![(a/b)/(c/d)](/files/3194/mfrac.png)

Darstellung in Deinem Browser: <math><mfrac bevelled="true"><mfrac><mi>a </mi><mi>b </mi></mfrac><mfrac><mi>c </mi><mi>d</mi></mfrac></mfrac></math>

```html
<math>
  <mfrac bevelled="true">
     <mfrac>
        <mi> a </mi>
        <mi> b </mi>
     </mfrac>
     <mfrac>
        <mi> c </mi>
        <mi> d </mi>
     </mfrac>
  </mfrac>
</math>
```

## Spezifikationen

| Standard                                                                             | Status                       | Bemerkung             |
| ------------------------------------------------------------------------------------ | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mfrac', 'mfrac') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mfrac', 'mfrac') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweise zu Gecko

- Seit Gecko 7.0 {{ geckoRelease("7.0") }} hat das `linethickness`-Attribut den korrekten Vorgabewert `medium`.

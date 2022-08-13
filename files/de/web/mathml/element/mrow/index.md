---
title: <mrow>
slug: Web/MathML/Element/mrow
tags:
  - MathML
  - Referenz
translation_of: Web/MathML/Element/mrow
---
{{MathMLRef}}

Das Element `<mrow>` wird genutzt, um Ausdrücke (mathematische Terme) zu gruppieren. Ausdrücke enthalten in der Regel einen oder mehrere Rechenzeichen oder Operatoren (engl. operator, siehe [`<mo>`](/de/docs/Web/MathML/Element/mo)) und die dazugehörigen Zahlenwerte (engl. number, siehe [`<mn>`](/de/docs/Web/MathML/Element/mi)) und Variablen (engl. identifier, siehe [`<mi>`](/de/docs/Web/MathML/Element/mi)). Der Inhalt von `<mrow>` wird in einer Zeile dargestellt.

Beim Schreiben von MathML-Ausdrücken solltest Du die Bestandteile des Terms so in `<mrow>`-Elementen zusammenfassen, wie es der mathematischen Aussage entspricht. Passende Gruppierung erleichtert die Darstellung auf mehrere Weisen:

- Möglicherweise kann die Darstellung durch passende Zwischenräume verbessert werden.
- Es erleichtert mögliche Zeilenumbrüche und Einrückungen.
- Es vereinfacht die Interpretation des Ausdrucks durch Sprachausgabegeräte und Rechensysteme.
- Es erleichtert die Formatierung des Quelltextes durch erkennbare Zusammenfassungen und passende Einrückungen

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- dir
  - : Allgemeine Schreibrichtung für die Formeln. Mögliche Werte sind `ltr` (left to right, von links nach rechts) und `rtl` (right to left, von rechts nach links).
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).

## Beispiele

```html
<math>

  <mrow>
    <mn>1</mn>
    <mo>+</mo>
    <mn>1</mn>
  </mrow>

  <mrow>
    <mo>(</mo>
    <mrow>
      <mi>x</mi>
      <mo>,</mo>
      <mi>y</mi>
    </mrow>
    <mo>)</mo>
  </mrow>

</math>
```

## Spezifikationen

| Standard                                                                         | Status                       | Bemerkung             |
| -------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mrow', 'mrow') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mrow', 'mrow') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Gruppieren von HTML-Elementen: [`<div>`](/de/docs/Web/HTML/Element/div) und [`<span>`](/de/docs/Web/HTML/Element/span)
- Gruppieren von Elementen in SVG: [`<g>`](/de/docs/Web/SVG/Element/g)

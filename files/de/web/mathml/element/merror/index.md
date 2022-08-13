---
title: <merror>
slug: Web/MathML/Element/merror
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/merror
---
{{MathMLRef}}

In MathML wird das `<merror>`-Element genutzt, um Fehler in einem mathematischen Ausdruck hervorzuheben. In Firefox ähnelt die Darstellung der von XML-Fehlermeldungen.

> **Note:** `<merror>` betrifft nur die Darstellung des Ausdrucks und hat nichts mit echten Syntaxfehlern in MathML oder XML zu tun.

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).

## Beispiele

```html
<math>

<merror>
  <mrow>
    <mtext> Division by zero: </mtext>
    <mfrac>
      <mn> 1 </mn>
      <mn> 0 </mn>
    </mfrac>
  </mrow>
</merror>

</math>
```

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.merror', 'merror') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.merror', 'merror') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

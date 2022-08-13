---
title: <mpadded>
slug: Web/MathML/Element/mpadded
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mpadded
---
{{MathMLRef}}

Das Element `<mpadded>` wird in MathML genutzt, um einen Ausdruck mit zusätzlichem Innenabstand zu versehen und um Position und Größe einzustellen. (engl. to pad = auspolstern)

Die Ausdehnung der umgebenden Box eines mathematischen Ausdrucks wird zuerst von seiner typographischen Breite und Höhe bestimmt. Der Bezugspunkt des Ausdrucks (Kind-Element) liegt anfangs auf dem Bezugspunkt des umgebenden `<mpadded>`-Elements.

Mit Hilfe von `<mpadded>` kann die Breite und Höhe der umgebenden Box verändert (vergrößert) werden. Zusätzlich kann innerhalb dieser Box der Ausdruck horizontal und vertikal positioniert werden.

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- depth
  - : Setzt oder ändert die vertikale Ausdehnung der umgebenden Box von `<mpadded>` _unterhalb_ der Grundlinie. Eine (nichtnegative) [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die weder mit - noch mit + beginnt, _setzt_ den Wert. Eine [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die mit - oder + beginnt, _verringert_ bzw. _erhöht_ den Wert entsprechend. (Eine Verringerung von `depth` kann zu Überlappung mit dem Ausdruck darunter führen und sollte vermieden werden.)
- height
  - : Setzt oder ändert die vertikale Ausdehnung der umgebenden Box von `<mpadded>` _oberhalb_ der Grundlinie. Eine (nichtnegative) [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die weder mit - noch mit + beginnt, _setzt_ den Wert. Eine [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die mit - oder + beginnt, _verringert_ bzw. _erhöht_ den Wert entsprechend. (Eine Verringerung von `height` kann zu Überlappung mit dem Ausdruck darüber führen und sollte vermieden werden.)
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- lspace
  - : Setzt oder ändert den horizontalen Abstand des Bezugspunktes der Kind-Elemente zum Bezugspunkt von `<mpadded>` selbst. Eine (nichtnegative) [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die weder mit - noch mit + beginnt, _setzt_ den Wert. Eine [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die mit - oder + beginnt, _verringert_ bzw. _erhöht_ den Wert entsprechend. (Eine Verringerung von `lspace` kann dazu führen, dass der Term links herausragt und sollte vermieden werden. Erhöhung sollte im Einklang mit der Erhöhung von `width` stehen.) (engl. leading = führend, vorangestellt)
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- voffset
  - : Setzt oder ändert den vertikalen Abstand des Bezugspunktes der Kind-Elemente zum Bezugspunkt von `<mpadded> selbst`. Eine (nichtnegative) [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die weder mit - noch mit + beginnt, _setzt_ den Wert. Eine [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die mit - oder + beginnt, _verringert_ bzw. _erhöht_ den Wert entsprechend. (Eine Verringerung von `voffset` kann dazu führen, dass der Term nach unten überlappt und sollte mit der Vergrößerung von `depth` in Einklang stehen. Eine Erhöhung von `voffset` kann zu einer Überlappung nach oben führen und sollte mit der Erhöhung von `height` im Einklang stehen.)
- width
  - : Setzt oder ändert den horizontalen Abstand des Bezugspunktes der `<mpadded>-`Box zum Bezugspunkt der folgenden Box. Eine (nichtnegative) [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die weder mit - noch mit + beginnt, _setzt_ den Wert. Eine [Längenangabe](/de/docs/Web/MathML/Attribute/Werte), die mit - oder + beginnt, _verringert_ bzw. _erhöht_ den Wert entsprechend. (Eine Verringerung von `width` kann zu Überlappung mit dem folgenden Ausdruck führen und sollte vermieden werden.)

### Pseudo-Einheiten

Für die Attribute `depth`, `height`, `lspace`, `voffset`, and `width` können die Schlüsselwörter `"depth`",`"height"` und `"width"` genutzt werden. Sie repräsentieren jeweils den Wert, den sie benennen.

## Beispiele

```html
<math>

  <mpadded height="+150px" width="100px" lspace="2height">
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
  </mpadded>

</math>
```

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mpadded', 'mpadded') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mpadded', 'mpadded') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweise zu Gecko

Bis Gecko 7.0 {{ geckoRelease("7.0") }} war die MathML2 Pseudo-Einheit `lspace` zulässig. Diese ist nicht mehr Bestandteil der MathML3 Recommendation und wurde entfernt.

## Siehe auch

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}

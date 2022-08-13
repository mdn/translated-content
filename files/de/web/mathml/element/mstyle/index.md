---
title: <mstyle>
slug: Web/MathML/Element/mstyle
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mstyle
---
{{MathMLRef}}

Das Element `<mstyle>` wird in MathML eingesetzt, um die _Darstellung_ seiner Kind-Elemente zu verändern. Es akzeptiert alle Attribute der MathML-Darstellungselemente (mit wenigen Ausnahmen) und die zusätzlichen Attribute, die unten aufgelistet sind:

## Attribute

- `dir`
  - : Allgemeine Schreibrichtung für die Formeln. Mögliche Werte sind `ltr` (left to right, von links nach rechts) und `rtl` (right to left, von rechts nach links).
- `decimalpoint`
  - : Benennt das Zeichen für die Ausrichtung innerhalb von {{ MathMLElement("mstack") }}- und {{ MathMLElement("mtable") }}-Spalten, für den Fall, dass diese am `decimalpoint` ausgerichtet werden.
- `displaystyle`
  - : Ein Boolescher Wert für den Darstellungsstil einer Gleichung. Bei `true` wird zusätzlicher vertikaler Zwischenraum eingefügt; bei `false` wird die Formel dagegen kompakter dargestellt. Der hauptsächliche Effekt besteht darin, dass größere Versionen der Operatoren angezeigt werden, falls `displaystyle` auf `true` gesetzt ist. Siehe auch `largeop` and `movablelimits` bei {{ MathMLElement("mo") }}.
- `infixlinebreakstyle`
  - : Gibt an, welcher `linebreakstyle` auf infix-Operatoren angewandt wird. Erlaubt sind die Werte `before`, `after` und `duplicate`.
- `scriptlevel`
  - : Steuert im wesentlichen die Schriftgröße. Je größer der `scriptlevel`, umso kleiner die Schriftgröße. Dieses Attribute akzeptiert nichtnegative, ganze Zahlen und die Zeichen "+" und "-", was den aktuellen Wert jeweils um eine Stufe erhöht oder verringert. `scriptlevel` kann die Schriftgröße nicht unter die mit [`scriptminsize`](#scriptminsize) angegebene minimale Schriftgröße setzen. Das verhindert unleserlich kleine Schriftgrößen. Siehe auch [`scriptsizemultiplier`](#scriptsizemultiplier).
- `scriptminsize`
  - : Gibt die minimale Schriftgröße an, die nach Änderungen mit [`scriptlevel`](#scriptlevel) dargestellt wird. Der Vorgabewert ist 8pt.
- `scriptsizemultiplier`
  - : Gibt den Faktor an, um den die Schriftgröße mit [`scriptlevel`](#scriptlevel) vergrößert oder verkleinert wird. Der Standardwert ist 0.71, d.h. mit zwei Stufen wird die Schriftgröße verdoppelt bzw. halbiert.

Das `<mstyle>`-Element akzeptiert [alle Attribute](/de/docs/MathML/Attributes) aller Darstellungselemente **mit diesen Ausnahmen**:

- `height`, `depth` und `width` lassen sich nicht auf {{ MathMLELement("mglyph") }}, {{ MathMLELement("mpadded") }} und {{ MathMLELement("mtable") }} anwenden.
- `rowalign`, `columnalign`, und `groupalign` lassen sich nicht auf {{ MathMLELement("mtr") }}, {{ MathMLELement("mlabeledtr") }}, {{ MathMLELement("mtd") }} und {{ MathMLELement("maligngroup") }} anwenden.
- `lspace` und `voffset` lassen sich nicht auf {{ MathMLELement("mpadded") }} anwenden.
- `fontfamily` wirkt nicht auf {{ MathMLELement("mglyph") }}.
- `align` lässt sich nicht auf {{ MathMLELement("mtable") }} und {{ MathMLELement("mstack") }} anwenden.
- `index` kann nicht in `<mstyle>` gesetzt werden.
- `src` und `alt` auf das {{ MathMLElement("mglyph" ) }}-Element können nicht in `<mstyle>` gesetzt werden.
- `actiontype` auf das {{ MathMLElement("maction") }} kann nicht in `<mstyle>` gesetzt werden.

## Beispiele

`displaystyle` und `mathcolor` werden eingesetzt, um die Darstellung der gesamten Summe zu beeinflussen.

```html
<math>

  <mstyle displaystyle="true" mathcolor="teal">
    <mrow>

      <munderover>
        <mo stretchy="true" form="prefix">&sum;</mo>
        <mrow>
          <mi>i</mi>
          <mo form="infix">=</mo>
          <mn>1</mn>
        </mrow>
        <mi>n</mi>
      </munderover>

      <mstyle displaystyle="true">
        <mfrac>
          <mn>1</mn>
          <mi>n</mi>
        </mfrac>
      </mstyle>

    </mrow>
  </mstyle>

</math>
```

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mstyle', 'mstyle') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mstyle', 'mstyle') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat("mathml.elements.mstyle")}}

## Hinweise zu Gecko

- Vor Gecko 6.0 {{ geckoRelease("6.0") }} war `<mstyle>` nur unvollständig umgesetzt (siehe [Bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=569125)). Im einzelnen waren die folgenden Attribute wirkungslos, wenn sie auf `<mstyle>` angewandt wurden:

  - `bevelled`, angewandt auf {{ MathMLElement("mfrac") }}
  - `notation`, angewandt auf {{ MathMLElement("menclose") }}
  - `open`, `close` und `separators`, angewandt auf {{ MathMLElement("mfenced") }}
  - `accent` und `accentunder`, angewandt auf {{ MathMLElement("mover") }}, {{ MathMLElement("munder") }} und {{ MathMLElement("munderover") }}
  - `selection`, angewandt auf {{ MathMLElement("maction") }}
  - `mathvariant`, angewant auf {{ MathMLElement("mi") }}

- Beginnend mit Gecko 20.0 {{geckoRelease("20.0")}} sind für `scriptminsize` Werte ohne Einheit und Prozentangaben erlaubt und werden als Vielfache von "8pt" berechnet.
- Seit Gecko 29.0 {{geckoRelease("29.0")}} sind für `<mstyle>` nur noch Attribute erlaubt, die in der Praxis auch angewendet werden: `id, class, style, href, mathcolor, mathbackground, scriptlevel, displaystyle, scriptsizemultiplier, scriptminsize, dir, mathsize, mathvariant, fontfamily, fontweight, fontstyle, fontsize, color, background`.

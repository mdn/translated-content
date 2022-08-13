---
title: <mspace>
slug: Web/MathML/Element/mspace
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mspace
---
{{MathMLRef}}

Das MathML-Element `<mspace>` erzeugt einen Weißraum, dessen Größe durch Attribute bestimmt wird.

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- depth
  - : Die Ausdehnung des Leerraums _unterhalb_ der Grundlinie. Mögliche Angaben: siehe [Längenangaben](/de/docs/Web/MathML/Attribute/Werte).
- height
  - : Die Ausdehnung des Leerraums _oberhalb_ der Grundlinie. Mögliche Angaben: siehe [Längenangaben](/de/docs/Web/MathML/Attribute/Werte).
- linebreak
  - : Gibt an, wie wünschenswert ein Zeilenumbruch an dieser Stelle ist. Mögliche Werte sind: `auto` (Vorgabewert), `newline`, `nobreak`, `goodbreak`, `badbreak`.
    Seit MathML 3 soll der Zeilenumbruch bevorzugt mit dem {{ MathMLElement("mo") }}-Element gesteuert werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- width
  - : Die Breite des Leerraums. Mögliche Angaben: siehe [Längenangaben](/de/docs/Web/MathML/Attribute/Werte).

Beachte, dass die Attribute `mathcolor`, `mathvariant` und `dir` keine Auswirkung auf `<mspace>` haben.

## Beispiele

```html
<math>

  <mspace depth="40px" height="20px" />

  <mspace width="100px" />

</math>
```

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mspace', 'mspace') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mspace', 'mspace') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweise zu Gecko

- Attribute zur Kontrolle des [Einzugs](http://www.w3.org/TR/MathML3/chapter3.html#presm.lbindent.attrs) Indentation attributes werden noch nicht unterstützt (für Gecko siehe {{ bug("534962") }}).
- `width` kann seit Gecko 23.0 {{geckoRelease("23.0")}} negative Werte haben.

## Siehe auch

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}

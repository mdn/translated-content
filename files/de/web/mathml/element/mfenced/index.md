---
title: <mfenced>
slug: Web/MathML/Element/mfenced
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mfenced
---
{{MathMLRef}}

Mit dem`<mfenced>`-Element kann in MathML eine Aufzählung mit öffnenenden und schließenden Zeichen (Klammern) und mit Trennzeichen (Kommas, Semikolons) versehen werden. (engl. to fence = umklammern)

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben auf einzelne Elemente.
- close
  - : Ein Zeichen oder eine Zeichenkette für das _schließende_ Trennzeichen. Ohne Angabe wird eine einfache schließende Klammer `")"` gesetzt. Leerzeichen innerhalb des Arguments werden ignoriert.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- open
  - : Ein Zeichen oder eine Zeichenkette für das _öffnende_ Trennzeichen. Ohne Angabe wird eine einfache öffnende Klammer `"("` gesetzt. Leerzeichen innerhalb des Arguments werden ignoriert.
- separators
  - : Eine Folge von null oder mehr Trennzeichen für den Ausdruck. Mögliche Leerzeichen zwischen den Trennzeichen werden für die Ausgabe ignoriert. Der Vorgabewert ist das Komma ",". Werden mehrere Zeichen angegeben, dann werden diese in der Reihenfolge auf die Argumente des Ausdrucks angewandt. Überschüssige Trennzeichen werden ignoriert. Werden zu wenige Trennzeichen angegeben, dann wird das letzte bis zum Ende der Liste wiederholt.

## Beispiele

### Das letzte Trennzeichen wird wiederholt (`,`)

Beispieldarstellung: ![{a;b;c,d,e}](/files/3193/mfenced01.png)

Darstellung in Deinem Browser: <math><mfenced close="}" open separators=";;,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="{" close="}" separators=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

### Überschüssige Trennzeichen fallen weg (`,`)

Beispieldarstellung: ![[a|b|c|d|e]](/files/3195/mfenced02.png)

Darstellung in Deinem Browser: <math><mfenced close="]" open separators="||||,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="[" close="]" separators="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mfenced', 'mfenced') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mfenced', 'mfenced') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

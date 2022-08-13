---
title: <mtable>
slug: Web/MathML/Element/mtable
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mtable
---
{{MathMLRef}}

Das `<mtable>`-Element wird genutzt, um in MathML Tabellen und Matrizen darzustellen und Gleichungen korrekt untereinander anzuordnen. Innerhalb von `<mtable>` sind nur {{ MathMLElement("mtr") }}-Elemente für die Zeilen der Tabelle und innerhalb dieser Zeilen nur {{ MathMLElement("mtd") }}-Elemente für die Zellen erlaubt. Diese Elemente ähneln {{ HTMLElement("table") }} , {{ HTMLElement("tr") }} und {{ HTMLElement("td") }} in [HTML](/de/docs/HTML).

> **Note:**`<mtable>` setzt das Attribut `displaystyle` auf `false` zurück. Für den Einsatz in einem inline-block könnte `<mtable displaystyle="true">...</mtable> sinnvoll sein`.

## Attribute

- align
  - : Gibt die _vertikale_ Ausrichtung der Tabelle im Bezug auf die Umgebung an.
    Mögliche Werte sind:\* `axis` (Vorgabewert): Die vertikale Mitte (das Minuszeichen) liegt auf der Höhe der Achse der Umgebung.
    - `baseline`: Die vertikele Mitte der Tabelle liegt auf der Höhe der Grundlinie der Umgebung.
    - `bottom`: Der untere Rand der Tabelle liegt auf der Höhe der Grundlinie der Umgebung.
    - `center`: gleichbedeutend mit `baseline`.
    - `top`: Der obere Rand der Tabelle liegt auf der Höhe der Grundlinie der Umgebung.Darüberhinaus können die Werte des Attributes von `align` auch mit einer Zeilennummer enden, z.B. `align="center 3"`. Dadurch wird die angegebene _Tabellenzeile_ und nicht die Tabelle als ganzes an der Umgebung ausgerichtet. Bei Angabe einer negativen, ganzen Zahl werden die Tabellenzeilen von unten nach oben gezählt.
- alignmentscope
  - : {{ unimplemented_inline() }}
- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben auf einzelne Elemente.
- columnalign
  - : Gibt die _horizontale_ Ausrichtung des Inhalts der Tabellenzellen an. Die Angabe mehrerer Werte ist erlaubt, diese werden in der angegebenen Reihenfolge auf die Spalten angewandt (z.B. `columnalign="left right center"`). Mögliche Werte sind `left`, `center` (default) und `right`.
- columnlines
  - : Gibt die Umrandung der Spalten an. Die Angabe mehrerer Werte ist erlaubt, diese werden dann der Reihe nach auf die Spalten angewandt, (z.B. `columnlines="none none solid"`). Mögliche Werte sind `none` (default), `solid` und `dashed`.
- columnspacing
  - : Gibt den Zwischenraum zwischen den Tabellenspalten an.
- {{ unimplemented_inline() }} columnwidth
  - : Gibt die Breite der Tabellenspalten an.
- displaystyle
  - : Ein Boolescher Wert für den Darstellungsstil einer Gleichung. Bei `true` wird zusätzlicher vertikaler Zwischenraum eingefügt; bei `false` wird die Formel dagegen kompakter dargestellt. Der hauptsächliche Effekt besteht darin, dass größere Versionen der Operatoren angezeigt werden, falls `displaystyle` auf `true` gesetzt ist. Siehe auch `largeop` and `movablelimits` bei [`<mo>`](https://developer.mozilla.org/de/docs/Web/MathML/Element/mo "<mo>").
- {{ unimplemented_inline() }} equalcolumns
  - : Ein Boolescher Wert, mit dem erzwungen werden kann, dass alle Spalten die gleiche Breite haben. Der Vorgabewert ist `false`.
- {{ unimplemented_inline() }} equalrows
  - : Ein Boolescher Wert, mit dem erzwungen werden kann, dass alle Zeilen die gleiche Höhe haben. Der Vorgabewert ist `false`.
- frame
  - : Dieses Attribut bestimmt die Umrandung der Tabelle als ganzes. Mögliche Werte sind `none` (default), `solid` und `dashed`.
- framespacing
  - : Dieses Attribut gibt an, welcher zusätzliche Abstand zwischen der Tabelle und ihrer Umrandung (`frame`) eingefügt wird. Diese Angabe wirkt nur, sofern `frame` nicht `none` ist. Der erste Wert betrifft den linken und rechten Abstand, der zweite den Abstand nach oben und unten. Vorgabewerte sind `.4em .5ex`.
- groupalign
  - : {{ unimplemented_inline() }}
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- {{ unimplemented_inline() }} minlabelspacing
  - : Eine Längenangabe für den Mindestabstand zwischen [label](/de/docs/MathML/Element/mlabeledtr) und der angrenzenden Zelle.
- rowalign
  - : Gibt die _vertikale_ Ausrichtung des Inhalts der Tabellenzellen an. Die Angabe mehrerer Werte ist erlaubt, diese werden dann in der angegebenen Reihenfolge auf die Zeilen angewandt, (z.B. `rowalign="top bottom axis"`). Mögliche Werte sind `axis`, `baseline` (default), `bottom`, `center` und `top`.
- rowlines
  - : Legt die Umrandung der Tabellenzeilen fest. Die Angabe mehrerer Werte ist erlaubt, diese werden dann der Reihe nach auf die Zeilen angewandt, (z.B. `rowlines="none none solid"`). Mögliche Werte sind `none` (default), `solid` und `dashed`.
- {{ unimplemented_inline() }} rowspacing
  - : Gibt den Zwischenraum zwischen den Zeilen der Tabelle an.
- {{ unimplemented_inline() }} side
  - : Specifies the position where {{ MathMLElement("mlabeledtr") }} label elements should be placed. Possible values are: `left`, `right` (default), `leftoverlap` and `rightoverlap`.
- width
  - : Legt die Breite der Tabelle fest. Siehe [Maßangaben](/de/docs/Web/MathML/Attribute/Werte) für mögliche Werte.

## Beispiele

### Vertikale Ausrichtung mit Zeilennummer

![](/files/3295/mtable-1.png)

```html
<math>

    <mi>X</mi>
    <mo>=</mo>
    <mtable frame="solid" rowlines="solid" align="axis 3">
        <mtr>
             <mtd><mi>A</mi></mtd>
             <mtd><mi>B</mi></mtd>
        </mtr>
        <mtr>
             <mtd><mi>C</mi></mtd>
             <mtd><mi>D</mi></mtd>
        </mtr>
        <mtr>
             <mtd><mi>E</mi></mtd>
             <mtd><mi>F</mi></mtd>
        </mtr>
    </mtable>

</math>
```

## Spezifikationen

| Standard                                                                                 | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mtable', 'mtable') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mtable', 'mtable') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mtd") }} (Table cell)
- {{ MathMLElement("mtr") }} (Table row)

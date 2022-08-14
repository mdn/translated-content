---
title: <mo>
slug: Web/MathML/Element/mo
tags:
  - MathML
  - MathML:Element
  - NeedsLiveSample
  - Referenz
translation_of: Web/MathML/Element/mo
---
{{MathMLRef}}

Das Element `<mo>` stellt einen Operator dar. Neben Rechenzeichen im strengen mathmatischen Sinne gehören dazu auch Klammern, Trennzeichen wie Kommas oder Semikolons und Betragszeichen.

## Attribute

- accent
  - : Ein Boolescher Wert, der festlegt, ob das Rechenzeichen als Akzentzeichen behandelt werden soll, falls der Operator als [underscript](/de/docs/MathML/Element/munder) oder [overscript](/de/docs/MathML/Element/mover) markiert wurde. Erlaubte Werte sind `true` und `false`.
- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- dir
  - : Allgemeine Schreibrichtung für die Formeln. Mögliche Werte sind `ltr` (left to right, von links nach rechts) und `rtl` (right to left, von rechts nach links).
- fence
  - : Boolescher Wert, der festlegt, ob der Operator eine Begrenzung (z.B. ein Paar Klammern) ist. Dieses Attribut wird selbst nicht bildlich dargestellt. Erlaubte Werte sind `true` und `false`. Siehe auch [`separator`](#separator).
- {{ unimplemented_inline() }} form
  - : Legt die Funktion des Operators in z.B. einem Klammerausdruck fest. Die Angabe beeinflusst horizontale Abstände und andere Eigenschaften. Für die meisten Rechenzeichen (+, - usw.) brauchst Du dieses Attribut dank passender Vorgabewerte nicht explizit zu setzen.
    Mögliche Werte sind:\* `prefix`, für öffnende Begrenzer. (Vorgabewert, falls der Operator das _erste_ Argument in einem {{ MathMLElement("mrow") }} Element mit mehr als einem Argument.)
    - `infix`, für Trenner. (Vorgabewert, falls der Operator nicht innerhalb von {{ MathMLElement("mrow") }} auftritt.)
    - `postfix`, für schließende Begrenzer. (Vorgabewert, falls der Operator das _letzte_ Argument in einem {{ MathMLElement("mrow") }} Element mit mehr als einem Argument.)
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- largeop
  - : Legt fest, ob das Rechenzeichen größer als üblich dargestellt werden soll. Erlaubte Werte sind `true` und `false`.
- lspace
  - : Bestimmt die Breite des Leerzeichens _vor_ einem Rechenzeichen. (Siehe [Maßangaben](/de/docs/Web/MathML/Attribute/Werte) für mögliche Werte, Vorgabewert ist die Konstante `thickmathspace` = 5/18em.) Siehe auch [`rspace`](#rspace).
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathsize
  - : Die Größe (Höhe) des Inhalts. Möglich sind diese Angaben:\* `small`: Die Schrift wird kleiner dargestellt als die aktuelle Schrifthöhe.
    - `normal`: Dies entspricht 100% des aktuellen Schriftgrades = 1em.
    - `big`: Die Schrift wird größer dargestellt als die aktuelle Schrifthöhe.
    - Eine Längenangabe (siehe [length](/de/docs/Web/CSS/length)).
    - Ein einheitenloser Wert der als Faktor auf die aktuelle Schrifthöhe interpretiert wird.
- mathvariant

  - : Dieses Attribut bezeichnet die logische Klasse des Operators. Mit der logischen Klasse ist in der Regel eine bestimmte Typographie verbunden, in erster Linie ist dies aber aber eine semantische Einteilung. Abschnitte der gleichen Klasse werden gleichermaßen behandelt, was einen bestimmten Stil zur Folgen haben kann aber nicht muss. Die folgenden Werte sind erlaubt:\* `normal` (Standardwert) ;

        <math><mn mathvariant="normal">Beispiel</mn></math>

    - `bold` ;

      <math><mn mathvariant="bold">Beispiel</mn></math>

    - `italic` ;

      <math><mn mathvariant="italic">Beispiel</mn></math>

    - `bold-italic` ;

      <math><mn mathvariant="bold-italic">Beispiel</mn></math>\* `double-struck` ;

      <math><mn mathvariant="double-struck">Beispiel</mn></math>

    - `bold-fraktur` ;

      <math><mn mathvariant="bold-fraktur">Beispiel</mn></math>

    - `script` ;

      <math><mn mathvariant="script">Beispiel</mn></math>

    - `bold-script` ;

      <math><mn mathvariant="bold-script">Beispiel</mn></math>

    - `fraktur` ;

      <math><mn mathvariant="fraktur">Beispiel</mn></math>\* `sans-serif` ;

      <math><mn mathvariant="sans-serif">Beispiel</mn></math>

    - `bold-sans-serif` ;

      <math><mn mathvariant="bold-sans-serif">Beispiel</mn></math>

    - `sans-serif-italic` ;

      <math><mn mathvariant="sans-serif-italic">Beispiel</mn></math>

    - `sans-serif-bold-italic` ;

      <math><mn mathvariant="sans-serif-bold-italic">Beispiel</mn></math>

    - `monospace` ;

      <math><mn mathvariant="monospace">Beispiel</mn></math>Die folgenden vier Werte betreffen nur arabische Schriften:\* `initial` ;

      <math><mn mathvariant="initial">مثال</mn></math>

    - `tailed` ;

      <math><mn mathvariant="tailed">مثال</mn></math>

    - `looped` ;

      <math><mn mathvariant="looped">مثال</mn></math>

    - `stretched` ;

      <math><mn mathvariant="stretched">مثال</mn></math>

<!---->

- maxsize
  - : Falls [`stretchy`](#stretchy) auf `true` gesetzt ist, dann gibt `maxsize` die _maximale_ Größe des Operators an. Erlaubte Werte sind `infinity` und eine [Längenangabe](/de/docs/MathML/Attributes/Values#Lengths).
- minsize
  - : Falls [`stretchy`](#stretchy) auf `true` gesetzt ist, dann gibt `minsize` die _minimale_ Größe des Operators an. Erlaubte Werte sind `infinity` und eine [Längenangabe](/de/docs/MathML/Attributes/Values#Lengths).
- movablelimits
  - : Falls `displaystyle` auf `false` gesetzt ist, dann gibt `moveblelimits` an, ob `underscripts` und `overscripts` an den Positionen von `subcripts` bzw. `superscripts` angezeigt werden. Erlaubte Werte sind `true` und `false`.
- rspace
  - : Bestimmt die Breite des Leerzeichens _nach_ einem Operator. (Siehe [Maßangaben](/de/docs/Web/MathML/Attribute/Werte) für mögliche Werte, Vorgabewert ist die Konstante `thickmathspace` = 5/18em.) Siehe auch `lspace.`
- separator
  - : Dieses Attribut bestimmt, ob der Operator ein Trennzeichen (z.B. ein Komma ist). Das Attribut selbst wird nicht dargestellt. Erlaubte Werte sind `true` und `false`. Siehe auch [`fence`](#fence).
- stretchy
  - : Gibt an, ob der Operator an die Größe der benachbarten Elemente angepasst (vergrößert) wird. Erlaubte Werte sind `true` und `false`.
- symmetric
  - : Falls [`stretchy`](#stretchy) auf `true` gesetzt ist, dann gibt `symmetric` an, ob der Operator (z.B. ein Bruchstrich) vertikal an der imaginären Mittellinie ausgerichtet wird. Falls `stretchy` auf `true` gesetzt gesetzt ist, dann ist der Vorgabewert für `symmetric` ebenfalls `true`, ansonsten `false`.

## Beispiele

```html
<math>

  <mrow>
    <mn>5</mn>
    <mo>+</mo>
    <mn>5</mn>
  </mrow>

  <mrow>
    <mo> [ </mo> <!-- default form value: prefix -->
      <mrow>
        <mn> 0 </mn>
        <mo> ; </mo> <!-- default form value: infix -->
        <mn> 1 </mn>
      </mrow>
    <mo> ) </mo> <!-- default form value: postfix -->
  </mrow>

</math>
```

## Spezifikationen

| Standard                                                                     | Status                       | Comment               |
| ---------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mo', 'mo') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mo', 'mo') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweise zu Gecko

- Mit Gecko 16.0 {{ geckoRelease("16.0") }} wurden die Standardwerte für `lspace` und `rspace` korrigiert. Entsprechend der MathML3-Spezifikation ist der Vorgabewert jetzt 5/18em, das ist der Wert der Konstante `thickmathspace`.
- Seit Gecko 20.0 {{geckoRelease("20.0")}} sind einheitenlose Wertangaben für `mathsize` erlaubt.
- Einige `mathvariant` sind erst seit Gecko 28.0 (Firefox 28.0 / Thunderbird 28.0 / SeaMonkey 2.25) umgesetzt und erfordern passende [Schriftarten für MathML](/de/docs/Mozilla/MathML_Project/Fonts).
- Es sind noch keine Attribute für [Zeilenumbrüche](http://www.w3.org/TR/MathML3/chapter3.html#presm.lbattrs) oder [Einrückungen](http://www.w3.org/TR/MathML3/chapter3.html#presm.lbindent.attrs) implementiert. Siehe {{ bug("534962") }}.

---
title: <mi>
slug: Web/MathML/Element/mi
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mi
---
{{MathMLRef}}

Das Element `<mi>` bestimmt, dass sein Inhalt als Bezeichner (engl. identifier) dargestellt wird, also z.B. als Funktionsname, Variable oder Konstante. Es kann auch einen beliebigen Text, etwa zur Erläuterung eines Terms, enthalten.

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
- mathsize
  - : Die Größe (Höhe) des Inhalts. Möglich sind diese Angaben:\* `small`: Die Schrift wird kleiner dargestellt als die aktuelle Schrifthöhe.
    - `normal`: Dies entspricht 100% des aktuellen Schriftgrades = 1em.
    - `big`: Die Schrift wird größer dargestellt als die aktuelle Schrifthöhe.
    - Eine Längenangabe (siehe [length](/de/docs/Web/CSS/length)).
    - Ein einheitenloser Wert der als Faktor auf die aktuelle Schrifthöhe interpretiert wird.
- mathvariant

  - : Dieses Attribut bezeichnet die logische Klasse des Operators. Mit der logischen Klasse ist in der Regel eine bestimmte Typographie verbunden, in erster Linie ist dies aber aber eine semantische Einteilung. Abschnitte der gleichen Klasse werden gleichermaßen behandelt, was einen bestimmten Stil zur Folgen haben kann aber nicht muss. Die folgenden Werte sind erlaubt:\* `normal` (Standardwert für _mehr als ein Zeichen_) ;

        <math><mi mathvariant="normal">Example</mi></math>

    - `bold` ;

      <math><mi mathvariant="bold">Example</mi></math>

    - `italic` (Standardwert für _ein einzelnes Zeichen_) ;

      <math><mi mathvariant="italic">Example</mi></math>

    - `bold-italic` ;

      <math><mi mathvariant="bold-italic">Example</mi></math>\* `double-struck` ;

      <math><mi mathvariant="double-struck">Example</mi></math>

    - `bold-fraktur` ;

      <math><mi mathvariant="bold-fraktur">Example</mi></math>

    - `script` ;

      <math><mi mathvariant="script">Example</mi></math>

    - `bold-script` ;

      <math><mi mathvariant="bold-script">Example</mi></math>

    - `fraktur` ;

      <math><mi mathvariant="fraktur">Example</mi></math>\* `sans-serif` ;

      <math><mi mathvariant="sans-serif">Example</mi></math>

    - `bold-sans-serif` ;

      <math><mi mathvariant="bold-sans-serif">Example</mi></math>

    - `sans-serif-italic` ;

      <math><mi mathvariant="sans-serif-italic">Example</mi></math>

    - `sans-serif-bold-italic` ;

      <math><mi mathvariant="sans-serif-bold-italic">Example</mi></math>

    - `monospace` ;

      <math><mi mathvariant="monospace">Example</mi></math>Die folgenden vier Werte betreffen nur arabische Schriften:\* `initial` ;

      <math><mi mathvariant="initial">مثال</mi></math>

    - `tailed` ;

      <math><mi mathvariant="tailed">مثال</mi></math>

    - `looped` ;

      <math><mi mathvariant="looped">مثال</mi></math>

    - `stretched` ;

      <math><mi mathvariant="stretched">مثال</mi></math>

## Beispiele

```html
<math>

  <mi> y </mi>
  <mi> sin </mi>
  <mi mathvariant="monospace"> x </mi>
  <mi mathvariant="bold"> &pi; </mi>

</math>
```

## Spezifikationen

| Standard                                                                     | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mi', 'mi') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mi', 'mi') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweise zu Gecko

- Seit Gecko 20.0 {{geckoRelease("20.0")}} sind einheitenlose Wertangaben für `mathsize` erlaubt.
- Einige `mathvariant` sind erst seit Gecko 28.0 (Firefox 28.0 / Thunderbird 28.0 / SeaMonkey 2.25) umgesetzt und erfordern passende [Schriftarten für MathML](/de/docs/Mozilla/MathML_Project/Fonts).

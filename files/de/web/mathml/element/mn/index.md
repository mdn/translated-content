---
title: <mn>
slug: Web/MathML/Element/mn
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/mn
---
{{MathMLRef}}

Das Element `<mn>` stellt einen numerischen Wert dar. In der Regel ist das ein Zahlenwert, der als Trennzeichen Punkte oder Kommas enthalten kann. Zusätzliche sind beliebige Texte erlaubt, die einem Zahlenwert entsprechen, z.B. "zwölf".

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

  - : Dieses Attribut bezeichnet die logische Klasse der Zahl. Mit der logischen Klasse ist in der Regel eine bestimmte Typographie verbunden, in erster Linie ist dies aber aber eine semantische Einteilung. Abschnitte der gleichen Klasse werden gleichermaßen behandelt, was einen bestimmten Stil zur Folgen haben kann aber nicht muss. Die folgenden Werte sind erlaubt:\* `normal` (Standardwert) ;

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

## Beispiele

```html
<math>
  <mn>0</mn>
  <mn>1.337</mn>
  <mn>twelve</mn>
  <mn>XVI</mn>
  <mn>2e10</mn>
</math>
```

## Spezifikationen

| Standard                                                                     | Status                       | Bemerkung             |
| ---------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mn', 'mn') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mn', 'mn') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

## Hinweise zu Gecko

- Seit Gecko 20.0 {{geckoRelease("20.0")}} sind einheitenlose Wertangaben für `mathsize` erlaubt.
- Einige `mathvariant` sind erst seit Gecko 28.0 {{ geckoRelease("28.0") }} umgesetzt und erfordern passende [Schriftarten für MathML](/de/docs/Mozilla/MathML_Project/Fonts).

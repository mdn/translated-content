---
title: <menclose>
slug: Web/MathML/Element/menclose
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/menclose
---
{{MathMLRef}}

Das MathML-Element `<menclose>` stellt seinen Inhalt innerhalb einer Umrandung oder Notation dar, die mit dem Attribut `notation` festgelegt werden kann. (engl. to enclose = einschließen, umzäunen)

## Attribute

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben.
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29), [`#rrggbb`](https://developer.mozilla.org/de/docs/Web/CSS/Farben#rgb%28%29) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- notation
  - | : Eine Liste von Angaben, durch Leerzeichen getrennt. Alle Angaben werden unabhängig voneinander auf den Ausdruck angewandt, können sich also auch überlappen. Mögliche Werte sind: | Wert                                                                                               | Beispiel                                                                                                                                       | Darstellung in Deinem Browser                                                                                      | Beschreibung |
    | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------ |
    | `longdiv` (default)                                                                                                                                                                 | ![longdiv](/files/3167/default.png)                                                                | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | langer Bruchstrich                                                                                                 |
    | `actuarial`                                                                                                                                                                         | ![actuarial](/files/3168/actuarial.png)                                                            | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [actuarial symbol](http://en.wikipedia.org/wiki/Actuarial_notation)                                                |
    | `radical`                                                                                                                                                                           | ![radical](/files/3169/radical.png)                                                                | <math><menclose notation="radical"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Quadratwurzel                                                                                                      |
    | `box`                                                                                                                                                                               | ![box](/files/3170/box.png)                                                                        | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Rechteckige Umrandung                                                                                              |
    | `roundedbox`                                                                                                                                                                        | ![roundedbox](/files/3171/roundedbox.png)                                                          | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | Abgerundete, rechteckige Umrandung                                                                                 |
    | `circle`                                                                                                                                                                            | ![circle](/files/3172/circle.png)                                                                  | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreisähnliche Umrandung                                                                                            |
    | `left`                                                                                                                                                                              | ![left](/files/3173/left.png)                                                                      | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Senkrechte Linie links                                                                                             |
    | `right`                                                                                                                                                                             | ![right](/files/3174/right.png)                                                                    | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Senkrechte Linie rechts                                                                                            |
    | `top`                                                                                                                                                                               | ![top](/files/3175/top.png)                                                                        | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Waagerechte Linie oberhalb                                                                                         |
    | `bottom`                                                                                                                                                                            | ![bottom](/files/3176/bottom.png)                                                                  | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Waagerechte Linie unterhalb                                                                                        |
    | `updiagonalstrike`                                                                                                                                                                  | ![updiagonalstrike](/files/3177/updiagonalstrike.png)                                              | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Von links unten nach rechts oben durchgestrichen                                                                   |
    | `downdiagonalstrike`                                                                                                                                                                | ![downdiagonalstrike](/files/3178/downdiagonalstrike.png)                                          | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Von oben links nach unten rechts durchgestrichen                                                                   |
    | `verticalstrike`                                                                                                                                                                    | ![verticalstrike](/files/3179/verticalstrike.png)                                                  | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | Von oben nach unten durchgestrichen                                                                                |
    | `horizontalstrike`                                                                                                                                                                  | ![horizontalstrike](/files/3180/horizontalstrike.png)                                              | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Waagerecht durchgestrichen                                                                                         |
    | `madruwb`                                                                                                                                                                           | ![madruwb](/files/3181/madruwb.png)                                                                | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabic factorial symbol](http://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`                                                                                                                                                                   | ![](https://mdn.mozillademos.org/files/6255/updiagonalarrow.png)                                   | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | Pfeil diagonal von links unten nach rechts oben                                                                    |
    | `phasorangle`                                                                                                                                                                       | ![Screenshot of the phasorangle notation](https://mdn.mozillademos.org/files/7851/phasorangle.png) | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | phasor angle                                                                                                       |

## Beispiele

```html
<math>

  <menclose notation="circle box">
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
  </menclose>

</math>
```

## Spezifikationen

| Standard                                                                                     | Status                       | Bemerkung             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.menclose', 'menclose') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.menclose', 'menclose') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

\[1] See [bug 85733](https://bugs.webkit.org/show_bug.cgi?id=85733).

## Hinweise zu Gecko

- Diese möglichen Werte für `notation` wurden später hinzugefügt:

  - `madruwb` in Gecko 2.0 {{GeckoRelease("2.0")}}.
  - `updiagonalarrow` in Gecko 24.0 {{GeckoRelease("24.0")}}
  - `phasorangle` in Gecko 32.0 {{GeckoRelease("32.0")}}

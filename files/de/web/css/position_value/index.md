---
title: <position>
slug: Web/CSS/position_value
tags:
  - CSS
  - CSS Datentyp
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/position_value
---
{{CSSRef}}

## Übersicht

Der `<position>` [CSS](/de/docs/Web/CSS) Datentyp beschreibt eine Koordinate im 2D-Raum, die dazu verwendet wird, die Position relativ zu einer Box zu setzen.

![](/files/3797/position_type.png)Eine bestimmte Position kann durch zwei Schlüsselwörter mit bestimmten Versätzen angegeben werden. Ein Schlüsselwort repräsentiert einen Rand der Elementbox oder die Mittellinie zwischen zwei Rändern: `left`, `right`, `top`, `bottom` oder `center` (was entweder die Mitte zwischen dem linken und rechten Rand repräsentiert oder die Mitte zwischen dem oberen und unteren Rand, abhängig vom Kontext).

{{experimental_inline}}Ein Versatz kann entweder ein relativer Wert sein, ausgedrückt durch einen {{cssxref("&lt;percentage&gt;")}} Wert, oder ein absoluter {{cssxref("&lt;length&gt;")}} Wert. Positive Werte werden nach rechts oder unten versetzt, je nachdem, was zutrifft. Negative Werte werden in die anderen Richtungen versetzt.

Die endgültige Position, die durch den `<position>` Wert beschrieben wird, muss nicht innerhalb der Elementbox liegen.

Falls ein Versatz ohne zugehöriges Schlüsselwort angegeben wurde, wird für es `center` angenommen.

## Interpolation

Die Werte für die Abzisse und die Ordinate werden unabhängig voneinander interpoliert. Da die Geschwindigkeit für beide durch dieselbe {{cssxref("&lt;timing-function&gt;")}} definiert wird, folgt der Punkt einer Linie.

## Werte

```css
/* 1-Wert-Syntax */
Schlüsselwort                  /* Der zugehörige Rand, die andere Richtung verweist auf center, die Mitte des Randes. */
<length> oder <percentage> /* Die Position auf der x-Achse, 50% für die y-Achse. */

/* 2-Werte-Syntax */
Schlüsselwort Schlüsselwort          /* Ein Schlüsselwort für jede Richtung, die Reihenfolge ist unwichtig. */
Schlüsselwort Wert            /* Der Wert ist der Versatz für den Rand, der durch das Schlüsselwort definiert wird. */
```

### Formale Syntax

    [ [ left | center | right | top | bottom | <percentage> | <length> ] |
                      [ left | center | right | <percentage> | <length> ] [ top | center | bottom | <percentage> | <length> ] |
                      [ center | [ left | right ] [ <percentage> | <length> ]? ] &&
                      [ center | [ top | bottom ] [ <percentage> | <length> ]? ]
                    ]

## Spezifikationen

| Spezifikation                                                                                                    | Status                                   | Kommentar                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Values', '#position', '&lt;position&gt;')}}                                 | {{Spec2('CSS3 Values')}}         | Listed die Links zu beiden Definitionen auf mit der Voraussetzung, dass diese koherent sind: falls {{SpecName('CSS3 Backgrounds')}} unterstützt wird, muss deren Definition von `<position>` ebenfalls verwendet werden. |
| {{SpecName('CSS3 Backgrounds', '#position', '&lt;position&gt;')}}                         | {{Spec2('CSS3 Backgrounds')}} | Definiert `<position>` explizit und erweitert es um die Unterstützung von Versätzen von einem beliebigen Rand.                                                                                                                       |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-position', '&lt;position&gt;')}} | {{Spec2('CSS2.1')}}                 | Erlaubt die Kombination von einem Schlüsselwort mit einem {{cssxref("&lt;length&gt;")}} oder einem {{cssxref("&lt;percentage&gt;")}} Wert.                                                                     |
| {{SpecName('CSS1', '#background-position', '&lt;position&gt;')}}                             | {{Spec2('CSS1')}}                 | Definiert `<position>` anonym als Wert von {{cssxref("background-position")}}.                                                                                                                                             |

## Browser Kompatibilität

{{Compat("css.types.position")}}

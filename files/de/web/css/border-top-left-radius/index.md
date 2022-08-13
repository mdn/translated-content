---
title: border-top-left-radius
slug: Web/CSS/border-top-left-radius
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-top-left-radius
---
{{ CSSRef }}

## Übersicht

Die `border-top-left-radius` Eigenschaft die Abrundung der oberen, linken Ecke eines Elements fest.

Vor Gecko 2.0 (Firefox 4.0) war diese Eigenschaft als `-moz-border-radius-topleft` bekannt. Diese Eigenschaft wird weiterhin übergangsweise unterstützt.

Weitere Informationen sind unter [`border-radius`](/de/CSS/border-radius "de/CSS/border-radius") verfügbar.

{{cssinfo("border-top-left-radius")}}

## Syntax

    Formal syntax: {{csssyntax("border-top-left-radius")}}
    -moz-border-radius-topleft: [ <Länge> | <Prozentzahl> ] [ <Länge> | <Prozentzahl> ]?
         border-top-left-radius:[ <Länge> | <Prozentzahl> ] [ <Länge> | <Prozentzahl> ]?

## Werte

Seit Gecko 1.9.1 (Firefox 3.5) wird ein zweiter, optionaler Wert unterstützt, welcher Längenwerte für elliptische Ecken akzeptiert. Es gibt zwei Werte, die die Form der Ecke beschreiben: Der erste Wert ist der horizontale, der zweite Wert der vertikale Radius. Wird nur ein Wert angegeben, gilt dieser für beide Richtungen (horizontal und vertikal).

- \<Länge>
  - : Siehe [Längen](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") für mögliche Einheiten.
- \<Prozentzahl>
  - : In Gecko 2.0 (Firefox 4.0):
    Prozentuale Angaben für den horizontalen Radius beziehen sich auf die Breite der Box. Die Prozentzahl für den vertikalen Radius ist allerdings relativ zur Höhe der Box.
    In vorherigen Gecko- & Firefox-Versionen:
    {{ non-standard_inline() }} Eine prozentuale Angabe, die sich auf die Breite der Box bezieht. Die Prozentzahl ist selbst dann relativ zur Breite, wenn ein Radius für die Höhe festgelegt wird.

## Beispiele

    div { -moz-border-radius-topleft:  20px;  /* Firefox bis Version 3.6 */
       -webkit-border-top-left-radius: 20px;  /* Safari, Chrome (vor WebKit Version 533) */
               border-top-left-radius: 20px;  /* Firefox 4; Browser mit CSS3 Unterstützung */
    }

<!---->

    /* Elliptische Ecke (unterstützt seit Firefox 3.5 [Gecko 1.9.1]) */

    div { -moz-border-radius-topleft:   20px;       /* Runde Ecke, Fallback für Firefox 1-3.0 */
          -moz-border-radius-topleft:   20px 10px;  /* elliptischer Rahmen für Firefox 3.5-3.6 */
        -webkit-border-top-left-radius: 20px 10px;  /* Safari, Chrome (vor WebKit Version 532.5) */
                border-top-left-radius: 20px 10px;  /* Firefox 4; Browser mit CSS3 Unterstützung */
    }

## Spezifikation

| Spezifikation                                                                                                    | Status                                   | Kommentar          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------ |
| {{SpecName('CSS3 Backgrounds', '#border-top-left-radius', 'border-top-left-radius')}} | {{Spec2('CSS3 Backgrounds')}} | Initial definition |

{{cssinfo}}

## Browser Kompatibilität

{{Compat("css.properties.border-top-left-radius")}}

## Siehe auch

- [`border-radius`](/de/CSS/border-radius "de/CSS/border-radius")

{{ languages( { "en": "en/CSS/border-top-left-radius", "fr": "fr/CSS/border-top-left-radius", "ja": "ja/CSS/border-top-left-radius", "pl": "pl/CSS/-moz-border-radius-topleft" } ) }}

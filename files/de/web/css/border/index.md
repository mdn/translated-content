---
title: border
slug: Web/CSS/border
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Rahmen
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/border
---
{{CSSRef("CSS Borders")}}

## Übersicht

Die `border` Eigenschaft legt den kompletten Rahmen eines Elementes fest und ist eine Kurzform für
[`border-color`](/de/CSS/border-color "de/CSS/border-color"), [`border-style`](/de/CSS/border-style "de/CSS/border-style") und [`border-width`](/de/CSS/border-width "de/CSS/border-width"). Die Werte der drei Eigenschaften können in beliebiger Reihenfolge angegeben werden.
Unterschiedliche Einstellungen für den oberen, unteren, linken und rechten Rahmen können nur unter den Kurzformen
[`border-bottom`](/de/CSS/border-bottom "de/CSS/border-bottom"), [`border-top`](/de/CSS/border-top "de/CSS/border-top"), [`border-left`](/de/CSS/border-left "de/CSS/border-left") und [`border-right`](/de/CSS/border-right "de/CSS/border-right") festgelegt werden.

{{cssinfo}}

## Syntax

    border: 1px;
    border: 2px dotted;
    border: medium dashed green;

### Werte

- \<Rahmenbreite>
  - : Optional. Wenn nichts festgelegt ist, wird `medium` verwendet. Siehe: [`border-width`](/de/CSS/border-width "de/CSS/border-width").
- \<Rahmenstil>
  - : Erforderlich. Wenn nichts festgelegt ist, wird `none` verwendet. Siehe: [`border-style`](/de/CSS/border-style "de/CSS/border-style").
- \<Rahmenfarbe>
  - : Optional. Wenn nichts festgelegt ist, wird der Wert der `color` Eigenschaft des Elements genommen. Siehe: [`border-color`](/de/CSS/border-color "de/CSS/border-color").
- inherit
  - : Der Wert des Elternelements wird geerbt.

### Formale Syntax

{{csssyntax}}

## Beispiele

[Live Beispiel](/samples/cssref/border.html)

      border: dashed;           /* gestrichelter Rahmen mit mittlerer Breite und gleicher Farbe wie der Text */
      border: dotted 1.5em;     /* gestrichelt, 1.5em breit, gleiche Farbe wie der Text */
      border: solid red;        /* durchgezogener, roter Rahmen mit mittelgroßer Breite */
      border: solid blue 10px;  /* durchgezogene Linie, blaue Farbe, 10px Breite */

## Spezifikation

| Spezifikation                                                                                    | Status                                   | Argument                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-shorthands', 'border')}}     | {{Spec2('CSS3 Backgrounds')}} | Technically removes the support for `transparent` as it is now a valid {{cssxref("&lt;color&gt;")}}; this has no practical influence. Though it cannot be set to another value using the shorthand, `border` does now reset {{cssxref("border-image")}} to its initial value (`none`). |
| {{SpecName('CSS2.1', 'box.html#border-shorthand-properties', 'border')}} | {{Spec2('CSS2.1')}}                 | Accepts the `inherit` keyword. Also accepts `transparent` as a valid color.                                                                                                                                                                                                                             |
| {{SpecName('CSS1', '#border', 'border')}}                                         | {{Spec2('CSS1')}}                 |                                                                                                                                                                                                                                                                                                         |

## Browser Kompatibilität

{{Compat("css.properties.border")}}

## Siehe auch

- [`border-color`](/de/CSS/border-color "de/CSS/border-color"), [`border-style`](/de/CSS/border-style "de/CSS/border-style"), [`border-width`](/de/CSS/border-width "de/CSS/border-width")
- [`border-bottom`](/de/CSS/border-bottom "de/CSS/border-bottom"), [`border-top`](/de/CSS/border-top "de/CSS/border-top"), [`border-left`](/de/CSS/border-left "de/CSS/border-left"), [`border-right`](/de/CSS/border-right "de/CSS/border-right")
- [`-moz-border-bottom-colors`](/de/CSS/-moz-border-bottom-colors "de/CSS/-moz-border-bottom-colors"), [`-moz-border-top-colors`](/de/CSS/-moz-border-top-colors "de/CSS/-moz-border-top-colors"), [`-moz-border-left-colors`](/de/CSS/-moz-border-left-colors "de/CSS/-moz-border-left-colors"), [`-moz-border-right-colors`](/de/CSS/-moz-border-right-colors "de/CSS/-moz-border-right-colors"),
- [`-moz-border-image`](/de/CSS/-moz-border-image "de/CSS/-moz-border-image"), [`-moz-border-radius`](/de/CSS/border-radius "de/CSS/-moz-border-radius")

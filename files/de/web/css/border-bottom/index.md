---
title: border-bottom
slug: Web/CSS/border-bottom
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Rahmen
  - Referenz
translation_of: Web/CSS/border-bottom
---
{{ CSSRef("CSS Borders") }}

## Übersicht

Die `border-bottom` Eigenschaft legt den unteren Rahmen eines Elementes fest und ist eine Kurzform für
[`border-bottom-color`](/de/CSS/border-bottom-color "de/CSS/border-bottom-color"), [`border-bottom-style`](/de/CSS/border-bottom-style "de/CSS/border-bottom-style") und [`border-bottom-width`](/De/CSS/Border-bottom-width "De/CSS/Border-bottom-width"). Die Werte der drei Eigenschaften können in beliebiger Reihenfolge angegeben werden.

{{cssinfo}}

## Syntax

{{csssyntax}}

### Werte

- \<Rahmenbreite>
  - : Optional. Wenn nichts festgelegt ist, wird `medium` verwendet. Siehe: [`border-bottom-width`](/De/CSS/Border-bottom-width "De/CSS/Border-bottom-width").
- \<Rahmenstil>
  - : Erforderlich. Wenn nichts festgelegt ist, wird `none` verwendet. Siehe: [`border-bottom-style`](/de/CSS/border-bottom-style "de/CSS/border-bottom-style").
- \<Rahmenfarbe>
  - : Optional. Wenn nichts festgelegt ist, wird der Wert der `color` Eigenschaft des Elements genommen. Siehe: [`border-bottom-color`](/de/CSS/border-bottom-color "de/CSS/border-bottom-color").
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    .beispielEins {
      border-bottom: 1px solid #000;
    }

    .beispielZwei {
      border-bottom-style: dotted;
      border-bottom: thick green;

      /* Bedeutet das gleiche wie: */

      border-bottom-style: dotted;
      border-bottom: none thick green;

      /* border-bottom-style wird nach Angabe von border-bottom ignoriert.
      Es wird kein unterer Rahmen gezeichnet. */
    }

## Spezifikation

| Specification                                                                                        | Status                                   | Comment                                                                                                                       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Backgrounds', '#border-bottom', 'border-bottom') }}         | {{ Spec2('CSS3 Backgrounds') }} | No direct changes, though the modification of values for the {{ cssxref("border-bottom-color") }} do apply to it. |
| {{ SpecName('CSS2.1', 'box.html#propdef-border-bottom', 'border-bottom') }} | {{ Spec2('CSS2.1') }}             | No significant changes                                                                                                        |
| {{ SpecName('CSS1', '#border-bottom', 'border-bottom') }}                         | {{ Spec2('CSS1') }}                 |                                                                                                                               |

## Browser Kompatibilität

{{Compat("css.properties.border-bottom")}}

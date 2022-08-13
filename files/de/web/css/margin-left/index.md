---
title: margin-left
slug: Web/CSS/margin-left
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/margin-left
---
{{ CSSRef() }}

## Übersicht

Die `margin-left` Eigenschaft legt den linken Außenabstand eines Elements fest. Negative Werte sind erlaubt.

- Standardwert: `0`
- Anwendbar auf: alle Elemente, in Tabellen nur auf Elemente mit [display](/de/CSS/display "de/CSS/display") `table`, `table-caption` und `inline-table`
- Vererbbar: Nein
- Prozentwerte: beziehen sich immer auf die [Breite](/de/CSS/width "de/CSS/width") des umschließenden Blocks.
- Medium: visuell
- berechneter Wert: eine Prozentzahl wie festgelegt oder die absolute Länge.

## Syntax

    margin-left: <Längenangabe> | <Prozentzahl> | auto | inherit

### Werte

- \<Längenangabe>
  - : Legt eine bestimmte [Länge](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") fest. Negative Werte sind erlaubt.
- \<Prozentzahl>
  - : Ein [prozentualer](/de/CSS/Einheiten#Prozent "de/CSS/Einheiten#Prozent") Wert, der sich auf die Breite des umschließenden Blocks (_containing block_) bezieht. Negative Werte sind erlaubt.
- auto
  - : `auto` wird von einem passendem Wert ersetzt, wobei die horizontalen bzw. vertikalen Dimensionen berücksichtigt werden.
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    .content { margin-left: 5%; }
    .sidebox { margin-left: 10px; }
    .logo    { margin-left: -5px; }

## Browser Kompatibilität

| Browser           | ab Version | `auto` Wert       |
| ----------------- | ---------- | ----------------- |
| Internet Explorer | 3.0        | 6.0 (strict mode) |
| Firefox (Gecko)   | 1.0 (1.0)  | 1.0 (1.0)         |
| Opera             | 3.5        | 3.5               |
| Safari (WebKit)   | 1.0 (85)   | 1.0 (85)          |

## Spezifikation

- [CSS 2.1 Visual formatting #margin](http://www.w3.org/TR/CSS21/box.html#margin-properties)

## Siehe auch

- [`margin`](/de/CSS/margin "de/CSS/margin"), [`margin-right`](/de/CSS/margin-right "de/CSS/margin-right"), [`margin-bottom`](/de/CSS/margin-bottom "de/CSS/margin-bottom"), [`margin-top`](/de/CSS/margin-top "de/CSS/margin-top")
- [`-moz-margin-start`](/de/CSS/-moz-margin-start "de/CSS/-moz-margin-start"), [`-moz-margin-end`](/de/CSS/-moz-margin-end "de/CSS/-moz-margin-end")
- [`padding`](/de/CSS/padding "de/CSS/padding")

{{ languages( { "en": "en/CSS/margin-left", "ja": "ja/CSS/margin-left" } ) }}

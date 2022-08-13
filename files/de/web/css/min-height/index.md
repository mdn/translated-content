---
title: min-height
slug: Web/CSS/min-height
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/min-height
---
{{ CSSRef() }}

## Übersicht

Die `min-height` Eigenschaft wird verwendet, um die minimale Höhe eines Elements festzulegen. Das verhindert, dass der benutzte Wert der [`height`](/de/CSS/height "de/CSS/height") Eigenschaft nicht kleiner wird als der festgelegte Wert von `min-height`.

Hinweis: `min-height` überschreibt sowohl [`height`](/de/CSS/height "de/CSS/height"), als auch [`max-height`](/de/CSS/max-height "de/CSS/max-height").

- Standardwert: `0`
- Anwendbar auf: Blockelemente und ersetzte Elemente
- Vererbbar: Nein
- Prozentwerte: beziehen sich auf die Höhe des umschließenden Blocks
- Medium: visuell
- berechneter Wert: die Prozentzahl wie festgelegt oder die absolute Länge

## Syntax

    min-height:  <Längenangabe> | <Prozentzahl> | inherit

### Werte

- \<Längenangabe>
  - : Siehe [Länge](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") für mögliche Einheiten.
- Prozentzahl
  - : Eine [prozentuale](/de/CSS/Einheiten#Prozent "de/CSS/Einheiten#Prozent") Angabe, die sich auf die Höhe des umschließenden Blocks bezieht.
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    table { min-height: 75%; }
    form  { min-height: 0; }

## Browser Kompatibilität

| Browser           | ab Version                         |
| ----------------- | ---------------------------------- |
| Internet Explorer | **7.0**                            |
| Firefox (Gecko)   | **1.0** (1.0)                      |
| Opera             | **4.0**                            |
| Safari (WebKit)   | **2.0.2** (416), vorher fehlerhaft |

## Spezifikation

- [CSS 2.1 Visual formatting #min-height](http://www.w3.org/TR/CSS21/visudet.html#min-max-heights)

## Siehe auch

- [`height`](/de/CSS/height "de/CSS/height"), [`max-height`](/de/CSS/max-height "de/CSS/max-height")
- [`width`](/de/CSS/width "de/CSS/width"), [`max-width`](/de/CSS/max-width "de/CSS/max-width"), [`min-width`](/de/CSS/min-width "de/CSS/min-width")

{{ languages( { "en": "en/CSS/min-height", "es": "es/CSS/min-height", "fr": "fr/CSS/min-height" } ) }}

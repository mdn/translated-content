---
title: min-width
slug: Web/CSS/min-width
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/min-width
---
{{ CSSRef() }}

## Übersicht

Die `min-width` Eigenschaft wird verwendet, um die minimale Breite eines Elements festzulegen. Das verhindert, dass der benutzte Wert der [`width`](/de/CSS/width "de/CSS/width") Eigenschaft nicht kleiner wird als der festgelegte Wert von `min-width`.

Hinweis: `min-width` überschreibt sowohl [`width`](/de/CSS/width "de/CSS/width"), als auch [`max-width`](/de/CSS/max-width "de/CSS/max-width").

- Standardwert: `0`
- Anwendbar auf: Blockelemente und ersetzte Elemente, für \<table> siehe [Browser Kompatibilität](/de/CSS/min-width#Browser_Kompatibilit.c3.a4t "de/CSS/min-width#Browser_Kompatibilit.c3.a4t")
- Vererbbar: Nein
- Prozentwerte: beziehen sich auf die Breite des umschließenden Blocks
- Medium: visuell
- berechneter Wert: die Prozentzahl wie festgelegt oder die absolute Länge

## Syntax

    min-width:  <Längenangabe> | <Prozentzahl> | -moz-max-content | -moz-min-content | -moz-fit-content | -moz-available | inherit

### Werte

- \<Längenangabe>
  - : Siehe [Länge](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") für mögliche Einheiten.
- Prozentzahl
  - : Eine [prozentuale](/de/CSS/Einheiten#Prozent "de/CSS/Einheiten#Prozent") Angabe, die sich auf die Breite des umschließenden Blocks bezieht.
- inherit
  - : Der Wert des Elternelements wird geerbt.

#### Mozilla Erweiterungen

- \-moz-max-content
  - : {{ gecko_minversion_inline("1.9") }} Bevorzugte intrinsische Breite.
- \-moz-min-content
  - : {{ gecko_minversion_inline("1.9") }} Minimale intrinsische Breite.
- \-moz-available
  - : {{ gecko_minversion_inline("1.9") }} Die Breite des umschließenden Blocks minus horizontalen margin, padding und border Werten.
- \-moz-fit-content
  - : {{ gecko_minversion_inline("1.9") }} Gleichbedeutend zu `-moz-max-content.`

## Beispiele

    table { min-width: 75%; }
    form  { min-width: 0; }

## Browser Kompatibilität

| Browser           | ab Version                         | auf `<table>` anwendbar |
| ----------------- | ---------------------------------- | ----------------------- |
| Internet Explorer | **7.0**                            | nein                    |
| Firefox (Gecko)   | **1.0** (1.0)                      | ja                      |
| Opera             | **4.0**                            | ja                      |
| Safari (WebKit)   | **2.0.2** (416), vorher fehlerhaft | nein                    |

## Spezifikation

- [CSS 2.1 Visual formatting #min-width](http://www.w3.org/TR/CSS21/visudet.html#min-max-widths)

## Siehe auch

- [`width`](/de/CSS/width "de/CSS/width"), [`max-width`](/de/CSS/max-width "de/CSS/max-width")
- [`height`](/de/CSS/height "de/CSS/height"), [`min-height`](/de/CSS/min-height "de/CSS/min-height"), [`max-height`](/de/CSS/max-height "de/CSS/max-height")

{{ languages( { "en": "en/CSS/min-width", "es": "es/CSS/min-width", "fr": "fr/CSS/min-width", "ja": "ja/CSS/min-width" } ) }}

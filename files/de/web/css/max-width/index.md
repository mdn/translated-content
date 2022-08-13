---
title: max-width
slug: Web/CSS/max-width
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/max-width
---
{{ CSSRef() }}

## Übersicht

Die `max-width` Eigenschaft wird verwendet, um die maximale Breite eines Elements festzulegen. Das verhindert, dass der benutzte Wert der [`width`](/de/CSS/width "de/CSS/width") Eigenschaft nicht größer wird als der festgelegte Wert von `max-width`.

Hinweis: `max-width` überschreibt [`width`](/de/CSS/width "de/CSS/width"), allerdings überschreibt [`min-width`](/de/CSS/min-width "de/CSS/min-width") auch `max-width`.

- Standardwert: `none`
- Anwendbar auf: Blockelemente und ersetzte Elemente, für \<table> siehe [Browser Kompatibilität](/de/CSS/max-width#Browser_Kompatibilit.c3.a4t "de/CSS/max-width#Browser_Kompatibilit.c3.a4t")
- Vererbbar: Nein
- Prozentwerte: beziehen sich auf die Breite des umschließenden Blocks
- Medium: visuell
- berechneter Wert: die Prozentzahl wie festgelegt, die absolute Länge oder `none`

## Syntax

    max-width:  <Längenangabe> | <Prozentzahl> | none | -moz-max-content | -moz-min-content | -moz-fit-content | -moz-available | inherit

### Werte

- \<Längenangabe>
  - : Siehe [Länge](/de/CSS/Einheiten#L.c3.a4ngen "MDC") für mögliche Einheiten.
- Prozentzahl
  - : Eine [prozentuale](/de/CSS/Einheiten#Prozent "MDC") Angabe, die sich auf die Breite des umschließenden Blocks bezieht.
- none
  - : Das Element verfügt über keine maximale Breite.
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

    body  { max-width: 40em; }
    table { max-width: 75%; }
    form  { max-width: none; }

Beispiel 1 {{ gecko_minversion_inline("1.9") }}

    p { background: gold }

The Mozilla community produces a lot of great software.

Beispiel 2 {{ gecko_minversion_inline("1.9") }}

    p { background: lightgreen;
        max-width:  intrinsic;         /* Safari/WebKit */
        max-width:  -moz-max-content;  /* Firefox/Gecko */
      }

The Mozilla community produces a lot of great software.

Beispiel 3 {{ gecko_minversion_inline("1.9") }}

    p { background: lightblue;  max-width: -moz-min-content; }

The Mozilla community produces a lot of great software.

## Browser Kompatibilität

<table class="standard-table">
  <tbody>
    <tr>
      <th>Browser</th>
      <th>ab Version</th>
      <th>auf <code>&#x3C;table></code> anwendbar</th>
      <th colspan="2">intrinsische Breite</th>
      <th colspan="2">minimale intrinsische Breite</th>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td><strong>7.0</strong></td>
      <td>nein</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>Firefox (Gecko)</td>
      <td><strong>1.0</strong> (1.0)</td>
      <td>ja</td>
      <td>3.0 (1.9)</td>
      <td><code>-moz-max-content</code></td>
      <td>3.0 (1.9)</td>
      <td><code>-moz-min-content</code></td>
    </tr>
    <tr>
      <td>Opera</td>
      <td><strong>4.0</strong></td>
      <td>ja</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td><strong>2.0.2</strong> (416), vorher fehlerhaft</td>
      <td>nein</td>
      <td>2.0 (412) ?</td>
      <td><code>intrinsic</code></td>
      <td>---</td>
      <td>---</td>
    </tr>
  </tbody>
</table>

## Spezifikation

- [CSS 2.1 Visual formatting #max-width](http://www.w3.org/TR/CSS21/visudet.html#min-max-widths)

## Siehe auch

- [`width`](/de/CSS/width "de/CSS/width"), [`min-width`](/de/CSS/min-width "de/CSS/min-width")
- [`height`](/de/CSS/height "de/CSS/height"), [`min-height`](/de/CSS/min-height "de/CSS/min-height"), [`max-height`](/de/CSS/max-height "de/CSS/max-height")

{{ languages( { "en": "en/CSS/max-width", "es": "es/CSS/max-width", "fr": "fr/CSS/max-width" } ) }}

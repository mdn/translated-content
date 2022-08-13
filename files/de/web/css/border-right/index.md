---
title: border-right
slug: Web/CSS/border-right
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-right
---
{{ CSSRef() }}

### Übersicht:

Die `border-right` Eigenschaft legt den rechten Rahmen eines Elementes fest und ist eine Kurzform für
[`border-right-color`](/de/CSS/border-right-color "de/CSS/border-right-color"), [`border-right-style`](/de/CSS/border-right-style "de/CSS/border-right-style") und [`border-right-width`](/De/CSS/Border-right-width "De/CSS/Border-right-width"). Die Werte der drei Eigenschaften können in beliebiger Reihenfolge angegeben werden.

- Standardwert: siehe einzelne Eigenschaften
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: siehe einzelne Eigenschaften

### Syntax

    border-right: [ <Rahmenbreite> || <Rahmenstil> || <Rahmenfarbe> ] | inherit

### Werte

- \<Rahmenbreite>
  - : Optional. Wenn nichts festgelegt ist, wird `medium` verwendet. Siehe: [`border-right-width`](/De/CSS/Border-right-width "De/CSS/Border-right-width").
- \<Rahmenstil>
  - : Erforderlich. Wenn nichts festgelegt ist, wird `none` verwendet. Siehe: [`border-right-style`](/de/CSS/border-right-style "de/CSS/border-right-style").
- \<Rahmenfarbe>
  - : Optional. Wenn nichts festgelegt ist, wird der Wert der `color` Eigenschaft des Elements genommen. Siehe: [`border-right-color`](/de/CSS/border-right-color "de/CSS/border-right-color").
- inherit
  - : Der Wert des Elternelements wird geerbt.

### Beispiele

    .beispielEins {
      border-right: 1px solid #000;
    }

    .beispielZwei {
      border-right-style: dotted;
      border-right: thick green;

      /* Bedeutet das gleiche wie: */

      border-right-style: dotted;
      border-right: none thick green;

      /* border-right-style wird nach Angabe von border-right ignoriert.
      Es wird kein rechter Rahmen gezeichnet. */
    }

### Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

### Spezifikation

- [CSS 3 Background and Borders #border-right](http://www.w3.org/TR/css3-background/#border-right)
- [CSS 2.1 Box #border-right](http://www.w3.org/TR/CSS21/box.html#propdef-border-right)

### Siehe auch

- [`border-right-color`](/de/CSS/border-right-color "de/CSS/border-right-color"), [`border-right-style`](/de/CSS/border-right-style "de/CSS/border-right-style"), [`border-right-width`](/De/CSS/Border-right-width "De/CSS/Border-right-width")
- [`border-bottom`](/de/CSS/border-bottom "de/CSS/border-bottom"), [`border-top`](/de/CSS/border-top "de/CSS/border-top"), [`border-left`](/de/CSS/border-left "de/CSS/border-left")
- [`-moz-border-right-colors`](/de/CSS/-moz-border-right-colors "de/CSS/-moz-border-right-colors")
- [`-moz-border-image`](/de/CSS/-moz-border-image "de/CSS/-moz-border-image"), [`-moz-border-radius`](/de/CSS/border-radius "de/CSS/-moz-border-radius")

{{ languages( { "en": "en/CSS/border-right", "fr": "fr/CSS/border-right", "ja": "ja/CSS/border-right", "pl": "pl/CSS/border-right" } ) }}

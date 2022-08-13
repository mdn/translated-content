---
title: border-left
slug: Web/CSS/border-left
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-left
---
{{ CSSRef() }}

### Übersicht:

Die `border-left` Eigenschaft legt den linken Rahmen eines Elementes fest und ist eine Kurzform für
[`border-left-color`](/de/CSS/border-left-color "de/CSS/border-left-color"), [`border-left-style`](/de/CSS/border-left-style "de/CSS/border-left-style") und [`border-left-width`](/De/CSS/Border-left-width "De/CSS/Border-left-width"). Die Werte der drei Eigenschaften können in beliebiger Reihenfolge angegeben werden.

- Standardwert: siehe einzelne Eigenschaften
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: siehe einzelne Eigenschaften

### Syntax

    border-left: [ <Rahmenbreite> || <Rahmenstil> || <Rahmenfarbe> ] | inherit

### Werte

- \<Rahmenbreite>
  - : Optional. Wenn nichts festgelegt ist, wird `medium` verwendet. Siehe: [`border-left-width`](/De/CSS/Border-left-width "De/CSS/Border-left-width").
- \<Rahmenstil>
  - : Erforderlich. Wenn nichts festgelegt ist, wird `none` verwendet. Siehe: [`border-left-style`](/de/CSS/border-left-style "de/CSS/border-left-style").
- \<Rahmenfarbe>
  - : Optional. Wenn nichts festgelegt ist, wird der Wert der `color` Eigenschaft des Elements genommen. Siehe: [`border-left-color`](/de/CSS/border-left-color "de/CSS/border-left-color").
- inherit
  - : Der Wert des Elternelements wird geerbt.

### Beispiele

    .beispielEins {
      border-left: 1px solid #000;
    }

    .beispielZwei {
      border-left-style: dotted;
      border-left: thick green;

      /* Bedeutet das gleiche wie: */

      border-left-style: dotted;
      border-left: none thick green;

      /* border-left-style wird nach Angabe von border-left ignoriert.
      Es wird kein linker Rahmen gezeichnet. */
    }

### Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

### Spezifikation

- [CSS 3 Background and Borders #border-left](http://www.w3.org/TR/css3-background/#border-left)
- [CSS 2.1 Box #border-left](http://www.w3.org/TR/CSS21/box.html#propdef-border-left)

### Siehe auch

- [`border-left-color`](/de/CSS/border-left-color "de/CSS/border-left-color"), [`border-left-style`](/de/CSS/border-left-style "de/CSS/border-left-style"), [`border-left-width`](/De/CSS/Border-left-width "De/CSS/Border-left-width")
- [`border-bottom`](/de/CSS/border-bottom "de/CSS/border-bottom"), [`border-top`](/de/CSS/border-top "de/CSS/border-top"), [`border-right`](/de/CSS/border-right "de/CSS/border-right")
- [`-moz-border-left-colors`](/de/CSS/-moz-border-left-colors "de/CSS/-moz-border-left-colors")
- [`-moz-border-image`](/de/CSS/-moz-border-image "de/CSS/-moz-border-image"), [`-moz-border-radius`](/de/CSS/border-radius "de/CSS/-moz-border-radius")

{{ languages( { "en": "en/CSS/border-left", "es": "es/CSS/border-left", "fr": "fr/CSS/border-left", "ja": "ja/CSS/border-left", "pl": "pl/CSS/border-left" } ) }}

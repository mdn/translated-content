---
title: border-top
slug: Web/CSS/border-top
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-top
---
{{ CSSRef() }}

## Übersicht:

Die `border-top` Eigenschaft legt den oberen Rahmen eines Elementes fest und ist eine Kurzform für
[`border-top-color`](/de/CSS/border-top-color "de/CSS/border-top-color"), [`border-top-style`](/de/CSS/border-top-style "de/CSS/border-top-style") und [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width"). Die Werte der drei Eigenschaften können in beliebiger Reihenfolge angegeben werden.

- Standardwert: siehe einzelne Eigenschaften
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: siehe einzelne Eigenschaften

## Syntax

    border-top: [ <Rahmenbreite> || <Rahmenstil> || <Rahmenfarbe> ] | inherit

## Werte

- \<Rahmenbreite>
  - : Optional. Wenn nichts festgelegt ist, wird `medium` verwendet. Siehe: [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width").
- \<Rahmenstil>
  - : Erforderlich. Wenn nichts festgelegt ist, wird `none` verwendet. Siehe: [`border-top-style`](/de/CSS/border-top-style "de/CSS/border-top-style").
- \<Rahmenfarbe>
  - : Optional. Wenn nichts festgelegt ist, wird der Wert der `color` Eigenschaft des Elements genommen. Siehe: [`border-top-color`](/de/CSS/border-top-color "de/CSS/border-top-color").
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    .beispielEins {
      border-top: 1px solid #000;
    }

    .beispielZwei {
      border-top-style: dotted;
      border-top: thick green;

      /* Bedeutet das gleiche wie: */

      border-top-style: dotted;
      border-top: none thick green;

      /* border-top-style wird nach Angabe von border-top ignoriert.
      Es wird kein oberer Rahmen gezeichnet. */
    }

## Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

## Spezifikation

- [CSS 3 Background and Borders #border-top](http://www.w3.org/TR/css3-background/#border-top)
- [CSS 2.1 Box #border-top](http://www.w3.org/TR/CSS21/box.html#propdef-border-top)

## Siehe auch

- [`border-top-color`](/de/CSS/border-top-color "de/CSS/border-top-color"), [`border-top-style`](/de/CSS/border-top-style "de/CSS/border-top-style"), [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width")
- [`border-bottom`](/de/CSS/border-bottom "de/CSS/border-bottom"), [`border-left`](/de/CSS/border-left "de/CSS/border-left"), [`border-right`](/de/CSS/border-right "de/CSS/border-right")
- [`-moz-border-top-colors`](/de/CSS/-moz-border-top-colors "de/CSS/-moz-border-top-colors")
- [`-moz-border-image`](/de/CSS/-moz-border-image "de/CSS/-moz-border-image"), [`-moz-border-radius`](/de/CSS/border-radius "de/CSS/-moz-border-radius")

{{ languages( { "en": "en/CSS/border-top", "fr": "fr/CSS/border-top", "ja": "ja/CSS/border-top", "pl": "pl/CSS/border-top" } ) }}

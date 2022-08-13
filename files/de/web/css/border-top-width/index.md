---
title: border-top-width
slug: Web/CSS/Border-top-width
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-top-width
---
{{ CSSRef() }}

## Übersicht

Die `border-top-width` Eigenschaft legt die Breite des oberen Rahmens fest.

- Standardwert: `medium`
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: absolute Länge; `0` wenn `none` oder `hidden` festgelegt wurde

## Syntax

    border-top-width: <Länge> | thin | medium | thick | inherit

## Werte

- \<Länge>
  - : Eine [Längenangabe](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") die, die Rahmenstärke explizit angibt. Es sind keine negativen Werte erlaubt.
- thin
  - : Eine dünne Rahmenlinie (1px).
- medium
  - : Standardwert. Eine mitteldicke Rahmenlinie (3px).
- thick
  - : Eine dicke Rahmenlinie (5px).
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    .beispielEins {
      border-top-width: 10px;
    }

    .beispielZwei {
      border-top-width: thin;
    }

## Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

## Spezifikation

- [CSS 3 Background and Borders #border-top-width](http://www.w3.org/TR/css3-background/#border-top-width)
- [CSS 2.1 Box #border-top-width](http://www.w3.org/TR/CSS21/box.html#propdef-border-top-width)

## Siehe auch

- [`border-top`](/de/CSS/border-top "de/CSS/border-top"), [`border-top-color`](/de/CSS/border-top-color "de/CSS/border-top-color"), [`border-top-style`](/de/CSS/border-top-style "de/CSS/border-top-style")
- [`border-width`](/de/CSS/border-width "de/CSS/border-width"), [`border-bottom-width`](/De/CSS/Border-bottom-width "De/CSS/Border-bottom-width"), [`border-left-width`](/De/CSS/Border-left-width "De/CSS/Border-left-width"), [`border-right-width`](/De/CSS/Border-right-width "De/CSS/Border-right-width")

{{ languages( { "en": "en/CSS/border-top-width", "fr": "fr/CSS/border-top-width", "ja": "ja/CSS/border-top-width", "pl": "pl/CSS/border-top-width" } ) }}

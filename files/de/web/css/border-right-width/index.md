---
title: border-right-width
slug: Web/CSS/Border-right-width
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-right-width
---
{{ CSSRef() }}

## Übersicht

Die `border-right-width` Eigenschaft legt die Breite des rechten Rahmens fest.

- Standardwert: `medium`
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Werte: absolute Länge; `0` wenn `none` oder `hidden` festgelegt wurde

## Syntax

    border-right-width: <Länge> | thin | medium | thick | inherit

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
      border-right-width: 10px;
    }

    .beispielZwei {
      border-right-width: thin;
    }

## Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

## Spezifikation

- [CSS 3 Background and Borders #border-right-width](http://www.w3.org/TR/css3-background/#border-right-width)
- [CSS 2.1 Box #border-right-width](http://www.w3.org/TR/CSS21/box.html#propdef-border-right-width)

## Siehe auch

- [`border-right`](/de/CSS/border-right "de/CSS/border-right"), [`border-right-color`](/de/CSS/border-right-color "de/CSS/border-right-color"), [`border-right-style`](/de/CSS/border-right-style "de/CSS/border-right-style")
- [`border-width`](/de/CSS/border-width "de/CSS/border-width"), [`border-bottom-width`](/De/CSS/Border-bottom-width "De/CSS/Border-bottom-width"), [`border-left-width`](/De/CSS/Border-left-width "De/CSS/Border-left-width"), [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width")

{{ languages( { "en": "en/CSS/border-right-width", "fr": "fr/CSS/border-right-width", "ja": "ja/CSS/border-right-width", "pl": "pl/CSS/border-right-width" } ) }}

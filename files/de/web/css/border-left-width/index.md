---
title: border-left-width
slug: Web/CSS/Border-left-width
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-left-width
---
{{ CSSRef() }}

### Übersicht

Die `border-left-width` Eigenschaft legt die Breite des linken Rahmens fest.

- Standardwert: `medium`
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: absolute Länge; `0` wenn `none` oder `hidden` festgelegt wurde

### Syntax

    border-left-width: <Länge> | thin | medium | thick | inherit

### Werte

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

### Beispiele

    .beispielEins {
      border-left-width: 10px;
    }

    .beispielZwei {
      border-left-width: thin;
    }

### Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

### Spezifikation

- [CSS 3 Background and Borders #border-left-width](http://www.w3.org/TR/css3-background/#border-left-width)
- [CSS 2.1 Box #border-left-width](http://www.w3.org/TR/CSS21/box.html#propdef-border-left-width)

### Siehe auch

- [`border-left`](/de/CSS/border-left "de/CSS/border-left"), [`border-left-color`](/de/CSS/border-left-color "de/CSS/border-left-color"), [`border-left-style`](/de/CSS/border-left-style "de/CSS/border-left-style")
- [`border-width`](/de/CSS/border-width "de/CSS/border-width"), [`border-bottom-width`](/De/CSS/Border-bottom-width "De/CSS/Border-bottom-width"), [`border-right-width`](/De/CSS/Border-right-width "De/CSS/Border-right-width"), [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width")

{{ languages( { "en": "en/CSS/border-left-width", "fr": "fr/CSS/border-left-width", "ja": "ja/CSS/border-left-width", "pl": "pl/CSS/border-left-width" } ) }}

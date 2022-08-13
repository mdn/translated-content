---
title: border-width
slug: Web/CSS/border-width
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-width
---
{{ CSSRef() }}

## Übersicht

Die `border-width` Eigenschaft legt die Breite des oberen, rechten, unteren und linken Rahmens fest.

- Standardwert: `medium`
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: absolute Länge; `0` wenn `none` oder `hidden` festgelegt wurde

## Syntax

    border-width:  [<Länge> | thin | medium | thick] {1,4} | inherit

## Werte

- \<Länge>
  - : Eine [Längenangabe](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") die, die Rahmenstärke explizit angibt. Es sind keine negativen Werte erlaubt.
- thin
  - : Eine dünne Rahmenlinie (1px; IE 4-7: 2px).
- medium
  - : Standardwert. Eine mitteldicke Rahmenlinie (3px; IE 4-7: 4px).
- thick
  - : Eine dicke Rahmenlinie (5px; IE 4-7: 6px).
- inherit
  - : Der Wert des Elternelements wird geerbt.
- Ein Wert
  - : Gilt für alle vier Seiten: [border-top-width](/de/CSS/border-top-width), [border-right-width](/de/CSS/border-right-width), [border-bottom-width](/de/CSS/border-bottom-width) und [border-left-width](/de/CSS/border-left-width).
- Zwei Werte
  - : Der erste Wert gilt für [border-top-width](/de/CSS/border-top-width) und [border-bottom-width](/de/CSS/border-bottom-width), der zweite Wert für [border-right-width](/de/CSS/border-right-width) und [border-left-width](/de/CSS/border-left-width).
- Drei Werte
  - : Der erste Wert gilt für [border-top-width](/de/CSS/border-top-width), der zweite Wert für [border-right-width](/de/CSS/border-right-width) und [border-left-width](/de/CSS/border-left-width) und der dritte Wert für [border-bottom-width](/de/CSS/border-bottom-width).
- Vier Werte
  - : Der erste Wert gilt für [border-top-width](/de/CSS/border-top-width), der zweite Wert für [border-right-width](/de/CSS/border-right-width), der dritte Wert für [border-bottom-width](/de/CSS/border-bottom-width) und der vierte Wert für [border-left-width](/de/CSS/border-left-width).

## Beispiele

```css
.beispielEins {
  border: solid #ccc;
  border-width: 3px;
}
```

```css
.beispielZwei {
  border: solid #ccc;
  border-width: thin thick;
}
```

```css
.beispielDrei {
  border: solid #ccc;
  border-width: thin thick 10px;
}
```

```css
.beispielVier {
  border: solid #ccc;
  border-width: thin thick 10px 2em;
}
```

## Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

## Spezifikation

- [CSS 3 Background and Borders #border-width](http://www.w3.org/TR/css3-background/#border-width)
- [CSS 2.1 Box #border-width](http://www.w3.org/TR/CSS21/box.html#propdef-border-width)

## Siehe auch

- [`border`](/de/CSS/border "de/CSS/border")
- [`border-bottom-width`](/De/CSS/Border-bottom-width "De/CSS/Border-bottom-width"), [`border-left-width`](/De/CSS/Border-left-width "De/CSS/Border-left-width"), [`border-right-width`](/De/CSS/Border-right-width "De/CSS/Border-right-width"), [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width")

{{ languages( { "en": "en/CSS/border-width", "fr": "fr/CSS/border-width", "ja": "ja/CSS/border-width", "pl": "pl/CSS/border-width", "es": "es/CSS/border-width" } ) }}

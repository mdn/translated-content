---
title: border-top-color
slug: Web/CSS/border-top-color
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-top-color
---
{{ CSSRef() }}

## Übersicht

Die `border-top-color` Eigenschaft legt die Farbe des oberen Rahmens fest. Da der Standardwert für die Rahmenart `none` ist, muss eine Angabe der [`border-top-style`](/de/CSS/border-top-style "de/CSS/border-top-style") Eigenschaft erfolgen, damit ein oberer Rahmen sichtbar werden kann. Es ist daher sinnvoll mit der Kurzform [`border-top`](/de/CSS/border-top "de/CSS/border-top") gleich die Farbe und die Art des oberen Rahmens festzulegen.

- Standardwert: Wert der [`color`](/de/CSS/color "de/CSS/color") Eigenschaft
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: die berechnete Farbe

## Syntax

    border-top-color:  <Farbe> | transparent | inherit

## Werte

- \<Farbe>
  - : [Farbangabe](/de/CSS/Farben "de/CSS/Farben") \[ Hexadezimalwert, Farbname, Systemfarbe, rgb(), rgba(), hsl() oder hlsa() ]
- transparent
  - : Das Element hat keine Farbe. Es wird die Farbe des dahinter liegenden Elementes angezeigt.
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

```css
pre {
  border-top-style: solid;
  border-top-color: red;

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

- [CSS 3 Background and Borders #border-top-color](http://www.w3.org/TR/css3-background/#border-top-color)
- [CSS 2.1 Box #border-top-color](http://www.w3.org/TR/CSS21/box.html#propdef-border-top-color)

## Siehe auch

- [`border-top`](/de/CSS/border-top "de/CSS/border-top"), [`border-top-style`](/de/CSS/border-top-style "de/CSS/border-top-style"), [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width")
- [`border-bottom`](/de/CSS/border-bottom "de/CSS/border-bottom"), [`border-left`](/de/CSS/border-left "de/CSS/border-left"), [`border-right`](/de/CSS/border-right "de/CSS/border-right")
- [`-moz-border-top-colors`](/de/CSS/-moz-border-top-colors "de/CSS/-moz-border-top-colors")

{{ languages( { "en": "en/CSS/border-top-color", "fr": "fr/CSS/border-top-color", "ja": "ja/CSS/border-top-color", "pl": "pl/CSS/border-top-color" } ) }}

---
title: border-right-color
slug: Web/CSS/border-right-color
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-right-color
---
{{ CSSRef() }}

### Übersicht:

Die `border-right-color` Eigenschaft legt die Farbe des rechten Rahmens fest. Da der Standardwert für die Rahmenart `none` ist, muss eine Angabe der [`border-right-style`](/de/CSS/border-right-style "de/CSS/border-right-style") Eigenschaft erfolgen, damit ein rechter Rahmen sichtbar werden kann. Es ist daher sinnvoll mit der Kurzform [`border-right`](/de/CSS/border-right "de/CSS/border-right") gleich die Farbe und die Art des rechten Rahmens festzulegen.

- Standardwert: Wert der [`color`](/de/CSS/color "de/CSS/color") Eigenschaft
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: wie festgelegt

### Syntax

    border-right-color:  <Farbe> | transparent | inherit

### Werte

- \<Farbe>
  - : [Farbangabe](/de/CSS/Farben "de/CSS/Farben") \[ Hexadezimalwert, Farbname, Systemfarbe, rgb(), rgba(), hsl() oder hlsa() ]
- transparent
  - : Das Element hat keine Farbe. Es wird die Farbe des dahinter liegenden Elementes angezeigt.
- inherit
  - : Der Wert des Elternelements wird geerbt.

### Beispiele

```css
pre {
  border-right-style: solid;
  border-right-color: red;

}
```

### Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

### Spezifikation

- [CSS 3 Background and Borders #border-right-color](http://www.w3.org/TR/css3-background/#border-right-color)
- [CSS 2.1 Box #border-right-color](http://www.w3.org/TR/CSS21/box.html#propdef-border-right-color)

### Siehe auch

- [`border-right`](/de/CSS/border-right "de/CSS/border-right"), [`border-right-style`](/de/CSS/border-right-style "de/CSS/border-right-style"), [`border-right-width`](/De/CSS/Border-right-width "De/CSS/Border-right-width")
- [`border-bottom`](/de/CSS/border-bottom "de/CSS/border-bottom"), [`border-left`](/de/CSS/border-left "de/CSS/border-left"), [`border-top`](/de/CSS/border-top "de/CSS/border-top")
- [`-moz-border-right-colors`](/de/CSS/-moz-border-right-colors "de/CSS/-moz-border-right-colors")

{{ languages( { "en": "en/CSS/border-right-color", "fr": "fr/CSS/border-right-color", "ja": "ja/CSS/border-right-color", "pl": "pl/CSS/border-right-color" } ) }}

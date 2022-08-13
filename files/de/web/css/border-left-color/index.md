---
title: border-left-color
slug: Web/CSS/border-left-color
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-left-color
---
{{ CSSRef() }}

### Übersicht:

Die `border-left-color` Eigenschaft legt die Farbe des linken Rahmens fest. Da der Standardwert für die Rahmenart `none` ist, muss eine Angabe der [`border-left-style`](/de/CSS/border-left-style "de/CSS/border-left-style") Eigenschaft erfolgen, damit ein linker Rahmen sichtbar werden kann. Es ist daher sinnvoll mit der Kurzform [`border-left`](/de/CSS/border-left "de/CSS/border-left") gleich die Farbe und die Art des linken Rahmens festzulegen.

- Standardwert: Wert der [`color`](/de/CSS/color "de/CSS/color") Eigenschaft
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: wie festgelegt

### Syntax

    border-left-color:  <Farbe> | transparent | inherit

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
  border-left-style: solid;
  border-left-color: red;

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

- [CSS 3 Background and Borders #border-left-color](http://www.w3.org/TR/css3-background/#border-left-color)
- [CSS 2.1 Box #border-left-color](http://www.w3.org/TR/CSS21/box.html#propdef-border-left-color)

### Siehe auch

- [`border-left`](/de/CSS/border-left "de/CSS/border-left"), [`border-left-style`](/de/CSS/border-left-style "de/CSS/border-left-style"), [`border-left-width`](/De/CSS/Border-left-width "De/CSS/Border-left-width")
- [`border-bottom`](/de/CSS/border-bottom "de/CSS/border-bottom"), [`border-right`](/de/CSS/border-right "de/CSS/border-right"), [`border-top`](/de/CSS/border-top "de/CSS/border-top")
- [`-moz-border-left-colors`](/de/CSS/-moz-border-left-colors "de/CSS/-moz-border-left-colors")

{{ languages( { "en": "en/CSS/border-left-color", "fr": "fr/CSS/border-left-color", "ja": "ja/CSS/border-left-color", "pl": "pl/CSS/border-left-color" } ) }}

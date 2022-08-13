---
title: border-top-style
slug: Web/CSS/border-top-style
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-top-style
---
{{ CSSRef() }}

## Übersicht

Die `border-top-style` Eigenschaft legt die Rahmenart des oberen Rahmens fest.

- Standardwert: `none`
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: wie festgelegt

## Syntax

    border-top-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | inherit

## Werte

- none
  - : Standardwert. Es wird kein oberer Rahmen gezeichnet und die Breite wird auf '0' zurückgesetzt.
- hidden
  - : Genau wie bei `none` wird kein Rahmen angezeigt. Das Verhalten unterscheidet sich jedoch beim "Collapsing Border Model" innerhalb von Tabellen.
    Wenn [`border-collapse: collapse`](/de/CSS/border-collapse "de/CSS/border-collapse") gesetzt wurde, wird auch an den angrenzenden Nachbarzellen kein Rahmen dargestellt.
- dotted
  - : Punktierte Linie.
- dashed
  - : Gestrichelte Linie.
- solid
  - : Durchgehende Linie.
- double
  - : Zwei durchgehende Linien mit Zwischenraum. Die zwei Linien und der Zwischenraum sind jeweils ein Drittel der [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width") Angabe groß.
- groove
  - : Der Rahmen wirkt eingekerbt (3D-Effekt).
- ridge
  - : Der Rahmen wirkt wie eine Kante (3D-Effekt).
- inset
  - : Durch den Rahmen wirkt das ganze Element eingetieft (3D-Effekt).
- outset
  - : Durch den Rahmen wirkt das ganze Element herausgehoben (3D-Effekt).
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    .beispielEins {
      border-top-style: dashed;      /* gestrichelt */
    }

    .beispielZwei {
      border-top-style: groove;      /* Einkerbung */
    }

    .beispielDrei {
     border-top-style: hidden;       /* Collapsing Border Model */
     border-collapse: collapse;
    }

## Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

## Spezifikation

- [CSS 3 Background and Borders #border-top-style](http://www.w3.org/TR/css3-background/#border-top-style)
- [CSS 2.1 Box #border-top-style](http://www.w3.org/TR/CSS21/box.html#propdef-border-top-style)

## Siehe auch

- [`border-top`](/de/CSS/border-top "de/CSS/border-top"), [`border-top-color`](/de/CSS/border-top-color "de/CSS/border-top-color"), [`border-top-width`](/De/CSS/Border-top-width "De/CSS/Border-top-width")
- [`border-style`](/de/CSS/border-style "de/CSS/border-style"), [`border-bottom-style`](/de/CSS/border-bottom-style "de/CSS/border-bottom-style"), [`border-left-style`](/de/CSS/border-left-style "de/CSS/border-left-style"), [`border-right-style`](/de/CSS/border-right-style "de/CSS/border-right-style")

{{ languages( { "en": "en/CSS/border-top-style", "fr": "fr/CSS/border-top-style", "ja": "ja/CSS/border-top-style", "pl": "pl/CSS/border-top-style" } ) }}

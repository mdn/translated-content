---
title: margin
slug: Web/CSS/margin
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/margin
translation_of_original: Web/CSS/margin-new
---
{{ CSSRef() }}

## Übersicht

Die `margin` Eigenschaft ist eine Kurzform für die Außenabstände aller vier Seiten eines Elements.

- Standardwert: `0`
- Anwendbar auf: alle Elemente, in Tabellen nur auf Elemente mit [display](/de/CSS/display "de/CSS/display") `table`, `table-caption` und `inline-table`
- Vererbbar: Nein
- Prozentwerte: beziehen sich immer auf die [Breite](/de/CSS/width "de/CSS/width") des umschließenden Blocks.
- Medium: visuell
- berechneter Wert: siehe einzelne Eigenschaften

## Syntax

    margin: <Längenwert>{1,4} | <Prozentzahl>{1,4} | inherit | auto

### Werte

Es werden bis zu vier der folgenden Werte akzeptiert:

- \<Längenangabe>
  - : Legt eine bestimmte [Länge](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") fest. Negative Werte sind erlaubt.
- \<Prozentzahl>
  - : Ein [prozentualer](/de/CSS/Einheiten#Prozent "de/CSS/Einheiten#Prozent") Wert, der sich auf die Breite des umschließenden Blocks (_containing block_) bezieht. Negative Werte sind erlaubt.
- auto
  - : `auto` wird von einem passendem Wert ersetzt, wobei die horizontalen bzw. vertikalen Dimensionen berücksichtigt werden.
    Bei `div { width:50%; margin:0 auto; }` wird das div Element horizontal zentriert.
- inherit
  - : Der Wert des Elternelements wird geerbt.
- Ein Wert
  - : Gilt für alle vier Seiten.
- Zwei Werte
  - : Der erste Wert bestimmt die [oberen](/de/CSS/margin-top "de/CSS/margin-top") und [unteren](/de/CSS/margin-bottom "de/CSS/margin-bottom") Abstände, der zweite Wert legt die Abstände [rechts](/de/CSS/margin-right "de/CSS/margin-right") und [links](/de/CSS/margin-left "de/CSS/margin-left") fest.
- Drei Werte
  - : Der erste Wert bestimmt den [oberen](/de/CSS/margin-top "de/CSS/margin-top") Abstand, der zweite Wert legt die Abstände für [rechts](/de/CSS/margin-right "de/CSS/margin-right") und [links](/de/CSS/margin-left "de/CSS/margin-left") zusammen fest und der dritte Wert bestimmt den [unteren](/de/CSS/margin-bottom "de/CSS/margin-bottom") Abstand.
- Vier Werte
  - : Für jede Seite können die Abstände einzeln festgelegt werden. In der Reihenfolge: [oben](/de/CSS/margin-top "de/CSS/margin-top"), [rechts](/de/CSS/margin-right "de/CSS/margin-right"), [unten](/de/CSS/margin-bottom "de/CSS/margin-bottom"), [links](/de/CSS/margin-left "de/CSS/margin-left").

## Beispiele

    margin: 5%;                /* 5% Abstand auf allen Seiten */

    margin: 10px;              /* 10px Abstand auf allen Seiten */

    margin: 1.6em 20px;        /* 1.6em Abstand für oben und unten, 20px Abstand für rechts und links */

    margin: 10px 3% 1em;       /* oben 10px, links und rechts 3%, unten 1em */

    margin: 10px 3px 30px 5px; /* oben 10px, rechts 3px, unten 30px, links 5px */

    margin: 1em auto;          /* 1em Abstand oben und unten; die Box wird horizontal zentriert */

    margin: auto;              /* Die Box wird horizontal zentriert, kein Abstand (0) oben und unten */

    margin:     auto;
    background: gold;
    width:      66%;

    margin:     -1em 0 100px -40px;
    background: plum;
    width:      20em

## Browser Kompatibilität

| Browser           | ab Version | `auto` Wert       |
| ----------------- | ---------- | ----------------- |
| Internet Explorer | 3.0        | 6.0 (strict mode) |
| Firefox (Gecko)   | 1.0 (1.0)  | 1.0 (1.0)         |
| Opera             | 3.5        | 3.5               |
| Safari (WebKit)   | 1.0 (85)   | 1.0 (85)          |

## Spezifikation

- [CSS 2.1 Visual formatting #margin](http://www.w3.org/TR/CSS21/box.html#margin-properties)

## Siehe auch

- [`margin-top`](/de/CSS/margin-top "de/CSS/margin-top"), [`margin-right`](/de/CSS/margin-right "de/CSS/margin-right"), [`margin-bottom`](/de/CSS/margin-bottom "de/CSS/margin-bottom"), [`margin-left`](/de/CSS/margin-left "de/CSS/margin-left")
- [`-moz-margin-start`](/de/CSS/-moz-margin-start "de/CSS/-moz-margin-start"), [`-moz-margin-end`](/de/CSS/-moz-margin-end "de/CSS/-moz-margin-end")
- [`padding`](/de/CSS/padding "de/CSS/padding")

{{ languages( { "en": "en/CSS/margin", "ja": "ja/CSS/margin" } ) }}

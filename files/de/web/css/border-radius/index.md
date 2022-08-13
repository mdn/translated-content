---
title: border-radius
slug: Web/CSS/border-radius
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-radius
---
{{CSSRef}}

## Übersicht

Die Eigenschaft `border-radius` kann verwendet werden, um [Rahmen](/de/CSS/border "de/CSS/border") mit abgerundeten Ecken zu versehen. Der Radius wird auch auf [Hintergründe](/de/CSS/background "de/CSS/background") und [Schatteneffekte](/de/CSS/box-shadow "De/CSS/-moz-box-shadow") angewendet, selbst wenn das Element über keinen Rahmen verfügt.

`border-radius` ist die Kurzform für die für Eigenschaften {{ Cssxref("border-top-left-radius") }}, {{ Cssxref("border-top-right-radius") }}, {{ Cssxref("border-bottom-right-radius") }} und {{ Cssxref("border-bottom-left-radius") }}.

{{cssinfo}}

## Syntax

    border-radius: {{csssyntax("border-radius")}}

    bzw.

    border-radius: [ <Länge> | <Prozentzahl> ]{1,4}
                   [ / [ <Länge> | <Prozentzahl> ]{1,4} ]?

## Werte

Es werden bis zu vier Angaben akzeptiert und nach einem Slash ("`/`") können vier weitere Angaben folgen.

- \<Länge>
  - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- \<Prozentzahl>
  - : Ab Gecko 2.0 (Firefox 4.0):
    Prozentuale Angaben für den horizontalen Radius beziehen sich auf die Breite der Box. Die Prozentzahl für den vertikalen Radius ist allerdings relativ zur Höhe der Box.
    In vorherigen Gecko- & Firefox-Versionen:
    {{ non-standard_inline() }} Eine prozentuale Angabe, die sich auf die Breite der Box bezieht. Die Prozentzahl ist auch dann relativ zur Breite, wenn ein Radius für die Höhe festgelegt wird.
- Ein Wert
  - : Gilt für alle vier Ecken.
- Zwei Werte
  - : Der erste Wert bestimmt die Ecken oben links und unten rechts, der zweite Wert legt die Ecken oben rechts und unten links fest.
- Drei Werte
  - : Der erste Wert bestimmt die Ecke oben links, der zweite Wert legt die Ecke für oben rechts und unten links zusammen fest und der dritte Wert bestimmt die Ecke unten rechts.
- Vier Werte
  - : Für jede Seite können die Abstände einzeln festgelegt werden. In der Reihenfolge: oben links, oben rechts, unten rechts, unten links.
- Slash ("/") Schreibweise
  - : Wenn weitere Werte nach einem Slash ("/") folgen, werden die Werte vor dem Slash verwendet, um den horizontalen Radius festzulegen, während die Werte nach dem Slash für vertikalen Radius benutzt werden. Wird der Slash weggelassen, werden die festgelegten Werte für horizontale und vertikale Radien verwendet.

Beispiel zur Slash-Notation:

```css
-moz-border-radius: 1em/5em;
     border-radius: 1em/5em;

/* ist gleichbedeutend zu: */

-moz-border-radius-topleft:      1em 5em;
-moz-border-radius-topright:     1em 5em;
-moz-border-radius-bottomright:  1em 5em;
-moz-border-radius-bottomleft:   1em 5em;
     border-top-left-radius:     1em 5em;
     border-top-right-radius:    1em 5em;
     border-bottom-right-radius: 1em 5em;
     border-bottom-left-radius:  1em 5em;
```

```css
-moz-border-radius: 4px 3px 6px / 2px 4px;
     border-radius: 4px 3px 6px / 2px 4px;

/* ist gleichbedeutend zu: */

-moz-border-radius-topleft:      4px 2px;
-moz-border-radius-topright:     3px 4px;
-moz-border-radius-bottomright:  6px 2px;
-moz-border-radius-bottomleft:   3px 4px;
     border-top-left-radius:     4px 2px;
     border-top-right-radius:    3px 4px;
     border-bottom-right-radius: 6px 2px;
     border-bottom-left-radius:  3px 4px;
```

> **Note:** **Hinweis:** Elliptische Rahmen (Slash mit erweitertem border-radius Syntax) werden von Versionen vor Gecko 1.9.1 (Firefox 3.5) nicht unterstützt.

## Beispiele

```css
border: solid 10px;

  /* Der Rahmen ergibt ein 'D' */
  -moz-border-radius: 0 50px 50px 0;
       border-radius: 0 50px 50px 0;
```

```css
    border: groove 1em red;

           -moz-border-radius: 2em;
        -webkit-border-radius: 2em;
                border-radius: 2em;
```

```css
           background: gold;
           border: ridge gold;

             -moz-border-radius: 13em/3em;
          -webkit-border-radius: 13em 3em;
                  border-radius: 13em/3em;
```

```css
    background: gold;

       -moz-border-radius: 40px 10px;
            border-radius: 40px 10px;
```

```css
background: black;
color: gray;
border-radius: 50%;
```

## Hinweise

- Gepunktete und gestrichelte Rahmenecken werden als durchgehende Linie gerendert. Siehe {{ bug("382721") }}.
- `border-radius` wird nicht auf Tabellen angewendet, wenn [`border-collapse`](/de/CSS/border-collapse "de/CSS/border-collapse") auf `collapse` gesetzt ist.
- Safari/WebKit behandelt mehrere mehrere Werte anders (siehe unten).

## Browser Kompatibilität

{{Compat("css.properties.border-radius")}}

## Spezifikation

- [CSS 3 Backgrounds and Borders #border-radius](http://www.w3.org/TR/css3-background/#the-border-radius)

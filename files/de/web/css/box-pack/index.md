---
title: '-moz-box-pack'
slug: Web/CSS/box-pack
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Referenz
  - Layout
  - Non-standard
translation_of: Web/CSS/box-pack
original_slug: Web/CSS/-moz-box-pack
---
{{CSSRef}}{{warning("Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Moduls, welches durch einen neuen Standard ersetzt wurde.")}}

Siehe [Flexbox](/de/docs/Web/Guide/CSS/Flexible_boxes) für mehr Informationen.

## Übersicht

Die `-moz-box-pack` und `-webkit-box-pack` [CSS](/de/docs/Web/CSS) Eigenschaften bestimmen, wie ein `-moz-box` oder `-webkit-box` seine Inhalte in Richtung seines Layouts packt. Die Wirkung dieser Eigenschaft ist nur sichtbar, falls es zusätzlichen Leerraum innerhalb der Box gibt. Siehe [Flexbox](/de/docs/Web/Guide/CSS/Flexible_boxes) für mehr Informationen bezüglich den Eigenschaften von Flexbox-Elementen.

Die Richtung des Layouts hängt von der Ausrichtung des Elements ab: horizontal oder vertikal.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
-moz-box-pack: start;
-moz-box-pack: center;
-moz-box-pack: end;
-moz-box-pack: justify;

/* Globale Werte */
-moz-box-pack: inherit;
-moz-box-pack: initial;
-moz-box-pack: unset;
```

### Werte

- `start`
  - : Die Box packt Inhalte am Anfang und lässt eventuellen zusätzlichen Leerraum am Ende.
- `center`
  - : Die Box packt Inhalte in der Mitte und teilt eventuellen zusätzlichen Leerraum zwischen Start und Ende auf.
- `end`
  - : Die Box packt Inhalte am Ende und lässt eventuellen zusätzlichen Leerraum am Start.
- `justify`
  - : Der Leerraum wird gleichmäßig zwischen jedem Kind aufgeteilt, wobei kein zusätzlicher Leerraum vor dem ersten Kind oder nach dem letzten Kind platziert wird. Falls es nur ein Kind gibt, wird der Wert so behandelt, als ob er `start` wäre.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
div.example {
  border-style: solid;

  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* Make this box taller than the children,
     so there is room for the box-pack */
  height: 300px;
  /* Make this box wide enough to show the contents
     are centered horizontally */
  width: 300px;

  /* Children should be oriented vertically */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* Align children to the horizontal center of this box */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* Pack children to the bottom of this box */
  -moz-box-pack: end;             /* Mozilla */
  -webkit-box-pack: end;          /* WebKit */
}

div.example p {
  /* Make children narrower than their parent,
     so there is room for the box-align */
  width: 200px;
}
```

```html
<div class="example">
  <p>I will be second from the bottom of div.example, centered horizontally.</p>
  <p>I will be on the bottom of div.example, centered horizontally.</p>
</div>
```

{{EmbedLiveSample('Beispiele', 310, 310)}}

## Hinweise

Der Rand der Box, die als _Start_ zum Packen bestimmt wird, hängt von der Ausrichtung der Box und deren Richtung ab:

|                | **Normal** | **Umgekehrt** |
| -------------- | ---------- | ------------- |
| **Horizontal** | links      | rechts        |
| **Vertikal**   | oben       | unten         |

Der dem Start gegenüberliegende Rand wird als das _Ende_ bestimmt.

Falls das Packen durch das `pack` Elementattribut gesetzt wird, wird die Stileigenschaft ignoriert.

## Spezifikationen

Diese Eigenschaft ist nicht standardisiert, jedoch erschien eine ähnliche Eigenschaft in einem [frühen Entwurf von CSS3 Flexbox](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/), die durch neuere Versionen der Spezifikation überholt wurde.

## Browser Kompatibilität

{{Compat("css.properties.box-pack")}}

## Siehe auch

{{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-align")}}

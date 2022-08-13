---
title: align-content
slug: Web/CSS/align-content
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Flexible Boxes
  - Layout
  - Referenz
translation_of: Web/CSS/align-content
---
{{CSSRef}}

## Übersicht

Die `align-content` [CSS](/de/docs/Web/CSS) Eigenschaft richtet Flexcontainer Zeilen innerhalb des Flexcontainers aus, falls zusätzlicher Leerraum auf der Querachse zur Verfügung steht.

Diese Eigenschaft hat keine Auswirkung auf einzeilige Flexboxen.

{{cssinfo}}

Siehe die [Verwendung von flexiblen Boxen](/de/docs/Web/Guide/CSS/Flexible_boxes "/en/CSS/Using_CSS_flexible_boxes") für mehr Informationen.

## Syntax

```css
/* Packe Zeilen an den Start der Querachse */
align-content: flex-start;

/* Packe Zeilen an das Ende der Querachse */
align-content: flex-end;

/* Packe Zeilen um die Mitte der Querachse */
align-content: center;

/* Verteile Zeilen entlang der Querachse, Start und Ende */
align-content: space-between;

/* Verteile Zeilen gleichmäßig entlang der Querachse */
align-content: space-around;

/* Strecke Zeilen, um die gesamte Querachse auszufüllen */
align-content: stretch;

/* Globale Werte */
align-content: inherit;
align-content: initial;
align-content: unset;
```

### Werte

- `flex-start`
  - : Zeilen werden an den Start der Querachse gepackt. Der Querachsenstartrand der ersten Zeile und des Flexcontainers grenzen aneinander. Jede folgende Zeile grenzt die vorherige.
- `flex-end`
  - : Zeilen werden an das Ende der Querachse gepackt. Der Querachsenstartrand der letzten Zeile und des Flexcontainers grenzen aneinander. Jede vorhergehende Zeile grenzt die nächste.
- `center`
  - : Zeilen werden in die Mitte der Querachse gepackt. Die Zeilen grenzen aneinander und werden mittig innerhalb des des Flexcontainers ausgerichtet. Leerräume zwischen dem Querachsenstartrand des Flexcontainers und der ersten Zeile und zwischen dem Querachsenendrand des Flexcontainers und der letzten Zeile sind gleich.
- `space-between`
  - : Zeilen werden gleichmäßig innerhalb des Flexcontainers verteilt. Die Abstände werden so verteilt, dass sie zwischen zwei angrenzenden Elementen gleich sind. Querachsenstartrand und -endrand des Flexcontainers grenzen an den Rand der ersten bzw. letzten Zeile.
- `space-around`
  - : Zeilen werden gleichmäßig innerhalb des Flexcontainers verteilt, sodass die Leerräume zwischen zwei angrenzenden Zeilen gleich sind. Der Leerraum vor der ersten und nach der letzten Zeile entspricht der Hälfte des Leerraums zwischen zwei angrenzenden Zeilen.
- `stretch`
  - : Zeilen dehnen sich aus, um den verbleibenden Leerraum auszunutzen. Der Freiraum wird gleichmäßig auf alle Zeilen aufgeteilt.

### Formale Syntax

{{csssyntax}}

## Beispiele

**HTML:**

```html
<div id="container">
  <p>align-content: flex-start</p>
  <div id="flex-start">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: center</p>
  <div id="center">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: flex-end</p>
  <div id="flex-end">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: space-between</p>
  <div id="space-between">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: space-around</p>
  <div id="space-around">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: stretch</p>
  <div id="stretch">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

**CSS:**

```css
#container > div {
  display: flex;
  flex-flow: row wrap;
  width: 140px;
  height: 140px;
  background: linear-gradient(-45deg, #78ff8c, #b4ffc8);
}

#container > div > div {
  margin: 2px;
  width: 30px;
  min-height: 30px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}

#flex-start {
  align-content: flex-start;
}

#center {
  align-content: center;
}

#flex-end {
  align-content: flex-end;
}

#space-between {
  align-content: space-between;
}

#space-around {
  align-content: space-around;
}

#stretch {
  align-content: stretch;
}
```

Ergibt:

{{ EmbedLiveSample('Beispiele', 600, 550) }}

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar                |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------ |
| {{SpecName('CSS3 Flexbox', '#align-content', 'align-content')}} | {{Spec2('CSS3 Flexbox')}} | Ursprüngliche Definition |

## Browser Kompatibilität

### Support im Flex-Layout

{{Compat("css.properties.align-content.flex_context")}}

### Support im Grid-Layout

{{Compat("css.properties.align-content.grid_context")}}

## Siehe auch

- [Verwenden von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes "CSS/Using_CSS_flexible_boxes")

{{CSSRef}}

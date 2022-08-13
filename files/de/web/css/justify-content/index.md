---
title: justify-content
slug: Web/CSS/justify-content
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Flexible Boxes
  - CSS3
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/justify-content
---
{{CSSRef("CSS Flexible Boxes")}}

## Übersicht

Die `justify-content` [CSS](/de/docs/Web/CSS "CSS") Eigenschaft definiert, wie ein Browser verfügbaren Platz zwischen und um Elemente verteilt, wenn Flexelemente an der Hauptachse der aktuellen Zeile ausgerichtet werden sollen. Die Ausrichtung wird berechnet, nachdem die Längen und automatischen Abstände angewendet wurden, was bedeutet, dass falls es mindestens ein flexibles Element gibt mit {{cssxref("flex-grow")}} ungleich `0`, hat diese Eigenschaft keine Auswirkung, da es keinen verfügbaren Platz gibt.

> **Hinweis:** Es sollte nicht angenommen werden, dass diese Eigenschaft ausschließlich auf Flexcontainer angewandt wird. Daher sollte sie nicht einfach durch Setzen eines anderen {{cssxref("display")}} Wertes versteckt werden. Die CSSWG arbeitet daran, [deren Verwendung auf alle Blockelemente auszuweiten](http://dev.w3.org/csswg/css3-align/#justify-content). Diese Entwurfsspezifikation ist bisher noch in einer frühen Entwicklungsphase und bisher noch nicht implementiert.

{{cssinfo}}

Siehe die [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes "CSS/Using_CSS_flexible_boxes") für weitere Eigenschaften und Informationen.

## Syntax

```css
/* Packe Flexelemente an den Start */
justify-content: flex-start;

/* Packe Flexelemente an das Ende */
justify-content: flex-end;

/* Packe Flexelemente um die Mitte */
justify-content: center;

/* Verteile die Elemente gleichmäßig
Das erste Element an den Start, das letzte an das Ende */
justify-content: space-between;

/* Verteile die Elemente gleichmäßig
Elemente haben gleiche Abstände um sie herum */
justify-content: space-around;

/* Globale Werte */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

### Werte

- `flex-start`
  - : Die Flexelemente werden an den **Hauptstartpunkt** gepackt. Die Außenabstände des ersten Flexelements grenzen an den Startrand der Zeile und jedes weitere Flexelement an das folgende.
- `flex-end`
  - : Die Flexelemente werden an den **Hauptendpunkt** gepackt. Außenabstände des letzten Flexelements grenzen an den Endrand der Zeile und jedes weitere Flexelement an das folgende.
- `center`
  - : Die Flexelemente werden in die Mitte der Zeile gepackt. Die Flexelemente grenzen aneinander und werden in der Mitte der Zeile ausgerichtet. Die Leerräume zwischen dem Hauptstartrand und dem ersten Element und zwischen dem Hauptendrand und dem letzten Element sind gleich.
- `space-between`
  - : Flexelemente werden gleichmäßig innerhalb der Zeile verteilt. Die Abstände werden so verteilt, dass sie zwischen zwei angrenzenden Elementen gleich sind. Hauptstartrand und -endrand einer Zeile grenzen an den Rand des ersten bzw. letzten Flexelements.
- `space-around`
  - : Flexelemente werden gleichmäßig innerhalb der Zeile verteilt, sodass die Leerräume zwischen zwei angrenzenden Elementen gleich sind. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Leerraums zwischen zwei angrenzenden Elementen.

### Formale Syntax

{{csssyntax}}

## Beispiele

**HTML:**

```html
<div id="container">
  <p>justify-content: flex-start</p>
  <div id="flex-start">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: flex-end</p>
  <div id="flex-end">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: center</p>
  <div id="center">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: space-between</p>
  <div id="space-between">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: space-around</p>
  <div id="space-around">
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
  font-family: Courier New, Lucida Console, monospace;
}

#container > div > div {
  width: 50px;
  height: 50px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}

#flex-start {
  justify-content: flex-start;
}

#center {
  justify-content: center;
}

#flex-end {
  justify-content: flex-end;
}

#space-between {
  justify-content: space-between;
}

#space-around {
  justify-content: space-around;
}
```

Ergibt:

{{ EmbedLiveSample('Beispiele', 600, 550) }}

## Spezifikationen

| Spezifikation                                                                            | Status                           | Kommentar                |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{SpecName('CSS3 Flexbox', '#justify-content', 'justify-content')}} | {{Spec2('CSS3 Flexbox')}} | Ursprüngliche Definition |

## Browser Kompatibilität

### Support im Flex-Layout

{{Compat("css.properties.justify-content.flex_context")}}

### Support im Grid-Layout

{{Compat("css.properties.justify-content.grid_context")}}

\[1] Firefox unterstützt nur einzeiliges Flexbox Layout bis Version 28. Um Flexbox Unterstützung für Firefox 18 und 19 zu aktivieren, muss die Einstellung `layout.css.flexbox.enabled` in `about:config` auf `true` gesetzt werden.

## Siehe auch

- [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes "CSS/Using_CSS_flexible_boxes")

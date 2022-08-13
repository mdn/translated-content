---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Ränder
  - Grafik
  - Layout
  - Referenz
translation_of: Web/CSS/border-image-repeat
---
{{CSSRef}}

## Übersicht

Die `border-image-repeat` CSS Eigenschaft definiert, wie der mittlere Teil eines Randbildes gehandhabt wird, sodass es in die Ausmaße des Randes passt. Sie hat eine Einwert-Syntax, welche das Verhalten aller Seiten beschreibt, und eine Zweiwert-Syntax, welche unterschiedliche Werte für das horizontale und vertikale Verhalten setzt.

{{cssinfo}}

## Syntax

```css
/* border-image-repeat: Typ */
border-image-repeat: stretch;

/* border-image-repeat: horizontal vertikal */
border-image-repeat: round stretch;

/* Globale Werte */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: unset;
```

### Werte

- _type_
  - : Eins der Schlüsselwörter `stretch`, `repeat`, `round` oder `space`, die angeben, wie das Bild wiederholt wird. Dies wird nur in der Einwert-Syntax verwendet.
- _horizontal_
  - : Eins der Schlüsselwörter `stretch`, `repeat`, `round` oder `space`, die angeben, wie das Bild horizontal wiederholt wird. Dies wird nur in der Zweiwert-Syntax verwendet.
- _vertical_
  - : Eins der Schlüsselwörter `stretch`, `repeat`, `round` oder `space`, die angeben, wie das Bild vertikal wiederholt wird. Dies wird nur in der Zweiwert-Syntax verwendet.
- `stretch`
  - : Schlüsselwort, das angibt, dass das Bild gedehnt werden soll, um den Leerraum zwischen beiden Rändern zu füllen.
- `repeat`
  - : Schlüsselwort, das angibt, dass das Bild wiederholt werden soll, um den Leerraum zwischen beiden Rändern zu füllen.
- `round`
  - : Schlüsselwort, das angibt, dass das Bild wiederholt werden soll bis es den Leerraum zwischen beiden Rändern füllt. Falls das Bild nach einer ganzzahligen Wiederholung nicht den gesamten Leerraum ausfüllt, wird es skaliert, damit es passt.
- `inherit`
  - : Schlüsselwort, das angibt, dass die Werte vom berechneten Wert des Elternelements geerbt werden sollen.

### Formale Syntax

{{csssyntax}}

## Beispiele

Siehe {{cssxref("border-image")}} für Beispiele, welche Auswirkungen Wiederholungswerte haben.

## Spezifikationen

| Spezifikation                                                                                            | Status                                   | Anmerkung                |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Backgrounds', '#border-image-repeat', 'border-image-repeat')}} | {{Spec2('CSS3 Backgrounds')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.border-image-repeat")}}

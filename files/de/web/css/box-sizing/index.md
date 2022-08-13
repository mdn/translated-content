---
title: box-sizing
slug: Web/CSS/box-sizing
tags:
  - CSS
  - CSS Eigenschaft
  - Experimentell
  - Referenz
translation_of: Web/CSS/box-sizing
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft **`box-sizing`** legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet wird.

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

Im [CSS box model](/de/docs/Web/CSS/CSS_Boxmodell/Einführung_in_das_CSS_Boxmodell) wird die Breite `width` und die Höhe `height`, die Sie einem Element zuweisen, standardmäßig nur auf die Inhaltsbox des Elements angewendet. Wenn das Element über einen Rahmen `border` oder Innenabstände `padding` verfügt, wird diese zu der Breite `width` und Höhe `height` hinzugefügt, um die Größe der Box zu erreichen, die auf dem Bildschirm angezeigt wird. Das bedeutet, dass Sie bei der Einstellung von Breite `width` und Höhe `height` den Wert anpassen müssen, um einen eventuell hinzugefügten Rahmen oder Auffüllen zu berücksichtigen. Wenn Sie z.B. vier Boxen mit einer Breite `width: 25%;` haben, wenn eine davon einen linken oder rechten Rand oder einen linken oder rechten Rand hat, passen sie standardmäßig nicht auf eine Zeile innerhalb der Beschränkungen des Elterncontainers.

Die `box-sizing` Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` gibt Ihnen das standardmäßige CSS-Box-Größenverhalten. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, dann wird die Inhaltsbox des Elements 100 Pixel breit sein, und die Breite von Rahmen oder Auffüllungen wird zur endgültigen gerenderten Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box`

  weist den Browser an, bei den Werten, die Sie für die Breite und Höhe eines Elements angeben, alle Ränder und Auffüllungen zu berücksichtigen. Wenn Sie die Breite eines Elements auf 100 Pixel festlegen, werden diese 100 Pixel alle von Ihnen hinzugefügten Ränder oder Füllungen enthalten, und das Inhaltsfeld wird verkleinert, um diese zusätzliche Breite zu absorbieren. Dadurch wird die Größenanpassung von Elementen normalerweise viel einfacher.

> **Hinweis:** Es ist oft nützlich, bei Layoutelementen die `box-sizing` auf `border-box` zu setzen. Dies erleichtert den Umgang mit der Größe von Elementen erheblich und eliminiert im Allgemeinen eine Reihe von Fallstricken, auf die Sie beim Layouten Ihres Inhalts stoßen können. Bei der Verwendung von `position: relative` oder `position: absolute` und der Nutzung von `box-sizing: content-box` können die Positionswerte relativ zum Inhalt und unabhängig von Änderungen der Rahmen- und Füllungsgrößen eingestellt werden, was manchmal wünschenswert ist.

## Syntax

Das `box-sizing` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

```css
/* Schlüsselwortwerte */
box-sizing: content-box;
box-sizing: border-box;

/* Globale Werte */
box-sizing: inherit;
box-sizing: initial;
box-sizing: unset;
```

### Werte

- `content-box`
  - : Dies ist der Standard-Stil, der vom CSS Standard definiert wurde. Die Werte {{Cssxref("width")}} und {{Cssxref("height")}} berechnen sich nur aus dem Inhalt des Elementes und enthalten weder `border`, `margin` oder `padding`.
- `border-box`
  - : Die Werte {{Cssxref("width")}} und {{Cssxref("height")}} enthalten `padding` und `border`, aber nicht `margin`. Das ist das [Boxmodell](/de/docs/Web/CSS/Boxmodell "CSS/Box_model"), das der Internet Explorer im Quirks mode verwendet.

## Formale Definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### Box sizes mit content-box und border-box

Dieses Beispiel zeigt, wie unterschiedliche `box-sizing` Werte die gerenderte Größe von zwei ansonsten identischen Elementen verändern.

#### HTML

```html
<div class="content-box">Content box</div>
<br>
<div class="border-box">Border box</div>
```

#### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* Total width: 160px + (2 * 20px) + (2 * 8px) = 216px
     Total height: 80px + (2 * 20px) + (2 * 8px) = 136px
     Content box width: 160px
     Content box height: 80px */
}

.border-box {
  box-sizing: border-box;
  /* Total width: 160px
     Total height: 80px
     Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px
     Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

#### Result

{{EmbedLiveSample('Box_sizes_with_content-box_and_border-box', 'auto', 300)}}

## Spezifikationen

| Spezifikation                                                                | Status                               | Kommentar                |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS3 Basic UI', '#box-sizing', 'box-sizing')}} | {{Spec2('CSS3 Basic UI')}} | Ursprüngliche Definition |

## Browser Kompabilität

{{Compat("css.properties.box-sizing")}}

## Siehe auch

- [CSS Boxmodell](/de/docs/Web/CSS/Boxmodell "CSS/Box model")

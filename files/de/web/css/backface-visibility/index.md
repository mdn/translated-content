---
title: backface-visibility
slug: Web/CSS/backface-visibility
tags:
  - CSS
  - CSS Eigenschaft
  - Experimentell
  - Referenz
translation_of: Web/CSS/backface-visibility
---
{{CSSRef}}{{SeeCompatTable}}

## Übersicht

Die `backface-visibility` [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, ob die Rückfläche eines Elements sichtbar ist, wenn diese dem Benutzer zugewandt ist. Die Rückfläche eines Elements ist immer ein transparenter Hintergrund, der, wenn sichtbar, ein Spiegelbild der Vorderfläche zeigt.

Es gibt Fälle, in denen es nicht gewollt ist, die Vorderfläche eines Elements durch die Rückfläche sehen zu können, wie beispielsweise bei einem Kartenumdreheffekt, bei dem zwei Elemente Seite an Seite gelegt werden.

Diese Eigenschaft hat keine Auswirkung auf 2D-Transformationen, da es bei diesen keine Perspektive gibt.

{{cssinfo}}

## Syntax

```css
backface-visibility: visible;
backface-visibility: hidden;
```

### Werte

Diese Eigenschaft kann zwei verschiedene (exclusive) Werte annehmen:

- `visible` bedeutet, dass die Rückfläche sichtbar ist, sodass sie die Vorderfläche gespiegelt darstellt;
- `hidden` bedeutet, dass die Rückfläche nicht sichtbar ist und damit die Vorderfläche versteckt wird.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Würfel mit transparenten Flächen

#### HTML

```html
<table>
  <tbody>
    <tr>
      <th><code>backface-visibility: visible;</code></th>
      <th><code>backface-visibility: hidden;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube showbf">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
        <p>Alle Flächen sind transparent und die drei Rückflächen sind durch die Vorderflächen sichtbar.</p>
      </td>
      <td>
        <div class="container">
          <div class="cube hidebf">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
        <p>Obwohl die Flächen halbtransparent sind, sind die drei Rückflächen nun nicht sichtbar.</p>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
/* Klassen, die die drei Rückflächen des "Würfels" entweder zeigen oder verstecken */
.hidebf div {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.showbf div {
  backface-visibility: visible;
  -webkit-backface-visibility: visible;
}

/* Definiert den Container-DIV, den Würfel-DIV und allgemeine Fläche */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
  -webkit-perspective: 300px;
  -webkit-perspective-origin: 150% 150%;
  -webkit-transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Definiert jede Fläche basierend auf deren Position */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
  -webkit-transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
  -webkit-transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
  -webkit-transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
  -webkit-transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
  -webkit-transform: rotateX(90deg) translateZ(50px)
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
  -webkit-transform: rotateX(-90deg) translateZ(50px);
}

/* Verschönert die Tabelle ein wenig */
th, p, td {
  background-color: #EEEEEE;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

#### Ergebnis

{{ EmbedLiveSample('Beispiele', 620, 460) }}

## Spezifikationen

| Spezifikation                                                                                                        | Status                               | Anmerkung                |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS3 Transforms', '#backface-visibility-property', 'backface-visibility')}} | {{Spec2('CSS3 Transforms')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.backface-visibility")}}

## Siehe auch

- [CSS Transformationen verwenden](/de/docs/Web/Guide/CSS/CSS_Transformationen_verwenden "/en-US/docs/CSS/Using_CSS_transforms")

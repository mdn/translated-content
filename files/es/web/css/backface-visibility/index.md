---
title: backface-visibility
slug: Web/CSS/backface-visibility
---

{{CSSRef}}{{SeeCompatTable}}

## Resumen

La propiedad [CSS](/es/docs/CSS) **`backface-visibility`** determina si la cara posterior de un elemento es visible de frente al usuario. La cara posterior de un elemento siempre es un fondo transparente, permitiendo, cuando es visible, que se muestre una imagen de espejo de la cara frontal.

Hay casos en los que no queremos que la cara frontal de un elemento sea visible a través de la cara posterior, como cuando se hace el efecto de voltear una tarjeta (estableciendo dos elementos lado a lado).

Esta propiedad no tiene efecto en transformaciones 2D, pues estos no tienen perspectiva.

{{cssinfo}}

## Sintaxis

```css
backface-visibility: visible;
backface-visibility: hidden;
```

### Valores

Esta propiedad puede tener dos valores diferentes (y exclusivos):

- `visible` significa que la cara posterior es visible, permitiendo que la cara frontal se muestre invertida
- `hidden` significa que la cara posterior no es visible, ocultando la cara frontal

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Cubo con caras transparentes

#### Contenido HTML

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
        <p>
          All the faces are transparent and the three back faces are visible
          through the front ones.
        </p>
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
        <p>
          No face is opaque, but the three back faces are always hidden now.
        </p>
      </td>
    </tr>
  </tbody>
</table>
```

#### Contenido CSS

```css
/* Shorthand classes that will show or hide the three back faces of the "cube" */
.hidebf div {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.showbf div {
  backface-visibility: visible;
  -webkit-backface-visibility: visible;
}

/* Define the container div, the cube div, and a generic face */
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

/* Define each face based on direction */
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
  -webkit-transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
  -webkit-transform: rotateX(-90deg) translateZ(50px);
}

/* Make the table a little nicer */
th,
p,
td {
  background-color: #eeeeee;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

#### Resultado

{{EmbedLiveSample('Cube_with_transparent_faces', 620, 460)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de CSS transforms](/es/docs/CSS/Using_CSS_transforms)

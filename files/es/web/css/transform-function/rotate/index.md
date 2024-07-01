---
title: rotate()
slug: Web/CSS/transform-function/rotate
---

{{CSSRef}}

La función [CSS](/es/docs/) **`rotate()`** define una transformación que gira un elemento alrededor de un punto fijo en un plano 2D sin deformarlo.

El punto fijo alrededor del cual gira el elemento, mencionado anteriormente, también se conoce como el **origen de transformación**. Se establece de manera predeterminada en el centro del elemento, pero se puede personalizar utilizando la propiedad {{ cssxref("transform-origin") }}.

La cantidad de rotación generada por la propiedad `rotate()` se define mediante un {{cssxref("&lt;angle&gt;")}}. Si es positivo, el movimiento serán en el sentido de las agujas del reloj; si es negativo, en sentido contrario a las agujas. Una rotación de 180° se llama centro de simetría.

## Síntaxis

```
rotate(a)
```

## Valores

- _a_
  - : es un {{ cssxref("&lt;angle&gt;") }} que representa en ángulo de rotación. Un ángulo positivo representa un rotación en el sentido del reloj y un ángulo negativo representa una rotación en sentido contrario a las agujas del reloj.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordenadas cartesianas en ℝ<sup>2</sup></th>
      <th scope="col">Coordenadas homgéneas en ℝℙ<sup>2</sup></th>
      <th scope="col">Coordinadas cartesianas en ℝ<sup>3</sup></th>
      <th scope="col">Coordenadas homgéneas en ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtr>
              <mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd
                ><mtd>0</mtd></mtr
              ><mtr
                ><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[cos(a) sin(a) -sin(a) cos(a) 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Ejemplos

### HTML

```html
<p>foo</p>
<p class="transformed">bar</p>
```

### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformed {
  /* idéntico a rotateZ(45deg); */
  transform: rotate(45deg);
  background-color: blue;
}
```

### Resultado

{{EmbedLiveSample("Examples","100%","200")}}

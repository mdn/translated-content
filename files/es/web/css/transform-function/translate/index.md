---
title: translate()
slug: Web/CSS/transform-function/translate
---

{{CSSRef}}

La function de [CSS](/es/docs/Web/CSS) **`translate()`** recoloca un elemento en el eje horizontal y/o vertical. Su resultado es de tipo {{cssxref("&lt;transform-function&gt;")}}.

Esta transformacion esta compuesta por un vector bidimensional cuyas coordenadas definen cuanto se movera el elemente en cada dirección.

## Sintaxis

La function `translate()` esta especificada con uno o dos valores.

```
translate(tx)

translate(tx, ty)
```

### Valores

- `tx`
  - : Es un {{cssxref("&lt;length&gt;")}} que representa la absisa (coordenada x) del vector de translación.
- `ty`
  - : Es un {{cssxref("&lt;length&gt;")}} que representa las ordenadas (coordenada y) del vector de translación. Si no se especifica, su valor es 0. Por ejemplo, `translate(2)` es equivalente a `translate(2, 0)`.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordenadas cartesianas en ℝ<sup>2</sup></th>
      <th scope="col">Coordenadas homogeneas en ℝℙ<sup>2</sup></th>
      <th scope="col">
        <p>Coordenadas cartesianas en ℝ<sup>3</sup></p>
      </th>
      <th scope="col">Coordenadas homogeneas en ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <p>
          Una translación no es una transformación lineal en ℝ<sup>2</sup> y no
          puede ser representada usando una matriz de coordenadas cartesianas.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
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
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Translación en un solo eje

#### HTML

```html
<div>Estático</div>
<div class="moved">Movido</div>
<div>Estático</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px); /* Equivalente a translateX(10px) */
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Using_a_single-axis_translation", 250, 250)}}

### Translación combinada en los ejes X e Y

#### HTML

```html
<div>Estático</div>
<div class="moved">Movido</div>
<div>Estático</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Combining_y-axis_and_x-axis_translation", 250, 250)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

Ver el tipo de datos [`<transform-function>`](/es/docs/Web/CSS/transform-function#Browser_compatibility) para la información de compatibilidad.

## Véase también

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}

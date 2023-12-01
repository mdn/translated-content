---
title: scale()
slug: Web/CSS/transform-function/scale
---

{{CSSRef}}

La función CSS `scale()` define una transformación que modifica el tamaño de un elemento en el plano 2D. Debido a que la cantidad de escalado está definida por un vector, puede cambiar el tamaño de la dimensiones horizontal y vertical a diferentes escalas. Su resultado es un dato tipo {{cssxref("transform-function")}}.

Esta transformación de escalado se caracteriza por un vector bidimensional. Sus coordenadas definen cuanto escalamiento se realiza en cada dirección. Sí ambas coordenadas son iguales, la escala es uniforme (isotrópica) y la relación de aspecto del elemento se conserva (esta es una transformación homotética).

Cuando un valor de coordenadas está fuera del rango \[-1, 1], el elemento crece a lo largo de esa dimensión; cuando está dentro, se encoge. Si es negativo, el resultado es un reflejo de punto en esa dimensión. Un valor de 1 no tiene ningún efecto.

> **Nota:** La función scale() solo se escala en 2d. Para escalar en 3D se utiliza la función scale3d() en su lugar.

## Sintaxis

La función scale () se especifica con uno o dos valores, que representan la cantidad de escala que se aplicará en cada dirección.

```
scale(sx) scale(sx, sy)
```

## Valores

- _sx_
  - : Es un {{cssxref("&lt;número&gt;")}} representando la abscisa del vector de escala.
- _sy_
  - : Es un {{cssxref("&lt;número&gt;")}} representado la ordenada de la escala del vector. Si no está presente, su valor por defecto es _**sx**_, llevando a una escala uniforme preservando la curva del elemento.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordenadas Cartesianas en ℝ<sup>2</sup></th>
      <th scope="col">Coordenadas Homogéneas en ℝℙ<sup>2</sup></th>
      <th scope="col">Coordenadas Cartesianas en ℝ<sup>3</sup></th>
      <th scope="col">Coordenadas Homogéneas en ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>sx</mtd><mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>sy</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Escalar las dimensiones X e Y al mismo tiempo

#### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(0.7); /* Igual que: scaleX(0.7) scaleY(0.7) */
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Scaling_the_X_and_Y_dimensions_together", "200", "200")}}

### Escalando dimensiones X e Y por separado y trasladando el origen

#### HTML

```
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

```
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(2, 0.5); /* Igual que: scaleX(2) scaleY(0.5) */
  transform-origin: left;
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Scaling_X_and_Y_dimensions_separately_and_translating_the_origin", "200", "200")}}

## Compatibilidad con navegadores

Please see the [`<transform-function>`](/es/docs/Web/CSS/transform-function#Browser_compatibility) data type for compatibility info.

## También puede ver

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`scale3d()`](/es/docs/Web/CSS/transform-function/scale3d)

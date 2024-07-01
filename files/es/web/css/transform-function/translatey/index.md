---
title: translateY()
slug: Web/CSS/transform-function/translateY
---

{{CSSRef}}

La función **`translateY()`** de [CSS](/es/docs/Web/CSS) reposiciona un elemento verticalmente dentro del plano bidimensional. Su resultado es de tipo {{cssxref("&lt;transform-function&gt;")}}.

> **Nota:** `translateY(ty)` es equivalente a `translate(0, ty)` o `translate3d(0, ty, 0)`.

## Sintaxis

```css
/* <length-percentage> values */
transform: translateY(200px);
transform: translateY(50%);
```

### Valores

- `<length-percentage>`
  - : El valor es de tipo {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;percentage&gt;")}}, representando el ordinal del vector de traslación. Un valor en porcentaje es relativo a la altura de la caja de referencia definida por la propiedad {{cssxref("transform-box")}}.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordenadas cartesianas en ℝ<sup>2</sup></th>
      <th scope="col">Coordenadas homogéneas en ℝℙ<sup>2</sup></th>
      <th scope="col">Coordenadas cartesianas en ℝ<sup>3</sup></th>
      <th scope="col">Coordenadas homogéneas en ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <p>
          Una traslación no es una transformación linear en ℝ<sup>2 </sup>y no
          puede ser representada usando una matriz de coordenada cartesiana.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><math
            ><mfenced
              ><mtable
                ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
                ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
                ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
              ></mfenced
            ></math
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>t</mtd></mtr
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
      <td><code>[1 0 0 1 0 t]</code></td>
    </tr>
  </tbody>
</table>

### Sintaxis formal

```
translateY({{cssxref("&lt;length-percentage&gt;")}})
```

## Ejemplos

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateY(10px);
  background-color: pink;
}
```

### Resultado

{{EmbedLiveSample("Ejemplos", 250, 250)}}

## Especificaciones

{{Specifications}}

## Compatibilidad de navegadores

Por favor, véase el tipo [`<transform-function>`](/es/docs/Web/CSS/transform-function#Browser_compatibility) para información de compatibilidad.

## Véase también

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}

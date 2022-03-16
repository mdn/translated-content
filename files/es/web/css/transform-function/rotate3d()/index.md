---
title: rotate3d()
slug: Web/CSS/transform-function/rotate3d()
translation_of: Web/CSS/transform-function/rotate3d()
browser-compat: css.types.transform-function.rotate3d
---
{{CSSRef}}

La [función](/es/docs/Web/CSS/CSS_Functions) **`rotate3d()`** de [CSS](/es/docs/Web/CSS) define una transformación que mueve el elemento alrededor de un eje fijo sin deformarlo. Su resultado es un tipo de dato {{cssxref("&lt;transform-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/rotate3d.html")}}

En el espacio tridimencional, las rotaciones tienen tres grados de libertad, juntos describen un ángulo de rotación. El ángulo de rotación está definido por un vector \[x, y, z] y pasa por el origen (como lo define la propiedad {{cssxref("transform-origin")}}. Si el vector no está _normalizado_ (ej. si la suma del cuadrado de sus tres coordenadas no es igual a 1), el  {{glossary("user agent")}} lo normalizará internamente. Un vector no-normalizable, como es el caso del vector nulo, \[0, 0, 0], causará que la rotación no sea aplicada, pero sin que esto invalide la propiedad CSS en su totalidad.

> **Nota:** Contrario a las rotaciones en el plano 2D, la composición de las rotaciones 3D normalmente no es conmutativa; lo que significa que el orden en el que dichas rotaciones son aplicadas impacta al resultado.

## Sintaxis

La cantidad de rotación creada por `rotate3d()` está especificada por tres {{cssxref("&lt;number&gt;")}}s y un {{cssxref("&lt;angle&gt;")}}. El `<number>` representa las coordenadas _x_, _y_ y _z_ del vector, denotando los ejes de la rotación. El `<angle>` representa el angulo de rotación; si es positivo el movimiento será en el sentido de las agujas del reloj; si es negativo será en el sentido opuesto.

```css
rotate3d(x, y, z, a)
```

## Valores

- `x`
  - : Es un {{cssxref("&lt;number&gt;")}} que describe la coordenada-x del vector y denota el eje de rotación.
- `y`
  - : Es un {{cssxref("&lt;number&gt;")}} que describe la coordenada-y del vector y denota el eje de rotación.
- `z`
  - : Es un {{cssxref("&lt;number&gt;")}} que describe la coordenada-z del vector y denota el eje de rotación.
- `a`
  - : Es un {{ cssxref("&lt;angle&gt;") }} que representa el ángulo de rotación. Un valor positivo indica una rotación en el sentido de las agujas del reloj, un valor negativo indica una rotación en sentido contrario a las agujas del reloj.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Coordenadas cartesianas en ℝ^2</th>
      <td rowspan="2">
        Esta transformación aplica al espacio tridimencional y no puede ser representada en el plano.
      </td>
      </tr>
    <tr>
      <th scope="col">Coordenadas homogéneas en ℝℙ^2</th>
    </tr>
    <tr>
      <th scope="col">Coordenadas cartesianas en ℝ^3</th>
      <td>
        <a
          href="/es/docs/Web/CSS/transform-function/rotate3d()/transform-functions-rotate3d_cart.png"
          ><img src="transform-functions-rotate3d_cart.png" /></a
        ><math>
          <mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <msup
                    ><mi>x</mi>
                    <mn>2</mn> </msup
                  ><mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mi>z</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>y</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mi>y</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>-</mo>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>y</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <mi>y2</mi>
                  <mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mi>x</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>y</mi>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                </mtd></mtr
              ><mtr
                ><mtd
                  ><mi>y</mi>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>xz</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mi>x</mi>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>yz</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <mi>z2</mi>
                  <mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd><mi>t</mi></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
    <tr>
      <th scope="col">Coordenadas homogéneas en ℝℙ^3</th>
      <td>
        <a
          href="/es/docs/Web/CSS/transform-function/rotate3d()/transform-functions-rotate3d_hom4.png"
          ><img src="transform-functions-rotate3d_hom4.png"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Rotar sobre el eje-Y

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotado</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(0, 1, 0, 60deg);
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Rotating_on_the_y-axis", "auto", 180)}}

### Rotar sobre un eje personalizado

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotado</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(1, 2, -1, 192deg);
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Rotating_on_a_custom_axis", "auto", 180)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}

---
title: transform
slug: Web/CSS/transform
---

{{CSSRef}}

La propiedad CSS `transform` te permite modificar el espacio de coordenadas del modelo de formato visual CSS. Usándola, los elementos pueden ser trasladados, rotados, escalados o sesgados de acuerdo a los valores establecidos.

{{EmbedInteractiveExample("pages/css/transform.html")}}

Si la propiedad tiene un valor diferente a none, se creará un [contexto de pila](/es/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). En ese caso, el objeto actuará como un bloque de contención para los elementos con "position: fixed" que contenga.

## Síntaxis

```css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
transform: matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: perspective(17px);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```

### Valores

- `<transform-function>`
  - : Una o más de las [funciones de transformación CSS](/es/docs/Web/CSS/transform-function) que se aplicarán, ver más abajo.
- `none`
  - : Especifica que ninguna transformación podrá ser aplicada.

{{cssinfo}}

### Síntasix formal

{{csssyntax}}

## Ejemplos

Consulte [Uso de las transformaciones CSS.](/es/docs/Web/Guide/CSS/Using_CSS_transforms)

## Funciones CSS transform

La propiedad CSS `transform` permite manipular el sistema de coordenadas de un elemento usando las **funciones de transformación**. Estas funciones son descritas a continuación:

### matrix

```
transform:  matrix(a, c, b, d, tx, ty)
```

Específica una matriz de transformación 2D compuesta por seis valores a especificar. Esto es el equivalente a la aplicación de una transformación lineal de una matriz <math><semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd><mtd><mstyle mathvariant="normal"><mrow><mi>t</mi><mi>x</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd><mtd><mstyle mathvariant="normal"><mrow><mi>t</mi><mi>y</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX"> \begin{pmatrix} a &#x26; b &#x26; \mathrm{tx} \\ c &#x26; d &#x26; \mathrm{ty} \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix} </annotation></semantics></math>de un mapa coordenadas de un nuevo sistema de coordenadas en un sistema de coordenadas anterior por las siguientes igualdades de la matriz: <math><semantics><mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd><mtd><mstyle mathvariant="normal"><mrow><mi>t</mi><mi>x</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd><mtd><mstyle mathvariant="normal"><mrow><mi>t</mi><mi>y</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>b</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mstyle mathvariant="normal"><mrow><mi>t</mi><mi>x</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mi>c</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mstyle mathvariant="normal"><mrow><mi>t</mi><mi>y</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x*{\mathrm{prevCoordSys}} \\ y*{\mathrm{prevCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a &#x26; b &#x26; \mathrm{tx} \\ c &#x26; d &#x26; \mathrm{ty} \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix} \begin{pmatrix} x*{\mathrm{newCoordSys}} \\ y*{\mathrm{newCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x*{\mathrm{newCoordSys}} + b y*{\mathrm{newCoordSys}} + \mathrm{tx} \\ c x*{\mathrm{newCoordSys}} + d y*{\mathrm{newCoordSys}} + \mathrm{ty} \\ 1 \end{pmatrix}</annotation></semantics></math>

> **Nota:** Viejas versiones de Gecko (Firefox) aceptan un {{cssxref("&lt;length&gt;")}} valor para **tx** y **ty**. Actualmente Gecko, junto con Webkit (Safari, Chrome) y Opera, soportan valor sin unidades {{cssxref("&lt;number&gt;")}} para **tx** y **ty**.

## Ejemplos realizados

```
 background: gold;  width: 30em;

 -webkit-transform: matrix(1, -0.2, 0, 1, 0, 0);
      -o-transform: matrix(1, -0.2, 0, 1, 0, 0);
         transform: matrix(1, -0.2, 0, 1, 0, 0);
```

```
 background: wheat;
 max-width: intrinsic;

 -webkit-transform: matrix(1, 0, 0.6, 1,  250, 0);
      -o-transform: matrix(1, 0, 0.6, 1,  250, 0);
         transform: matrix(1, 0, 0.6, 1,  250, 0);
```

#### Información adicional

- [Ejemplo de transformación general de SVG](/es/docs/Web/SVG/Attribute/transform#General_Transformation)
- [Ejemplos de transformación lineal de matrices](http://en.wikipedia.org/wiki/Linear_transformation#Examples_of_linear_transformation_matrices) Wikipedia
- [Transformación de coordenadas de matrices](http://www.mathamazement.com/Lessons/Pre-Calculus/08_Matrices-and-Determinants/coordinate-transformation-matrices.html)mathamazement.com
- [Filtro matriz de Microsoft](<http://msdn.microsoft.com/en-us/library/ms533014(VS.85,loband).aspx>) MSDN

### rotate

```
transform:  rotate(deg);     /* ej. rotate(90deg) */
```

Define una operación de rotación 2D de un elemento, específicando la cantidad de grados (deg) que este rotará en sentido de las manecillas del reloj (según lo especificado por la propiedad [transform-origen](/es/docs/Web/CSS/transform-origin)). La operación corresponde a la matriz **\[cos(angle) sin(angle) -sin(angle) cos(angle) 0 0]**.

### rotateX

```
transform:  rotateX(deg);    /* ej. rotateX(90deg) */
```

Define una operación de rotación 3D de un elemento en el eje X.

### rotateY

```
transform:  rotateY(deg);    /* ej. rotateY(90deg) */
```

Define una operación de rotación 3D de un elemento en el eje Y.

### rotateZ

```
transform:  rotateZ(deg);    /* ej. rotateZ(90deg) */
```

Define una operación de rotación 3D de un elemento en el eje Z.

### scale

```
transform:  scale(sx[, sy]);    /* ej. scale(2.5, 4)*/
```

Especifica una operación de escalado 2D descrita por **\[sx, sy]**.

> **Nota:** Nota: Si **sy** no es especificado, se asumirá que tanto **sx** como **sy** tendrán el mismo valor

### scaleX

```
transform:  scaleX(sx);     /* ej. scale(2.5)*/
```

Especifica una operación de escalado 2D usando el vector **\[sx, 1]**.

### scaleY

```
transform:  scaleY(sy);    /* ej. scale(4)*/
```

Especifica una operación de escalado 2D usando el vector **\[1, sy]**.

### skew

```
transform:  skew(ax[, ay]);     /* ej. skew(90deg,180deg)*/
```

Sesga el elemento a lo largo del eje X y Y por los ángulos especificados. Si no se proporciona **ay**, no se llevará a cabo el sesgo del eje Y.

> **Nota:** La función skew() fue presentada en los primeros borradores. Esta ha sido removida pero sigue presente en algunas implementaciones. No debe usarse.
>
> Para lograr el mismo efecto, utilice la función skewX(). Si tu estas usando skew () con un parámetro o matriz (1, tan (ay), tan (ax), 1, 0, 0). Ten en cuenta que tan() no es una función CSS y así que tu mismo tienes que precalcular tus valores.

### skewX

```
transform:  skewX(deg);     /* ej. skew(90deg)*/
```

Sesga un elemento a lo largo del eje X por el ángulo dado.

### skewY

```
transform:  skewY(deg);     /* ej. skew(180deg)*/
```

Sesga un elemento a lo largo del eje Y por el ángulo dado.

### translate

```
transform:  translate(tx[, ty]);     /* ej. translate(50px, 100px) */
```

Especifica una tanslación 2D dada por el vector **\[tx, ty]**. Si **`ty`** no es específicada, se asumirá que su valor es cero.

Cada [`translation-value`](/es/docs/translation-value) puede ser un valor de [`longuitud`](/es/docs/CSS/length) o un valor de [`porcentaje`](/es/docs/CSS/percentage).

### translateX

```
transform:  translateX(tx);     /* ej. translateX(50px) */
```

Translada un elemento a lo largo del eje X.

### translateY

```
transform:  translateY(ty);     /* ej. translateY(100px) */
```

Translada un elemento a lo largo del eje Y.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase También

- [Uso de transformaciones](/es/docs/CSS/Using_CSS_transforms)[CSS](/es/docs/CSS/Using_CSS_transforms)
- Tipos de datos [\<translation-value>](/es/docs/translation-value)
- [Complemento de transformación 2D para jQuery](http://plugins.jquery.com/project/jquery-transform)en navegador-cruzado.

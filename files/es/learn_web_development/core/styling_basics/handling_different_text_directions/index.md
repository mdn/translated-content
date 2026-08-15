---
title: Cómo manejar diferentes direcciones de texto
short-title: Múltiples direcciones de texto
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

Muchas de las propiedades y valores que hemos visto hasta ahora en nuestro aprendizaje de CSS han estado ligadas a las dimensiones físicas de nuestra pantalla. Por ejemplo, creamos bordes en la parte superior, derecha, inferior e izquierda de una caja. Estas dimensiones físicas se ajustan muy bien al contenido que se visualiza horizontalmente, y por defecto la web tiende a soportar mejor los idiomas de izquierda a derecha (por ejemplo, inglés o francés) que los idiomas de derecha a izquierda (como el árabe).

Sin embargo, en los últimos años CSS ha evolucionado para dar mejor soporte a diferentes direccionalidades de contenido, incluyendo no solo de derecha a izquierda, sino también de arriba hacia abajo (como el japonés) — a estas diferentes direccionalidades se les llama **modos de escritura**. A medida que avances en tu aprendizaje y comiences a trabajar con maquetación, entender los modos de escritura te será de mucha ayuda, por lo que los presentaremos ahora.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        <a
          href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Software básico instalado</a
        >, conocimientos básicos de
        <a
          href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >cómo trabajar con archivos</a
        >, fundamentos de HTML (estudia
        <a href="/es/docs/Learn_web_development/Core/Structuring_content"
          >Introducción a HTML</a
        >), y una idea de cómo funciona CSS (estudia
        <a href="/es/docs/Learn_web_development/Core/Styling_basics">Fundamentos de estilos con CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Comprender la importancia de los modos de escritura en el CSS moderno.</td>
    </tr>
  </tbody>
</table>

## ¿Qué son los modos de escritura?

Un modo de escritura en CSS se refiere a si el texto se desplaza de forma horizontal o vertical. La propiedad {{cssxref("writing-mode")}} nos permite cambiar de un modo de escritura a otro. No es necesario que estés trabajando con un idioma que use un modo de escritura vertical para querer hacer esto — también puedes cambiar el modo de escritura de partes de tu maquetación con fines creativos.

En el siguiente ejemplo tenemos un encabezado mostrado usando `writing-mode: vertical-rl`. El texto ahora se desplaza verticalmente. El texto vertical es común en el diseño gráfico, y puede ser una forma de darle un aspecto más interesante a tu diseño web.

```html live-sample___simple-vertical
<h1>Play with writing modes</h1>
```

`css live-sample___simple-vertical
body {
  font-family: sans-serif;
  height: 300px;
}
h1 {
  writing-mode: vertical-rl;
  color: white;
  background-color: black;
  padding: 10px;
}
`

{{EmbedLiveSample("simple-vertical", "", "350px")}}

Los tres valores posibles para la propiedad {{cssxref("writing-mode")}} son:

- `horizontal-tb`: Dirección de flujo de bloque de arriba hacia abajo. Las oraciones se desplazan horizontalmente.
- `vertical-rl`: Dirección de flujo de bloque de derecha a izquierda. Las oraciones se desplazan verticalmente.
- `vertical-lr`: Dirección de flujo de bloque de izquierda a derecha. Las oraciones se desplazan verticalmente.

Entonces, la propiedad `writing-mode` en realidad establece la dirección en la que se muestran los elementos de nivel de bloque en la página: ya sea de arriba hacia abajo, de derecha a izquierda, o de izquierda a derecha. Esto a su vez determina la dirección en la que fluye el texto en las oraciones.

## Modos de escritura y la disposición de bloque y en línea

Ya hemos hablado de la [disposición de bloque y en línea](/es/docs/Web/CSS/Guides/Display/Block_and_inline_layout), y del hecho de que algunas cosas se muestran como elementos de bloque y otras como elementos en línea. Como hemos visto anteriormente, el comportamiento de bloque y en línea está ligado al modo de escritura del documento, y no a la pantalla física. Los bloques solo se muestran de arriba hacia abajo en la página si estás usando un modo de escritura que despliega el texto horizontalmente, como el inglés.

Si observamos un ejemplo, esto quedará más claro. En el siguiente ejemplo tengo dos cajas que contienen un encabezado y un párrafo. La primera usa `writing-mode: horizontal-tb` — un modo de escritura horizontal, de arriba hacia abajo. La segunda usa `writing-mode: vertical-rl` — un modo de escritura vertical, de derecha a izquierda.

```html live-sample___block-inline
<div class="wrapper">
  <div class="box horizontal">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
  </div>
  <div class="box vertical">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
  </div>
</div>
```

```css live-sample___block-inline
body {
  font-family: sans-serif;
  height: 300px;
}
.wrapper {
  display: flex;
}

.box {
  border: 1px solid #cccccc;
  padding: 0.5em;
  margin: 10px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("block-inline", "", "350px")}}

Cuando cambiamos el modo de escritura, estamos cambiando cuál dirección es de bloque y cuál es en línea. En un modo de escritura `horizontal-tb`, la dirección de bloque va de arriba hacia abajo; en un modo de escritura `vertical-rl`, la dirección de bloque va de derecha a izquierda horizontalmente. Entonces, la **dimensión de bloque** siempre es la dirección en la que se muestran los bloques en la página según el modo de escritura en uso. La **dimensión en línea** siempre es la dirección en la que fluye una oración.

Esta figura muestra las dos dimensiones en un modo de escritura horizontal.

![Mostrando el eje de bloque y en línea para un modo de escritura horizontal.](horizontal-tb.png)

Esta figura muestra las dos dimensiones en un modo de escritura vertical.

![Mostrando el eje de bloque y en línea para un modo de escritura vertical.](vertical.png)

Una vez que empieces a estudiar la disposición en CSS, y en particular los métodos de disposición más nuevos, esta idea de bloque y en línea se vuelve muy importante. Volveremos a este tema más adelante.

### Dirección

Además del modo de escritura, también tenemos la dirección del texto. Como mencionamos antes, algunos idiomas como el árabe se escriben horizontalmente, pero de derecha a izquierda. Esto no es algo que probablemente uses con fines creativos — si quieres alinear algo a la derecha hay otras formas de hacerlo — sin embargo, es importante entender esto como parte de la naturaleza de CSS. ¡La web no es solo para idiomas que se muestran de izquierda a derecha!

Debido a que el modo de escritura y la dirección del texto pueden cambiar, los métodos de disposición más nuevos de CSS no se refieren a izquierda y derecha, ni a arriba y abajo. En su lugar, hablarán de _inicio_ y _fin_, junto con esta idea de bloque y en línea. No te preocupes demasiado por esto ahora, pero ten estas ideas en mente cuando empieces a estudiar la disposición; te resultará muy útil para entender CSS.

## Propiedades y valores lógicos

La razón para hablar de modos de escritura y dirección en este punto de tu aprendizaje es que ya hemos visto muchas propiedades que están ligadas a las dimensiones físicas de la pantalla, y estas tienen más sentido cuando estamos en un modo de escritura horizontal.

Volvamos a ver nuestras dos cajas — una con un modo de escritura `horizontal-tb` y otra con `vertical-rl`. A ambas cajas les he asignado un {{cssxref("width")}}. Puedes ver que cuando la caja está en el modo de escritura vertical, sigue teniendo un ancho, y esto hace que el texto se desborde.

```html live-sample___width
<div class="wrapper">
  <div class="box horizontal">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
    <p>These boxes have a width.</p>
  </div>
  <div class="box vertical">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
    <p>These boxes have a width.</p>
  </div>
</div>
```

```css live-sample___width
body {
  font-family: sans-serif;
  height: 300px;
}
.wrapper {
  display: flex;
}

.box {
  border: 1px solid #cccccc;
  padding: 0.5em;
  margin: 10px;
  width: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("width", "", "350px")}}

Lo que realmente queremos en este escenario es básicamente intercambiar la altura por el ancho según el modo de escritura. Cuando estamos en un modo de escritura vertical, queremos que la caja se expanda en la dimensión de bloque, tal como lo hace en el modo horizontal.

Para facilitar esto, CSS ha desarrollado recientemente un conjunto de propiedades mapeadas. Estas esencialmente reemplazan propiedades físicas — cosas como `width` y `height` — con versiones **lógicas**, o **relativas al flujo**.

La propiedad mapeada a `width` cuando estamos en un modo de escritura horizontal se llama {{cssxref("inline-size")}} — se refiere al tamaño en la dimensión en línea. La propiedad para `height` se llama {{cssxref("block-size")}} y es el tamaño en la dimensión de bloque. Puedes ver cómo funciona esto en el siguiente ejemplo, donde reemplazamos `width` por `inline-size`.

```html live-sample___inline-size
<div class="wrapper">
  <div class="box horizontal">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
    <p>These boxes have inline-size.</p>
  </div>
  <div class="box vertical">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
    <p>These boxes have inline-size.</p>
  </div>
</div>
```

````css live-sample___inline-size
.wrapper {
display: flex;
}

.box {
border: 1px solid #cccccc;
padding: 0.5em;
margin: 10px;
inline-size: 100px;
}

.horizontal {
writing-mode: horizontal-tb;
}

.vertical {
writing-mode: vertical-rl;
}
​```

{{EmbedLiveSample("inline-size", "", "300px")}}

### Propiedades lógicas de margen, borde y relleno

En las últimas dos lecciones aprendimos sobre el modelo de caja de CSS y los bordes en CSS. En las propiedades de margen, borde y relleno encontrarás muchos casos de propiedades físicas, por ejemplo {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, y {{cssxref("border-bottom")}}. De la misma forma en que existen mapeos para `width` y `height`, existen mapeos para estas propiedades.

La propiedad `margin-top` se mapea a {{cssxref("margin-block-start")}} — esta siempre se refiere al margen al inicio de la dimensión de bloque.

La propiedad {{cssxref("padding-left")}} se mapea a {{cssxref("padding-inline-start")}}, el relleno que se aplica al inicio de la dirección en línea. Este será el lugar donde comienzan las oraciones en ese modo de escritura. La propiedad {{cssxref("border-bottom")}} se mapea a {{cssxref("border-block-end")}}, que es el borde al final de la dimensión de bloque.

Puedes ver una comparación entre propiedades físicas y lógicas a continuación.

Si cambias el modo de escritura de las cajas cambiando la propiedad `writing-mode` en `.box` a `vertical-rl`, verás cómo las propiedades físicas se mantienen ligadas a su dirección física, mientras que las propiedades lógicas cambian junto con el modo de escritura.

También puedes ver que el {{htmlelement("Heading_Elements", "h2")}} tiene un `border-bottom` negro. ¿Puedes descubrir cómo hacer que ese borde inferior siempre quede debajo del texto en ambos modos de escritura?

​```html live-sample___logical-mbp
<div class="wrapper">
  <div class="box physical">
    <h2>Physical Properties</h2>
    <p>A paragraph demonstrating logical properties in CSS.</p>
  </div>
  <div class="box logical">
    <h2>Logical Properties</h2>
    <p>A paragraph demonstrating logical properties in CSS.</p>
  </div>
</div>
````

```css live-sample___logical-mbp
.wrapper {
  display: flex;
  border: 5px solid #cccccc;
}

.box {
  margin-right: 30px;
  inline-size: 200px;
  writing-mode: horizontal-tb;
}

.logical {
  margin-block-start: 20px;
  padding-inline-end: 2em;
  padding-block-start: 2px;
  border-block-start: 5px solid pink;
  border-inline-end: 10px dotted rebeccapurple;
  border-block-end: 1em double orange;
  border-inline-start: 1px solid black;
}

.physical {
  margin-top: 20px;
  padding-right: 2em;
  padding-top: 2px;
  border-top: 5px solid pink;
  border-right: 10px dotted rebeccapurple;
  border-bottom: 1em double orange;
  border-left: 1px solid black;
}

h2 {
  border-bottom: 5px solid black;
}
```

{{EmbedLiveSample("logical-mbp", "", "200px")}}

Hay una gran cantidad de propiedades si consideras todas las propiedades individuales de borde, y puedes ver todas las propiedades mapeadas en la página de MDN sobre [Propiedades y valores lógicos](/es/docs/Web/CSS/Guides/Logical_properties_and_values).

### Valores lógicos

Hasta ahora hemos visto nombres de propiedades lógicas. También hay algunas propiedades que aceptan valores físicos como `top`, `right`, `bottom`, y `left`. Estos valores también tienen mapeos a valores lógicos — `block-start`, `inline-end`, `block-end`, e `inline-start`.

Por ejemplo, puedes flotar una imagen a la izquierda para hacer que el texto la rodee. Podrías reemplazar `left` por `inline-start` como se muestra en el siguiente ejemplo.

Cambia el modo de escritura de este ejemplo a `vertical-rl` para ver qué le sucede a la imagen. Cambia `inline-start` a `inline-end` para cambiar el flotado:

```html live-sample___float
<div class="wrapper">
  <div class="box logical">
    <img
      alt="star"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
    <p>
      This box uses logical properties. The star image has been floated
      inline-start, it also has a margin on the inline-end and block-end.
    </p>
  </div>
</div>
```

````css live-sample___float
.wrapper {
display: flex;
}

.box {
margin: 10px;
padding: 0.5em;
border: 1px solid #cccccc;
inline-size: 200px;
writing-mode: horizontal-tb;
}

img {
float: inline-start;
margin-inline-end: 10px;
margin-block-end: 10px;
}
​```

{{EmbedLiveSample("float", "", "200px")}}

Aquí también estamos usando valores lógicos de margen para asegurarnos de que el margen quede en el lugar correcto sin importar cuál sea el modo de escritura.

### ¿Deberías usar propiedades físicas o lógicas?

Las propiedades y valores lógicos son más recientes que sus equivalentes físicos, y por lo tanto se han implementado en los navegadores solo desde hace poco tiempo. Puedes revisar cualquier página de propiedades en MDN para ver hasta dónde llega el soporte de navegadores. Si no estás usando múltiples modos de escritura, entonces por ahora podrías preferir usar las versiones físicas. Sin embargo, en última instancia esperamos que las personas transicionen hacia las versiones lógicas para la mayoría de los casos, ya que tienen mucho sentido una vez que empiezas a trabajar con métodos de disposición como flexbox y grid.

## Resumen

Los conceptos explicados en esta lección son cada vez más importantes en CSS. Entender la dirección de bloque y en línea — y cómo el flujo del texto cambia al cambiar el modo de escritura — te será muy útil de aquí en adelante. Te ayudará a entender CSS incluso si nunca usas un modo de escritura distinto al horizontal.
````

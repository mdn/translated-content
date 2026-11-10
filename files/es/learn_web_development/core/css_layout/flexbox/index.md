---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: c55a38c71a356502e6d3df5e246b6e89f9e83498
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/es/docs/Web/CSS/Guides/Flexible_box_layout) es un método de diseño unidimensional para disponer elementos en filas o columnas. Los elementos se _flexionan_ (se expanden) para ocupar el espacio adicional o se encogen para caber en espacios más pequeños. Este artículo explica todos los fundamentos.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Core/Structuring_content"
          >Estructurar el contenido con HTML</a
        >,
        <a href="/es/docs/Learn_web_development/Core/Styling_basics">Fundamentos de estilo con CSS</a>,
        <a href="/es/docs/Learn_web_development/Core/Text_styling/Fundamentals">Estilos fundamentales de texto y fuentes</a>,
        y estar familiarizado con los <a href="/es/docs/Learn_web_development/Core/CSS_layout/Introduction">conceptos fundamentales del diseño con CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>El propósito de flexbox: disponer de forma flexible un conjunto de elementos de bloque o en línea en una dimensión.</li>
          <li>La terminología de flex: contenedor flexible, elemento flexible, eje principal y eje transversal.</li>
          <li>Entender qué te da <code>display: flex</code> de forma predeterminada.</li>
          <li>Cómo hacer que el contenido pase a nuevas filas y columnas.</li>
          <li>El dimensionamiento flexible y el orden de los elementos flexibles.</li>
          <li>Justificar y alinear el contenido.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Por qué flexbox?

El diseño de caja flexible de CSS te permite:

- Centrar verticalmente un bloque de contenido dentro de su padre.
- Hacer que todos los hijos de un contenedor ocupen la misma cantidad del ancho o la altura disponibles, sea cual sea el ancho o la altura disponibles.
- Hacer que todas las columnas de un diseño de varias columnas tengan la misma altura, aunque contengan cantidades distintas de contenido.

Las características de flexbox pueden ser la solución perfecta para tus necesidades de diseño unidimensional. ¡Vamos a profundizar y descubrirlo!

> [!NOTE]
> El scrim introductorio [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> ofrece una guía interactiva que explica lo habitual que es flexbox en la web y, por tanto, por qué es tan importante aprenderlo, y te guía por un caso de uso típico que demuestra la potencia de flexbox.

## Presentación de un ejemplo sencillo

En este artículo harás una serie de ejercicios que te ayudarán a entender cómo funciona flexbox. Para empezar, haz una copia local del HTML y el CSS. Cárgala en un navegador moderno (como Firefox o Chrome) y echa un vistazo al código en tu editor de código. También puedes hacer clic en el botón «Play» para abrirlo en el Playground.

```html live-sample___flexbox_0
<header>
  <h1>Ejemplo sencillo de flexbox</h1>
</header>
<section>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Segundo artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Tercer artículo</h2>
    <p>Contenido…</p>
  </article>
</section>
```

```css live-sample___flexbox_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* Añade tu CSS de flexbox debajo de aquí */
```

{{EmbedLiveSample("flexbox_0", "100", "415")}}

Verás que tenemos un elemento {{htmlelement("header")}} con un encabezado de nivel superior dentro y un elemento {{htmlelement("section")}} que contiene tres elementos {{htmlelement("article")}}. Vamos a usarlos para crear un diseño bastante estándar de tres columnas.

## Especificar qué elementos colocar como cajas flexibles

Para empezar, tenemos que seleccionar qué elementos se van a disponer como cajas flexibles. Para ello, establecemos un valor especial de {{cssxref("display")}} en el elemento padre de los elementos que quieres modificar. En este caso queremos disponer los elementos {{htmlelement("article")}}, así que lo establecemos en el {{htmlelement("section")}}:

```html hidden live-sample___flexbox_1
<header>
  <h1>Ejemplo sencillo de flexbox</h1>
</header>
<section>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Segundo artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Tercer artículo</h2>
    <p>Contenido…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* Añade tu CSS de flexbox debajo de aquí */
```

```css live-sample___flexbox_1
section {
  display: flex;
}
```

Esto hace que el elemento `<section>` se convierta en un **contenedor flexible** y que sus hijos se conviertan en **elementos flexibles**. Este es su aspecto:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Esta única declaración nos da todo lo que necesitamos. Increíble, ¿verdad? Tenemos un diseño de varias columnas con columnas del mismo tamaño, y todas tienen la misma altura. Esto se debe a que los valores predeterminados que se dan a los elementos flexibles (los hijos del contenedor flexible) están pensados para resolver problemas habituales como este.

Repasemos lo que ocurre aquí. Añadir un valor `flex` de {{cssxref("display")}} a un elemento lo convierte en un contenedor flexible. El contenedor se muestra como [contenido de bloque](/es/docs/Glossary/Block-level_content) en cuanto a cómo interactúa con el resto de la página. Cuando el elemento se convierte en un contenedor flexible, sus hijos se convierten en elementos flexibles (y se disponen como tales).

Puedes hacer que el contenedor sea en línea con un [valor `display` exterior](/es/docs/Web/CSS/Reference/Properties/display#display-outside) (p. ej., `display: inline flex`), que afecta a cómo se dispone el propio contenedor en la página.
El valor heredado `inline-flex` de display también muestra el contenedor en línea.
En este tutorial nos centraremos en cómo se comporta el contenido del contenedor, pero, si quieres ver el efecto del diseño en línea frente al de bloque, puedes echar un vistazo a la [comparación de valores](/es/docs/Web/CSS/Reference/Properties/display) en la página de la propiedad `display`.

Las siguientes secciones explican con más detalle qué son los elementos flexibles y qué ocurre dentro de un elemento cuando lo conviertes en un contenedor flexible.

## El modelo flexible

Cuando los elementos se disponen como elementos flexibles, se disponen a lo largo de dos ejes:

![Tres elementos flexibles en un idioma de izquierda a derecha, dispuestos uno al lado de otro en un contenedor flexible. El eje principal (el eje del contenedor flexible en la dirección en la que se disponen los elementos flexibles) es horizontal. Los extremos del eje son main-start y main-end, y están a la izquierda y a la derecha, respectivamente. El eje transversal es vertical, perpendicular al eje principal. Cross-start y cross-end están arriba y abajo, respectivamente. La longitud del elemento flexible a lo largo del eje principal, en este caso el ancho, se llama tamaño principal (main size), y la longitud del elemento flexible a lo largo del eje transversal, en este caso la altura, se llama tamaño transversal (cross size).](flex_terms.png)

- El **eje principal** es el eje que va en la dirección en la que se disponen los elementos flexibles (por ejemplo, como una fila a lo ancho de la página o una columna hacia abajo). Los puntos de inicio y final de este eje se llaman **inicio principal** (_main start_) y **final principal** (_main end_). La longitud de un elemento flexible a lo largo del eje principal es el **tamaño principal** (_main size_).
- El **eje transversal** es el eje perpendicular a la dirección en la que se disponen los elementos flexibles. Los puntos de inicio y final de este eje se llaman **inicio transversal** (_cross start_) y **final transversal** (_cross end_). La longitud de un elemento flexible a lo largo del eje transversal es el **tamaño transversal** (_cross size_).
- El elemento padre que tiene establecido `display: flex` (el {{htmlelement("section")}} de nuestro ejemplo) se llama **contenedor flexible**.
- Los elementos dispuestos como cajas flexibles dentro del contenedor flexible se llaman **elementos flexibles** (los elementos {{htmlelement("article")}} de nuestro ejemplo).

Ten en cuenta esta terminología al avanzar por las secciones siguientes. Siempre puedes volver a consultarla si te confundes con alguno de los términos que se usan.

## ¿Columnas o filas?

Flexbox ofrece una propiedad llamada {{cssxref("flex-direction")}} que especifica en qué dirección va el eje principal (en qué dirección se disponen los hijos de flexbox). De forma predeterminada está establecida en `row`, lo que hace que se dispongan en una fila en la dirección en la que funciona el idioma predeterminado de tu navegador (de izquierda a derecha, en el caso de un navegador en español).

Prueba a añadir la siguiente declaración a tu regla de {{htmlelement("section")}}:

```css
flex-direction: column;
```

Verás que esto vuelve a poner los elementos en un diseño de columna, como estaban antes de añadir ningún CSS. Antes de seguir, borra esta declaración de tu ejemplo.

> [!NOTE]
> También puedes disponer los elementos flexibles en dirección inversa con los valores `row-reverse` y `column-reverse`. ¡Experimenta también con estos valores!

## Ajuste de línea

Un problema que surge cuando tienes un ancho o una altura fijos en tu diseño es que, al final, los hijos de flexbox desbordan su contenedor y rompen el diseño. En el siguiente ejemplo tenemos 5 elementos {{htmlelement("article")}}, que no caben porque tienen un `min-width` de `400px`, así que hay desplazamiento horizontal.

```html hidden live-sample___flex-wrap_0
<header>
  <h1>Ejemplo sencillo de flexbox</h1>
</header>
<section>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Segundo artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Tercer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Cuarto artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Quinto artículo</h2>
    <p>Contenido…</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

{{EmbedLiveSample("flex-wrap_0", "100", "230")}}

Aquí vemos que los hijos efectivamente se salen de su contenedor. De forma predeterminada, el navegador intenta colocar todos los elementos flexibles en una sola fila si `flex-direction` está establecido en `row`, o en una sola columna si `flex-direction` está establecido en `column`.

```html hidden live-sample___flex-wrap_1
<header>
  <h1>Ejemplo sencillo de flexbox</h1>
</header>
<section>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Segundo artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Tercer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Cuarto artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Quinto artículo</h2>
    <p>Contenido…</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

Una forma de solucionarlo es añadir la siguiente declaración a tu regla de {{htmlelement("section")}}:

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

Verás que el diseño se ve mucho mejor con esto:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Ahora tenemos varias filas. En cada fila caben tantos hijos de flexbox como resulta razonable. Lo que desborda pasa a la línea siguiente.

Pero aquí podemos hacer más cosas. En primer lugar, prueba a cambiar el valor de tu propiedad {{cssxref("flex-direction")}} a `row-reverse`. Ahora verás que sigues teniendo el diseño de varias filas, pero empieza desde la esquina opuesta de la ventana del navegador y fluye al revés.

## La forma abreviada flex-flow

En este punto, vale la pena señalar que existe una forma abreviada de {{cssxref("flex-direction")}} y {{cssxref("flex-wrap")}}: {{cssxref("flex-flow")}}. Así, por ejemplo, puedes sustituir

```css
flex-direction: row;
flex-wrap: wrap;
```

por

```css
flex-flow: row wrap;
```

## Dimensionamiento flexible de elementos flexibles

Volvamos ahora a nuestro primer ejemplo y veamos cómo podemos controlar qué proporción del espacio ocupan los elementos flexibles en comparación con los demás elementos flexibles.

```html hidden live-sample___flexbox_2
<header>
  <h1>Ejemplo sencillo de flexbox</h1>
</header>
<section>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Segundo artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Tercer artículo</h2>
    <p>Contenido…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_2
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

En tu copia local, añade la siguiente regla al final de tu CSS:

```css live-sample___flexbox_2
article {
  flex: 1;
}
```

{{EmbedLiveSample("flexbox_2", "100", "210")}}

Es un valor de proporción sin unidades que indica cuánto espacio disponible a lo largo del eje principal ocupará cada elemento flexible en comparación con los demás. En este caso, damos a cada elemento {{htmlelement("article")}} el mismo valor (un valor de `1`), lo que significa que todos ocuparán la misma cantidad del espacio sobrante que queda después de establecer propiedades como el relleno y el margen. Este valor se reparte proporcionalmente entre los elementos flexibles: dar a cada elemento flexible un valor de `400000` tendría exactamente el mismo efecto.

```html hidden live-sample___flexbox_3
<header>
  <h1>Ejemplo sencillo de flexbox</h1>
</header>
<section>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Segundo artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Tercer artículo</h2>
    <p>Contenido…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_3
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
article {
  flex: 1;
}
```

Ahora añade la siguiente regla debajo de la anterior:

```css live-sample___flexbox_3
article:nth-of-type(3) {
  flex: 2;
}
```

{{EmbedLiveSample("flexbox_3", "100", "210")}}

Ahora, al recargar, verás que el tercer {{htmlelement("article")}} ocupa el doble del ancho disponible que los otros dos. Ahora hay en total cuatro unidades de proporción disponibles (porque 1 + 1 + 2 = 4). Los dos primeros elementos flexibles tienen una unidad cada uno, así que cada uno ocupa 1/4 del espacio disponible. El tercero tiene dos unidades, así que ocupa 2/4 del espacio disponible (o la mitad).

También puedes especificar un valor de tamaño mínimo dentro del valor de flex. Prueba a actualizar tus reglas de article existentes así:

```html hidden live-sample___flexbox_4
<header>
  <h1>Ejemplo sencillo de flexbox</h1>
</header>
<section>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Segundo artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Tercer artículo</h2>
    <p>Contenido…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_4
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

```css live-sample___flexbox_4
article {
  flex: 1 100px;
}

article:nth-of-type(3) {
  flex: 2 100px;
}
```

Esto básicamente dice: «A cada elemento flexible se le darán primero `100px` del espacio disponible. Después, el resto del espacio disponible se repartirá según las unidades de proporción». Verás una diferencia en cómo se reparte el espacio.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Todos los elementos flexibles tienen un ancho mínimo de 100 píxeles, establecido con 'flex'. El valor de flex de los dos primeros elementos flexibles es 1, y el del tercero es 2. Esto divide el espacio restante del contenedor flexible en 4 unidades de proporción. Se asigna una unidad a cada uno de los dos primeros elementos flexibles y 2 unidades al tercero, lo que hace que el tercer elemento flexible sea más ancho que los otros dos, que tienen el mismo ancho.

El verdadero valor de flexbox se ve en su flexibilidad y su capacidad de adaptación. Si cambias el tamaño de la ventana del navegador o añades otro elemento {{htmlelement("article")}}, el diseño sigue funcionando perfectamente.

## flex: forma abreviada frente a forma completa

{{cssxref("flex")}} es una propiedad abreviada que puede especificar hasta tres valores distintos:

- El valor de proporción sin unidades que vimos antes. Se puede especificar por separado con la propiedad completa {{cssxref("flex-grow")}}.
- Un segundo valor de proporción sin unidades, {{cssxref("flex-shrink")}}, que entra en juego cuando los elementos flexibles desbordan su contenedor. Este valor especifica cuánto se encogerá un elemento para evitar el desbordamiento. Es una característica bastante avanzada de flexbox y no la trataremos más en este artículo.
- El valor de tamaño mínimo que vimos antes. Se puede especificar por separado con el valor completo {{cssxref("flex-basis")}}.

Te recomendamos no usar las propiedades completas de flex a menos que de verdad sea necesario (por ejemplo, para sobrescribir algo establecido antes). Hacen que haya que escribir mucho código adicional y pueden resultar algo confusas.

## Alineación horizontal y vertical

También puedes usar las características de flexbox para alinear los elementos flexibles a lo largo del eje principal o del eje transversal. Veámoslo con un nuevo ejemplo:

```html live-sample___flex-align_0
<div>
  <button>Sonreír</button>
  <button>Reír</button>
  <button>Guiñar</button>
  <button>Encogerse</button>
  <button>Sonrojarse</button>
</div>
```

```css live-sample___flex-align_0
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* Añade tu CSS de flexbox debajo de aquí */
```

Vamos a convertir esto en una barra de herramientas o de botones ordenada y flexible. Por ahora verás una barra de menú horizontal con algunos botones apretados en la esquina superior izquierda.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

Primero, haz una copia local de este ejemplo.

Ahora añade lo siguiente al final del CSS del ejemplo:

```html hidden live-sample___flex-align_1
<div>
  <button>Sonreír</button>
  <button>Reír</button>
  <button>Guiñar</button>
  <button>Encogerse</button>
  <button>Sonrojarse</button>
</div>
```

```css hidden live-sample___flex-align_1
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* Añade tu CSS de flexbox debajo de aquí */
```

```css live-sample___flex-align_1
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

{{EmbedLiveSample("flex-align_1", "100", "125")}}

Recarga la página y verás que los botones ahora están bien centrados en horizontal y en vertical. Lo hemos conseguido con dos propiedades nuevas. Los elementos flexibles se colocan en el centro del eje transversal estableciendo la propiedad `align-items` en `center`. Los elementos flexibles se espacian de forma uniforme a lo largo del eje principal estableciendo la propiedad `justify-content` en `space-around`.

La propiedad {{cssxref("align-items")}} controla dónde se sitúan los elementos flexibles en el eje transversal.

- De forma predeterminada, el valor es `normal`, que en flexbox se comporta como `stretch`. Esto estira todos los elementos flexibles para que llenen el padre en la dirección del eje transversal. Si el padre no tiene un tamaño fijo en la dirección del eje transversal, todos los elementos flexibles serán tan altos (o anchos) como el elemento flexible más alto (o ancho). Así es como nuestro primer ejemplo tenía de forma predeterminada columnas de la misma altura.
- El valor `center` que usamos en el código anterior hace que los elementos mantengan sus dimensiones intrínsecas, pero se centren a lo largo del eje transversal. Por eso los botones de nuestro ejemplo actual están centrados verticalmente.
- También puedes usar valores como `flex-start`, `self-start` o `start` y `flex-end`, `self-end` o `end`, que alinearán todos los elementos al inicio y al final del eje transversal, respectivamente. Los valores `baseline` alinearán los elementos flexibles por su línea base; básicamente, la parte inferior de la primera línea de texto de cada elemento flexible se alineará con la parte inferior de la primera línea del elemento con mayor distancia entre el inicio transversal y esa línea base. Consulta {{cssxref("align-items")}} para ver todos los detalles.

Puedes sobrescribir el comportamiento de {{cssxref("align-items")}} en elementos flexibles concretos aplicándoles la propiedad {{cssxref("align-self")}}. Por ejemplo, prueba a añadir lo siguiente a tu CSS:

```html hidden live-sample___flex-align_2
<div>
  <button>Sonreír</button>
  <button>Reír</button>
  <button>Guiñar</button>
  <button>Encogerse</button>
  <button>Sonrojarse</button>
</div>
```

```css hidden live-sample___flex-align_2
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/* Añade tu CSS de flexbox debajo de aquí */
```

```css live-sample___flex-align_2
button:first-child {
  align-self: flex-end;
}
```

{{EmbedLiveSample("flex-align_2", "100", "125")}}

Fíjate en el efecto que tiene y quítalo de nuevo cuando termines.

{{cssxref("justify-content")}} controla dónde se sitúan los elementos flexibles en el eje principal.

- El valor predeterminado es `normal`, que se comporta como `start` y hace que todos los elementos se sitúen al inicio del eje principal.
- Puedes usar `end` o `flex-end` para que se sitúen al final.
- Los valores `left` y `right` se comportan como `start` o `end` según la dirección del modo de escritura.
- `center` también es un valor de `justify-content`. Hará que los elementos flexibles se sitúen en el centro del eje principal.
- El valor que usamos antes, `space-around`, es útil: reparte todos los elementos de forma uniforme a lo largo del eje principal, dejando un poco de espacio en ambos extremos.
- Hay otro valor, `space-between`, muy parecido a `space-around`, salvo que no deja espacio en los extremos.

La propiedad {{cssxref("justify-items")}} se ignora en los diseños de flexbox.

Te animamos a jugar con estos valores para ver cómo funcionan antes de seguir.

## Ordenar los elementos flexibles

Flexbox también tiene una característica para cambiar el orden de disposición de los elementos flexibles sin afectar al orden del código fuente. Es otra cosa imposible de hacer con los métodos de diseño tradicionales.

Prueba a añadir el siguiente CSS al código de tu ejemplo de la barra de botones:

```css
button:first-child {
  order: 1;
}
```

Recarga y verás que el botón «Sonreír» se ha movido al final del eje principal. Veamos con un poco más de detalle cómo funciona:

- De forma predeterminada, todos los elementos flexibles tienen un valor de {{cssxref("order")}} de `0`.
- Los elementos flexibles con valores de orden más altos aparecerán más tarde en el orden de visualización que los elementos con valores de orden más bajos.
- Los elementos flexibles con el mismo valor de orden aparecerán en su orden del código fuente. Así que, si tienes cuatro elementos cuyos valores de orden se han establecido en `2`, `1`, `1` y `0`, respectivamente, su orden de visualización sería 4.º, 2.º, 3.º y 1.º.
- El 3.º elemento aparece después del 2.º porque tiene el mismo valor de orden y va después en el orden del código fuente.

Puedes establecer valores de orden negativos para que los elementos aparezcan antes que los elementos cuyo valor es `0`. Por ejemplo, podrías hacer que el botón «Sonrojarse» apareciera al inicio del eje principal con la siguiente regla:

```css
button:last-child {
  order: -1;
}
```

Aunque puedes cambiar el orden con `order`, el orden de tabulación sigue siendo el mismo que el orden del código. ¡Cambiar el orden de los elementos que pueden recibir el foco puede afectar negativamente a la usabilidad para quienes usan el teclado!

## Cajas flexibles anidadas

Con flexbox se pueden crear diseños bastante complejos. Es perfectamente válido que un elemento flexible sea también un contenedor flexible, para que sus hijos también se dispongan como cajas flexibles.

```html hidden live-sample___flex-nesting
<header>
  <h1>Ejemplo complejo de flexbox</h1>
</header>
<section>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <h2>Segundo artículo</h2>
    <p>Contenido…</p>
  </article>
  <article>
    <div>
      <button>Sonreír</button>
      <button>Reír</button>
      <button>Guiñar</button>
      <button>Encogerse</button>
      <button>Sonrojarse</button>
    </div>
    <div>
      <p>Contenido del primer párrafo…</p>
    </div>
    <div>
      <p>Contenido del segundo párrafo…</p>
    </div>
  </article>
</section>
```

```css hidden live-sample___flex-nesting
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  zoom: 0.8;
}
article {
  flex: 1 170px;
}
article:nth-of-type(3) {
  flex: 3 170px;
  display: flex;
  flex-flow: column;
}
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

{{EmbedLiveSample("flex-nesting", "100", "290")}}

Este diseño complejo tiene algunos elementos flexibles que también son contenedores flexibles. Su HTML es bastante sencillo. Tenemos un elemento {{htmlelement("section")}} que contiene tres elementos {{htmlelement("article")}}. El tercer {{htmlelement("article")}} contiene tres elementos {{htmlelement("div")}}, y el primer {{htmlelement("div")}} contiene cinco elementos {{htmlelement("button")}}:

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Veamos el código que hemos usado para el diseño.

En primer lugar, hacemos que los hijos del {{htmlelement("section")}} se dispongan como cajas flexibles.

```css
section {
  display: flex;
}
```

A continuación, establecemos algunos valores de flex en los propios elementos {{htmlelement("article")}}. Fíjate especialmente en la segunda regla: hacemos que los hijos del tercer {{htmlelement("article")}} también se dispongan como elementos flexibles, pero esta vez los disponemos en columna.

```css
article {
  flex: 1 100px;
}

article:nth-of-type(3) {
  flex: 3 100px;
  display: flex;
  flex-flow: column;
}
```

A continuación, seleccionamos el primer {{htmlelement("div")}}. Primero usamos `flex: 1 100px;` para darle en la práctica una altura mínima de `100px`, y después hacemos que sus hijos (los elementos {{htmlelement("button")}}) también se dispongan como elementos flexibles. Aquí los disponemos en una fila con ajuste de línea y los alineamos en el centro del espacio disponible, como hicimos con el ejemplo de los botones que vimos antes.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Por último, damos algo de tamaño al botón, esta vez con un valor de flex de `1 auto`. Esto tiene un efecto muy interesante, que verás si pruebas a cambiar el ancho de la ventana del navegador. Los botones ocuparán todo el espacio que puedan. Cabrán en una línea tantos como sea cómodo; a partir de ahí, pasarán a una nueva línea.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Resumen

Con esto termina nuestro recorrido por los fundamentos de flexbox. Esperamos que te hayas divertido y que juegues bastante con él a medida que avances en tu aprendizaje. En el siguiente artículo te daremos algunas pruebas que puedes usar para comprobar si has entendido y retenido toda esta información.

## Véase también

- [Conceptos básicos de flexbox](/es/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Alinear elementos en un contenedor flexible](/es/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Ordenar los elementos flexibles](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Controlar las proporciones de los elementos flexibles a lo largo del eje principal](/es/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- Módulo de [diseño de caja flexible de CSS](/es/docs/Web/CSS/Guides/Flexible_box_layout)
- [Guía de flexbox de CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): un artículo que lo explica todo sobre flexbox de forma visualmente atractiva
- [Flexbox Froggy](https://flexboxfroggy.com/): un juego educativo para aprender y entender mejor los fundamentos de flexbox

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}

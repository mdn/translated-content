---
title: Introducción al diseño en CSS
slug: Learn/CSS/CSS_layout/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

Este artículo resumirá algunas de las características de diseño de páginas web con CSS que ya hemos mencionado en módulos anteriores, como los diferentes valores de {{cssxref ("display")}}, e introducirá algunos de los conceptos que vamos a tratar en este módulo.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Proporcionar una visión general de las técnicas de diseño de páginas web
        con CSS. Cada técnica se puede aprender con mayor detalle en tutoriales
        posteriores.
      </td>
    </tr>
  </tbody>
</table>

Las técnicas de diseño de páginas web con CSS nos permiten controlar dónde se ubican los elementos que están contenidos en una página web en relación con su posición predeterminada en el flujo de diseño normal, así como el resto de elementos a su alrededor, su contenedor principal o la vista/ventana principal. Las técnicas de diseño de páginas web que trataremos con más detalle en este módulo son:

- Flujo normal
- La propiedad {{cssxref ("display")}}
- Flexbox
- Grid
- Floats
- Posicionamiento
- Diseño de tablas
- Diseño a varias columnas

Cada técnica tiene sus usos, ventajas y desventajas, y ninguna técnica está diseñada para usarse de forma aislada. Si entiendes para qué se ha diseñado cada método, te será fácil comprender cuál es la mejor herramienta de diseño para cada tarea.

## Flujo normal

El flujo normal es el modo como el navegador presenta las páginas HTML de forma predeterminada cuando no haces nada para controlar el diseño de página. Echemos un vistazo rápido a un ejemplo HTML:

```html
<p>Amo a mi gato.</p>

<ul>
  <li>Comprar comida para gatos</li>
  <li>Ejercicio</li>
  <li>Anímate amigo</li>
</ul>

<p>¡Fin!</p>
```

Por defecto, el navegador mostrará este código de la manera siguiente:

{{ EmbedLiveSample('Normal_flow', '100%', 200) }}

Observa aquí cómo se muestra el HTML en el orden exacto en que aparece en el código fuente, con los elementos uno debajo del otro: el primer párrafo, seguido de la lista desordenada, y a continuación el segundo párrafo.

Los elementos que aparecen uno debajo del otro se describen como _elementos de bloque_, en contraposición con los _elementos de línea_, que aparecen uno al lado del otro, como las palabras de un párrafo.

> **Nota:** La dirección en la que se presentan los contenidos de un elemento de bloque se describe como dirección de los bloques. La dirección de los bloques va de arriba a abajo en un idioma como el español, cuyo modo de escritura es horizontal. Sería horizontal en cualquier idioma con un modo de escritura vertical, como el japonés. Correspondientemente, la dirección de línea es la dirección en la que los contenidos de línea (por ejemplo, una frase) se disponen.

Cuando usas CSS para crear un diseño de página web, alejas los elementos del flujo normal, pero para muchos de los elementos de tu página, el flujo normal proporciona exactamente el diseño que necesitas. Por esta razón resulta tan importante comenzar con un documento HTML bien estructurado, porque te permite trabajar ya con la forma en que las cosas se presentan por defecto, en lugar de tener que luchar contra ello.

Los métodos que permiten cambiar la disposición de los elementos en CSS son los siguientes:

- **La propiedad {{cssxref ("display")}}**: los valores estándar como `block`, `inline` o `inline-block` pueden cambiar el comportamiento de los elementos en el flujo normal (consulta [Tipos de cajas en CSS](/es/docs/Learn/CSS/Building_blocks/El_modelo_de_caja) para obtener más información). Luego hay métodos de diseño completos que se activan con un valor `display`, por ejemplo [CSS Grid](/es/docs/Learn/CSS/CSS_layout/Grids) y [Flexbox](/es/docs/Learn/CSS/CSS_layout/Flexbox).
- **Floats**: la aplicación de un valor {{cssxref ("float")}} como `left` puede hacer que los elementos de nivel de bloque rodeen el elemento por uno de sus lados, como la forma en que las imágenes a veces tienen texto flotando a su alrededor en los diseños de algunas revistas.
- **La propiedad {{cssxref ("position")}}**: permite controlar con precisión la ubicación de las cajas dentro de otras cajas. El posicionamiento estático es el valor predeterminado en el flujo normal, pero puede hacer que los elementos se distribuyan de manera diferente si se utilizan otros valores, por ejemplo, pueden estar siempre fijados a la parte superior izquierda de la ventana del navegador.
- **Diseño de tablas**: se pueden usar las características que sirven para diseñar las partes de una tabla HTML en elementos que no son de tabla con `display: table` y las propiedades asociadas.
- **Diseño en varias columnas**: las propiedades de [diseño en varias columnas](/es/docs/Web/CSS/Columnas_CSS) permiten distribuir el contenido de un bloque en columnas, como en el caso de un periódico.

## La propiedad display

Los métodos principales para lograr el diseño de páginas web con CSS son todos los valores de la propiedad `display`. Esta propiedad permite cambiar la forma predeterminada en que algo se muestra. Todo en flujo normal tiene un valor de `display`, utilizado como la forma como se comportan por defecto los elementos en los que están configurados. Por ejemplo, el hecho de que los párrafos en español se muestran uno debajo del otro se debe a que presentan la configuración `display: block`. Si creas un enlace alrededor de un texto dentro de un párrafo, ese enlace permanece en línea con el resto del texto y no se divide al pasar a una línea nueva. Esto se debe a que el elemento {{htmlelement ("a")}} es por defecto `display: inline`.

Puedes cambiar este comportamiento predeterminado de visualización (`display`). Por ejemplo, el elemento {{htmlelement ("li")}} es `display: block` de forma predeterminada, lo que significa que los elementos de la lista se muestran uno debajo del otro en nuestro documento en español. Si cambiamos el valor de visualización a `inline`, ahora se muestran uno al lado del otro, como lo harían las palabras de una frase. El hecho de que puedas cambiar el valor de `display` de cualquier elemento significa que puedes elegir elementos HTML por su significado semántico, sin preocuparte por cómo se verán. La forma en que se ven es algo que puedes cambiar.

Además de poder cambiar la presentación predeterminada de un elemento `block` a un elemento `inline` y viceversa, hay algunos métodos de diseño de página más poderosos que se inician como un valor de `display`. Sin embargo, cuando los uses, en general vas a necesitar propiedades adicionales. Los dos valores más importantes para nuestros propósitos cuando hablamos del diseño de páginas web son `display: flex` y `display: grid`.

## Flexbox

Flexbox es el nombre corto del [módulo de diseño de cajas flexibles](/es/docs/Web/CSS/CSS_Flexible_Box_Layout), pensado para facilitarnos la distribución de las cosas en una dimensión, ya sea como una fila o como una columna. Para usar el método Flexbox, aplica `display: flex` al elemento padre de los elementos que deseas distribuir; todos sus elementos hijo directos se convierten en elementos flexibles. Vamos a verlo en un ejemplo sencillo.

El marcado HTML siguiente nos proporciona un elemento contenedor con una clase `wrapper` dentro del cual hay tres elementos {{htmlelement ("div")}}. Por defecto, estos elementos se mostrarían como elementos de bloque, uno debajo del otro, en nuestro documento en español.

Sin embargo, si añadimos `display: flex` al elemento padre, los tres elementos se organizan en columnas. Esto se debe a que se convierten en _elementos flexibles_ y se ven afectados por algunos valores iniciales que el método Flexbox establece en el contenedor flexible. Se muestran en una fila porque el valor inicial de {{cssxref ("flex-direction")}} establecido en su elemento padre es `row`. Todos parecen expandirse hasta la altura del elemento de más altura, porque el valor inicial de la propiedad {{cssxref ("align-items")}} establecida en su elemento primario es `stretch`. Esto significa que los artículos se expanden hasta la altura del contenedor flexible, que en este caso está definida por el artículo de mayor altura. Todos los artículos se alinean al comienzo del contenedor y dejan el espacio que sobra al final de la fila.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}
```

```html
<div class="wrapper">
  <div class="box1">Uno</div>
  <div class="box2">Dos</div>
  <div class="box3">Tres</div>
</div>
```

{{ EmbedLiveSample('Flex_1', '300', '200') }}

Además de las propiedades anteriores, que pueden aplicarse a contenedores flexibles, también hay propiedades que pueden aplicarse a los elementos flexibles. Estas propiedades, entre otras cosas, pueden cambiar el comportamiento de estos elementos flexibles y permitirles expandirse y contraerse para adaptarse al espacio disponible.

Como un ejemplo sencillo de esto podemos añadir la propiedad {{cssxref ("flex")}} a todos nuestros elementos secundarios, con un valor de `1`. Esto hará que todos los elementos crezcan y llenen el contenedor, en lugar de dejar espacio al final. Si hay más espacio, los artículos se ensancharán; si hay menos espacio, se volverán más estrechos. Además, si añades al código otro elemento, todos los elementos se volverán más pequeños para dejarle espacio; ajustarán el tamaño para ocupar la misma cantidad de espacio, cualquiera que sea.

## Ejemplo

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}

.wrapper > div {
  flex: 1;
}
```

```html
<div class="wrapper">
  <div class="box1">Uno</div>
  <div class="box2">Dos</div>
  <div class="box3">Tres</div>
</div>
```

{{ EmbedLiveSample('Flex_2', '300', '200') }}

> **Nota:** Esta ha sido una breve introducción de lo que permite el método Flexbox. Para obtener más información, consulta nuestro artículo sobre [Flexbox](/es/docs/Learn/CSS/CSS_layout/Flexbox).

## Diseño de cuadrícula

Mientras que el método Flexbox está pensado para distribuir elementos unidimensionalmente, el diseño de cuadrícula está diseñado para distribuir elementos en dos dimensiones: alinear elementos en filas y columnas.

Una vez más, puedes activar el diseño de páginas web en cuadrícula con un valor de visualización específico: `display: grid`. El ejemplo siguiente utiliza un marcado similar al del ejemplo del método Flexbox, con un contenedor y algunos elementos secundarios. Además de usar `display: grid`, también definimos algunos tramos de filas y columnas en el elemento padre con las propiedades {{cssxref("grid-template-rows")}} y {{cssxref("grid-template-columns")}}. Hemos definido tres columnas, cada una de `1fr`, y dos filas de `100px`. No necesitamos poner ninguna regla sobre los elementos secundarios porque se colocan automáticamente en las celdas que nuestra cuadrícula ha creado.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="box1">Uno</div>
  <div class="box2">Dos</div>
  <div class="box3">Tres</div>
  <div class="box4">Cuatro</div>
  <div class="box5">Cinco</div>
  <div class="box6">Seis</div>
</div>
```

{{ EmbedLiveSample('Grid_1', '300', '330') }}

Cuando ya tienes una cuadrícula, se puede colocar tus elementos en ella explícitamente en lugar de confiar en el comportamiento de colocación automática que hemos visto arriba. En el segundo ejemplo, hemos definido la misma cuadrícula, pero esta vez con tres elementos secundarios. Hemos establecido la línea de inicio y final de cada elemento con las propiedades {{cssxref ("grid-column")}} y {{cssxref ("grid-row")}}. Esto hace que los elementos abarquen varios tramos.

## Ejemplo

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}

.box1 {
  grid-column: 2 / 4;
  grid-row: 1;
}

.box2 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.box3 {
  grid-row: 2;
  grid-column: 3;
}
```

```html
<div class="wrapper">
  <div class="box1">Uno</div>
  <div class="box2">Dos</div>
  <div class="box3">Tres</div>
</div>
```

{{ EmbedLiveSample('Grid_2', '300', '330') }}

> **Nota:** Estos dos ejemplos son solo una pequeña parte del poder del diseño de cuadrículas; para obtener más información, consulta nuestro artículo sobre [Diseñar cuadrículas](/es/docs/Learn/CSS/CSS_layout/Grids).

El resto de esta guía expone otros métodos de diseño de páginas web que son menos importantes para las estructuras principales de diseño de tu página web, pero que pueden serte de ayuda para tareas específicas. Si entiendes la naturaleza de cada una de las tareas de diseño de una página web, vas a descubrir enseguida que a menudo vas a ser capaz de discernir qué tipo de diseño se adapta mejor a cada componente de tu diseño particular.

## Floats

El método de flotación de un elemento cambia el comportamiento de ese elemento y de los elementos de nivel de bloque que lo siguen en el flujo normal. El elemento es desplazado hacia la izquierda o hacia la derecha y es eliminado del flujo normal, y el contenido circundante flota alrededor de este elemento.

La propiedad {{cssxref ("float")}} tiene cuatro valores posibles:

- `left`: establece la flotación a la izquierda del elemento.
- `right`: establece la flotación a la derecha del elemento.
- `none`: especifica que no hay flotación en absoluto. Este es el valor predeterminado.
- `inherit`: especifica que el valor de la propiedad `float` debe heredarse del elemento padre.

En el ejemplo siguiente, establecemos una flotación a la izquierda para un elemento `<div>` y le damos un {{cssxref ("margin")}} a la derecha para mantener el texto alejado del elemento. Esto nos da el efecto del texto envuelto alrededor de ese cuadro, y es la mayor parte de lo que necesitas saber sobre la flotación, tal como se utiliza en el diseño web moderno.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

p {
  line-height: 2;
  word-spacing: 0.1rem;
}

.box {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  border-radius: 5px;
}
```

```html
<h1>Ejemplo sencillo de flotación</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css
.box {
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}
```

{{ EmbedLiveSample('Float_1', '100%', 600) }}

> **Nota:** El método de flotación se explica al completo en nuestro artículo sobre [las propiedades float y clear](/es/docs/Learn/CSS/CSS_layout/Floats). El método de flotación es el que se usaba para crear diseños de columnas antes de la aparición de técnicas como los métodos Flexbox y diseño en rejillas. En la red aún puedes toparte con estos métodos. Vamos a exponer todo esto en el artículo sobre [métodos de diseño heredados](/es/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods).

## Técnicas de posicionamiento

El posicionamiento permite mover un elemento desde donde se colocaría cuando está en flujo normal a otra ubicación. El posicionamiento no es un método para crear diseños de página principal, se trata más bien de administrar y ajustar la posición de elementos específicos en la página.

Sin embargo, hay técnicas útiles para ciertos patrones de diseños de páginas web que se basan en la propiedad {{cssxref ("position")}}. Comprender el posicionamiento también ayuda a comprender el flujo normal y qué implica sacar un elemento del flujo normal.

Hay cinco tipos de posicionamiento que debes conocer:

- El **posicionamiento estático** es el valor por defecto que tiene establecido cada elemento, esto significa sencillamente «coloca el elemento en su posición normal en el flujo de diseño del documento, nada especial que ver aquí».
- El **posicionamiento relativo** permite modificar la posición de un elemento en la página y moverlo con respecto a su posición en el flujo normal, lo que incluye superposiciones con otros elementos de la página.
- El **posicionamiento absoluto** mueve un elemento completamente fuera del flujo de diseño normal de la página, como si estuviera asentado en una capa separada propia. A partir de aquí, puedes fijarlo en una posición relativa a los bordes del elemento `<html>` de la página (o su elemento padre más próximo). Esto es útil para crear efectos complejos de diseño de página, como cuadros con pestañas en que diferentes paneles de contenido se ubican uno encima del otro y se muestran y ocultan según se desee, o paneles de información que por defecto se asientan fuera de la pantalla, pero puedes hacer que se deslicen hacia la pantalla usando un control de tipo botón.
- El **posicionamiento fijo** es muy similar al posicionamiento absoluto, excepto que corrige un elemento relativo a la ventana gráfica del navegador, no otro elemento. Esto es útil para crear efectos, como un menú de navegación persistente que siempre permanece en el mismo lugar en la pantalla al contrario que el contenido, que se desplaza.
- El **posicionamiento _sticky_ (pegajoso)** es un método de posicionamiento más reciente que hace que un elemento actúe como `position: static` hasta que alcanza un desplazamiento definido con respecto a la ventana gráfica, en cuyo punto actúa como un elemento con la propiedad `position: fixed`.

### Ejemplo sencillo de posicionamiento

Para familiarizarte con estas técnicas de diseño de página, te mostraremos un par de ejemplos rápidos. Todos nuestros ejemplos contarán con el mismo HTML, que es el siguiente:

```html
<h1>Posicionamiento</h1>

<p>Soy un elemento básico de nivel de bloque.</p>
<p class="positioned">Soy un elemento básico de nivel de bloque.</p>
<p>Soy un elemento básico de nivel de bloque.</p>
```

Aplicaremos a este HTML un estilo predeterminado definido por el CSS siguiente:

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

La salida que se obtiene es la siguiente:

{{ EmbedLiveSample('Simple_positioning_example', '100%', 300) }}

### El posicionamiento relativo

El posicionamiento relativo permite compensar un elemento desde la posición por defecto que tendría en flujo normal. Esto significa que podrías hacer una tarea como mover un icono un poco hacia abajo para que se alinee con una etiqueta de texto. Para ello, podríamos añadir la regla de posicionamiento relativo siguiente:

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

Aquí asignamos el valor `relative` a la propiedad {{cssxref ("position")}} de nuestro párrafo del medio: esto no hace nada por sí solo, así que también añadimos las propiedades {{cssxref ("top")}} y {{cssxref ( "left")}}, que sirven para mover el elemento afectado hacia abajo y a la derecha. Esto puede parecer lo contrario de lo que esperabas, pero debes pensar en ello como un elemento al que se empuja por sus lados superior e izquierdo, lo que resulta en un movimiento a la derecha y abajo.

Añadir este código dará el resultado siguiente:

```html hidden
<h1>El posicionamiento relativo</h1>

<p>Soy un elemento básico de nivel de bloque.</p>
<p class="positioned">Este es mi elemento con posicionamiento relativo.</p>
<p>Soy un elemento básico de nivel de bloque.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: relative;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Relative_1', '100%', 300) }}

### El posicionamiento absoluto

El posicionamiento absoluto se utiliza para eliminar por completo un elemento del flujo normal y colocarlo mediante desplazamientos desde los bordes de un bloque contenedor.

Volviendo a nuestro ejemplo original no posicionado, podríamos añadir la regla CSS siguiente para implementar el posicionamiento absoluto:

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

Aquí le damos a la propiedad {{cssxref ("position")}} de nuestro párrafo del medio un valor de `absolute`, y le asignamos las mismas propiedades {{cssxref ("top")}} y {{cssxref ("left")}}. Sin embargo, ahora añadir este código da el resultado siguiente:

```html hidden
<h1>Posicionamiento absoluto</h1>

<p>Soy un elemento básico de nivel de bloque.</p>
<p class="positioned">Este es mi elemento con posicionamiento absoluto.</p>
<p>Soy un elemento básico de nivel de bloque.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: absolute;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Absolute_1', '100%', 300) }}

¡Este resultado es muy diferente! El elemento posicionado ahora se ha separado por completo del resto del diseño de la página y se superpone encima de este. Los otros dos párrafos ahora se asientan juntos, como si su hermano con posicionamiento absoluto no existiera. Las propiedades {{cssxref ("top")}} y {{cssxref ("left")}} tienen un efecto diferente en elementos con posicionamiento absoluto que en elementos con posicionamiento relativo. En este caso, los desplazamientos se han calculado desde la parte superior e izquierda de la página. Es posible cambiar el elemento padre para que se convierta en este tipo de contenedor, y lo veremos en el artículo sobre [posicionamiento](/es/docs/Learn/CSS/CSS_layout/Positioning).

### Posicionamiento fijo

El posicionamiento fijo elimina nuestro elemento del flujo de documentos de la misma manera que el posicionamiento absoluto. Sin embargo, en lugar de contar los desplazamientos en relación con el contenedor, se cuentan con respecto a la ventana gráfica. Como el elemento permanece fijo en relación con la ventana gráfica, podemos crear efectos como un menú que permanece fijo mientras la página se desplaza por debajo de él.

En este ejemplo nuestro HTML tiene tres párrafos de texto para poder tener una página que se desplace, y un cuadro al que asignamos la propiedad `position: fixed`.

```html
<h1>Posicionamiento fijo</h1>

<div class="positioned">Fijo</div>

<p>Párrafo 1.</p>
<p>Párrafo 2.</p>
<p>Párrafo 3.</p>
```

## Ejemplo

```html hidden
<h1>Posicionamiento fijo</h1>

<div class="positioned">Fijo</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: fixed;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Fixed_1', '100%', 200) }}

### Posicionamiento pegajoso

El posicionamiento pegajoso es el último método de posicionamiento que tenemos a nuestra disposición. Mezcla el posicionamiento estático predeterminado con el posicionamiento fijo. Cuando un elemento tiene la propiedad `position: sticky`, se desplaza en flujo normal hasta que se alcanzan los desplazamientos con respecto a la ventana gráfica que hemos definido. En ese punto se queda «atascado» como si tuviera configurado un valor `position: fixed`.

```html hidden
<h1>Posicionamiento pegajoso</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">Pegajoso</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Sticky_1', '100%', 200) }}

> **Nota:** para obtener más información sobre el posicionamiento, consulta nuestro artículo [Posicionamiento](/es/docs/Learn/CSS/CSS_layout/Positioning).

## Diseño de tablas

Las tablas HTML sirven para mostrar datos tabulados, pero hace muchos años, antes incluso de que el CSS básico fuera compatible de forma fiable en todos los navegadores, los desarrolladores web también usaban tablas para hacer el diseño completo de una página web, colocando en las diversas filas y columnas de una tabla los títulos de encabezado de la página, los pies de página, las diferentes columnas, etc. Esto funcionó en ese momento, pero presenta muchos problemas: los diseños de tabla no son flexibles, requieren mucho código de marcado, son difíciles de depurar y no son semánticamente correctos (por ejemplo, los usuarios de lectores de pantalla tienen problemas para navegar por estos diseños de página web con tablas).

El aspecto que presenta una tabla en una página web cuando usas el código de marcado de una tabla se debe a un conjunto de propiedades CSS que definen el diseño de la tabla. Estas propiedades se pueden usar para diseñar elementos que no son tablas, un uso que a veces se describe como «usar tablas CSS».

El ejemplo siguiente muestra uno de esos usos; el uso de tablas CSS para el diseño debe considerarse en este punto un método heredado, para aquellas situaciones en las que tienes navegadores muy antiguos que no son compatibles con los métodos Flexbox o Grid.

Veamos un ejemplo. Primero, un código de marcado sencillo que crea un formulario HTML. Cada elemento de entrada tiene una etiqueta, y también hemos incluido un título dentro de un párrafo. Cada par etiqueta/entrada está delimitado por un elemento {{htmlelement ("div")}}, con fines de compaginación.

```html
<form>
  <p>En primer lugar, díganos su nombre y edad.</p>
  <div>
    <label for="fname">Nombre:</label>
    <input type="text" id="fname" />
  </div>
  <div>
    <label for="lname">Apellidos:</label>
    <input type="text" id="lname" />
  </div>
  <div>
    <label for="age">Edad:</label>
    <input type="text" id="age" />
  </div>
</form>
```

Ahora, el CSS para nuestro ejemplo. La mayor parte del CSS es bastante común, excepto por los usos de la propiedad {{cssxref ("display")}}. A los elementos {{htmlelement ("form")}}, {{htmlelement ("div")}}, {{htmlelement ("label")}} y {{htmlelement ("input")}} se les dice que se muestren como una tabla, filas de tabla y celdas de tabla, respectivamente; actuarán básicamente como marcas de tabla HTML, y lograrán por defecto la alineación perfecta de las etiquetas y las entradas. Todo lo que hay que hacer es añadir un poco de tamaños, márgenes, etc., para que todo se vea un poco mejor, ¡y listo!

Observa que se la ha proporcionado al párrafo de encabezado `display: table-caption;`, lo que hace que actúe como una celda de encabezado ({{htmlelement ("caption")}}) de la tabla; y con `caption-side: bottom;` se le dice a la celda de encabezado que se asiente en la parte inferior de la tabla con fines de aplicación de estilo, aunque en el código fuente el marcado está antes que los elementos `<input>`. Esto permite un poco de flexibilidad.

```css
html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label,
form input {
  display: table-cell;
  margin-bottom: 10px;
}

form label {
  width: 200px;
  padding-right: 5%;
  text-align: right;
}

form input {
  width: 300px;
}

form p {
  display: table-caption;
  caption-side: bottom;
  width: 300px;
  color: #999;
  font-style: italic;
}
```

Esto nos da el resultado siguiente:

{{ EmbedLiveSample('Table_layout', '100%', '170') }}

También puedes ver este ejemplo en vivo en [css-tables-example.html](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html) (ver el [código fuente](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/box-model-recap/css-tables-example.html)).

## Diseño en columnas

El módulo de diseño en columnas nos proporciona un modo de distribuir el contenido en columnas, de forma similar al modo como el texto fluye en un periódico. Aunque en un contexto web leer en columnas de arriba a abajo no resulta tan útil porque podría obligar a los usuarios a tener que hacer desplazamientos de arriba a abajo, la técnica de organizar el contenido en columnas también puede tener su utilidad.

Para convertir un bloque en un contenedor, utilizamos la propiedad {{cssxref ("column-count")}}, que le dice al navegador cuántas columnas nos gustaría tener, o {{cssxref ("column-width")}}, que le dice al navegador que llene el contenedor con tantas columnas de al menos ese ancho.

En el ejemplo siguiente comenzamos con un bloque de HTML dentro de un elemento `<div>` que contiene una clase `container`.

```html
<div class="container">
  <h1>Diseño en columnas</h1>

  <p>Párrafo 1.</p>
  <p>Párrafo 2.</p>
</div>
```

## Ejemplo

Utilizamos un `column-width` de 200 píxeles en ese contenedor, que crea en el navegador tantas columnas de 200 píxeles como quepan en el contenedor y luego comparte el espacio restante entre las columnas creadas.

```html hidden
<div class="container">
  <h1>Diseño en columnas</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

```css hidden
body {
  max-width: 800px;
  margin: 0 auto;
}
```

```css
.container {
  column-width: 200px;
}
```

{{ EmbedLiveSample('Multicol_1', '100%', 200) }}

## Resumen

Este artículo ha proporcionado un breve resumen de todas las tecnologías de diseño que debes conocer. ¡Sigue leyendo para obtener más información sobre cada tecnología individual!

{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

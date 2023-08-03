---
title: Basic concepts of grid layout
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
---

[CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout) presenta un sistema de cuadrícula bidimensional para CSS. Las cuadrículas se pueden utilizar para posicionar áreas principales de la página o pequeños elementos de la interfaz de usuario. Este artículo lo introduce a Grid Layout de CSS y la nueva terminología que forma parte de la especificación CSS Grid Layout Nivel 1. Las características mostradas en este resumen se explicarán con mayor detalle en el resto de esta guía.

## ¿Qué es una cuadrícula(grid)?

Una cuadrícula es un conjunto de líneas horizontales y verticales que se intersectan - un grupo define columnas y el otro filas. Los elementos se pueden colocar en la cuadrícula respetando estas columnas y filas. El diseño de cuadrícula CSS tiene las siguientes características:

### Tamaños fijos y flexibles

Usted puede crear una cuadrícula con tamaños fijos, utilizando píxeles, por ejemplo. También se puede crear una cuadrícula utilizando tamaños flexibles con porcentajes o con la nueva unidad de medida `fr` (fracción), diseñada para este propósito.

### Posicionamiento de elementos

Puede colocar elementos en una ubicación precisa en la cuadrícula utilizando números de línea, nombres o seleccionando un área de la cuadrícula. Grid también contiene un algoritmo para controlar la ubicación de elementos que no tienen una posición explícita en la cuadrícula.

### Creación de líneas adicionales para alojar contenido

Usted puede definir una cuadrícula explícita con grid layout. La especificación Grid Layout es lo suficientemente flexible como para permitir agregar filas y columnas adicionales cuando sea necesario. Características como la adición de "tantas columnas como caben en un contenedor" también fueron incuidas.

### Control de alineación

Grid contiene características de alineación para poder controlar la forma cómo se alinean los elementos una vez colocados en un área de cuadrícula y cómo está alineada toda la cuadrícula.

### Control de contenido superpuesto

Se puede colocar más de un elemento en una celda de la cuadrícula o área, las cuales pueden solaparse o superponerse total o parcialmente entre sí. Esta estratificación puede ser controlada con la propiedad {{cssxref("z-index")}}.

Grid es una poderosa especificación que, cuando se combina con otras partes de CSS como [flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout), puede ayudarle a crear diseños que antes eran imposibles de construir en CSS. Todo comienza creando una cuadrícula en su **contenedor de cuadrícula**.

## El contenedor de Grid

Creamos un _contenedor de cuadrícula_ al declarar `display: grid` o `display: inline-grid` en un elemento. Tan pronto como hagamos esto todos los _hijos directos_ de ese elemento se convertirán en _elementos de la cuadrícula._

En este ejemplo, se tiene un contenedor div con una clase wrapper y dentro hay cinco elementos hijos.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Hago de `.wrapper` un contenedor de cuadrícula.

```css
.wrapper {
  display: grid;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('El_contenedor_de_Grid', '200', '330') }}

Todos los descendientes directos son ahora elementos de la cuadrícula. En un navegador web, usted no verá ninguna diferencia en cómo son mostrados estos elementos antes de convertirlos en una cuadrícula ya que grid ha creado una cuadrícula de una sola columna para los elementos. En este punto usted puede encontrar útil trabajar en Firefox Developer Edition, el cual tiene disponible el [Grid Inspector](/es/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) (Inspector de cuádricula) como parte de las Herramientas de Desarrollador. Si ve este ejemplo en Firefox e inspecciona la cuadrícula, verá un icono pequeño junto al valor `grid`. Haga clic sobre este y la cuadrícula de este elemento se superpondrá en la ventana del navegador.

![Using the Grid Highlighter in DevTools to view a grid](1-grid-inspector.png)

Mientras usted aprende y luego trabaja con CSS Grid Layout esta herramienta le dará una mejor idea de lo que está sucediendo con sus cuadrículas visualmente.

Si queremos empezar a hacer esto más parecido a una cuadrícula necesitamos agregar columnas.

## Vias, filas y columnas del Grid

Definimos filas y columnas en nuestra cuadrícula con las propiedades {{cssxref("grid-template-columns")}} y {{cssxref("grid-template-rows")}}. Éstas definen las vías de la cuadrícula. Una vía de cuadrícula es el área entre las dos líneas -horizontales o verticales- dentro de la cuadrícula. En la imagen inferior se puede ver una vía resaltada - esta es la vía de la primera fila en nuestra cuadrícula.

![](1_grid_track.png)

Puedo modificar nuestro ejemplo anterior al agregar la propiedad `grid-template-columns`, para así definir el tamaño (ancho) de las vías de cada columna.

Ahora he creado una cuadrícula con tres vías por columna de 200 píxeles. Los elementos hijo se posicionarán en esta cuadrícula uno en cada una de las celdas de la cuadrícula.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('grid_first', '610', '140') }}

### La Unidad fr

Las vías se pueden definir usando cualquier unidad de medida. Grid también introduce una unidad de longitud adicional para ayudarnos a crear vías de cuadrícula flexibles. La nueva unidad fr representa una fracción del espacio disponible en el contenedor de la cuadrícula. La siguiente definición de cuadrícula crearía tres vias con el mismo ancho, que se expanden y se encogen de acuerdo el espacio disponible.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('La_Unidad_fr', '220', '140') }}

En el próximo ejemplo creamos una definición con una vía de `2fr` y luego dos vías de `1fr`. El espacio disponible se divide en cuatro. Dos partes corresponden a la primera vía y una parte a cada una de las dos vias restantes.

```css
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

En este ejemplo final mezclamos las vías de tamaño absoluto con unidades de fracción(fr). La primera vía tiene 500 píxeles, por lo que este ancho fijo se sustrae del espacio disponible.El espacio restante se divide en tres y se asigna en proporción a las dos vías flexibles.

```css
.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

### Listando vías con la notación `repeat()`

Las cuadrículas grandes con muchas vías o celdas pueden utilizar la notación `repeat()` con el fin de repetir todas o una sección de la lista de vías. Por ejemplo la definición de cuadrícula:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

También puede ser escrita así:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

La notación de repetición se puede utilizar para una parte del listado de vías. En este siguiente ejemplo he creado una cuadrícula con una vía inicial de 20 píxeles luego una sección repetitiva de 6 vías de `1fr` y luego una vía final de 20 píxeles.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

La notación de repetición toma una lista de vías específicas, por lo tanto, puede utilizarla para crear un patrón de iteración de vías. En el próximo ejemplo, mi cuadrícula consistirá de 10 vías, una vía `1fr` seguida por una vía `2fr`, repetida cinco veces.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### La cuadrícula implícita y explícita

Al crear nuestra cuadrícula de ejemplo definimos nuestras vías de columna con la propiedad {{cssxref("grid-template-columns")}}, pero dejamos que grid creara filas para el contenido según fuera necesario. Estas filas se crean en la cuadrícula implícita. La cuadrícula explícita consiste en las filas y columnas que se definen con las propiedades {{cssxref("grid-template-columns")}} y {{cssxref("grid-template-rows")}}.

Si coloca algo fuera de la cuadrícula ya definida, o si debido a la cantidad de contenido, se necesitarán más vías o celdas, entonces grid crea filas y columnas en la cuadrícula implícita. Estas vías varían su tamaño automáticamente de forma predeterminada, así que ajustarán su tamaño basadas en el contenido dentro de ellas.

También puede definir un tamaño para el conjunto de vías creadas en la cuadrícula implícita con las propiedades {{cssxref("grid-auto-rows")}} y {{cssxref("grid-auto-columns")}}.

En el siguiente ejemplo usamos `grid-auto-rows` para asegurar que las vías creadas en la cuadrícula implícita tengan 200 píxeles de alto.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('cuadrícula_implícita_y_explícita', '230', '420') }}

### Tamaño de vía y `minmax()`

Al configurar una cuadrícula explícita o definir el tamaño de las filas o columnas creadas automáticamente, es posible que desee dar a las vías un tamaño mínimo, pero asegurarse que se expandan para adaptarse a cualquier contenido que se pueda agregar. Por ejemplo, tal vez quiera que mis filas nunca se colapsen a menos de 100 píxeles, pero si mi contenido se extiende a 300 píxeles de altura, me gustaría que la fila se expandiera a esa altura.

Grid tiene una solución para esto con la función {{cssxref("minmax", "minmax()")}}. En el siguiente ejemplo estoy usando `minmax()` en el valor de la propiedad {{cssxref("grid-auto-rows")}}. Las filas creadas automáticamente tendrán como mínimo de 100 píxeles de alto y un máximo de auto. El uso de auto significa que el tamaño mirará el tamaño del contenido y se estirará para dar espacio al elemento más alto en una celda en esta fila.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>
    Two
    <p>I have some more content in.</p>
    <p>This makes me taller than 100 pixels.</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Tamaño_de_vía_y_minmax', '240', '470') }}

## Líneas de la cuadrícula

Debe tenerse en cuenta que cuando definimos una cuadrícula definimos las vías de la cuadrícula, no las líneas. Grid luego nos da las líneas numeradas a utilizar al posicionar elementos. En nuestra cuadrícula de tres columnas y dos filas, tenemos cuatro líneas de columna.

![Diagram showing numbered grid lines.](1_diagram_numbered_grid_lines.png)

Las líneas están numeradas según el modo de escritura del documento. En un idioma de izquierda a derecha, la línea 1 está al lado izquierdo de la cuadrícula. En un idioma de derecha a izquierda, está en el lado derecho de la cuadrícula. Las líneas también se pueden nombrar, ya veremos cómo hacer esto en una guía posterior de esta serie.

### Posicionando elementos de acuerdo a las líneas

Estaremos explorando la colocación basada en líneas en detalle en un artículo posterior, el siguiente ejemplo demuestra cómo hacer esto de una manera sencilla. Cuando colocamos un elemento y tomamos como punto de referencia la línea - en lugar de la vía.

En el siguiente ejemplo, estoy posicionando los dos primeros elementos en la cuadrícula de tres vías de columna, usando las propiedades {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} y {{cssxref("grid-row-end")}}. Trabajando de izquierda a derecha, el primer elemento se coloca partiendo de la línea de la columna 1, y se extiende a la línea de la columna 4, que en nuestro caso es la línea que está mas a la derecha en la cuadrícula. Y comienza en la línea de la fila 1 y termina en la línea de fila la 3, por lo tanto, se extiende sobre dos filas.

El segundo elemento comienza en la línea de columna 1 de la cuadrícula y se extiende por toda la fila. Este es el valor por defecto, por lo que no necesito especificar la línea final. También se extiende dos vías de fila de la línea de fila 3 a la línea de fila 5. Los otros elementos se colocarán a sí mismos en espacios vacíos en la cuadrícula.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Líneas_de_cuadrícula', '230', '420') }}

No olvide que puede utilizar [Grid Inspector](/es/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) en las Herramientas de Desarrollador de Firefox para ver cómo se posicionan los elementos en las líneas de la cuadrícula.

## Celdas de cuadrícula

Una _celda de cuadrícula_ es la unidad más pequeña en una cuadrícula, conceptualmente es como una celda de tabla. Como vimos en nuestros ejemplos anteriores, una vez que se define una cuadrícula en un padre, los elementos hijo se posicionarán a sí mismos de una vez en cada celda de la cuadrícula definida. En la imagen de abajo he resaltado la primera celda de la cuadrícula.

![The first cell of the grid highlighted](1_grid_cell.png)

## Áreas de cuadrícula

Los elementos pueden extenderse a través de una o más celdas tanto por fila como por columna, lo que crea un _área de cuadrícula_. Las áreas de la cuadrícula tienen que ser rectangulares - no es posible crear un área en forma de L, por ejemplo. El área de cuadrícula resaltada abarca dos vías de fila y dos de columna.

![A grid area](1_grid_area.png)

## Canaletas

Las canaletas o callejones entre las celdas de la cuadrícula se pueden crear usando las propiedades {{cssxref("grid-column-gap")}} y {{cssxref("grid-row-gap")}}, o la propiedad abreviada {{cssxref("grid-gap")}}. En el siguiente ejemplo estoy creando una brecha de 10 píxeles entre columnas y una brecha de 1em entre filas.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}
```

> **Nota:** Los navegadores más antigüos tienen {{cssxref("column-gap")}}, {{cssxref("row-gap")}} y {{cssxref("gap")}} prefijadas con el prefijo `grid-` como {{cssxref("grid-column-gap")}}, {{cssxref("grid-row-gap")}} y {{cssxref("grid-gap")}} respectivamente.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  grid-column-gap: 10px;
  grid-row-gap: 1em;

  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Canaletas') }}

Cualquier espacio utilizado por las brechas se tendrá en cuenta antes de que el espacio sea asignado a las vías `fr` de longitud flexible y las canaletas intervienen con propósitos de dimensionamiento como una vía de cuadrícula regular, sin embargo, no se puede colocar nada en una brecha. En términos de posicionamiento basado en líneas, la brecha actúa como una línea gruesa.

## Anidamiento de cuadrículas

Un elemento de cuadrícula puede convertirse en un contenedor de cuadrícula. En el ejemplo siguiente tengo la cuadrícula de tres columnas creada anteriormente, con nuestros dos elementos posicionados. En este caso, el primer elemento tiene algunos subelementos. Ya que estos elementos no son descendientes directos de la cuadrícula, no participan en la disposición de la cuadrícula y por lo tanto se muestran en el flujo normal del documento.

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

![Nested grid in flow](1_nested_grids_in_flow.png)

Si establezco `box1` a `display: grid` puedo darle una definición de vía y también se convertirá en una cuadrícula, los elementos entonces se posicionan en esta nueva cuadrícula.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.box1 {
  grid-column: 1 / 4;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('anidamiento', '600', '340') }}

En este caso, la cuadrícula anidada no tiene ninguna relación con el padre. Como usted puede ver en el ejemplo, no ha heredado la [`grid-gap`](/es/docs/Web/CSS/grid-gap) del elemento padre y las líneas de la cuadrícula anidada no se alinean con las líneas de la cuadrícula padre.

### Subgrid

En la especificación de grid de nivel 1 hay una característica llamada _subgrid_ que nos permitiría crear cuadrículas anidadas que usan la definición de la vía de la cuadrícula padre.

> **Nota:** Las Subgrids aún no están implementadas en ningún navegador y la especificación está sujeta a cambio.

En la especificación actual, editaríamos el ejemplo de cuadrícula anidada arriba para usar `display: subgrid` en lugar de `display: grid`, y luego eliminar la definición de vía. La cuadrícula anidada utilizará las vías de la cuadrícula principal para posicionar los elementos.

Cabe señalar que la cuadrícula está anidada en ambas dimensiones — filas y columnas. No hay concepto de la cuadrícula implícita trabajando con subgrids. Esto significa que debe asegurarse de que la cuadrícula padre tenga suficientes vías de fila y columna para todos los subelementos.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: subgrid;
}
```

## Estratificando elementos con `z-index`

Los elementos de cuadrícula pueden ocupar la misma celda. Si volvemos a nuestro ejemplo con elementos posicionados por número de línea, podemos cambiar esto para hacer que dos elementos se superpongan.

```html
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('l_ex', '230', '420') }}

El elemento `box2` ahora se superpone a `box1`, se muestra en la parte superior ya que aparece después en el orden de origen.

### Controlando el orden

Podemos controlar el orden en el que los artículos se apilan utilizando la propiedad z-index - al igual que con los elementos posicionados. Si le damos a `box2` un `z-index` más bajo que `box1`, se mostrará debajo de box1 en la pila.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('controlando_el_orden', '230', '420') }}

## Siguientes Pasos

En este artículo hemos tenido una mirada muy rápida a través de la Especificación de Grid Layout. Juegue un poco con los ejemplos de código, y luego pase a [la siguiente parte de esta guía donde realmente nos vamos a adentrar en detalle dentro de CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout).

<section id="Quick_links">
<ol>
 <li><a href="/es/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/es/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li>
 <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li>
 <li data-default-state="open"><a href="#"><strong>Guías</strong></a>
  <ol>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Conceptos básicos del posicionamiento con cuadrículas</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relación con otros métodos de posicionamiento</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Posicionamiento basado en líneas</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Áreas de una plantilla de cuadrícula</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Posicionamiento usando líneas de cuadrícula con nombres</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Posicionamiento automático en grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Alineación de cajas en grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">cuadrículas, valores lógicos y modos de escritura</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout y Accesibilidad</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout y Mejora Progresiva</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">Layouts comunes utilizando CSS Grid</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>Properties</strong></a>
  <ol>
   <li><a href="/es/docs/Web/CSS/grid">grid</a></li>
   <li><a href="/es/docs/Web/CSS/grid-area">grid-area</a></li>
   <li><a href="/es/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li>
   <li><a href="/es/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></li>
   <li><a href="/es/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li>
   <li><a href="/es/docs/Web/CSS/grid-column">grid-column</a></li>
   <li><a href="/es/docs/Web/CSS/grid-column-end">grid-column-end</a></li>
   <li><a href="/es/docs/Web/CSS/grid-column-gap">grid-column-gap</a></li>
   <li><a href="/es/docs/Web/CSS/grid-column-start">grid-column-start</a></li>
   <li><a href="/es/docs/Web/CSS/grid-gap">grid-gap</a></li>
   <li><a href="/es/docs/Web/CSS/grid-row">grid-row</a></li>
   <li><a href="/es/docs/Web/CSS/grid-row-end">grid-row-end</a></li>
   <li><a href="/es/docs/Web/CSS/grid-row-gap">grid-row-gap</a></li>
   <li><a href="/es/docs/Web/CSS/grid-row-start">grid-row-start</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template">grid-template</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template-areas">grid-template-areas</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template-columns">grid-template-columns</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>Glossary</strong></a>
  <ol>
   <li><a href="/es/docs/Glossary/Grid">cuadrícula</a></li>
   <li><a href="/es/docs/Glossary/Grid_lines">Líneas de cuadrícula</a></li>
   <li><a href="/es/docs/Glossary/Grid_tracks">Pistas de cuadrícula</a></li>
   <li><a href="/es/docs/Glossary/Grid_cell">Celda de cuadrícula</a></li>
   <li><a href="/es/docs/Glossary/Grid_areas">Áreas de cuadrícula</a></li>
   <li><a href="/es/docs/Glossary/Gutters">Canaletas</a></li>
   <li><a href="/es/docs/Glossary/Grid_Axis">Ejes de cuadrícula</a></li>
   <li><a href="/es/docs/Glossary/Grid_rows">Fila de cuadrícula</a></li>
   <li><a href="/es/docs/Glossary/Grid_column">Columna de cuadrícula</a></li>
  </ol>
 </li>
</ol>
</section>
</div>

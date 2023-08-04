---
title: Relación de Grid Layout con otros métodos de diseño y posicionamiento - CSS
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
---

CSS Grid Layout ha sido diseñado para trabajar junto con otros elementos de CSS, como parte de un sistema completo para hacer el diseño. En esta guía explicaré cómo se ajusta _Grid_ junto con otras técnicas que ya se estén usando.

> **Nota:** Las traducciones posibles a la palabra Grid en este contexto son: Grilla, Rejilla, Cuadrícula, Malla. Para efecto del contenido será _Grid_.

## Grid y flexbox

La diferencia básica entre CSS Grid Layout y [CSS Flexbox Layout](/es/docs/Web/CSS/CSS_Flexible_Box_Layout) es que Flexbox se creó para diseños de una dimensión, en una fila o una columna. En cambio CSS Grid Layout se pensó para el diseño bidimensional, en varias filas y columnas al mismo tiempo. Sin embargo, las dos especificaciones comparten algunas características comunes, y si ya has aprendido cómo utilizar Flexbox, verás semejanzas que te ayudarán a entender _Grid_.

### Diseños de Una dimensión vs. dos dimensiones

Un ejemplo simple puede demostrar la diferencia entre el diseño de una y dos dimensiones.

En este primer ejemplo, estoy usando flexbox para diseñar un conjunto de cajas. Tengo cinco ítems-hijos en mi contenedor y les he dado valores a sus propiedades flex para que puedan aumentar y reducirse desde una flex-basis de 200 píxeles.

También he configurado la propiedad `wrap`{{cssxref ("flex-wrap")}} , de modo que si el espacio del contenedor se hace demasiado estrecho para mantener esa flex-basis, los ítems se ajustarán (wrap) a una nueva fila.

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
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.wrapper > div {
  flex: 1 1 200px;
}
```

{{ EmbedLiveSample('onedtwod', '500', '230') }}

En la imagen se puede ver que dos elementos se han ajustado en una nueva línea. Estos ítems comparten el espacio disponible y no están alineados debajo de los ítems de arriba. Esto es porque cuando envuelves (wrap) flex-ítems, cada nueva fila (o columna si se trabaja por columna) se convierte en un nuevo flex-container. La distribución del espacio ocurre a lo largo de la fila.

La pregunta típica entonces es cómo conseguir que estos ítems se alineen. Aquí es donde queremos un método de layout bidimensional, queremos controlar la alineación por fila y columna, y es donde entra el grid.

### El mismo diseño con CSS Grid Layout

En el siguiente ejemplo construyo el mismo diseño usando Grid. Esta vez tenemos tres pistas de columna de `1fr`. No necesitamos establecer nada sobre los ítems mismos, ellos se colocarán uno dentro de cada celda de la cuadrícula creada. Como se puede ver, se mantienen en una cuadrícula estricta, alineados en filas y columnas. Con cinco ítems, tenemos un hueco al final de la fila dos.

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
}
```

{{ EmbedLiveSample('Two_Dimensional_With_Grid', '300', '170') }}

Hay una pregunta muy simple para decidir si utilizar grid o flexbox:

- ¿Necesito controlar el diseño únicamente por filas o por columnas? – usa flexbox
- ¿Necesito controlar el diseño por filas y por columnas? – usa grid

### ¿Contenido fuera o layout dentro?

Además de la distinción unidimensional vs bidimensional, hay otra forma de decidir si es mejor utilizar flexbox o grid para un layout. Flexbox trabaja desde el contenido. Un caso de uso ideal para flexbox es cuando tienes un conjunto de ítems y quieres espaciarlos uniformemente en un contenedor. Dejas que el tamaño del contenido decida cuánto espacio ocupa cada ítem. Si los ítems se envuelven (wrap) en una nueva línea, calcularán su espaciado basándose en su tamaño y el espacio disponible _en esa línea_.

Grid funciona desde el layout hacia adentro. Cuando usas CSS Grid Layout creas un diseño y luego colocas elementos en él, o permites que las reglas de auto-placement coloquen los elementos en las celdas de la cuadrícula de acuerdo con esa cuadrícula estricta. Existe la posibilidad de crear pistas que respondan al tamaño del contenido, sin embargo, también cambiarán toda la pista.

Si estás usando flexbox y estás deshabilitando parte de la flexibilidad, probablemente necesites usar CSS Grid Layout. Un ejemplo sería si estás configurando un ancho de porcentaje en un flex-item para alinearlo con otros ítems de una línea anterior. En ese caso, es probable que Grid sea una mejor opción.

### Alineación de Cajas

La característica de Flexbox que fue más emocionante para muchos de nosotros es que nos dio un control de alineación adecuado por primera vez. Hizo fácil centrar una caja en la página. Los flex-ítems pueden estirarse hasta la altura del flex container, lo que significa que son posibles columnas de la misma altura. Estas eran cosas que queríamos hacer desde hace mucho tiempo, y creamos todo tipo de hacks para conseguir al menos el efecto visual.

Las propiedades de alineación de la especificación de Flexbox se han añadido a una nueva especificación llamada [Box Alignment Level 3](https://drafts.csswg.org/css-align/). Esto significa que pueden utilizarse en otras especificaciones, incluida Grid Layout. En el futuro, es posible que se apliquen también a otros métodos de layout.

En una guía posterior en esta serie voy a echar un vistazo a Box Alignment y cómo funciona en Grid Layout, sin embargo aquí hay un ejemplo simple comparando Flexbox con Grid.

El primer ejemplo utiliza flexbox, tengo un contenedor con tres ítems dentro. El {{cssxref("min-height")}} del wrapper es fijo, por lo que está definiendo la altura del flex container. En el flex container he establecido {{cssxref("align-items")}} en `flex-end` para que los items se alineen al final del flex container. También he establecido la propiedad {{cssxref("align-self")}} en `box1` para que anule el valor por defecto y se estire a la altura del contenedor, y en `box2` para que se alinee con el inicio del contenedor flexible.

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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: flex;
  align-items: flex-end;
  min-height: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: flex-start;
}
```

{{ EmbedLiveSample('Alineacion_de_cajas', '300', '230') }}

### Alineación en CSS Grid Layout

En este segundo ejemplo uso Grid para construir el mismo diseño, usando las propiedades de alineación como se aplican en el grid layout. Por eso alineamos a `start` y a `end` en vez de a `flex-start` y `flex-end`. En grid layout alineamos los ítems dentro de su grid area que en este caso es una celda de la rejilla pero puede ser un área formada por múltiples celdas de rejilla.

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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  grid-auto-rows: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: start;
}
```

{{ EmbedLiveSample('Alineacion_en_Cssgrid', '200', '310') }}

### La unidad `fr` y `flex-basis`

Ya hemos visto que la unidad `fr` asigna a las pistas del grid (tracks) una proporción del espacio disponible en el grid container. La unidad `fr` combinada con la función {{cssxref("minmax()", "minmax")}} permite un comportamiento muy similar al que tienen las propiedades `flex` en Flexbox - y todavía mantenemos la posibilidad de crear un layout de dos dimensiones.

Si volvemos al ejemplo en el que demostré la diferencia entre layouts de una y de dos dimensiones, puedes ver que hay una diferencia con respecto al modo de funcionamiento responsive en cada una de ellas. En la flex-layout si arrastramos nuestra ventana haciéndola cada vez más pequeña, flex box ajusta el número de ítems en cada fila de acuerdo al espacio disponible. Si tenemos mucho espacio los cinco ítems pueden caber en una fila, pero si tenemos un contenedor muy estrecho podríamos tener espacio solo para uno.

En comparación, la versión grid siempre mantiene tres pistas de columna: son las pistas mismas las que crecen y se encogen, pero siempre hay tres, ya que al crear la rejilla definimos tres.

#### Auto-filling grid tracks

Podemos crear un efecto similar a flexbox, mientras mantenemos el contenido organizado en filas y columnas concretas mediante la creación de una lista de tracks usando la notación repeat y las propiedades `auto-fill` y `auto-fit`.

En el siguiente ejemplo he usado `auto-fill` en el lugar del número entero de la notación repeat y he establecido la lista de pistas en 200 píxeles. Esto significa que el grid creará tantas columnas de 200 píxeles como quepan en el container.

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
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}
```

{{ EmbedLiveSample('Auto-filling_grid_tracks', '500', '170') }}

### Una cantidad flexible de pistas

Esto no es lo mismo que flexbox, en el ejemplo de flexbox los elementos son más grandes que la base de 200 píxeles antes del envoltorio. Podemos lograr lo mismo en grid combinando `auto-fill` y la función {{cssxref("minmax()", "minmax")}}. En el siguiente ejemplo configuro pistas que se rellenan automáticamente con `minmax`. Quiero que mis pistas tengan un mínimo de 200 píxeles, y luego establezco el máximo en `1fr`. Una vez que el navegador ha calculado cuántas veces caben 200 píxeles en el contenedor - teniendo en cuenta también la cantidad de espacio entre las rejillas ( grid gaps) - tratará como una instrucción el máximo de `1fr` y repartirá el espacio restante entre los ítems.

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
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

{{ EmbedLiveSample('cantidad_flexible_pistas', '500', '170') }}

Ahora tenemos la capacidad de crear una cuadrícula con un número flexible de pistas flexibles, y de ver los ítems dispuestos en la cuadrícula alineados por filas y columnas al mismo tiempo.

## El grid y los elementos absolutamente posicionados

Grid interactúa con elementos absolutamente posicionados, lo que puede ser útil si quieres colocar un ítem dentro de una rejilla o de un área de la rejilla. La especificación define el comportamiento cuando un grid container es el bloque contenedor y es el padre del ítem posicionado absolutamente.

### El grid container como bloque contenedor

Para hacer que el grid container sea un bloque contenedor es necesario añadir al container la propiedad position con el valor relative, (de la misma manera que harías para cualquier otro bloque contenedor posicionado absolutamente). Una vez hecho esto, si das la propiedad `position:` `absolute` a un grid-item se tomará como bloque que contiene el grid container o, si el ítem también tiene una posición de cuadrícula, como el área de la cuadrícula en la que se coloca.

En el ejemplo de abajo tengo un wrapper que contiene cuatro ítems hijos, el ítem tres está absolutamente posicionado y también está colocado en la cuadrícula usando line-based placement. El grid container tiene `position:` `relative` y así se convierte en el contexto de posicionamiento de este elemento.

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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    Este bloque está absolutamente posicionado. En este ejemplo, el grid
    container es el bloque contenedor, y por ello sus valores offsset para el
    posicionamiento absoluto se calculan a partir de los bordes exteriores del
    área en la que está colocado.
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
  position: relative;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
```

{{ EmbedLiveSample('grid_container_como_bloque_contenedor', '500', '330') }}

Puedes ver que el ítem está ocupando el área de la línea 2 a la 4 de la cuadrícula y que empieza después de la línea 1. Luego se desplaza en esa área usando las propiedades `top` y `left`. Sin embargo, se ha sacado del flujo, como ocurre con los objetos en posición absoluta, por lo que las reglas de auto-placement colocan los objetos en ese mismo espacio. El ítem tampoco causa que sea generada la fila adicional para que se extienda a la línea 3.

Si eliminamos `position:` `absolute` de las reglas de `.box3` podemos ver cómo se mostraría sin el posicionamiento.

### El grid container como parent

Si el hijo absolutamente posicionado tiene un grid container como padre pero ese container no crea un nuevo contexto de posicionamiento, entonces se saca del flujo como en el ejemplo anterior. El contexto de posicionamiento será el elemento que cree un contexto de posicionamiento como es común a otros métodos de diseño. En nuestro caso, si eliminamos `position:` `relative` del wrapper de arriba, el contexto de posicionamiento es de la ventana de visualización, como se muestra en esta imagen.

![Image of grid container as parent](2_abspos_example.png)

Una vez más, el ítem ya no participa en el diseño de la cuadrícula en términos de tamaño o cuando otros ítems se colocan automáticamente.

### Con un grid area como parent

Si el ítem absolutamente posicionado está anidado dentro de un área de cuadrícula, entonces puede crear un contexto de posicionamiento en esa área. En el ejemplo de abajo tenemos nuestra cuadrícula como antes pero esta vez he anidado un ítem dentro de `.box3` de la cuadrícula.

He dado a `.box3` position relative y luego he posicionado el sub-ítem con las propiedades offset. En este caso, el contexto de posicionamiento es el grid area

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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    Three
    <div class="abspos">
      Este bloque está absolutamente posicionado. En este ejemplo, el grid
      container es el bloque contenedor, y por ello sus valores offsset para el
      posicionamiento absoluto se calculan a partir de los bordes exteriores del
      área en la que está colocado.
    </div>
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
}
.abspos {
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #000;
  padding: 10px;
}
```

{{ EmbedLiveSample('Con_un_grid_area_como_parent', '500', '420') }}

## Grid y `display:` `contents`

Una interacción final con otra especificación de layout que merece la pena destacar es la interacción entre CSS Grid Layout y `display:` `contents`. El valor de `contents` en la propiedad display es un nuevo valor que se describe en [Display specification](https://drafts.csswg.org/css-display/#box-generation) de la siguiente manera:

> "El elemento en sí no genera ninguna caja, pero sus hijos y pseudo-elementos siguen generando cajas como de costumbre. A efectos de generación y layout de cajas, el elemento debe ser tratado como si hubiera sido sustituido por sus hijos y pseudo-elementos en el árbol del documento"

Si configuras un ítem como `display: contents` la caja que normalmente crearía desaparece, y las cajas de los elementos hijo aparecen como si hubieran subido de nivel. Esto significa que los hijos de un grid item pueden convertirse en grid items. . ¿Suena raro? He aquí un ejemplo sencillo. En el siguiente marcado tengo un grid, el primer ítem del grid se establece para que se expanda tres pistas de columna. Contiene tres ítems anidados. Como esos hijos no son hijos directos, no forman parte del grid layout y por tanto se muestran como `display: block`.

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
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

{{ EmbedLiveSample('Display_Contents_Before', '400', '420') }}

#### Usado `display: contents`

Si ahora añado `display:` `contents` a las reglas del box1, la caja de ese ítem desaparece y los subítems se convierten en grid ítems y se despliegan usando las reglas de auto-placement.

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
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  display: contents;
}
```

{{ EmbedLiveSample('Display_Contents_After', '400', '330') }}

Esta puede ser una forma de anidar elementos en la rejilla para que actúen como si fueran parte de la rejilla, y es una forma de sortear algunos de los problemas que resolverían los sub-grid una vez que se implementen. También puedes usar `display:` `contents` de manera similar en flexbox para que los ítems anidados se conviertan en flex items.

Como puedes ver en esta guía, CSS Grid Layout es sólo una parte de tu kit de herramientas. No tengas miedo de mezclarlo con otros métodos de maquetación, para conseguir los diferentes efectos que necesitas.

<section id="Quick_links">
<ol>
 <li><a href="/es/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/es/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li>
 <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li>
 <li data-default-state="open"><a href="#"><strong>Guías</strong></a>
  <ol>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Conceptos básicos del posicionamiento con rejillas</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relación con otros métodos de posicionamiento</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Posicionamiento basado en líneas</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Áreas de una plantilla de rejilla</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Posicionamiento usando líneas de rejilla con nombres</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Posicionamiento automático en grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Alineación de cajas en grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">Rejillas, valores lógicos y modos de escritura</a></li>
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
   <li><a href="/es/docs/Glossary/Grid">Rejilla</a></li>
   <li><a href="/es/docs/Glossary/Grid_lines">Líneas de rejilla</a></li>
   <li><a href="/es/docs/Glossary/Grid_tracks">Pistas de rejilla</a></li>
   <li><a href="/es/docs/Glossary/Grid_cell">Celda de rejilla</a></li>
   <li><a href="/es/docs/Glossary/Grid_areas">Áreas de rejilla</a></li>
   <li><a href="/es/docs/Glossary/Gutters">Canaletas</a></li>
   <li><a href="/es/docs/Glossary/Grid_Axis">Ejes de rejilla</a></li>
   <li><a href="/es/docs/Glossary/Grid_rows">Fila de rejilla</a></li>
   <li><a href="/es/docs/Glossary/Grid_column">Columna de rejilla</a></li>
  </ol>
 </li>
</ol>
</section>

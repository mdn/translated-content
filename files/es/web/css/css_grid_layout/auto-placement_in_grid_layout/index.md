---
title: Colocación automática en diseño de cuadrícula CSS
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
---

Además de la capacidad de colocar elementos con precisión en una cuadrícula creada, la especificación de diseño de cuadrícula CSS contiene reglas que controlan lo que sucede cuando crea una cuadrícula y no coloca algunos o todos los elementos secundarios. Puede ver la colocación automática en acción de la manera más simple creando una cuadrícula en un conjunto de elementos. Si no proporciona información de ubicación a los elementos, se colocarán en la cuadrícula, uno en cada celda de la cuadrícula.

#### Ejemplo

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
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

{{ EmbedLiveSample('placement_1', '500', '230') }}

## Reglas predeterminadas para la colocación automática

Como puede ver con el ejemplo anterior, si crea una cuadrícula, todos los elementos secundarios se colocarán uno en cada celda de la cuadrícula. El flujo predeterminado es organizar los elementos por fila. La cuadrícula colocará un elemento en cada celda de la fila 1. Si ha creado filas adicionales utilizando la propiedad `grid-template-rows` , entonces grid continuará colocando elementos en estas filas. Si la cuadrícula no tiene suficientes filas en la cuadrícula explícita para colocar todos los elementos, se crearán nuevas filas _implícitas_ .

### Dimensionar filas en la cuadrícula implícita

El valor predeterminado para las filas creadas automáticamente en la cuadrícula implícita es que tengan el tamaño automático. Esto significa que contendrán el contenido agregado a ellos sin causar un desbordamiento.

Sin embargo, puede controlar el tamaño de estas filas con la propiedad `grid-auto-rows` . Para hacer que todas las filas creadas tengan 100 píxeles de alto, por ejemplo, usaría:

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
  grid-gap: 10px;
  grid-auto-rows: 100px;
}
```

{{ EmbedLiveSample('placement_2', '500', '330') }}

#### Usando `minmax()`

Puede usar [`minmax()`](/es/docs/Web/CSS/minmax) en su valor para [`grid-auto-rows`](/es/docs/Web/CSS/grid-auto-rows) permite la creación de filas de un tamaño mínimo pero luego crecer para ajustarse al contenido si es más alto.

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
  <div>
    Four <br />This cell <br />Has extra <br />content. <br />Max is auto
    <br />so the row expands.
  </div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
```

{{ EmbedLiveSample('placement_3', '500', '330') }}

#### Usando una lista de pistas

También puede pasar una lista de pistas, esto se repetirá. La siguiente lista de pistas creará una pista de fila implícita inicial como 100 píxeles y una segunda como `200px` píxeles. Esto continuará mientras se agregue contenido a la cuadrícula implícita. **Las listas de seguimiento no son compatibles con Firefox.**

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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px 200px;
}
```

{{ EmbedLiveSample('placement_4', '500', '330') }}

### Colocación automática por columna

También puede pedirle a la cuadrícula que coloque automáticamente los elementos por columna. Usando la propiedad [`grid-auto-flow`](/es/docs/Web/CSS/grid-auto-flow) con un valor de `column` . En este caso, la cuadrícula agregará elementos en las filas que haya definido utilizando [`grid-template-rows`](/es/docs/Web/CSS/grid-template-rows) . Cuando llena una columna, se moverá a la siguiente columna explícita o creará una nueva pista de columna en la cuadrícula implícita. Al igual que con las pistas de fila implícitas, estas pistas de columna tendrán el tamaño automático. Puede controlar el tamaño de las pistas de columna implícitas con [`grid-auto-columns`](/es/docs/Web/CSS/grid-auto-columns) , esto funciona de la misma manera que [`grid-auto-rows`](/es/docs/Web/CSS/grid-auto-rows) .

En el siguiente ejemplo, he creado una cuadrícula con tres pistas de fila de 200 píxeles de altura. Estoy colocando automáticamente por columna y las columnas creadas tendrán un ancho de columna de 300 píxeles, luego un ancho de columna de 100 píxeles hasta que haya suficientes pistas de columna para contener todos los elementos.

```css
.wrapper {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
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
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('placement_5', '500', '640') }}

## El orden de los artículos colocados automáticamente

Una cuadrícula puede contener una mezcla de elementos. Algunos de los elementos pueden tener una posición en la cuadrícula, pero otros pueden colocarse automáticamente. Esto puede ser útil, si tiene un orden de documentos que refleja el orden en que los elementos se ubican en la cuadrícula, es posible que no necesite escribir reglas CSS para colocar absolutamente todo. La especificación contiene una sección larga que detalla el [algoritmo de colocación de elementos de](https://drafts.csswg.org/css-grid/#auto-placement-algo) la [cuadrícula](https://drafts.csswg.org/css-grid/#auto-placement-algo) , sin embargo, para la mayoría de nosotros solo necesitamos recordar algunas reglas simples para nuestros elementos.

### Pedido de documentos modificados

La cuadrícula coloca los elementos a los que no se les ha asignado una posición de cuadrícula en lo que se describe en la especificación como "orden de documento modificado de orden". Esto significa que si ha utilizado la propiedad del `order` , los artículos se colocarán por ese orden, no por su orden DOM. De lo contrario, permanecerán de forma predeterminada en el orden en que se ingresan en el origen del documento.

### Artículos con propiedades de colocación

Lo primero que hará la cuadrícula es colocar cualquier elemento que tenga una posición. En el siguiente ejemplo, tengo 12 elementos de cuadrícula. El elemento 2 y el elemento 5 se han colocado utilizando una colocación basada en líneas en la cuadrícula. Puede ver cómo se colocan esos elementos y luego los otros elementos se colocan automáticamente en los espacios. Los artículos colocados automáticamente se colocarán antes de los artículos colocados en orden DOM, no comienzan después de la posición de un artículo colocado que viene antes que ellos.

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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{ EmbedLiveSample('placement_6', '500', '450') }}

### Maneja artículos que abarcan pistas

Puede usar las propiedades de ubicación sin dejar de aprovechar la colocación automática. En el siguiente ejemplo, he agregado al diseño configurando elementos impares para abarcar dos pistas tanto para filas como para columnas. Hago esto con las propiedades [`grid-column-end`](/es/docs/Web/CSS/grid-column-end) y [`grid-row-end`](/es/docs/Web/CSS/grid-row-end) y establezco el valor de esto para `span 2` . Lo que esto significa es que la línea de inicio del artículo se establecerá mediante la colocación automática, y la línea final abarcará dos pistas.

Puede ver cómo esto deja huecos en la cuadrícula, en cuanto a los elementos colocados automáticamente si la cuadrícula se encuentra con un elemento que no cabe en una pista, se moverá a la siguiente fila hasta que encuentre un espacio que el elemento pueda caber en.

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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
}
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{ EmbedLiveSample('placement_7', '500', '770') }}

### Llenando los huecos

Hasta ahora, aparte de los elementos que hemos colocado específicamente, la cuadrícula siempre avanza y mantiene los elementos en orden DOM. En general, esto es lo que desea, si está diseñando un formulario, por ejemplo, no desea que las etiquetas y los campos se mezclen para llenar un vacío. Sin embargo, a veces, estamos diseñando cosas que no tienen un orden lógico y nos gustaría crear un diseño que no tenga huecos.

Para hacer esto, agregue la propiedad [`grid-auto-flow`](/es/docs/Web/CSS/grid-auto-flow) con un valor `dense` al contenedor. Esta es la misma propiedad que usa para cambiar el orden de flujo a `column` , por lo que si estuviera trabajando en columnas agregaría ambos valores `grid-auto-flow: column dense` .

Una vez hecho esto, la grilla ahora rellenará los huecos, a medida que se mueva a través de la grilla, deja huecos como antes, pero luego, si encuentra un elemento que se ajuste a un hueco anterior, lo recogerá y lo sacará del orden DOM para colóquelo en la brecha. Al igual que con cualquier otro reordenamiento en la cuadrícula, esto no cambia el orden lógico. El orden de tabulación, por ejemplo, seguirá el orden del documento. Examinaremos los posibles problemas de accesibilidad de Grid Layout en una guía posterior, pero debe tener cuidado al crear esta desconexión entre el orden visual y el orden de visualización.

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
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
  grid-auto-flow: dense;
}
```

{{ EmbedLiveSample('placement_8', '500', '730') }}

### Elementos de cuadrícula anónimos

Hay una mención en la especificación de elementos de cuadrícula anónimos. Estos se crean si tiene una cadena de texto dentro de su contenedor de cuadrícula, que no está envuelta en ningún otro elemento. En el siguiente ejemplo, tenemos tres elementos de cuadrícula, suponiendo que haya configurado el padre con una clase de `grid` para `display: grid` . El primero es un elemento anónimo, ya que no tiene un marcado adjunto, este elemento siempre se tratará a través de las reglas de colocación automática. Los otros dos son elementos de cuadrícula encerrados en un div, pueden colocarse automáticamente o puede colocarlos con un método de posicionamiento en su cuadrícula.

```css
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Los elementos anónimos siempre se colocan automáticamente porque no hay forma de orientarlos. Por lo tanto, si tiene algún texto sin envolver por alguna razón en su cuadrícula, tenga en cuenta que puede aparecer en algún lugar inesperado, ya que se colocará automáticamente de acuerdo con las reglas de colocación automática.

### Casos de uso para la colocación automática

La colocación automática es útil siempre que tenga una colección de artículos. Pueden ser elementos que no tienen un orden lógico, como una galería de fotos o una lista de productos. En ese caso, puede optar por utilizar el modo de embalaje denso para rellenar los agujeros en su cuadrícula. En mi ejemplo de galería de imágenes tengo algunas imágenes de paisajes y algunas de retratos. He configurado imágenes de paisajes, con una clase de `landscape` para abarcar dos pistas de columna. Luego uso `grid-auto-flow: dense` para crear una grilla densamente empaquetada.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 10px;
  grid-auto-flow: dense;
  list-style: none;
  margin: 1em auto;
  padding: 0;
  max-width: 800px;
}
.wrapper li {
  border: 1px solid #ccc;
}
.wrapper li.landscape {
  grid-column-end: span 2;
}
.wrapper li img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

```html
<ul class="wrapper">
  <li><img src="http://placehold.it/200x300" alt="placeholder" /></li>
  <li class="landscape">
    <img src="http://placehold.it/350x200" alt="placeholder" />
  </li>
  <li class="landscape">
    <img src="http://placehold.it/350x200" alt="placeholder" />
  </li>
  <li class="landscape">
    <img src="http://placehold.it/350x200" alt="placeholder" />
  </li>
  <li><img src="http://placehold.it/200x300" alt="placeholder" /></li>
  <li><img src="http://placehold.it/200x300" alt="placeholder" /></li>
  <li class="landscape">
    <img src="http://placehold.it/350x200" alt="placeholder" />
  </li>
  <li><img src="http://placehold.it/200x300" alt="placeholder" /></li>
  <li><img src="http://placehold.it/200x300" alt="placeholder" /></li>
  <li><img src="http://placehold.it/200x300" alt="placeholder" /></li>
</ul>
```

{{ EmbedLiveSample('placement_9', '500', '1300') }}

#### Ejemplo con listas de definición

La colocación automática también puede ayudarlo a diseñar elementos de interfaz que tengan un orden lógico. Un ejemplo es la lista de definiciones en el siguiente ejemplo. Las listas de definición son un desafío interesante para el estilo, ya que son planas, no hay nada que envuelva los grupos de elementos `dt` y `dd` . En mi ejemplo, estoy permitiendo la colocación automática para colocar los elementos, sin embargo, tengo clases que comienzan un `dt` en la columna 1, y `dd` en la columna 2, esto garantiza que los términos vayan de un lado y las definiciones del otro, sin importar cuántos de cada uno que tenemos.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html
<div class="wrapper">
  <dl>
    <dt>Mammals</dt>
    <dd>Cat</dd>
    <dd>Dog</dd>
    <dd>Mouse</dd>
    <dt>Fish</dt>
    <dd>Guppy</dd>
    <dt>Birds</dt>
    <dd>Pied Wagtail</dd>
    <dd>Owl</dd>
  </dl>
</div>
```

```css
dl {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 300px;
  margin: 1em;
  line-height: 1.4;
}
dt {
  grid-column: 1;
  font-weight: bold;
}
dd {
  grid-column: 2;
}
```

{{ EmbedLiveSample('placement_10', '500', '230') }}

## ¿Qué no podemos hacer con la colocación automática (todavía)?

Hay un par de cosas que a menudo surgen como preguntas. Actualmente no podemos hacer cosas como apuntar a cualquier otra celda de la cuadrícula con nuestros artículos. Es posible que ya se le haya ocurrido un problema relacionado si siguió la última guía sobre líneas con nombre en la cuadrícula. Sería definir una regla que dijera "colocar elementos automáticamente en la siguiente línea llamada" n ", y la cuadrícula se saltaría otras líneas. Se plantea [un problema al respecto](https://github.com/w3c/csswg-drafts/issues/796) en el repositorio CSSWG GitHub, y sería bienvenido a agregue sus propios casos de uso a esto.

Puede ser que se te ocurran tus propios casos de uso para la colocación automática o cualquier otra parte del diseño de la cuadrícula. Si lo hace, créelos como problemas o agréguelos a un problema existente que podría resolver su caso de uso. Esto ayudará a mejorar las futuras versiones de la especificación.

<section id="Quick_links">
<ol>
 <li><a href="/es/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/es/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li>
 <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li>
 <li data-default-state="open"><a href="#"><strong>Guides</strong></a>
  <ol>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basics concepts of grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relationship to other layout methods</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Line-based placement</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Grid template areas</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Layout using named grid lines</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Auto-placement in grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">Grids, logical values and writing modes</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout and Accessibility</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout and Progressive Enhancement</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">Realizing common layouts using grids</a></li>
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
   <li><a href="/es/docs/Glossary/Grid">Grid</a></li>
   <li><a href="/es/docs/Glossary/Grid_lines">Grid lines</a></li>
   <li><a href="/es/docs/Glossary/Grid_tracks">Grid tracks</a></li>
   <li><a href="/es/docs/Glossary/Grid_cell">Grid cell</a></li>
   <li><a href="/es/docs/Glossary/Grid_areas">Grid areas</a></li>
   <li><a href="/es/docs/Glossary/Gutters">Gutters</a></li>
   <li><a href="/es/docs/Glossary/Grid_Axis">Grid Axis</a></li>
   <li><a href="/es/docs/Glossary/Grid_rows">Grid row</a></li>
   <li><a href="/es/docs/Glossary/Grid_column">Grid column</a></li>
  </ol>
 </li>
</ol>
</section>

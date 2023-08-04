---
title: Cuadrículas
slug: Learn/CSS/CSS_layout/Grids
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}

La compaginación en cuadrícula con CSS es un método de diseño de páginas web en dos dimensiones. Te permite distribuir el contenido en filas y columnas, y tiene muchas características que facilitan la creación de diseños complejos. Este artículo te proporciona todo lo que necesitas saber para comenzar con el diseño de páginas web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >Introducción al HTML</a
        >) y una idea de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender los conceptos fundamentales que hay detrás de los métodos de
        compaginación en cuadrícula y de cómo implementar una compaginación en
        cuadrícula con CSS.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es la compaginación en cuadrícula?

Una cuadrícula es un conjunto de líneas horizontales y verticales que crean un patrón sobre el que podemos alinear nuestros elementos de diseño. Las cuadrículas nos ayudan a crear diseños de página en que los elementos no saltan ni cambian de ancho cuando nos movemos de una página a otra, y así proporcionan a nuestras páginas web un aspecto más coherente.

Una cuadrícula en general tiene **columnas**, **filas** y luego espacios entre cada fila y cada columna, conocidos comúnmente como **canales**.

![](grid.png)

## Crear tu cuadrícula con CSS

Una vez que has decidido qué tipo de cuadrícula necesita tu diseño de página, puedes usar la compaginación en cuadrícula con CSS para crear esa cuadrícula y posicionar elementos en ella. Primero veremos las características básicas de la compaginación en cuadrícula y luego exploraremos cómo crear un método de compaginación de cuadrícula sencilla para tu proyecto.

### Definir una cuadrícula

Como punto de partida, descárgate el [archivo de punto de partida](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/0-starting-point.html) y ábrelo en tu editor de texto y tu navegador (también puedes [verlo en vivo aquí](https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html)). Hay un ejemplo con un contenedor que tiene algunos elementos hijo. Por defecto, estos se muestran en flujo normal, por lo que las cajas se muestran una debajo de la otra. Vamos a trabajar con este archivo durante la primera parte de este artículo, y vamos a hacer cambios en él para ver cómo se comporta la cuadrícula.

Para definir una cuadrícula utilizamos el valor `grid` de la propiedad {{cssxref ("display")}}. Al igual que con el método Flexbox, esto activa la compaginación de cuadrícula y todos los elementos que son hijos directos del contenedor se convierten en elementos de cuadrícula. Añade esto al CSS en tu archivo:

```css
.container {
  display: grid;
}
```

A diferencia del método Flexbox, los elementos no se ven diferentes inmediatamente. La declaración `display: grid` te proporciona una cuadrícula de una sola columna, por lo que tus elementos continúan mostrándose uno debajo del otro, como lo hacen en el flujo normal.

Para ver algo que se parezca más a una cuadrícula, necesitamos añadir columnas a la cuadrícula. Vamos a añadir tres columnas de 200 píxeles. Puedes usar cualquier unidad de longitud o porcentajes para crear estas trazas de columna.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Añade la segunda declaración a tu regla CSS, luego vuelve a cargar la página y observa que los elementos se reubican uno en cada celda de la cuadrícula que has creado.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <div>Uno</div>
  <div>Dos</div>
  <div>Tres</div>
  <div>Cuatro</div>
  <div>Cinco</div>
  <div>Seis</div>
  <div>Siete</div>
</div>
```

{{ EmbedLiveSample('Grid_1', '100%', 400) }}

### Cuadrículas flexibles con la unidad fr

Además de crear cuadrículas con longitudes y porcentajes, podemos usar la unidad `fr` para dimensionar de manera flexible las filas y columnas de la cuadrícula. Esta unidad representa una fracción del espacio disponible en el contenedor de la cuadrícula.

Cambia tu lista de trazas en la definición siguiente para crear tres trazas `1fr`.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Ahora deberías observar que tus trazas son flexibles. La unidad `fr` distribuye el espacio por proporciones, de modo que puedes dar valores positivos diferentes a sus trazas, por ejemplo, si cambias la definición de la manera siguiente:

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

Ahora la primera traza tiene `2fr` del espacio disponible, y las otras dos trazas tienen `1fr`, lo que da una primera traza más grande. Puedes mezclar unidades `fr` y trazas de longitud fija; en tal caso, el espacio que se necesita para las trazas fijas se descuenta del espacio en que se distribuyen las otras trazas.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <div>Uno</div>
  <div>Dos</div>
  <div>Tres</div>
  <div>Cuatro</div>
  <div>Cinco</div>
  <div>Seis</div>
  <div>Siete</div>
</div>
```

{{ EmbedLiveSample('Grid_2', '100%', 400) }}

> **Nota:** La unidad `fr` distribuye el espacio _disponible_, no _todo_ el espacio. Por lo tanto, si una de tus trazas tiene algo grande dentro, habrá menos espacio libre para compartir.

### Los espacios entre trazas

Para crear espacios entre trazas, utilizamos las propiedades {{cssxref ("grid-column-gap")}} para los espacios entre columnas, {{cssxref ("grid-row-gap")}} para los espacios entre filas, y {{ cssxref ("grid-gap")}} para configurar ambos a la vez.

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
}
```

Estos espacios pueden expresarse en cualquier unidad de longitud o en porcentaje, pero no en unidades `fr`.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <div>Uno</div>
  <div>Dos</div>
  <div>Tres</div>
  <div>Cuatro</div>
  <div>Cinco</div>
  <div>Seis</div>
  <div>Siete</div>
</div>
```

{{ EmbedLiveSample('Grid_3', '100%', 400) }}

> **Nota:** Las propiedades `*gap` solían tener el prefijo `grid-`, pero esto se ha cambiado en la especificación, porque la intención es hacerlas compatibles con diversos métodos de diseño. Por el momento, Edge y Firefox admiten las versiones sin prefijo, y las versiones con prefijo se mantienen como un alias, por lo que será seguro usarlas durante algún tiempo. Para quedarte en lo seguro, y que tu código sea más a prueba de balas, puedes duplicar y añadir ambas propiedades.

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
  gap: 20px;
}
```

### Repetir listas de trazas

Puedes repetir todas tus trazas, o una sección de tu lista de trazas, con la notación de repetición. Cambia tu lista de trazas por lo siguiente:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

Ahora vas a tener 3 trazas de `1fr`, igual que antes. El primer valor que pasas a la función de repetición son las veces que deseas que la lista se repita, mientras que el segundo valor es una lista de trazas, que puede constar de una o más trazas.

### La cuadrícula implícita y explícita

Hasta ahora solo hemos especificado trazas de columna y, sin embargo, también creamos filas para contener nuestro contenido. Este es un ejemplo de una cuadrícula explícita con respecto a una implícita. La cuadrícula explícita es la que creas usando `grid-template-columns` o `grid-template-rows`. La cuadrícula implícita se crea cuando el contenido se posiciona fuera de esa cuadrícula, como en nuestras filas. Las cuadrículas explícitas e implícitas son análogas a los ejes principales y transversales del método Flexbox.

Por defecto, las trazas que se crean en la cuadrícula implícita tienen un tamaño `auto`, lo que en general significa que son lo bastante grandes para ajustarse a su contenido. Si deseas asignar un tamaño a las trazas de las cuadrícula implícitas, puedes usar las propiedades {{cssxref ("grid-auto-rows")}} y {{cssxref ("grid-auto-columns")}}. Si añades `grid-auto-rows` con un valor de `100px` a tu CSS, observa que esas filas que has creado ahora tienen 100 píxeles de alto.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 20px;
}
```

```html hidden
<div class="container">
  <div>Uno</div>
  <div>Dos</div>
  <div>Tres</div>
  <div>Cuatro</div>
  <div>Cinco</div>
  <div>Seis</div>
  <div>Siete</div>
</div>
```

{{ EmbedLiveSample('Grid_4', '100%', 400) }}

### La función minmax()

Nuestras trazas de 100 píxeles de altura no serán muy útiles si en esas trazas añadimos contenido cuya altura sea mayor que 100 píxeles, porque ello causaría un desbordamiento. Puede ser mejor tener trazas cuya altura sea de _al menos_ 100 píxeles y que puedan expandirse si en ellas entra más contenido. Un hecho en realidad básico sobre la web es que nunca sabes qué altura va a tener algo; contenido adicional o tamaños de letra más grandes pueden causar problemas con los diseños que pretendes ser perfectos con todas las dimensiones en píxeles.

La función `minmax` permite establecer unos tamaños mínimo y máximo para una traza, por ejemplo, `minmax(100px, auto)`. El tamaño mínimo es de 100 píxeles, pero el máximo es `auto`, que se expande para adaptarse al contenido. Prueba a cambiar `grid-auto-rows` para usar un valor minmax:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}
```

Observa que si añades contenido la traza se expande para permitir que se ajuste. Ten en cuenta que la expansión se produce en la dirección de la fila.

### Tantas columnas como quepan

Podemos combinar algunas de las cosas que hemos aprendido sobre las listas de trazas, la notación de repetición y la función `minmax()` para crear un patrón útil. A veces es útil poder pedirle a la cuadrícula que cree tantas columnas como quepan en el contenedor. Para hacer esto establecemos el valor `grid-template-columns` con la notación `repeat()`, pero en lugar de pasar un número, pasa la palabra clave `auto-fill`. Para el segundo parámetro de la función usamos `minmax()`, con un valor mínimo igual al tamaño mínimo de la traza que nos gustaría tener, y un valor máximo de `1fr`.

Prueba esto en tu archivo ahora, con el CSS siguiente:

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}
```

```html hidden
<div class="container">
  <div>Uno</div>
  <div>Dos</div>
  <div>Tres</div>
  <div>Cuatro</div>
  <div>Cinco</div>
  <div>Seis</div>
  <div>Siete</div>
</div>
```

{{ EmbedLiveSample('Grid_5', '100%', 400) }}

Esto funciona porque la cuadrícula crea tantas columnas de 200 píxeles como caben en el contenedor, luego comparte el espacio restante entre todas las columnas: el máximo es 1fr, que como sabemos, distribuye el espacio de manera uniforme entre las trazas.

## Posicionamiento sobre las líneas de base

Ahora pasamos de crear una cuadrícula a colocar cosas en la cuadrícula. Nuestra cuadrícula siempre tiene líneas; estas líneas comienzan en 1 y se relacionan con el modo de escritura del documento. Por lo tanto, en español, la línea de columna 1 es la de la izquierda de la cuadrícula y la línea de fila 1 es la de la parte superior. En una columna arábiga, la línea 1 estaría en el lado derecho, ya que el árabe se escribe de derecha a izquierda.

Podemos posicionar los elementos de acuerdo con estas líneas si especificamos las líneas de inicio y final. Hacemos esto con las propiedades siguientes:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Todas estas propiedades pueden tener un número de línea como valor. También puedes usar las propiedades abreviadas:

- {{cssxref("grid-column")}}
- {{cssxref("grid-row")}}

Estas te permiten especificar a la vez las líneas de inicio y final, separadas por un carácter de barra diagonal: `/`.

Descarga este [archivo de punto de partida](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/8-placement-starting-point.html) o [míralo en vivo aquí](https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html). Ya hay una cuadrícula definida y un elemento sencillo esbozado. Puedes observar que el posicionamiento automático coloca un elemento en cada celda de la cuadrícula que hemos creado.

Nosotros vamos a utilizar en lugar de ello las líneas de cuadrícula para posicionar sobre la cuadrícula todos los elementos de nuestro sitio web. Añade al final de tu código CSS las reglas siguientes:

```css
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>Este es mi blog</header>
  <article>
    <h1>Mi artículo</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Otras cosas</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contáctame: me@mysite.com</footer>
</div>
```

{{ EmbedLiveSample('Grid_6', '100%', 400) }}

> **Nota:** también puedes usar el valor `-1` para señalar la columna del final o la fila del final, y contar hacia atrás desde el final con valores negativos. Sin embargo, esto solo funciona con la cuadrícula explícita. El valor `-1` no señala la línea del final de la cuadrícula implícita.

## Posicionamiento con grid-template-areas

Una forma alternativa de posicionar elementos en tu cuadrícula es usar la propiedad {{cssxref ("grid-template-areas")}} y asignar un nombre a los diversos elementos de tu diseño.

Elimina el posicionamiento sobre las líneas de base del último ejemplo (o vuelve a descargar el archivo para tener un punto de partida nuevo) y añade el código CSS siguiente.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

Vuelve a cargar la página y observa que tus elementos se han colocado como antes ¡sin necesidad de usar números de línea!

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}

aside {
  border-right: 1px solid #999;
}

.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

```html hidden
<div class="container">
  <header>Este es mi blog</header>
  <article>
    <h1>Mi artículo</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Otras cosas</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contáctame: me@mysite.com</footer>
</div>
```

{{ EmbedLiveSample('Grid_7', '100%', 400) }}

Las reglas para `grid-template-areas` son las siguientes:

- Hay que tener todas las celdas de la cuadrícula llenas.
- Para abarcar el ancho de dos celdas, repite el nombre.
- Para dejar una celda vacía, utiliza un punto: `.`.
- Las áreas han de ser rectangulares; por ejemplo, no puedes tener un área en forma de L.
- Las áreas no pueden repetirse en lugares diferentes.

Puedes jugar con nuestro diseño, por ejemplo, cambiar el pie de página para que esté solo debajo del contenido, y la barra lateral para abarcar todo. Esta manera de describir un diseño de página es muy adecuada porque resulta obvio a partir del CSS qué sucede exactamente.

## Una cuadrícula CSS, formato de cuadrícula

Los «formatos» de cuadrícula tienden a basarse en cuadrículas de 12 o 16 columnas, y con las cuadrículas CSS no necesitas ninguna herramienta de terceros para proporcionarte dicho formato, porque ya está en la especificación.

Descárgate el [archivo de punto de partida](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/11-grid-system-starting-point.html). Contiene un contenedor con una cuadrícula de 12 columnas definida y el mismo código de marcado que usamos en los dos ejemplos anteriores. Ahora podemos usar el posicionamiento sobre las líneas de base para colocar nuestro contenido en la cuadrícula de 12 columnas.

```css
header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 20px;
}

header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>Este es mi blog</header>
  <article>
    <h1>Mi artículo</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Otras cosas</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contáctame: me@mysite.com</footer>
</div>
```

{{ EmbedLiveSample('Grid_8', '100%', 400) }}

Si usas el [inspector de cuadrícula de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) para ver una superposición de las líneas de cuadrícula sobre tu diseño, puedes observar cómo funciona nuestra cuadrícula de 12 columnas.

![Una superposición de la cuadrícula de 12 columnas de nuestro diseño de página.](learn-grids-inspector.png)

## ¡Pon a prueba tus conocimientos!

Has llegado al final de este artículo, pero ¿recuerdas la información más importante? Encontrarás test de prueba que te permitirán verificar que has asimilado esta información antes de continuar en: [Pon a prueba tus conocimientos: Cuadrículas](/es/docs/Learn/CSS/CSS_layout/Grid_skills).

## Resumen

En esta descripción general, hemos recorrido las características principales del diseño páginas web con cuadrícula CSS. Deberías poder comenzar a usarlo en tus diseños. Para profundizar en la especificación, lee nuestras guías para el diseño de página con cuadrícula, que puedes encontrar a continuación.

## Ver también

- [Guías de cuadrícula CSS](/es/docs/Web/CSS/CSS_Grid_Layout#guides)
- [Inspector de cuadrícula CSS: Examinar diseños de cuadrícula](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}

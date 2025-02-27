---
title: Realizing common layouts using CSS Grid Layout
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
---

Para completar este conjunto de guías de CSS Grid Layout, voy a recorrer algunos diseños diferentes, que demuestran algunas de las diferentes técnicas que puede utilizar al diseñar con grid layout. Vamos a ver un ejemplo usando [grid-template-areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas) un típico sistema de cuadrícula flexible de 12 columnas, y también un listado de productos usando el emplazamiento automático. Como puedes ver en este conjunto de ejemplos, a menudo hay más de una manera de lograr el resultado que deseas con el diseño de cuadrícula. Escoge el método que encuentres más útil para los problemas que estás resolviendo y los diseños que necesitas implementar.

## Responsive layout de 1 a 3 columnas fluidas usando `grid-template-areas`

Muchos sitios web son una variación de este tipo de diseño: contenido, barras laterales, un encabezado y un pie de página. En diseños responsivos, es posible que quieras mostrar el diseño en una sola columna, agregando una barra lateral en un punto de interrupción determinado y luego incorporar un diseño de tres columnas para pantallas más amplias.

![Image of the three different layouts created by redefining our grid at two breakpoints.](11-responsive-areas.png)

Voy a crear este layout usando la propiedad _named template areas_ que aprendimos en la guía _[Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_.

Mi marcado consiste en un container con elementos en su interior para el header, footer, contenido principal, navegación, sidebar, y un bloque para poner anuncios./p>

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="wrapper">
  <header class="main-head">The header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Área principal del artículo</h1>
    <p>
      En este diseño, las áreas se muestran en el orden en que están escritas en
      las pantallas de menos de 500 píxeles de ancho. Pasamos a un diseño de dos
      columnas, y luego a uno de tres columnas mediante la redefinición de la
      rejilla y la colocación de los elementos en ella.
    </p>
  </article>
  <aside class="side">Sidebar</aside>
  <div class="ad">Advertising</div>
  <footer class="main-footer">The footer</footer>
</div>
```

Al usar {{cssxref("grid-template-areas")}} para crear el diseño. A parte de las media queries necesito nombrar las áreas. Nombremos las áreas con la propiedad {{cssxref("grid-area")}} property.

```css
.main-head {
  grid-area: header;
}
.content {
  grid-area: content;
}
.main-nav {
  grid-area: nav;
}
.side {
  grid-area: sidebar;
}
.ad {
  grid-area: ad;
}
.main-footer {
  grid-area: footer;
}
```

Esto no creará ningún diseño, sin embargo, nuestros elementos ahora tienen nombres que podemos utilizar para hacerlo. Al margen de las media queries, ahora voy a configurar el diseño para el ancho móvil. Aquí estoy manteniendo todo en el orden de origen, tratando de evitar cualquier separación entre la fuente y la pantalla, tal y como se describe en la guía _[Grid layout y accesibilidad](/es/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)_. No he definido ninguna vía de columna o de fila, pero este diseño dicta una sola columna, y las filas se crearán según sea necesario para cada uno de los items de la cuadrícula implícita.

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
}
```

Después de establecer la columna simple para todas los tamaños de pantalla, ahora podemos añadir una [media query](/es/docs/Web/CSS/CSS_media_queries) y redefinir nuestro layout para los casos en los que tuviéramos suficiente pantalla real como para mostrar dos columnas.

```css
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Se puede ver la forma del layout en los valores de {{cssxref("grid-template-areas")}}. El `header` se expande en dos vías de columna, lo mismo que `nav`. En la tercera vía de fila tenemos el `sidebar` al costado del `content`. En la cuarta vía de fila he decidido poner el contenido `ad` – por tanto aparecerá debajo de sidebar,y a continuación, el `footer` , debajo del contenido. Estoy utilizando flexbox en la navegación para mostrarlo en una fila espaciada.

Ahora puedo añadir un punto de ruptura final para pasar a un diseño de tres columnas.

```css
@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer";
  }
  nav ul {
    flex-direction: column;
  }
}
```

El diseño de tres columnas tiene dos columnas laterales de `1fr` y una columna central que tiene `4fr` como tamaño de vía. Esto significa que el espacio disponible en el contenedor se divide en 6 y se asigna en proporción a nuestras tres pistas - una parte cada una a las columnas laterales y 4 partes al centro.

En este diseño estoy mostrando `nav` en la columna de la izquierda, junto al `content`. En la columna de la derecha tenemos `sidebar` y debajo están los anuncios (`ad`). El `footer` se extiende a lo largo de la parte inferior del diseño. Luego uso flexbox para mostrar la navegación como una columna.

{{ EmbedLiveSample('layout_1', '800', '500') }}

Este es un ejemplo simple pero demuestra cómo podemos usar un diseño de cuadrícula para reorganizar nuestro diseño para diferentes puntos de ruptura. En particular, estoy cambiando la ubicación de ese bloque de anuncios `ad`, según corresponda en mis diferentes configuraciones de columna. Este método de nombrar las áreas me parece muy útil en una etapa de prototipado, es fácil jugar con la ubicación de los elementos. Siempre se puede empezar a utilizar la rejilla de esta manera para la creación de prototipos, incluso si no se puede confiar plenamente en ella en producción debido a los navegadores que visitan su sitio.

## Diseño flexible de 12-columnas

Si has estado trabajando con uno de los muchos frameworks o sistemas de cuadrícula puedes estar acostumbrado a diseñar tu sitio en una cuadrícula flexible de 12 o 16 columnas. Podemos crear este tipo de sistema utilizando CSS Grid Layout. Como ejemplo simple, estoy creando una cuadrícula flexible de 12 columnas que tiene 12 pistas de columna de `1fr` -unidad, todas tienen una línea de inicio llamada `col-start`. Esto significa que tendremos doce líneas de cuadrícula llamadas `col-start`.

```css hidden
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}
```

Para demostrar cómo funciona este sistema de rejilla tengo 4 ítems hijos dentro de mi wrapper.

```html
<div class="wrapper">
  <div class="item1">Start column line 1, span 3 column tracks.</div>
  <div class="item2">
    Start column line 6, span 4 column tracks. 2 row tracks.
  </div>
  <div class="item3">Start row 2 column line 2, span 2 column tracks.</div>
  <div class="item4">
    Start at column line 3, span to the end of the grid (-1).
  </div>
</div>
```

Entonces puedo ponerlos en la rejilla usando los nombres de las líneas, y la palabra clave span.

```css
.item1 {
  grid-column: col-start / span 3;
}
.item2 {
  grid-column: col-start 6 / span 4;
  grid-row: 1 / 3;
}
.item3 {
  grid-column: col-start 2 / span 2;
  grid-row: 2;
}
.item4 {
  grid-column: col-start 3 / -1;
  grid-row: 3;
}
```

{{ EmbedLiveSample('layout_2', '800', '400') }}

Como se describe en la [guía de líneas con nombre](/es/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines), estamos utilizando la línea con nombre para colocar nuestro ítem. Como tenemos 12 líneas todas con el mismo nombre usamos el nombre, y luego el index de la línea. También puedes usar el propio index de líneas si lo prefieres y evitar el uso de líneas con nombre.

En lugar de establecer el número de la línea final, he elegido decir cuántas pistas debe expandir este elemento, utilizando la palabra clave span. Me gusta este enfoque, ya que cuando trabajamos con un sistema de diseño de múltiples columnas normalmente pensamos en bloques en términos del número de vías de la cuadrícula que atraviesan, y los ajustamos para diferentes puntos de ruptura. Para ver cómo se alinean los bloques con las vías, utiliza el [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html). Muestra claramente cómo se colocan nuestros ítems.

![Showing the items placed on the grid with grid tracks highlighted.](11-grid-inspector-12col.png)

Existen algunas diferencias clave sobre cómo funciona un diseño de cuadrícula en los sistemas de cuadrícula que se pueden haber utilizado anteriormente. Como puedes ver, no necesitamos añadir ningún marcado para crear una fila, los sistemas de cuadrícula necesitan hacer esto para evitar que los elementos salten a la fila de arriba. Con CSS Grid Layout, podemos colocar las cosas en filas, sin peligro de que suban a la fila de arriba si se dejan vacías. Debido a esta _estricta_ colocación de columnas y filas, también podemos dejar fácilmente espacio en blanco en nuestro diseño. Tampoco necesitamos clases especiales que tiren o empujen cosas, para que se introduzcan en la rejilla. Todo lo que tenemos que hacer es especificar la línea de inicio y final del ítem.

### Construcción de un diseño utilizando el sistema de 12 columnas

Para ver cómo funciona este método de diseño en la práctica, podemos crear el mismo diseño que creamos con {{cssxref("grid-template-areas")}}, esta vez utilizando el sistema de cuadrícula de 12 columnas. Comienzo con el mismo marcado que el utilizado para el ejemplo de áreas de plantillas de cuadrícula.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="wrapper">
  <header class="main-head">The header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Área principal del artículo</h1>
    <p>
      En este diseño, las áreas se muestran en el orden en que están escritas en
      las pantallas de menos de 500 píxeles de ancho. Pasamos a un diseño de dos
      columnas, y luego a uno de tres columnas mediante la redefinición de la
      rejilla y la colocación de los elementos en ella.
    </p>
  </article>
  <aside class="side">Sidebar</aside>
  <div class="ad">Advertising</div>
  <footer class="main-footer">The footer</footer>
</div>
```

Entonces puedo configurar nuestra cuadrícula, como en el ejemplo del diseño de 12 columnas de arriba.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}
```

Una vez más vamos a hacer de este un diseño responsivo, pero esta vez usando líneas con nombre. Cada punto de interrupción utilizará una cuadrícula de 12 columnas, sin embargo, el número de pistas que los ítems expandirán cambiará dependiendo del tamaño de la pantalla.

Empezamos con el móvil primero, y todo lo que queremos para las pantallas más estrechas es que los elementos permanezcan en el orden de origen, y que todos se expandan a lo largo de la cuadrícula.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

En el siguiente punto de ruptura queremos pasar a un diseño de dos columnas. Nuestro encabezado y navegación todavía se extienden por toda la cuadrícula, por lo que no necesitamos especificar ninguna posición para ellos. La barra lateral comienza en la primera línea de la columna llamada col-start, que abarca 3 líneas. Va después de la línea 3 de la fila, ya que la cabecera y la navegación se encuentran en las dos primeras pistas de la fila.

El panel de anuncios se encuentra debajo de la barra lateral, por lo que comienza en la línea 4 de la fila de la cuadrícula. Luego tenemos el contenido y el pie de página comenzando en col-start 4 y abarcando 9 pistas que los llevan al final de la cuadrícula.

```css
@media (min-width: 500px) {
  .side {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .ad {
    grid-column: col-start / span 3;
    grid-row: 4;
  }
  .content,
  .main-footer {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Finalmente vamos a la versión de tres columnas de este diseño. El encabezado continúa extendiéndose por toda la cuadrícula, pero ahora la navegación se mueve hacia abajo para convertirse en la primera barra lateral, con el contenido y la barra lateral al lado. El pie de página ahora también se extiende por todo el diseño.

```css
@media (min-width: 700px) {
  .main-nav {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
  .content {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .side {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
  .ad {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
  .main-footer {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: column;
  }
}
```

{{ EmbedLiveSample('layout_3', '800', '450') }}

Una vez más el Grid Inspector [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) es útil para ayudarnos a ver cómo ha tomado forma nuestro diseño.

![Showing the layout with grid tracks highlighted by the grid inspector.](11-grid-inspector-12col-layout.png)

Algo a tener en cuenta a la hora de crear este diseño es que no hemos necesitado posicionar explícitamente cada elemento en la cuadrícula en cada punto de ruptura. Hemos sido capaces de heredar la colocación establecida para puntos de ruptura anteriores - una ventaja de trabajar " mobile first ". También podemos aprovechar la colocación automática de la rejilla. Al mantener los elementos en un orden lógico, la colocación automática realiza una gran cantidad de trabajo por nosotros al colocar los elementos en la cuadrícula. En el último ejemplo de esta guía crearemos un diseño que se basa totalmente en la colocación automática

## Un listado de productos con auto-placement

Muchos diseños son esencialmente conjuntos de "tarjetas" - listados de productos, galerías de imágenes, etc. Una cuadrícula puede hacer que sea muy fácil crear estos listados de una manera responsiva sin necesidad de añadir [media queries](/es/docs/Web/CSS/CSS_media_queries) para ello. En este siguiente ejemplo estoy combinando CSS Grid y Flexbox Layouts para hacer un sencillo diseño de listado de productos.

El marcado de mi anuncio es una lista no ordenada de artículos. Cada elemento contiene un encabezado, un texto de altura variable y un enlace para llamar a la acción.

```html
<ul class="listing">
  <li>
    <h2>Item Uno</h2>
    <div class="body"><p>El contenido de este ítem-lista va aquí.</p></div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
  <li>
    <h2>Item Dos</h2>
    <div class="body"><p>El contenido de este ítem-lista va aquí.</p></div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
  <li class="wide">
    <h2>Item Tres</h2>
    <div class="body">
      <p>El contenido de este ítem-lista va aquí.</p>
      <p>Este tiene más texto que los demás.</p>
      <p>Un poquito más</p>
      <p>¿Podríamos hacer algo diferente con él?</p>
    </div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
  <li>
    <h2>Item Cuatro</h2>
    <div class="body"><p>El contenido de este ítem-lista va aquí.</p></div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
  <li>
    <h2>Item Cinco</h2>
    <div class="body"><p>El contenido de este ítem-lista va aquí.</p></div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 20px;
}
```

Vamos a crear una cuadrícula con un número flexible de columnas flexibles. Quiero que nunca sean más pequeñas que 200 píxeles, y que luego compartan el espacio restante disponible por igual, de modo que siempre obtengamos pistas de columna de igual ancho. Esto lo logramos con la función `minmax()` en nuestra notación repeat para el dimensionamiento de pistas.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Tan pronto como añado este CSS, los ítems empiezan a desplegarse como una cuadrícula. Si hago la ventana más pequeña o más ancha, el número de pistas de columna cambia, sin necesidad de añadir puntos de interrupción mediante media queries y redefinir la cuadrícula.

Luego puedo ordenar el interior de las cajas con un pequeño toque de flexbox. Establezco la lista de ítems como `display: flex` y la propiedad `flex-direction` como `column`. Entonces puedo usar un auto margin en `.cta` para empujar esta barra hacia abajo hasta el fondo de la caja./p>

```css
.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

Esta es realmente una de las razones clave por las que usaría flexbox en lugar de grid, si sólo estoy alineando o distribuyendo algo en una sola dimensión, ese es un caso de uso de flexbox.

{{ EmbedLiveSample('layout_4', '800', '900') }}

Todo esto se ve bastante completo ahora, sin embargo, a veces tenemos unas cartas que contienen mucho más contenido que las otras. Podría ser bueno hacer que se expandan a lo largo de dos pistas, y entonces no serán tan altas. Tengo una clase `wide` en mi ítem más grande, y añado una regla {{cssxref("grid-column-end")}} con el valor `span 2`. Ahora cuando la rejilla llegue a este ítem, le asignará dos pistas. En algunos puntos de ruptura, esto significa que obtendremos un hueco en la cuadrícula - donde no haya espacio para colocar un elemento de dos pistas.

![The layout has gaps as there is not space to layout a two track item.](11-grid-auto-flow-sparse.png)

#### Usando `grid-auto-flow: dense`

Puedo hacer que una rejilla rellene esos huecos ajustando {{cssxref("grid-auto-flow")}}`: dense` en el grid container. Sin embargo, presta atención al hacer esto, ya que saca los elementos de su orden lógico de origen. Sólo deberías hacerlo si tus ítems no tienen un orden establecido - y en ese caso tener en cuenta características de [accesibilidad](/es/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering): el tabulador seguirá el orden de la fuente y no de la visualización reordenada.

```html hidden
<ul class="listing">
  <li>
    <h2>Item Uno</h2>
    <div class="body"><p>El contenido de este ítem-lista va aquí.</p></div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
  <li>
    <h2>Item Dos</h2>
    <div class="body"><p>El contenido de este ítem-lista va aquí.</p></div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
  <li class="wide">
    <h2>Item Tres</h2>
    <div class="body">
      <p>El contenido de este ítem-lista va aquí.</p>
      <p>Este tiene más texto que los demás.</p>
      <p>Un poquito más</p>
      <p>¿Podríamos hacer algo diferente con él?</p>
    </div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
  <li>
    <h2>Item Cuatro</h2>
    <div class="body"><p>El contenido de este ítem-lista va aquí.</p></div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
  <li>
    <h2>Item Cinco</h2>
    <div class="body"><p>El contenido de este ítem-lista va aquí.</p></div>
    <div class="cta"><a href="">¡Llamada a la acción!</a></div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 20px;
}

.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.listing .wide {
  grid-column-end: span 2;
}
```

{{ EmbedLiveSample('layout_5', '800', '900') }}

Esta técnica de auto-placement con algunas reglas aplicadas a ciertos ítems es muy útil, y puede ayudarte a lidiar con el contenido que está siendo generado por un CMS, por ejemplo, donde has repetido ítems y quizás puedas añadir una clase a ciertos ítems a medida que son generados en el HTML. with some rules applied to certain items is very useful, and can help you to deal with content that is being output by a CMS for example, where you have repeated items and can perhaps add a class to certain ones as they are rendered into the HTML.

## Aprender más

La mejor manera de aprender a usar el diseño de la cuadrícula es continuar construyendo ejemplos como los que hemos tratado aquí. Escoge algo que normalmente construyes usando tu framework preferido, o usando floats, y ve si puedes construirlo usando grid. No olvides buscar ejemplos que sean imposibles de construir con los métodos actuales. Eso podría significar inspirarse en revistas u otras fuentes ajenas a la web. Grid Layout abre posibilidades que antes no teníamos, no necesitamos estar atados a los mismos viejos layouts para utilizarlo

- Para inspirarte mira [_Layout Labs_ de Jen Simmons](https://labs.jensimmons.com/), ella ha estado creando diseños basados en una variedad de fuentes.
- ara obtener patrones de diseño comunes adicionales, consulta _[Grid by Example](https://gridbyexample.com)_, donde hay muchos ejemplos> de diseño de cuadrícula y también algunos patrones de interfaz de usuario más grandes y diseños de página completa.

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

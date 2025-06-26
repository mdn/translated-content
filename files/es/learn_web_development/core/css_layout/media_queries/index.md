---
title: Fundamentos de las media queries
short-title: media queries
slug: Learn_web_development/Core/CSS_layout/Media_queries
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

Las **media queries (consulta de medios) en CSS** te dan una forma de aplicar CSS solo cuando el navegador y el entorno del dispositivo coinciden con una regla que especifiques, por ejemplo, "el área de visualización es más ancha que 480 píxeles". Las media queries son una parte clave del diseño web adaptativo, ya que te permiten crear diferentes diseños según el tamaño del área de visualización, pero también se pueden utilizar para detectar otras cosas sobre el entorno en el que se está ejecutando tu sitio, por ejemplo, si el usuario está utilizando una pantalla táctil en lugar de un ratón.

En esta lección, primero aprenderás sobre la sintaxis utilizada en las media queries, y luego pasarás a utilizarlas en ejemplos que muestran cómo un diseño básico podría hacerse adaptativo.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Core/Structuring_content"
          >Estructuración del contenido con HTML</a
        >,
        <a href="/es/docs/Learn_web_development/Core/Styling_basics">Fundamentos del estilo CSS</a>,
        <a href="/es/docs/Learn_web_development/Core/Text_styling/Fundamentals">Estilo fundamental de texto y fuentes</a>,
        familiaridad con <a href="/es/docs/Learn_web_development/Core/CSS_layout/Introduction">conceptos fundamentales del diseño CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>La sintaxis de las media queries.</li>
          <li>Los tipos comunes de media queries.</li>
          <li>Usar media queries de <code>width</code> y <code>height</code> para crear diseños adaptativos.</li>
          <li>Elegir breakpoints (puntos de interrupción).</li>
          <li>Usar media queries para implementar un diseño Mobile First (Centrado en móvil).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Conceptos básicos de las media queries

La sintaxis de media query más simple se ve así:

```css
@media media-type and (media-feature-rule) {
  /* Las reglas CSS van aquí */
}
```

Consta de:

- Un tipo de medio, que le dice al navegador para qué tipo de medio es este código (por ejemplo, impresión o pantalla).
- Una expresión de medio, que es una regla, o prueba que debe aprobarse para que se aplique el CSS contenido.
- Un conjunto de reglas CSS que se aplicarán si la prueba pasa y el tipo de medio es correcto.

### Tipos de medios

Los tipos posibles de medios que puedes especificar son:

- `all`
- `print`
- `screen`

La siguiente media query solo establecerá el cuerpo en 12pt si la página se imprime. No se aplicará cuando la página se cargue en un navegador.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> El tipo de medio aquí es diferente del llamado {{glossary("MIME type")}}.
> Se definieron una serie de otros tipos de medios en la especificación de media queries de Nivel 3; estos han sido desaprobados y deben evitarse.
> Los tipos de medios son opcionales; si no indicas un tipo de medio en tu media query, entonces la media query predeterminará que sea para todos los tipos de medios.

### Reglas de características de medios

Después de especificar el tipo, puedes luego apuntar a una característica de medios con una regla. Los siguientes ejemplos muestran cómo usar diferentes media queries. Para cambiar el `width` de tu pantalla, cambia el tamaño de tu navegador o rota tu dispositivo de mano. Alternativamente, puedes utilizar las herramientas de desarrollo del navegador funciones de dimensionamiento responsivo para simular diferentes anchos de dispositivo.

#### Ancho y alto

La característica que tendemos a detectar con más frecuencia para crear diseños adaptativos (y que tiene un amplio soporte del navegador) es el ancho del área de visualización, y podemos aplicar CSS si el área de visualización está por encima o por debajo de un cierto ancho — o un ancho exacto — utilizando las características de medios `min-width`, `max-width` y `width`.

Estas características se utilizan para crear diseños que responden a diferentes tamaños de pantalla. Por ejemplo, para establecer el color del texto del cuerpo en rojo si el área de visualización es exactamente de 600 píxeles, usarías la siguiente media query.

```css live-sample___width
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

```html live-sample___width
<p>
  Una noche de noviembre del año 1782, según cuenta la historia, dos hermanos se
  sentaron junto al fuego de invierno en la pequeña ciudad francesa de Annonay,
  observando las cenicientas volutas de humo de la chimenea rizarse por la
  amplia chimenea. Sus nombres eran Stephen y Joseph Montgolfier, eran
  fabricantes de papel de oficio y eran conocidos por poseer mentes reflexivas y
  un profundo interés en todo el conocimiento científico y los nuevos
  descubrimientos.
</p>
```

{{EmbedLiveSample("width")}}

Las características de medios `width` (y `height`) se pueden utilizar como rangos, y por lo tanto pueden tener el prefijo `min-` o `max-` para indicar que el valor dado es un mínimo o un máximo. Por ejemplo, para que el color sea azul si el área de visualización es de 600 píxeles o menos, usa `max-width`:

```css live-sample___max-width
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

```html hidden live-sample___max-width
<p>
  Una noche de noviembre del año 1782, según cuenta la historia, dos hermanos se
  sentaron junto al fuego de invierno en la pequeña ciudad francesa de Annonay,
  observando las cenicientas volutas de humo de la chimenea rizarse por la
  amplia chimenea. Sus nombres eran Stephen y Joseph Montgolfier, eran
  fabricantes de papel de oficio y eran conocidos por poseer mentes reflexivas y
  un profundo interés en todo el conocimiento científico y los nuevos
  descubrimientos.
</p>
```

{{EmbedLiveSample("max-width")}}

En la práctica, el uso de valores mínimos o máximos es mucho más útil para el diseño resposivo, por lo que rara vez verás `width` o `height` utilizados solos.

Hay muchas otras características de medios que puedes probar, aunque algunas de las características más nuevas introducidas en los Niveles 4 y 5 de la especificación de media queries tienen un soporte limitado del navegador. Cada característica está documentada en MDN junto con información sobre el soporte del navegador, y puedes encontrar una lista completa en [Usando media queries: Sintaxis](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Orientación

Una característica de medios bien soportada es `orientation`, que nos permite probar el modo vertical u horizontal. Para cambiar el color del texto del cuerpo si el dispositivo está en orientación horizontal, utiliza la siguiente media query.

```css live-sample___orientation
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

```html hidden live-sample___orientation
<p>
  Una noche de noviembre del año 1782, según cuenta la historia, dos hermanos se
  sentaron junto al fuego de invierno en la pequeña ciudad francesa de Annonay,
  observando las cenicientas volutas de humo de la chimenea rizarse por la
  amplia chimenea. Sus nombres eran Stephen y Joseph Montgolfier, eran
  fabricantes de papel de oficio y eran conocidos por poseer mentes reflexivas y
  un profundo interés en todo el conocimiento científico y los nuevos
  descubrimientos.
</p>
```

{{EmbedLiveSample("orientation")}}

Una vista de escritorio estándar tiene una orientación horizontal, y un diseño que funciona bien en esta orientación puede no funcionar tan bien cuando se ve en un teléfono o tableta en modo vertical. Probar la orientación puede ayudarte a crear un diseño que esté optimizado para dispositivos en modo vertical.

#### Uso de dispositivos señaladores

Como parte de la especificación de Nivel 4, se introdujo la característica de medios `hover`. Esta característica significa que puedes probar si el usuario tiene la capacidad de pasar el cursor sobre un elemento, lo que esencialmente significa que están utilizando algún tipo de dispositivo señalador; la navegación con pantalla táctil y teclado no se desplaza.

```css live-sample___hover-example
@media screen and (hover: hover) {
  body:hover {
    color: white;
    background: black;
  }
}
```

```html hidden live-sample___hover-example
<p>
  Una noche de noviembre del año 1782, según cuenta la historia, dos hermanos se
  sentaron junto al fuego de invierno en la pequeña ciudad francesa de Annonay,
  observando las cenicientas volutas de humo de la chimenea rizarse por la
  amplia chimenea. Sus nombres eran Stephen y Joseph Montgolfier, eran
  fabricantes de papel de oficio y eran conocidos por poseer mentes reflexivas y
  un profundo interés en todo el conocimiento científico y los nuevos
  descubrimientos.
</p>
```

{{EmbedLiveSample("hover-example")}}

Si sabemos que el usuario no puede desplazarse, podríamos mostrar algunas características interactivas de forma predeterminada. Para los usuarios que pueden desplazarse, podríamos optar por hacerlas disponibles cuando se desplaza el cursor sobre un enlace.

También en el Nivel 4 está la característica de medios `pointer`. Esto toma tres valores posibles, `none`, `fine` y `coarse`. Un puntero `fine` es algo así como un ratón o trackpad. Permite al usuario apuntar con precisión a un área pequeña. Un puntero `coarse` es tu dedo en una pantalla táctil. El valor `none` significa que el usuario no tiene ningún dispositivo señalador; tal vez están navegando solo con el teclado o con comandos de voz.

El uso de `pointer` puede ayudarte a diseñar mejores interfaces que respondan al tipo de interacción que un usuario está teniendo con una pantalla. Por ejemplo, podrías crear áreas de impacto más grandes si sabes que el usuario está interactuando con el dispositivo como una pantalla táctil.

### Usando la sintaxis de rango

Un caso común es verificar si el ancho del área de visualización está entre dos valores:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Si quieres mejorar la legibilidad de esto, puedes usar la sintaxis "range":

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

Entonces, en este caso, los estilos se aplican cuando el ancho del área de visualización está entre `30em` y `50em`.

## Media queries más complejas

Con todas las diferentes media queries posibles, es posible que desees combinarlas o crear listas de consultas, cualquiera de las cuales podría coincidir.

### Lógica "and" en las media queries

Para combinar características de medios, puedes usar `and` de la misma manera que hemos usado `and` anteriormente para combinar un tipo de medio y una característica. Por ejemplo, podríamos querer probar un `min-width` y `orientation`. El texto del cuerpo solo será azul si el área de visualización tiene al menos 600 píxeles de ancho y el dispositivo está en modo horizontal.

```css live-sample___and
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

```html hidden live-sample___and
<p>
  Una noche de noviembre del año 1782, según cuenta la historia, dos hermanos se
  sentaron junto al fuego de invierno en la pequeña ciudad francesa de Annonay,
  observando las cenicientas volutas de humo de la chimenea rizarse por la
  amplia chimenea. Sus nombres eran Stephen y Joseph Montgolfier, eran
  fabricantes de papel de oficio y eran conocidos por poseer mentes reflexivas y
  un profundo interés en todo el conocimiento científico y los nuevos
  descubrimientos.
</p>
```

{{EmbedLiveSample("and")}}

### Lógica "or" en las media queries

Si tienes un conjunto de consultas, cualquiera de las cuales podría coincidir, entonces puedes separar estas consultas con comas. En el siguiente ejemplo, el texto será azul si el área de visualización tiene al menos 600 píxeles de ancho O el dispositivo está en orientación horizontal. Si alguna de estas cosas es cierta, la consulta coincide.

```css live-sample___or
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

```html hidden live-sample___or
<p>
  Una noche de noviembre del año 1782, según cuenta la historia, dos hermanos se
  sentaron junto al fuego de invierno en la pequeña ciudad francesa de Annonay,
  observando las cenicientas volutas de humo de la chimenea rizarse por la
  amplia chimenea. Sus nombres eran Stephen y Joseph Montgolfier, eran
  fabricantes de papel de oficio y eran conocidos por poseer mentes reflexivas y
  un profundo interés en todo el conocimiento científico y los nuevos
  descubrimientos.
</p>
```

{{EmbedLiveSample("or")}}

### Lógica "not" en las media queries

Puedes negar una media query completa utilizando el operador `not`. Esto invierte el significado de toda la media query. Por lo tanto, en este siguiente ejemplo, el texto solo será azul si la orientación es vertical.

```css live-sample___not
@media not (orientation: landscape) {
  body {
    color: blue;
  }
}
```

```html hidden live-sample___not
<p>
  Una noche de noviembre del año 1782, según cuenta la historia, dos hermanos se
  sentaron junto al fuego de invierno en la pequeña ciudad francesa de Annonay,
  observando las cenicientas volutas de humo de la chimenea rizarse por la
  amplia chimenea. Sus nombres eran Stephen y Joseph Montgolfier, eran
  fabricantes de papel de oficio y eran conocidos por poseer mentes reflexivas y
  un profundo interés en todo el conocimiento científico y los nuevos
  descubrimientos.
</p>
```

{{EmbedLiveSample("not")}}

También puedes usar `not` para negar expresiones específicas.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Esto aplicará los estilos si el ancho del área de visualización está entre 600 y 1000 píxeles. Esto es equivalente a `(600px <= width <= 1000px)`.

## Cómo elegir breakpoints

En los primeros días del diseño resposivo, muchos diseñadores intentaban apuntar a tamaños de pantalla muy específicos. Se publicaron listas de los tamaños de las pantallas de los teléfonos y tabletas populares para que se pudieran crear diseños que coincidieran perfectamente con esas áreas de visualización.

Ahora hay demasiados dispositivos, con una gran variedad de tamaños, para que eso sea factible. Esto significa que en lugar de apuntar a tamaños específicos para todos los diseños, un mejor enfoque es cambiar el diseño en el tamaño donde el contenido comienza a romperse de alguna manera. Tal vez las longitudes de las líneas se vuelven demasiado largas, o una barra lateral en caja se aplasta y es difícil de leer. Ese es el punto en el que deseas usar una media query para cambiar el diseño a uno mejor para el espacio que tienes disponible. Este enfoque significa que no importa cuáles sean las dimensiones exactas del dispositivo que se esté utilizando, cada rango está atendido. Los puntos en los que se introduce una media query se conocen como **breakpoints**.

El [Modo de diseño resposivo](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) en Firefox DevTools es muy útil para determinar dónde deben ir estos breakpoints. Puedes hacer fácilmente que el área de visualización sea más pequeña y más grande para ver dónde se mejoraría el contenido agregando una media query y ajustando el diseño.

![Una captura de pantalla de un diseño en una vista móvil en Firefox DevTools.](rwd-mode.png)

## Aprendizaje activo: diseño resposivo Mobile First

En términos generales, puedes adoptar dos enfoques para un diseño resposivo. Puedes comenzar con tu escritorio o la vista más amplia y luego agregar _breakpoints_ para mover las cosas a medida que el área de visualización se hace más pequeña, o puedes comenzar con la vista más pequeña y agregar diseño a medida que el área de visualización se hace más grande. Este segundo enfoque se describe como diseño resposivo **Mobile First** (centrado en móvil) y, con bastante frecuencia, es el mejor enfoque a seguir.

La vista para los dispositivos más pequeños suele ser una simple columna única de contenido, tal como aparece en el flujo normal. Esto significa que probablemente no necesitas hacer mucho diseño para dispositivos pequeños — ¡ordena bien tu fuente y tendrás un diseño legible de forma predeterminada!

El siguiente tutorial te guía a través de este enfoque con un diseño muy simple. En un sitio de producción es probable que tengas más cosas que ajustar dentro de tus media queries, sin embargo, el enfoque sería exactamente el mismo.

### Tutorial: un diseño Mobile First

Nuestro punto de partida es un documento HTML con algo de CSS aplicado para agregar colores de fondo a las diversas partes del diseño. Puedes copiar el código de los bloques siguientes en un editor de texto, guardarlo como un archivo HTML en tu computadora y abrirlo en tu navegador o hacer clic en "Reproducir" para representar y editar el código en el patio de juegos MDN:

```html live-sample___walkthrough
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Media Queries: un diseño simple Mobile First, paso 1</title>
  <style>
    /* Agrega estilos aquí */
  </style>
</head>
<div class="wrapper">
  <header>
    <nav>
      <ul>
        <li><a href="">Acerca de</a></li>
        <li><a href="">Contacto</a></li>
        <li><a href="">Conoce al equipo</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <div class="content">
        <h1>¡Verduras!</h1>
        <p>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </p>

        <p>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
          courgette tatsoi pea sprouts fava bean collard greens dandelion okra
          wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </p>

        <p>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress. Corn amaranth
          salsify bunya nuts nori azuki bean chickweed potato bell pepper
          artichoke.
        </p>

        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant
          winter purslane fennel azuki bean earthnut pea sierra leone bologi
          leek soko chicory celtuce parsley jícama salsify.
        </p>
      </div>
      <aside class="related">
        <p>
          Todas estas verduras son traídas a usted por el
          <a href="https://veggieipsum.com/">generador de Veggie Ipsum</a>.
        </p>
      </aside>
    </article>
    <aside class="sidebar">
      <h2>Enlaces externos basados en vegetales</h2>
      <ul>
        <li>
          <a
            href="https://www.thekitchn.com/how-to-cook-broccoli-5-ways-167323">
            Cómo cocinar brócoli
          </a>
        </li>
        <li>
          <a href="https://www.bbcgoodfood.com/glossary/swiss-chard">
            Acelga Suiza
          </a>
        </li>
        <li>
          <a
            href="https://www.bbcgoodfood.com/recipes/collection/christmas-parsnip">
            Recetas navideñas de chirivía
          </a>
        </li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024</p>
  </footer>
</div>
```

El origen del documento está ordenado de una manera que hace que el contenido sea legible. Este es un primer paso importante y uno que asegura que si el contenido fuera leído por un lector de pantalla, sería comprensible.
Aquí hay algunos buenos estilos iniciales con los que podemos comenzar:

```css live-sample___walkthrough
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 2em auto;
  font:
    1em/1.3 Arial,
    Helvetica,
    sans-serif;
}

a:link,
a:visited {
  color: #333;
}

nav ul,
aside ul {
  list-style: none;
  padding: 0;
}

nav a:link,
nav a:visited {
  background-color: rgb(207 232 220 / 20%);
  border: 2px solid rgb(79 185 227);
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  background-color: rgb(207 232 220 / 70%);
}

.related {
  background-color: rgb(79 185 227 / 30%);
  border: 1px solid rgb(79 185 227);
  padding: 10px;
}

.sidebar {
  background-color: rgb(207 232 220 / 50%);
  padding: 10px;
}

article {
  margin-bottom: 1em;
}
```

Si vemos el diseño en el Modo de diseño resposivo en DevTools, podemos ver que funciona bastante bien como una vista móvil sencilla del sitio.

{{EmbedLiveSample("walkthrough", "", "600px")}}

A partir de este punto, comienza a arrastrar la vista del Modo de diseño resposivo más ancho hasta que puedas ver que las longitudes de las líneas se están volviendo bastante largas, y tenemos espacio para que la navegación se muestre en una línea horizontal. Aquí es donde agregaremos nuestra primera media query. Usaremos ems, ya que esto significará que si el usuario ha aumentado el tamaño de su texto, el punto de interrupción ocurrirá en una longitud de línea similar pero en un área de visualización más ancha, que alguien con un tamaño de texto más pequeño.

Agrega lo siguiente a tu CSS:

```css
@media screen and (min-width: 40em) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    flex: 1;
  }
}
```

Este CSS nos da un diseño de dos columnas dentro del artículo, del contenido del artículo e información relacionada en el elemento aside. También hemos utilizado flexbox para poner la navegación en una fila.

Sigamos expandiendo el ancho hasta que sintamos que hay suficiente espacio para que la barra lateral también forme una nueva columna. Dentro de una media query haremos que el elemento principal sea una cuadrícula de dos columnas. Luego, debemos eliminar el {{cssxref("margin-bottom")}} en el artículo para que las dos barras laterales se alineen entre sí, y agregaremos un {{cssxref("border")}} a la parte superior del pie de página. Por lo general, estos pequeños ajustes son el tipo de cosas que harás para que el diseño se vea bien en cada punto de interrupción.

Agrega el siguiente CSS a tus estilos:

```css
@media screen and (min-width: 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #ccc;
    margin-top: 2em;
  }
}
```

Si observas el resultado en diferentes anchos, puedes ver cómo el diseño responde y funciona como una sola columna, dos columnas o tres columnas, dependiendo del ancho disponible. Este es un ejemplo básico de un diseño resposivo Mobile First.

## La etiqueta meta de la ventana gráfica

Si observas el código fuente HTML en el ejemplo anterior, verás el siguiente elemento incluido en el encabezado del documento:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Esta es la [etiqueta meta de la ventana gráfica](/es/docs/Web/HTML/Guides/Viewport_meta_element) — existe como una forma de controlar cómo los navegadores móviles representan el contenido. Esto es necesario porque, de forma predeterminada, la mayoría de los navegadores móviles mienten sobre el ancho de su área de visualización. Los sitios no adaptativos suelen verse muy mal cuando se representan en un área de visualización estrecha, por lo que los navegadores móviles generalmente representan el sitio con un ancho de área de visualización más ancho que el ancho real del dispositivo de forma predeterminada (generalmente 980 píxeles) y luego reducen el resultado representado para que quepa en la pantalla.

Todo esto está muy bien, pero significa que los sitios adaptativos no van a funcionar como se espera. Si el ancho del área de visualización se informa como 980 píxeles, entonces los diseños móviles (por ejemplo, creados utilizando una media query de `@media screen and (max-width: 600px) { }`) no se representarán como se espera.

Para solucionar esto, incluir una etiqueta meta de la ventana gráfica como la anterior en tu página le dice al navegador "no representes el contenido con un área de visualización de 980 píxeles — represéntalo utilizando el ancho real del dispositivo en su lugar, y establece un nivel de escala inicial predeterminado para una mejor consistencia". Las media queries se activarán entonces como se espera.

Hay una serie de otras opciones que puedes poner dentro del atributo `content` de la etiqueta meta de la ventana gráfica — consulta [Usando la etiqueta meta de la ventana gráfica para controlar el diseño en navegadores móviles](/es/docs/Web/HTML/Guides/Viewport_meta_element) para obtener más detalles.

## ¿Realmente necesitas una media query?

Flexbox, Grid y el diseño de varias columnas te dan formas de crear componentes flexibles e incluso adaptables sin la necesidad de una media query. Siempre vale la pena considerar si estos métodos de diseño pueden lograr lo que deseas sin agregar media queries. Por ejemplo, es posible que desees un conjunto de tarjetas que tengan al menos 200 píxeles de ancho, con tantos de estos 200 píxeles como quepan en el artículo principal. Esto se puede lograr con el diseño de cuadrícula, sin necesidad de media queries.

Esto se podría lograr utilizando lo siguiente:

```html live-sample___grid
<ul class="grid">
  <li>
    <h2>Tarjeta 1</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Tarjeta 2</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Tarjeta 3</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Tarjeta 4</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Tarjeta 5</h2>
    <p>…</p>
  </li>
</ul>
```

```css live-sample___grid
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
  border: 1px solid #666;
  padding: 10px;
}
```

{{EmbedLiveSample("grid", "", "350px")}}

Haz que la pantalla sea más ancha y más estrecha para ver cambiar el número de pistas de columna. Lo bueno de este método es que grid no está mirando el ancho del área de visualización, sino el ancho que tiene disponible para este componente. ¡Podría parecer extraño terminar una sección sobre media queries con una sugerencia de que es posible que no necesites una! Sin embargo, en la práctica, encontrarás que el buen uso de los métodos de diseño modernos, mejorados con media queries, dará los mejores resultados.

## Pon a prueba tus habilidades

Has llegado al final de este artículo, pero ¿puedes recordar la información más importante? Puedes encontrar una prueba para verificar que has retenido esta información antes de continuar — consulta [Pon a prueba tus habilidades: Diseño web adaptativo y media queries](/es/docs/Learn_web_development/Core/CSS_layout/rwd_skills).

## Resumen

En esta lección has aprendido sobre las media queries, y también has descubierto cómo usarlas en la práctica para crear un diseño resposivo Mobile First.

Podrías utilizar el punto de partida que hemos creado para probar más media queries. Por ejemplo, tal vez podrías cambiar el tamaño de la navegación si detectas que el visitante tiene un puntero grueso, utilizando la característica de medios `pointer`.

También podrías experimentar con la adición de diferentes componentes y ver si la adición de una media query, o el uso de un método de diseño como flexbox o grid es la forma más apropiada de hacer que los componentes sean adaptativos. Muy a menudo no hay una forma correcta o incorrecta — debes experimentar y ver qué funciona mejor para tu diseño y contenido.

Bien, casi hemos llegado al final de este módulo. Terminemos dándote un desafío para poner a prueba tu comprensión.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout/Fundamental_layout_comprehension", "Learn_web_development/Core/CSS_layout")}}

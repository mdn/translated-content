---
title: Floats
slug: Learn/CSS/CSS_layout/Floats
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

Originalmente pensada para flotar imágenes dentro de bloques de texto, la propiedad {{cssxref("float")}} se convirtió en una de las herramientas más usadas para crear diseños multicolumna en las páginas web. Con la llegada de Flexbox y Grid ha vuelto ahora a su propósito original, como se explica en este artículo.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        HTML básico (ver
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >Introducción al HTML</a
        >), y una idea de Cómo funciona CSS (ver
        <a href="/es/docs/Learn/CSS/First_steps">Introducción a CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a crear elementos flotantes en páginas web, y a usar la
        propiedad <em>clear</em> y otros métodos para limpiar los elementos
        flotantes.
      </td>
    </tr>
  </tbody>
</table>

## La historia de los elementos flotantes

La propiedad {{cssxref("float")}} fue introducida para permitir a los desarrolladores implementar diseños sencillos que incluyeran una imagen flotando dentro de una columna de texto, con el texto envolviendo la parte izquierda o derecha de la imagen. El tipo de cosa que encuentras habitualmente en el diseño de un periódico.

Pero los desarrolladores web pronto se dieron cuenta de que podían flotar cualquier cosa, no solo imágenes, por lo que su uso se extendió, por ejemplo creando efectos de diseño divertidos como estas [letras capitulares](https://css-tricks.com/snippets/css/drop-caps/).

Los elementos flotantes han sido usados comúnmente para crear diseños web completos con múltiples columnas situadas unas al lado de las otras (el comportamiento por defecto sería que las columnas se situaran unas debajo de las otras, en el mismo orden en el que aparecen en el código fuente). Ahora hay disponibles técnicas más modernas y mejores, que exploraremos más adelante en este módulo, por lo que el uso de {{cssxref("float")}} de este modo debería contemplarse como una [técnica anticuada](/es/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods).

En este artículo nos centraremos en el uso apropiado de la propiedad {{cssxref("float")}}.

## Un ejemplo de float simple

Exploremos cómo usar los _float_. Empezaremos con un ejemplo realmente simple que incluye un bloque de texto flotando alrededor de un elemento. Puedes acompañarnos creando un fichero `index.html` en tu ordenador, rellenándolo con [una plantilla HTML simple](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html), e insertando el código siguiente en los lugares adecuados. Al final de la sección podrás ver un ejemplo en vivo de cómo debería ser el código final.

Primero, empecemos con algo de HTML simple — añade lo siguiente al cuerpo de tu HTML, eliminando cualquier otra cosa que hubiera antes:

```html
<h1>Ejemplo simple de caja flotante</h1>

<div class="box">Caja flotante</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
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
```

Ahora aplica el siguiente CSS a tu HTML (usando un elemento {{htmlelement("style")}} o un {{htmlelement("link")}} para separar el fichero `.css` — tú eliges):

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

Si guardas y recargas la página, verás algo parecido a lo que esperarías: la caja se encuentra por encima del texto, en un flujo normal. Para flotar el texto alrededor, añade las propiedades {{cssxref("float")}} y {{cssxref("margin-right")}} a la regla `.box`:

```css
.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

Ahora, si guardas y recargas, podrás ver algo parecido a lo siguiente:

## Ejemplo

```html hidden
<h1>Ejemplo simple de caja flotante</h1>

<div class="box">Caja flotante</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_1', '100%', 500) }}

Analicemos ahora cómo funciona el _float_ — el elemento con el _float_ aplicado (el elemento {{htmlelement("div")}} en este caso) es sacado del flujo normal del documento y está pegado al lado izquierdo de su elemento contenedor padre ({{htmlelement("body")}}, en este caso). Cualquier contenido que esté por debajo del elemento flotado en el flujo normal, ahora lo envolverá, rellenando el espacio a la derecha hasta la parte superior del elemento flotante. Allí se detendrá.

Flotar el contenido a la derecha tiene exactamente el mismo efecto, pero a la inversa — el elemento flotado se pegará a la derecha, y el contenido lo envolverá por la izquierda. Prueba cambiando el valor de la propiedad _float_ a `right` y reemplaza {{cssxref("margin-right")}} con {{cssxref("margin-left")}} en el último conjunto de reglas para ver el resultado.

Si bien podemos agregar un margen al flotante para alejar el texto, no podemos agregar un margen al texto para alejarlo del flotante. Esto se debe a que un elemento flotante se saca del flujo normal y las cajas de los siguientes elementos siguen detrás del flotador. Puedes comprobarlo haciendo algunos cambios en tu ejemplo.

Añade una clase `special` al primer párrafo de texto, el que sucede inmediatamente a la caja flotante, y luego añade en tu CSS las siguientes reglas. Esto le dará al párrafo siguiente un color de fondo.

```css
.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

Para que el efecto sea más fácil de ver, cambia el `margin-right` de tu elemento flotante a `margin`, para obtener espacio alrededor del elemento flotante. Verás que el fondo del párrafo pasa justo por debajo de la caja flotante, como en el ejemplo inferior.

## Ejemplo

```html hidden
<h1>Ejemplo simple de caja flotante</h1>

<div class="box">Caja flotante</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

{{ EmbedLiveSample('Float_2', '100%', 500) }}

Los cuadros de línea de nuestro siguiente elemento se han acortado para que el texto discurra alrededor del flotador, pero debido a que el flotador se eliminó del flujo normal, el cuadro alrededor del párrafo aún permanece en ancho completo.

## Limpiando floats

Hemos visto que el flotador se elimina del flujo normal y que otros elementos se mostrarán a su lado, por lo tanto, si queremos evitar que un elemento siguiente se mueva hacia arriba, debemos limpiar el _float_. Esto se logra con la propiedad {{cssxref ("clear")}}.

En el HTML del ejemplo anterior, añade una clase `cleared` al segundo párrafo debajo del elemento flotante. Luego añade lo siguiente a tu CSS:

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>Ejemplo simple de caja flotante</h1>

<div class="box">Caja flotante</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.cleared {
  clear: left;
}
```

{{ EmbedLiveSample('Float_3', '100%', 600) }}

Deberías ver que el siguiente párrafo limpia el elemento flotante y ya no aparece junto a él. La propiedad `clear` acepta los siguientes valores:

- `left`: limpia los elementos flotados a la izquierda.
- `right`: limpia los elementos flotados a la derecha.
- `both`: limpia cualquier elemento flotado, a la izquierda o a la derecha.

## Limpiar las cajas envueltas alrededor de un float

Ahora ya sabes cómo limpiar un elemento que sigue a un elemento flotante, pero observa lo que sucede si tienes un flotante alto y un párrafo corto, con una caja envolviendo a ambos elementos. Modifica tu documento para que el primer párrafo y el cuadro flotante estén envueltos por un {{htmlelement("div")}} con una clase `wrapper`.

```html
<div class="wrapper">
  <div class="box">Caja flotante</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
```

En tu CSS, añade la siguiente regla para la clase `.wrapper` y después recarga la página:

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

Además, elimina la clase `.cleared` anterior:

```css
.cleared {
  clear: left;
}
```

Verás que, como en el ejemplo en el que hemos puesto un color de fondo al párrafo, el color de fondo pasa por detrás del elemento flotante.

## Ejemplo

```html hidden
<h1>Ejemplo simple de caja flotante</h1>
<div class="wrapper">
  <div class="box">Caja flotante</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_4', '100%', 600) }}

Una vez más, esto se debe a que el flotador se ha sacado del flujo normal. Limpiar el siguiente elemento no ayuda con este problema de limpieza de caja, donde queremos que la parte inferior de la caja envuelva el elemento flotante y envuelva el contenido incluso si el contenido es más corto. Hay tres formas posibles de lidiar con esto, dos que funcionan en todos los navegadores, pero tienen algo de truco, y una tercera, nueva forma de lidiar con esta situación correctamente.

### El hack clearfix

La forma en que esta situación se ha tratado tradicionalmente es utilizando algo conocido como "truco clearfix". Esto implica insertar algún contenido generado después del cuadro que contiene el contenido flotante y envolvente, y configurarlo para limpiar ambos.

Añade el siguiente CSS al ejemplo:

```css
.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

Ahora recarga la página y la caja debería limpiarse. Esto es básicamente lo mismo que si hubieras añadido un elemento HTML como un `<div>` debajo de los elementos y le hubieras añadido la propiedad `clear: both`.

```html hidden
<h1>Ejemplo simple de caja flotante</h1>
<div class="wrapper">
  <div class="box">Caja flotante</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

{{ EmbedLiveSample('Float_5', '100%', 600) }}

### Usando overflow

Un método alternativo es establecer la propiedad {{cssxref("overflow")}} del elemento envolvente con un valor distinto de `visible`.

Elimina el CSS clearfix que añadiste en la anterior sección y, en su lugar, añade `overflow: auto` a las reglas de la caja envolvente. De nuevo, la caja debería limpiarse.

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}
```

```html hidden
<h1>Ejemplo simple de caja flotante</h1>
<div class="wrapper">
  <div class="box">Caja flotante</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_6', '100%', 600) }}

Este ejemplo funciona creando lo que se conoce como un _**block formatting context**_ (BFC) o contexto de formato de bloque. Es como un pequeño diseño dentro de nuestra página dentro del cual todo está contenido, por lo tanto, nuestro elemento flotante está contenido dentro del BFC y el fondo se encuentra detrás de ambos elementos. Esto generalmente funcionará, sin embargo, en ciertos casos, es posible que encuentre barras de desplazamiento no deseadas o sombras recortadas debido a las consecuencias no deseadas del uso del desbordamiento..

### display: flow-root

La manera moderna de resolver este problema es usar el valor `flow-root` de la propiedad `display`. Esto existe solo para crear un BFC sin usar hacks; no habrá consecuencias no deseadas cuando lo use. Elimina `overflow: auto` de la regla `.wrapper` y añade `display: flow-root`. Asumiendo que tu [navegador sea compatible](/es/docs/Web/CSS/display#browser_compatibility), la caja se limpiará.

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}
```

```html hidden
<h1>Ejemplo simple de caja flotante</h1>
<div class="wrapper">
  <div class="box">Caja flotante</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_7', '100%', 600) }}

## Resumen

Ahora ya sabes todo lo que tienes que saber sobre los flotadores en el desarrollo web moderno. Consulta el artículo sobre [métodos de diseño anticuados](/es/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) para obtener información de cómo se solían usar, lo que puede serte útil si tienes que trabajar en proyectos antiguos.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

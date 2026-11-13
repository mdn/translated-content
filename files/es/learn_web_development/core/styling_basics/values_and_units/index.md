---
title: Valores y unidades de CSS
short-title: Valores y unidades
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

Las reglas CSS contienen [declaraciones](/es/docs/Web/CSS/Guides/Syntax/Introduction#declaraciones_de_css), que a su vez se componen de propiedades y valores.
Cada propiedad que se usa en CSS tiene un **tipo de valor** que describe qué tipo de valores puede tener.
En esta lección veremos algunos de los tipos de valor más usados, qué son y cómo funcionan.

> [!NOTE]
> La [página de cada propiedad CSS](/es/docs/Web/CSS/Reference#índice_de_palabras_clave) tiene una sección de sintaxis que enumera los tipos de valor que puedes usar con esa propiedad.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Conceptos básicos de HTML (estudia
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis básica de HTML</a
        >), <a href="/es/docs/Learn_web_development/Core/Styling_basics/Getting_started">sintaxis básica de CSS</a>, <a href="/es/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">selectores CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Entender que los valores de las propiedades pueden ser de muchos tipos distintos, y qué representan esos tipos.</li>
          <li>Familiaridad con el uso de los tipos fundamentales: números, longitudes, porcentajes, colores, imágenes, posiciones, cadenas e identificadores, y funciones.</li>
          <li>Entender qué son las unidades absolutas y relativas, y la diferencia entre ellas.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es un valor CSS?

Los valores CSS definen qué tipos de valor son válidos para cada propiedad CSS. Por ejemplo, puedes especificar colores como valores de {{cssxref("color")}} o {{cssxref("border-color")}}, pero no longitudes ni porcentajes.

En las especificaciones de CSS, y en las páginas de las propiedades aquí en MDN, podrás reconocer los tipos de valor porque van entre corchetes angulares (`<`, `>`), como {{cssxref("&lt;color&gt;")}} o {{cssxref("length")}}. Cuando veas que el tipo de valor `<color>` es válido para una propiedad concreta, significa que puedes usar como valor de esa propiedad cualquier color válido, según se indica en la página de referencia de {{cssxref("&lt;color&gt;")}}.

A veces los tipos de valor y las propiedades pueden tener el mismo nombre o nombres parecidos; por ejemplo, hay una propiedad {{cssxref("color")}} y un tipo de dato {{cssxref("&lt;color&gt;")}}. Puedes usar los corchetes angulares para saber cuál de los dos estás estudiando en cada caso. Los elementos HTML también usan corchetes angulares, pero por el contexto debería quedar claro cuál estás mirando. Si no estás seguro, prueba a buscarlo en MDN.

> [!NOTE]
> Verás que a los tipos de valor de CSS también se les llama _tipos de datos_. Los términos son básicamente intercambiables: cuando veas que algo en CSS se llama tipo de dato, en realidad es una forma rebuscada de decir tipo de valor. El término _valor_ se refiere a cualquier expresión concreta admitida por un tipo de valor que elijas usar.

En el siguiente ejemplo, hemos establecido el color del texto de nuestro encabezado con una palabra clave de color, y el fondo con otro tipo de valor de color, la función `rgb()`:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

Un tipo de valor en CSS define una colección de valores permitidos. Esto significa que, si ves que `<color>` es válido, no tienes que preguntarte cuáles de los distintos tipos de valor de color se pueden usar (palabras clave, valores hexadecimales, funciones `rgb()`, etc.). Puedes usar _cualquier_ valor `<color>` disponible, siempre que tu navegador lo admita. La página de MDN de cada valor te dará información sobre la compatibilidad con los navegadores. Por ejemplo, si miras la página de {{cssxref("&lt;color&gt;")}}, verás que la sección de compatibilidad con navegadores enumera los distintos tipos de valores de color y su compatibilidad.

Veamos algunos de los tipos de valores y unidades con los que te encontrarás a menudo, con ejemplos para que puedas probar distintos valores posibles.

## Números, longitudes y porcentajes

Hay varios tipos de valores numéricos que puedes acabar usando en CSS. Todos los siguientes se consideran numéricos:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Tipo de dato</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/es/docs/Web/CSS/Reference/Values/integer">&#x3C;integer></a></code>
      </td>
      <td>
        Un <code>&#x3C;integer></code> es un número entero, como
        <code>1024</code> o <code>-55</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/es/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></code>
      </td>
      <td>
        Un <code>&#x3C;number></code> representa un número decimal: puede tener o
        no un punto decimal con una parte fraccionaria. Por
        ejemplo, <code>0.255</code>, <code>128</code> o <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/es/docs/Web/CSS/Reference/Values/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        Un <code>&#x3C;dimension></code> es un <code>&#x3C;number></code> con una
        unidad. Por ejemplo, <code>45deg</code>, <code>5s</code>
        o <code>10px</code>. <code>&#x3C;dimension></code> es una categoría
        general que incluye {{cssxref("length")}}, <code><a href="/es/docs/Web/CSS/Reference/Values/angle">&#x3C;angle></a></code
        >, <code><a href="/es/docs/Web/CSS/Reference/Values/time">&#x3C;time></a></code
        > y
        <code
          ><a href="/es/docs/Web/CSS/Reference/Values/resolution">&#x3C;resolution></a></code
        >
        entre sus tipos.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        Un <code>&#x3C;percentage></code> representa una fracción de algún otro
        valor. Por ejemplo, <code>50%</code>. Los valores porcentuales siempre son
        relativos a otra magnitud. Por ejemplo, la longitud de un elemento es
        relativa a la longitud de su elemento padre.
      </td>
    </tr>
  </tbody>
</table>

### Longitudes

El tipo numérico con el que te encontrarás más a menudo es {{cssxref("length")}}. Por ejemplo, `10px` (píxeles) o `30em`. En CSS se usan dos tipos de longitudes: relativas y absolutas. Es importante conocer la diferencia para entender qué tamaño tendrán las cosas.

#### Unidades de longitud absoluta

Las siguientes son todas unidades de longitud **absolutas**: no son relativas a nada más, y en general se considera que siempre tienen el mismo tamaño.

| Unidad | Nombre               | Equivale a               |
| ------ | -------------------- | ------------------------ |
| `cm`   | Centímetros          | 1cm = 37.8px = 25.2/64in |
| `mm`   | Milímetros           | 1mm = 1/10 de 1cm        |
| `Q`    | Cuartos de milímetro | 1Q = 1/40 de 1cm         |
| `in`   | Pulgadas             | 1in = 2.54cm = 96px      |
| `pc`   | Picas                | 1pc = 1/6 de 1in         |
| `pt`   | Puntos               | 1pt = 1/72 de 1in        |
| `px`   | Píxeles              | 1px = 1/96 de 1in        |

La mayoría de estas unidades son más útiles para la impresión que para la pantalla. Por ejemplo, normalmente no usamos `cm` (centímetros) en pantalla. El único valor que usarás habitualmente es `px` (píxeles).

Ten en cuenta que `1px` no equivale necesariamente a un píxel físico del dispositivo. En las pantallas HD, puede ocupar varios píxeles físicos.
Del mismo modo, `1cm` en CSS a menudo no corresponde a la centésima parte de un metro del [SI](https://es.wikipedia.org/wiki/Sistema_Internacional_de_Unidades). En una pantalla de televisión grande, normalmente es más largo.
Las longitudes son perceptivas: `16px` se ve más o menos igual en un teléfono, un portátil o una televisión a la distancia de visión habitual.

#### Unidades de longitud relativa

Las unidades de longitud relativa son relativas a otra cosa. Por ejemplo:

- `em` es relativa al tamaño de fuente de este elemento, o al tamaño de fuente del elemento padre cuando se usa en {{cssxref("font-size")}}. `rem` es relativa al tamaño de fuente del elemento raíz.
- `vh` y `vw` son relativas a la altura y al ancho del viewport, respectivamente.

La ventaja de usar unidades relativas es que, con una planificación cuidadosa, puedes hacer que el tamaño del texto o de otros elementos se escale en relación con todo lo demás de la página. Para ver la lista completa de unidades relativas disponibles, consulta la página de referencia del tipo {{cssxref("length")}}.

En esta sección veremos algunas de las unidades relativas más habituales.

#### Explorar un ejemplo

En el ejemplo de abajo puedes ver cómo se comportan algunas unidades de longitud relativas y absolutas. La primera caja tiene un {{cssxref("width")}} establecido en píxeles. Como es una unidad absoluta, este ancho seguirá igual cambie lo que cambie.

La segunda caja tiene un ancho establecido en unidades `vw` (ancho del viewport). Este valor es relativo al ancho del viewport, así que `10vw` es el 10 % del ancho del viewport. Si cambias el ancho de la ventana del navegador, el tamaño de la caja debería cambiar. Sin embargo, este ejemplo está incrustado en la página con un [`<iframe>`](/es/docs/Web/HTML/Reference/Elements/iframe), así que no funcionará. Para verlo en acción, tendrás que [probar el ejemplo después de abrirlo en su propia pestaña del navegador](https://mdn.github.io/css-examples/learn/values-units/length.html).

La tercera caja usa unidades `em`, que son relativas al tamaño de fuente del elemento. He establecido un tamaño de fuente de `1em` en el {{htmlelement("div")}} contenedor, que tiene la clase `.wrapper`. Cambia este valor a `1.5em` y verás que aumenta el tamaño de fuente de todos los elementos, pero solo se ensancha el último, porque su ancho es relativo a ese tamaño de fuente.

Después de seguir las instrucciones anteriores, prueba a jugar con los valores de otras formas para ver qué obtienes.

```html live-sample___length
<div class="wrapper">
  <div class="box px">Mido 200px de ancho</div>
  <div class="box vw">Mido 10vw de ancho</div>
  <div class="box em">Mido 10em de ancho</div>
</div>
```

```css live-sample___length
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}

.wrapper {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  width: 10vw;
}

.em {
  width: 10em;
}
```

{{EmbedLiveSample("length", "", "250px")}}

#### ems y rems

`em` y `rem` son las dos longitudes relativas con las que probablemente te encontrarás más a menudo al dimensionar cualquier cosa, desde cajas hasta texto. Vale la pena entender cómo funcionan y en qué se diferencian, sobre todo cuando empieces con temas más complejos, como [dar estilo al texto](/es/docs/Learn_web_development/Core/Text_styling) o el [diseño con CSS](/es/docs/Learn_web_development/Core/CSS_layout). El ejemplo de abajo es una demostración.

El siguiente ejemplo es un conjunto de listas anidadas: tenemos dos listas en total, y las dos tienen el mismo HTML. La única diferencia es que la primera tiene la clase _ems_ y la segunda, la clase _rems_.

Para empezar, establecemos `16px` como tamaño de fuente del elemento `<html>`.

A modo de repaso, la unidad `em` significa **«el tamaño de fuente de mi elemento padre»** si se usa en `font-size`, y **«mi propio tamaño de fuente»** cuando se usa en cualquier otra cosa. Los elementos {{htmlelement("li")}} dentro del {{htmlelement("ul")}} con la clase `ems` toman su tamaño de su padre. Así que cada nivel de anidamiento sucesivo se va haciendo más grande, porque cada uno tiene su tamaño de fuente establecido en `1.3em`: 1,3 veces el tamaño de fuente de su elemento padre.

A modo de repaso, la unidad `rem` significa **«el tamaño de fuente del elemento raíz»** (rem viene de _root em_, «em raíz»). Los elementos {{htmlelement("li")}} dentro del {{htmlelement("ul")}} con la clase `rems` toman su tamaño del elemento raíz (`<html>`). Esto significa que cada nivel de anidamiento sucesivo no sigue creciendo.

Sin embargo, si cambias el `font-size` del elemento `<html>` en el CSS, verás que todo lo demás cambia en relación con él: tanto el texto dimensionado con `rem` como con `em`. Pruébalo ahora en el MDN Playground.

```html live-sample___em-rem
<ul class="ems">
  <li>Uno</li>
  <li>Dos</li>
  <li>
    Tres
    <ul>
      <li>Tres A</li>
      <li>
        Tres B
        <ul>
          <li>Tres B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul class="rems">
  <li>Uno</li>
  <li>Dos</li>
  <li>
    Tres
    <ul>
      <li>Tres A</li>
      <li>
        Tres B
        <ul>
          <li>Tres B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___em-rem
html {
  font-size: 16px;
}

.ems li {
  font-size: 1.3em;
}

.rems li {
  font-size: 1.3rem;
}
```

{{EmbedLiveSample("em-rem", "", "400px")}}

### Porcentajes

En muchos casos, un porcentaje se trata igual que una longitud. Lo particular de los porcentajes es que siempre se establecen en relación con algún otro valor. Por ejemplo, si estableces el `font-size` de un elemento como porcentaje, será un porcentaje del `font-size` del padre del elemento. Si usas un porcentaje como valor de `width`, será un porcentaje del `width` del padre.

En el siguiente ejemplo, los dos pares de cajas dimensionadas con porcentajes y con píxeles tienen los mismos nombres de clase. Las cajas de cada par miden `40%` y `200px` de ancho, respectivamente.

La diferencia es que el segundo par de cajas está dentro de un envoltorio que mide `400px` de ancho. La segunda caja de `200px` tiene el mismo ancho que la primera, pero la segunda caja del `40%` mide ahora el `40%` de `400px`: ¡mucho más estrecha que la primera!

Prueba a cambiar el ancho del envoltorio o el valor del porcentaje para ver cómo funciona:

```html live-sample___percentage
<div class="box px">Mido 200px de ancho</div>
<div class="box percent">Mido 40% de ancho</div>
<div class="wrapper">
  <div class="box px">Mido 200px de ancho</div>
  <div class="box percent">Mido 40% de ancho</div>
</div>
```

```css live-sample___percentage
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}
.wrapper {
  width: 400px;
  border: 5px solid rebeccapurple;
}

.px {
  width: 200px;
}

.percent {
  width: 40%;
}
```

{{EmbedLiveSample("percentage", "", "350px")}}

El siguiente ejemplo tiene tamaños de fuente establecidos en porcentajes. Cada `<li>` tiene un `font-size` del `80%`; por lo tanto, los elementos de lista anidados se hacen cada vez más pequeños, porque heredan su tamaño de su padre.

```html live-sample___percentage-fonts
<ul>
  <li>Uno</li>
  <li>Dos</li>
  <li>
    Tres
    <ul>
      <li>Tres A</li>
      <li>
        Tres B
        <ul>
          <li>Tres B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___percentage-fonts
li {
  font-size: 80%;
}
```

{{EmbedLiveSample("percentage-fonts")}}

Aunque muchas propiedades aceptan una longitud o un porcentaje como valor, algunas solo aceptan una longitud, por ejemplo, {{cssxref("border-width")}}. Las páginas de referencia de las propiedades de MDN detallan qué tipos de valor aceptan. Si el valor permitido incluye {{cssxref("length-percentage")}}, puedes usar una longitud o un porcentaje. Si el valor permitido solo incluye `<length>`, no se puede usar un porcentaje.

### Números

Algunos tipos de valor aceptan números sin unidades; un ejemplo es la propiedad `opacity`, que controla la opacidad de un elemento (lo transparente que es). Esta propiedad acepta un número entre `0` (totalmente transparente) y `1` (totalmente opaco).

En el ejemplo de abajo, prueba a cambiar el valor de `opacity` por distintos valores decimales entre `0` y `1`, y mira cómo la caja y su contenido se vuelven más o menos opacos:

```html live-sample___opacity
<div class="wrapper">
  <div class="box">Soy una caja con opacidad</div>
</div>
```

```css live-sample___opacity
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-repeat: no-repeat;
  background-position: bottom left;
  padding: 20px;
}

.box {
  margin: 40px auto;
  width: 200px;
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 30px;
  opacity: 0.6;
}
```

{{EmbedLiveSample("opacity", "", "210px")}}

> [!NOTE]
> Cuando uses un número como valor en CSS, no debe ir entre comillas.

## Color

Los valores de color se pueden usar en muchos lugares de CSS, ya sea para especificar el color del texto, de los fondos, de los bordes y mucho más.
Hay muchas formas de establecer el color en CSS, que te permiten controlar muchísimas propiedades interesantes.

El sistema de color estándar de las computadoras modernas admite colores de 24 bits, lo que permite mostrar unos 16,7 millones de colores distintos mediante una combinación de distintos canales rojo, verde y azul, con 256 valores distintos por canal (256 x 256 x 256 = 16 777 216).

En esta sección veremos primero las formas más habituales de especificar colores: con palabras clave, valores hexadecimales y valores `rgb()`.
También echaremos un vistazo rápido a otras funciones de color, para que puedas reconocerlas cuando las veas o experimentar con distintas formas de aplicar el color.

Probablemente elegirás una paleta de colores y después usarás esos colores (y tu forma favorita de especificar el color) en todo tu proyecto.
Puedes combinar distintos modelos de color, pero normalmente es mejor que todo tu proyecto use el mismo método para declarar los colores, por coherencia.

### Palabras clave de color

Verás las palabras clave de color (o «colores con nombre») en muchos ejemplos de código de MDN. Como el tipo de dato {{cssxref("named-color")}} contiene un número muy limitado de valores de color, no se suelen usar en sitios web en producción con un lenguaje de diseño sofisticado. En cambio, los colores con nombre se usan en los ejemplos de código para indicar claramente qué color se espera, para que quien aprende pueda centrarse en el contenido que se enseña.

En el siguiente ejemplo, prueba a jugar con distintas palabras clave de color para hacerte una mejor idea de cómo funcionan. Puedes consultarlas en la página de referencia de {{cssxref("named-color")}}.

```html live-sample___color-keywords
<div class="wrapper">
  <div class="box one">antiquewhite</div>
  <div class="box two">blueviolet</div>
  <div class="box three">greenyellow</div>
</div>
```

```css live-sample___color-keywords
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: antiquewhite;
}

.two {
  background-color: blueviolet;
}

.three {
  background-color: greenyellow;
}
```

{{EmbedLiveSample("color-keywords")}}

### Valores RGB hexadecimales

El siguiente tipo de valor de color con el que probablemente te encontrarás son los códigos hexadecimales.

Los números hexadecimales usan 16 caracteres, de `0-9` y de `a-f`, así que el rango completo es `0123456789abcdef`. Cada valor de color hexadecimal consiste en una almohadilla (`#`) seguida de seis caracteres hexadecimales (`#ffc0cb`, por ejemplo). Cada **par** de caracteres hexadecimales representa uno de los canales de un color RGB (rojo, verde y azul) y nos permite especificar cualquiera de los 256 valores disponibles para cada uno (16 x 16 = 256).

Estos valores son menos intuitivos que las palabras clave para definir colores, pero son mucho más versátiles, porque con ellos puedes _representar_ cualquier color RGB.

En el siguiente ejemplo, prueba a cambiar los valores para ver cómo varían los colores:

```html live-sample___color-hex
<div class="wrapper">
  <div class="box one">#02798b</div>
  <div class="box two">#c55da1</div>
  <div class="box three">#128a7d</div>
</div>
```

```css live-sample___color-hex
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

{{EmbedLiveSample("color-hex")}}

> [!NOTE]
> Puede que veas valores de color hexadecimales escritos con tres caracteres en lugar de seis. Es una forma abreviada que se puede usar cuando los caracteres de cada par son iguales. Por ejemplo, `#ff00ff` y `#f0f` son equivalentes. También puede que veas valores de color hexadecimales escritos con ocho (o cuatro) caracteres, en los que el cuarto valor representa la transparencia alfa de los tres anteriores; por ejemplo, `#ff00ff66`.

### Valores RGB

Para crear valores RGB directamente, la función {{cssxref("color_value/rgb")}} recibe tres parámetros que representan los valores de los canales **rojo**, **verde** y **azul** de los colores, con un cuarto valor opcional separado por una barra (`/`) que representa la opacidad, de forma muy parecida a los valores hexadecimales. La diferencia con RGB es que cada canal no se representa con dos dígitos hexadecimales, sino con un número decimal entre `0` y `255` o con un porcentaje entre `0%` y `100%` (pero no con una mezcla de los dos).

Vamos a reescribir nuestro último ejemplo para usar colores RGB:

```html live-sample___color-rgb
<div class="wrapper">
  <div class="box one">rgb(2 121 139)</div>
  <div class="box two">rgb(197 93 161)</div>
  <div class="box three">rgb(18 138 125)</div>
</div>
```

```css live-sample___color-rgb
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: rgb(2 121 139);
}

.two {
  background-color: rgb(197 93 161);
}

.three {
  background-color: rgb(18 138 125);
}
```

{{EmbedLiveSample("color-rgb")}}

#### Un ejemplo de RGB con opacidad

En el siguiente ejemplo, hemos añadido una imagen de fondo al bloque contenedor de nuestras cajas de colores. Después hemos dado a las cajas distintos valores de opacidad: fíjate en que el fondo se ve más cuanto menor es el valor del canal alfa. Si estableces este valor en `0`, el color será totalmente transparente, mientras que `1` lo hará totalmente opaco. Los valores intermedios te dan distintos niveles de transparencia.

Prueba a cambiar los valores del canal alfa para ver cómo afectan al color resultante.

```html live-sample___color-rgba
<div class="wrapper">
  <div class="box one">rgb(2 121 139 / .3)</div>
  <div class="box two">rgb(197 93 161 / .7)</div>
  <div class="box three">rgb(18 138 125 / .9)</div>
</div>
```

```css live-sample___color-rgba
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: rgb(2 121 139 / 0.3);
}

.two {
  background-color: rgb(197 93 161 / 0.7);
}

.three {
  background-color: rgb(18 138 125 / 0.9);
}
```

{{EmbedLiveSample("color-rgba", "", "250px")}}

> [!NOTE]
> Establecer un canal alfa en un color tiene una diferencia clave respecto a usar la propiedad {{cssxref("opacity")}} que mencionamos antes. Cuando usas `opacity`, haces transparente el elemento y todo lo que contiene, mientras que usar RGB con un parámetro alfa solo hace transparente el color que estás especificando.

### Usar tonos para especificar un color

Si quieres ir más allá de las palabras clave, los valores hexadecimales y {{cssxref("color_value/rgb")}} para los colores, quizá quieras probar a usar {{cssxref("hue")}}.
El tono (_hue_) es el tipo de valor que nos permite distinguir la diferencia o la similitud entre colores como el rojo, el naranja, el amarillo, el verde, el azul, etc.
La idea clave es que puedes especificar un tono como un {{cssxref("angle")}}, porque la mayoría de los modelos de color describen los tonos con una {{glossary("color wheel", "rueda de colores")}}.

Hay varias funciones de color que incluyen un componente {{cssxref("hue")}}, como {{cssxref("color_value/hsl")}}, {{cssxref("color_value/hwb")}} y {{cssxref("color_value/lch")}}. Otras funciones de color, como {{cssxref("color_value/lab")}}, definen los colores según lo que pueden ver los humanos.

Si quieres saber más sobre estas funciones y espacios de color, consulta la guía [Aplicar color a elementos HTML con CSS](/es/docs/Web/CSS/Guides/Colors/Applying_color), la referencia de {{cssxref("&lt;color&gt;")}}, que enumera todas las formas distintas de usar los colores en CSS, y el [módulo de color de CSS](/es/docs/Web/CSS/Guides/Colors), que ofrece un panorama de todos los tipos de color de CSS y de las propiedades que usan valores de color.

### HWB

Un gran punto de partida para usar los tonos en CSS es la función {{cssxref("color_value/hwb")}}, que especifica un color `srgb()`.
Sus tres partes son:

- **Tono** (_hue_): el matiz base del color. Recibe un valor de {{cssxref("hue")}} entre `0` y `360`, que representa los ángulos alrededor de una rueda de colores.
- **Blancura** (_whiteness_): ¿cuánto blanco tiene el color? Recibe un valor de `0%` (sin blanco) a `100%` (blanco total).
- **Negrura** (_blackness_): ¿cuánto negro tiene el color? Recibe un valor de `0%` (sin negro) a `100%` (negro total).

### HSL

Parecida a la función {{cssxref("color_value/hwb")}} es la función {{cssxref("color_value/hsl")}}, que también especifica un color `srgb()`.
HSL usa `Hue` (tono), además de `Saturation` (saturación) y `Lightness` (luminosidad):

- **Tono**: de nuevo, representa el matiz base del color.
- **Saturación**: ¿cuán saturado está el color? Recibe un valor de `0` a `100%`, donde `0` es sin color (se verá como un tono de gris) y `100%` es la saturación total.
- **Luminosidad**: ¿cuán claro o brillante es el color? Recibe un valor de `0` a `100%`, donde `0` es sin luz (se verá completamente negro) y `100%` es la luz total (se verá completamente blanco).

El valor de color {{cssxref("color_value/hsl")}} también tiene un cuarto valor opcional, separado del color por una barra (`/`), que representa la transparencia alfa.

Vamos a actualizar el ejemplo de RGB para usar colores HSL:

```html live-sample___color-hsl
<div class="wrapper">
  <div class="box one">hsl(188 97% 28%)</div>
  <div class="box two">hsl(321 47% 57%)</div>
  <div class="box three">hsl(174 77% 31%)</div>
</div>
```

```css live-sample___color-hsl
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28%);
}

.two {
  background-color: hsl(321 47% 57%);
}

.three {
  background-color: hsl(174 77% 31%);
}
```

{{EmbedLiveSample("color-hsl")}}

Igual que con `rgb()`, puedes pasar un parámetro alfa a `hsl()` para especificar la opacidad:

```html live-sample___color-hsla
<div class="wrapper">
  <div class="box one">hsl(188 97% 28% / .3)</div>
  <div class="box two">hsl(321 47% 57% / .7)</div>
  <div class="box three">hsl(174 77% 31% / .9)</div>
</div>
```

```css live-sample___color-hsla
.wrapper {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28% / 0.3);
}

.two {
  background-color: hsl(321 47% 57% / 0.7);
}

.three {
  background-color: hsl(174 77% 31% / 0.9);
}
```

{{EmbedLiveSample("color-hsla", "", "250px")}}

Antes de seguir, prueba a modificar los dos ejemplos anteriores para usar algunos valores de color basados en el tono. Prueba a variar el valor del tono en cada caso para ver cómo afecta al color base, y después prueba a variar también los demás parámetros.

## Imágenes

El tipo de valor {{cssxref("image")}} se usa siempre que una imagen es un valor válido. Puede ser un archivo de imagen real al que se apunta con una función `url()`, o un degradado.

En el ejemplo de abajo, usamos una imagen y un degradado como valores de la propiedad CSS `background-image`.

```html live-sample___image
<div class="box image"></div>
<div class="box gradient"></div>
```

```css live-sample___image
.box {
  height: 150px;
  width: 300px;
  margin: 20px auto;
  border-radius: 0.5em;
}

.image {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgb(119 0 255 / 39%),
    rgb(0 212 255 / 25%)
  );
}
```

{{EmbedLiveSample("image", "", "380px")}}

> [!NOTE]
> Hay algunos otros valores posibles para `<image>`, pero son más recientes y actualmente tienen poca compatibilidad con los navegadores. Consulta la página de MDN del tipo de dato {{cssxref("image")}} si quieres leer sobre ellos.

Más adelante aprenderás sobre los valores de imagen con más profundidad en nuestro artículo [Fondos y bordes](/es/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders).

## Posición

El tipo de valor {{cssxref("&lt;position&gt;")}} representa un conjunto de coordenadas 2D que se usan para posicionar un elemento, como una imagen de fondo (con {{cssxref("background-position")}}). Puede recibir palabras clave como `top`, `left`, `bottom`, `right` y `center` para alinear los elementos con límites concretos de una caja 2D, y longitudes, que representan desplazamientos desde los bordes superior e izquierdo de la caja.

Un valor de posición típico consta de dos valores: el primero establece la posición horizontal, y el segundo, la vertical. Si solo especificas valores para un eje, el otro será `center` de forma predeterminada.

En el siguiente ejemplo, hemos posicionado una imagen de fondo a `60px` de la parte superior y a la derecha (`right`) del contenedor con una palabra clave.

Prueba a jugar con estos valores para ver cómo puedes mover la imagen.

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  height: 200px;
  width: 400px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
  background-repeat: no-repeat;
  background-position: right 60px;
  margin: 20px auto;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("position", "100%", "260px")}}

## Cadenas e identificadores

A lo largo de los ejemplos anteriores, hemos visto lugares en los que se usan palabras clave como valor (por ejemplo, las palabras clave de `<color>` como `red`, `black`, `rebeccapurple` y `goldenrod`). Estas palabras clave se describen con más precisión como _identificadores_, un valor especial que CSS entiende. Por eso no van entre comillas: no se tratan como cadenas.

Hay lugares en los que se usan cadenas en CSS. Por ejemplo, [al especificar contenido generado](/es/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generar_contenido_con_before_y_after). En este caso, el valor va entre comillas para indicar que es una cadena. En el ejemplo de abajo, usamos palabras clave de color sin comillas junto con una cadena de contenido generado entre comillas.

```html live-sample___strings-idents
<div class="box"></div>
```

```css live-sample___strings-idents
.box {
  width: 400px;
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
}

.box::after {
  content: "Esto es una cadena. Lo sé porque está entre comillas en el CSS.";
}
```

{{EmbedLiveSample("strings-idents", "100%", "80")}}

## Funciones

En programación, una función es un fragmento de código que hace una tarea concreta.
Las funciones son útiles porque puedes escribir el código una vez y reutilizarlo muchas veces, en lugar de escribir la misma lógica una y otra vez.
La mayoría de los lenguajes de programación no solo admiten funciones, sino que además incluyen funciones integradas útiles para tareas habituales, para que no tengas que escribirlas tú desde cero.

CSS también tiene [funciones](/es/docs/Web/CSS/Reference/Values/Functions), que funcionan de forma parecida a las funciones de otros lenguajes.
De hecho, ya hemos visto funciones de CSS en la sección [Color](#color) anterior, como {{cssxref("color_value/rgb")}} y {{cssxref("color_value/hsl")}}.

Además de aplicar colores, puedes usar funciones en CSS para hacer muchas otras cosas.
Por ejemplo, las [funciones de transformación](/es/docs/Web/CSS/Reference/Values/Functions) son una forma habitual de mover, girar y escalar elementos en una página.
Puede que veas {{cssxref("transform-function/translate")}} para mover algo en horizontal o en vertical, {{cssxref("transform-function/rotate")}} para girar algo o {{cssxref("transform-function/scale")}} para hacer algo más grande o más pequeño.

### Funciones matemáticas

Cuando creas estilos para un proyecto, probablemente empezarás con números como `300px` para las longitudes o `200ms` para las duraciones.
Si quieres que estos valores cambien según otros valores, tendrás que hacer algunas operaciones matemáticas.
Podrías calcular el porcentaje de un valor o sumar un número a otro, y después actualizar tu CSS con el resultado.

CSS admite [funciones matemáticas](/es/docs/Web/CSS/Reference/Values/Functions), que nos permiten hacer cálculos en CSS en lugar de depender de valores estáticos o de hacer las operaciones en JavaScript.
Una de las funciones matemáticas más habituales es {{cssxref("calc()")}}, que te permite hacer operaciones como sumas, restas, multiplicaciones y divisiones.

Por ejemplo, supongamos que queremos que el ancho de un elemento sea el `20%` de su contenedor padre más `100px`.
No podemos especificar este ancho con un valor estático: si el padre usa un ancho en porcentaje (o una unidad relativa como `em` o `rem`), variará según el contexto en el que se use y otros factores, como el dispositivo del usuario o el ancho de la ventana del navegador.
Sin embargo, podemos usar `calc()` para establecer el ancho del elemento en el `20%` de su contenedor padre más `100px`.
El `20%` se basa en el ancho del contenedor padre (`.wrapper`) y, si ese ancho cambia, el cálculo también cambiará:

```html live-sample___calc
<div class="wrapper">
  <div class="box">Mi ancho está calculado.</div>
</div>
```

```css live-sample___calc
.wrapper {
  width: 400px;
}
.box {
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
  width: calc(20% + 100px);
}
```

{{EmbedLiveSample("calc")}}

Hay muchas otras funciones matemáticas que puedes usar en CSS, como {{cssxref("min()")}}, {{cssxref("max()")}} y {{cssxref("clamp()")}}, que te permiten elegir, respectivamente, el valor más pequeño, el más grande o el intermedio de un conjunto de valores. Explora nuestra página de referencia de [funciones de valor de CSS](/es/docs/Web/CSS/Reference/Values/Functions) para ver todas las funciones de CSS disponibles.

Conocer las funciones de CSS es útil para reconocerlas cuando las veas. Deberías empezar a experimentar con ellas en tus proyectos: te ayudarán a no escribir código personalizado o repetitivo para conseguir resultados que puedes obtener con CSS normal.

## Resumen

Este ha sido un repaso rápido de los tipos de valores y unidades más habituales con los que te puedes encontrar. Puedes ver todos los distintos tipos en la página del módulo de [valores y unidades de CSS](/es/docs/Web/CSS/Guides/Values_and_units); te encontrarás con muchos de ellos a medida que avances en estas lecciones.

Lo más importante que hay que recordar es que cada propiedad tiene una lista definida de tipos de valor permitidos, y que cada tipo de valor tiene una definición que explica cuáles son sus valores. Después puedes consultar los detalles aquí en MDN. Por ejemplo, saber que {{cssxref("image")}} también te permite crear un degradado de color es un conocimiento útil, ¡aunque quizá no sea evidente!

En el siguiente artículo te daremos algunas pruebas que puedes usar para comprobar si has entendido y retenido la información que te hemos dado sobre los valores y las unidades.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics")}}

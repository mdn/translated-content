---
title: Cómo se estructura el CSS
slug: Learn/CSS/First_steps/How_CSS_is_structured
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Ahora que ya sabes qué es el CSS y conoces sus conceptos básicos, es hora de profundizar un poco más en la estructura del lenguaje en sí. Ya hemos visto muchos de los conceptos que aparecen en este artículo; puedes volver para recapitular si más adelante encuentras conceptos confusos.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >software básico instalado</a
        >, conocimientos básicos de
        <a href="/es/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabajo con archivos</a
        >, conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >Introducción al HTML</a
        >) y una idea de
        <a href="/es/docs/Learn/CSS/First_steps/How_CSS_works"
          >cómo funciona el CSS</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender en detalle las estructuras de sintaxis fundamentales de CSS.
      </td>
    </tr>
  </tbody>
</table>

## Aplicar CSS al HTML

Lo primero que veremos son los tres métodos para aplicar CSS a un documento.

### Hoja de estilo externa

En [Empezar con el CSS](/es/docs/Learn/CSS/First_steps/Getting_started), vinculamos una hoja de estilo externa a nuestra página. Este es el método más común y útil para adjuntar CSS a un documento, porque puedes vincular el CSS a varias páginas y dar estilo a todas ellas con la misma hoja de estilo. En la mayoría de los casos, las diferentes páginas de un sitio web se verán más o menos iguales, de modo que puedes usar el mismo conjunto de reglas para el aspecto y la interacción básicos.

Una hoja de estilo externa significa que el CSS está escrito en un archivo independiente con una extensión `.css` y que lo vinculas desde un elemento `<link>` de HTML:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mi experimento CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es mi primer ejemplo de CSS</p>
  </body>
</html>
```

El archivo CSS podría parecerse a esto:

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

El atributo `href` del elemento {{htmlelement("link")}} tiene que hacer referencia a un archivo de tu sistema de archivos.

En el ejemplo anterior, el archivo CSS está en la misma carpeta que el documento HTML, pero puedes colocarlo en otro lugar y especificar la ruta adecuada. Por ejemplo:

```html
<!-- Dentro de un subdirectorio llamado styles dentro del directorio de trabajo -->
<link rel="stylesheet" href="styles/style.css" />

<!-- Dentro de un subdirectorio llamado general, que está en un subdirectorio llamado styles, dentro del directorio de trabajo -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Sube un nivel de directorio, y luego dentro de un subdirectorio llamado styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Hoja de estilo interna

Una hoja de estilo interna es cuando no hay ningún archivo CSS externo, sino que colocas tu CSS dentro de un elemento {{htmlelement("style")}} contenido dentro del elemento {{htmlelement("head")}} del HTML.

En este caso, el HTML se vería así:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mi experimento CSS</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es mi primer ejemplo de CSS</p>
  </body>
</html>
```

Esto puede ser útil en algunas circunstancias (tal vez estés trabajando con un sistema de administración de contenido donde no sea posible modificar los archivos CSS directamente), pero no es tan eficiente como las hojas de estilo externas: en una página web, deberías repetir el CSS en cada página y actualizarlo en varios lugares en caso de que hubiera que hacer cambios.

### Estilos en línea

Los estilos en línea son declaraciones CSS que afectan a un solo elemento, contenido dentro de un atributo de `style`:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mi experimento CSS</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      ¡Hola mundo!
    </h1>
    <p style="color:red;">Este es mi primer ejemplo de CSS</p>
  </body>
</html>
```

**¡No hagas esto a menos que realmente tengas que hacerlo!** Es realmente malo a la hora de realizar el mantenimiento (puede que tengas que actualizar la misma información varias veces en un mismo documento), y además mezcla tu información CSS para la presentación con tu información HTML para la estructura, lo que dificulta la lectura y la comprensión del código. Mantener los diferentes tipos de código separados facilita trabajar con ellos.

Hay ciertos lugares donde los estilos en línea son más comunes, o incluso aconsejables. Es posible que tengas que recurrir a ellos si realmente tu entorno de trabajo es restrictivo (tal vez el CMS solo te permita editar el cuerpo del HTML). También verás que se usan mucho en el correo electrónico en formato HTML para lograr la máxima compatibilidad con el mayor número de clientes.

## Juguemos con el CSS de este artículo

En este artículo hay mucho CSS con el que jugar. Para hacerlo, recomendamos crear un nuevo directorio/carpeta en el ordenador, dentro de la cual deberás crear una copia de los siguientes dos archivos:

**index.html:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Mis experimentos CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>Crea tu HTML de prueba aquí</p>
  </body>
</html>
```

**styles.css:**

```css
/* Crea tu CSS de prueba aquí */

p {
  color: red;
}
```

Entonces, cuando te encuentres con un CSS con el que desees experimentar, reemplaza el contenido `<body>` del HTML con algo de HTML sin estilos y añade CSS a tu archivo de CSS para darle estilo.

Si no estás en un sistema donde puedas crear archivos fácilmente, puedes utilizar el editor interactivo que encontrarás a continuación para experimentar.

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

¡Sigue leyendo y disfruta!

## Selectores

No se puede hablar de CSS sin mencionar los selectores, de los cuales ya hemos descubierto varios tipos diferentes en la lección [Empezar con el CSS](/es/docs/Learn/CSS/First_steps/Getting_started). Un selector es, como determinamos, un elemento de nuestro documento HTML para aplicarle estilo. Si los estilos no se aplican correctamente, es probable que el selector no coincida con lo que crees que debería coincidir.

Cada regla CSS comienza con un selector o una lista de selectores que indican al navegador a qué elemento o elementos deben aplicarse dichas reglas. Todos los siguientes son ejemplos de selectores válidos o listas de selectores.

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

**Prueba a crear algunas reglas CSS que usen los selectores anteriores y algo de HTML sin estilos. Si no conoces alguna de las sintaxis anteriores, ¡prueba a buscarla en MDN!**

> **Nota:** Aprenderás mucho más sobre los selectores en nuestros tutoriales sobre [selectores CSS](/es/docs/Learn/CSS/Building_blocks/Selectors) de la próxima lección.

### Especificidad

A menudo habrá situaciones en las que dos selectores podrían determinar un mismo elemento HTML. Considera la siguiente hoja de estilo, en que definimos una regla con un selector `p` que establecerá los párrafos en color azul, y también una clase que establecerá los elementos seleccionados en color rojo.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Digamos que en nuestro documento HTML hay un párrafo con una clase `special`. Ambas reglas podrían aplicarse. ¿Cuál ganará? ¿De qué color crees que será nuestro párrafo?

```html
<p class="special">¿De qué color soy?</p>
```

El lenguaje CSS tiene reglas para controlar cuál ganará en caso de colisión; reciben el nombre de **cascada** y **especificidad**. En el siguiente bloque de códigos hemos definido dos reglas para el selector `p`, pero el párrafo termina siendo de color azul. Esto se debe a que la declaración que lo establece en azul aparece más abajo en la hoja de estilo, y los estilos posteriores anulan a los anteriores. Así funciona la regla de la cascada.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Sin embargo, en el caso de nuestro primer bloque, que contiene un selector de clase y otro de elementos, la clase ganará. Esto hará que el párrafo sea rojo, incluso aunque aparezca antes en la hoja de estilo. Una clase se describe de forma más específica o con más especificidad que el selector de elementos, razón por la que gana.

**Prueba el ejemplo anterior: añade el HTML a tu experimento, luego pon las dos reglas `p { ... }` a tu hoja de estilo. A continuación, cambia el primer selector `p` por `.special` para ver cómo cambia el estilo.**

Las reglas de especificidad y de cascada pueden parecer un poco complicadas al principio. Son más fáciles de entender a medida que se van adquiriendo conocimientos de CSS. En nuestro artículo sobre [Cascada y herencia](/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance), que abordaremos en la próxima lección, se explicará en detalle, incluyendo cómo calcular la especificidad. Por ahora, solo has de saber que existe y que a veces el CSS no se aplica como esperas porque algo más en la hoja de estilo tiene una mayor especificidad. El hecho de identificar que más de una regla podría aplicarse a un elemento es el primer paso para solucionar estos problemas.

## Propiedades y valores

En su nivel más básico, el CSS consta de dos componentes básicos:

- **Propiedades**: Identificadores legibles por los humanos que indican qué características de estilo (por ejemplo, [`font-size`](/es/docs/Web/CSS/font-size), [`width`](/es/docs/Web/CSS/width), [`background-color`](/es/docs/Web/CSS/background-color)) deseas cambiar.
- **Valores**: A cada propiedad especificada se le asigna un valor que indica cómo quieres que cambien esas características de estilo (por ejemplo, lo que quieres que cambie de la fuente, el ancho o el color de fondo).

La siguiente imagen resalta una sola propiedad y valor. El nombre de la propiedad es `color` y el valor `blue`.

![Una declaración resaltada en el CSS](declaration.png)

Una propiedad emparejada con un valor se denomina _declaración CSS_. Las declaraciones CSS se colocan dentro de los _bloques de declaración CSS_. La siguiente imagen muestra nuestro CSS con el bloque de declaración resaltado.

![Un bloque de declaración resaltado](declaration-block.png)

Finalmente, los bloques de declaración CSS se combinan con _selectores_ para producir _conjuntos de reglas CSS_ (o _reglas CSS_). Nuestra imagen contiene dos reglas, una para el selector `h1` y otra para el selector `p`. La regla para `h1` está resaltada.

![La regla para h1 resaltada](rules.png)

Establecer las propiedades de CSS según valores específicos es la función principal del lenguaje CSS. El motor CSS calcula qué declaraciones se aplican a cada elemento de una página para darle la compaginación y los estilos adecuados.

> **Advertencia:** Las propiedades y valores de CSS son sensibles a mayúsculas y minúsculas. La propiedad y el valor de cada par están separados por dos puntos (`:`).

**Prueba a buscar diferentes valores de las siguientes propiedades y escribe reglas CSS que se puedan aplicar a diferentes elementos HTML:**

- **{{cssxref("font-size")}}**
- **{{cssxref("width")}}**
- **{{cssxref("background-color")}}**
- **{{cssxref("color")}}**
- **{{cssxref("border")}}**

> **Advertencia:** Si una propiedad es desconocida o si un valor no es válido para una propiedad determinada, la declaración se considera _inválida_ y el motor CSS del navegador la ignora por completo.

> **Advertencia:** En CSS (y otros estándares web) se ha acordado establecer como estándar la ortografía en inglés de los EE. UU. para solucionar las incertidumbres idiomáticas. Por ejemplo, _siempre_ hay que escribir `color`. Si se escribe `colour`, no funcionará.

### Las funciones

Si bien la mayoría de valores son palabras clave relativamente simples o valores numéricos, es posible que algunos valores tomen la forma de una función. Un ejemplo sería la función `calc()`. Esta función te permite hacer operaciones matemáticas sencillas desde tu CSS, por ejemplo:

```html
<div class="outer">
  <div class="box">La caja interior es del 90% - 30px.</div>
</div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

Esto se traduce así:

{{EmbedLiveSample('calc_example', '100%', 200)}}

## Ejemplo

Una función consta del nombre de la función y, a continuación, unos paréntesis entre los que se colocan los valores permitidos para esa función. En el caso del ejemplo `calc()` anterior, pedimos que el ancho de esta caja sea del 90% del ancho del bloque que la contiene, menos 30 píxeles. Esto no es algo que podamos calcular con anticipación y simplemente introducir el valor en el CSS, ya que no sabemos cuál será el 90%. Como con todos los valores, la página correspondiente del proyecto MDN tendrá ejemplos de uso para que puedas ver cómo funciona.

Otro ejemplo serían los diversos valores para {{cssxref ("transform")}}, como `rotate()`.

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

El resultado del código anterior se ve así:

{{EmbedLiveSample('transform_example', '100%', 200)}}

**Prueba a buscar diferentes valores de las siguientes propiedades y escribe reglas CSS que se apliquen a diferentes elementos HTML:**

- **{{cssxref("transform")}}**
- **{{cssxref ("background-image")}}, en particular a valores de gradiente**
- **{{cssxref("color")}}, en particular a valores rgb/rgba/hsl/hsla**

## @rules

Las [`@rules`](/es/docs/Web/CSS/At-rule) (leído "at-rules" en inglés) dan al CSS algunas instrucciones sobre cómo comportarse. Algunas `@rules` son simples, con el nombre de la regla y un valor. Por ejemplo, para importar una hoja de estilo adicional a tu hoja de estilo CSS principal, puedes usar `@import`:

```css
@import "styles2.css";
```

Una de las `@rules` más comunes con las que te encontrarás es `@media`, que permite usar [consultas a medios](/es/docs/Web/CSS/Media_Queries) para aplicar CSS solo cuando se dan ciertas condiciones (por ejemplo, cuando la resolución de la pantalla supera un valor determinado o la anchura supera un valor concreto).

En el CSS que se muestra a continuación, tenemos una hoja de estilo que le da al elemento `<body>` un color de fondo rosado. Sin embargo, luego usamos `@media` para crear una sección de nuestra hoja de estilo que solo se aplicará en los navegadores con una ventana gráfica de más de 30em de ancho. Si el navegador es más ancho que 30em, el color de fondo será azul.

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

Encontrarás otras `@rules` a lo largo de estas lecciones.

**Prueba a añadir una consulta a medios en tu CSS que cambie los estilos según el ancho de la ventana gráfica. Cambia el ancho de la ventana de tu navegador para ver el resultado.**

## Abreviaturas

Algunas propiedades como {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} y {{ cssxref("margin")}} se llaman **propiedades abreviadas**. Esto se debe a que permiten establecer varios valores de propiedad en una sola línea, lo que ahorra tiempo y ordena el código.

Por ejemplo, esta línea:

```css
/* En propiedades abreviadas con 4 valores, como margin y padding (relleno), los valores se aplican
   según el orden: arriba, derecha, abajo e izquierda (en sentido horario desde la parte superior). También hay otros
   tipos de abreviaturas, como las propiedades abreviadas con 2 valores que establecen el relleno/margen,
   arriba/abajo, y luego izquierda/derecha */
padding: 10px 15px 15px 5px;
```

Hace lo mismo que todas estas juntas:

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

Mientras que esta línea:

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

Hace lo mismo que todas estas juntas:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-scroll: fixed;
```

Ahora mismo no pretendemos enseñarlos exhaustivamente: encontrarás muchos ejemplos más adelante en el curso. Te aconsejamos que busques los nombres de las propiedades abreviadas en nuestra [referencia CSS](/es/docs/Web/CSS/Reference) para obtener más información.

**Prueba a añadir las declaraciones anteriores a tu CSS para ver cómo afecta al estilo de tu HTML. Experimenta con diferentes valores.**

> **Advertencia:** Si bien las propiedades abreviadas a menudo permiten ahorrarte valores, luego restablecerán a sus valores iniciales cualquier valor que no incluyas. Esto asegura que se use un conjunto de valores razonable. Sin embargo, puede resultar confuso si esperas que la propiedad abreviada solo cambie los valores que has introducido.

## Comentarios

Al igual que con el HTML, te recomendamos que hagas comentarios en tu CSS para que te ayuden a comprender cómo funciona su código cuando vuelvas a utilizarlo al cabo de varios meses, así como para ayudar a otros que vayan a trabajar con él a entenderlo.

Los comentarios en el CSS comienzan con `/*` y terminan con `*/`. En el bloque de código que encontrarás a continuación, hemos usado comentarios para marcar el inicio de las diferentes secciones de código. Esto es útil para ayudarnos a movernos por la base de código a medida que aumenta: puedes buscar los comentarios en tu editor de código.

```css
/* con elementos básicos de aplicación de estilo */
/* -------------------------------------------------------------------------------------------- */
body {
  font:
    1em/150% Helvética,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* Prestemos especial atención al tamaño de fuente global. En una pantalla o una ventana grande,
     aumentamos el tamaño de la fuente para conseguir una mejor legibilidad */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* Familiarización con algunos elementos anidados específicos en el DOM */
/* -------------------------------------------------------------------------------------------- */
div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

Los comentarios también son útiles para _comentar_ temporalmente ciertas partes del código con fines de prueba, por ejemplo, si tratas de encontrar qué parte de tu código causa un error. En el siguiente ejemplo, hemos comentado las reglas para el selector `.special`.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

**Añade algunos comentarios al CSS para acostumbrarte a usarlos.**

## Espacio en blanco

Por espacio en blanco nos referimos los espacios en sí, tabuladores y retornos de carro o intros. De la misma manera que el HTML, el navegador ignora el espacio en blanco dentro del CSS. El valor del espacio en blanco es que puede mejorar la legibilidad.

En el siguiente ejemplo, cada declaración (y el principio/fin de regla) está en una línea propia; esta es posiblemente una buena forma de escribir el CSS, ya que facilita el mantenimiento y la comprensión:

```css
body {
  font:
    1em/150% Helvética,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

Podrías escribir exactamente el mismo CSS eliminando la mayoría de los espacios en blanco; este bloque de código es funcionalmente idéntico al primer ejemplo, pero seguro que estarás de acuerdo en que resulta algo más difícil de leer:

```css
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}
@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}
div p {
  margin: 0;
  padding: 1em;
}
div p + p {
  padding-top: 0;
}
```

La manera que elijas para disponer el código suele ser una preferencia personal, aunque cuando comiences a trabajar en equipo es posible que encuentres que el equipo ya tiene su propia guía de estilo que especifica una convención acordada a seguir.

> **Advertencia:** Aunque los valores de las declaraciones CSS se separan por espacios, **los nombres de propiedad nunca tienen espacios**.

Por ejemplo, las siguientes declaraciones de CSS son válidas:

```css
margin: 0 auto;
padding-left: 10px;
```

Pero las siguientes no lo son:

```css
margin: 0auto;
padding- left: 10px;
```

¿Ves los errores de espaciado? `0auto` no se reconoce como un valor válido para la propiedad de `margin` (`0` y `auto` son dos valores separados) y el navegador no reconoce `padding-` como una propiedad válida. El valor correcto de propiedad (`padding-left`) se ha separado por un espacio perdido.

Debes asegurarte siempre de separar los valores distintos entre sí por al menos un espacio, pero mantén los nombres de las propiedades y los valores de las propiedades juntos.

**Prueba a jugar con los espacios en blanco de tu CSS y observa qué es lo que se rompe y lo que no.**

## ¿Qué sigue?

Resulta útil entender un poco cómo el navegador toma tu HTML y tu CSS y los convierte en una página web, razón por la cual en el próximo artículo ([Cómo funciona el CSS](/es/docs/Learn/CSS/First_steps/How_CSS_works)) veremos ese proceso.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

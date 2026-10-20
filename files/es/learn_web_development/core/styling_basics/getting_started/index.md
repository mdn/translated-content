---
title: Primeros pasos con CSS
short-title: Primeros pasos con CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

En este artículo tomarás un documento HTML sencillo y le aplicarás CSS, aprendiendo por el camino algunos detalles prácticos del lenguaje. También repasaremos algunas características adicionales de la sintaxis de CSS que todavía no has visto.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Tener instalado el software básico</a>, conocimientos básicos sobre el
        <a href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">manejo de archivos</a> y conceptos básicos de HTML (estudia
        <a href="/es/docs/Learn_web_development/Core/Structuring_content">Introducción a HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Aplicar CSS a un documento HTML.</li>
          <li>Experiencia práctica escribiendo CSS básico.</li>
          <li>Conocimiento práctico de los tipos de selectores y los combinadores fundamentales.</li>
          <li>El concepto de estado aplicado a CSS.</li>
          <li>Familiaridad con otras características de la sintaxis de CSS, como las reglas-at, las funciones, las propiedades abreviadas y los espacios en blanco.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Empezar con algo de HTML

Nuestro punto de partida es un documento HTML. Si quieres trabajar en tu propia computadora, puedes copiar el código de abajo. Guárdalo como `index.html` en una carpeta de tu equipo.

```html live-sample___unstyled
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Primeros pasos con CSS</title>
  </head>

  <body>
    <h1>Soy un encabezado de nivel uno</h1>

    <p>
      Este es un párrafo de texto. En el texto hay un
      <span>elemento span</span> y también un
      <a href="https://example.com">enlace</a>.
    </p>

    <p>
      Este es el segundo párrafo, que contiene un elemento <em>enfatizado</em>.
    </p>

    <ul>
      <li>Elemento <span>uno</span></li>
      <li>Elemento dos</li>
      <li>Elemento <em>tres</em></li>
    </ul>
  </body>
</html>
```

Se ve así:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> Si lees esto en un dispositivo o un entorno en el que no puedes crear archivos fácilmente, no te preocupes: haz clic en el botón «Play» del ejemplo en vivo de arriba para abrirlo en el MDN Playground. Allí puedes editar el código CSS y HTML como se indica más abajo y ver los resultados combinados en vivo.

## Añadir CSS a nuestro documento

Lo primero que tenemos que hacer es indicar al documento HTML que tenemos algunas reglas CSS que queremos que use. Hay tres formas distintas de aplicar CSS a un documento HTML con las que te encontrarás a menudo: hojas de estilo externas, hojas de estilo internas y estilos en línea. Veámoslas ahora.

Si sigues este artículo con el MDN Playground, no podrás seguir los pasos de esta sección de la misma forma que quienes escriben el código en su computadora local. Esto se debe a que el MDN Playground se encarga de añadir el CSS al HTML de forma implícita en segundo plano. Aun así, deberías leer la sección para conocer su contenido.

### Hojas de estilo externas

Una hoja de estilo externa contiene CSS en un archivo independiente con la extensión `.css`. Es el método más habitual y útil de llevar CSS a un documento. Puedes enlazar un solo archivo CSS a varias páginas web y darles estilo a todas con la misma hoja de estilo CSS.

Crea un archivo en la misma carpeta que tu documento HTML y guárdalo como `styles.css`.

Para enlazar `styles.css` con `index.html`, añade la siguiente línea en algún lugar dentro del {{htmlelement("head")}} del documento HTML:

```html
<link rel="stylesheet" href="styles.css" />
```

Este elemento {{htmlelement("link")}} indica al navegador que tenemos una hoja de estilo, mediante el atributo `rel`, y la ubicación de esa hoja de estilo como valor del atributo `href`. Puedes comprobar que el CSS funciona añadiendo una regla a `styles.css`. Con tu editor de código, añade lo siguiente a tu archivo CSS:

```css
h1 {
  color: red;
}
```

Guarda tus archivos HTML y CSS y vuelve a cargar la página en un navegador web. El encabezado de nivel uno de la parte superior del documento debería ser ahora rojo. Si es así, ¡enhorabuena!: has aplicado correctamente algo de CSS a un documento HTML. Si no, comprueba con cuidado que lo hayas escrito todo correctamente.

#### Ubicar las hojas de estilo en distintos lugares

En el ejemplo anterior, el archivo CSS está en la misma carpeta que el documento HTML, pero podrías ponerlo en otro lugar y ajustar la ruta (igual que con las [imágenes HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Estos son tres ejemplos:

```html
<!-- En un subdirectorio llamado styles dentro del directorio actual -->
<link rel="stylesheet" href="styles/style.css" />

<!-- En un subdirectorio llamado general, que está en un subdirectorio llamado styles, dentro del directorio actual -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Sube un nivel de directorio y después entra en un subdirectorio llamado styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Hojas de estilo internas

Las hojas de estilo internas están dentro de elementos {{htmlelement("style")}}, que van dentro del {{htmlelement("head")}} del HTML. Vamos a crear una ahora.

En tu documento HTML, añade el siguiente fragmento en algún lugar entre las etiquetas `<head>` y `</head>`:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Guarda y recarga, y deberías ver que todos tus párrafos se vuelven morados.

En algunas circunstancias, las hojas de estilo internas pueden ser útiles. Por ejemplo, quizá trabajas con un sistema de gestión de contenidos que no te permite modificar los archivos CSS externos.

Sin embargo, en los sitios con más de una página, las hojas de estilo internas son menos eficientes que las externas. Para aplicar un estilo CSS uniforme a varias páginas con hojas de estilo internas, tienes que repetir la hoja de estilo interna en cada página web. Esta pérdida de eficiencia también afecta al mantenimiento del sitio. Con el CSS en hojas de estilo internas, existe el riesgo de que incluso un cambio de estilo sencillo exija editar varias páginas web.

Antes de seguir, quita el elemento `<style>` y su contenido de tu HTML de ejemplo.

### Estilos en línea

Los estilos en línea son declaraciones CSS que afectan a un solo elemento HTML y van dentro de un atributo `style`. Vamos a probar a implementar uno ahora.

Añade un atributo `style` al elemento {{htmlelement("span")}} de tu HTML, para que quede así:

```html
<span style="color: purple; font-weight: bold">elemento span</span>
```

Guarda y recarga, y deberías ver que solo el texto dentro del `<span>` se vuelve morado y en negrita. Prueba a añadir más declaraciones dentro de tu atributo `style` (separadas por punto y coma), o más atributos `style` en otros elementos.

Cuando termines de experimentar, quita todos tus atributos `style`.

**Evita usar CSS de esta forma siempre que sea posible.** Es una mala práctica. En primer lugar, es la implementación de CSS menos eficiente para el mantenimiento. Un cambio de estilo podría exigir varias ediciones dentro de una misma página web. En segundo lugar, el CSS en línea mezcla el código de presentación (CSS) con el HTML y el contenido, lo que hace que todo sea más difícil de leer y entender. Separar el código y el contenido facilita el mantenimiento a todas las personas que trabajan en el sitio web.

Quizá tengas que recurrir a los estilos en línea si tu entorno de trabajo es muy restrictivo. Por ejemplo, quizá tu CMS solo te permita editar el cuerpo del HTML. También puedes ver muchos estilos en línea en los correos electrónicos HTML, para conseguir compatibilidad con el mayor número posible de clientes de correo. También es bastante habitual establecer estilos en línea al aplicar estilos de forma dinámica con JavaScript.

## Usar los selectores habituales

En esta sección haremos un breve recorrido por algunos de los tipos de selectores más habituales con los que te encontrarás.

### Seleccionar elementos HTML

Al poner rojo nuestro encabezado, ya hemos demostrado que podemos seleccionar un elemento HTML y darle estilo. Para ello usamos un **selector de elemento** (también llamado **selector de tipo**), que es un selector que coincide directamente con el nombre de un elemento HTML. Para seleccionar todos los párrafos del documento, usarías el selector `p`. Para poner verdes todos los párrafos, usarías:

```css
p {
  color: green;
}
```

Puedes seleccionar varios selectores a la vez separándolos con una coma. Si quisieras que todos los párrafos y todos los elementos de lista fueran verdes, tu regla sería así:

```css
p,
li {
  color: green;
}
```

Pruébalo en el ejemplo de abajo (haz clic en «Play») o en tu copia local:

```html hidden live-sample___started-types
<h1>Soy un encabezado de nivel uno</h1>

<p>
  Este es un párrafo de texto. En el texto hay un <span>elemento span</span> y
  también un <a href="http://example.com">enlace</a>.
</p>

<p>Este es el segundo párrafo, que contiene un elemento <em>enfatizado</em>.</p>

<ul>
  <li>Elemento uno</li>
  <li>Elemento dos</li>
  <li>Elemento <em>tres</em></li>
</ul>
```

```css live-sample___started-types
h1 {
  color: red;
}

p,
li {
}
```

{{EmbedLiveSample("started-types", "", "240px")}}

La siguiente lección interactiva enseña conceptos básicos de CSS y ofrece algo de práctica.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~015" scrimtitle="Write your first lines of CSS!"></scrim-inline>

### Añadir una clase

Hasta ahora hemos dado estilo a los elementos según los nombres de sus elementos HTML. Esto funciona siempre que quieras que todos los elementos de ese tipo de tu documento tengan el mismo aspecto. Para seleccionar un subconjunto de elementos sin cambiar los demás, puedes añadir una `class` a tu elemento HTML y seleccionar esa clase en tu CSS.

1. En tu documento HTML, añade un [atributo class](/es/docs/Web/HTML/Reference/Global_attributes/class) al segundo elemento de la lista. Tu lista quedará así:

   ```html
   <ul>
     <li>Elemento uno</li>
     <li class="special">Elemento dos</li>
     <li>Elemento <em>tres</em></li>
   </ul>
   ```

2. En tu CSS, puedes seleccionar la clase `special` creando un selector que empiece por un punto. Añade lo siguiente a tu archivo CSS:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Guarda y recarga para ver el resultado.

Ahora puedes aplicar la clase `special` a otros elementos de tu página que quieras que tengan el mismo aspecto que este elemento de la lista. Añade la clase `special` al `<span>` que hay dentro del párrafo y vuelve a cargar la página: también debería verse naranja y en negrita.

### Dar estilo a los elementos según su ubicación en el documento

A veces querrás que algo tenga un aspecto distinto según dónde esté en el documento. Hay varios selectores que pueden ayudarte, pero por ahora solo veremos un par. En nuestro documento hay dos elementos `<em>`: uno dentro de un párrafo y otro dentro de un elemento de lista. Para seleccionar solo un `<em>` que esté anidado dentro de un elemento `<li>`, puedes usar un selector llamado **combinador de descendientes**, que consiste en un espacio entre otros dos selectores.

Añade la siguiente regla a tu hoja de estilo:

```css
li em {
  color: rebeccapurple;
}
```

Este selector seleccionará cualquier elemento `<em>` que sea descendiente de un `<li>`. Así que, en tu documento de ejemplo, deberías ver que el `<em>` del tercer elemento de la lista ahora es morado, pero el del párrafo no cambia.

Otra cosa que quizá quieras probar es dar estilo a un párrafo cuando va justo después de un encabezado del mismo nivel jerárquico en el HTML. Para ello, pon un `+` (un **combinador de hermano siguiente**) entre los selectores.

Prueba a añadir también esta regla a tu hoja de estilo:

```css
h1 + p {
  font-size: 200%;
}
```

El ejemplo en vivo de abajo incluye las dos reglas anteriores. Prueba a añadir una regla para que un span sea rojo si está dentro de un párrafo. Sabrás que lo has hecho bien porque el span del primer párrafo será rojo, pero el del primer elemento de la lista no cambiará de color.

```html hidden live-sample___started-combinators
<h1>Soy un encabezado de nivel uno</h1>

<p>
  Este es un párrafo de texto. En el texto hay un <span>elemento span</span> y
  también un <a href="http://example.com">enlace</a>.
</p>

<p>Este es el segundo párrafo, que contiene un elemento <em>enfatizado</em>.</p>

<ul>
  <li>Elemento <span>uno</span></li>
  <li>Elemento dos</li>
  <li>Elemento <em>tres</em></li>
</ul>
```

```css live-sample___started-combinators
li em {
  color: rebeccapurple;
}

h1 + p {
  font-size: 200%;
}
```

{{EmbedLiveSample("started-combinators", "", "340px")}}

> [!NOTE]
> Como ves, CSS nos da varias formas de seleccionar elementos, ¡y hasta ahora solo hemos arañado la superficie! Más adelante en el curso veremos con detalle todos estos selectores y muchos más.

### Dar estilo a los elementos según su estado

El último tipo de estilo que veremos en este tutorial es la posibilidad de dar estilo a los elementos según su estado. Un ejemplo sencillo es dar estilo a los enlaces. Para dar estilo a un enlace, tenemos que seleccionar el elemento [`<a>`](/es/docs/Web/HTML/Reference/Elements/a) (ancla). Este tiene distintos estados según si no se ha visitado, si se ha visitado, si el puntero está encima, si tiene el foco mediante el teclado o si se está haciendo clic en él (se está activando). Puedes usar CSS para seleccionar estos distintos estados: el CSS de abajo pone en rosa los enlaces no visitados y en verde los visitados.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Puedes cambiar el aspecto del enlace cuando el usuario pasa el puntero por encima, por ejemplo, quitando el subrayado, lo que se consigue con la siguiente regla:

```css
a:hover {
  text-decoration: none;
}
```

En el ejemplo de abajo, puedes probar distintos valores para los distintos estados de un enlace. Le hemos añadido las reglas anteriores y ahora nos damos cuenta de que el rosa es bastante claro y difícil de leer: ¿por qué no lo cambias por un color mejor? ¿Puedes poner los enlaces en negrita?

```html hidden live-sample___started-states
<h1>Soy un encabezado de nivel uno</h1>

<p>
  Este es un párrafo de texto. En el texto hay un <span>elemento span</span> y
  también un <a href="http://example.com">enlace</a>.
</p>

<p>Este es el segundo párrafo, que contiene un elemento <em>enfatizado</em>.</p>

<ul>
  <li>Elemento uno</li>
  <li>Elemento dos</li>
  <li>Elemento <em>tres</em></li>
</ul>
```

```css live-sample___started-states
a:link {
  color: pink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("started-states", "", "240px")}}

Hemos quitado el subrayado de nuestro enlace al pasar el puntero por encima. Podrías quitar el subrayado en todos los estados de un enlace. Sin embargo, conviene recordar que en un sitio real quieres asegurarte de que los visitantes sepan que un enlace es un enlace. Dejar el subrayado puede ser una pista importante para que la gente se dé cuenta de que se puede hacer clic en un texto dentro de un párrafo: es el comportamiento al que está acostumbrada. Como con todo en CSS, tus cambios pueden hacer que el documento sea menos accesible; intentaremos señalar los posibles problemas en los lugares adecuados.

> [!NOTE]
> A menudo verás que se menciona la [accesibilidad](/es/docs/Learn_web_development/Core/Accessibility) en estas lecciones y en todo MDN. Cuando hablamos de accesibilidad, nos referimos a que nuestras páginas web tienen que ser comprensibles y usables por todo el mundo, ya use una computadora con ratón o panel táctil, un teléfono con pantalla táctil, navegue solo con el teclado o con un lector de pantalla, que lee en voz alta el contenido del documento.

### Combinar selectores y combinadores

Vale la pena señalar que puedes combinar varios selectores y combinadores. Por ejemplo:

```css
/* selecciona cualquier <span> que esté dentro de un <p>, que a su vez está dentro de un <article> */
article p span {
}

/* selecciona cualquier <p> que vaya justo después de un <ul>, que a su vez va justo después de un <h1> */
h1 + ul + p {
}
```

También puedes combinar varios tipos. Prueba a añadir lo siguiente a tu código:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Esto dará estilo a cualquier elemento con la clase `special` que esté dentro de un `<p>` que vaya justo después de un `<h1>`. ¡Uf! Debería seleccionar el elemento `<span class="special">elemento span</span>` de tu código.

No te preocupes si ahora parece complicado: pronto le cogerás el truco a medida que escribas más CSS.

## Otras características de la sintaxis de CSS

Ahora que hemos jugado con algunas características de CSS, te daremos un recorrido general por algunas de las otras características de la sintaxis de CSS que encontrarás durante el curso. Si quieres consultar más detalles sobre cualquiera de ellas, puedes probar a escribir el nombre de la característica en el campo de búsqueda de la parte superior de esta página, o explorar la [referencia de CSS](/es/docs/Web/CSS/Reference) de MDN.

Para experimentar con los fragmentos de código de cada caso, puedes añadir el HTML y el CSS proporcionados al ejemplo local o a la instancia del MDN Playground con la que trabajaste antes.

### Funciones

Aunque la mayoría de los valores son palabras clave o valores numéricos relativamente sencillos, hay algunos valores que tienen forma de función.

#### La función calc()

Un ejemplo sería la función `calc()`, que puede hacer operaciones matemáticas sencillas dentro de CSS:

```html
<div class="outer"><div class="box">La caja interior es 90% - 30px.</div></div>
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

Se ve así:

{{EmbedLiveSample('la_función_calc', '100%', 200)}}

Una función consta del nombre de la función y de unos paréntesis que encierran los valores de la función. En el caso del ejemplo de `calc()` anterior, los valores definen que el ancho de esta caja sea el 90 % del ancho del bloque contenedor menos 30 píxeles.

#### Funciones de transformación

Otro ejemplo serían los distintos valores de la propiedad {{cssxref("transform")}}, como `rotate()`.

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

El resultado del código anterior es este:

{{EmbedLiveSample('funciones_de_transformación', '100%', 200)}}

Consulta los distintos valores de las propiedades que se indican a continuación. Prueba a escribir reglas CSS que den estilo a distintos elementos HTML con las siguientes funciones:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, en particular los valores de degradado
- {{cssxref("color")}}, en particular los valores rgb y hsl

### Reglas-at (@rules)

Las [reglas-at](/es/docs/Web/CSS/Guides/Syntax/At-rules) de CSS (en inglés _@rules_, que se pronuncia «at-rules») dan instrucciones sobre cómo debe comportarse el CSS. Una regla-at habitual con la que probablemente te encontrarás es `@media`, que se usa para crear [consultas de medios](/es/docs/Web/CSS/Guides/Media_queries). Las consultas de medios usan lógica condicional para aplicar estilos CSS.

En el ejemplo de abajo, la hoja de estilo define un fondo rosa predeterminado para el elemento `<body>`. Sin embargo, a continuación hay una consulta de medios que establece un fondo azul en el elemento `<body>` si el viewport del navegador mide más de `30em` de ancho.

```css
body {
  background-color: pink;
}

@media (width >= 30em) {
  body {
    background-color: blue;
  }
}
```

### Propiedades abreviadas

Algunas propiedades, como {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}} y {{cssxref("margin")}}, se llaman **propiedades abreviadas**. Esto se debe a que las propiedades abreviadas establecen varios valores en una sola línea.

Por ejemplo, esta única línea de código:

```css
/* En las propiedades abreviadas de 4 valores, como padding y margin, los valores se aplican
   en el orden arriba, derecha, abajo, izquierda (en el sentido de las agujas del reloj desde arriba). También hay
   otros tipos de abreviaturas, por ejemplo, las de 2 valores, que establecen padding/margin
   para arriba/abajo y después para izquierda/derecha */
padding: 10px 15px 15px 5px;
```

equivale a estas cuatro líneas de código:

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

Esta única línea:

```css
background: red url("bg-graphic.png") 10px 10px repeat-x fixed;
```

equivale a estas cinco líneas:

```css
background-color: red;
background-image: url("bg-graphic.png");
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Más adelante en el curso te encontrarás con muchos otros ejemplos de propiedades abreviadas. Por ahora, prueba a usar las declaraciones anteriores (u otras que conozcas) en tu propio código para familiarizarte con su funcionamiento.

### Comentarios en CSS

Como en cualquier trabajo de programación, lo recomendable es escribir comentarios en tu CSS. Te ayudan a recordar cómo funciona el código cuando vuelvas más adelante para hacer correcciones o mejoras. También ayudan a otras personas a entender el código.

Los comentarios de CSS empiezan con `/*` y terminan con `*/`. En el ejemplo de abajo, los comentarios marcan el inicio de distintas secciones de código. Esto ayuda a moverse por el código a medida que crece. Con este tipo de comentarios, buscar comentarios en tu editor de código se convierte en una forma eficaz de encontrar una sección de código.

```css
/* Estilos básicos de los elementos */
/* ---------------------------------- */
body {
  font:
    1em/150% "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (width >= 70em) {
  /* Aumenta el tamaño de fuente global en pantallas o ventanas más grandes
     para mejorar la legibilidad */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* Estilos de elementos concretos anidados en el DOM */
div p,
#id::first-line {
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

«Comentar» código también es útil para desactivar temporalmente secciones de código al hacer pruebas. En el ejemplo de abajo, las reglas de `.special` están desactivadas porque se ha «comentado» el código.

```css
/* .special {
  color: red;
} */

p {
  color: blue;
}
```

Prueba a añadir comentarios a tu CSS.

### Espacios en blanco en CSS

Los espacios en blanco son los espacios, las tabulaciones y los saltos de línea. Igual que los navegadores ignoran los espacios en blanco adicionales en HTML, también ignoran los espacios en blanco adicionales en CSS. La ventaja de los espacios en blanco es que hacen que el código sea más fácil de leer.

En el ejemplo de abajo, cada declaración (y el inicio y el final de cada regla) tiene su propia línea. Podría decirse que es una buena forma de escribir CSS, porque hace que sea más fácil de mantener y entender.

```css
body {
  font:
    1em/150% "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (width >= 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}
```

El siguiente ejemplo muestra el mismo CSS en un formato más comprimido, sin ningún espacio en blanco adicional. Aunque los dos ejemplos funcionan igual, el de abajo es más difícil de leer.

```css-nolint
body{font:1em/150% "Helvetica","Arial",sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Ten en cuenta que algunos cambios en los espacios en blanco pueden provocar errores. Los nombres de las propiedades nunca contienen espacios en blanco, y los valores de las propiedades que esperan espacios en blanco entre varios valores no serán válidos si se quitan esos espacios. Por ejemplo, estas declaraciones son CSS válido:

```css
margin: 0 auto;
padding-left: 10px;
```

Pero estas declaraciones no son válidas:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

¿Ves los errores de espaciado? En primer lugar, `0auto` no se reconoce como valor válido de la propiedad `margin`. La entrada `0auto` debería ser dos valores separados: `0` y `auto`. En segundo lugar, el navegador no reconoce `padding-` como propiedad válida. El nombre correcto de la propiedad (`padding-left`) no lleva ningún espacio.

Asegúrate siempre de separar los valores distintos entre sí con al menos un espacio. Mantén los nombres y los valores de las propiedades juntos, como cadenas continuas.

Para descubrir cómo el espaciado puede romper el CSS, prueba a jugar con los espacios en tu CSS de prueba.

## Resumen

En este artículo hemos visto varias formas de dar estilo a un documento con CSS. Iremos ampliando estos conocimientos a lo largo del resto de las lecciones. Sin embargo, ya sabes lo suficiente para dar estilo al texto y aplicar CSS según distintas formas de seleccionar los elementos del documento.

A continuación, te propondremos un desafío para poner a prueba tus nuevos conocimientos.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

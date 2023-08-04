---
title: Dar estilo a los enlaces
slug: Learn/CSS/Styling_text/Styling_links
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

A la hora de dar estilo a los [enlaces](/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks), es importante comprender cómo utilizar las pseudoclases para diseñar los estados de un enlace de manera efectiva y cómo diseñar enlaces para su uso en diversas funciones de interfaz comunes, como menús y pestañas de navegación. Veremos todos estos temas en este artículo.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >), conocimientos básicos de CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>),
        <a href="/es/docs/Learn/CSS/Styling_text/Fundamentals"
          >nociones de aplicación de estilo con CSS a textos y tipos de letra</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a dar formato a los estados de un enlace y a usarlos de manera
        efectiva en algunas funciones de interfaz de usuario comunes, como los
        menús de navegación.
      </td>
    </tr>
  </tbody>
</table>

## Echemos un vistazo a algunos enlaces

Analizamos cómo se implementan los enlaces en tu HTML de acuerdo con las buenas prácticas de [Creación de hipervínculos](/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks). En este artículo desarrollaremos estos conocimientos y te mostraremos las buenas prácticas del diseño de enlaces.

### Los estados de un enlace

Lo primero que hay que entender es el concepto de estados de un enlace (diferentes estados en los que pueden estar los enlaces, que pueden diseñarse usando diferentes [pseudoclases](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS)):

- **Link (no visitado)**: El estado predeterminado que presenta un enlace cuando no está en ningún otro estado. Se puede especificar usando la pseudoclase {{cssxref(":link")}}.
- **Visited**: Un enlace cuando ya se ha visitado (está grabado en el historial del navegador); se le aplica otro formato con la pseudoclase {{cssxref(":visited")}}.
- **Hover**: Un enlace cuando se le pasa el cursor por encima; se le aplica otro formato con la pseudoclase {{cssxref(":hover")}}.
- **Focus**: Un enlace cuando tiene el foco (por ejemplo, se salta a este con la tecla <kbd>Tab</kbd> del teclado o se le da el foco mediante programación usando {{domxref("HTMLElement.focus()")}}); se le aplica un formato diferente con la pseudoclase {{cssxref(":focus")}}.
- **Active**: Un enlace cuando se activa (por ejemplo, se hace clic encima); se le aplica un formato diferente con la pseudoclase {{cssxref(":active")}}.

### Estilos predeterminados

El ejemplo siguiente ilustra cómo se comportará un enlace por defecto (el CSS simplemente amplía y centra el texto para que destaque más).

```html
<p><a href="#">Un enlace simple</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('Estilos_predeterminados', '100%', 120) }}

> **Nota:** Todos los enlaces que hay en los ejemplos de esta página son simulados, encontrarás un símbolo `#` (almohadilla) en el lugar de una URL real. Esto es porque si incluyéramos enlaces reales, los ejemplos quedarían interrumpidos al hacer clic (daría error, o se cargaría una página en el ejemplo incrustado de la que no podrías volver atrás). `#` solo establece enlaces dentro de la misma página.

A medida que explores los estilos predeterminados, observarás algunas cosas:

- Los enlaces están subrayados.
- Los enlaces no visitados se ven de color azul.
- Los enlaces visitados se ven de color morado.
- Al pasar el puntero del ratón sobre un enlace, cambia a un pequeño icono en forma de mano.
- Los enlaces que tienen el foco presentan un contorno alrededor: deberías poder saltar por los enlaces de esta página con el teclado pulsando la tecla de tabulación (en Mac, es posible que necesites habilitar la opción _Acceso total por teclado: Todos los controles_ presionando <kbd>Ctrl</kbd> + <kbd>F7</kbd> para que funcione).
- Los enlaces activos se muestran de color rojo (intenta mantener el cursor sobre el enlace mientras haces clic).

Curiosamente, estos estilos predeterminados son casi los mismos que se utilizaban al inicio de los navegadores en la década de 1990. Esto se debe a que los usuarios conocen y esperan que sea de esta forma. Podría confundir a mucha gente que los enlaces se mostrasen de manera diferente. Esto no quiere decir que no puedas cambiar el formato de los enlaces, solo que no deberías alejarte mucho de la conducta esperada. Al menos deberías:

- Subrayar los enlaces, pero no otros elementos. Si no quieres hacerlo, al menos destacarlos de alguna otra forma.
- Hacer que reaccionen de alguna manera cuando se les pasa el cursor por encima, y de una manera algo diferente cuando se activan.

Los estilos por defecto se pueden desactivar/cambiar usando las propiedades CSS siguientes:

- {{cssxref("color")}} para el color del texto.
- {{cssxref("cursor")}} para el estilo del cursor (no debes deshabilitar esta opción a menos que tengas una muy buena razón para hacerlo).
- {{cssxref("outline")}} para el contorno del texto (un contorno es similar a un borde, la única diferencia es que el borde ocupa un espacio en la caja y el contorno solo se solapa sobre el fondo). El contorno es una ayuda de accesibilidad útil, así que piénsatelo bien antes de desactivar esta opción; al menos deberías plantear dos estilos para los estados de pasar el puntero por encima y de tener el foco.

> **Nota:** No estás limitado a las propiedades anteriores para diseñar tus enlaces; tienes libertad para usar cualquier propiedad que te guste. ¡Solo trata de que no resulte descabellado!

### Dar formato a algunos enlaces

Ahora que hemos visto los estados predeterminados, veamos un conjunto típico de estilos de enlace.

Para empezar, escribiremos nuestro conjunto de reglas vacío:

```css
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}
```

Este orden es importante porque los estilos de enlace se construyen sobre los anteriores. Por ejemplo, los estilos de la primera regla se aplicarán a todas las reglas siguientes, y cuando activas un enlace también pasas con el cursor por encima. Si los pones en un orden incorrecto, no funcionarán adecuadamente. Para recordar este orden, puedes intentar utilizar una fórmula nemotécnica como **L**o**V**e **F**ears **HA**te.

Ahora vamos a añadir algo más de información para darles formato:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437a16;
}

a:focus {
  border-bottom: 1px solid;
  background: #bae498;
}

a:hover {
  border-bottom: 1px solid;
  background: #cdfeaa;
}

a:active {
  background: #265301;
  color: #cdfeaa;
}
```

También proporcionaremos algún ejemplo de HTML al que aplicar CSS:

```html
<p>
  Dispones de varios navegadores, como <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a> y <a href="#">Microsoft Edge</a>.
</p>
```

Poner los dos juntos nos da este resultado:

{{ EmbedLiveSample('Dar_formato_a_algunos_enlaces', '100%', 150) }}

¿Qué hemos hecho aquí? Sin duda tiene un aspecto diferente al estilo predeterminado, pero todavía ofrece una experiencia lo suficientemente familiar como para que los usuarios sepan de qué se trata:

- Las dos primeras reglas no presentan gran interés en esta explicación.
- La tercera regla usa el selector `a` para eliminar el subrayado de texto predeterminado y el contorno en el estado de foco (que de todos modos varía dependiendo del navegador), y añade una pequeña cantidad de área de relleno a cada enlace (todo esto se aclarará más adelante).
- A continuación, utilizamos los selectores `a:link` y `a:visited` para establecer un par de variaciones de color en los enlaces no visitados y visitados, para que se distingan.
- Las dos reglas siguientes usan `a:focus` y `a:hover` para establecer colores de fondo diferentes para los enlaces con el foco y los enlaces activados con el paso del cursor, y además un subrayado para que el enlace destaque aún más. Aquí destacamos dos aspectos:

  - El subrayado se ha creado usando {{cssxref("border-bottom")}} y no {{cssxref("text-decoration")}}, y es que algunas personas lo prefieren porque el primero tiene mejores opciones en cuanto a estilo, y se dibuja un poco más abajo, por lo que no pisa los trazos descendentes de la palabra que se subraya (por ejemplo, los trazos de la g o la y).
  - El valor {{cssxref ("border-bottom")}} se ha establecido en `1px solid` sin especificar ningún color. Así, el borde adopta el mismo color que el texto del elemento, lo que es útil en casos en los que el texto es de un color diferente en cada caso.

- Finalmente, `a:active` se usa para dar a los enlaces un esquema de color inverso mientras se activan, ¡para dejar claro que algo importante sucede!

### Aprendizaje activo: proporciona estilo a tus enlaces

En esta sesión de aprendizaje activo, queremos que tomes nuestro conjunto de reglas vacías y añadas tus propias declaraciones para lograr unos enlaces geniales. Da rienda suelta a tu imaginación. Estamos seguros de que puedes crear algo genial y tan funcional como nuestro ejemplo anterior.

Si te equivocas, puedes volver a empezar pulsando el botón _Reinicio_. Si te quedas encallado, pulsa el botón _Mostrar la solución_ para recuperar el ejemplo anterior.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>Entrada de HTML</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p> Hay varios navegadores disponibles, tales como <a href="#">Mozilla
 Firefox</a>, <a href="#">Google Chrome</a> y
<a href="#">Microsoft Edge</a>.</p></textarea
  >

  <h2>Entrada CSS</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
a {

}

a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}</textarea
  >

  <h2>Salida</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reinicio"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Mostrar la solución"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value =
    "p {\n font-size: 1.2rem;\n font-family: sans-serif;\n line-height: 1.4;\n}\n\na {\n outline: none;\n text-decoration: none;\n padding: 2px 1px 0;\n}\n\na:link {\n color: #265301;\n}\n\na:visited {\n color: #437A16;\n}\n\na:focus {\n border-bottom: 1px solid;\n background: #BAE498;\n}\n\na:hover {\n border-bottom: 1px solid;\n background: #CDFEAA;\n}\n\na:active {\n background: #265301;\n color: #CDFEAA;\n}";
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## Incluir iconos en los enlaces

Una práctica común es incluir iconos en los enlaces para proporcionar más de un indicador en cuanto a qué tipo de contenido apunta. Echemos un vistazo a un ejemplo muy simple que añade un icono a enlaces externos (enlaces que conducen a otros sitios web). Este icono suele parecerse a una pequeña flecha que sale de un cuadro; para este ejemplo, usaremos [este fantástico ejemplo de icons8.com](https://icons8.com/web-app/741/external-link).

Echemos un vistazo a algunos elementos HTML y CSS que nos van a proporcionar el efecto que queremos. En primer lugar, algunos elementos HTML sencillos para dar estilo:

```html
<p>
  Para obtener más información sobre el tiempo, visite nuestra
  <a href="http://#">página del tiempo</a>, mire la
  <a href="http://#">Wikipedia</a>, o cheque
  <a href="http://#">Extreme Science</a>.
</p>
```

A continuación, el CSS:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:focus,
a:hover {
  border-bottom: 1px solid;
}

a:active {
  color: red;
}

a[href*="http"] {
  background: url("external-link-52.png") no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

{{ EmbedLiveSample('Incluir_iconos_en_los_enlaces', '100%', 150) }}

¿Qué pasa aquí? Omitiremos la mayor parte del CSS, ya que es la misma información que has visto antes. Sin embargo, la última regla es interesante: insertamos una imagen de fondo personalizada en enlaces externos de una manera similar a como manejamos [viñetas personalizadas en los elementos de lista](/es/docs/Learn/CSS/Styling_text/Styling_lists#Uso_de_una_imagen_personalizada_como_vi%C3%B1eta) en el último artículo. Esta vez, sin embargo, utilizamos la propiedad abreviada {{cssxref("background")}} en lugar de las propiedades individuales. Establecemos la ruta a la imagen que queremos insertar, especificamos el valor `no-repeat` para que solo se inserte una copia, y luego especificamos la posición como al 100% a la derecha del contenido de texto y a 0 píxeles del extremo superior.

También usamos {{cssxref("background-size")}} para especificar el tamaño de la imagen de fondo (es útil tener un icono más grande y luego cambiar su tamaño de esta manera, según sea necesario para fines de diseño web adaptativo). Sin embargo, esto solo funciona con Internet Explorer 9 y versiones posteriores, por lo que si trabajas con navegadores antiguos, tendrás que cambiar el tamaño de la imagen e insertarla tal como es.

Finalmente, establecemos un área de relleno a la derecha ({{cssxref ("padding-right")}}) para los enlaces, para crear un espacio en que aparezca la imagen de fondo, de modo que no se superponga con el texto.

Un último apunte: ¿cómo seleccionamos solo los enlaces externos? Bueno, si escribes tus enlaces [HTML](/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks) de forma adecuada, solo deberías usar URL absolutos para los enlaces externos. Para enlazar con otras partes del mismo sitio web, resulta más eficiente usar enlaces relativos. Por lo tanto, el texto «http» solo debe aparecer en los enlaces externos y es posible seleccionarlos con un [selector de atributos](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS#Selectores_de_atributo): `a[href*="http"]` selecciona los elementos {{HTMLElement ( "a")}}, pero solo si tienen un atributo [`href`](/es/docs/Web/HTML/Element/a#href) con un valor que contiene «http» en algún lugar de su contenido textual.

Eso es todo. Vuelve a la sección de aprendizaje activo anterior ¡y prueba esta nueva técnica!

> **Nota:** No te preocupes si aún no estás familiarizado con los [fondos](/es/docs/Learn/CSS/Building_blocks) y el [diseño web adaptativo](/es/docs/Web/Apps/Progressive/Responsive/responsive_design_building_blocks), lo explicaremos en otros artículos.

## Dar aspecto de botón a un enlace

Las herramientas que has explorado hasta ahora en este artículo también se pueden usar de otras maneras. Por ejemplo, los estados como `hover` se pueden usar para diseñar muchos elementos diferentes, no solo enlaces. Es posible que desees diseñar un estado que señale el paso del cursor por encima de párrafos, elementos de lista u otras cosas.

Además, suele ser bastante común dar a los enlaces un aspecto y un comportamiento de botón en ciertas circunstancias: el menú de navegación de un sitio web generalmente está marcado como una lista que contiene enlaces, y es posible aplicarle estilo fácilmente para que se parezca a un conjunto de botones de control o pestañas que proporcionan al usuario acceso a otras partes del sitio web. Vamos a ver cómo.

En primer lugar, un poco de HTML:

```html
<ul>
  <li><a href="#">Inicio</a></li>
  <li><a href="#">Pizza</a></li>
  <li><a href="#">Música</a></li>
  <li><a href="#">Wombats</a></li>
  <li><a href="#">Finlandia</a></li>
</ul>
```

Y ahora nuestro CSS:

```css
body,
html {
  margin: 0;
  font-family: sans-serif;
}

ul {
  padding: 0;
  width: 100%;
}

li {
  display: inline;
}

a {
  outline: none;
  text-decoration: none;
  display: inline-block;
  width: 19.5%;
  margin-right: 0.625%;
  text-align: center;
  line-height: 3;
  color: black;
}

li:last-child a {
  margin-right: 0;
}

a:link,
a:visited,
a:focus {
  background: yellow;
}

a:hover {
  background: orange;
}

a:active {
  background: red;
  color: white;
}
```

Esto nos da el resultado siguiente:

{{ EmbedLiveSample('Dar_aspecto_de_botón_a_un_enlace', '100%', 100) }}

Vamos a explicar qué pasa aquí, y nos vamos a centrar en los aspectos más interesantes:

- Nuestra segunda regla elimina el área de relleno ({{cssxref ("padding")}}) predeterminada del elemento {{htmlelement ("ul")}} y establece un ancho para abarcar el 100% del contenedor externo (el {{htmlelement ("body")}}, en este caso).
- Los elementos {{htmlelement ("li")}} por defecto suelen ser elementos de bloque (repasa los [tipos de cajas CSS](/es/docs/Learn/CSS/Building_blocks/El_modelo_de_caja)), lo que significa que ocupan sus propias líneas. En este caso, creamos una lista de enlaces horizontal, para lo que en la tercera regla establecemos la propiedad {{cssxref ("display")}} en el valor `inline`, que ubica todos los elementos de la lista sobre la misma línea porque ahora se comportan como elementos de línea.
- La cuarta regla (que da formato al elemento {{htmlelement("a")}}) es la más complicada. Vamos a verla paso a paso:

  - Como en los ejemplos anteriores, comenzamos por desactivar las propiedades predeterminadas {{cssxref ("text-decoration")}} y {{cssxref ("outline")}}, ya que no queremos que estropeen nuestro aspecto.
  - A continuación, configuramos la propiedad {{cssxref ("display")}} en el valor `inline-block`: los elementos {{htmlelement ("a")}} se muestran en línea de forma predeterminada y, aunque no queremos que ocupe más de una línea, como haría un valor de `block`, queremos poderlos dimensionar: `inline-block` nos permite hacerlo.
  - Ahora nos centramos en el tamaño. Queremos llenar todo el ancho del elemento de lista {{htmlelement ("ul")}} y dejar un pequeño margen entre cada botón (pero ningún hueco en el borde derecho), y queremos los 5 botones del mismo tamaño. Para hacer esto, establecemos el atributo {{cssxref ("width")}} en 19,5%, y el atributo {{cssxref ("margin-right")}} en 0,625%. Observa que el ancho completo suma 100,625%, lo que haría caer el último botón `<ul>` a la siguiente línea por desbordamiento. Sin embargo, lo restituimos al 100% con la siguiente regla, que selecciona solo el último elemento `<a>` de la lista y elimina de él el margen. ¡Hecho!
  - Las tres últimas declaraciones son bastante sencillas y tienen principalmente finalidades estéticas. Centramos el texto dentro de cada enlace, establecemos {{cssxref ("line-height")}} en 3 para dar algo de altura a los botones (lo que también presenta la ventaja de centrar verticalmente el texto), y establecemos el color del texto a negro.

> **Nota:** Es posible que hayas observado que en el HTML se han colocado todos los elementos de lista en una misma línea; esto es porque los espacios/saltos de línea que se colocan entre elementos de bloque crean espacios en la página, igual como lo hacen los espacios entre las palabras, y estos espacios romperían nuestro diseño de menú de navegación horizontal. Así que hemos eliminado esos espacios. Puede encontrar más información sobre este problema (y sus soluciones) en [Combatir los espacios entre elementos de bloque colocados en línea](https://css-tricks.com/fighting-the-space-between-inline-block-elements/).

## Resumen

Esperamos que este artículo te haya proporcionado todo lo que necesitas saber acerca de los enlaces... ¡por ahora! En el artículo final de nuestro módulo de aplicar estilo al texto detallaremos cómo usar tipos de letra personalizados para sitios web (o tipos de letra para web, como se les conoce comúnmente).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

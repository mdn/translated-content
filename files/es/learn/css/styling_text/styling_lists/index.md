---
title: Aplicación de estilo a listas
slug: Learn/CSS/Styling_text/Styling_lists
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

Las [listas](/es/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Lists) se comportan como cualquier otro texto en su mayor parte, pero hay algunas propiedades CSS específicas de las listas que debes conocer y algunas prácticas recomendadas a tener en cuenta. Este artículo te lo explica.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, conocimientos básicos de HTML
        (estudio
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">introducción a HTML</a
        >), nociones de cómo trabaja con CSS (estudio
        <a href="/es/docs/Learn/CSS/First_steps">introducción a CSS</a>),
        <a href="/es/docs/Learn/CSS/Styling_text/Fundamentals"
          >Conocimientos básicos de CSS para texto y tipos de letra</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarse con las buenas prácticas y propiedades relacionadas con
        la aplicación de estilo a listas.
      </td>
    </tr>
  </tbody>
</table>

## Un ejemplo sencillo de lista

Para empezar, veamos un ejemplo sencillo de una lista. A lo largo de este artículo veremos listas no ordenadas, listas ordenadas y listas de descripciones; todas tienen características de estilo similares, algunas que son particulares del tipo de lista. El ejemplo sin ningún estilo aplicado está [disponible en Github](http://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (consulta también el [código fuente](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/unstyled-list.html).)

El HTML para nuestro ejemplo de lista se ve así:

```html
<h2>Shopping (unordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ul>
  <li>Humous</li>
  <li>Pitta</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>

<h2>Recipe (ordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ol>
  <li>Toast pitta, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pitta with salad, humous, and fried halloumi.</li>
</ol>

<h2>Ingredient description list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<dl>
  <dt>Humous</dt>
  <dd>
    A thick dip/sauce generally made from chick peas blended with tahini, lemon
    juice, salt, garlic, and other ingredients.
  </dd>
  <dt>Pitta</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>
    A semi-hard, unripened, brined cheese with a higher-than-usual melting
    point, usually made from goat/sheep milk.
  </dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```

Si accedes al ejemplo en vivo e investigas los elementos de la lista usando las [herramientas de desarrollador del navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools), observarás un par de valores de estilo predeterminados:

- Los elementos {{htmlelement("ul")}} y {{htmlelement("ol")}} tienen un {{cssxref("margin")}} superior e inferior de `16px` (`1em`) y un {{cssxref("padding-left")}} de `40px` (`2.5em`.)
- Los elementos de lista {{htmlelement("li")}} no tienen valores de espacio predeterminados.
- El elemento {{htmlelement("dl")}} tiene un {{cssxref("margin")}} superior e inferior de `16px` (`1em`), pero no tiene ningún {{cssxref("padding")}} establecido.
- Los elementos {{htmlelement("dd")}} tienen un {{cssxref("margin-left")}} de `40px` (`2.5em`).
- Los elementos de referencia {{htmlelement("p")}} que hemos incluido tienen un {{cssxref("margin")}} superior e inferior de `16px` (`1em`), al igual que los diferentes tipos de lista.

## Manejar el espaciado de la lista

Al diseñar listas, es necesario ajustar el diseño para que mantengan los mismos espaciados verticales (a veces denominados ritmos verticales) que el resto de elementos circundantes, como párrafos e imágenes; y el mismo espaciado horizontal entre uno y otro (en Github puedes ver el [ejemplo de diseño terminado](http://mdn.github.io/learning-area/css/styling-text/styling-lists/), y también [encontrar el código fuente](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/index.html).)

El CSS que se utiliza para aplicar estilo al texto y al espaciado de texto es el siguiente:

```css
/* Estilos generales */

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Estilos para las listas de descripciones */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: 1.5rem;
}
```

- La primera regla establece un tipo de letra para todo el sitio y un tamaño de letra base de 10px. Estos valores se heredan para toda la página.
- Las reglas 2 y 3 establecen tamaños de letra relativos para los títulos, diferentes tipos de listas (que heredan los hijos de los elementos de listas), y párrafos. Esto significa que todos los párrafos y todas las listas tendrán el mismo tamaño de letra y el mismo espaciado superior e inferior, lo que ayudará a mantener el ritmo vertical constante.
- La regla 4 establece el mismo interlineado ({{cssxref("line-height")}}) en los párrafos y los elementos de las listas, de modo que todos los párrafos y todos los elementos individuales de las listas tendrán el mismo espaciado entre las líneas. Esto también ayudará a mantener el ritmo vertical consistente.
- Las reglas 5 y 6 se aplican a las listas de descripciones; establecemos la misma altura de interlineado (`line-height`) en los términos y las descripciones de la lista de descripciones, así como hicimos con los párrafos y los elementos de la lista. De nuevo, ¡la coherencia es buena! También establecemos que los términos de las descripciones tengan un estilo de negrita, para que destaquen visualmente.

## Estilos específicos de las listas

Ahora que hemos analizado el espaciado general de las listas, exploremos algunas propiedades específicas de las listas. Para empezar, debes conocer tres propiedades que pueden establecerse en los elementos {{htmlelement("ul")}} o {{htmlelement("ol")}}:

- {{cssxref("list-style-type")}}: Establece el tipo de viñetas para la lista, por ejemplo, viñetas cuadradas o circulares para una lista no ordenada; números, letras, o números romanos para una lista ordenada.
- {{cssxref("list-style-position")}}: Establece si las viñetas aparecen dentro de los elementos de la lista o fuera de ellos, antes del inicio de cada elemento.
- {{cssxref("list-style-image")}}: Te permite usar una imagen personalizada para la viñeta, en lugar de un simple cuadrado o círculo.

### El estilo de la viñeta

Como ya sabes, la propiedad {{cssxref("list-style-type")}} te permite establecer qué tipo de viñeta usar. En nuestro ejemplo, hemos establecido que se usen números romanos en mayúsculas para la lista ordenada, con:

```css
ol {
  list-style-type: upper-roman;
}
```

Esto nos da el aspecto siguiente:

![Una lista ordenada con las viñetas establecidas para aparecer fuera del texto del elemento de lista.](outer-bullets.png)

Puedes encontrar muchas más opciones si echas un vistazo a la página de referencia de {{cssxref("list-style-type")}}.

### La posición de la viñeta

La propiedad {{cssxref("list-style-position")}} establece si las viñetas aparecen dentro de los elementos de la lista, o fuera de ellos antes del inicio de cada elemento. El valor por defecto es `outside`, que provoca que las viñetas se sitúen fuera de los elementos de lista, como se observa arriba.

Si estableces el valor en `inside`, las viñetas se ubican dentro de las líneas:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![an ordered list with the bullet points set to appear inside the list item text.](inner-bullets.png)

### Uso de una imagen personalizada como viñeta

La propiedad {{cssxref("list-style-image")}} te permite usar una imagen personalizada para tu viñeta. La sintaxis es muy simple:

```css
ul {
  list-style-image: url(star.svg);
}
```

Sin embargo, esta propiedad es un poco limitada por lo que respecta al control de la posición, el tamaño, etc., de las viñetas. Es más conveniente usar la familia de propiedades {{cssxref("background")}}, de la cual aprenderás mucho más en el módulo [Aplicar diseño a las cajas](/es/docs/Learn/CSS/Building_blocks).

En nuestro ejemplo terminado, hemos aplicado estilo a la lista no ordenada de este modo (encima de lo que ya has visto arriba):

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

Aquí hemos hecho lo siguiente:

- Reducir el valor de la propiedad {{cssxref("padding-left")}} del elemento {{htmlelement ("ul")}} desde su valor predeterminado de 40 px hasta 20 px. A continuación, establecer
  la misma cantidad para los elementos de la lista. De este modo, todos los elementos de la lista siguen alineados con los elementos de la lista ordenada y las descripciones, pero los elementos de lista tienen algo de relleno (`padding`) para poder insertar las imágenes de fondo. Si no hiciéramos esto, las imágenes de fondo se solaparían con el texto de los elementos de la lista y quedaría un aspecto desordenado.
- Establecer la propiedad {{cssxref("list-style-type")}} en `none`, para que no aparezca la viñeta predeterminada. En lugar de ello, vamos a utilizar las propiedades {{cssxref("background")}} para manejar las viñetas.
- Insertar una viñeta en cada elemento de la lista sin ordenar. Las propiedades relevantes son las siguientes:

  - {{cssxref("background-image")}}: Proporciona la ruta que apunta al archivo de imagen que quieres usar como viñeta.
  - {{cssxref("background-position")}}: Define en qué lugar del elemento seleccionado va a aparecer la imagen; en este caso le decimos `0 0`, que significa que la viñeta va a aparecer en el extremo superior izquierdo de cada elemento de lista.
  - {{cssxref("background-size")}}: Establece el tamaño de la imagen de fondo. En teoría queremos que las viñetas sean del mismo tamaño que los elementos de lista (o solo un poco menores o mayores). Utilizamos un tamaño de `1.6rem` (`16px`), que encaja muy bien con el área de relleno de `20px` que hemos elegido para que quepa la viñeta; 16 px más 4 px de espacio entre la viñeta y el texto del elemento de lista funciona bien.
  - {{cssxref("background-repeat")}}: Por defecto, las imágenes de fondo se repiten hasta rellenar todo el espacio de fondo disponible. En este caso solo queremos una copia de la imagen, de modo que establecemos el valor de esta propiedad en `no-repeat`.

Esto nos da el resultado siguiente:

![an unordered list with the bullet points set as little star images](list_formatting.png)

### Propiedad abreviada list-style

Es posible configurar las tres propiedades anteriores con una sola propiedad abreviada, {{cssxref("list-style")}}. Por ejemplo, observa el CSS siguiente:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

Podría reemplazarse por esto:

```css
ul {
  list-style: square url(example.png) inside;
}
```

Los valores pueden escribirse en cualquier orden, y puedes usar uno, dos o los tres (los valores por defecto que se utilizan para las propiedades que no están incluidas son `disc`, `none` y `outside`). Si se especifican tanto `type` como `image`, el tipo se usa como una segunda opción en el caso de que la imagen no sea posible cargar la imagen por cualquier motivo.

## Control de numeración de las listas

A veces puedes querer numerar las listas de manera diferente, por ejemplo, que empiece con un número que no sea el 1, o que cuente hacia atrás, o que cuente a saltos de más de una unidad. HTML y CSS tienen algunas herramientas para ayudarte con esto.

### start

El atributo [`start`](/es/docs/Web/HTML/Element/ol#start) te permite empezar la numeración de la lista en un número diferente de 1. Observa el ejemplo siguiente:

```html
<ol start="4">
  <li>Toast pitta, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pitta with salad, humous, and fried halloumi.</li>
</ol>
```

Este código da el resultado siguiente:

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

El atributo [`reversed`](/es/docs/Web/HTML/Element/ol#reversed) empieza la lista contando hacia atrás, en lugar de hacia adelante. Observa el ejemplo siguiente:

```html
<ol start="4" reversed>
  <li>Toast pitta, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pitta with salad, humous, and fried halloumi.</li>
</ol>
```

Da el resultado siguiente:

{{ EmbedLiveSample('reversed', '100%', 150) }}

> **Nota:** Si en una lista inversa hay más elementos de lista que el valor que se ha establecido para el atributo `start`, la numeración continuará hasta cero y luego con valores negativos.

### value

El atributo [`value`](/es/docs/Web/HTML/Element/ol#value) te permite establecer para tus elementos de lista unos valores numéricos específicos. Observa el ejemplo siguiente:

```html
<ol>
  <li value="2">Toast pitta, leave to cool, then slice down the edge.</li>
  <li value="4">
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pitta with salad, humous, and fried halloumi.</li>
</ol>
```

Da el resultado siguiente:

{{ EmbedLiveSample('value', '100%', 150) }}

> **Nota:** Incluso si utilizas una propiedad {{cssxref("list-style-type")}} sin números, vas a tener que usar los valores numéricos equivalentes para el atributo `value`.

## Aprendizaje activo: aplicar estilo a una lista anidada

En esta sesión de aprendizaje activo, queremos que tomes lo que has aprendido arriba y pruebes a aplicar estilo a una lista anidada. Te hemos provisto con un HTML, y queremos que hagas lo siguiente:

1. Poner viñetas cuadradas en la lista no ordenada.
2. Establecer un interlineado de 1,5 con respecto al tamaño de la letra tanto para la lista ordenada como para la lista no ordenada.
3. Poner letras minúsculas en la lista ordenada.
4. Juega con el ejemplo, libremente y cuanto quieras, experimenta con los tipos de viñetas, los espacios, o cualquier otra cosa con que te encuentres.

Si te equivocas, puedes volver a empezar con el botón _Reinicio_. Si te quedas encallado, pulsa el botón _Mostrar la solución_ para ver una posible solución.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>Finally, place the three magic items in the box, in this exact order, to complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Show solution"
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
    "ul {\n list-style-type: square;\n}\n\nul li {\n line-height: 1.5;\n}\n\nol {\n list-style-type: lower-alpha\n}";
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## Véase también

Los contadores CSS proporcionan herramientas avanzadas para la personalización de las numeraciones y la aplicación de estilo a las listas, pero son bastante complejos. Te recomendamos echarles un vistazo si quieres ampliar tus conocimientos. Consulta:

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

## Resumen

La aplicación de estilo a listas se domina con relativa facilidad una vez que conoces algunos principios básicos y propiedades específicas asociados. En el artículo siguiente vamos a continuar con las técnicas de aplicación de estilo a enlaces.

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

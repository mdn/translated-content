---
title: Fundamentos de texto en HTML
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Una de las principales funciones de HTML es dar al texto estructura y significado (también conocido como {{Glossary("semantics", "semántica")}}), de forma que un navegador pueda mostrarlo correctamente. Este articulo explica la forma en que se puede usar {{Glossary("HTML")}} para estructurar una página de texto añadiendo encabezados y párrafos, enfatizando palabras, creando listas y más.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Estar familiarizado con el HTML básico, que se expone en
        [Empezar con HTML](/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a marcar una página de texto básica para darle estructura y
        significado, incluidos párrafos, encabezados, listas, efectos de énfasis
        y citas.
      </td>
    </tr>
  </tbody>
</table>

## Conceptos básicos: Encabezados y párrafos

La mayor parte del texto estructurado está compuesto por encabezados y párrafos, independientemente de si lees una historia, un periódico, un libro de texto, una revista, etc.

![Un ejemplo de la portada de un periódico, que muestra el uso de un encabezado, subtítulos y párrafos de nivel superior.](newspaper_small.jpg)

El contenido estructurado simplifica la experiencia en la lectura y se disfruta más.

En HTML, cada párrafo tiene que estar delimitado por un elemento {{HTMLElement("p")}}, como en este ejemplo:

```html
<p>Soy un párrafo, ¡desde luego que lo soy!</p>
```

Cada sección tiene que estar delimitada por un elemento de encabezado:

```html
<h1>Yo soy el título de la historia</h1>
```

Hay seis elementos de encabezado: {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}} y {{HTMLElement("h6")}}. Cada elemento representa un nivel de contenido diferente en el documento; `<h1>` representa el título principal, `<h2>` representa el subtítulo, `<h3>` representa el subtítulo del subtítulo, y así sucesivamente.

### Cómo establecer la estructura jerárquica

Por ejemplo, en esta historia, `<h1>` representa el título de la historia, `<h2>` representará el título de cada capítulo y `<h3>` las diferentes secciones del capítulo, y así sucesivamente.

```html
<h1>El agujero aplastante</h1>

<p>Por Chris Mills</p>

<h2>Capítulo 1: La oscura noche</h2>

<p>
  Era una noche oscura. En algún lugar, un búho ululó. La lluvia azotó el ...
</p>

<h2>Capítulo 2: El silencio eterno</h2>

<p>Nuestro protagonista ni susurrar pudo al ver esa sombría figura ...</p>

<h3>El espectro habla</h3>

<p>
  Habían pasado varias horas más, cuando de repente el espectro se incorporó y
  exclamó: "¡Por favor, ten piedad de mi alma!"
</p>
```

Realmente es a tu elección lo que cada elemento involucrado represente, siempre y cuando la jerarquía tenga sentido. Solo es necesario que tengas en cuenta unas pocas buenas prácticas mientras creas la estructura:

- Preferentemente debes usar solo un `<h1>` por página; este es el nivel de título superior, y todos los demás se sitúan por debajo de él en la jerarquía.
- Asegúrate de que usas los títulos en el orden correcto en la jerarquía. No uses los `<h3>` para representar subtítulos, seguidos de los `<h2>` para representar los subtítulos de los subtítulos; eso no tiene sentido y provocará resultados extraños.
- De los seis niveles de títulos disponibles, debes procurar no usar más de tres por página, a menos que creas que es realmente necesario. Los documentos con muchos niveles (es decir, una jerarquía de títulos muy profunda) son de difícil manejo y navegación. En esos casos se recomienda, si es posible, separar el contenido en varias páginas.

### ¿Por qué necesitamos estructura?

Para responder a esta cuestión, echemos un vistazo a [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html); el apartado inicial de nuestro ejemplo en curso para este artículo (una buena receta de hummus). Debes guardar una copia de este archivo en tu ordenador porque después la necesitarás para los ejercicios prácticos. El cuerpo (`<body>`) de este documento incluye varios elementos de contenido que no están marcados de ninguna manera pero están separados por saltos de línea (se ha pulsado **Intro**/**Retorno** para continuar en la siguiente línea).

Sin embargo, cuando abres el documento en tu navegador, verás que el texto aparece... ¡como una masa enorme!

![Una página web que muestra un muro de texto sin formato, porque no hay elementos en la página para estructurarlo.](screen_shot_2017-03-29_at_09.20.35.png)

Esto se debe a que no hay elementos que den estructura al contenido, por lo que el navegador no sabe qué es un encabezado y qué es un párrafo. Además:

- Los usuarios que miran una página web tienden a escanearla rápidamente para encontrar el contenido relevante que hay en ella y a menudo empiezan por leer los encabezados para comenzar. (Solemos [pasar muy poco tiempo en una página web](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)). Si no pueden ver nada útil en unos segundos, es probable que se sientan frustrados y se vayan a otro sitio.
- Los motores de búsqueda que indizan tu página consideran el contenido de los títulos como palabras clave importantes e influyen en la puntuación de búsqueda de la página. Sin encabezados, tu página tendrá un rendimiento bajo en términos de optimización de motores de búsqueda {{Glossary("SEO")}}.
- Las personas con discapacidad visual severa no suelen leer páginas web: en lugar de ello, las escuchan. Lo hacen con un software llamado [Lector de pantalla](https://es.wikipedia.org/wiki/Lector_de_pantalla). Este software proporciona acceso rápido a un contenido textual dado. Entre las diversas técnicas que emplean, leen los encabezados para proporcionar un esquema del documento que permite a los usuarios encontrar rápidamente la información que quieren. Si no hay encabezados disponibles, se ven obligados a escuchar el documento entero.
- Para aplicar estilos al contenido con {{Glossary("CSS")}}, o para que haga cosas interesantes con {{Glossary("JavaScript")}}, necesitas tener elementos que delimiten el contenido relevante para que CSS/JavaScript se puedan focalizar en este efectivamente.

Por lo tanto, debemos dar a nuestro contenido una estructura definida.

### Aprendizaje Activo: Dar estructura a nuestro contenido

Pasemos directamente a un ejemplo real. En el ejemplo de abajo, añade elementos al texto en bruto en el campo _Código editable_ para que en el campo _Salida en vivo_ aparezcan como un encabezado y dos párrafos.

Si te equivocas, siempre puedes restablecer el código anterior pulsando el botón _Restablecer_. Si encallas, pulsa el botón _Mostrar solución_ para ver la respuesta...

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Mi breve relato Soy estadístico y mi nombre es Trish.

Mis piernas son de cartón y estoy casada con un pez.</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Restablecer" />
  <input id="solution" type="button" value="Mostrar solución" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

var htmlSolution =
  "<h1>Mi breve relato</h1>\n<p>Soy estadístico y mi nombre es Trish.</p>\n<p>Mis piernas son de cartón y estoy casada con un pez.</p>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// captura la tecla de tabulación en el área de texto y en su lugar
// hace que se escriba una tabulación en la posición del cursor

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Actualiza el userCode guardado cada vez que el usuario actualiza el código del área de texto

textarea.onkeyup = function () {
  // Solo queremos guardar el estado cuando se muestra el código de usuario,
  // no es la solución, por lo que la solución no se guarda sobre el código del usuario
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Código_reproducible', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### ¿Por qué necesitamos semántica?

Contamos con la semántica para todo lo que nos rodea. Nos basamos en experiencias previas para conocer la función de cada objeto cotidiano; cuando miramos un objeto, sabemos cuál debe ser su función. Entonces, por ejemplo, esperamos que un semáforo en rojo signifique "alto" y que un semáforo en verde signifique "avance". Las cosas se pueden complicar muy rápidamente si se aplica la semántica incorrecta. (¿Algún país usa rojo para significar "avance"? Esperemos que no).

De manera similar, debemos asegurarnos de que utilizamos los elementos adecuados y damos a nuestro contenido el significado y función correctos y la apariencia adecuada. En este mismo sentido, el elemento {{HTMLElement("h1")}} es un elemento semántico que da al texto al que delimita la función (o significado) de un _titular de primer nivel en tu página_.

```html
<h1>Este es un titular de primer nivel</h1>
```

De manera predeterminada, el navegador le asignará una fuente de gran tamaño para darle el aspecto de un titular (aunque se le podrá dar el estilo que se quisiera usando CSS). Lo más importante es que su valor semántico se va a usar de diferente manera, por ejemplo, por los motores de búsqueda y los lectores de pantalla (como se mencionó antes).

Por otra parte, podrías hacer que cualquier elemento _parezca_ un titular de primer rango. Considera lo siguiente:

```html
<span style="font-size: 32px; margin: 21px 0;"
  >¿Es este un titular de primer rango?</span
>
```

Este es un elemento {{HTMLElement("span")}}. No tiene semántica. Se usa para delimitar contenido cuando se le quiere aplicar CSS (o tratarlo con JavaScript) sin proporcionarle ningún significado extra (encontrarás más información sobre este tipo de elemento más adelante en el curso). Hemos aplicado CSS a este elemento para que parezca un titular de primer nivel, pero al no tener valor semántico, no tiene ninguna de las ventajas añadidas que hemos descrito antes. Es una buena idea usar el elemento HTML apropiado para cada tarea.

## Listas

Ahora volvamos nuestra atención hacia las listas. Las listas están en todos los aspectos de nuestra vida: desde la lista de compras a la lista de instrucciones que sigues inconscientemente para llegar a casa todos los días, o las listas de instrucciones que sigues en estos tutoriales. Las listas están en todos lados en la web también y hay tres diferentes tipos de las que nos vamos a ocupar.

### Listas no ordenadas

Las listas no ordenadas se usan para marcar listas de artículos cuyo orden no es importante. Tomemos como ejemplo una lista de compras:

```bash
leche
huevos
pan
hummus
```

Cada lista desordenada comienza con un elemento {{HTMLElement("ul")}} («_unordered list_») que delimita todos los elementos de la lista:

```html
<ul>
  leche huevos pan hummus
</ul>
```

El siguiente paso es delimitar cada artículo de la lista con un elemento {{HTMLElement("li")}} («_list item_»).

```html
<ul>
  <li>leche</li>
  <li>huevos</li>
  <li>pan</li>
  <li>hummus</li>
</ul>
```

#### Aprendizaje activo: marcar una lista no ordenada

Edita el siguiente ejemplo para crear tu propia lista HTML no ordenada.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
leche
huevos
pan
hummus</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Restablecer" />
  <input id="solution" type="button" value="Mostrar solución" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

var htmlSolution =
  "<ul>\n<li>leche</li>\n<li>huevos</li>\n<li>pan</li>\n<li>hummus</li>\n</ul>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// captura la tecla de tabulación en el área de texto y en su lugar
// hace que se escriba una tabulación en la posición del cursor

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Actualiza el userCode guardado cada vez que el usuario actualiza el código del área de texto

textarea.onkeyup = function () {
  // Solo queremos guardar el estado cuando se muestra el código de usuario,
  // no es la solución, por lo que la solución no se guarda sobre el código del usuario
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Código_reproducible_2', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### Listas ordenadas

Las listas ordenadas son aquellas en las que el orden de los elementos _sí_ importa. Tomemos como ejemplo una lista de instrucciones para seguir un itinerario:

```bash
Conduce hasta el final de la calle
Gira a la derecha
Sigue derecho por las dos primeras glorietas
Gira a la izquierda en la tercer glorieta
El colegio está a la derecha, 300 metros más adelante
```

La estructura de marcado es la misma que para las listas no ordenadas, excepto que debes delimitar los elementos de la lista con una etiqueta {{HTMLElement("ol")}} («ordered list»), en lugar de `<ul>`:

```html
<ol>
  <li>Conduce hasta el final de la calle</li>
  <li>Gira a la derecha</li>
  <li>Sigue derecho por las dos primeras glorietas</li>
  <li>Gira a la izquierda en la tercer glorieta</li>
  <li>El colegio está a tu derecha, 300 metros más adelante</li>
</ol>
```

#### Aprendizaje activo: Marcar una lista ordenada

Edita el siguiente ejemplo para crear tu propia lista ordenada en HTML.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Conduce hasta el final de la calle
Gira a la derecha
Sigue derecho por las dos primeras glorietas
Gira a la izquierda en la tercer glorieta
La escuela está a tu derecha, 300 metros por más adelante</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Restablecer" />
  <input id="solution" type="button" value="Mostrar solución" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

var htmlSolution =
  "<ol>\n<li>Conduce hasta el final de la calle</li>\n<li>Gira a la derecha</li>\n<li>Sigue derecho por las dos primeras glorietas</li>\n<li>Gira a la izquierda en la tercer glorieta</li>\n<li>La escuela está a tu derecha, 300 metros más adelante</li>\n</ol>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// captura la tecla de tabulación en el área de texto y en su lugar
// hace que se escriba una tabulación en la posición del cursor

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Actualiza el userCode guardado cada vez que el usuario actualiza el código del área de texto

textarea.onkeyup = function () {
  // Solo queremos guardar el estado cuando se muestra el código de usuario,
  // no es la solución, por lo que la solución no se guarda sobre el código del usuario
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Código_reproducible_3', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### Aprendizaje activo: marcar la página de tu receta

Llegados a este punto del artículo, tienes toda la información necesaria para marcar la página de ejemplo con tu receta. Puedes escoger entre guardar una copia local del archivo inicial [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) y trabajar en él, o hacerlo sobre el ejemplo editable de abajo. Probablemente sea mejor trabajar en tu copia local porque podrás guardar tu progreso, mientras que si lo haces sobre el ejemplo editable, los cambios se perderán la próxima vez que cargues la página. Ambos métodos tienen pros y contras.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Receta rápida de hummus

Esta receta hace un hummus rápido y sabroso, sin ensuciar. Ha sido adaptada de varias recetas diferentes que he leído a lo largo de los años.

El hummus es una deliciosa pasta espesa que se usa mucho en platos griegos y del Medio Oriente. Es muy sabroso con ensalada, carne a las brasas y pan de pitta.

Ingredientes

1 lata (400g) de garbanzos (garbanzos)
175g de tahini
6 tomates secos
Medio pimiento rojo
Una pizca de pimienta de cayena
1 diente de ajo
Una pizca de aceite de oliva

Instrucciones

Retira la piel del ajo y pica en trozos grandes.
Retira todas las semillas y el tallo del pimiento y pica en trozos grandes.
Agrega todos los ingredientes en un procesador de alimentos.
Procesa todos los ingredientes en una pasta
Si deseas un hummus "grueso", procésalo corto tiempo
Si deseas un hummus "suave", procésalo por más tiempo

Para un sabor diferente, puedes intentar mezclar en una pequeña medida de limón y cilantro, ají, lima y chipotle, harissa y menta, o espinacas y queso feta. Pruébalo y confirma que esté en su punto.

Almacenamiento

Refrigera el hummus terminado en un recipiente sellado. Deberías poder usarlo durante aproximadamente una semana después de haberlo hecho. Si comienza a burbujear, definitivamente debes desecharlo.

El hummus es apto para congelar; debes descongelarlo y usarlo en un par de meses.</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Restablecer" />
  <input id="solution" type="button" value="Mostrar solución" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

var htmlSolution =
  '<h1>Receta rápida de hummus</h1>\n\n<p>Esta receta hace un hummus rápido y sabroso, sin ensuciar. Ha sido adaptada de varias recetas diferentes que he leído a lo largo de los años.</p>\n\n<p>El hummus es una deliciosa pasta espesa que se usa mucho en platos griegos y del Medio Oriente. Es muy sabroso con ensalada, carne a las brasas y pan de pitta.</p>\n\n<h2>Ingredientes</h2>\n\n<ul>\n<li>1 lata (400g) de garbanzos (garbanzos)</li>\n<li>175g de tahini</li>\n<li>6 tomates secos</li>\n<li>Medio pimiento rojo</li>\n<li>Una pizca de pimienta de cayena</li>\n<li>1 diente de ajo</li>\n<li>Una pizca de aceite de oliva</li>\n</ul>\n\n<h2>Instrucciones</h2>\n\n<ol>\n <li>Retira la piel del ajo y pica en trozos grandes.</li>\n<li>Retira todas las semillas y el tallo del pimiento, y pica en trozos grandes.</li>\n<li>Agrega todos los ingredientes en un procesador de alimentos.</li>\n<li>Procesa todos los ingredientes en una pasta.</li>\n<li>Si deseas un hummus "grueso", procésalo corto tiempo.</li>\n<li>Si deseas un hummus "suave", procésalo por más tiempo.</li>\n</ol>\n\n<p>Para un sabor diferente, puedes intentar mezclar una pequeña medida de limón y cilantro, ají, lima y chipotle, harissa y menta, o espinacas y queso feta. Pruébalo y confirma que esté en su punto.</p>\n\n<h2>Almacenamiento</h2>\n\n<p>Refrigera el hummus terminado en un recipiente sellado. Deberías poder usarlo durante aproximadamente una semana después de haberlo hecho. Si comienza a burbujear, definitivamente debes desecharlo.</p>\n\n<p>El hummus es adecuado para congelar; debes descongelarlo y usarlo en un par de meses.</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// captura la tecla de tabulación en el área de texto y en su lugar
// hace que se escriba una tabulación en la posición del cursor

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Actualiza el userCode guardado cada vez que el usuario actualiza el código del área de texto

textarea.onkeyup = function () {
  // Solo queremos guardar el estado cuando se muestra el código de usuario,
  // no es la solución, por lo que la solución no se guarda sobre el código del usuario
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Código_reproducible_4', 700, 400, "", "", "hide-codepen-jsfiddle") }}

Si encallas, siempre puedes pulsar el botón _Mostrar solución_ o comprobar el ejemplo completo [text-complete.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-complete.html) en nuestro repositorio de Github.

### Listas anidadas

Es perfectamente correcto anidar una lista dentro de otra. Posiblemente quieras tener subelementos bajo elementos de rango superior. Tomemos la segunda lista de nuestro ejemplo de la receta:

```html
<ol>
  <li>Pela el ajo y picarlo en trozos gruesos.</li>
  <li>
    Retira las semillas y el tallo del pimiento, y cortarlo en trozos gruesos.
  </li>
  <li>Mete todos los alimentos en un procesador de alimentos.</li>
  <li>Pica todos los ingredientes hasta conseguir una pasta.</li>
  <li>Si deseas un hummus "grueso", procésalo corto tiempo.</li>
  <li>Pica durante más tiempo si se desea obtener un hummus "suave".</li>
</ol>
```

Puesto que los dos últimos elementos están estrechamente relacionados con el elemento anterior (se leen como subinstrucciones u opciones que encajan bajo ese elemento), puede tener sentido anidarlos dentro de su propia lista no ordenada e introducir esa lista bajo el cuarto elemento. Tendría el siguiente aspecto:

```html
<ol>
  <li>Pela el ajo y picarlo en trozos gruesos.</li>
  <li>
    Retira las semillas y el tallo del pimiento, y cortarlo en trozos gruesos.
  </li>
  <li>Mete todos los alimentos en un procesador de alimentos.</li>
  <li>
    Procesa todos los ingredientes hasta conseguir una pasta.
    <ul>
      <li>Si deseas un hummus "grueso", procésalo corto tiempo.</li>
      <li>Pica durante más tiempo si se desea obtener un hummus "suave".</li>
    </ul>
  </li>
</ol>
```

Vuelve al ejemplo anterior y reescribe la lista de este modo.

## Énfasis e importancia

En el lenguaje humano, a menudo enfatizamos ciertas palabras para alterar el significado de una frase, y a menudo queremos destacar ciertas palabras como importantes o diferentes en algún sentido. HTML nos dota de diversos elementos semánticos que nos permiten destacar contenido textual con tales efectos, y en esta sección veremos los más comunes.

### Énfasis

Cuando queremos dar énfasis al lenguaje hablado, _acentuamos_ ciertas palabras y así alteramos sutilmente el significado de lo que decimos. De manera similar, en el lenguaje escrito ponemos palabras en cursiva para destacarlas. Por ejemplo, las dos siguientes frases tienen diferente significado:

Me alegro de que no llegues tarde.

Me _alegro_ de que no llegues _tarde_.

La primera frase suena aliviada porque la persona no llega tarde. Por el contrario, la segunda suena sarcástica y un tanto pasivo-agresiva, expresa molestia porque la persona ha llegado algo tarde.

En HTML usamos el elemento {{HTMLElement("em")}} («_emphasis_») para marcar estos casos. El documento logra entonces transmitir una lectura más interesante y además así lo reconocen los lectores de pantalla, que lo expresan con un diferente tono de voz. El navegador, de manera predeterminada, aplica el estilo de letra itálica, pero no debes utilizar esta etiqueta solamente para establecer el estilo de letra itálica. Para usar ese estilo, debes utilizar únicamente la etiqueta del elemento {{HTMLElement("span")}} y algo de CSS u otra etiqueta con el elemento {{HTMLElement("i")}} (ve abajo).

```html
<p>Me <em>alegro</em> de que no llegues <em>tarde</em>.</p>
```

### Importancia fuerte

Para enfatizar palabras importantes al hablar solemos acentuarlas, y al escribir lo hacemos en estilo **negrita**. Por ejemplo:

Este líquido es **altamente tóxico**.

Cuento contigo. **¡No llegues tarde!**

En HTML usamos el elemento {{HTMLElement("strong")}} (importancia fuerte) para marcar tales expresiones. El documento resulta entonces más útil, y de nuevo los lectores de pantalla reconocen estos elementos y el tono de voz cambia a uno más fuerte. El estilo negrita es el que aplican los navegadores por omisión, pero no debes usar esta etiqueta solamente para aplicar este estilo. Para hacer eso usa el elemento {{HTMLElement("span")}} y CSS, o un elemento {{HTMLElement("b")}} (ve más abajo).

```html
<p>Este líquido es <strong>altamente tóxico</strong>.</p>

<p>Cuento contigo. <strong>¡No llegues tarde!</strong></p>
```

Puedes anidar elementos de énfasis dentro de elementos de importancia y viceversa si lo deseas:

```html
<p>
  Este líquido es <strong>altamente tóxico</strong> — si lo bebes,
  <strong>podrías <em>morir</em></strong
  >.
</p>
```

### Aprendizaje activo: ¡Seamos importantes!

En esta sección de aprendizaje activo te proporcionamos un ejemplo editable. Practica un poco añadiendo algo de _**énfasis**_ e **_importancia_** a las palabras que creas que lo necesitan.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
<h1>Aviso importante</h1>
<p>El domingo 9 de enero de 2019, fue vista una pandilla de góticos
robando varios gnomos de jardín de un
centro comercial en el centro de Milwaukee. Todos ellos
vistiendo monos verdes y tontos sombreros, y
al parecer estaban pasando un buen rato. Si alguien
tiene alguna información sobre este incidente, por favor
póngase en contacto con la policía ahora.</p></textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Restablecer" />
  <input id="solution" type="button" value="Mostrar solución" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

var htmlSolution =
  "<h1>Aviso importante</h1>\n<p>El <strong>domingo 9 de enero de 2019</strong>, fue vista una pandilla de <em>góticos</em> robando <strong>varios <em>gnomos</em> de jardín</strong> de un centro comercial en el centro de <strong>Milwaukee</strong>. Todos ellos vistiendo <em>monos verdes</em> y <em>tontos sombreros</em>, y al parecer estaban pasando un buen rato. Si alguien tiene <strong>alguna</strong> información sobre este incidente, póngase en contacto con la policía <strong>ahora</strong>.</p>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// captura la tecla de tabulación en el área de texto y en su lugar
// hace que se escriba una tabulación en la posición del cursor

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Actualiza el userCode guardado cada vez que el usuario actualiza el código del área de texto

textarea.onkeyup = function () {
  // Solo queremos guardar el estado cuando se muestra el código de usuario,
  // no es la solución, por lo que la solución no se guarda sobre el código del usuario
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Código_reproducible_5', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### Cursiva, negrita, subrayado

Los elementos que hemos comentado hasta ahora tienen asociada una semántica clara. La situación con {{HTMLElement("b")}} (negrita o «**bold**»), {{HTMLElement("i")}} (cursiva o «_italic_») y {{HTMLElement("u")}} (subrayado o «**underline**») es algo más complicada. Surgieron para que las personas pudieran escribir textos en negrita, cursiva o subrayado en un tiempo en el que pocos navegadores o ninguno admitían el CSS. Elementos como estos, que solo afectan a la presentación y no a la semántica, se conocen como **elementos de presentación** y no se deberían usar porque, como hemos visto, la semántica es muy importante para la accesibilidad y el SEO, entre otros aspectos.

HTML5 redefinió los elementos `<b>`, `<i>` y `<u>` con roles semánticos nuevos un tanto confusos.

Esta es la regla de oro: el uso de `<b>`, `<i>` o `<u>` resulta adecuado cuando transmiten el significado que suele transmitir el uso tradicional de las negritas, itálicas o el subrayado, si no hay ningún otro elemento que resulte más adecuado. Sin embargo, siempre resulta crítico mantener una actitud orientada a la accesibilidad. El concepto de itálica no es demasiado útil para las personas que usan lectores de pantalla o para las personas que utilizan un sistema de escritura distinto del alfabeto latino.

- {{HTMLElement('i')}} se usa para transmitir el significado que tradicionalmente transmite la itálica: extranjerismos, clasificaciones taxonómicas, conceptos técnicos, un pensamiento...
- {{HTMLElement('b')}} se usa para transmitir el significado que tradicionalmente transmite la negrita: palabras clave, nombres de productos, frases principales...
- {{HTMLElement('u')}} se usa para transmitir el significado que tradicionalmente conlleva el subrayado: nombres propios, errores ortográficos...

> **Nota:** Una observación prudente acerca del subrayado: **La gente suele asociar estrechamente el subrayado con los hipervínculos.** Por ello en la web es mejor reservar el subrayado para los enlaces. Utiliza el elemento {{HTMLElement('u')}} cuando resulte apropiado semánticamente, pero considera usar CSS para cambiar el subrayado predeterminado por algo más adecuado en la web. El siguiente ejemplo ilustra cómo lo puedes hacer.

```html
<!-- nombres científicos -->
<p>
  El colibrí garganta de rubí (<i>Archilochus colubris</i>) es el colibrí más
  común en el este de América del Norte.
</p>

<!-- extranjerismos -->
<p>
  El menú era un mar de palabras exóticas como <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> y <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- un error ortográfico reconocido -->
<p>Algún día aprenderé a deletrear mejor.</p>

<!-- Palabras clave destacadas en una serie de instrucciones -->
<ol>
  <li><b>Corta</b> dos piezas de la hogaza de pan.</li>
  <li>
    <b>Inserta</b> una rodaja de tomate y una hoja de lechuga entre las
    rebanadas de pan.
  </li>
</ol>
```

## ¡Pon a prueba tus habilidades!

Has llegado al final de este artículo, pero ¿puedes recordar la información más importante? Encontrarás más ejercicios con los que comprobar que has retenido esta información antes de seguir adelante en [Pon a prueba tus habilidades: Prueba de conocimientos básicos de HTML](/es/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_HTML_text_basics).

## Resumen

¡Eso es todo por ahora! Este artículo debería haberte dado una buena idea de cómo comenzar a marcar texto en HTML y te ha presentado algunos de los elementos más importantes en este ámbito. Hay muchos más elementos semánticos para desarrollar en esta área, y veremos muchos más en nuestro artículo [Formateo de texto avanzado](/es/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting), más adelante en el curso. En el siguiente artículo, veremos en detalle cómo [crear hipervínculos](/es/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), posiblemente el más importante elemento en la web.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

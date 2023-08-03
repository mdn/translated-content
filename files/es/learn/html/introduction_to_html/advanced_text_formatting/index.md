---
title: Formateo de texto avanzado
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

Hay muchos otros elementos en HTML para dar formato al texto, que no expusimos en el artículo [Fundamentos de texto HTML](/es/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals). Los elementos descritos en este artículo son menos conocidos, pero aún así es muy útil conocerlos (no obstante, no es una lista completa de ninguna manera). Aquí aprenderás cómo marcar citas, listas de descripción, código de computadora y otro texto relacionado, subíndices y superíndices, información de contacto y mucho más.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Estar familiarizado con HTML, cubierto en
        [Empezar con HTML](/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started).
        Aplicación de formato a texto en documentos HTML, según lo expuesto en
        la sección
        [Fundamentos de texto HTML](/es/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a utilizar elementos HTML menos conocidos para marcar
        características semánticas avanzadas.
      </td>
    </tr>
  </tbody>
</table>

## Listas de descripciones

En los fundamentos del texto HTML, explicamos cómo [marcar listas básicas](/es/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Lists) en HTML, pero no mencionamos el tercer tipo de lista con la que te encontrarás ocasionalmente: **listas de descripción**. El propósito de estas listas es marcar un conjunto de elementos y sus descripciones asociadas, como términos y definiciones, o preguntas y respuestas. Veamos un ejemplo de un conjunto de términos y definiciones:

```bash
soliloquio
En las obras dramáticas, corresponde a cuando un personaje se habla a sí mismo para representar sus pensamientos o sentimientos internos y, en el proceso, transmitirlos a la audiencia (pero no a otros personajes).
monólogo
En las obras dramáticas, corresponde a cuando un personaje habla de sus pensamientos en voz alta para compartirlos con el público y cualquier otro personaje presente.
aparte
En las obras dramáticas, corresponde a cuando un personaje comparte un comentario solo con la audiencia para dar efecto cómico o dramático. Suele ser un sentimiento, un pensamiento o información adicional.
```

Las listas de descripción utilizan un contenedor diferente al de los otros tipos de listas — {{HTMLElement("dl")}} («_**d**escription **l**ist_» o lista de descripciones); además, cada término está envuelto en un elemento {{HTMLElement("dt")}} («_**d**escription **t**erm_» o término a describir), y cada descripción está envuelta en un elemento {{HTMLElement("dd")}} («_**d**escription **d**efinition_» o definición de descripción). Para redondear esta información veamos un ejemplo:

```html
<dl>
  <dt>soliloquio</dt>
  <dd>
    En las obras dramáticas, corresponde a cuando un personaje se habla a sí
    mismo para representar sus pensamientos o sentimientos internos y, en el
    proceso, transmitirlos a la audiencia (pero no a otros personajes).
  </dd>
  <dt>monólogo</dt>
  <dd>
    En las obras dramáticas, corresponde a cuando un personaje habla de sus
    pensamientos en voz alta para compartirlos con el público y cualquier otro
    personaje presente.
  </dd>
  <dt>aparte</dt>
  <dd>
    En las obras dramáticas, corresponde a cuando un personaje comparte un
    comentario solo con la audiencia para dar efecto cómico o dramático. Suele
    ser un sentimiento, un pensamiento o información adicional.
  </dd>
</dl>
```

Los estilos predeterminados del navegador mostrarán listas de descripciones con las descripciones sangradas un poco más que los términos.

{{ EmbedLiveSample('listas-de-descripciones-ejemplo-activo-1', '100%', '285px', '', '', 'hide-codepen-jsfiddle') }}

## Ejemplo

Ten en cuenta que un solo término puede tener múltiples descripciones, por ejemplo:

```html
<dl>
  <dt>aparte</dt>
  <dd>
    En las obras dramáticas, corresponde a cuando un personaje comparte un
    comentario solo con la audiencia para dar efecto cómico o dramático. Suele
    ser un sentimiento, un pensamiento o información adicional.
  </dd>
  <dd>
    Si la obra es impresa, es una sección de contenido que se relaciona con el
    tema, pero no encaja directamente en el flujo principal de contenido, de
    modo que se presenta por separado (a menudo en una caja de texto en el
    margen).
  </dd>
</dl>
```

{{ EmbedLiveSample('listas-de-descripciones-ejemplo-activo-2', '100%', '193px', '', '', 'hide-codepen-jsfiddle') }}

### Aprendizaje activo: Marcar un conjunto de definiciones

Es hora de practicar las listas de descripciones; agrega elementos al texto sin formato en el campo _Código editable_ para que aparezca como una lista de descripción en el campo _Salida en vivo_. Puedes usar tus propios términos y descripciones si lo deseas.

Si cometes un error, siempre puedes restablecer el código anterior pulsando el botón _Restablecer_. Si te quedas realmente encallado, pulsa el botón _Mostrar solución_ para ver una buena propuesta.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Tocino
El pegamento que une al mundo.
Huevos
El pegamento que une el pastel.
Café
La bebida que hace que el mundo funcione por la mañana.
Un color marrón claro.</textarea
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
const userEntry = textarea.value;

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

const htmlSolution =
  "<dl>\n <dt>Tocino</dt>\n <dd>El pegamento que une al mundo.</dd>\n <dt>Huevos</dt>\n <dd>El pegamento que une el pastel.</dd>\n <dt>Café</dt>\n <dd>La bebida que hace que el mundo funcione por la mañana.</dd>\n <dd>Un color marrón claro.</dd>\n</dl>";
const solutionEntry = htmlSolution;

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
  const scrollPos = textarea.scrollTop;
  const caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
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

{{ EmbedLiveSample('Código_reproducible', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## Citas

HTML también dispone de elementos para el marcado de citas; cual elemento utilices depende de si estás marcando la cita como un bloque o como un elemento en línea.

### Cita en bloque independiente (blockquote)

Si una sección de contenido a nivel de bloque (ya sea un párrafo, varios párrafos, una lista, etc.) se cita en otro lugar, debes envolverla dentro de un elemento {{HTMLElement("blockquote")}} para indicarlo, e incluye una URL que apunte a la fuente de la cita dentro de un atributo [`cite`](/es/docs/Web/HTML/Element/blockquote#cite). Por ejemplo, el siguiente marcado tomado de la página del elemento `<blockquote>` de MDN:

```html
<p>
  El <strong>elemento HTML <code>&lt;blockquote&gt;</code></strong> (o
  <em>elemento HTML de cita en bloque independiente</em>) indica que el texto al
  que delimita es una cita ampliada.
</p>
```

## Ejemplo

Para convertir esto en una cita en bloque independiente, simplemente harías lo siguiente:

```html
<p>A continuación se muestra una cita en bloque independiente...</p>
<blockquote
  cite="https://developer.mozilla.org/es/docs/Web/HTML/Element/blockquote">
  <p>
    El <strong>elemento HTML <code>&lt;blockquote&gt;</code></strong> (o
    <em>elemento HTML de cita en bloque independiente</em>) indica que el texto
    al que delimita es una cita ampliada.
  </p>
</blockquote>
```

El estilo predeterminado del navegador lo mostrará como un párrafo con sangría, para indicar que se trata de una cita; el párrafo anterior a la cita sirve para demostrarlo.

{{EmbedLiveSample('blockquote-ejemplo-en-vivo', '100%', '117px', '', '', 'hide-codepen-jsfiddle')}}

### Citas en línea

Las citas en línea funcionan exactamente de la misma manera, excepto que usan el elemento {{HTMLElement("q")}}. Por ejemplo, el siguiente fragmento de marcado contiene una cita `<q>` de la página MDN:

```html
<p>
  El elemento de cita — <code>&lt;q&gt;</code> — se
  <q cite="https://developer.mozilla.org/es/docs/Web/HTML/Element/q"
    >utiliza en para citas breves que no requieren saltos de párrafo.</q
  >
</p>
```

El estilo predeterminado del navegador lo representará como texto normal entre comillas para indicar una cita, así:

{{ EmbedLiveSample('Citas_en_línea', '100%', '78px', '', '', 'hide-codepen-jsfiddle')}}

### Citas

El contenido del atributo [`cite`](/es/docs/Web/HTML/Element/blockquote#cite) suena útil, pero desafortunadamente los navegadores, lectores de pantalla, etc. no hacen mucho con él. No hay forma de hacer que el navegador muestre el contenido de `cite` sin escribir tu propia solución usando JavaScript o CSS. Si deseas que la fuente de la cita esté disponible en la página, lo debes hacer en el texto a través de un enlace o de alguna otra forma apropiada.

Hay un elemento {{HTMLElement("cite")}}, pero está destinado a contener el título del recurso que se cita, p. ej. el nombre del libro. Sin embargo, no hay razón por la que no puedas vincular el texto dentro de `<cite>` a la fuente de la cita de alguna manera:

```html
<p>
  De acuerdo con
  <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/blockquote">
    <cite>página de citas en bloque independiente de MDN</cite></a
  >:
</p>

<blockquote
  cite="https://developer.mozilla.org/es/docs/Web/HTML/Element/blockquote">
  <p>
    El <strong>elemento HTML <code>&lt;blockquote&gt;</code></strong> (o
    <em>elemento HTML de cita en bloque independiente</em>) indica que el texto
    al que delimita es una cita ampliada.
  </p>
</blockquote>

<p>
  El elemento de cita — <code>&lt;q&gt;</code> — se
  <q cite="https://developer.mozilla.org/es/docs/Web/HTML/Element/q"
    >utiliza en citas breves que no requieren saltos de párrafo.</q
  >
  --
  <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/q">
    <cite>página q de MDN</cite></a
  >.
</p>
```

Las citas se escriben en cursiva de forma predeterminada.

{{ EmbedLiveSample('Citas_2', '100%', '179px', '', '', 'hide-codepen-jsfiddle') }}

### Aprendizaje activo: ¿Quién dijo eso?

¡Es hora de otro ejemplo de aprendizaje activo! En este ejemplo, nos gustaría que:

1. Conviertas el párrafo del medio en una cita en bloque independiente, que incluya un atributo `cite`.
2. Conviertas "La necesidad de eliminar el diálogo interno negativo" en el tercer párrafo en una cita en línea e incluya un atributo `cite`.
3. Envuelvas el título de cada fuente en etiquetas `<cite>` y conviertas cada una en un enlace a esa fuente.

Las fuentes de citación que necesitas son:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` para la citas de Confucio
- `http://www.affirmationsforpositivethinking.com` para "La necesidad de eliminar el diálogo interno negativo".

Si cometes un error, siempre puedes restablecer el código anterior pulsando el botón _Restablecer_. Si te quedas realmente encallado, pulsa el botón _Mostrar solución_ para ver una buena propuesta.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>Hola y bienvenido a mi página de motivación. Como dice el sitio de citas de Confucio:</p>
<p>No importa qué tan lento vayas siempre que no te detengas.</p>
<p>También me encanta el concepto de pensamiento positivo y La necesidad de eliminar el diálogo interno negativo (como se menciona en Afirmaciones para el pensamiento positivo).</p>
</textarea>

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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
const userEntry = textarea.value;

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

const htmlSolution =
  '<p>Hola y bienvenido a mi página de motivación. Como dice <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>el sitio de citas de Confucio:</cite></a>:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n<p>No importa qué tan lento vayas siempre que no te detengas.</p>\n</blockquote>\n\n<p>También me encanta el concepto de pensamiento positivo y <q cite="http://www.affirmationsforpositivethinking.com">La necesidad de eliminar el diálogo interno negativo</q> (como se menciona en <a href="http://www.affirmationsforpositivethinking.com"><cite>Afirmaciones para el pensamiento positivo</cite></a>).</p>';
const solutionEntry = htmlSolution;

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
  const scrollPos = textarea.scrollTop;
  const caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
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

{{ EmbedLiveSample('Código_reproducible_2', 700, 450, "", "", "hide-codepen-jsfiddle") }}

## Abreviaturas

Otro elemento bastante común que encontrarás cuando busques en la Web es {{HTMLElement("abbr")}} — se usa para envolver una abreviatura o acrónimo, y proporcionar una expansión completa del término (incluida dentro de un atributo [`title`](/es/docs/Web/HTML/Global_attributes#title). Veamos un par de ejemplos:

```html
<p>
  Usamos <abbr title="Lenguaje de marcado de hipertexto">HTML</abbr> para
  estructurar nuestros documentos web.
</p>

<p>
  Creo que el <abbr title="Reverendo">Rev.</abbr> Green lo hizo en la cocina con
  la motosierra.
</p>
```

Estos saldrán con un aspecto similar a este (la expansión aparecerá en una descripción emergente cuando se coloque el cursor sobre el término):

{{EmbedLiveSample('ejemplo-de-abreviaturas-en-vivo', '100%', '94px', '', '', 'hide-codepen-jsfiddle')}}

> **Nota:** Hay otro elemento, {{HTMLElement("acronym")}}, que básicamente hace lo mismo que `<abbr>`, y se diseñó específicamente para acrónimos en lugar de las abreviaturas. Sin embargo, este ha caído en desuso — no era compatible con los navegadores ni con `<abbr>`, y `<abbr>` tiene una función tan similar que se consideró inútil conservar ambos. Solo utiliza `<abbr>`.

### Aprendizaje activo: Marcar una abreviatura

Para esta simple tarea de aprendizaje activo, nos gustaría que simplemente marcaras una abreviatura. Puedes usar el ejemplo que encontrarás a continuación o reemplazarla por una de tu elección.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>La NASA sin duda hace un interesante trabajo.</p>
</textarea>

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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
const userEntry = textarea.value;

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

const htmlSolution =
  '<p>La <abbr title="Administración Nacional de Aeronáutica y del Espacio">NASA</abbr> sin duda hace un interesante trabajo.</p>';
const solutionEntry = htmlSolution;

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
  const scrollPos = textarea.scrollTop;
  const caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
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

{{ EmbedLiveSample('Código_reproducible_3', 700, 300, "", "", "hide-codepen-jsfiddle") }}

## Marcar la información de contacto

HTML tiene un elemento para marcar la información de contacto — {{HTMLElement("address")}}. Este simplemente envuelve tus datos de contacto, por ejemplo:

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, Reino Unido</p>
</address>
```

También podrías incluir un marcado más complejo y otras formas de información de contacto, por ejemplo:

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    Reino Unido
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

Ten en cuenta que algo como esto también estaría bien, si la página vinculada contuviera la información de contacto:

```html
<address>
  <p>Página escrita por <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>
```

## Superíndice y subíndice

En ocasiones, necesitarás utilizar superíndice y subíndice al marcar elementos como fechas, fórmulas químicas y ecuaciones matemáticas para que tengan el significado correcto. Los elementos {{HTMLElement("sup")}} y {{HTMLElement("sub")}} se ocupan de ello. Por ejemplo:

```html
<p>Nací el 25<sup>th</sup> de mayo de 2001.</p>
<p>
  La fórmula química de la cafeína es
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> es 9, x debe ser igual 3 o -3.</p>
```

La salida de este código se ve así:

{{ EmbedLiveSample('Superíndice_y_subíndice', '100%', '141px', '', '', 'hide-codepen-jsfiddle') }}

## Representación del código informático

Hay una serie de elementos disponibles para marcar código informático usando HTML:

- {{HTMLElement("code")}}: Para marcar fragmentos genéricos de código informático.
- {{HTMLElement("pre")}}: Para respetar los espacios en blanco (en general, en los bloques de código) — si utilizas la sangría o diversos espacios en blanco consecutivos dentro de un texto, los navegadores los ignorarán y no se mostrarán en la página. Sin embargo, si delimitas el texto con las etiquetas `<pre></pre>`, los espacios en blanco se representarán de forma idéntica a como se ven en tu editor de texto.
- {{HTMLElement("var")}}: Para marcar específicamente nombres de variables.
- {{HTMLElement("kbd")}}: Para marcar entradas de teclado (y de otro tipo) en el ordenador.
- {{HTMLElement("samp")}}: Para marcar la salida de un programa de ordenador.

Veamos algunos ejemplos. Deberías intentar jugar con estos (intenta obtener una copia de nuestro archivo de ejemplo [other-semantics.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html)):

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('¡Guau!, ¡deja de apretar!');
}</code></pre>

<p>
  No debes utilizar elementos de presentación como <code>&lt;font&gt;</code> y
  <code>&lt;center&gt;</code>.
</p>

<p>
  En el ejemplo de JavaScript anterior, <var>para</var> representa un elemento
  de párrafo.
</p>

<p>
  Selecciona todo el texto con <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.
</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 bytes de datos
64 bytes de 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

El código anterior se verá así:

{{ EmbedLiveSample('Representación_del_código_informático','100%',300, "", "", "hide-codepen-jsfiddle") }}

## Marcar horas y fechas

HTML también proporciona el elemento {{HTMLElement("time")}} para marcar horas y fechas en un formato legible por la máquina. Por ejemplo:

```html
<time datetime="2016-01-20">20 Enero 2016</time>
```

¿Por qué es útil esto? Bueno, hay muchas formas diferentes en que los humanos escriben las fechas. La fecha anterior se podría escribir como:

- 20 Enero 2016
- 20th January 2016
- Ene 20 2016
- 20/01/16
- 01/20/16
- El 20 del mes que viene
- 20e Janvier 2016
- 2016 年 1 月 20 日
- ... y así sucesivamente ...

Pero estas diferentes formas no las pueden reconocer fácilmente las computadoras — ¿qué pasaría si quisieras tomar automáticamente las fechas de todos los eventos en una página e insertarlas en un calendario? El elemento {{HTMLElement("time")}} te permite adjuntar una fecha/hora inequívoca y legible por la máquina para este propósito.

El ejemplo básico anterior solo proporciona una fecha simple legible por la máquina, pero hay muchas otras opciones que son posibles, por ejemplo:

```html
<!-- Fecha simple estándar -->
<time datetime="2016-01-20">20 Enero 2016</time>
<!-- Solo año y mes -->
<time datetime="2016-01">Enero 2016</time>
<!-- Solo mes y día -->
<time datetime="01-20">20 Enero 2016</time>
<!-- Solo tiempo, horas y minutos -->
<time datetime="19:30">19:30</time>
<!-- ¡También puedes hacer segundos y milisegundos! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Fecha y hora -->
<time datetime="2016-01-20T19:30">7.30pm, 20 Enero 2016</time>
<!-- Fecha y hora con desplazamiento de zona horaria -->
<time datetime="2016-01-20T19:30+01:00"
  >7.30pm, 20 Enero 2016 es 8.30pm en Francia</time
>
<!-- Llamar a un número de semana específico -->
<time datetime="2016-W04">La cuarta semana de 2016</time>
```

## ¡Pon a prueba tus habilidades!

Has llegado al final de este artículo, pero ¿puedes recordar la información más importante? Puedes encontrar más pruebas para verificar que has retenido esta información antes de continuar; consulta [Pon a prueba tus habilidades: Texto HTML avanzado](/es/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text).

## Resumen

Esto marca el final de nuestro estudio de la semántica del texto HTML. Ten en cuenta que lo que has visto durante este curso no es una lista exhaustiva de elementos de texto HTML — quisimos tratar de cubrir los aspectos esenciales y algunos de los más comunes que verás en la naturaleza, o al menos podrían resultarte interesantes. Para encontrar muchos más elementos HTML, puedes echarle un vistazo a nuestra [referencia de elementos HTML](/es/docs/Web/HTML/Element) (la [La sección Semántica de texto en línea](/es/docs/Web/HTML/Element#Inline_text_semantics) sería un gran lugar para comenzar). En el próximo artículo veremos los elementos HTML que usarás para estructurar las diferentes partes de un documento HTML.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

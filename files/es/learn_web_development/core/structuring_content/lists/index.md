---
title: Listas
slug: Learn_web_development/Core/Structuring_content/Lists
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}

Ahora dirijamos nuestra atención a las listas. Las listas están en todas partes en la vida—desde tu lista de compras hasta la lista de direcciones que subconscientemente sigues para llegar a tu casa cada día, ¡hasta las listas de instrucciones que estás siguiendo en estos tutoriales! No te sorprenderá que HTML tenga un conjunto conveniente de elementos que nos permiten definir diferentes tipos de lista. En la web, tenemos tres tipos de listas: no ordenadas, ordenadas y listas de descripción. Esta lección te muestra cómo usar los diferentes tipos.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con HTML, como se cubre en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis básica de HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>La estructura HTML para los tres tipos de listas — no ordenadas, ordenadas y de descripción.</li>
          <li>El uso correcto para cada tipo de lista.</li>
          <li>Los casos de uso más amplios de las listas, como los menús de navegación.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Listas no ordenadas

Las listas no ordenadas se utilizan para marcar listas de elementos para los cuales el orden de los elementos no importa. Tomemos una lista de compras como ejemplo:

```plain
leche
huevos
pan
hummus
```

Cada lista no ordenada comienza con un elemento {{htmlelement("ul")}}—este envuelve todos los elementos de la lista:

```html-nolint
<ul>
  leche
  huevos
  pan
  hummus
</ul>
```

El último paso es envolver cada elemento de la lista en un elemento {{htmlelement("li")}} (elemento de lista):

```html
<ul>
  <li>leche</li>
  <li>huevos</li>
  <li>pan</li>
  <li>hummus</li>
</ul>
```

### Aprendizaje activo: Marcando una lista no ordenada

Intenta editar el ejemplo interactivo a continuación para crear tu propia lista HTML no ordenada.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Presiona Esc para alejar el foco del área de código (Tab inserta un carácter
  de tabulación).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
leche
huevos
pan
hummus
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
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<ul>\n<li>leche</li>\n<li>huevos</li>\n<li>pan</li>\n<li>hummus</li>\n</ul>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_an_unordered_list', 700, 400, "", "") }}

## Ordenadas

Las listas ordenadas son listas en las que el orden de los elementos _sí_ importa. Tomemos un conjunto de direcciones como ejemplo:

```plain
Conduce hasta el final de la calle
Gira a la derecha
Sigue recto a través de las dos primeras rotondas
Gira a la izquierda en la tercera rotonda
La escuela está a tu derecha, 300 metros más adelante
```

La estructura de marcado es la misma que para las listas no ordenadas, excepto que tienes que envolver los elementos de la lista en un elemento {{htmlelement("ol")}}, en lugar de `<ul>`:

```html
<ol>
  <li>Conduce hasta el final de la calle</li>
  <li>Gira a la derecha</li>
  <li>Sigue recto a través de las dos primeras rotondas</li>
  <li>Gira a la izquierda en la tercera rotonda</li>
  <li>La escuela está a tu derecha, 300 metros más adelante</li>
</ol>
```

### Aprendizaje activo: Marcando una lista ordenada

Intenta editar el ejemplo interactivo a continuación para crear tu propia lista HTML ordenada.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Presiona Esc para alejar el foco del área de código (Tab inserta un carácter
  de tabulación).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Conduce hasta el final de la calle
Gira a la derecha
Sigue recto a través de las dos primeras rotondas
Gira a la izquierda en la tercera rotonda
La escuela está a tu derecha, 300 metros más adelante
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
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<ol>\n<li>Conduce hasta el final de la calle</li>\n<li>Gira a la derecha</li>\n<li>Sigue recto a través de las dos primeras rotondas</li>\n<li>Gira a la izquierda en la tercera rotonda</li>\n<li>La escuela está a tu derecha, 300 metros más adelante</li>\n</ol>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_an_ordered_list', 700, 500, "", "") }}

## Aprendizaje activo: Marcando nuestra página de recetas

Entonces, en este punto del artículo, tienes toda la información que necesitas para marcar nuestro ejemplo de página de recetas. Puedes elegir guardar una copia local de nuestro archivo de inicio [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) y hacer el trabajo allí o hacerlo en el ejemplo editable a continuación. Hacerlo localmente probablemente sea mejor, ya que podrás guardar el trabajo que estás haciendo, mientras que si lo completas en el ejemplo editable, se perderá la próxima vez que abras la página. Ambos tienen pros y contras.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Presiona Esc para alejar el foco del área de código (Tab inserta un carácter
  de tabulación).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Receta rápida de hummus

  Esta receta hace un hummus rápido y sabroso, sin complicaciones. Se ha adaptado de varias recetas diferentes que he leído a lo largo de los años.

  El hummus es una pasta espesa y deliciosa que se utiliza mucho en la cocina griega y de Oriente Medio. Es muy sabroso con ensalada, carnes a la parrilla y panes de pita.

  Ingredientes

  1 lata (400g) de garbanzos
  175g de tahini
  6 tomates secos
  Medio pimiento rojo
  Una pizca de pimienta de cayena
  1 diente de ajo
  Un chorrito de aceite de oliva

  Instrucciones

  Retirar la piel del ajo y picar groseramente
  Retirar todas las semillas y el tallo del pimiento y picar groseramente
  Añadir todos los ingredientes a un procesador de alimentos
  Procesar todos los ingredientes hasta obtener una pasta
  Si quieres un hummus "grueso" y rústico, procésalo por poco tiempo
  Si quieres un hummus suave, procésalo por más tiempo

  Para un sabor diferente, puedes probar a mezclar una pequeña cantidad de limón y cilantro, chile, lima y chipotle, harissa y menta, o espinacas y queso feta. Experimenta y mira qué funciona para ti.

  Almacenamiento

  Refrigera el hummus terminado en un recipiente sellado. Deberías poder usarlo durante aproximadamente una semana después de haberlo hecho. Si empieza a burbujear, definitivamente debes desecharlo.

  El hummus es adecuado para congelar; debes descongelarlo y usarlo en un par de meses.
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
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<h1>Receta rápida de hummus</h1>\n\n<p>Esta receta hace un hummus rápido y sabroso, sin complicaciones. Se ha adaptado de varias recetas diferentes que he leído a lo largo de los años.</p>\n\n<p>El hummus es una pasta espesa y deliciosa que se utiliza mucho en la cocina griega y de Oriente Medio. Es muy sabroso con ensalada, carnes a la parrilla y panes de pita.</p>\n\n<h2>Ingredientes</h2>\n\n<ul>\n<li>1 lata (400g) de garbanzos</li>\n<li>175g de tahini</li>\n<li>6 tomates secos</li>\n<li>Medio pimiento rojo</li>\n<li>Una pizca de pimienta de cayena</li>\n<li>1 diente de ajo</li>\n<li>Un chorrito de aceite de oliva</li>\n</ul>\n\n<h2>Instrucciones</h2>\n\n<ol>\n<li>Retirar la piel del ajo y picar groseramente.</li>\n<li>Retirar todas las semillas y el tallo del pimiento y picar groseramente.</li>\n<li>Añadir todos los ingredientes a un procesador de alimentos.</li>\n<li>Procesar todos los ingredientes hasta obtener una pasta.</li>\n<li>Si quieres un hummus "grueso" y rústico, procésalo por poco tiempo.</li>\n<li>Si quieres un hummus suave, procésalo por más tiempo.</li>\n</ol>\n\n<p>Para un sabor diferente, puedes probar a mezclar una pequeña cantidad de limón y cilantro, chile, lima y chipotle, harissa y menta, o espinacas y queso feta. Experimenta y mira qué funciona para ti.</p>\n\n<h2>Almacenamiento</h2>\n\n<p>Refrigera el hummus terminado en un recipiente sellado. Deberías poder usarlo durante aproximadamente una semana después de haberlo hecho. Si empieza a burbujear, definitivamente debes desecharlo.</p>\n\n<p>El hummus es adecuado para congelar; debes descongelarlo y usarlo en un par de meses.</p>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_our_recipe_page', 900, 620, "", "") }}

Si te atascas, siempre puedes presionar el botón _Mostrar solución_, o consultar nuestro ejemplo [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html) en nuestro repositorio de GitHub.

## Anidamiento de listas

Está perfectamente bien anidar una lista dentro de otra. Es posible que desees tener algunas subviñetas debajo de una viñeta de nivel superior. Tomemos la segunda lista de nuestro ejemplo de receta:

```html
<ol>
  <li>Retirar la piel del ajo y picar groseramente.</li>
  <li>
    Retirar todas las semillas y el tallo del pimiento y picar groseramente.
  </li>
  <li>Añadir todos los ingredientes a un procesador de alimentos.</li>
  <li>Procesar todos los ingredientes hasta obtener una pasta.</li>
  <li>Si quieres un hummus "grueso" y rústico, procésalo por poco tiempo.</li>
  <li>Si quieres un hummus suave, procésalo por más tiempo.</li>
</ol>
```

Dado que las dos últimas viñetas están muy relacionadas con la anterior (se leen como subinstrucciones u opciones que encajan debajo de esa viñeta), podría tener sentido anidarlas dentro de su propia lista no ordenada y colocar esa lista dentro de la cuarta viñeta actual. Esto se vería así:

```html
<ol>
  <li>Retirar la piel del ajo y picar groseramente.</li>
  <li>
    Retirar todas las semillas y el tallo del pimiento y picar groseramente.
  </li>
  <li>Añadir todos los ingredientes a un procesador de alimentos.</li>
  <li>
    Procesar todos los ingredientes hasta obtener una pasta.
    <ul>
      <li>
        Si quieres un hummus "grueso" y rústico, procésalo por poco tiempo.
      </li>
      <li>Si quieres un hummus suave, procésalo por más tiempo.</li>
    </ul>
  </li>
</ol>
```

Intenta volver al ejemplo de aprendizaje activo anterior y actualizar la segunda lista de esta manera.

## Listas de descripción

El propósito de las listas de descripción es marcar un conjunto de elementos y sus descripciones asociadas, como términos y definiciones, o preguntas y respuestas. Veamos un ejemplo de un conjunto de términos y definiciones:

```plain
soliloquio
En teatro, donde un personaje se habla a sí mismo, representando sus pensamientos o sentimientos internos y, en el proceso, transmitiéndolos a la audiencia (pero no a otros personajes).
monólogo
En teatro, donde un personaje expresa sus pensamientos en voz alta para compartirlos con la audiencia y cualquier otro personaje presente.
aparte
En teatro, donde un personaje comparte un comentario solo con la audiencia con fines humorísticos o dramáticos. Por lo general, se trata de un sentimiento, un pensamiento o información adicional de fondo.
```

Las listas de descripción utilizan un contenedor diferente al de los otros tipos de listas — {{htmlelement("dl")}}; además, cada término se envuelve en un elemento {{htmlelement("dt")}} (término de descripción) y cada descripción se envuelve en un elemento {{htmlelement("dd")}} (definición de descripción).

### Ejemplo de lista de descripción

Terminemos de marcar nuestro ejemplo:

```html
<dl>
  <dt>soliloquio</dt>
  <dd>
    En teatro, donde un personaje se habla a sí mismo, representando sus
    pensamientos o sentimientos internos y, en el proceso, transmitiéndolos a la
    audiencia (pero no a otros personajes).
  </dd>
  <dt>monólogo</dt>
  <dd>
    En teatro, donde un personaje expresa sus pensamientos en voz alta para
    compartirlos con la audiencia y cualquier otro personaje presente.
  </dd>
  <dt>aparte</dt>
  <dd>
    En teatro, donde un personaje comparte un comentario solo con la audiencia
    con fines humorísticos o dramáticos. Por lo general, se trata de un
    sentimiento, un pensamiento o información adicional de fondo.
  </dd>
</dl>
```

Los estilos predeterminados del navegador mostrarán las listas de descripción con las descripciones un poco sangradas con respecto a los términos.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Múltiples descripciones para un término

Ten en cuenta que está permitido tener un solo término con múltiples descripciones, por ejemplo:

```html
<dl>
  <dt>aparte</dt>
  <dd>
    En teatro, donde un personaje comparte un comentario solo con la audiencia
    con fines humorísticos o dramáticos. Por lo general, se trata de un
    sentimiento, un pensamiento o información adicional de fondo.
  </dd>
  <dd>
    En escritura, una sección de contenido que está relacionada con el tema
    actual, pero no encaja directamente en el flujo principal de contenido, por
    lo que se presenta cerca (a menudo en un cuadro a un lado).
  </dd>
</dl>
```

{{EmbedLiveSample('Multiple_descriptions_for_one_term', '100%', '193px')}}

### Aprendizaje activo: Marcando un conjunto de definiciones

Es hora de que pruebes las listas de descripción; agrega elementos al texto sin formato en el campo _Entrada_ para que aparezca como una lista de descripción en el campo _Salida_. Puedes intentar usar tus propios términos y descripciones si lo deseas.

Si cometes un error, siempre puedes restablecerlo usando el botón _Restablecer_. Si te quedas realmente atascado, presiona el botón _Mostrar solución_ para ver la respuesta.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Presiona Esc para alejar el foco del área de código (Tab inserta un carácter
  de tabulación).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Tocino
El pegamento que une al mundo.
Huevos
El pegamento que une al pastel.
Café
La bebida que pone al mundo en marcha por la mañana.
Un color marrón claro.
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
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<dl>\n <dt>Tocino</dt>\n <dd>El pegamento que une al mundo.</dd>\n <dt>Huevos</dt>\n <dd>El pegamento que une al pastel.</dd>\n <dt>Café</dt>\n <dd>La bebida que pone al mundo en marcha por la mañana.</dd>\n <dd>Un color marrón claro.</dd>\n</dl>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_a_set_of_definitions', 700, 350) }}

## ¡Pon a prueba tus habilidades!

Has llegado al final de este conjunto de tres artículos sobre elementos semánticos HTML básicos, pero ¿puedes recordar la información más importante? Puedes encontrar algunas pruebas adicionales para verificar que has retenido esta información antes de continuar — consulta [Pon a prueba tus habilidades: Fundamentos del texto HTML](/es/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics).

## Resumen

Eso es todo para las listas. A continuación, pasaremos a una discusión de más alto nivel. Hemos mostrado cómo implementar algunas características individuales de la página, pero ¿qué hay de la estructuración de una página HTML completa? La estructuración de documentos es lo siguiente.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}

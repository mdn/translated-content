---
title: Empezar con HTML
slug: Learn/HTML/Introduction_to_HTML/Getting_started
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

En este artículo vamos a exponer lo más básico del HTML. Para comenzar definiremos elementos, atributos y el resto de términos importantes que quizá ya te suenen y qué función cumplen dentro del lenguaje. También explica dónde encajan estos en HTML. Aprenderás cómo se estructuran los elementos HTML, cómo se estructura una página HTML típica y otras características básicas importantes del lenguaje. Por el camino, también iremos practicando con algo de HTML.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática,
        [tener instalado el software básico](/es/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
        y conocimientos básicos de cómo
        [trabajar con archivos](/es/docs/Learn/Getting_started_with_the_web/Dealing_with_files).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarte con el lenguaje HTML, y adquirir algo de práctica
        escribiendo unos pocos elementos HTML.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es el HTML?

{{Glossary("HTML")}} ("_Hypertext Markup Language_") no es un lenguaje de programación. Es un _lenguaje de marcado_ que le dice a los navegadores web cómo estructurar las páginas web que estás visitando. Puede ser tan complejo o tan simple como desee el desarrollador web. El HTML consiste en una serie de {{Glossary("Element", "elementos")}}, que puedes utilizar para encerrar, delimitar o _marcar_ diferentes partes del contenido para hacer que aparezcan de una cierta manera, o actúen de determinada forma. Las {{Glossary("Tag", "etiquetas")}} que delimitan un fragmento de contenido pueden hacer que dicho contenido enlace con otra página, ponga una palabra en cursiva, etcétera. Por ejemplo, dada la siguiente línea de contenido:

```
Mi gato es muy gruñón
```

Si queremos que la línea sea independiente de otras, podemos especificar que es un párrafo encerrándola con una etiqueta de elemento de párrafo ({{htmlelement("p")}}):

```html
<p>Mi gato es muy gruñón</p>
```

> **Nota:** Las etiquetas en HTML no distinguen entre mayúsculas y minúsculas. Así que se pueden escribir tanto en mayúsculas como en minúsculas. Por ejemplo, una etiqueta {{htmlelement("title")}} se puede escribir como `<title>`, `<TITLE>`, `<Title>`, `<TiTle>`, etc., y funcionará correctamente. La mejor práctica, sin embargo, es escribir todas las etiquetas en minúsculas para mantener la coherencia y legibilidad, entre otros motivos.

## Anatomía de un elemento HTML

Exploremos un poco el elemento párrafo:

![Anatomía de los elementos HTML](grumpy-cat-small.png)

Las principales partes de nuestro elemento son:

- La **etiqueta de apertura**: consiste en el nombre del elemento (en este caso, `p`), encerrado entre **paréntesis angulares** de apertura y cierre. Esta etiqueta de apertura marca dónde comienza el elemento o comienza a tener efecto. En este ejemplo, precede al comienzo del texto del párrafo.
- El **contenido**: Este es el contenido del elemento. En este ejemplo, es el texto del párrafo.
- La **etiqueta de cierre**: Es lo mismo que la etiqueta de apertura, excepto que incluye una barra diagonal antes del nombre del elemento. Esto indica dónde termina el elemento; en este caso, dónde finaliza el párrafo. No incluir una etiqueta de cierre es un error común de principiante, y puede conducir a extraños resultados.

El **elemento** lo conforman la etiqueta de apertura, seguida del contenido, seguido de la etiqueta de cierre.

### Aprendizaje activo: crear tu primer elemento HTML

Edita la siguiente línea en el área _Entrada_ envolviéndola con las etiquetas `<em>` y `</em>`. Para _abrir el elemento_, coloca la etiqueta de apertura `<em>` al principio de la línea. Para _cerrar el elemento_, coloca la etiqueta de cierre `</em>` al final de la línea. ¡Obtienes una línea en cursiva! Puedes ver tus cambios actualizados automáticamente en la caja de texto de _Salida_.

Si te equivocas, siempre puedes volver al código anterior mediante el botón _Restablecer_. Si te quedas realmente atascado, pulsa el botón _Mostrar la solución_ para ver la solución.

```html hidden
<h2>Salida en vivo</h2>
<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="playable-code" style="min-height: 100px;width: 95%">
Este es mi texto.
</textarea>

<div class="controls">
  <input id="reset" type="button" value="Restablecer" />
  <input id="solution" type="button" value="Mostrar solución" />
</div>
```

```css hidden
html {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
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

var htmlSolution = "<em>Este es mi texto.</em>";
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

### Elementos anidados

Se pueden poner elementos dentro de otros elementos. Esto se llama **anidamiento**. Si quisiéramos decir que nuestro gato es **muy** gruñón, podríamos encerrar la palabra _muy_ en un elemento {{htmlelement("strong")}} para que aparezca destacada.

```html
<p>Mi gato es <strong>muy</strong> gruñón.</p>
```

Hay una forma correcta e incorrecta de anidar. En el ejemplo anterior, primero abrimos el elemento `p`, luego abrimos el elemento `strong`. Para un anidamiento adecuado, primero debemos cerrar el elemento `strong`, antes de cerrar el `p`.

El siguiente es un ejemplo de la forma _incorrecta_ de anidar:

```html example-bad
<p>Mi gato es <strong>muy gruñón.</p></strong>
```

Los elementos tienen que abrirse y cerrarse correctamente para que estén claramente dentro o fuera el uno del otro. Con el tipo de superposición en el ejemplo anterior, el navegador tiene que adivinar tu intención. Este tipo de adivinanzas puede producir resultados inesperados.

### Elementos de bloque y elementos en línea

Hay dos categorías importantes de elementos en HTML — Estos son los elementos de bloque y los elementos en línea.

- Los elementos de bloque forman un bloque visible en la página. Aparecerán en una línea nueva después de cualquier contenido anterior. Cualquier contenido que vaya después también aparecerá en una línea nueva. Los elementos a nivel de bloque suelen ser elementos estructurales de la página. Por ejemplo, un elemento a nivel de bloque puede representar encabezados, párrafos, listas, menús de navegación o pies de página. Un elemento a nivel de bloque no estaría anidado dentro de un elemento en línea, pero podría estar anidado dentro de otro elemento a nivel de bloque.
- Los elementos en línea están contenidos dentro de elementos de bloque y delimitan solo pequeñas partes del contenido del documento; (no párrafos enteros o agrupaciones de contenido) Un elemento en línea no hará que aparezca una nueva línea en el documento. Suele utilizarse con texto. Por ejemplo es el caso de un elemento {{htmlelement("a")}} (hipervínculo) o elementos de énfasis como {{htmlelement("em")}} o {{htmlelement("strong")}}.

Considera el siguiente ejemplo:

```html
<em>primero</em><em>segundo</em><em>tercero</em>

<p>cuarto</p>
<p>quinto</p>
<p>sexto</p>
```

{{htmlelement("em")}} es un elemento en línea. Así, como puedes observar, los tres primeros elementos se sitúan en la misma línea, uno tras otro sin espacio entre ellos. Por otro lado, {{htmlelement("p")}} es un elemento a nivel de bloque. Cada elemento _p_ aparece en una nueva línea, con un espacio arriba y abajo. (El espaciado se debe al [estilo CSS](/es/docs/Learn/CSS/Introduction_to_CSS) predeterminado que el navegador aplica a los párrafos).

{{ EmbedLiveSample('Elementos_de_bloque_y_elementos_en_línea', 700, 200, "", "") }}

> **Nota:** HTML5 redefinió las categorías de elementos: consulta [Categorías de contenido de elementos](https://html.spec.whatwg.org/multipage/indices.html#element-content-categories). Si bien estas definiciones son más precisas y menos ambiguas que sus predecesoras, las nuevas definiciones son mucho más complicadas de entender que _block_ e _inline_ . Este artículo seguirá con estos dos términos.

> **Nota:** Los términos «en bloque» (block) y «en línea» (inline), tal como se usan en este tema, no se deberían confundir con [los tipos de casillas de CSS](/es/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes) que se conocen con el mismo nombre. Aunque de manera predeterminada están relacionados, el hecho de cambiar el tipo de aspecto visual del CSS no cambia la categoría del elemento ni afecta a aquellos elementos que pueda contener. Una de las razones por las que HTML5 abandonó el uso de estos términos fue para evitar este tipo de confusión.

> **Nota:** Puedes encontrar referencias útiles que incluyen listas de elementos de bloque y elementos en línea. Consulta [Elementos en bloque](/es/docs/Web/HTML/Block-level_elements) y [Elementos en línea](/es/docs/Web/HTML/Elementos_en_línea).

### Elementos vacíos

No todos los elementos siguen el patrón de etiqueta de apertura, contenido y etiqueta de cierre. Algunos elementos consisten solo en una etiqueta única, que se utiliza generalmente para insertar/incrustar algo en el documento en el lugar donde se le quiere incluir. Por ejemplo, el elemento {{htmlelement("img")}} inserta una imagen en la página:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" />
```

Este texto mostrará lo siguiente en tu página:

{{ EmbedLiveSample('Elementos_vacíos', 700, 300, "", "", "hide-codepen-jsfiddle") }}

> **Nota:** Los elementos vacíos en ocasiones también se llaman elementos _nulos_ o _vanos_ (_void elements_).

## Atributos

Los elementos también pueden tener atributos. Los atributos tienen este aspecto:

![atributo html](grumpy-cat-attribute-small.png)

Los atributos contienen información extra sobre el elemento que no se mostrará en el contenido. En este caso, el atributo `class` asigna al elemento un identificador que se puede utilizar para dotarlo de información de estilo.

Un atributo debería tener:

- Un espacio entre este y el nombre del elemento. (Para un elemento con más de un atributo, los atributos también deben estar separados por espacios).
- El nombre del atributo, seguido por un signo igual.
- Un valor del atributo, rodeado de comillas de apertura y cierre.

### Aprendizaje activo: Añadir atributos a un elemento

Otro ejemplo de un elemento es {{htmlelement("a")}}. Esto significa _ancla_. Una ancla puede convertir el texto que encierra en un hipervínculo. Las anclas pueden tener varios atributos, pero varios son como sigue:

- `href`
  - : El valor de este atributo indica la dirección web a la que se quiere que apunte el enlace, que será hacia donde nos lleve el navegador cuando se haga clic sobre el elemento. Por ejemplo, `href="https://www.mozilla.org/"`.
- `title`
  - : El atributo `title` añade información adicional sobre el enlace, como puede ser el título de la página que vinculas. Por ejemplo, `title="La página de inicio de Mozilla"`. Esta información aparecerá cuando se le pase el ratón por encima.
- `target`
  - : El atributo `target` especifica el contexto de navegación que va a usar para mostrar el enlace. Por ejemplo, `target="_blank"` abrirá el enlace en una nueva pestaña. Si quieres mostrar el enlace en la pestaña activa, simplemente omite este atributo.

Edita la línea de abajo en el área de _Entrada_ para convertirlo en un enlace a tu sitio web favorito.

1. Añade el elemento `<a>`.
2. Añade el atributo `href` y el atributo `title`.
3. Especifica el atributo `target` para abrir el enlace en una nueva pestaña.

Los cambios se actualizarán inmediatamente en la zona de _Salida_. Deberías ver un enlace que mostrará el contenido del atributo `title` cuando pases el ratón encima, y que te llevará a la dirección web indicada por el atributo `href` cuando hagas clic. Recuerda que debes incluir un espacio entre el nombre del elemento y cada atributo.

Si te equivocas, siempre puedes restablecer el código anterior pulsando el botón _Restablecer_. Si te quedas realmente atascado, pulsa el botón _Mostrar la solución_ para ver la solución.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
&#x26;lt;p&#x26;gt;Un enlace a mi sitio web favorito.&#x26;lt;/p&#x26;gt;
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
  '<p>Un enlace a mi <a href="https://www.mozilla.org/" title="La página de inicio de Mozilla" target="_blank">sitio web favorito</a>.</p>';
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

### Atributos booleanos

En ocasiones puedes ver atributos escritos sin valor. Esto está permitido. Estos se denominan atributos booleanos. Los atributos booleanos solo pueden tener un valor, que generalmente es el mismo que el nombre del atributo. Por ejemplo, considera el atributo [`disabled`](/es/docs/Web/HTML/Element/input#disabled), que puedes asignar a los elementos de entrada del formulario. (Usa esto para _deshabilitar_ los elementos de entrada del formulario para que el usuario no pueda realizar entradas. Los elementos desactivados suelen tener una apariencia atenuada). Por ejemplo:

```bash
<input type="text" disabled="disabled">
```

De manera abreviada, también es posible escribirlo como se describe a continuación (además, se ha incluido un elemento de entrada de formulario no desactivado como referencia, para dar una idea más precisa de lo que sucede):

```html
<!-- el uso del atributo deshabilitado evita que el usuario final introduzca texto en el cuadro de entrada -->
<input type="text" disabled />

<!-- se permite la entrada de texto, ya que no contiene el atributo deshabilitado -->
<input type="text" />
```

Como referencia, el ejemplo anterior también incluye un elemento de entrada de formulario no deshabilitado. El HTML del ejemplo anterior produce este resultado:

{{ EmbedLiveSample('Atributos_booleanos', 700, 100, "", "", "hide-codepen-jsfiddle") }}

### Omitir comillas en valores de atributos

Cuando observas diferentes páginas web, puedes encontrarte con todo tipo de estilos de etiquetado extraños, que incluyen valores de atributos sin comillas. Esto se permite en ciertas circunstancias, pero interrumpirá la edición en otras. Por ejemplo, si volvemos a revisar el ejemplo del enlace, sería posible escribir una versión básica con solo el atributo `href`, así:

```html
<a href=https://www.mozilla.org/>mi sitio web favorito</a>
```

Sin embargo, las cosas no funcionarán cuando a este estilo se añada el atributo `title`:

```html example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>mi sitio web favorito</a>
```

En este punto el navegador interpretará mal el cambio y pensará que el atributo `title` corresponde a tres atributos: un atributo `title` con el valor _The_ y dos atributos booleanos: `Mozilla` y `homepage`. ¡Obviamente, esta no es la intensión! Causará errores o comportamientos inesperados, como puedes ver en el ejemplo en vivo a continuación. ¡Intenta colocar el cursor sobre el enlace para ver el texto del título!

{{ EmbedLiveSample('Omitir_comillas_en_valores_de_atributos', 700, 100, "", "", "hide-codepen-jsfiddle") }}

Incluye **siempre** las comillas de atributos. Evita tales problemas y da como resultado un código más legible.

### ¿Comillas simples o dobles?

En este artículo todos los atributos se han incluido en comillas dobles. Sin embargo, se pueden ver comillas simples en algún código HTML. Es una cuestión de estilo. Puedes elegir libremente cuál prefieres. Ambas líneas de código son equivalentes:

```html
<a href="http://www.ejemplo.com">Un enlace a mi ejemplo.</a>

<a href="http://www.ejemplo.com">Un enlace a mi ejemplo.</a>
```

Asegúrate de no mezclar ambos tipos de comillas. El siguiente ejemplo muestra un tipo de mezcla de comillas que saldrá mal:

```html example-bad
<a href="http://www.ejemplo.com'>Un enlace a mi ejemplo.</a>
```

Si utilizas un tipo de comillas en tu documento HTML, puedes incluir el otro tipo de comillas para tus valores de atributo sin que esto te cause problemas:

```html
<a href="http://www.ejemplo.com" title="¿A que es 'divertido'"
  >Un enlace a mi ejemplo.</a
>
```

Sin embargo, si deseas anidar unas comillas dentro de otras del mismo tipo (ya sea simples o dobles), tendrás que utilizar entidades HTML para las comillas. Por ejemplo, el siguiente código no va a funcionar:

```html example-bad
<a href='http://www.ejemplo.com' title='¿A que es 'divertido'?'>Un enlace a mi ejemplo.</a>
```

Así que tendrás que hacer esto:

```html
<a href="http://www.ejemplo.com" title="¿A que es 'divertido'?"
  >Un enlace a mi ejemplo.</a
>
```

## Anatomía de un documento HTML

Los elementos HTML no son muy útiles por sí mismos. Ahora veremos cómo combinar los elementos individuales para formar una página HTML completa:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```

Aquí tenemos:

1. `<!DOCTYPE html>`: El elemento _doctype_. En sus inicios, cuando el HTML llevaba poco tiempo (alrededor de 1991-1992), los _doctypes_ servían como enlaces al conjunto de reglas que la página HTML debía seguir para que fuera considerado buen HTML. Un elemento _doctype_ de aquella época podía parecerse a esto:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   En la actualidad se ignora y se considera un legado histórico que hay que incluir para que todo funcione correctamente. `<!DOCTYPE html>` es la secuencia de caracteres más corta que se acepta como elemento _doctype_ válido. Eso es lo único que realmente necesitas saber.

2. `<html></html>`: El elemento `<html>`. Este elemento envuelve todo el contenido de la página. A veces se lo conoce como el elemento raíz.
3. `<head></head>`: El elemento `<{{htmlelement("head")}}>` (cabecera). Este elemento actúa como contenedor para todos los parámetros que quieras incluir en el documento HTML que _no serán_ visibles a los visitantes de la página. Incluye cosas como palabras clave y la descripción de la página que quieras mostrar en los resultados de búsqueda, así como la hoja de estilo para formatear nuestro contenido, declaraciones de codificación de caracteres y más. Aprenderás más acerca de esto en el siguiente artículo de la serie.
4. `<meta charset="utf-8">`: Este elemento establece que tu documento HTML usará la codificación UTF-8, que incluye la gran mayoría de caracteres de todos los idiomas humanos escritos. En resumen: puede gestionar cualquier contenido textual que pongas en tu documento. No hay razón para no configurar este valor y te puede ayudar a evitar problemas más adelante.
5. `<title></title>`: El elemento {{htmlelement("title")}}. Este establece el título de la página, que es el título que aparece en la pestaña del navegador en la que se carga la página. El título de la página también se utiliza para describir la página cuando se marca como favorita.
6. `<body></body>`: El elemento `<body>`. Contiene todo el contenido que quieres mostrar a los usuarios cuando visitan tu página, ya sea texto, imágenes, vídeos, juegos, pistas de audio reproducibles o cualquier otra cosa.

### Aprendizaje activo: Añadir algunas características a un documento HTML

Si quieres escribir algo de HTML en tu ordenador local para experimentar, puedes:

1. Copiar el ejemplo de la página HTML del punto anterior.
2. Crear un archivo nuevo en un editor de texto.
3. Pegar el código en el nuevo archivo de texto.
4. Guardar el archivo como `index.html`.

> **Nota:** También puedes encontrar esta plantilla básica de HTML en el [repositorio GitHub del Área MDN Learning](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html).

Ahora puedes abrir este archivo en un navegador web para ver cómo se ve el código renderizado. Edita el código y actualiza el navegador para ver cuál es el resultado. En principio se verá algo así:

![Una sencilla página HTML que dice esta es mi página](template-screenshot.png)

En este ejercicio, puedes editar el código en tu ordenador como se indica arriba, o puedes editarlo en la ventana editable que tienes a continuación (la ventana editable representa solo el contenido del elemento {{htmlelement("body")}}, en este caso). Intenta reproducir los siguientes pasos:

- Justo debajo de la etiqueta de apertura {{htmlelement("body")}}, añade un título principal para el documento. Este deberá estar dentro de una etiqueta de apertura `<h1>` y una etiqueta de cierre `</h1>`.
- Edita el contenido del párrafo e incluye algún texto sobre algo que te interese.
- Pon las palabras importantes dentro de etiquetas `<strong>` de apertura y `</strong>` de cierre para que destaquen en negrita.
- Añade un enlace a tu párrafo, como se ha explicado [anteriormente en este mismo artículo](/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Active_learning_Adding_attributes_to_an_element).
- Agrega una imagen a tu documento. Colócala debajo del párrafo, como [se explicó anteriormente en el artículo](/es/Learn/HTML/Introduction_to_HTML/Getting_started#Empty_elements). Ganarás puntos extra si consigues enlazar a una imagen diferente (de tu propio ordenador o de cualquier otro lugar de la web).

Si te equivocas, siempre puedes restablecer el código anterior pulsando el botón _Restablecer_. Si te quedas realmente atascado, pulsa el botón _Mostrar la solución_ para ver la solución.

```html hidden
<h2>Salida en vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editable</h2>
<p class="a11y-label">
  Pulsa Esc para quitar el foco del área de código (Tab inserta un carácter de
  tabulación).
</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
&#x26;lt;p&#x26;gt;Esta es mi página&#x26;lt;/p&#x26;gt;
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

h1 {
  color: blue;
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

img {
  max-width: 100%;
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
  '<h1>Un poco de música</h1><p>Realmente disfruto <strong>tocar la batería</strong>. Uno de mis bateristas favoritos es Neal Peart, que toca en la banda <a href="https://en.wikipedia.org/wiki/Rush_%28band%29" title="artículo de Wikipedia de">Rush</a>. Mi álbum favorito de Rush actualmente es <a href="http://www.deezer.com/album/942295">Fotografías de la película</a>.</p> <img src="http://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg">';
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

{{ EmbedLiveSample('Código_reproducible_3', 700, 600, "", "", "hide-codepen-jsfiddle") }}

### Los espacios en blanco en HTML

En los ejemplos anteriores se han incluido espacios en blanco y saltos de línea en el código. Esto realmente no es necesario. Los dos siguientes fragmentos de código son equivalentes:

```html
<p>Los perros son tontos.</p>

<p>Los perros son tontos.</p>
```

No importa cuántos espacios en blanco se utilicen (incluye tanto caracteres de espacio como saltos de línea) el intérprete de HTML reduce cada secuencia de espacio en blanco a un único espacio al interpretar el código. Entonces, ¿por qué utilizar espacios en blanco? La respuesta está en la legibilidad.

Es más fácil comprender lo que está sucediendo en tu código si lo tienes bien formateado. En nuestro HTML cada elemento anidado está sangrado dos espacios más con respecto al exterior. Depende de ti qué estilo de formato utilizas (cuántos espacios para cada nivel de sangría, por ejemplo) pero debes plantearte el uso de algún tipo de formato.

## Referencias a entidades: Inclusión de caracteres especiales en HTML

En HTML, los caracteres `<`, `>`,`"`,`'` y `&` son caracteres especiales. Forman parte de la sintaxis HTML. Entonces, ¿cómo incluye uno de estos caracteres especiales en tu texto? Por ejemplo, si deseas utilizar un signo comercial o menor que, y no hacer que se interprete como código.

Haces esto con referencias de caracteres. Estos son códigos especiales que representan caracteres, para ser usados en estas circunstancias exactas. Cada referencia de caracter comienza con un signo de ampersand (&) y finaliza con un punto y coma (;).

| Caracter literal | Equivalente de referencia de caracteres |
| ---------------- | --------------------------------------- |
| <                | \&lt;                                   |
| >                | \&gt;                                   |
| "                | \&quot;                                 |
| '                | \&apos;                                 |
| &                | \&amp;                                  |

El equivalente de referencia de caracter podría recordarse fácilmente porque el texto que utiliza se puede ver como menor que para '\&lt;' , cita para ' \&quot; ' y de manera similar para otros. Para obtener más información sobre la referencia de entidad, consulta [Anexo:Referencias a entidades de caracteres XML y HTML](https://es.wikipedia.org/wiki/Anexo:Referencias_a_entidades_de_caracteres_XML_y_HTML) en (Wikipedia).

Considera los dos siguientes párrafos:

```html
<p>En HTML, defines un párrafo con el elemento</p>
<p>.</p>

<p>En HTML, defines un párrafo con el elemento &lt;p&gt;.</p>
```

En la salida en vivo de abajo, puedes ver que el primer párrafo salió mal. El navegador interpreta la segunda instancia de `<p>` como el inicio de un nuevo párrafo. El segundo párrafo se ve bien porque hemos remplazado `<` y `>` por sus referencias correspondientes.

{{ EmbedLiveSample('Referencias_a_entidades_Inclusión_de_caracteres_especiales_en_HTML', 700, 200) }}

> **Nota:** En la Wikipedia se puede localizar un listado de todas las referencias de entidades de caracteres HTML disponibles: [Anexo:Referencias a entidades de caracteres XML y HTML](https://es.wikipedia.org/wiki/Anexo:Referencias_a_entidades_de_caracteres_XML_y_HTML). Observa que no necesitas usar ninguna referencia de entidad más para ningún otro de estos símbolos porque los navegadores modernos gestionan estos símbolos correctamente siempre y cuando en tu HTML hayas [establecido la codificación de el juego de caracteres universal UTF-8](/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Specifying_your_document's_character_encoding).

## Comentarios HTML

En HTML hay un mecanismo para escribir comentarios en el código. Los comentarios son ignorados por el navegador y, por tanto, son invisibles para el usuario. El propósito de los comentarios es permitirte incluir notas en el código para explicar tu lógica o codificación. Esto es muy útil si regresas a un código base después de estar ausente el tiempo suficiente como para no recordarlo por completo. Del mismo modo, los comentarios son invaluables ya que diferentes personas están realizando cambios y actualizaciones.

Para convertir en un comentario una sección de contenido de tu archivo HTML, debes delimitarlo con los marcadores especiales `<!--` y `-->`. Por ejemplo:

```html
<p>No soy un comentario</p>

<!-- <p>¡Yo sí!</p> -->
```

Como puedes ver a continuación, el primer párrafo aparece, pero el segundo no.

{{ EmbedLiveSample('Comentarios_HTML', 700, 100, "", "", "hide-codepen-jsfiddle") }}

## Resumen

Has llegado al final del artículo. Espero que hayas disfrutado del recorrido los conceptos básicos del HTML.
En este punto ya deberías entender el lenguaje, cómo funciona en un nivel básico y deberías poder escribir algunos elementos y atributos. También deberías poder escribir algunos elementos y atributos. Los artículos posteriores de este módulo profundizan en algunos de los temas aquí presentados, además de presentar otros conceptos del lenguaje.

> **Nota:** En este punto, a medida que empieces a aprender más sobre HTML, es posible que también desees comenzar a explorar los conceptos básicos de las Hojas de estilo en cascada (_Cascading style sheets_) o [CSS](/es/docs/Learn/CSS). CSS, es el lenguaje utilizado para estilizar páginas web. (por ejemplo, cambiar fuentes o colores, o alterar el diseño de la página) HTML y CSS funcionan bien juntos, como pronto descubrirás.

## Ve también

- [Aplicación de color a elementos HTML mediante CSS](/es/docs/Web/HTML/Applying_color)

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

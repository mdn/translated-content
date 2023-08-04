---
title: Métodos útiles con cadenas
slug: Learn/JavaScript/First_steps/Useful_string_methods
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

Ahora que hemos analizado los conceptos básicos de las cadenas, aumentemos la velocidad y comencemos a pensar qué operaciones útiles podemos hacer en cadenas con métodos integados, como encontrar la longitud de una cadena de texto, unir y dividir cadenas, sustituyendo un caracter de una cadena por otro, y más.

| Prerequisitos: | Conocimientos básicos de informática, una comprensión básica de HTML y CSS, una comprensión de lo que es JavaScript.                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Objectivo:     | Comprender que las cadenas son objetos y aprender a usar algunos de los métodos básicos disponibles en esos objetos para manipular cadenas. |

## Cadenas como objetos

Ya lo dijimos antes, y lo diremos de nuevo — _todo_ es un objeto en JavaScript. Cuando creas una cadena, por ejemplo, usando:

```js
let string = "This is my string";
```

Tu variable se convierte en una instancia del objeto cadena y, como resultado, tiene una gran cantidad de propiedades y métodos disponibles. Puedes ver esto si vas a la página de objeto {{jsxref("String")}} y miras la lista al costado de la página.

**Ahora, antes de que tu cerebro comience a derretirse, ¡no te preocupes!** Realmente no necesitas saber acerca de la mayoría de estos principios en tu viaje de aprendizaje. Pero hay algunos que posiblemente utilizarás con bastante frecuencia así como veremos aquí.

Ingresemos algunos ejemplos en una nueva consola. A continuación, proporcionamos uno (también puedes [abrir esta consola](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) en una ventana o pestaña por separado, o si prefieres usar la [consola de desarrolladores del navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools)).

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript console</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0c323d;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0c323d;
        color: #809089;
      }

      div {
        clear: both;
      }
    </style>
  </head>
  <body></body>

  <script>
    var geval = eval;
    function createInput() {
      var inputDiv = document.createElement("div");
      var inputPara = document.createElement("p");
      var inputForm = document.createElement("input");

      inputDiv.setAttribute("class", "input");
      inputPara.textContent = ">";
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      inputForm.addEventListener("change", executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch (e) {
        var result = "error — " + e.message;
      }

      var outputDiv = document.createElement("div");
      var outputPara = document.createElement("p");

      outputDiv.setAttribute("class", "output");
      outputPara.textContent = "Result: " + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = "0.5";

      createInput();
    }

    createInput();
  </script>
</html>
```

{{ EmbedLiveSample('Hidden_code', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

### Encontrar la longitud de un cadena

Esto es fácil — simplemente usa la propiedad {{jsxref("String.prototype.length", "length")}} . Intenta ingresar las siguientes líneas:

```js
let browserType = "mozilla";
browserType.length;
```

Esto debería devolver el número 7, porque "mozilla" tiene 7 caracteres. Esto es útil por muchas razones; por ejemplo, es posible que quieras buscar las longitudes de una serie de nombres para que puedas mostrarlos en orden de su longitud, o dejar que un usuario sepa que un nombre ingresado en un campo de formulario es demasiado largo o si tiene una longitud determinada.

### Extrayendo un caracter específico de la cadena

En una nota relacionada, puedes devolver cualquier carácter de una cadena usando la **notación de corchetes** — esto significa que incluyes corchetes (`[]`) al final del nombre de tu variable. Dentro de los corchetes, incluye el número del caracter que deseas extraer, así que, por ejemplo, para extraer la primera letra harías esto:

```js
browserType[0];
```

¡ Las computadoras cuentan desde 0, no desde 1! Para extraer el último caracter de _cualquier_ cadena, podríamos usar la siguiente línea, combinando esta técnica con la propiedad `length` que vimos arriba:

```js
browserType[browserType.length - 1];
```

El largo de "mozilla" es 7, pero es porque el contador comienza en 0, la posición del caracter es 6, por lo tanto, necesitamos `length-1`. Puedes usar esto para, por ejemplo, encontrar la primera letra de una serie de cadenas y ordenarlas alfabéticamente.

### Encontrar una subcadena dentro de una cadena y extraerla

1. Algunas veces querrás encontrar si hay una cadena más pequeña dentro de una más grande (generalmente decimos _si una subcadena está presente dentro de una cadena_). Esto se puede hacer utilizando el método {{jsxref("String.prototype.indexOf()", "indexOf()")}}, que toma un único [parámetro](/es/docs/Glossary/Parameter) — la subcadena que deseas buscar. Intenta esto:

   ```js
   browserType.indexOf("zilla");
   ```

   Esto nos dá un resultado de 2, porque la subcadena "zilla" comienza en la posición 2 (0, 1, 2 — por tanto 3 caracteres en total) dentro de "mozilla". Tal código podría usarse para filtrar cadena. Por ejemplo, podemos tener una lista de direcciones web y solo queremos imprimir las que contienen "mozilla".

2. Esto se puede hacer de otra manera, que posiblemente sea aún más efectiva. Intenta lo siguiente:

   ```js
   browserType.indexOf("vanilla");
   ```

   Esto debería darte un resultado de `-1` — Esto se devuelve cuando la subcadena, en este caso 'vanilla', no es encontrada en la cadena principal.

   Puedes usar esto para encontrar todas las instancias de las cadenas que **no** contengan la subcadena 'mozilla', o **hacerlo,** si usas el operador de negación, como se muestra a continuación. Podrías hacer algo como esto:

   ```js
   if (browserType.indexOf("mozilla") !== -1) {
     // do stuff with the string
   }
   ```

3. Cuando sabes donde comienza una subcadena dentro de una cadena, y sabes hasta cuál caracter deseas que termine, puede usarse {{jsxref("String.prototype.slice()", "slice()")}} para extraerla. Prueba lo siguiente:

   ```js
   browserType.slice(0, 3);
   ```

   Esto devuelve "moz" — El primer parámetro es la posición del caracter en la que comenzar a extraer, y el segundo parámetro es la posición del caracter posterior al último a ser extraído. Por lo tanto, el corte ocurre desde la primera posición en adelante, pero excluyendo la última posición. En este ejemplo, dado que el índice inicial es 0, el segundo parámetro es igual a la longitud de la cadena que se devuelve.

4. Además, si sabes que deseas extraer todos los caracteres restantes de una cadena después de cierto caracter, ¡no necesitas incluir el segundo parámetro! En cambio, solo necesitas incluir la posición del caracter desde donde deseas extraer los caracteres restante en la cadena. Prueba lo siguiente:

   ```js
   browserType.slice(2);
   ```

   Esto devuelve "zilla" — debido a que la posición del caracter de 2 es la letra z, y como no incluiste un segundo parámetro, la subcadena que que se devolvío fué el resto de los caracteres de la cadena.

> **Nota:** El segundo parámetro de `slice()` es opcional: si no lo incluyes, el corte termina al final de la cadena original. Hay otras opciones también; estudia la página {{jsxref("String.prototype.slice()", "slice()")}} para ver que mas puedes averiguar.

### Cambiando todo a mayúscula o minúscula

Los métodos de cadena {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} y {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} toman una cadena y convierten todos sus caracteres a mayúscula o minúscula, respectivamente. Esto puede ser útil, por ejemplo, si deseas normalizar todos los datos ingresados por el usuario antes de almacenarlos en una base de datos.

Intentemos ingresar las siguentes líneas para ver que sucede:

```js
let radData = "My NaMe Is MuD";
radData.toLowerCase();
radData.toUpperCase();
```

### Actualizando partes de una cadena

En una cadena puedes reemplazar una subcadena por otra usando el método {{jsxref("String.prototype.replace()", "replace()")}}. Esto funciona de manera muy simple a un nivel básico, aunque hay algunas cosas avanzadas que puedes hacer con él en lo que todavía no entraremos.

Toma dos parámetros — la cadena que deseas reemplazar, y la cadena con la que deseas reemplazarla. Prueba este ejemplo:

```js
browserType.replace("moz", "van");
```

Ten en cuenta que para obtener realmente el valor actualizado reflejado en la variable `browserType` en un programa real, debes establecer que el valor de la variable sea el resultado de la operación; No solo actualiza el valor de la subcadena automáticamente. Así que tendrías que escribir esto: `browserType = browserType.replace('moz','van');`

## Ejemplos de aprendizaje activo

En esta sección, conseguiremos que intentes escribir algún código de manipulación de cadenas. En cada ejercicio a continuación, tenemos una matríz de cadenas y un bucle que procesa cada valor en la matríz y lo muestra en una lista con viñetas. No es necesario que comprendas matrices y bucles en este mismo momento — estos se explicarán en futuros artículos. Todo lo que necesitas hacer en cada caso es escribir el código que dará de salida a las cadenas en el formato que las queremos.

Cada ejemplo viene con un botón de "Reset" , Que puedes utilizar para reestablecer el código si cometes un error y no puedes hacerlo funcionar nuevamente, y un botón "Show solution" que puedes presionar para ver una posible respuesta si te encuentras realmente atorado.

### Filtrado de mensajes de saludo

En el primer ejercicio, comenzamos de manera simple — tenemos una matríz de mensajes de tarjetas de felicitación, pero queremos ordenarlos para que aparezcan solo los mensajes de Navidad. Queremos que completes un test condicional dentro de la estructura `if( ... )`, para comprobar cada cadena y solo imprimirla en la lista si es un mensaje de Navidad.

1. Primero piensa en cómo puedes probar si el mensaje en cada caso es un mensaje de Navidad. ¿Qué cadena está presente en todos esos mensajes, y qué método podrías usar para comprobar si está presente?
2. A continuación, deberá escribir un test condicional de la forma _operand1 operator operand2_. ¿Es lo que está a la izquierda igual a lo que está a la derecha? O en este caso, ¿el método llamado a la izquierda devuelve el resultado a la derecha?
3. Sugerencia: En este caso, probablemente sea más útil comprobar si la llamada al método _no es_ igual a un determinado resultado.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 290px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar greetings = ['Happy Birthday!',\n 'Merry Christmas my love',\n 'A happy Christmas to all the family',\n 'You\\'re all I want for Christmas',\n 'Get well soon'];\n\nfor(var i = 0; i < greetings.length; i++) {\n var input = greetings[i];\n if(greetings[i].indexOf('Christmas') !== -1) {\n var result = input;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n }\n}";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

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

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', '100%', 590, "", "", "hide-codepen-jsfiddle") }}

### Corrección de mayúscula

En este ejercicio tenemos los nombres de las ciudades del Reino Unido, Pero las mayúsculas estan completamente desordenadas. Queremos que los cambies para que estén en minúscula, a excepción de la primera letra. Una buena manera de hacerlo es:

1. Convierte la totalidad de la cadena contenida en la variable `input` a minúsculas y guárdalas en una nueva variable.
2. Toma la primera letra de la cadena en esta nueva variable y guárdala en otra variable.
3. Usando esta última variable como una subcadena, reemplaza la primera letra de la cadena en minúscula con la subcadena en mayúscula. Almacena el resultado de este procedimiento de reemplazo en otra nueva variable.
4. Cambia el valor de la variable `result` a igual al resultado final. en vez de `input`.

> **Nota:** Una pista — los parámetros de los métodos de cadena no tienen que ser literales de cadenas; también pueden ser variables, o incluso variables con un método invocados en ellas.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 250px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];\n\nfor(var i = 0; i < cities.length; i++) {\n var input = cities[i];\n var lower = input.toLowerCase();\n var firstLetter = lower.slice(0,1);\n var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n var result = capitalized;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n\n}";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

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

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_2', '100%', 550, "", "", "hide-codepen-jsfiddle") }}

### Creando nuevas cadenas de partes viejas

En este último ejercicio, la matríz contiene un conjunto de cadenas que contienen información sobre estaciones de tren en el Norte de Inglaterra. Las cadenas son elementos de datos que contienen el código de estación de tres letras, seguidos de más datos legibles por máquina, seguidos de un punto y coma, seguidos por el nombre de la estación legible por humanos. Por ejemplo:

```
MAN675847583748sjt567654;Manchester Piccadilly
```

Queremos extraer el código y el nombre de la estación, y juntarlos en una cadena con la siguiente estructura:

```
MAN: Manchester Piccadilly
```

Recomendamos hacerlo así:

1. Extrae las tres letras del código de estación y almacénalo en una nueva variable.
2. Encuentra el número de índice de caracter del punto y coma.
3. Extrae el nombre de la estación legible por humanos utilizando el número de índice de caracter del punto y coma a modo de referencia y guardalo en una nueva variable.
4. Concatenar las dos nuevas variables y un literal de cadena para hacer la cadena final.
5. Cambia el valor de la variable de `result` a igual a la cadena final, no a `input`.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 285px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar stations = ['MAN675847583748sjt567654;Manchester Piccadilly',\n 'GNF576746573fhdg4737dh4;Greenfield',\n 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',\n 'SYB4f65hf75f736463;Stalybridge',\n 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];\n\nfor(var i = 0; i < stations.length; i++) {\n var input = stations[i];\n var code = input.slice(0,3);\n var semiC = input.indexOf(';');\n var name = input.slice(semiC + 1);\n var result = code + ': ' + name;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n}";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

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

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_3', '100%', 585, "", "", "hide-codepen-jsfiddle") }}

## Conclusión

No puedes negar el hecho de que ser capaz de manejar palablas y oraciones en la programación es muy importante — especialmente en JavaScript, ya que los sitios web tratan sobre la comunicación con las personas. Este artículo te ha proporcionado los conceptos básicos que necesitas saber sobre la manipulación de cadenas por ahora. Esto debería servirte bien a medida que abordas temas más complejos en el futuro. A continuación, vamos a ver el último tipo importante de datos en el que necesitamos enfocarnos en el corto plazo — matrices.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

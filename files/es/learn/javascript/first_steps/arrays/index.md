---
title: Arrays
slug: Learn/JavaScript/First_steps/Arrays
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

## Arreglos o Matrices

En este último artículo de este módulo, veremos las matrices — una manera ordenada de almacenar una lista de elementos de datos bajo un solo nombre de variable. Aquí vemos por qué esto es útil, luego exploramos cómo crear una matriz, recuperar, agregar y eliminar elementos almacenados en una matriz, y más.

| Prerrequisitos: | Conocimientos básicos de informática, una comprensión básica de HTML y CSS, una idea de lo que es JavaScript. |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| Objectivo:      | Para entender qué son las matrices y cómo manipularlas en JavaScript.                                         |

## ¿Qué es una matriz?

Las matrices se describen como "objetos tipo lista"; básicamente son objetos individuales que contienen múltiples valores almacenados en una lista. Los objetos de matriz pueden almacenarse en variables y tratarse de la misma manera que cualquier otro tipo de valor, la diferencia es que podemos acceder individualmente a cada valor dentro de la lista y hacer cosas útiles y eficientes con la lista, como recorrerlo con un bucle y hacer una misma cosa a cada valor. Tal vez tenemos una serie de productos y sus precios almacenados en una matriz, y queremos recorrerlos e imprimirlos en una factura, sumando todos los precios e imprimiendo el total en la parte inferior.

Si no tuvieramos matrices, tendríamos que almacenar cada elemento en una variable separada, luego llamar al código que hace la impresión y agregarlo por separado para cada artículo. Esto sería mucho más largo de escribir, menos eficiente y más propenso a errores. si tuviéramos 10 elementos para agregar a la factura, ya sería suficientemente malo, pero ¿ qué pasa con 100 o 1000 artículos? Volveremos a este ejemplo más adelante en el artículo.

Como en artículos anteriores, aprendamos sobre los aspectos básicos reales de las matrices ingresando algunos ejemplos en una consola de JavaScript. A continuación proporcionamos uno (también puedes [abrir en consola](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) en una pestaña o ventana separadas, o usar la [consola de desarrollador de navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools), si lo prefieres).

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

      if (document.querySelectorAll("div").length > 1) {
        inputForm.focus();
      }

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

### Creando una matriz

Las matrices se construyen con corchetes, que contiene una lista de elementos separdos por comas.

1. Digamos que queríamos almacenar una lista de compras en una matriz — haríamos algo como lo siguiente. Ingresa las siguientes líneas en la consola:

   ```js
   let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping;
   ```

2. En este caso, cada elemento de la matriz es una cadena, pero ten en cuenta que puedes almacenar cualquier elemento en una matriz — cadena, número, objeto, otra variable, incluso otra matriz. También puedes mezclar y combinar tipos de elementos — no todos tienen que ser números, cadenas, etc. Prueba estos:

   ```js
   let sequence = [1, 1, 2, 3, 5, 8, 13];
   let random = ["tree", 795, [0, 1, 2]];
   ```

3. Intenta creando un par de matrices por tu cuenta, antes de continuar.

### Accediendo y modificando elementos de la matriz

Puedes entonces acceder a elementos individuales en la matriz mediante la notación de corchetes, del mismo modo que [accediste a las letras de una cadena](/es/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character).

1. Ingresa lo siguiente en tu consola:

   ```js
   shopping[0];
   // returns "bread"
   ```

2. también puedes modificar un elemento en una matriz simplemente dando a un item de la matriz un nuevo valor. Prueba esto:

   ```js
   shopping[0] = "tahini";
   shopping;
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > **Nota:** Lo dijimos antes, pero solo como recordatorio — ¡ las computadoras comienzan a contar desde 0!

3. Ten en cuenta que una matriz dentro de otra matriz se llama matriz multidimensional. Puedes acceder a los elementos de una matriz que estén dentro de otra, encadenando dos pares de corchetes. Por ejemplo, para acceder a uno de los elementos dentro de la matriz, que a su vez, es el tercer elemento dentro de la matriz `random` (ver sección anterior), podríamos hacer algo como esto:

   ```js
   random[2][2];
   ```

4. Intenta seguir jugando y haciendo algunas modificaciones más a tus ejemplos de matriz antes de continuar.

### Encontrar la longitud de una matriz

Puedes averiguar la longitud de una matriz (cuántos elementos contiene) exactamente de la misma manera que determinas la longitud (en caracteres) de una cadena— utilizando la propiedad {{jsxref("Array.prototype.length","length")}}. Prueba lo siguiente:

```js
sequence.length;
// should return 7
```

Esto tiene otros usos, pero se usa más comunmente para indicarle a un ciclo que continúe hasta que haya recorrido todos los elementos de la matriz. Así por ejemplo:

```js
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```

Aprenderás acerca de bucles correctamente en un artículo futuro, pero brevemente, éste código dice:

1. Comienza el bucle en el elemento de la posición 0 en la matriz.
2. Detén el bucle en el número de item igual a la longitud de la matriz. Esto funcionará para una matriz de cualquier longitid, pero en este caso el ciclo se detendrá en el elemento número 7 (esto es bueno, ya que el último elemento — que queremos que recorra el bucle — es 6.
3. Para cada elemento, imprime en la consola del navegador con [`console.log()`](/es/docs/Web/API/Console/log).

## Alguno métodos de matriz útiles

En esta sección veremos algunos métodos bastante útiles relacionados con matrices que nos permiten dividir cadenas en elementos de matriz y viceversa, y agregar nuevos elementos en matrices.

### Conversión entre matrices y cadenas

A menudo se te presentarán algunos datos brutos contenidos en una cadena larga y grande, y es posible que desees separar los elementos útiles de una forma más conveniente y luego hacerle cosas, como mostrarlos en una tabla de datos. Para hacer esto, podemos usar el método {{jsxref("String.prototype.split()","split()")}}. En su forma más simple, esto toma un único parámetro, el caracter que quieres separar de la cadena, y devuelve las subcadenas entre el separador como elementos en una matriz.

> **Nota:** Bien, esto es técnicamente un método de cadena, no un método de matriz, pero lo hemos incluido con las matrices, ya que va bien aquí.

1. Vamos a jugar con esto, para ver como funciona. Primero, crea una cadena en tu consola:

   ```js
   let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Ahora dividámoslo en cada coma:

   ```js
   let myArray = myData.split(",");
   myArray;
   ```

3. Finalmente, intenta encontrar la longitud de tu nueva matriz y recuperar algunos elementos de ella:

   ```js
   myArray.length;
   myArray[0]; // the first item in the array
   myArray[1]; // the second item in the array
   myArray[myArray.length - 1]; // the last item in the array
   ```

4. También puedes ir en la dirección opuesta usando el método {{jsxref("Array.prototype.join()","join()")}}. Prueba lo siguiente:

   ```js
   let myNewString = myArray.join(",");
   myNewString;
   ```

5. Otra forma de convertir una matriz en cadena es usar el método {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` es posiblemente más simple que `join()` ya que no toma un parámetro, pero es más limitado. Con `join()` puedes especificar diferentes separadores (intenta ejecutar el Paso 4 con un caracter diferente a la coma).

   ```js
   let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); //Rocket,Flash,Bella,Slugger
   ```

### Agregar y eliminar elementos de la matriz

Todavia no hemos cubierto la posibilidad de agregar y eliminar elementos de la matriz — echemos un vistazo a esto ahora. Usaremos la matriz `myArray` con la que terminamos en la última sección. Si todavía no has seguido esa sección, primero crea la matriz en tu consola:

```js
let myArray = [
  "Manchester",
  "London",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "Carlisle",
];
```

Antes que nada, para añdir o eliminar un elemento al final de una matriz podemos usar {{jsxref("Array.prototype.push()","push()")}} y {{jsxref("Array.prototype.pop()","pop()")}} respectivamente.

1. primero usemos `push()` — nota que necesitas incluir uno o más elementos que desees agregas al final de tu matriz. Prueba esto:

   ```js
   myArray.push("Cardiff");
   myArray;
   myArray.push("Bradford", "Brighton");
   myArray;
   ```

2. La nueva longitud de la matriz se devuelve cuando finaliza la llamada al método. Si quisieras almacenar la nueva longitud de matriz en una variable, podrías hacer algo como esto:

   ```js
   let newLength = myArray.push("Bristol");
   myArray;
   newLength;
   ```

3. Eliminar el último elemento de una matriz es tan simple como ejecutar `pop()` en ella. Prueba esto:

   ```js
   myArray.pop();
   ```

4. El elemento que sé eliminó se devuelve cuando se completa la llamada al método. Para guardar este elemento en una variable, puedes hacer lo siguiente:

   ```js
   let removedItem = myArray.pop();
   myArray;
   removedItem;
   ```

{{jsxref("Array.prototype.unshift()","unshift()")}} y {{jsxref("Array.prototype.shift()","shift()")}} funcionan exactamente igual de `push()` y `pop()`, respectivamente, excepto que funcionan al principio de la matriz, no al final.

1. Primero `unshift()` — prueba el siguiente comando:

   ```js
   myArray.unshift("Edinburgh");
   myArray;
   ```

2. Ahora `shift()`; prueba estos!

   ```js
   let removedItem = myArray.shift();
   myArray;
   removedItem;
   ```

## Aprendizaje activo: ¡Imprimiendo esos productos!

Volvamos al ejemplo que describimos anteriormente — imprima los nombres de los productos y los precios en una factura, luego, sume los precios e imprímelos en la parte inferior. En el ejemplo editable a continuación, hay comentarios que contienen números — cada uno de estos marca un lugar donde debe agregar algo al código. Ellos son los siguientes:

1. Debajo de `// number 1` hay un número de cadena, cada una de las cuales contiene un nombre de producto y un precio separados por dos puntos. Nos gustaría que conviertas esto en una matriz y lo almacenamos en una matriz llamda `products`.
2. En la misma línea que el comentario `// number 2` es el comienzo de un ciclo for. En esta línea, actualmente tenemos `i <= 0`, que es una prueba condicional que hace que el [bucle for](/es/Learn/JavaScript/First_steps/A_first_splash#Loops) se detenga inmediatamente, porque dice "detener cuando `i` es menor o igual 0", y `i` comienza en 0. Nos gustaría que reemplazaras esto con una prueba condicional que detenga el ciclo cuando `i` no sea inferior a la longitud la matriz `products` .
3. justo debajo del comentario `// number 3` queremos que escriba una línea de código que divide el elemento actual de la matriz (`nombre:precio`) en dos elementos separados, uno que contiene solo el nombre y otros que contienen solo el precio. Si no está seguro de cómo hacerlo, consulte el artículo [Métodos de cadenas útiles](/es/docs/Learn/JavaScript/First_steps/Useful_string_methods) para obtener ayuda o, mejor aún, consulte la sección [Converting between strings and arrays](#converting_between_strings_and_arrays) de este artículo.
4. Como parte de la línea de código anterior, también querras convertir el precio de una cadena a un número. Si no pudes recordar como hacerlo, consulta el [primer artículo de cadenas](/es/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings).
5. Hay una variable llamada `total` que se crea y se le da un valor de 0 en la parte superior del código. Dentro del ciclo (debajo de `// number 4`) queremos que agregues una línea que añade el precio actual del artículo a ese total en cada iteración del ciclo, de modo que al final del código el total correcto se imprima en la factura. Es posible que necesites un [operador de asignación](/es/Learn/JavaScript/First_steps/Math#Assignment_operators) para hacer esto.
6. Queremos que cambies la línea justo de bajo `// number 5` para que la variable `itemText` se iguale a "nombre de elemnto actual — $precio de elemento actual", por ejemplo "Zapatos — $23.99" en cada caso, por lo que la información correcta del artículo está impreso en la factura. Esto es simplemente una concatenación de cadenas, lo que debería ser familiar para ti.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 410px;width: 95%">
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

for (var i = 0; i <= 0; i++) { // number 2
  // number 3

  // number 4

  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
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
  "var list = document.querySelector('.output ul');\nvar totalBox = document.querySelector('.output p');\nvar total = 0;\nlist.innerHTML = '';\ntotalBox.textContent = '';\n\nvar products = ['Underpants:6.99',\n 'Socks:5.99',\n 'T-shirt:14.99',\n 'Trousers:31.99',\n 'Shoes:23.99'];\n\nfor(var i = 0; i < products.length; i++) {\n var subArray = products[i].split(':');\n var name = subArray[0];\n var price = Number(subArray[1]);\n total += price;\n itemText = name + ' — $' + price;\n\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n}\n\ntotalBox.textContent = 'Total: $' + total.toFixed(2);";
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
  background-color: #f5f9fa;
}
```

{{ EmbedLiveSample('Playable_code', '100%', 730, "", "", "hide-codepen-jsfiddle") }}

## Aprendizaje Activo: Top 5 búsquedas

Un buen uso para los métodos de matriz como {{jsxref("Array.prototype.push()","push()")}} y {{jsxref("Array.prototype.pop()","pop()")}} es cuando estás manteniendo un registro de elementos actualmente activos en una aplicación web. En una escena animada por ejemplo, es posible que tengas una matriz de objetos que representan los gráficos de fondo que se muestran actualmente, y es posible que sólo desees que se muestren 50 a la vez, por razones de rendimiento o desorden. A medida que se crean y agregan nuevos objetos a la matriz, se puede eliminar los más antiguos de la matriz para mantener el número deseado.

En este ejemplo vamos a mostrar un uso mucho más simple — aquí te daremos un sitio de búsqueda falso, con un cuadro de búsqueda. La idea es que cuando los términos se ingresan en un cuadro de búsqueda, se muetren el top 5 de términos de búsqueda previos en la lista. Cuando el número de términos supera el 5, el último término comienza a borrarse cada vez que agregas un nuevo término a la parte superior, por lo que siempre se muestran los 5 términos anteriores.

> **Nota:** En una aplicación de búsqueda real, probablemente puedas hacer clic en los términos de búsqueda anteriores para volver a los términos de búsqueda anteriores y ¡se motrarán los resultados de búsqueda reales! Solamente lo mantendremos simple por ahora.

Para completar la aplicación necesitamos:

1. Agregar una línea debajo del comentario `// number 1` que agrega el valor actual ingresado en la entrada de la búsqueda al inicio de la matriz. Esto se puede recuperar usando `searchInput.value`.
2. Agrega una línea debajo del comentario `// number 2` que elimina el valor actualmente al final de la matriz.

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>Search</button>

  <ul></ul>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 370px; width: 95%">
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
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
  "var list = document.querySelector('.output ul');\nvar searchInput = document.querySelector('.output input');\nvar searchBtn = document.querySelector('.output button');\n\nlist.innerHTML = '';\n\nvar myHistory= [];\n\nsearchBtn.onclick = function() {\n if(searchInput.value !== '') {\n myHistory.unshift(searchInput.value);\n\n list.innerHTML = '';\n\n for(var i = 0; i < myHistory.length; i++) {\n itemText = myHistory[i];\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n }\n\n if(myHistory.length >= 5) {\n myHistory.pop();\n }\n\n searchInput.value = '';\n searchInput.focus();\n }\n}";
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

{{ EmbedLiveSample('Playable_code_2', '100%', 700, "", "", "hide-codepen-jsfiddle") }}

## Conclusión

Después de leer este artículo, estamos seguros de que estaras de acuerdo en que las matrices parecen bastante útiles; las verás aparecer en todas partes en JavaScript, a menudo en asociación con bucles para hacer una misma cosa con cada elemento de la matriz. Te enseñaremos todos los aspectos básicos útiles que hay que conocer sobre los bucles en el siguiente módulo, pero por ahora debes darte un aplauso y tomarte un merecido descanso; ¡has trabajado en todos los artículos de este módulo!

Lo único que queda por hacer es trabajar a través de la evaluación de este módulo, que te pondrá a prueba tu comprensión de los de los artículos anteriores.

## See also

- [Indexed collections](/es/docs/Web/JavaScript/Guide/Indexed_collections) — an advanced level guide to arrays and their cousins, typed arrays.
- {{jsxref("Array")}} — the `Array` object reference page — for a detailed reference guide to the features discussed in this page, and many more.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

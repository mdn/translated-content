---
title: Manejar texto — cadenas en JavaScript
slug: Learn/JavaScript/First_steps/Strings
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

A continuación, centraremos nuestra atención en las cadenas de caracteres (`string`s): así es como se llaman los fragmentos de texto en programación. En este artículo veremos todas las cosas comunes que realmente deberías saber sobre cadenas de caracteres al aprender JavaScript, como crear cadenas, comillas en cadenas y unir cadenas.

| Prerequisitos: | Conocimientos básicos de informática, una comprensión básica de HTML y CSS y de lo que es JavaScript. |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| Objectivo:     | Familiarizarte con los aspectos básicos de las cadenas de caracteres en JavaScript.                   |

## El poder de las palabras

Las palabras son muy importantes para los humanos — son una parte fundamental de nuestra comunicación. Dado que la Web es un medio en gran parte basado en texto diseñado para permitir a los humanos comunicarse y compartir información, es útil para nosotros tener control sobre las palabras que aparecen en él. {{glossary("HTML")}} proporciona estructura y significado a nuestro texto, {{glossary("CSS")}} nos permite personalizarlo con precisión, y JavaScript contiene una serie de funciones para manipular cadenas, crear mensajes personalizados de bienvenida, mostrar las etiquetas de texto adecuadas cuando sea necesario, organizar los términos en el orden deseado y mucho más.

Casi todos los programas que hemos mostrado hasta ahora en el curso han involucrado alguna manipulación de cadenas.

## Cadenas — las bases

A primera vista, las cadenas se tratan de forma similar a los números, pero cuando profundizas empiezas a ver diferencias notables. Comencemos ingresando algunas líneas de texto básicas en la consola para familiarizarnos. Te proveeremos de una aquí abajo (también puedes [abrir la consola](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) en una pestaña o ventana separada, o usar la [consola de desarrollo del navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools) si así lo prefieres).

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Consola JavaScript</title>
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
      outputPara.textContent = "Resultado: " + result;
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

### Creando una cadena

1. Para comenzar, ingresa las siguientes líneas:

   ```js
   var string = "La revolución no será televisada.";
   string;
   ```

   Al igual que con los números, declaramos una variable, iniciandola con el valor de una cadena, y luego retornamos dicho valor. La única diferencia es que al escribir una cadena, necesitas envolverla con comillas.

2. Si no lo haces, u olvidas una de las comillas, obtendrás un error. Intenta ingresando las siguientes líneas:

   ```js example-bad
   var malString = Esto es una prueba;
   var malString = 'Esto es una prueba;
   var malString = Esto es una prueba';
   ```

   Estas líneas no funcionan porque el texto sin comillas alrededor es tomado como nombre de una variable, propiedad, palabra reservada, o algo similar. Si el navegador no las encuentra, entonces se recibe un error( ej. "missing ; before statement"). Si el navegador puede ver dónde comienza una cadena, pero no dónde termine, como se indica en la segunda oración, devuelve error (con "unterminated string literal"). Si tu programa devuelve estos errores, revisa desde el inicio que todas tus cadenas posean sus comillas.

3. Lo siguiente funcionará si previamente definiste la variable `string` — inténtalo:

   ```js
   var maltring = string;
   malString;
   ```

   `malString` ahora tiene el mismo valor que `string`.

### Comillas simples vs. comillas dobles

1. En JavaScript, puedes escoger entre comillas simple y dobles para envolver tus cadenas. Ambas funcionarán correctamente:

   ```js
   var simp = "Comillas simples.";
   var dobl = "Comillas dobles.";
   simp;
   dobl;
   ```

2. Hay muy poca diferencia entre las dos, y la que utilices dependerá de tus preferencias personales. Sin embargo, deberías de elegir una y mantenerla; usar diferentes tipos de comillas en el código podría llegar a ser confuso, especialmente si utilizas diferentes comillas en la misma cadena. El siguiente ejemplo devolverá un error:

   ```js example-bad
   var badQuotes = 'What on earth?";
   ```

3. El navegador pensará que la cadena no se ha cerrado correctamente, porque el otro tipo de cita que no estás usando, puede aparecer en la cadena. Por ejemplo, en estos dos casos su uso es correcto:

   ```js
   var sglDbl = 'Would you eat a "fish supper"?';
   var dblSgl = "I'm feeling blue.";
   sglDbl;
   dblSgl;
   ```

4. Sin embargo, no puedes usar el mismo tipo de comillas en el interior de una cadena que ya las tiene en los extremos. Lo siguiente devuelve error, porque confunde al navegador respecto de dónde termina la cadena:

   ```js example-bad
   var bigmouth = 'I've got no right to take my place...';
   ```

   Lo que nos lleva directamente al siguiente tema.

### Escapando caracteres en una cadena

Para solucionar nuestro problema anterior, necesitamos "escapar" el asunto de las comillas. Escapar caracteres significa que les hacemos algo para asegurarnos que sean reconocidos como texto, y no parte del código. En JavaScript, colocamos una barra invertida justo antes del caracter. Intenta ésto:

```js
var bigmouth = "I've got no right to take my place...";
bigmouth;
```

Ahora funciona correctamente. Puedes escapar otros caracteres de la misma forma, ej. `\"`, y hay varios códigos más. Ve a [Notación de Escape](/es/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation) para más detalles.

## Concatenando cadenas

1. Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente. Vamos a probar un ejemplo en nuestra consola.

   ```js
   var one = "Hello, ";
   var two = "how are you?";
   var joined = one + two;
   joined;
   ```

   El resultado de este código es una variable llamada `joined`, que contiene el valor: "Hello, how are you?" ("Hola, cómo estas?").

2. En la última instancia del código, unimos dos strings, pero lo puedes hacer con cuantas desees, mientras que incluyas el símbolo de `+` entre ellas. Prueba esto:

   ```js
   var multiple = one + one + one + one + two;
   multiple;
   ```

3. También puedes usar una combinación de variables y strings reales. Prueba esto:

   ```js
   var response = one + "I am fine — " + two;
   response;
   ```

> **Nota:** Cuando ingresas una string real en tu código, entre comillas simples o dobles, se llama **string literal**.

### La concatenación en contexto

Vamos a revisar la concatenación que usamos en la siguiente acción — veamos este ejemplo ya citado previamente en el curso:

```html
<button>Press me</button>
```

```js
var button = document.querySelector("button");

button.onclick = function () {
  var name = prompt("What is your name?");
  alert("Hello " + name + ", nice to see you!");
};
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50, "", "", "hide-codepen-jsfiddle") }}

Aquí estamos usando una función {{domxref("Window.prompt()", "Window.prompt()")}} en la línea 4, que le pide al usuario la respuesta a una pregunta, através de un cuadro emergente (también llamado popup) y luego, almacenará el dato dentro de una variable dada — en este caso llamada `name (nombre)`. Luego, en la línea 5, usamos una función {{domxref("Window.alert()", "Window.alert()")}} para mostrar otra ventana emergente que contiene una cadena que hemos unido de la concatenación de dos string literales y la variable `name` (nombre).

### Números versus cadenas

1. Entonces, ¿qué sucede cuando intentamos agregar (o concatenar) un string y un número? Vamos a probar en la consola:

   ```js
   "Front " + 242;
   ```

   Podrías esperar que diera un error, pero funciona a la perfección. Tratar de representar un string como un número no tiene sentido, pero representar un número como string si que lo tiene, así que el navegador convierte el número en una string y las muestra juntas.

2. Incluso puedes hacer esto con dos números — puedes forar un número para que se convierta en una string envolviéndolo entre comillas. Prueba lo siguiente (estamos utilizando el operador `typeof` para verificar si la variable es un número o una cadena):

   ```js
   var myDate = "19" + "67";
   typeof myDate;
   ```

3. Si tienes una variable numérica, que deseas convertir en una string, pero no cambiar de otra forma, o una variable string, que deseas convertir a número, pero no cambiarla de otra forma, puedes usar las siguientes construcciones:

   - El objecto {{jsxref("Number")}} convertirá cualquier cosa que se le pase en un número, si puede. Intenta lo siguiente:

     ```js
     var myString = "123";
     var myNum = Number(myString);
     typeof myNum;
     ```

   - Por otra parte, cada número tiene un método llamado [`toString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) que convertirá el equivalente en una string. Prueba esto:

     ```js
     var myNum = 123;
     var myString = myNum.toString();
     typeof myString;
     ```

   Estas construcciones pueden ser muy útiles en ciertas situaciones. Por ejemplo, si un usuario introduce un número en un campo de texto de un formulario, será un string. Sin embargo, si quieres añadir ese número a algo, lo necesitas convertir a número, así que puedes usar esta construcción para hacerlo. Hicimos exactamente esto en el ejercicio de ejemplo: Juego adivina el número en la línea 54 ([Juego Adivina el número, en la línea 54](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L54)).

## Prueba tus habilidades

Llegaste al final de este artículo, pero ¿puédes recordar la información más importante? Puedes encontrar algunas pruebas para verificar que has comprendido esta información antes de seguir avanzando — Ve [Prueba tus habilidades: Strings](/es/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings). Ten en cuenta que esto requiere conocimiento del próximo artículo, por lo que podrías leerlo antes.

## Conclusión

Esto es lo básico que debes saber sobre las cadenas o `string`s en JavaScript. En el siguiente artículo desarrollaremos más sobre esto, observando métodos de construcción de strings disponibles en JavaScript y cómo podemos usarlos para manipular nuestras cadenas de la forma que queremos.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

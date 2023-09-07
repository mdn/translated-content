---
title: Un primer acercamiento a JavaScript
slug: Learn/JavaScript/First_steps/A_first_splash
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

Ahora que has aprendido algo sobre la teoría de JavaScript y lo que puedes hacer con ella, te daremos un curso intensivo sobre las características básicas de JavaScript a través de un tutorial completamente práctico. Aquí crearás un sencillo juego de "Adivina el número", paso a paso.

| Prerrequisitos: | Conocimientos básicos de informática, comprensión básica de HTML y CSS, comprensión de lo que es JavaScript.                                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Tener un poco de experiencia escribiendo algo de JavaScript, y conseguir al menos una comprensión básica de lo que implica escribir un programa JavaScript. |

No esperes entender todo el código inmediatamente — por ahora sólo queremos presentarte los conceptos de alto nivel, y darte una idea de como funciona JavaScript (y otros lenguajes de programación). ¡Más adelante vas a volver a ver estas características con mucho más detalle!

> **Nota:** Muchas de las características que vas a ver en JavaScript son las mismas que en otros lenguajes de programación — funciones, bucles, etc. La sintaxis del código es diferente, pero los conceptos siguen siendo básicamente los mismos.

## Pensando como un programador

Una de las cosas más difíciles de aprender en programación no es la sintaxis que necesita aprender, sino cómo aplicarla para resolver problemas del mundo real. Debes comenzar a pensar como un programador — esto generalmente implica mirar descripciones de lo que necesita hacer tu programa, determinar qué características de código necesitas para alcanzar esas cosas y cómo hacer que funcionen juntas.

Esto implica una combinación de trabajo duro, experiencia con la sintaxis de programación y práctica — más un poquito de creatividad. Mientras más programes, más habilidoso serás haciéndolo. No te podemos prometer que vas a desarrollar un "cerebro de programador" en cinco minutos, pero, a lo largo de este curso, te vamos a dar muchas oportunidades de practicar el pensar como un programador.

Teniendo esto en mente, veamos el ejemplo que vamos a construir en este artículo, y revisemos el proceso general de seccionarlo y dividirlo en tareas tangibles.

## Ejemplo — Juego adivina el número

En este artículo vamos a mostrarte cómo construir el juego que puedes ver abajo:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Juego adivina el número</title>
    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Juego adivina el número</h1>
    <p>
      Hemos seleccionado un número aleatorio entre 1 y 100. Fíjate si lo puedes
      adivinar en 10 turnos o menos. Vamos a decirte si tu número es más alto o
      más bajo.
    </p>
    <div class="form">
      <label for="guessField">Adivina el numero: </label
      ><input type="text" id="guessField" class="guessField" />
      <input type="submit" value="Enviar respuesta" class="guessSubmit" />
    </div>
    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>
    <script>
      // Tu código JavaScript va aquí
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      const guesses = document.querySelector(".guesses");
      const lastResult = document.querySelector(".lastResult");
      const lowOrHi = document.querySelector(".lowOrHi");
      const guessSubmit = document.querySelector(".guessSubmit");
      const guessField = document.querySelector(".guessField");
      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        let userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = "Intentos anteriores: ";
        }

        guesses.textContent += userGuess + " ";

        if (userGuess === randomNumber) {
          lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
          lastResult.style.backgroundColor = "green";
          lowOrHi.textContent = "";
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = "!!!Fin del juego!!!";
          lowOrHi.textContent = "";
          setGameOver();
        } else {
          lastResult.textContent = "¡Incorrecto!";
          lastResult.style.backgroundColor = "red";
          if (userGuess < randomNumber) {
            lowOrHi.textContent = "¡El número es muy bajo!";
          } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "¡El número es muy grande!";
          }
        }

        guessCount++;
        guessField.value = "";
      }

      guessSubmit.addEventListener("click", checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Iniciar nuevo juego";
        document.body.append(resetButton);
        resetButton.addEventListener("click", resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll(".resultParas p");
        for (let i = 0; i < resetParas.length; i++) {
          resetParas[i].textContent = "";
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
        lastResult.style.backgroundColor = "white";
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Top_hidden_code', '100%', 320, "", "", "hide-codepen-jsfiddle") }}

Juega un poco — familiarízate con el juego antes de continuar.

Imaginemos que tu jefe te ha dado el siguiente resumen para crear este juego:

> Quiero que crees un sencillo juego del tipo "adivina el número". Se debe elegir un número aleatorio entre 1 y 100, luego desafiar al jugador a adivinar el número en 10 intentos. Después de cada intento, debería decirle al jugador si ha acertado o no — y si está equivocado, debería decirle si se ha quedado corto o se ha pasado. También debería decir los números que ya se probaron anteriormente. El juego terminará una vez que el jugador acierte o cuando se acaben los intentos. Cuando el juego termina, se le debe dar al jugador la opción de volver a jugar.

Al observar este resumen, lo primero que podemos hacer es comenzar a desglosar el proyecto en tareas simples y realizables, con la mayor mentalidad de programador posible:

1. Generar un número aleatorio entre 1 y 100.
2. Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
3. Darle al jugador una forma de adivinar cuál es el número.
4. Una vez que se ha introducido el número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.
5. A continuación, comprobar si el número es correcto.
6. Si es correcto:

   1. Mostrar un mensaje de felicitaciones.
   2. Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
   3. Mostrar un control que permita al jugador volver a empezar el juego.

7. Si es incorrecto y al jugador todavía le quedan intentos:

   1. Decirle al jugador que ha fallado.
   2. Dejar que el jugador lo intente de nuevo.
   3. Incrementa el número de intentos en 1.

8. Si el jugador falla y no le quedan turnos:

   1. Decirle al jugador que el juego se ha terminado.
   2. Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
   3. Mostrar un control que permita al jugador volver a empezar el juego.

9. Una vez que el juego se reinicia, asegúrate de que la lógica del juego y la IU (interfaz de usuario) se restablezcan por completo, luego vuelve al paso 1.

Veamos cómo podemos trasformar estos pasos en código, construyendo el ejemplo y explorando las características de JavaScript a medida que avanzamos.

### Configuración inicial

Para empezar este tutorial, quisiéramos que hicieras una copia local del archivo [number-guess-guess-game-start.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) ([en vivo aquí](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Ábrelo en tu editor de texto y en tu navegador web. De momento, puedes ver un sencillo encabezado, un párrafo de instrucciones y un espacio para introducir un intento de número, pero no hará nada por ahora.

El lugar donde agregaremos todo nuestro código es dentro del elemento {{htmlelement("script")}} en la parte inferior del HTML:

```html
<script>
  // Tu JavaScript va aquí
</script>
```

### Añadiendo variables para guardar los datos

Empecemos. En primer lugar, agrega las siguientes líneas dentro de tu elemento {{htmlelement("script")}}:

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
```

Esta sección del código establece las variables y constantes que necesitamos para almacenar los datos que nuestro programa utilizará. Las variables básicamente son contenedores de valores (como números o cadenas de texto). Creas una variable con la palabra clave `let` (o `var`) seguida de un nombre para tu variable (leerás más sobre la diferencia entre las palabras clave en el [siguiente artículo](/es/docs/Learn/JavaScript/First_steps/Variables#The_difference_between_var_and_let)). Las constantes se utilizan para almacenar valores que no deseas modificar y se crean con la palabra clave `const`. En este caso, estamos usando constantes para almacenar referencias a partes de nuestra interfaz de usuario; el texto dentro de algunas de ellas puede cambiar, pero los elementos HTML a los que se hace referencia permanecen iguales.

Puedes asignar un valor a tu variable o constante con un signo igual (`=`) seguido del valor que deseas darle.

En nuestro ejemplo:

- A la primera variable — `randomNumber` — se le asigna un número al azar entre 1 y 100, calculado usando un algoritmo matemático.
- Las primeras tres constantes sirven cada una para almacenar una referencia a los párrafos de resultados en nuestro HTML, y se usarán para insertar valores en los párrafos más adelante en el código (observa cómo están dentro de un elemento `<div>`, el cual se utiliza para seleccionar los tres más adelante para restablecerlos a sus valores originales, cuando reiniciamos el juego):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Las siguientes dos constantes almacenan referencias a la entrada de texto y al botón "Enviar" del formulario, y se utilizan para controlar las respuestas del jugador más adelante.

  ```html
  <label for="guessField">Adivina el número: </label
  ><input type="text" id="guessField" class="guessField" />
  <input type="submit" value="Enviar respuesta" class="guessSubmit" />
  ```

- Nuestras dos variables finales almacenan un conteo de intentos desde 1 (que se usa para tener un registro de cuántos intentos ha hecho el jugador), y una referencia al botón de reinicio que aún no existe (pero que lo hará más adelante).

> **Nota:** Aprenderás mucho más sobre las variables/constantes más adelante en el curso, comenzando con el [artículo siguiente](/es/docs/user:chrisdavidmills/variables).

### Funciones

A continuación, agrega lo siguiente debajo de tu código JavaScript anterior:

```js
function checkGuess() {
  alert("Soy un marcador de posición");
}
```

Las funciones son bloques de código reutilizable que puedes escribir una vez y ejecutar una y otra vez, ahorrando la necesidad de repetir el código todo el tiempo. Son realmente útiles. Hay varias maneras de definir funciones, pero por ahora nos concentraremos en un tipo simple. Aquí hemos definido una función usando la palabra clave `function`, seguida de un nombre, con paréntesis después de él. Después de eso ponemos dos llaves (`{ }`). Dentro de las llaves se encuentra todo el código que queremos ejecutar cuando llamamos a la función.

Cuando queramos ejecutar el código, escribimos el nombre de la función seguido de los paréntesis.

Probémoslo ahora. Guarda tu código y actualiza la página en tu navegador. Luego, ingresa a la [consola JavaScript de las herramientas para desarrolladores](/es/docs/Learn/Common_questions/What_are_browser_developer_tools) e ingresa la siguiente línea:

```js
checkGuess();
```

Después de presionar<kbd>Retorno</kbd>/<kbd>Intro</kbd>, debería aparecer una alerta que dice "`Soy un marcador de posición`"; hemos definido una función en nuestro código que crea una alerta cada vez que la llamamos.

> **Nota:** Aprenderás mucho más sobre las [funciones más adelante](/es/docs/Learn/JavaScript/Building_blocks/Functions) en el curso.

### Operadores

Los operadores de JavaScript nos permiten realizar pruebas, hacer cálculos matemáticos, unir cadenas y otras cosas similares.

Si aún no lo has hecho, guarda tu código, actualiza la página en tu navegador y abre la [consola JavaScript de las herramientas para desarrolladores](/es/docs/Learn/Common_questions/What_are_browser_developer_tools). Luego, podemos intentar escribir los ejemplos que se muestran a continuación — escribe cada una de las columnas de "Ejemplo" exactamente como se muestra, presionando <kbd>Retorno</kbd>/<kbd>Intro</kbd> después de cada una, y ve los resultados que devuelven.

Primero veamos los operadores aritméticos, por ejemplo:

| Operador | Descripción    | Ejemplo   |
| -------- | -------------- | --------- |
| `+`      | Suma           | `6 + 9`   |
| `-`      | Resta          | `20 - 15` |
| `*`      | Multiplicación | `3 * 7`   |
| `/`      | División       | `10 / 5`  |

También puedes usar el operador `+` para unir cadenas de texto (en programación, esto se llama _concatenación_). Intenta ingresar las siguientes líneas, una por una:

```js
let name = "Bingo";
name;
let hello = " dice hola!";
hello;
let greeting = "¡" + name + hello;
greeting;
```

También disponemos de algunos atajos de operadores, llamados [operadores de asignación](/es/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) mejorada. Por ejemplo, si quieres simplemente agregar una nueva cadena de texto a una existente y devolver el resultado, puedes hacer esto:

```js
name += " dice hola!";
```

Esto es equivalente a

```js
name = name + " dice hola!";
```

Cuando ejecutamos pruebas de verdadero/falso (por ejemplo, dentro de condicionales — consulta [abajo](#conditionals)) usamos [operadores de comparación](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators). Por ejemplo:

| Operador | Descripción                                   | Ejemplo                                                                                                                                     |
| -------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `===`    | Igualdad estricta (¿es exactamente lo mismo?) | <pre lang="js">5 === 2 + 4 // false<br>'Chris' === 'Bob' // false<br>5 === 2 + 3 // true<br>2 === '2' // false; número versus cadena </pre> |
| `!==`    | No igual (¿no es lo mismo?)                   | <pre lang="js">5 !== 2 + 4 // true<br>'Chris' !== 'Bob' // true<br>5 !== 2 + 3 // false<br>2 !== '2' // true; número versus cadena </pre>   |
| `<`      | Menor que                                     | <pre lang="js">6 < 10 // true<br>20 < 10 // false </pre>                                                                                    |
| `>`      | Mayor que                                     | <pre lang="js">6 > 10 // false<br>20 > 10 // true </pre>                                                                                    |

### Condicionales

Volviendo a nuestra función `checkGuess()`, creo que es seguro decir que no queremos que simplemente muestre un mensaje de marcador de posición. Queremos que compruebe si la respuesta del jugador es correcta o no, y que responda de manera apropiada.

En este punto, reemplaza su función `checkGuess()` actual con esta versión:

```js
function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Intentos anteriores: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "¡¡¡Fin del juego!!!";
    setGameOver();
  } else {
    lastResult.textContent = "¡Incorrecto!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "¡El número es muy bajo!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "¡El número es muy grande!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

Esto es un montón de código — ¡uf! Repasemos cada sección y expliquemos lo qué hace.

- La primera línea (línea 2 arriba) declara una variable llamada `userGuess` y establece su valor al valor actual ingresado dentro del campo de texto. También ejecutamos este valor a través del constructor `Number()` integrado, solo para asegurarnos de que el valor definitivamente sea un número.
- A continuación, encontramos nuestro primer bloque de código condicional (líneas 3-5 arriba). Un bloque de código condicional te permite ejecutar código de manera selectiva, dependiendo de si una determinada condición es verdadera o no. Se parece un poco a una función, pero no lo es. La forma más simple de bloque condicional comienza con la palabra clave `if`, luego algunos paréntesis, luego unas llaves. Dentro del paréntesis incluimos una prueba. Si la prueba devuelve `true`, ejecutamos el código dentro de las llaves. Si no, no lo hacemos y pasamos al siguiente segmento del código. En este caso, la prueba está verificando si la variable `guessCount` es igual a `1` (es decir, si este es el primer intento del jugador o no):

  ```js
  guessCount === 1;
  ```

  Si es así, hacemos que el contenido del texto del párrafo de intentos sea igual a "`Intentos previos:`". Si no, no lo hacemos.

- La línea 6 agrega el valor actual de `userGuess` al final del párrafo `guesses`, más un espacio en blanco para que haya un espacio entre cada intento mostrado.
- El siguiente bloque (líneas 8-24 arriba) realiza algunas comprobaciones:

  - El primer `if(){ }` verifica si la respuesta del jugador es igual al `randomNumber` establecido al comienzo de nuestro JavaScript. Si es así, el jugador ha adivinado correctamente y ha ganado el juego, por lo tanto mostramos al jugador un mensaje de felicitación con un bonito color verde, borramos el contenido del cuadro de información de intentos _Low/High_ y ejecutamos una función llamada `setGameOver()`, que examinaremos más adelante.
  - Ahora hemos encadenado otra prueba al final de la última usando una estructura `else if(){ }`. Esta comprueba si este intento es el último turno del jugador. Si es así, el programa hace lo mismo que en el bloque anterior, salvo por un mensaje de fin de juego en lugar de un mensaje de felicitación.
  - El bloque final encadenado al final de este código (el `else { }`) contiene código que solo se ejecuta si ninguna de las otras dos pruebas devuelve `true` (es decir, el jugador no acertó, pero todavía le quedan intentos). En este caso le decimos que es incorrecto, luego realizamos otra prueba condicional para verificar si el intento fue más alto o más bajo que la respuesta, mostrando un mensaje adicional según corresponda para decirle si tiene que ir más alto o bajo.

- Las últimas tres líneas de la función (líneas 26 a 28 arriba) nos preparan para el siguiente intento. Agregamos 1 a la variable `guessCount` para que el jugador use su turno (`++` es una operación de incremento — incrementar en 1), y vaciamos el valor del campo de texto. y enfocándolo de nuevo, listo para ingresar el próximo intento.

### Eventos

A estas alturas, hemos implementado correctamente la función `checkGuess()`, pero no hará nada porque aún no la hemos llamado. Lo ideal, sería llamarla cuando se presiona el botón "Enviar respuesta", y para hacerlo necesitamos usar un **evento**. Los eventos son cosas que suceden en el navegador — se hace clic en un botón, se carga una página, se reproduce un video, etc. — en respuesta a lo cual podemos ejecutar bloques de código. Las construcciones que escuchan el evento que ocurre se denominan **escuchas de eventos**, y los bloques de código que se ejecutan en respuesta a la activación del evento se denominan **controladores de eventos**.

Agrega la siguiente línea debajo de tu función `checkGuess()`:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Aquí estamos agregando un escucha de eventos al botón `guessSubmit`. Este es un método toma dos valores de entrada (llamados _argumentos_) — el tipo de evento que queremos escuchar (en este caso, `click`) como una cadena, y el código que queremos ejecutar cuando ocurra el evento (en este caso la función `checkGuess()`). Ten en cuenta que no es necesario especificar los paréntesis al escribirlo dentro de {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

Intenta guardar y actualizar tu código ahora, y tu ejemplo debería funcionar — hasta cierto punto. El único problema ahora es que si adivinas la respuesta correcta o agotas los intentos, el juego se interrumpirá porque aún no hemos definido la función `setGameOver()` que se supone se debe ejecutar una vez que el juego se acabó. Ahora, agreguemos nuestro código faltante y completemos la funcionalidad de ejemplo.

### Finalizando la funcionalidad del juego

Agreguemos la función `setGameOver()` al final de nuestro código y luego repasémoslo. Agrega esto ahora, debajo del resto de su JavaScript:

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar nuevo juego";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- Las dos primeras líneas deshabilitan el campo de texto y el botón fijando sus propiedades `disabled` en `true`. Esto es necesario, porque si no lo hiciéramos, el jugador podría seguir enviando más intentos aunque el juego hubiera terminado, lo cual estropearía las cosas.
- Las siguientes tres líneas generan un nuevo elemento {{htmlelement("button")}}, establecen su etiqueta de texto en "Iniciar nuevo juego" y lo añaden al final de nuestro HTML existente.
- La última línea establece un escucha de eventos en nuestro nuevo botón para que cuando se haga clic en él, se ejecute una función llamada `resetGame()`.

¡Ahora también necesitamos definir esta función! Agrega el siguiente código, nuevamente al final de tu JavaScript:

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

Este bloque de código bastante largo restablece completamente todo a cómo estaba al comienzo del juego, para que el jugador pueda intentarlo de nuevo. Eso:

- Vuelve a poner `guessCount` en 1.
- Vacía todo el texto de los párrafos de información. Seleccionamos todos los párrafos dentro de `<div class="resultParas"></div>`, luego recorremos cada uno, configurando su `textContent` en `''` (una cadena vacía).
- Elimina de nuestro código el botón de reinicio.
- Habilita los elementos del formulario, vacía y enfoca el campo de texto, listo para ingresar un nuevo intento.
- Elimina el color de fondo del párrafo `lastResult`.
- Genera un nuevo número al azar ¡para que no vuelvas a adivinar el mismo número!.

**En este punto, deberías tener un juego completamente funcional (simple) — ¡Felicidades!**

Todo lo que resta por hacer en este artículo es hablar sobre algunas otras importantes características del código que ya has visto, aunque es posible que no te hayas dado cuenta.

### Bucles

Una parte del código anterior que debemos examinar detalladamente es el bucle [for](/es/docs/Web/JavaScript/Reference/Statements/for). Los bucles son un muy importante concepto en programación, estos te permiten seguir ejecutando un fragmento de código una y otra vez, hasta que se cumpla una determinada condición.

Para empezar, de nuevo ve a tu [consola JavaScript de las herramientas para desarrolladores del navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools) e introduce lo siguiente:

```js
for (let i = 1; i < 21; i++) {
  console.log(i);
}
```

¿Que sucedió? Los números `1` a `20` se imprimieron en tu consola. Esto se debió al bucle. Un bucle `for` toma tres valores (argumentos) de entrada:

1. **Un valor inicial**: En este caso, comenzamos a contar en 1, pero este podría ser cualquier número que desees. También puedes reemplazar la letra `i` con cualquier nombre que desees, pero por convención se usa `i` porque es corto y fácil de recordar.
2. **Una condición de salida**: Aquí hemos especificado `i < 21` — el ciclo continuará hasta que `i` no sea menor que 21. Cuando `i` llegue a 21, el bucle ya no se ejecutará.
3. **Un incremento**: Hemos especificado `i++`, que significa "agrega 1 a i". El ciclo se ejecutará una vez por cada valor de `i`, hasta que `i` alcance un valor de 21 (como se explicó anteriormente). En este caso, simplemente imprimimos el valor de `i` en la consola en cada iteración usando {{domxref("console.log", "console.log()")}}.

Ahora veamos el ciclo en nuestro juego de adivinan el número — lo siguiente está dentro de la función `resetGame()`:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (let i = 0; i < resetParas.length; i++) {
  resetParas[i].textContent = "";
}
```

Este código crea una variable que contiene una lista de todos los párrafos dentro de `<div class="resultParas">` usando el método {{domxref("document.querySelectorAll", "querySelectorAll()")}}, luego recorre cada uno de ellos, eliminando el texto contenido a su paso.

### Una pequeña explicación sobre objetos

Agreguemos una mejora final más antes de entrar en esta explicación. Agrega la siguiente línea justo debajo de la línea `let resetButton;` cerca de la parte superior de tu JavaScript, luego guarda tu archivo:

```js
guessField.focus();
```

Esta línea usa el método {{domxref("HTMLElement.focus", "focus()")}} para colocar automáticamente el cursor en el campo de texto {{htmlelement("input")}} tan pronto como se cargue la página, lo cual significa que el jugador puede comenzar a escribir su primer intento inmediatamente, sin tener que hacer clic primero en el campo del formulario. Es solo una pequeña adición, pero mejora la experiencia del jugador — brindando al usuario una buena pista visual de lo que tiene que hacer para jugar.

Analicemos lo que está sucediendo aquí con un poco más de detalle. En JavaScript, todo es un objeto. Un objeto es una colección de funciones relacionadas almacenadas en un solo grupo. Puedes crear tus propios objetos, pero eso es bastante avanzado y no lo cubriremos hasta mucho más adelante en el curso. Por ahora, analizaremos brevemente los objetos integrados que contiene tu navegador, los cuales te permiten hacer muchas cosas útiles.

En este caso particular, primero creamos una constante `guessField` que almacena una referencia al campo de texto del formulario en nuestro HTML — la siguiente línea se puede encontrar entre nuestras declaraciones cerca de la parte superior del código:

```js
const guessField = document.querySelector(".guessField");
```

Para obtener esta referencia, usamos el método {{domxref("document.querySelector", "querySelector()")}} del objeto {{domxref("document")}}. `querySelector()` toma un parámetro — un [selector CSS](/es/docs/Learn/CSS/Introduction_to_CSS/Selectors) que selecciona el elemento del que deseas una referencia.

Debido a que `guessField` ahora contiene una referencia a un elemento {{htmlelement("input")}}, ahora tiene acceso a varias propiedades (básicamente variables almacenadas dentro de los objetos, algunas de las cuales no les puedes cambiar sus valores) y métodos (básicamente funciones almacenadas dentro de objetos). Un método disponible para elementos `input` es `focus()`, por lo que ahora podemos usar esta línea para enfocar el campo de texto:

```js
guessField.focus();
```

Las variables que no contienen referencias a elementos de formulario no dispondrán de método `focus()`. Por ejemplo, la constante `guessCount` contiene una referencia a un elemento {{htmlelement("p")}} y la variable `guessCount` contiene un número.

### Jugando con los objetos del navegador

Juguemos un poco con algunos objetos del navegador.

1. En primer lugar, abre tu programa en un navegador.
2. A continuación, abre las [herramientas de desarrollo del navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools) y asegúrate de que la pestaña de la consola JavaScript esté abierta.
3. Escribe `guessField` y la consola te mostrará que la variable contiene un elemento {{htmlelement("input")}}. También notarás que la consola te ayuda completando automáticamente los nombres de los objetos que existen dentro del entorno de ejecución, ¡incluidas tus variables!
4. Ahora escribe lo siguiente:

   ```js
   guessField.value = "Hola";
   ```

   La propiedad `value` representa el valor actual ingresado en el campo de texto. Verás que al ingresar este comando, ¡hemos cambiado este valor!

5. Ahora intenta escribir `guesses` en la consola y presiona Intro. La consola te muestra que la variable contiene un elemento {{htmlelement("p")}}.
6. Ahora intenta ingresar la siguiente línea:

   ```js
   guesses.value;
   ```

   El navegador devuelve `undefined`, porque los párrafos no tienen la propiedad `value`.

7. Para cambiar el texto dentro de un párrafo, necesitas la propiedad {{domxref("Node.textContent", "textContent")}} en su lugar. Prueba esto:

   ```js
   guesses.textContent = "¿Dónde está mi párrafo?";
   ```

8. Ahora, solo por diversión. Intenta ingresar las siguientes líneas, una por una:

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   Cada elemento de una página tiene una propiedad `style`, que a su vez contiene un objeto cuyas propiedades contienen todos los estilos CSS en línea aplicados a ese elemento. Esto nos permite establecer dinámicamente nuevos estilos CSS en elementos utilizando JavaScript.

## Terminamos por ahora

Así que eso es todo para construir el ejemplo. Llegaste al final, ¡bien hecho! Prueba tu código final, o [juega con nuestra versión final aquí](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Si no puedes hacer que el ejemplo funcione, compáralo con el [código fuente](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

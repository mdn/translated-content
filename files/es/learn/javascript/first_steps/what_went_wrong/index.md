---
title: ¿Qué ha salido mal? Corrigiendo JavaScript
slug: Learn/JavaScript/First_steps/What_went_wrong
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

Cuando construiste el juego "Adivina el número" en el artículo anterior, es posible que hayas descubierto que no funcionó. Tranquilo — este artículo tiene como objetivo evitar que te rasques la cabeza por este tipo de problemas brindándote algunos consejos sobre cómo encontrar y corregir errores en programas JavaScript.

| Prerrequisitos: | Conocimientos básicos de informática, comprensión básica de HTML y CSS, comprensión de lo que es JavaScript. |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| Objetivo:       | Para ganar habilidad y confianza para comenzar a solucionar problemas en tu propio código.                   |

## Tipos de errores

En general, cuando haces algo mal en el código, hay dos tipos principales de errores con los que te encontrarás:

- **Errores de sintaxis**: estos son errores de ortografía en tu código que provocan que tu programa no se ejecute en absoluto, o que deje de funcionar a mitad del camino — por lo general, también te proporcionarán algunos mensajes de error. Normalmente no es tan difícil corregirlos, ¡siempre y cuando estés familiarizado con las herramientas adecuadas y sepas qué significan los mensajes de error!
- **Errores lógicos**: Estos son errores en los que la sintaxis realmente es correcta pero el código no hace lo que pretendías, lo cual significa que el programa se ejecuta pero da resultados incorrectos. A menudo, estos son más difíciles de arreglar que los errores sintácticos, ya que generalmente no hay un mensaje de error que te pueda orientar hacia la fuente del error.

Bueno, tampoco es _así de simple_ — a medida que profundices hay algunas otras diferencias. Pero las clasificaciones anteriores funcionarán en esta temprana etapa de tu carrera. Veremos ambos tipos en el futuro.

## Un ejemplo erróneo

Para empezar, regresemos a nuestro juego de adivinan el número — excepto que esta vez vamos a explorar una versión que tiene algunos errores insertados deliberadamente. Ve a GitHub y haz una copia local de [number-game-errors.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (puedes verlo [en vivo aquí](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Para comenzar, abre la copia local dentro de tu editor de texto favorito y tu navegador.
2. Intenta jugarlo — notarás que cuando presionas el botón "Enviar respuesta", ¡no funciona!

> **Nota:** ¡Posiblemente tengas tu propia versión del ejemplo del juego que no funciona, y quizás la quieras arreglar! Aún así nos gustaría que en el artículo trabajes con nuestra versión, para que puedas aprender las técnicas que estamos enseñando. Después puedes tratar de arreglar tu ejemplo.

En este punto, consultemos la consola del desarrollador para ver si podemos ver algún informe de error de sintaxis y luego tratar de solucionarlo. Abajo aprenderás cómo.

## Solucionar errores de sintaxis

Anteriormente en este curso, hicimos que escribieras algunos comandos JavaScript simples en la [consola JavaScript de las herramientas para desarrolladores](/es/docs/Learn/Common_questions/What_are_browser_developer_tools) (si no recuerdas cómo abrirla en tu navegador, sigue el enlace anterior para descubrirlo). Lo más útil es que la consola te brinda mensajes de error cada vez que ocurre algún error de sintaxis dentro del JavaScript que alimenta al motor JavaScript del navegador. Ahora vayamos a cazar.

1. Ve a la pestaña dónde tienes abierto `number-game-errors.html` y abre tu consola JavaScript. Deberías ver un mensaje de error con las siguientes líneas: ![](not-a-function.png)
2. Este es un error bastante fácil de rastrear, y el navegador le brinda varios bits de información útil para ayudarte (la captura de pantalla anterior es de Firefox, pero otros navegadores proporcionan información similar). De izquierda a derecha, tenemos:

   - Una "x" roja para indicar que se trata de un error.
   - Un mensaje de error para indicar qué salió mal: "TypeError: guessSubmit.addeventListener no es una función"
   - Un enlace a "Más información" que te lleva a una página de MDN dónde explica detalladamente qué significa este error.
   - El nombre del archivo JavaScript, que enlaza con la pestaña "Depurador" de las herramientas para desarrolladores. Si sigues este enlace, verás la línea exacta donde se resalta el error.
   - El número de línea donde está el error y el número de carácter en esa línea donde se detectó el error por primera vez. En este caso, tenemos la línea 86, carácter número 3.

3. Si miramos la línea 86 en nuestro editor de código, encontraremos esta línea:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. El mensaje de error dice "`guessSubmit.addeventListener no es una función`", lo cual significa que el intérprete de JavaScript no reconoce la función que estamos llamando. A menudo, este mensaje de error en realidad significa que hemos escrito algo mal. Si no estás seguro de la ortografía correcta de una parte de la sintaxis, a menudo es bueno buscar la función en MDN. La mejor manera de hacer esto es, en tu navegador favorito, buscar "mdn _nombre-de-característica_". Aquí hay un atajo para ahorrarte algo de tiempo en esta instancia: [`addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener).
5. Entonces, al mirar esta página, ¡el error parece ser que hemos escrito mal el nombre de la función!. Recuerda que JavaScript distingue entre mayúsculas y minúsculas, por lo que cualquier pequeña diferencia en la ortografía o en mayúsculas provocará un error. Cambiar `addeventListener` a `addEventListener` debería solucionar este problema. Hazlo ahora.

> **Nota:** Échale un vistazo a nuestra página de referencia [TypeError: "x" no es una función](/es/docs/Web/JavaScript/Reference/Errors/Not_a_function) para obtener más detalles sobre este error.

### Errores sintácticos, segunda ronda

1. Guarda tu página y refréscala, ahora deberías ver que el error ha desaparecido.
2. Ahora, si intentas ingresar un número y presionas el botón "Enviar respuesta", verás... ¡otro error! ![](variable-is-null.png)
3. Esta vez, el error que se informa es "`TypeError: lowOrHi es nulo`", en la línea 78.

   > **Nota:** [`Null`](/es/docs/Glossary/Null) es un valor especial que significa "nada" o "sin valor". Por lo tanto, `lowOrHi` ha sido declarado e iniciado, pero no con algún valor significativo — no tiene tipo ni valor.

   > **Nota:** Este error no apareció tan pronto como se cargó la página porque este error ocurrió dentro de una función (dentro del bloque `checkGuess() {...}`). Como pronto aprenderás con más detalle en nuestro [artículo de funciones](/es/docs/Learn/JavaScript/Building_blocks/Functions), el código dentro de las funciones se ejecuta en un ámbito separado que el código fuera de las funciones. En este caso, el código no se ejecutó y el error no se lanzó hasta que la función `checkGuess()` se ejecutó en la línea 86.

4. Échale un vistazo a la línea 78 y verás el siguiente código:

   ```js
   lowOrHi.textContent = "¡El número es muy grande!";
   ```

5. Esta línea está intentando establecer la propiedad `textContent` de la constante `lowOrHi` en una cadena de texto, pero no funciona porque `lowOrHi` no contiene lo que es supone. Veamos por qué es así — intenta buscar otras instancias de `lowOrHi` en el código. La primera instancia que encontrarás en JavaScript está en la línea 48:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. En este punto, estamos intentando hacer que la variable contenga una referencia a un elemento en el HTML del documento. Comprobemos si el valor es `null` después de ejecutar esta línea. Agrega el siguiente código en la línea 49:

   ```js
   console.log(lowOrHi);
   ```

   > **Nota:** [`console.log()`](/es/docs/Web/API/Console/log) es una función de depuración realmente útil que imprime un valor en la consola. Por lo tanto, imprimirá el valor de `lowOrHi` en la consola tan pronto como intentemos configurarlo en la línea 48.

7. Guarda y refresca, y ahora deberías ver el resultado de `console.log()` en tu consola. ![](console-log-output.png)Efectivamente, el valor de `lowOrHi` es `null` en este punto, así que definitivamente hay un problema con la línea 48.
8. Pensemos en cuál podría ser el problema. La línea 48 está utilizando un método [`document.querySelector()`](/es/docs/Web/API/Document/querySelector) para obtener una referencia a un elemento seleccionándolo con un selector CSS. Buscando más adelante en nuestro archivo, podemos encontrar el párrafo en cuestión:

   ```js
   <p class="lowOrHi"></p>
   ```

9. Entonces necesitamos un selector de clase aquí, que comienza con un punto (`.`), pero el selector que se pasa al método `querySelector()` en la línea 48 no tiene punto. ¡Este podría ser el problema! Intenta cambiar `lowOrHi` a `.lowOrHi` en la línea 48.
10. Ahora guarda y refresca nuevamente, y tu declaración `console.log()` debería devolver el elemento `<p>` que queremos. ¡Uf! ¡Otro error solucionado! Ahora puedes eliminar tu línea `console.log()`, o mantenerla como referencia más adelante — tu elección.

> **Nota:** Consulta nuestra página de referencia [TypeError: "x" (no) es "y"](/es/docs/Web/JavaScript/Reference/Errors/Unexpected_type) para obtener más detalles sobre este error.

### Errores sintácticos, tercera ronda

1. Ahora, si intentas jugar de nuevo, deberías tener más éxito — el juego debería funcionar absolutamente bien, hasta que termines el juego, ya sea adivinando el número correcto o porque agotaste los intentos.
2. En ese momento, el juego vuelve a fallar y lanza el mismo error que obtuvimos al principio: "`TypeError: resetButton.addeventListener no es una función`". Sin embargo, esta vez aparece como procedente de la línea 94.
3. Mirando la línea número 94, es fácil ver que hemos cometido el mismo error aquí. Nuevamente, solo necesitamos cambiar `addeventListener` a `.addEventListener`. Hazlo ahora.

## Un error de lógica

En este punto, el juego debería trabajar bien, sin embargo, después de jugar varias veces, sin duda notarás que el número "aleatorio" que debes adivinar siempre es 1. ¡Definitivamente no es exactamente como queremos que se desarrolle el juego!

Obviamente hay un problema en la lógica del juego en alguna parte — el juego no devuelve un error; simplemente no está jugando bien.

1. Busca la variable `randomNumber` y las líneas donde se establece primero el número aleatorio. La instancia que almacena el número aleatorio que queremos adivinar al comienzo del juego debe estar alrededor de la línea número 44:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

   Y la que genera el número aleatorio antes de cada juego subsiguiente está alrededor de la línea 113:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Para comprobar si estas líneas son realmente el problema, volvamos a echar mano de nuestra amiga `console.log()` — inserta la siguiente línea directamente debajo de cada una de las dos líneas anteriores:

   ```js
   console.log(randomNumber);
   ```

3. Guarda y refresca, luego juega un par de veces — verás que `randomNumber` es igual a 1 en cada punto en el que se registra en la consola.

### Desentrañando la lógica

Para solucionar esto, consideremos cómo está funcionando esta línea. Primero, invocamos a [`Math.random()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random), que genera un número decimal aleatorio entre 0 y 1, p. ej. 0.5675493843.

```js
Math.random();
```

A continuación, pasamos el resultado de invocar a `Math.random()` a [`Math.floor()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), que redondea el número pasado al número entero más cercano. Luego agregamos 1 a ese resultado:

```
Math.floor(Math.random()) + 1
```

Redondear un número decimal aleatorio entre 0 y 1 siempre devolverá 0, por lo que agregarle 1 siempre devolverá 1. Necesitamos multiplicar el número aleatorio por 100 antes de redondearlo hacia abajo. Lo siguiente nos daría un número aleatorio entre 0 y 99:

```js
Math.floor(Math.random() * 100);
```

De ahí que queramos sumar 1, para darnos un número aleatorio entre 1 y 100:

```js
Math.floor(Math.random() * 100) + 1;
```

Intenta actualizar ambas líneas de esta manera, luego guarda y refresca — ¡el juego ahora debería trabajar como pretendemos!

## Otros errores comunes

Hay otros errores comunes que encontrarás en tu código. Esta sección destaca la mayoría de ellos.

### SyntaxError: `falta ; antes de la declaración`

Este error generalmente significa que has omitido un punto y coma al final de una de sus líneas de código, pero a veces puede ser más críptico. Por ejemplo, si cambiamos esta línea dentro de la función `checkGuess()`:

```js
var userGuess = Number(guessField.value);
```

a

```js
var userGuess === Number(guessField.value);
```

Lanza este error porque cree que estás intentando hacer algo diferente. Debes asegurarte de no confundir el operador de asignación (`=`), que establece una variable para que sea igual a un valor — con el operador de igualdad estricta (`===`), que prueba si un valor es igual a otro y devuelve un resultado `true`/`false`.

> **Nota:** Ve más detalles sobre este error en nuestra página de referencia [SyntaxError: falta ; antes de la declaración](/es/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement).

### El programa siempre dice que has ganado, independientemente de lo que hayas ingresado

Este podría ser otro síntoma de confusión entre la asignación y los operadores de igualdad estricta. Por ejemplo, si cambiamos esta línea dentro de `checkGuess()`:

```js
if (userGuess === randomNumber) {
```

a

```js
if (userGuess = randomNumber) {
```

la prueba siempre devolvería `true`, haciendo que el programa informe que se ganó el juego. ¡Ten cuidado!

### SyntaxError: `falta ) después de la lista de argumentos`

Este es bastante simple — generalmente significa que olvidaste colocar el paréntesis de cierre al final de una llamada a una función/método.

> **Nota:** Ve más detalles sobre este error en nuestra página de referencia [SyntaxError: falta ) después de la lista de argumentos](/es/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list).

### SyntaxError: `falta : después de la propiedad id`

Este error generalmente se relaciona con un objeto JavaScript formado incorrectamente, pero en este caso logramos obtenerlo cambiando

```js
function checkGuess() {
```

a

```js
function checkGuess( {
```

Esto ha hecho que el navegador piense que estamos tratando de pasar el contenido de la función a la función como un argumento. ¡Cuidado con esos paréntesis!

### SyntaxError: `falta } después del cuerpo de la función`

Esto es fácil — generalmente significa que has omitido una de tus llaves de una función o estructura condicional. Obtuvimos este error al eliminar una de las llaves de cierre cerca de la parte inferior de la función `checkGuess()`.

### SyntaxError: `esperaba expresión, obtuve 'string'` o SyntaxError: `Cadena literal sin terminar`

Estos errores generalmente significan que has omitido las comillas de apertura o cierre de un valor de cadena. En el primer error anterior, _string_ se reemplazaría con los caracteres inesperados que encontró el navegador en lugar de una comilla al comienzo de una cadena. El segundo error significa que la cadena no se ha terminado con comillas.

Para todos estos errores, piensa en cómo abordamos los ejemplos que vimos en el tutorial. Cuando surge un error, mira el número de línea que te dan, ve a esa línea y revísala para detectar lo que está mal. Ten en cuenta que el error no necesariamente estará en esa línea, y también que el error podría no ser causado por el mismo problema que mencionamos anteriormente.

> **Nota:** Obtén más detalles sobre estos errores en nuestras páginas de referencia [SyntaxError: símbolo inesperado](/es/docs/Web/JavaScript/Reference/Errors/Unexpected_token) y [SyntaxError: cadena literal sin terminar](/es/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal).

## Resumen

Ahí lo tienes, los conceptos básicos para descubrir errores en programas sencillos de JavaScript. No siempre será tan sencillo averiguar qué está mal en tu código, pero al menos esto te ahorrará algunas horas de sueño y te permitirá progresar un poco más rápido cuando las cosas no salgan bien, especialmente en las primeras etapas de tu viaje de aprendizaje.

## Ve también

- Hay muchos otros tipos de errores que no se enumeran aquí; estamos compilando una referencia que explica lo que significan en detalle; consulta la [referencia de error de JavaScript](/es/docs/Web/JavaScript/Reference/Errors).
- Si encuentras algún error en tu código que no estás seguro de cómo solucionarlo después de leer este artículo, ¡puedes obtener ayuda! Solicita ayuda en la [categoría de aprendizaje del foro de discusión de MDN](https://discourse.mozilla.org/c/mdn/learn), o en la [sala de MDN Web Docs](https://chat.mozilla.org/#/room/#mdn:mozilla.org) en [Matrix](https://wiki.mozilla.org/Matrix). Dinos cuál es tu error e intentaremos ayudarte. Una copia de tu código también sería útil.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

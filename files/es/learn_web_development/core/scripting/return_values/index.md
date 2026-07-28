---
title: Valores de retorno de una función
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: b8c317e606fff19152e9431be45986c50846b0ac
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Test_your_skills/Functions", "Learn_web_development/Core/Scripting")}}

Queda un último concepto esencial sobre las funciones que debemos discutir: los valores de retorno. Algunas funciones no retornan un valor significativo, pero otras sí lo hacen. Es importante entender cuáles son esos valores, cómo usarlos en tu código y cómo hacer que las funciones retornen valores útiles. Cubriremos todo esto a continuación.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>Comprensión de <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y de los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>, familiaridad con los conceptos básicos de funciones de JavaScript vistos en la lección anterior.</td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Qué son los valores de retorno.</li>
          <li>Cómo usar los valores de retorno de funciones existentes.</li>
          <li>Cómo agregar valores de retorno a tus propias funciones.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué son los valores de retorno?

Los **valores de retorno** son justo lo que su nombre indica: los valores que una función retorna cuando termina su ejecución. Ya te has encontrado con valores de retorno varias veces, aunque quizás no hayas pensado en ellos de forma explícita.

Volvamos a un ejemplo conocido (de un [artículo anterior](/es/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) de esta serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Debería imprimir "The weather is warm"
// la función de cadena replace() toma una cadena,
// reemplaza una subcadena por otra y retorna
// una nueva cadena con el reemplazo realizado
```

La función [`replace()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace) se invoca sobre la cadena `myText`, y recibe dos parámetros:

- La subcadena a buscar (`"cold"`).
- La cadena por la que se reemplazará (`"warm"`).

Cuando la función termina (finaliza su ejecución), retorna un valor, que es una nueva cadena con el reemplazo realizado. En el código anterior, el resultado de este valor de retorno se guarda en la variable `newString`.

Si observas la página de referencia de MDN de la función [`replace()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace), verás una sección llamada [valor de retorno](/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es muy útil saber y entender qué valores retornan las funciones, por lo que intentamos incluir esta información siempre que sea posible.

Algunas funciones no retornan ningún valor. (En estos casos, nuestras páginas de referencia indican el valor de retorno como [`void`](/es/docs/Web/JavaScript/Reference/Operators/void) o [`undefined`](/es/docs/Web/JavaScript/Reference/Global_Objects/undefined).) Por ejemplo, en la función [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50) que construimos en el artículo anterior, no se retorna ningún valor específico cuando se invoca la función. Simplemente hace que aparezca un cuadro en algún lugar de la pantalla, ¡eso es todo!

Generalmente, un valor de retorno se usa cuando la función es un paso intermedio dentro de algún tipo de cálculo. Quieres llegar a un resultado final, que involucra ciertos valores que deben ser calculados por una función. Después de que la función calcula el valor, puede retornarlo para que se guarde en una variable, y así puedas usar esa variable en la siguiente etapa del cálculo.

## Cómo retornar un valor

Para retornar un valor desde una función personalizada, necesitas usar la palabra clave [`return`](/es/docs/Web/JavaScript/Reference/Statements/return). Vimos esto en acción hace poco en nuestro ejemplo [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html). Nuestra función `draw()` dibuja 100 círculos aleatorios en algún lugar de un {{htmlelement("canvas")}} HTML:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Dentro de cada iteración del bucle, se hacen tres llamadas a la función `random()`, para generar un valor aleatorio para la _coordenada x_, la _coordenada y_ y el _radio_ del círculo actual, respectivamente. La función `random()` recibe un parámetro (un número entero) y retorna un número entero aleatorio entre `0` y ese número. Se ve así:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Esto podría escribirse de la siguiente manera:

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

Pero la primera versión es más rápida de escribir y más compacta.

Estamos retornando el resultado del cálculo `Math.floor(Math.random() * number)` cada vez que se llama a la función. Este valor de retorno aparece en el punto donde se llamó a la función, y el código continúa.

Entonces, cuando ejecutas lo siguiente:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Si las tres llamadas a `random()` retornaran los valores `500`, `200` y `35`, respectivamente, la línea en realidad se ejecutaría como si fuera esta:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Las llamadas a funciones en la línea se ejecutan primero, y sus valores de retorno se sustituyen en lugar de las llamadas a funciones, antes de que la línea en sí se ejecute.

## Implementación de valores de retorno en funciones

Intentemos escribir algunas funciones que incluyan valores de retorno.

1. Haz una copia local del archivo [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html) de GitHub. Esta es una página HTML sencilla que contiene un campo de texto {{htmlelement("input")}} y un párrafo. También hay un elemento {{htmlelement("script")}}, en el que hemos guardado una referencia a ambos elementos HTML en dos variables. Esta página te permitirá ingresar un número en el cuadro de texto y mostrar debajo distintos números relacionados con él.

2. Agrega algunas funciones útiles a este elemento `<script>`, debajo de las dos líneas existentes:

   ```js
   function squared(num) {
     return num * num;
   }

   function cubed(num) {
     return num * num * num;
   }

   function factorial(num) {
     if (num < 0) return undefined;
     if (num === 0) return 1;
     let x = num - 1;
     while (x > 1) {
       num *= x;
       x--;
     }
     return num;
   }
   ```

   Las funciones `squared()` y `cubed()` son bastante evidentes: retornan el cuadrado o el cubo del número que se pasó como parámetro. La función `factorial()` retorna el [factorial](https://en.wikipedia.org/wiki/Factorial) del número dado.

3. Incluye una forma de imprimir información sobre el número ingresado en el campo de texto, agregando el siguiente controlador de eventos debajo de las funciones existentes:

   ```js
   input.addEventListener("change", () => {
     const num = parseFloat(input.value);
     if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
     } else {
       para.textContent = `${num} squared is ${squared(num)}. `;
       para.textContent += `${num} cubed is ${cubed(num)}. `;
       para.textContent += `${num} factorial is ${factorial(num)}. `;
     }
   });
   ```

4. Guarda tu código, cárgalo en un navegador y pruébalo.

A continuación, algunas explicaciones sobre la función `addEventListener()` del paso 3 anterior:

- Al agregar un detector de eventos `change`, esta función se ejecuta cada vez que se dispara el evento `change` en el campo de texto, es decir, cuando se ingresa un nuevo valor en el `input` de texto y se confirma (ingresa un valor y luego quita el foco del campo presionando <kbd>Tab</kbd> o <kbd>Return</kbd>). Cuando esta función anónima se ejecuta, el valor del `input` se guarda en la constante `num`.
- La sentencia `if` imprime un mensaje de error si el valor ingresado no es un número. La condición verifica si la expresión `isNaN(num)` retorna `true`. La función [`isNaN()`](/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN) comprueba si el valor `num` no es un número; si es así, retorna `true`, y si no, retorna `false`.
- Si la condición retorna `false`, el valor `num` es un número y la función imprime dentro del elemento de párrafo una oración que indica el cuadrado, el cubo y el factorial del número. La oración llama a las funciones `squared()`, `cubed()` y `factorial()` para calcular los valores requeridos.

> [!NOTE]
> Si tienes problemas para que el ejemplo funcione, compara tu código con la [versión terminada en GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) (también puedes [verla funcionando en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)).

### Agrega algunas funciones propias

Llegados a este punto, nos gustaría que intentaras escribir un par de funciones propias y agregarlas a la biblioteca. ¿Qué tal la raíz cuadrada o cúbica del número? ¿O la circunferencia de un círculo con un radio dado?

Algunos consejos adicionales relacionados con funciones:

- Observa otro ejemplo de cómo escribir _manejo de errores_ dentro de funciones. Generalmente, es buena idea comprobar que los parámetros necesarios estén validados, y que los parámetros opcionales tengan algún valor por defecto. De esta manera, tu programa tendrá menos probabilidades de generar errores.
- Piensa en la idea de crear una _biblioteca de funciones_. A medida que avances en tu carrera como programador, empezarás a hacer los mismos tipos de tareas una y otra vez. Es una buena idea crear tu propia biblioteca de funciones de utilidad para realizar este tipo de tareas. Puedes copiarlas en código nuevo, o incluso aplicarlas a páginas HTML donde las necesites.

## Resumen

Y ahí lo tenemos: las funciones son divertidas, muy útiles y, aunque hay mucho que decir sobre su sintaxis y funcionalidad, son bastante comprensibles.

En el próximo artículo, te daremos algunas pruebas que podrás usar para comprobar qué tan bien has entendido y retenido toda la información que te dimos sobre funciones en los últimos artículos.

## Ver también

- [Funciones en profundidad](/es/docs/Web/JavaScript/Reference/Functions): una guía detallada que cubre información más avanzada relacionada con funciones.
- [Funciones callback en JavaScript](https://www.impressivewebs.com/callback-functions-javascript/): un patrón común en JavaScript consiste en pasar una función a otra función _como argumento_. Luego, esta se llama dentro de la primera función. Esto está un poco fuera del alcance de este curso, pero vale la pena estudiarlo más adelante.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Test_your_skills/Functions", "Learn_web_development/Core/Scripting")}}

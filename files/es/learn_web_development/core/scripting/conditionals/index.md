---
title: Tomando decisiones en tu código — condicionales
short-title: Condicionales
slug: Learn_web_development/Core/Scripting/Conditionals
original_slug: Learn/JavaScript/Building_blocks/conditionals
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Test_your_skills/Conditionals", "Learn_web_development/Core/Scripting")}}

En cualquier lenguaje de programación, el código necesita tomar decisiones y llevar a cabo distintas acciones dependiendo de diferentes entradas. Por ejemplo, en un juego, si el número de vidas del jugador es 0, el juego se termina. En una aplicación del clima, si se consulta por la mañana, muestra una imagen del amanecer; muestra estrellas y una luna si es de noche. En este artículo exploraremos cómo funcionan las llamadas sentencias condicionales en JavaScript.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>Comprensión de <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y de los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>, familiaridad con los conceptos básicos de JavaScript vistos en lecciones anteriores.</td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Entender qué es un condicional — una estructura de código para ejecutar diferentes rutas de código dependiendo del resultado de una prueba.</li>
          <li>Implementar condiciones usando <code>if</code>/<code>else</code>/<code>else if</code>.</li>
          <li>Usar operadores de comparación para crear pruebas.</li>
          <li>Implementar lógica AND, OR y NOT en las pruebas.</li>
          <li>Sentencias switch.</li>
          <li>Operadores ternarios.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¡Puedes tenerlo con una condición!

Los seres humanos (y otros animales) tomamos decisiones todo el tiempo que afectan nuestras vidas, desde pequeñas ("¿debería comer una galleta o dos?") hasta grandes ("¿debería quedarme en mi país y trabajar en la granja familiar, o mudarme a Estados Unidos a estudiar astrofísica?")

Las sentencias condicionales nos permiten representar esa toma de decisiones en JavaScript, desde la elección que debe hacerse (por ejemplo, "una galleta o dos"), hasta el resultado de esas elecciones (quizá el resultado de "me comí una galleta" sea "me quedé con hambre", y el resultado de "me comí dos galletas" sea "quedé satisfecho, pero mamá me regañó por comerme todas las galletas".)

![Un personaje de caricatura parecido a una persona sosteniendo un frasco de galletas etiquetado 'Cookies'. Hay un signo de interrogación sobre la cabeza del personaje. Hay dos globos de diálogo. El globo izquierdo tiene una galleta. El globo derecho tiene dos galletas. En conjunto, implica que el personaje intenta decidir si quiere una galleta o dos.](cookie-choice-small.png)

## Sentencias if...else

Veamos por mucho el tipo de sentencia condicional más común que usarás en JavaScript — la humilde [sentencia `if...else`](/es/docs/Web/JavaScript/Reference/Statements/if...else).

### Sintaxis básica de if...else

La sintaxis básica de `if...else` se ve así:

```js
if (condition) {
  /* código que se ejecuta si la condición es true */
} else {
  /* en su lugar, ejecuta otro código */
}
```

Aquí tenemos:

1. La palabra clave `if` seguida de unos paréntesis.
2. Una condición a probar, colocada dentro de los paréntesis (normalmente "¿es este valor mayor que este otro valor?" o "¿existe este valor?"). La condición usa los [operadores de comparación](/es/docs/Learn_web_development/Core/Scripting/Math#operadores_de_comparación) que vimos antes en este módulo y devuelve `true` o `false`.
3. Un par de llaves, dentro de las cuales tenemos código — puede ser el código que queramos, y solo se ejecuta si la condición devuelve `true`.
4. La palabra clave `else`.
5. Otro par de llaves, dentro de las cuales tenemos más código — puede ser el código que queramos, y solo se ejecuta si la condición no es `true` — o en otras palabras, si la condición es `false`.

Este código es bastante legible para un humano — dice "**si** la **condición** devuelve `true`, ejecuta el código A, **si no** (else), ejecuta el código B".

Debes saber que no es obligatorio incluir el `else` y el segundo bloque de llaves — el siguiente código también es perfectamente válido:

```js
if (condition) {
  /* código que se ejecuta si la condición es true */
}

/* ejecuta otro código */
```

Sin embargo, aquí hay que tener cuidado — en este caso, el segundo bloque de código no está controlado por la sentencia condicional, así que **siempre** se ejecuta, sin importar si la condición devuelve `true` o `false`. Esto no es necesariamente malo, pero puede que no sea lo que quieres — a menudo querrás ejecutar un bloque de código _o_ el otro, no ambos.

Como punto final, aunque no es recomendable, a veces verás sentencias `if...else` escritas sin llaves:

```js example-bad
if (condition) doSomething();
else doSomethingElse();
```

Esta sintaxis es perfectamente válida, pero es mucho más fácil entender el código si usas las llaves para delimitar los bloques, y varias líneas con indentación.

### Un ejemplo real

Para entender mejor esta sintaxis, consideremos un ejemplo real. Imagina a una niña o un niño a quien su madre o padre le pide ayuda con una tarea del hogar. El padre podría decir: "¡Oye, cariño! Si me ayudas yendo a hacer las compras, te doy una mesada extra para que te alcance para ese juguete que querías." En JavaScript, podríamos representarlo así:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

Este código, tal como está, siempre da como resultado que la variable `shoppingDone` devuelva `false`, lo que significa una decepción para nuestra pobre criatura. Dependería de nosotros proporcionar un mecanismo para que el padre establezca la variable `shoppingDone` en `true` si las compras se hicieron.

> [!NOTE]
> Puedes ver una [versión más completa de este ejemplo en GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (también puedes verla [funcionando en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

El ejemplo anterior nos dio dos opciones, o resultados — pero ¿y si queremos más de dos?

Hay una manera de encadenar opciones/resultados extra a tu `if...else` — usando `else if`. Cada opción extra requiere un bloque adicional entre `if () { }` y `else { }` — mira el siguiente ejemplo más elaborado, que podría ser parte de una aplicación sencilla de pronóstico del clima:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100, "", "") }}

1. Aquí tenemos un elemento HTML {{htmlelement("select")}} que nos permite elegir distintas opciones de clima, y un párrafo sencillo.
2. En el JavaScript, guardamos una referencia tanto al elemento {{htmlelement("select")}} como al {{htmlelement("p")}}, y agregamos un detector de eventos al elemento `<select>` para que, cuando su valor cambie, se ejecute la función `setWeather()`.
3. Cuando esta función se ejecuta, primero asignamos a una variable llamada `choice` el valor actualmente seleccionado en el elemento `<select>`. Luego usamos una sentencia condicional para mostrar distintos textos dentro del párrafo dependiendo del valor de `choice`. Fíjate cómo todas las condiciones se prueban en bloques `else if () { }`, excepto la primera, que se prueba en un bloque `if () { }`.
4. La última opción, dentro del bloque `else { }`, es básicamente una opción de "último recurso" — el código dentro de ella se ejecutará si ninguna de las condiciones es `true`. En este caso, sirve para vaciar el texto del párrafo si no hay nada seleccionado, por ejemplo, si el usuario decide volver a seleccionar la opción de relleno "--Make a choice--" mostrada al principio.

> [!NOTE]
> También puedes [encontrar este ejemplo en GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (y [verlo funcionando en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) ahí también.)

### Una nota sobre los operadores de comparación

Los operadores de comparación se usan para probar las condiciones dentro de nuestras sentencias condicionales. Vimos por primera vez los operadores de comparación en el artículo [Matemáticas básicas en JavaScript — números y operadores](/es/docs/Learn_web_development/Core/Scripting/Math#operadores_de_comparación). Nuestras opciones son:

- `===` y `!==` — prueban si un valor es idéntico, o no idéntico, a otro.
- `<` y `>` — prueban si un valor es menor o mayor que otro.
- `<=` y `>=` — prueban si un valor es menor o igual, o mayor o igual, que otro.

Queremos hacer una mención especial sobre las pruebas de valores booleanos (`true`/`false`), y un patrón común con el que te encontrarás una y otra vez. Cualquier valor que no sea `false`, `undefined`, `null`, `0`, `NaN` o una cadena vacía (`''`) en realidad devuelve `true` cuando se prueba como sentencia condicional, por lo tanto puedes usar el nombre de una variable por sí solo para probar si es `true`, o incluso si existe (es decir, que no es undefined). Por ejemplo:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Y, volviendo a nuestro ejemplo anterior de la criatura que hace una tarea para su padre o madre, podrías escribirlo así:

```js
let shoppingDone = false;
let childAllowance;

// No necesitamos especificar 'shoppingDone === true' explícitamente
if (shoppingDone) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

### Anidar if...else

Es perfectamente válido poner una sentencia `if...else` dentro de otra — anidarlas. Por ejemplo, podríamos actualizar nuestra aplicación de pronóstico del clima para mostrar otro conjunto de opciones dependiendo de la temperatura:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Aunque todo el código funciona en conjunto, cada sentencia `if...else` funciona de manera completamente independiente de la otra.

### Operadores lógicos: AND, OR y NOT

Si quieres probar múltiples condiciones sin escribir sentencias `if...else` anidadas, los [operadores lógicos](/es/docs/Web/JavaScript/Reference/Operators) pueden ayudarte. Cuando se usan en condiciones, los primeros dos hacen lo siguiente:

- `&&` — AND; te permite encadenar dos o más expresiones de modo que todas ellas tengan que evaluarse individualmente como `true` para que la expresión completa devuelva `true`.
- `||` — OR; te permite encadenar dos o más expresiones de modo que una o más de ellas tengan que evaluarse individualmente como `true` para que la expresión completa devuelva `true`.

Para darte un ejemplo de AND, el fragmento del ejemplo anterior puede reescribirse así:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Así, por ejemplo, el primer bloque de código solo se ejecutará si `choice === 'sunny'` _y_ `temperature < 86` devuelven `true`.

Veamos un ejemplo rápido de OR:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

El último tipo de operador lógico, NOT, expresado por el operador `!`, puede usarse para negar una expresión. Combinémoslo con OR en el ejemplo anterior:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

En este fragmento, si la sentencia OR devuelve `true`, el operador NOT la negará de modo que la expresión completa devuelva `false`.

Puedes combinar tantas sentencias lógicas como quieras, en la estructura que quieras. El siguiente ejemplo ejecuta el código de adentro solo si ambas sentencias OR devuelven true, lo que significa que la sentencia AND completa devolverá true:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // ejecuta el código
}
```

Un error común al usar el operador lógico OR en sentencias condicionales es intentar escribir una sola vez la variable cuyo valor estás comprobando, y luego dar una lista de valores que podría tener para devolver true, separados por operadores `||` (OR). Por ejemplo:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // ejecuta mi código
}
```

En este caso, la condición dentro de `if ()` siempre se evaluará como true, ya que 7 (o cualquier otro valor distinto de cero) siempre se evalúa como `true`. Esta condición en realidad dice "si x es igual a 5, o 7 es true — lo cual siempre lo es". ¡Lógicamente esto no es lo que queremos! Para que funcione, tienes que especificar una prueba completa a cada lado de cada operador OR:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // ejecuta mi código
}
```

## Sentencias switch

Las sentencias `if...else` cumplen bien la función de habilitar código condicional, pero no están exentas de desventajas. Son buenas principalmente para casos en los que tienes un par de opciones, y cada una requiere una cantidad razonable de código a ejecutar, y/o las condiciones son complejas (por ejemplo, múltiples operadores lógicos). Para los casos en los que solo quieres asignar a una variable un valor de entre varias opciones, o imprimir un mensaje en particular dependiendo de una condición, la sintaxis puede ser algo engorrosa, especialmente si tienes un número grande de opciones.

En esos casos, las [sentencias `switch`](/es/docs/Web/JavaScript/Reference/Statements/switch) son tus amigas — toman una sola expresión/valor como entrada, y luego recorren varias opciones hasta encontrar una que coincida con ese valor, ejecutando el código correspondiente. Aquí hay más pseudocódigo, para darte una idea:

```js
switch (expression) {
  case choice1:
    // ejecuta este código
    break;

  case choice2:
    // en su lugar, ejecuta este código
    break;

  // incluye tantos cases como quieras

  default:
    // de hecho, simplemente ejecuta este código
    break;
}
```

Aquí tenemos:

1. La palabra clave `switch`, seguida de un par de paréntesis.
2. Una expresión o valor dentro de los paréntesis.
3. La palabra clave `case`, seguida de una opción que la expresión/valor podría ser, seguida de dos puntos.
4. Código a ejecutar si la opción coincide con la expresión.
5. Una sentencia `break`, seguida de punto y coma. Si la opción anterior coincide con la expresión/valor, el navegador deja de ejecutar el bloque de código aquí y continúa con el código que aparezca debajo de la sentencia switch.
6. Tantos otros cases (puntos 3–5) como quieras.
7. La palabra clave `default`, seguida exactamente del mismo patrón de código que uno de los cases (puntos 3–5), excepto que `default` no lleva una opción después, y no necesita la sentencia `break`, ya que de todos modos no hay nada que ejecutar después en el bloque. Esta es la opción predeterminada que se ejecuta si ninguna de las opciones coincide.

> [!NOTE]
> No es obligatorio incluir la sección `default` — puedes omitirla sin problema si no hay posibilidad de que la expresión termine siendo igual a un valor desconocido. Sin embargo, si existe esa posibilidad, necesitas incluirla para manejar los casos desconocidos.

### Un ejemplo de switch

Veamos un ejemplo real — reescribiremos nuestra aplicación de pronóstico del clima para usar una sentencia switch en su lugar:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('Un_ejemplo_de_switch', '100%', 100, "", "") }}

> [!NOTE]
> También puedes [encontrar este ejemplo en GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (y [verlo funcionando en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) ahí también.)

## Operador ternario

Hay una última pieza de sintaxis que queremos presentarte antes de ponerte a jugar con algunos ejemplos. El [operador ternario o condicional](/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator) es una pequeña pieza de sintaxis que prueba una condición y devuelve un valor/expresión si es `true`, y otro si es `false` — puede ser útil en algunas situaciones, y ocupa mucho menos código que un bloque `if...else` si tienes dos opciones entre las que se elige mediante una condición `true`/`false`. El pseudocódigo se ve así:

```js-nolint
condición ? ejecuta este código : en su lugar, ejecuta este otro código
```

Así que veamos un ejemplo:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Aquí tenemos una variable llamada `isBirthday` — si es `true`, le damos a nuestra invitada un mensaje de feliz cumpleaños; si no, le damos el saludo diario habitual.

### Ejemplo del operador ternario

El operador ternario no sirve solo para asignar valores a variables; también puedes ejecutar funciones, o líneas de código — lo que quieras. El siguiente ejemplo en vivo muestra un selector de tema sencillo donde el estilo del sitio se aplica usando un operador ternario.

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
```

{{ EmbedLiveSample('Ejemplo_del_operador_ternario', '100%', 300, "", "") }}

Aquí tenemos un elemento {{htmlelement('select')}} para elegir un tema (negro o blanco), más un sencillo {{htmlelement("Heading_Elements", "h1")}} para mostrar el título de un sitio web. También tenemos una función llamada `update()`, que recibe dos colores como parámetros (entradas). El color de fondo del sitio se establece con el primer color proporcionado, y el color del texto con el segundo.

Finalmente, también tenemos un detector de eventos [onchange](/es/docs/Web/API/HTMLElement/change_event) que sirve para ejecutar una función que contiene un operador ternario. Comienza con una condición de prueba — `select.value === 'black'`. Si devuelve `true`, ejecutamos la función `update()` con parámetros de negro y blanco, lo que significa que terminamos con un color de fondo negro y un color de texto blanco. Si devuelve `false`, ejecutamos la función `update()` con parámetros de blanco y negro, lo que significa que los colores del sitio se invierten.

> [!NOTE]
> También puedes [encontrar este ejemplo en GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (y [verlo funcionando en vivo](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html) ahí también.)

## Implementación de un calendario básico

En este ejemplo, nos vas a ayudar a terminar una aplicación básica de calendario. En el código tienes:

- Un elemento {{htmlelement("select")}} para permitir al usuario elegir entre distintos meses.
- Un manejador del evento `change` para detectar cuándo cambia el valor seleccionado en el menú `<select>`.
- Una función llamada `createCalendar()` que dibuja el calendario y muestra el mes correcto en el elemento {{htmlelement("Heading_Elements", "h1")}}.

Para completar el ejemplo:

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Escribe una sentencia condicional dentro de la función `createCalendar()`, justo debajo del comentario `// AGREGA EL CONDICIONAL AQUÍ`. Debe:
   1. Mirar el mes seleccionado (almacenado en la variable `choice`. Este será el valor del elemento `<select>` después de que cambie, por ejemplo "January").
   2. Asignar a la variable `days` el número de días del mes seleccionado. Para esto tendrás que buscar cuántos días tiene cada mes del año. Puedes ignorar los años bisiestos para los fines de este ejemplo.

Pistas:

- Te recomendamos usar el OR lógico para agrupar varios meses en una sola condición; muchos de ellos comparten el mismo número de días.
- Piensa qué número de días es el más común y úsalo como valor predeterminado.

Si cometes un error, puedes limpiar tu trabajo con el botón _Reset_ del MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo de la salida en vivo.

```html hidden live-sample___conditionals-1
<label for="month">Select month: </label>
<select id="month">
  <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
</select>

<h1></h1>

<ul></ul>
```

```css hidden live-sample___conditionals-1
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

* {
  box-sizing: border-box;
}

ul {
  padding-left: 0;
}

li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}
```

```js live-sample___conditionals-1
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // AGREGA EL CONDICIONAL AQUÍ

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");
```

{{ EmbedLiveSample("conditionals-1", "100%", 550) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu JavaScript terminado debería verse así:

```js
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  if (month === "February") {
    days = 28;
  } else if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");
```

</details>

## Agregar más opciones de color

En este ejemplo, vas a tomar el ejemplo del operador ternario que vimos antes y convertir el operador ternario en una sentencia switch que nos permita aplicar más opciones al sitio web. Mira el {{htmlelement("select")}} — esta vez verás que no tiene dos opciones de tema, sino cinco.

Para completar el ejemplo:

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Agrega una sentencia switch justo debajo del comentario `// AGREGA LA SENTENCIA SWITCH`:
   1. Debe aceptar la variable `choice` como su expresión de entrada.
   2. En cada case, la opción debe ser igual a uno de los posibles valores de `<option>` que pueden seleccionarse, es decir, `white`, `black`, `purple`, `yellow` o `psychedelic`. Toma en cuenta que los valores de las opciones están en minúsculas, mientras que las _etiquetas_ de las opciones, como se muestran en la salida en vivo, van con mayúscula inicial. En tu código debes usar los valores en minúsculas.
   3. En cada case, debe ejecutarse la función `update()`, pasándole dos valores de color: el primero para el color de fondo y el segundo para el color del texto. Recuerda que los valores de color son cadenas, así que deben ir entre comillas.

Si cometes un error, puedes limpiar tu trabajo con el botón _Reset_ del MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo de la salida en vivo.

```html hidden live-sample___conditionals-2
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
  <option value="purple">Purple</option>
  <option value="yellow">Yellow</option>
  <option value="psychedelic">Psychedelic</option>
</select>

<h1>This is my website</h1>
```

```css hidden live-sample___conditionals-2
html {
  font-family: sans-serif;
  height: 95%;
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
  height: inherit;
}
```

```js live-sample___conditionals-2
const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
  const choice = select.value;

  // AGREGA LA SENTENCIA SWITCH
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
```

{{ EmbedLiveSample("conditionals-2", "100%", 200) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu JavaScript terminado debería verse así:

```js
const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
  const choice = select.value;

  switch (choice) {
    case "black":
      update("black", "white");
      break;
    case "white":
      update("white", "black");
      break;
    case "purple":
      update("purple", "white");
      break;
    case "yellow":
      update("yellow", "purple");
      break;
    case "psychedelic":
      update("lime", "purple");
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
```

</details>

## Resumen

¡Eso es todo lo que realmente necesitas saber por ahora sobre las estructuras condicionales en JavaScript! En el siguiente artículo te daremos algunas pruebas que puedes usar para comprobar qué tan bien entendiste y retuviste esta información.

## Véase también

- [Operadores de comparación](/es/docs/Learn_web_development/Core/Scripting/Math#operadores_de_comparación)
- [Sentencias condicionales en detalle](/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#expresiones_condicionales)
- [Referencia de if...else](/es/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referencia del operador condicional (ternario)](/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Test_your_skills/Conditionals", "Learn_web_development/Core/Scripting")}}

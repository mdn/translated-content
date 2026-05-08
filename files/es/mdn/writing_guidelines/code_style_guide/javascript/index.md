---
title: Directrices para escribir ejemplos de código JavaScript
short-title: Ejemplos de JavaScript
slug: MDN/Writing_guidelines/Code_style_guide/JavaScript
l10n:
  sourceCommit: 359d3c9cea9b2caa691c63ed3b01714ad4416372
---

Las siguientes directrices cubren la escritura de código de ejemplo JavaScript para MDN Web Docs. Este artículo es una lista de reglas para escribir ejemplos concisos que sean comprensibles para la mayor cantidad de personas posible.

## Directrices generales para ejemplos de código JavaScript

Esta sección explica las directrices generales a tener en cuenta al escribir ejemplos de código JavaScript. Las secciones posteriores cubrirán detalles más específicos.

### Elección de un formato

Las opiniones sobre la sangría correcta, el espacio en blanco y las longitudes de línea siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción para la creación y mantenimiento de contenido.

En MDN Web Docs, usamos [Prettier](https://prettier.io/) como formateador de código para mantener el estilo del código consistente (y para evitar discusiones fuera de tema). Puedes consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales, y leer la [documentación de Prettier](https://prettier.io/docs/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que debes seguir.

### Usa características modernas de JavaScript cuando estén soportadas

Puedes usar nuevas características una vez que cada navegador principal — Chrome, Edge, Firefox y Safari — las soporte (también conocido como {{glossary("Baseline", "Línea de base")}}).

Esta regla no se aplica a la característica de JavaScript que se está documentando en la página (que se dicta en su lugar por los [criterios de inclusión](/es/docs/MDN/Writing_guidelines/Criteria_for_inclusion)). Por ejemplo, puedes documentar características [no estándar o experimentales](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) y escribir ejemplos completos que demuestren su comportamiento, pero debes abstente de usar estas características en las demostraciones para otras características no relacionadas, como una API web.

## Arrays

### Creación de arrays

Para crear arrays, usa literales y no constructores.

Crea arrays así:

```js example-good
const visitedCities = [];
```

No hagas esto al crear arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Adición de elementos

Al agregar elementos a un array, usa [`push()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push) y no asignación directa. Considera el siguiente array:

```js
const pets = [];
```

Agrega elementos al array así:

```js example-good
pets.push("cat");
```

No agregues elementos al array así:

```js example-bad
pets[pets.length] = "cat";
```

## Métodos asíncronos

Escribir código asíncrono mejora el rendimiento y debe usarse cuando sea posible. En particular, puedes usar:

- [Promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/es/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/es/docs/Web/JavaScript/Reference/Operators/await)

Cuando ambas técnicas son posibles, preferimos usar la sintaxis más simple `async`/`await`. Desafortunadamente, no puedes usar `await` en el nivel superior a menos que estés en un módulo ECMAScript. Los módulos CommonJS usados por Node.js no son módulos ES. Si tu ejemplo está destinado a ser usado en todas partes, evita el `await` de nivel superior.

## Comentarios

Los comentarios son críticos para escribir buenos ejemplos de código. Aclaran la intención del código y ayudan a los desarrolladores a entenderlo. Presta especial atención a ellos.

- Si el propósito o la lógica del código no es obvio, añade un comentario con tu intención, como se muestra abajo:

  ```js example-good
  let total = 0;

  // Calcula la suma de los cuatro primeros elementos de arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  Por otro lado, reformular el código en prosa no es un buen uso de los comentarios:

  ```js example-bad
  let total = 0;

  // Bucle de 1 a 4
  for (let i = 0; i < 4; i++) {
    // Agrega valor al total
    total += arr[i];
  }
  ```

- Los comentarios tampoco son necesarios cuando las funciones tienen nombres explícitos que describen lo que están haciendo. Escribe:

  ```js example-good
  closeConnection();
  ```

  No escribas:

  ```js example-bad
  closeConnection(); // Cerrando la conexión
  ```

### Usa comentarios de una sola línea

Los comentarios de una sola línea se marcan con `//`, a diferencia de los comentarios en bloque encerrados entre `/* … */`.

En general, usa comentarios de una sola línea para comentar el código. Los escritores deben marcar cada línea del comentario con `//`, para que sea más fácil notar visualmente el código comentado. Además, esta convención permite comentar secciones de código usando `/* … */` mientras se depura.

- Deja un espacio entre las barras y el comentario. Comienza con una letra mayúscula, como una oración, pero no termines el comentario con un punto.

  ```js example-good
  // Este es un comentario de una sola línea bien escrito
  ```

- Si un comentario no comienza inmediatamente después de un nuevo nivel de sangría, agrega una línea vacía y luego agrega el comentario. Creará un bloque de código, haciendo obvio a qué se refiere el comentario. Además, pon tus comentarios en líneas separadas antes del código al que se refieren. Esto se muestra en el siguiente ejemplo:

  ```js example-good
  function checkout(goodsPrice, shipmentPrice, taxes) {
    // Calcula el precio total
    const total = goodsPrice + shipmentPrice + taxes;

    // Crea y añade un nuevo párrafo al documento
    const para = document.createElement("p");
    para.textContent = `El precio total es ${total}`;
    document.body.appendChild(para);
  }
  ```

### Salida de registros

- En el código destinado a ejecutarse en un entorno de producción, rara vez necesitas comentar cuando registras algunos datos. En ejemplos de código, a menudo usamos `console.log()`, `console.error()`, o funciones similares para mostrar valores importantes. Para ayudar al lector a comprender lo que sucederá sin ejecutar el código, puedes poner un comentario _después_ de la función con el registro que se producirá. Escribe:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket); // ['banana', 'mango', 'orange']
  }
  ```

  No escribas:

  ```js example-bad
  function exampleFunc(fruitBasket) {
    // Registros: ['banana', 'mango', 'orange']
    console.log(fruitBasket);
  }
  ```

- En caso de que la línea se vuelva demasiado larga, pon el comentario _después_ de la función, así:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Comentarios de varias líneas

Los comentarios cortos suelen ser mejores, así que trata de mantenerlos en una línea de 60 a 80 caracteres. Si esto no es posible, usa `//` al principio de cada línea:

```js example-good
// Este es un ejemplo de un comentario de varias líneas.
// La función imaginaria que sigue tiene algunas inusuales
// limitaciones que quiero señalar.
// Limitación 1
// Limitación 2
```

No uses `/* … */`:

```js example-bad
/* Este es un ejemplo de un comentario de varias líneas.
  La función imaginaria que sigue tiene algunas inusuales
  limitaciones que quiero señalar.
  Limitación 1
  Limitación 2 */
```

### Usa comentarios para marcar puntos suspensivos

Omitir código redundante usando puntos suspensivos (…) es necesario para mantener los ejemplos cortos. Aun así, los escritores deben hacerlo con cuidado, ya que los desarrolladores con frecuencia copian y pegan ejemplos en su código, y todas nuestras muestras de código JavaScript deben ser válidas.

En JavaScript, debes poner los puntos suspensivos (`…`) en un comentario. Cuando sea posible, indica qué acción se espera que agregue quien reutilice este fragmento.

Usar un comentario para los puntos suspensivos (…) es más explícito, previniendo errores cuando un desarrollador copia y pega un código de muestra. Escribe:

```js example-good
function exampleFunc() {
  // Agrega tu código aquí
  // …
}
```

No uses puntos suspensivos (…) así:

```js example-bad
function exampleFunc() {
  …
}
```

### Comentar parámetros

Al escribir código, generalmente omites parámetros que no necesitas. Pero en algunos ejemplos de código, quieres demostrar que no usaste algunos posibles parámetros.

Para hacerlo, usa `/* … */` en la lista de parámetros. Esta es una excepción a la regla de usar solo comentarios de una sola línea (`//`).

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Funciones

### Nombres de funciones

Para nombres de funciones, usa {{Glossary("camel_case", "camel case")}}, comenzando con un carácter en minúscula. Usa nombres concisos, legibles y semánticos cuando sea apropiado.

El siguiente es un ejemplo correcto de un nombre de función:

```js example-good
function sayHello() {
  console.log("Hello!");
}
```

No uses nombres de funciones como estos:

```js example-bad
function SayHello() {
  console.log("Hello!");
}

function doIt() {
  console.log("Hello!");
}
```

### Declaraciones de funciones

- Cuando sea posible, usa la declaración de función sobre expresiones de función para definir funciones.

  Esta es la forma recomendada de declarar una función:

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  Esta no es una buena forma de declarar una función:

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- Al usar funciones anónimas como callback (una función pasada a otra invocación de método), si no necesitas acceder a `this`, usa una función de flecha para hacer el código más corto y limpio.

  Esta es la forma recomendada:

  ```js example-good
  const array = [1, 2, 3, 4];
  const sum = array.reduce((a, b) => a + b);
  ```

  En lugar de esto:

  ```js example-bad
  const array = [1, 2, 3, 4];
  const sum = array.reduce(function (a, b) {
    return a + b;
  });
  ```

- Considera evitar usar la función de flecha para asignar una función a un identificador. En particular, no uses funciones flecha para los métodos. Usa declaraciones de funciones con la palabra clave `function`:

  ```js example-good
  function x() {
    // …
  }
  ```

  No hagas:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Cuando uses funciones flecha, usa [retorno implícito](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cuerpo_de_función) (también conocido como _cuerpo de expresión_) cuando sea posible:

  ```js example-good
  arr.map((e) => e.id);
  ```

  Y no:

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## Bucles y sentencias condicionales

### Inicialización de bucle

Cuando los [bucles](/es/docs/Learn_web_development/Core/Scripting/Loops) son necesarios, elige el apropiado entre [`for(;;)`](/es/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/es/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/es/docs/Web/JavaScript/Reference/Statements/while), etc.

- Al iterar a través de todos los elementos de la colección, evita usar el bucle clásico `for (;;)`; prefiere `for...of` o `forEach()`. Ten en cuenta que si estás usando una colección que no es un `Array`, tienes que comprobar que `for...of` realmente está soportado (requiere que la variable sea iterable), o que el método `forEach()` realmente está presente.

  Usa `for...of`:

  ```js example-good
  const dogs = ["Rex", "Lassie"];
  for (const dog of dogs) {
    console.log(dog);
  }
  ```

  O `forEach()`:

  ```js example-good
  const dogs = ["Rex", "Lassie"];
  dogs.forEach((dog) => {
    console.log(dog);
  });
  ```

  No uses `for (;;)` — no solo tienes que agregar un índice extra, `i`, sino que también tienes que rastrear la longitud del array. Esto puede ser propenso a errores para principiantes.

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- Asegúrate de definir correctamente el inicializador usando la palabra clave `const` para `for...of` o `let` para los otros bucles. No lo omitas. Estos son ejemplos correctos:

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  El siguiente ejemplo no sigue las directrices recomendadas para la inicialización (implícitamente crea una variable global y fallará en modo estricto):

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- Cuando necesites acceder tanto al valor como al índice, puedes usar `.forEach()` en lugar de `for (;;)`. Escribe:

  ```js example-good
  const gerbils = ["Zoé", "Chloé"];
  gerbils.forEach((gerbil, i) => {
    console.log(`Gerbil #${i}: ${gerbil}`);
  });
  ```

  No escribas:

  ```js example-bad
  const gerbils = ["Zoé", "Chloé"];
  for (let i = 0; i < gerbils.length; i++) {
    console.log(`Gerbil #${i}: ${gerbils[i]}`);
  }
  ```

> [!WARNING]
> Nunca uses `for...in` con arrays y cadenas.

> [!NOTE]
> Considera no usar un bucle `for` en absoluto. Si estás usando un [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) (o un [`String`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) para algunas operaciones), considera usar métodos de iteración más semánticos en su lugar, como [`map()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), y muchos más.

### Sentencias de control

Hay un caso notable a tener en cuenta para las sentencias de control `if...else`. Si la sentencia `if` termina con `return`, no agregues una sentencia `else`.

Continúa justo después de la sentencia `if`. Escribe:

```js example-good
if (test) {
  // Realiza algo si test es verdadero
  // …
  return;
}

// Realiza algo si test es falso
// …
```

No escribas:

```js example-bad
if (test) {
  // Realiza algo si test es verdadero
  // …
  return;
} else {
  // Realiza algo si test es falso
  // …
}
```

### Usa llaves con sentencias de flujo de control y bucles

Aunque las sentencias de flujo de control como `if`, `for`, y `while` no requieren el uso de llaves cuando el contenido se compone de una sola sentencia, siempre debes usar llaves. Escribe:

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

No escribas:

```js example-bad
for (const car of storedCars) car.paint("red");
```

Esto evita olvidarse de agregar las llaves al agregar más sentencias.

### Sentencias switch

Las sentencias switch pueden ser un poco complicadas.

- No agregues una sentencia `break` después de una sentencia `return` en un caso específico. En su lugar, escribe sentencias `return` así:

  ```js example-good
  switch (species) {
    case "chicken":
      return farm.shed;
    case "horse":
      return corral.entry;
    default:
      return "";
  }
  ```

  Si agregas una sentencia `break`, será inalcanzable. No escribas:

  ```js example-bad
  switch (species) {
    case "chicken":
      return farm.shed;
      break;
    case "horse":
      return corral.entry;
      break;
    default:
      return "";
  }
  ```

- Usa `default` como el último caso, y no lo termines con una sentencia `break`. Si necesitas hacerlo de otra manera, agrega un comentario explicando por qué.

- Recuerda que cuando declaras una variable local para un caso, necesitas usar llaves para definir un alcance:

  ```js
  switch (fruits) {
    case "Orange": {
      const slice = fruit.slice();
      eat(slice);
      break;
    }
    case "Apple": {
      const core = fruit.extractCore();
      recycle(core);
      break;
    }
  }
  ```

### Manejo de errores

- Si ciertos estados de tu programa arrojan errores no detectados, detendrán la ejecución y reducirán potencialmente la utilidad del ejemplo. Por lo tanto, debes detectar errores usando un bloque [`try...catch`](/es/docs/Web/JavaScript/Reference/Statements/try...catch), como se muestra abajo:

  ```js example-good
  try {
    console.log(getResult());
  } catch (e) {
    console.error(e);
  }
  ```

- Cuando no necesites el parámetro de la sentencia `catch`, omítelo:

  ```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("Ocurrió un error!");
  }
  ```

> [!NOTE]
> Ten en cuenta que solo los errores _recuperables_ deben detectarse y manejarse. Todos los errores no recuperables deben dejarse pasar y propagarse por la pila de llamadas.

## Objetos

### Nombres de objetos

- Al definir una clase, usa _PascalCase_ (comenzando con una letra mayúscula) para el nombre de la clase y _camelCase_ (comenzando con una letra minúscula) para la propiedad del objeto y los nombres de los métodos.

- Al definir una instancia de objeto, ya sea un literal o mediante un constructor, usa _camelCase_, comenzando con un carácter en minúscula, para el nombre de la instancia. Por ejemplo:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Creación de objetos

Para crear objetos generales (es decir, cuando las clases no están involucradas), usa literales y no constructores.

Por ejemplo, haz esto:

```js example-good
const object = {};
```

No crees un objeto general así:

```js example-bad
const object = new Object();
```

### Clases de objetos

- Usa la sintaxis de clase ES para objetos, no constructores de estilo antiguo.

  Por ejemplo, esta es la forma recomendada:

  ```js example-good
  class Person {
    constructor(name, age, pronouns) {
      this.name = name;
      this.age = age;
      this.pronouns = pronouns;
    }

    greeting() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }
  ```

- Usa `extends` para la herencia:

  ```js example-good
  class Teacher extends Person {
    // …
  }
  ```

### Métodos

Para definir métodos, usa la sintaxis de definición de métodos:

```js example-good
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

En lugar de:

```js example-bad
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

### Propiedades del objeto

- El método [`Object.prototype.hasOwnProperty()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) ha quedado obsoleto en favor de [`Object.hasOwn()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn).
- Cuando sea posible, usa la forma abreviada evitando la duplicación del identificador de la propiedad. Escribe:

  ```js example-good
  function createObject(name, age) {
    return { name, age };
  }
  ```

  No escribas:

  ```js example-bad
  function createObject(name, age) {
    return { name: name, age: age };
  }
  ```

## Operadores

Esta sección enumera nuestras recomendaciones sobre qué operadores usar y cuándo.

### Operadores condicionales

Cuando quieras almacenar en una variable un valor literal dependiendo de una condición, usa un [operador condicional (ternario)](/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator) en lugar de una sentencia `if...else`. Esta regla también se aplica cuando se devuelve un valor. Escribe:

```js example-good
const x = condition ? 1 : 2;
```

No escribas:

```js example-bad
let x;
if (condition) {
  x = 1;
} else {
  x = 2;
}
```

El operador condicional es útil al crear cadenas para registrar información. En tales casos, el uso de una sentencia regular `if...else` lleva a largos bloques de código para una operación secundaria como el registro, oscureciendo el punto central del ejemplo.

### Operador de igualdad estricta

Prefiere los operadores de [igualdad estricta](/es/docs/Web/JavaScript/Reference/Operators/Strict_equality) (triple igual) y de desigualdad sobre los operadores de igualdad flexible (doble igual) y de desigualdad.

Usa los operadores de igualdad estricta y de desigualdad así:

```js example-good
name === "Shilpa";
age !== 25;
```

No uses los operadores de igualdad y desigualdad flexibles, como se muestra abajo:

```js example-bad
name == "Shilpa";
age != 25;
```

Si necesitas usar `==` o `!=`, recuerda que `== null` es el único caso aceptable. Como TypeScript fallará en todos los demás casos, no queremos tenerlos en nuestro código de ejemplo. Considera agregar un comentario para explicar por qué lo necesitas.

### Atajos para pruebas booleanas

Prefiere atajos para las pruebas booleanas. Por ejemplo, usa `if (x)` y `if (!x)`, no `if (x === true)` y `if (x === false)`, a menos que diferentes tipos de valores verdaderos o falsos se manejen de forma diferente.

## Cadenas

Las cadenas literales se pueden encerrar entre comillas simples, como en `'Una cadena'`, o entre comillas dobles, como en `"Una cadena"`. No te preocupes por cuál usar; Prettier lo mantiene consistente.

### Template literals

Para insertar valores en cadenas, usa [plantillas literales](/es/docs/Web/JavaScript/Reference/Template_literals).

- Aquí hay un ejemplo de la forma recomendada de usar plantillas literales. Su uso evita muchos errores de espaciado.

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  No concatenes cadenas así:

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- No abuses de las plantillas literales. Si no hay sustituciones, usa una cadena literal normal en su lugar.

## Variables

### Nombres de variables

Los buenos nombres de variables son esenciales para comprender el código.

<!-- cSpell:ignore acclmtr -->

- Usa identificadores cortos y evita abreviaturas no comunes. Los buenos nombres de variables suelen tener entre 3 y 10 caracteres, pero solo como sugerencia. Por ejemplo, `accelerometer` es más descriptivo que abreviar como `acclmtr` por el bien de la longitud de los caracteres.
- Trata de usar ejemplos relevantes del mundo real donde cada variable tenga una semántica clara. Solo recurre a nombres de marcadores de posición como `foo` y `bar` cuando el ejemplo sea simple y artificial.
- No uses la convención de nomenclatura [notación húngara](https://es.wikipedia.org/wiki/Notaci%C3%B3n_h%C3%BAngara). No prefijes el nombre de la variable con su tipo. Por ejemplo, escribe `bought = car.buyer !== null` en lugar de `bBought = oCar.sBuyer != null` o `name = "Maria Sanchez"` en lugar de `sName = "Maria Sanchez"`.
- Para colecciones, evita agregar el tipo como lista, array, cola en el nombre. Usa el nombre del contenido en plural. Por ejemplo, para un array de autos, usa `cars` y no `carArray` o `carList`. Puede haber excepciones, como cuando quieres mostrar la forma abstracta de una característica sin el contexto de una aplicación en particular.
- Para valores primitivos, usa _camelCase_, comenzando con un carácter en minúscula. No uses `_`. Usa nombres concisos, legibles y semánticos cuando sea apropiado. Por ejemplo, usa `currencyName` en lugar de `currency_name`.
- Evita el uso de artículos y posesivos. Por ejemplo, usa `car` en lugar de `myCar` o `aCar`. Puede haber excepciones, como cuando se describe una característica en general sin un contexto práctico.
- Usa nombres de variables como se muestra aquí:

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  No nombres variables así:

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> [!NOTE]
> El único lugar donde está permitido no usar nombres semánticos legibles es donde existe una convención comúnmente reconocida, como usar `i` y `j` para iteradores de bucle.

### Declaraciones de variables

Al declarar variables y constantes, usa las palabras clave [`let`](/es/docs/Web/JavaScript/Reference/Statements/let) y [`const`](/es/docs/Web/JavaScript/Reference/Statements/const), no [`var`](/es/docs/Web/JavaScript/Reference/Statements/var). Los siguientes ejemplos muestran lo que se recomienda y lo que no en MDN Web Docs:

- Si una variable no se reasignará, prefiere `const`, así:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Si vas a cambiar el valor de una variable, usa `let` como se muestra abajo:

  ```js example-good
  let age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- El siguiente ejemplo usa `let` donde debería ser `const`. El código funcionará, pero queremos evitar este uso en los ejemplos de código de MDN Web Docs.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- El siguiente ejemplo usa `const` para una variable que se reasigna. La reasignación arrojará un error.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Happy birthday!");
  ```

- El siguiente ejemplo usa `var`, contaminando el alcance global:

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- Declara una variable por línea, así:

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

  No declares múltiples variables en una línea, separándolas con comas o usando declaraciones en cadena. Evita declarar variables así:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 se crea implícitamente como una variable global; falla en modo estricto
  ```

### Coerción de tipos

Evita las coerciones de tipo implícito. En particular, evita `+val` para forzar un valor a un número y `"" + val` para forzarlo a una cadena. Usa `Number()` y `String()`, sin `new`, en su lugar. Escribe:

```js example-good
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = String(name);
    this.#birthYear = Number(year);
  }
}
```

No escribas:

```js example-bad
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = "" + name;
    this.#birthYear = +year;
  }
}
```

## APIs web para evitar

Además de estas características del lenguaje JavaScript, recomendamos tener en cuenta algunas directrices relacionadas con las APIs web.

### Evita los prefijos del navegador

Si todos los navegadores principales (Chrome, Edge, Firefox y Safari) soportan una característica, no agregues el prefijo de la característica. Escribe:

```js example-good
const context = new AudioContext();
```

Evita la complejidad añadida de los prefijos. No escribas:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

La misma regla se aplica a los prefijos CSS.

### Evita las APIs obsoletas

Cuando un método, una propiedad o una interfaz completa está obsoleto, no lo uses (fuera de su documentación). En su lugar, usa la API moderna.

Aquí hay una lista no exhaustiva de APIs web para evitar y con qué reemplazarlas:

- Usa `fetch()` en lugar de XHR (`XMLHttpRequest`).
- Usa `AudioWorklet` en lugar de `ScriptProcessorNode`, en la Web Audio API.

### Usa APIs seguras y confiables

- No uses {{DOMxRef("Element.innerHTML")}} para insertar contenido puramente textual en un elemento; usa {{DOMxRef("Node.textContent")}} en su lugar. La propiedad `innerHTML` genera problemas de seguridad si un desarrollador no controla el parámetro. Cuanto más evitemos usarlo como escritores, menos fallos de seguridad se crean cuando un desarrollador copia y pega nuestro código.

  El siguiente ejemplo demuestra el uso de `textContent`.

  ```js example-good
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  No uses `innerHTML` para insertar _texto puro_ en los nodos DOM.

  ```js example-bad
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- La función `alert()` no es confiable. No funciona en ejemplos en vivo en MDN Web Docs que están dentro de un {{HTMLElement("iframe")}}. Además, es modal para toda la ventana, lo cual es molesto. En ejemplos de código estático, usa `console.log()` o `console.error()`. En [ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples), evita `console.log()` y `console.error()` porque no se muestran. Usa un elemento de interfaz de usuario dedicado.

### Usa el método de registro apropiado

- Al registrar un mensaje, usa `console.log()`.
- Al registrar un error, usa `console.error()`.

## Véase también

[Referencia del lenguaje JavaScript](/es/docs/Web/JavaScript/Reference) - navega a través de nuestras páginas de referencia de JavaScript para ver algunos fragmentos de JavaScript buenos, concisos y significativos.

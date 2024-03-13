---
title: Pautas para dar estilos a ejemplos de código JavaScript
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
---

{{MDNSidebar}}

Las siguientes pautas cubren la escritura de código de ejemplo JavaScript para los documentos web de MDN.
Este artículo es una lista de reglas para escribir ejemplos concisos que sean comprensibles para la mayor cantidad de personas posible.

## Pautas generales para ejemplos de código JavaScript

Esta sección explica las pautas generales a tener en cuenta al escribir ejemplos de código JavaScript.
Las secciones posteriores cubrirán detalles más específicos.

### Eligiendo un formato

Opiniones sobre la sangría correcta, espacio en blanco, y las longitudes de línea siempre han sido controvertidas.
Las discusiones sobre estos temas son una distracción para la creación y mantenimiento de contenido.

En documentos web de MDN, usamos [Prettier](https://prettier.io/) como formateador de código para mantener la consistencia del estilo del código (y para evitar discusiones fuera del tema).
Puedes consultar nuestro [Archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las normas vigentes, y leer la [Documentación Prettier](https://prettier.io/docs/en/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que usted debe seguir.

### Uso de características modernas de JavaScript

Usted puede usar nuevas funciones una vez que cada navegador principal — Chrome, Edge, Firefox, y Safari — las soporte.

### Espaciado y sangría

Marque la sangría con _2 espacios_. No use el carácter de tabulación. El carácter de fin de línea es `\n`, la convención de Unix.
Para ayudarle, hemos incluido un archivo [`.editorconfig`](https://editorconfig.org/) en el repositorio.
Muchos editores leen su contenido y lo utilizan para configurar su comportamiento.

## Matrices

### Creación de matrices

Para crear matrices, use literales y no constructores.

Crear matrices como esta:

```js example-good
const ciudadesVisitadas = [];
```

No hacer esto al crear matrices:

```js example-bad
const ciudadesVisitadas = new Array(length);
```

### Adición de elementos

Al agregar elementos a una matriz, use [`push()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push) y no asignación directa.
Considere la siguiente matriz:

```js
const mascotas = [];
```

Adicione elementos a la matriz de esta forma:

```js example-good
mascotas.push("gato");
```

No adicione elementos a la matriz de esta forma:

```js example-bad
mascotas[mascotas.length] = "gato";
```

## Métodos asíncronos

Escribir código asincrónico mejora el rendimiento y debe usarse cuando sea posible.
En particular, puede utilizar:

- [Promise](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/es/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/es/docs/Web/JavaScript/Reference/Operators/await)

Cuando ambas técnicas son posibles, preferimos usar la sintaxis más simple `async`/`await`.
Desafortunadamente, no se puede utilizar `await` en el nivel superior a menos que esté en un módulo ECMAScript.
Los módulos CommonJS utilizados por Node.js no son módulos ES.
Si su ejemplo está destinado a ser usado en todas partes, evite el nivel superior `await`.

## Comentarios

Los comentarios son fundamentales para escribir buenos ejemplos de código.
Aclaran la intención del código y ayudan a los desarrolladores a entenderlo.
Préstale especial atención.

- Si el propósito o la lógica del código no es obvio, añade un comentario con tu intención, como se muestra debajo:

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
    // Adicionar valor al total
    total += arr[i];
  }
  ```

- Los comentarios tampoco son necesarios cuando las funciones tienen nombres explícitos que describen lo que están haciendo. Escriba:

  ```js example-good
  closeConnection();
  ```

  No escriba:

  ```js example-bad
  closeConnection(); // Cierra la conexión
  ```

### Usar comentarios de una sola línea

Los comentarios de una sola línea se marcan con `//`, a diferencia de los comentarios en bloque encerrados entre `/* … */`.

En general, use comentarios de una sola línea para comentar el código.
Los desarrolladores deben marcar cada línea del comentario con `//`, para que sea más fácil notar visualmente el código comentado.
Además, esta convención permite comentar secciones de código utilizando `/* … */` mientras se depura.

- Deje un espacio entre las barras y el comentario.
  Comienza con una letra mayúscula, como una oración, pero no termines el comentario con un punto.

  ```js example-good
  // Este es un comentario de una sola línea bien escrito.
  ```

- Si un comentario no comienza inmediatamente después de un nuevo nivel de sangría, agregue una línea vacía y luego agregue el comentario.
  Creará un bloque de código, haciendo obvio a qué se refiere el comentario.
  Además, coloque sus comentarios en líneas separadas antes del código al que se refieren.
  Esto se muestra en el siguiente ejemplo:

  ```js example-good
  function verificar(precioMercancias, precioEnvio, impuestos) {
    // Calcula el precio total
    const total = precioMercancias + precioEnvio + impuestos;

    // Crea y agrega un nuevo párrafo al documento
    const parrafo = document.createElement("p");
    parrafo.textContent = `El precio total es ${total}`;
    document.body.appendChild(parrafo);
  }
  ```

### Salida de registros

- En el código destinado a ejecutarse en un entorno de producción, rara vez necesita comentar cuando registra algunos datos.
  En ejemplos de código, a menudo usamos `console.log()`, `console.error()`, o funciones similares para mostrar valores importantes.
  Para ayudar al lector a comprender lo que sucederá sin ejecutar el código, puede colocar un comentario _después_ de la función con el registro que se producirá. Escriba:

  ```js example-good
  function funcionEjemplo(canastaDeFrutas) {
    console.log(canastaDeFrutas); // ['banana', 'mango', 'naranja']
  }
  ```

  No escriba:

  ```js example-bad
  function funcionEjemplo(canastaDeFrutas) {
    // Registro: ['banana', 'mango', 'naranja']
    console.log(canastaDeFrutas);
  }
  ```

- En caso de que la línea se vuelva demasiado larga, coloque el comentario _después_ de la función, así:

  ```js example-good
  function funcionEjemplo(canastaDeFrutas) {
    console.log(canastaDeFrutas);
    // ['banana', 'mango', 'naranja', 'manzana', 'pera', 'durian', 'limón']
  }
  ```

### Comentarios de varias líneas

Los comentarios cortos suelen ser mejores, así que trate de mantenerlos en una línea de 60 a 80 caracteres.
Si esto no es posible, utilice `//` al principio de cada línea:

```js example-good
// Este es un ejemplo de un comentario de varias líneas.
// La función imaginaria que sigue, tiene algo inusual.
// Limitaciones que quiero llamar.
// Limitación 1
// Limitación 2
```

No use `/* … */`:

```js example-bad
/* Este es un ejemplo de un comentario de varias líneas.
  La función imaginaria que sigue, tiene algo inusual.
  Limitaciones que quiero llamar.
  Limitación 1
  Limitación 2 */
```

### Usar comentarios para marcar puntos suspensivos

Omitir código redundante usando puntos suspensivos (…) es necesario para mantener los ejemplos cortos.
Aun así, los escritores deben hacerlo cuidadosamente, ya que los desarrolladores con frecuencia copian y pegan ejemplos en su código, y todas nuestras muestras de código JavaScript deben ser válidas.

En JavaScript, debes poner los puntos suspensivos (`…`) en un comentario.
Cuando sea posible, indique qué acción se espera que agregue quien reutilice este fragmento.

Usar un comentario para los puntos suspensivos (…) es mas explícito, previene errores cuando un desarrollador copia y pega un código de muestra.
Escriba:

```js example-good
function funcionEjemplo() {
  // Agrega tu código aquí
  // …
}
```

No uses puntos suspensivos (…) así:

```js example-bad
function funcionEjemplo() {
  …
}
```

### Comentar parámetros

Al escribir código, generalmente omite parámetros que no necesitas.
Pero en algunos ejemplos de código, quieres demostrar que no utilizaste algunos posibles parámetros.

Para hacerlo, utilice `/* … */` en la lista de parámetros.
Esta es una excepción a la regla de usar solo comentarios de una sola línea. (`//`).

```js
array.forEach((valor /* , índice, matriz */) => {
  // …
});
```

## Funciones

### Nombres de funciones

Para nombres de funciones, use camelCase, comenzando con un carácter en minúscula.
Utilice nombres concisos, legibles por humanos y semánticos cuando sea apropiado.

El siguiente es un ejemplo correcto de un nombre de función:

```js example-good
function decirHola() {
  console.log("Hola!");
}
```

No use nombres de funciones como estos:

```js example-bad
function DecirHola() {
  console.log("Hola!");
}

function hazlo() {
  console.log("Hola!");
}
```

### Declaración de funciones

- Siempre que sea posible, use la declaración de función sobre expresiones de función para definir funciones.

  Esta es la forma recomendada de declarar una función:

  ```js example-good
  function suma(a, b) {
    return a + b;
  }
  ```

  Esta no es una buena forma de declarar una función:

  ```js example-bad
  let suma = function (a, b) {
    return a + b;
  };
  ```

- Al usar funciones anónimas como callback (una función pasada a otra invocación de método), si no necesitas acceder a `this`, use una función de flecha para hacer el código más corto y limpio.

  Esta es la forma recomendada:

  ```js example-good
  const numeros = [1, 2, 3, 4];
  const suma = numeros.reduce((a, b) => a + b);
  ```

  En lugar de esto:

  ```js example-bad
  const numeros = [1, 2, 3, 4];
  const suma = numeros.reduce(function (a, b) {
    return a + b;
  });
  ```

- Considere evitar usar la función de flecha para asignar una función a un identificador.
  En particular, no utilice funciones flecha para los métodos.
  Use declaración de funciones con la palabra clave `function`:

  ```js example-good
  function x() {
    // …
  }
  ```

  No lo hagas así:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Cuando utilice funciones flecha, utilice [retorno implícito](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cuerpo_de_función) (también conocido como _cuerpo conciso_) cuando sea posible:

  ```js example-good
  matriz.map((e) => e.id);
  ```

  Y no:

  ```js example-bad
  matriz.map((e) => {
    return e.id;
  });
  ```

## Bucles y sentencias condicionales

### Inicialización de bucle

Cuando los [bucles](/es/docs/Learn/JavaScript/Building_blocks/Looping_code) son requeridos, elegir el apropiado entre [`for(;;)`](/es/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/es/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/es/docs/Web/JavaScript/Reference/Statements/while), etc.

- Al iterar a través de todos los elementos de la colección, evite usar el clásico bucle `for (;;)`; es preferible `for...of` o `forEach()`.
  Tenga en cuenta que si está utilizando una colección que no es un `Array`, tienes que comprobar que `for...of` es realmente compatible (requiere que la variable sea iterable), o que el método `forEach()` está realmente presente.

  Use `for...of`:

  ```js example-good
  const perros = ["Rex", "Lassie"];
  for (const perro of perros) {
    console.log(perro);
  }
  ```

  O `forEach()`:

  ```js example-good
  const perros = ["Rex", "Lassie"];
  perros.forEach((perro) => {
    console.log(perro);
  });
  ```

  No use `for (;;)` — no solo tienes que agregar un índice extra, `i`, sino que también tienes que rastrear la longitud de la matriz.
  Esto puede ser propenso a errores para principiantes.

  ```js example-bad
  const perros = ["Rex", "Lassie"];
  for (let i = 0; i < perros.length; i++) {
    console.log(perros[i]);
  }
  ```

- Asegúrese de definir correctamente el inicializador utilizando la palabra clave `const` para `for...of` o `let` para los otros bucles.
  No lo omitas.
  Estos son ejemplos correctos:

  ```js example-good
  const gatos = ["Athena", "Luna"];
  for (const gato of gatos) {
    console.log(gato);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  El siguiente ejemplo no sigue las pautas recomendadas para la inicialización (implícitamente crea una variable global y fallará en modo estricto):

  ```js example-bad
  const gatos = ["Athena", "Luna"];
  for (i of gatos) {
    console.log(i);
  }
  ```

- Cuando necesite acceder tanto al valor como al índice, puede usar `.forEach()` en lugar de `for (;;)`. Escriba:

  ```js example-good
  const gerbils = ["Zoé", "Chloé"];
  gerbils.forEach((gerbil, i) => {
    console.log(`Gerbil #${i}: ${gerbil}`);
  });
  ```

  No escriba:

  ```js example-bad
  const gerbils = ["Zoé", "Chloé"];
  for (let i = 0; i < gerbils.length; i++) {
    console.log(`Gerbil #${i}: ${gerbils[i]}`);
  }
  ```

> **Advertencia:** Nunca utilice `for...in` en matrices y cadenas.

> **Nota:** Considere no usar un bucle `for` en absoluto. Si estás utilizando un [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) (o un [`String`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) para algunas operaciones), considere usar más métodos de iteración semántica en su lugar, como [`map()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), y muchos más.

### Sentencias de control

Hay un caso notable a tener en cuenta para las sentencias de control `if...else`.
Si la declaración `if` termina con `return`, no agregue una declaración `else`.

Continúe justo después de la instrucción `if`. Escriba:

```js example-good
if (prueba) {
  // Realizar algo si la prueba es verdadera
  // …
  return;
}

// Realizar algo si la prueba es falsa
// …
```

No escriba:

```js example-bad
if (prueba) {
  // Realizar algo si la prueba es verdadera
  // …
  return;
} else {
  // Realizar algo si la prueba es falsa
  // …
}
```

### Use llaves con sentencias de flujo de control y bucles

Si bien las declaraciones de flujo de control como `if`, `for` y `while` no requieren el uso de llaves cuando el contenido se compone de una sola declaración, siempre debe usar llaves.
Escriba:

```js example-good
for (const carro of carrosAlmacenados) {
  carro.pintar("rojo");
}
```

No escriba:

```js example-bad
for (const carro of carrosAlmacenados) carro.pintar("rojo");
```

Esto evita olvidarse de agregar las llaves al agregar más declaraciones.

### Sentencias switch

Las sentencias `switch` pueden ser un poco complicadas.

- No agregue una declaración `break` después de una declaración `return` en un caso específico.
  En su lugar, escriba instrucciones `return` como esta:

  ```js example-good
  switch (especies) {
    case "pollo":
      return farm.shed;
    case "caballo":
      return corral.entry;
    default:
      return "";
  }
  ```

  Si agrega una declaración `break`, será inalcanzable. No escriba:

  ```js example-bad
  switch (especies) {
    case "pollo":
      return farm.shed;
      break;
    case "caballo":
      return corral.entry;
      break;
    default:
      return "";
  }
  ```

- Use `default` como el último caso, y no lo termine con una declaración `break`.
  Si necesita hacerlo de otra manera, agregue un comentario explicando por qué.

- Recuerde que cuando declara una variable local para un caso, necesita usar llaves para definir un alcance:

  ```js
  switch (frutas) {
    case "Naranja": {
      const pedazo = frutas.cortar();
      comer(pedazo);
      break;
    }
    case "Manzana": {
      const corazon = frutas.extraerCorazon();
      reciclar(corazon);
      break;
    }
  }
  ```

### Manejo de errores

- Si ciertos estados de su programa arrojan errores no detectados, detendrán la ejecución y reducirán potencialmente la utilidad del ejemplo.
  Por lo tanto, debe detectar errores utilizando un bloque [`try...catch`](/es/docs/Web/JavaScript/Reference/Statements/try...catch), Como se muestra debajo:

  ```js example-good
  try {
    console.log(obtenerResultado());
  } catch (e) {
    console.error(e);
  }
  ```

- Cuando no necesite el parámetro de la sentencia `catch`, omítalo:

  ```js example-good
  try {
    console.log(obtenerResultado());
  } catch {
    console.error("Ocurrió un error!");
  }
  ```

> **Nota:** Tenga en cuenta que solo los errores _recuperables_ deben detectarse y manejarse.
> Todos los errores no recuperables deben dejarse pasar y aumentar la pila de llamadas.

## Objetos

### Nombre de objetos

- Al definir una clase, use _PascalCase_ (comenzando con una letra mayúscula) para el nombre de la clase y _camelCase_ (comenzando con una letra minúscula) para la propiedad del objeto y los nombres de los métodos.

- Al definir una instancia de objeto, ya sea un literal o mediante un constructor, use _camelCase_, comenzando con un carácter en minúsculas, para el nombre de la instancia. Por ejemplo:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### Creación de objetos

Para crear objetos generales (es decir, cuando las clases no están involucradas), use literales y no constructores.

Por ejemplo, haz esto:

```js example-good
const objeto = {};
```

No crees un objeto general como este:

```js example-bad
const objeto = new Object();
```

### Clases de objetos

- Use la sintaxis de clase ES para objetos, no constructores de estilo antiguo.

  Por ejemplo, esta es la forma recomendada:

  ```js example-good
  class Persona {
    constructor(nombre, edad, pronombres) {
      this.nombre = nombre;
      this.edad = edad;
      this.pronombres = pronombres;
    }

    greeting() {
      console.log(`Hola! Yo soy ${this.nombre}`);
    }
  }
  ```

- Usar `extends` para la herencia:

  ```js example-good
  class Profesor extends Persona {
    // …
  }
  ```

### Métodos

Para definir métodos, utilice la sintaxis de definición de métodos:

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
- Cuando sea posible, use la abreviatura evitando la duplicación del identificador de la propiedad. Escriba:

  ```js example-good
  function crearObjeto(nombre, edad) {
    return { nombre, edad };
  }
  ```

  No escriba:

  ```js example-bad
  function crearObjeto(nombre, edad) {
    return { nombre: nombre, edad: edad };
  }
  ```

## Operadores

Esta sección enumera nuestras recomendaciones sobre qué operadores usar y cuándo.

### Operadores condicionales

Cuando desee almacenar en una variable un valor literal dependiendo de una condición, use un [operador condicional (ternario)](/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator) en lugar de una sentencia `if...else`.
Esta regla también se aplica cuando se devuelve un valor. Escriba:

```js example-good
const x = condicion ? 1 : 2;
```

No escriba:

```js example-bad
let x;
if (condicion) {
  x = 1;
} else {
  x = 2;
}
```

El operador condicional es útil al crear cadenas para registrar información.
En tales casos, el uso de una instrucción regular `if...else` conduce a largos bloques de código para una operación secundaria como el registro, ofuscando el punto central del ejemplo.

### Operador de igualdad estricta

Preferir los operadores de [igualdad estricta](/es/docs/Web/JavaScript/Reference/Operators/Strict_equality) `===` y de desigualdad `!==` sobre los operadores de igualdad flexible `==` y de desigualdad `!=`.

Use los operadores estrictos de igualdad y desigualdad de esta forma:

```js example-good
nombre === "Shilpa";
edad !== 25;
```

No use los operadores sueltos de igualdad y desigualdad, como se muestra a continuación:

```js example-bad
nombre == "Shilpa";
edad != 25;
```

Si necesita usar `==` o `!=`, recuerde que `== null` es el único caso aceptable.
Como TypeScript fallará en todos los demás casos, no queremos tenerlos en nuestro código de ejemplo.
Considere agregar un comentario para explicar por qué lo necesita.

### Atajos para pruebas booleanas

Prefiera atajos para las pruebas booleanas. Por ejemplo, use `if (x)` y `if (!x)`, no use `if (x === true)` y `if (x === false)`, a menos que diferentes tipos de valores verdaderos o falsos se manejen de forma diferente.

## Cadenas

Las cadenas literales se pueden encerrar entre comillas simples, como en `'Una cadena'`, o entre comillas dobles, como en `"Una cadena"`.
No se preocupe por cuál usar, Prettier lo mantiene consistente.

### Template literals

Para insertar valores en cadenas, use [Plantillas literales](/es/docs/Web/JavaScript/Reference/Template_literals).

- Aquí hay un ejemplo de la forma recomendada de usar plantillas literales.
  Su uso evita muchos errores de espaciado.

  ```js example-good
  const nombre = "Shilpa";
  console.log(`¡Hola! Soy ${nombre}!`);
  ```

  No concatenes cadenas así:

  ```js example-bad
  const nombre = "Shilpa";
  console.log("¡Hola! Soy" + nombre + "!"); // ¡Hola! SoyShilpa!
  ```

- No abuses de las plantillas literales.
  Si no hay sustituciones, use una cadena literal normal en su lugar.

## Variables

### Nombre de Variables

Los buenos nombres de variables son esenciales para comprender el código.

- Use identificadores cortos y evite abreviaturas no comunes.
  Los buenos nombres de variables suelen tener entre 3 y 10 caracteres, pero solo como sugerencia.
  Por ejemplo, 'acelerómetro' es más descriptivo que abreviar como 'aclmtr' por el bien de la longitud de los caracteres.
- Trate de usar ejemplos relevantes del mundo real donde cada variable tenga una semántica clara.
  Solo recurra a nombres de marcadores de posición como `foo` y `bar` cuando el ejemplo sea simple y artificial.
- No utilice la convención de nomenclatura [Notación húngara](https://es.wikipedia.org/wiki/Notaci%C3%B3n_h%C3%BAngara).
  No prefije el nombre de la variable con su tipo.
  Por ejemplo, escriba `bought = car.buyer !== null` en lugar de `bBought = oCar.sBuyer != null` o `name = "John Doe"` en lugar de `sName = "John Doe"`.
- Para colecciones, evite agregar el tipo como lista, matriz, cola en el nombre.
  Use el nombre del contenido en plural.
  Por ejemplo, para una matriz de autos, utilice `cars` y no `carArray` o `carList`.
  Puede haber excepciones, como cuando desea mostrar la forma abstracta de una función sin el contexto de una aplicación en particular.
- Para valores primitivos, use _camelCase_, comenzando con un carácter en minúscula.
  No use `_`.
  Utilice nombres concisos, legibles por humanos y semánticos cuando sea apropiado.
  Por ejemplo, use `currencyName` en lugar de `currency_name`.
- Evite el uso de artículos y posesivos.
  Por ejemplo, utilice `car` en lugar de `myCar` o `aCar`.
  Puede haber excepciones, como cuando se describe una característica en general sin un contexto práctico.
- Use nombres de variables como se muestra aquí:

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  No nombre variables de esta forma:

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> **Nota:** El único lugar donde está permitido no usar nombres semánticos legibles por humanos es donde existe una convención comúnmente reconocida, como usar `i` y `j` para iteradores de bucle.

### Declaración de Variables

Al declarar variables y constantes, use las palabras clave [`let`](/es/docs/Web/JavaScript/Reference/Statements/let) y [`const`](/es/docs/Web/JavaScript/Reference/Statements/const), no [`var`](/es/docs/Web/JavaScript/Reference/Statements/var).
Los siguientes ejemplos muestran lo que se recomienda y lo que no en los documentos web de MDN:

- Si una variable no se reasignará, prefiera `const`, así:

  ```js example-good
  const nombre = "Shilpa";
  console.log(nombre);
  ```

- Si va a cambiar el valor de una variable, use `let` como se muestra a continuación:

  ```js example-good
  let edad = 40;
  edad++;
  console.log("¡Feliz cumpleaños!");
  ```

- El siguiente ejemplo usa `let` donde debería ser `const`.
  El código funcionará, pero queremos evitar este uso en los ejemplos de código de los documentos web de MDN.

  ```js example-bad
  let nombre = "Shilpa";
  console.log(nombre);
  ```

- El siguiente ejemplo usa `const` para una variable que se reasigna.
  La reasignación arrojará un error.

  ```js example-bad
  const edad = 40;
  edad++;
  console.log("¡Feliz cumpleaños!");
  ```

- El siguiente ejemplo usa `var`, contaminando el alcance global:

  ```js example-bad
  var edad = 40;
  var nombre = "Shilpa";
  ```

- Declare una variable por línea, así:

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

  No declare múltiples variables en una línea, separándolas con comas o usando declaraciones en cadena.
  Evite declarar variables así:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 se crea implícitamente como una variable global; falla en modo estricto
  ```

### Coerción de tipos

Evite las coacciones de tipo implícito. En particular, evite `+val` para forzar un valor a un número y `"" + val` para forzarlo a una cadena.
Utilice `Number()` y `String()`, sin `new`, en su lugar. Escriba:

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

No escriba:

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

Además de estas características del lenguaje JavaScript, recomendamos tener en cuenta algunas pautas relacionadas con las API web.

### Evite los prefijos del navegador

Si todos los principales navegadores (Chrome, Edge, Firefox y Safari) soportan una función, no agregue el prefijo de la función. Escriba:

```js example-good
const context = new AudioContext();
```

Evite la complejidad añadida de los prefijos. No escriba:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

La misma regla se aplica a los prefijos CSS.

### Evite las API en desuso

Cuando un método, una propiedad o una interfaz completa está en desuso, no lo use (fuera de su documentación).
En su lugar, utilice la API moderna.

Aquí hay una lista no exhaustiva de API web para evitar y con qué reemplazarlas:

- Use `fetch()` en lugar de XHR (`XMLHttpRequest`).
- Use `AudioWorklet` en lugar de `ScriptProcessorNode`, en la API de Audio Web.

### Use API seguras y confiables

- No utilice {{DOMxRef("Element.innerHTML")}} para insertar contenido puramente textual en un elemento; use {{DOMxRef("Node.textContent")}} en su lugar.
  La propiedad `innerHTML` genera problemas de seguridad si un desarrollador no controla el parámetro.
  Cuanto más evitamos usarlo como escritores, menos fallas de seguridad se crean cuando un desarrollador copia y pega nuestro código.

  El siguiente ejemplo demuestra el uso de `textContent`.

  ```js example-good
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  No use `innerHTML` para insertar _texto puro_ en los nodos DOM.

  ```js example-bad
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- La función `alert()` no es fiable.
  No funciona en ejemplos en vivo en MDN Web Docs que están dentro de un {{HTMLElement("iframe")}}.
  Además, es modal para toda la ventana, lo cual es molesto.
  En ejemplos de código estático, use `console.log()` o `console.error()`.
  En [ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples), evite `console.log()` y `console.error()` porque no se muestran.
  Utilice un elemento de interfaz de usuario dedicado.

### Utilice el método de registro adecuado

- Al registrar un mensaje, utilice `console.log()`.
- Cuando registre un error, use `console.error()`.

## Vea también

[Referencia del lenguaje JavaScript](/es/docs/Web/JavaScript/Reference) - navegue a través de nuestras páginas de referencia de JavaScript para ver algunos fragmentos de JavaScript buenos, concisos y significativos.

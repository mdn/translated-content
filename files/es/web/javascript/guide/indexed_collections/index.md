---
title: Colecciones indexadas
slug: Web/JavaScript/Guide/Indexed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

Este capítulo presenta colecciones de datos ordenados por un valor de índice. Esto incluye arreglos y construcciones similares a arreglos tal como objetos {{jsxref("Array")}} y objetos {{jsxref("TypedArray")}}.

## El objeto `Array`

Un **array** es una lista ordenada de valores a los que te refieres con un nombre y un índice.

Por ejemplo, considera un arreglo llamado `emp`, que contiene los nombres de los empleados indexados por su id de empleado numérico. De tal modo que `emp[0]` sería el empleado número cero, `emp[1]` el empleado número uno, y así sucesivamente.

JavaScript no tiene un tipo de dato `array` explícito. Sin embargo, puedes utilizar el objeto `Array` predefinido y sus métodos para trabajar con arreglos en tus aplicaciones. El objeto `Array` tiene métodos para manipular arreglos de varias formas, tal como unirlos, invertirlos y ordenarlos. Tiene una propiedad para determinar la longitud del arreglo y otras propiedades para usar con expresiones regulares.

### Crear un arreglo

Las siguientes declaraciones crean arreglos equivalentes:

```js
let arr = new Array(element0, element1, ..., elementN)
let arr = Array(element0, element1, ..., elementN)
let arr = [element0, element1, ..., elementN]
```

`element0, element1, ..., elementN` es una lista de valores para los elementos del arreglo. Cuando se especifican estos valores, el arreglo se inicia con ellos como elementos del arreglo. La propiedad `length` del arreglo se establece en el número de argumentos.

La sintaxis de corchetes se denomina "arreglo literal" o "iniciador de arreglo". Es más corto que otras formas de creación de arreglos, por lo que generalmente se prefiere. Consulta [Arreglos literales](/es/docs/Web/JavaScript/Guide/Grammar_and_types#Arreglos_literales) para obtener más detalles.

Para crear un arreglo con una longitud distinta de cero, pero sin ningún elemento, se puede utilizar cualquiera de las siguientes:

```js
// Esta...
let arr = new Array(arrayLength);

// ...da como resultado el mismo arreglo que este
let arr = Array(arrayLength);

// Esto tiene exactamente el mismo efecto
let arr = [];
arr.length = arrayLength;
```

> **Nota:** En el código anterior, `arrayLength` debe ser un `Número`. De lo contrario, se creará un arreglo con un solo elemento (el valor proporcionado). Llamar a `arr.length` devolverá `arrayLength`, pero el arreglo no contiene ningún elemento. Un bucle {{jsxref("Statements/for...in", "for...in")}} no encontrarás ninguna propiedad en el arreglo.

Además de una variable recién definida como se muestra arriba, los arreglos también se pueden asignar como una propiedad a un objeto nuevo o existente:

```js
let obj = {}
// ...
obj.prop = [element0, element1, ..., elementN]

// O
let obj = {prop: [element0, element1, ...., elementN]}
```

Si deseas iniciar un arreglo con un solo elemento, y el elemento resulta ser un `Número`, debes usar la sintaxis de corchetes. Cuando se pasa un solo valor `Number` al constructor o función `Array()`, se interpreta como un `arrayLength`, no como un solo elemento.

```js
let arr = [42]; // Crea un arreglo con un solo elemento:
// el número 42.

let arr = Array(42); // Crea un arreglo sin elementos
// y arr.length establecidos en 42.
//
// Esto es equivalente a:
let arr = [];
arr.length = 42;
```

Llamar a `Array(N)` da como resultado un `RangeError`, si `N` no es un número entero cuya porción fraccionaria no es cero. El siguiente ejemplo ilustra este comportamiento.

```js
let arr = Array(9.3); // RangeError: Longitud de arreglo no válida
```

Si tu código necesita crear arreglos con elementos únicos de un tipo de dato arbitrario, es más seguro utilizar arreglos literales. Alternativamente, crea un arreglo vacío primero antes de agregarle el único elemento.

En ES2015, puedes utilizar el método estático {{jsxref("Array.of")}} para crear arreglos con un solo elemento.

```js
let wisenArray = Array.of(9.3); // wisenArray contiene solo un elemento 9.3
```

### Refiriéndose a elementos del arreglo

Dado que los elementos también son propiedades, puedes acceder a ellos usando la [propiedad `accessors`](/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors). Supongamos que defines el siguiente arreglo:

```js
let myArray = ["Wind", "Rain", "Fire"];
```

Puedes referirte al primer elemento del arreglo como `myArray[0]`, al segundo elemento del arreglo como `myArray[1]`, etc… El índice de los elementos comienza en cero.

> **Nota:** También puedes utilizar la [propiedad `accessors`](/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors) para acceder a otras propiedades del arreglo, como con un objeto.
>
> ```js
> let arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

### Llenar un arreglo

Puedes llenar un arreglo asignando valores a sus elementos. Por ejemplo:

```js
let emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> **Nota:** Si proporcionas un valor no entero al operador `array` en el código anterior, se creará una propiedad en el objeto que representa al arreglo, en lugar de un elemento del arreglo.
>
> ```js
> let arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(arr.hasOwnProperty(3.4)); // true
> ```

También puedes rellenar un arreglo cuando lo creas:

```js
let myArray = new Array("Hello", myVar, 3.14159);
// OR
let myArray = ["Mango", "Apple", "Orange"];
```

### Entendiendo `length`

A nivel de implementación, los arreglos de JavaScript almacenan sus elementos como propiedades de objeto estándar, utilizando el índice del arreglo como nombre de propiedad.

La propiedad `length` es especial. Siempre devuelve el índice del último elemento más uno. (En el siguiente ejemplo, `'Dusty'` está indexado en `30`, por lo que `cats.length` devuelve `30 + 1`).

Recuerda, los índices del Array JavaScript están basados en 0: comienzan en `0`, no en `1`. Esto significa que la propiedad `length` será uno más que el índice más alto almacenado en el arreglo:

```js
let cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

También puedes asignar la propiedad `length`.

Escribir un valor que sea más corto que el número de elementos almacenados trunca el arreglo. Escribir `0` lo vacía por completo:

```js
let cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy se ha eliminado

cats.length = 0;
console.log(cats); // logs []; el arreglo cats está vacío

cats.length = 3;
console.log(cats); // logs [ <3 elementos vacíos> ]
```

### Iterando sobre arreglos

Una operación común es iterar sobre los valores de un arreglo, procesando cada uno de alguna manera. La forma más sencilla de hacerlo es la siguiente:

```js
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Si sabes que ninguno de los elementos de tu arreglo se evalúa como `false` en un contexto booleano, si tu arreglo consta solo de nodos [DOM](/es/docs/DOM), por ejemplo, puedes usar un lenguaje eficiente:

```js
let divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Procesar div de alguna manera */
}
```

Esto evita la sobrecarga de verificar la longitud del arreglo y garantiza que la variable `div` se reasigne al elemento actual cada vez que se realiza el bucle para mayor comodidad.

El método {{jsxref("Array.forEach", "forEach()")}} proporciona otra forma de iterar sobre un arreglo:

```js
let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  console.log(color);
});
// red
// green
// blue
```

Alternativamente, puedes acortar el código para el parámetro `forEach` con las funciones de flecha ES2015:

```js
let colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

La función pasada a `forEach` se ejecuta una vez por cada elemento del arreglo, con el elemento de arreglo pasado como argumento de la función. Los valores no asignados no se iteran en un bucle `forEach`.

Ten en cuenta que los elementos de un arreglo que se omiten cuando se define el arreglo no se enumeran cuando lo itera `forEach`, pero _se enumeran_ cuando `undefined` se ha asignado manualmente al elemento:

```js
let array = ["first", "second", , "fourth"];

array.forEach(function (element) {
  console.log(element);
});
// first
// second
// fourth

if (array[2] === undefined) {
  console.log("array[2] is undefined"); // true
}

array = ["first", "second", undefined, "fourth"];

array.forEach(function (element) {
  console.log(element);
});
// first
// second
// undefined
// fourth
```

Dado que los elementos de JavaScript se guardan como propiedades de objeto estándar, no es recomendable iterar a través de arreglos de JavaScript usando bucles {{jsxref("Statements/for...in", "for...in")}}, porque se enumerarán los elementos normales y todas las propiedades enumerables.

### Métodos de array

El objeto {{jsxref("Array")}} tiene los siguientes métodos:

{{jsxref("Array.concat", "concat()")}} une dos o más arreglos y devuelve un nuevo arreglo.

```js
let myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

{{jsxref("Array.join", "join(delimiter = ',')")}} une todos los elementos de un arreglo en una cadena.

```js
let myArray = new Array("Viento", "Lluvia", "Fuego");
let list = myArray.join("-"); // la lista es "Viento - Lluvia - Fuego"
```

{{jsxref("Array.push", "push()")}} agrega uno o más elementos al final de un arreglo y devuelve la `longitud` resultante del arreglo.

```js
let myArray = new Array("1", "2");
myArray.push("3"); // myArray ahora es ["1", "2", "3"]
```

{{jsxref("Array.pop", "pop()")}} elimina el último elemento de un arreglo y devuelve ese elemento.

```js
let myArray = new Array("1", "2", "3");
let last = myArray.pop();
// myArray ahora es ["1", "2"], last = "3"
```

{{jsxref("Array.shift", "shift()")}} elimina el primer elemento de un arreglo y devuelve ese elemento.

```js
let myArray = new Array("1", "2", "3");
let first = myArray.shift();
// myArray ahora es ["2", "3"], first es "1"
```

{{jsxref("Array.unshift", "unshift()")}} agrega uno o más elementos al frente de un arreglo y devuelve la nueva longitud del arreglo.

```js
let myArray = new Array("1", "2", "3");
myArray.unshift("4", "5");
// myArray se convierte en ["4", "5", "1", "2", "3"]
```

{{jsxref("Array.slice", "slice(start_index, upto_index)")}} extrae una sección de un arreglo y devuelve un nuevo arreglo.

```js
let myArray = new Array("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4); // comienza en el índice 1 y extrae todos los elementos
// hasta el índice 3, devuelve ["b", "c", "d"]
```

{{jsxref("Array.splice", "splice(index, count_to_remove, addElement1, addElement2, ...)")}} elimina elementos de un arreglo y (opcionalmente) los reemplaza. Devuelve los elementos que se eliminaron del arreglo.

```js
let myArray = new Array("1", "2", "3", "4", "5");
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray ahora es ["1", "a", "b", "c", "d", "5"]
// Este código comenzó en el índice uno (o donde estaba el "2"),
// eliminó 3 elementos allí, y luego insertó todos los consecutivos
// elementos en su lugar.
```

{{jsxref("Array.reverse", "reverse()")}} transpone los elementos de un arreglo, en su lugar: el primer elemento del arreglo se convierte en el último y el último en el primero. Devuelve una referencia al arreglo.

```js
let myArray = new Array("1", "2", "3");
myArray.reverse();
// transpone el arreglo para que myArray = ["3", "2", "1"]
```

{{jsxref("Array.sort", "sort()")}} ordena los elementos de un arreglo en su lugar y devuelve una referencia al arreglo.

```js
let myArray = new Array("Viento", "Lluvia", "Fuego");
myArray.sort();
// ordena el arreglo para que myArray = ["Fuego", "Lluvia", "Viento"]
```

`sort()` también puede tomar una función retrollamada para determinar cómo se comparan los elementos del arreglo.

El método `sort` (y otros a continuación) que reciben una retrollamada se conocen como _métodos iterativos_, porque iteran sobre todo el arreglo de alguna manera. Cada uno toma un segundo argumento opcional llamado `thisObject`. Si se proporciona, `thisObject` se convierte en el valor de la palabra clave `this` dentro del cuerpo de la función retrollamada. Si no se proporciona, como en otros casos en los que se invoca una función fuera de un contexto de objeto explícito, `this` se referirá al objeto global ([`window`](/es/docs/Web/API/Window)) cuando se usa la función de flecha como retrollamada, o `undefined` cuando se usa una función normal como retrollamada.

La función retrollamada se invoca con dos argumentos, que son elementos del arreglo.

La siguiente función compara dos valores y devuelve uno de tres valores:

Por ejemplo, lo siguiente se ordenará por la última letra de una cadena:

```js
let sortFn = function (a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
};
myArray.sort(sortFn);
// ordena el arreglo para que myArray = ["Viento", "Fuego", "Lluvia"]
```

- si `a` es menor que `b` por el sistema de clasificación, devuelve `-1` ( o cualquier número negativo)
- si `a` es mayor que `b` por el sistema de clasificación, devuelve `1` (o cualquier número positivo)
- si `a` y `b` se consideran equivalentes, devuelve `0`.

{{jsxref("Array.indexOf", "indexOf (searchElement[, fromIndex])")}} busca en el arreglo `searchElement` y devuelve el índice de la primera coincidencia.

```js
let a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // registros 1

// Ahora inténtalo de nuevo, comenzando después de la última coincidencia
console.log(a.indexOf("b", 2)); // registra 3
console.log(a.indexOf("z")); // logs -1, porque no se encontró 'z'
```

{{jsxref("Array.lastIndexOf", "lastIndexOf(searchElement [, fromIndex])")}} funciona como `indexOf`, pero comienza al final y busca hacia atrás.

```js
let a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // registra 5

// Ahora inténtalo de nuevo, comenzando desde antes de la última coincidencia
console.log(a.lastIndexOf("b", 4)); // registra 1
console.log(a.lastIndexOf("z")); // registra -1
```

{{jsxref("Array.forEach", "forEach(callback[, thisObject])")}} ejecuta `callback` en cada elemento del arreglo y devuelve `undefined`.

```js
let a = ["a", "b", "c"];
a.forEach(function (elemento) {
  console.log(elemento);
});
// registra cada elemento por turno
```

{{jsxref("Array.map", "map(callback [, thisObject])")}} devuelve un nuevo arreglo del valor de retorno de ejecutar `callback` en cada elemento del arreglo.

```js
let a1 = ["a", "b", "c"];
let a2 = a1.map(function (item) {
  return item.toUpperCase();
});
console.log(a2); // registra ['A', 'B', 'C']
```

{{jsxref("Array.filter", "filter(callback [, thisObject])")}} devuelve un nuevo arreglo que contiene los elementos para los cuales `callback` devolvió `true`.

```js
let a1 = ["a", 10, "b", 20, "c", 30];
let a2 = a1.filter(function (item) {
  return typeof item === "number";
});
console.log(a2); // registra [10, 20, 30]
```

{{jsxref("Array.every", "every(callback [, thisObject])")}} devuelve `true` si `callback` devuelve `true` para cada elemento del arreglo.

```js
function isNumber(value) {
  return typeof value === "number";
}
let a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // registra true
let a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // registra false
```

{{jsxref("Array.some", "some(callback[, thisObject])")}} devuelve `true` si `callback` devuelve `true` para al menos un elemento del arreglo.

```js
function isNumber(value) {
  return typeof value === "number";
}
let a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // registra true
let a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // registra true
let a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // registra false
```

{{jsxref("Array.reduce", "reduce(callback[, initialValue])")}} aplica `callback(acumulador, currentValue[, currentIndex[,array]])` para cada valor en el arreglo con el fin de reducir la lista de elementos a un solo valor. La función `reduce` devuelve el valor final devuelto por la función `callback`.

Si se especifica `initialValue`, entonces `callback` se llama con `initialValue` como primer valor de parámetro y el valor del primer elemento del arreglo como segundo valor de parámetro.

Si `initialValue` _no_ es especificado, entonces `callback` los primeros dos valores de parámetro deberán ser el primer y segundo elemento del arreglo. En _cada_ llamada subsiguiente, el valor del primer parámetro será el valor de `callback` devuelto en la llamada anterior, y el valor del segundo parámetro será el siguiente valor en el arreglo.

Si `callback` necesita acceso al índice del elemento que se está procesando, al acceder al arreglo completo, están disponibles como parámetros opcionales.

```js
let a = [10, 20, 30];
let total = a.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(total); // Imprime 60
```

{{jsxref("Array.reduceRight", "reduceRight(callback[, initialValue])")}} funciona como `reduce()`, pero comienza con el último elemento.

`reduce` y `reduceRight` son los menos obvios de los métodos de arreglo iterativos. Se deben utilizar para algoritmos que combinan dos valores de forma recursiva para reducir una secuencia a un solo valor.

### Arreglos multidimensionales

Los arreglos se pueden anidar, lo cual significa que un arreglo puede contener otro arreglo como elemento. Usando esta característica de los arreglos de JavaScript, se pueden crear arreglos multidimensionales.

El siguiente código crea un arreglo bidimensional.

```js
let a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = "[" + i + ", " + j + "]";
  }
}
```

Este ejemplo crea un arreglo con las siguientes filas:

```
Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

### Usar arreglos para almacenar otras propiedades

Los arreglos también se pueden utilizar como objetos para almacenar información relacionada.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // Registra "value"
```

### Arreglos y expresiones regulares

Cuando un arreglo es el resultado de una coincidencia entre una expresión regular y una cadena, el arreglo devuelve propiedades y elementos que proporcionan información sobre la coincidencia. Un arreglo es el valor de retorno de {{jsxref("Global_Objects/RegExp/exec", "RegExp.exec()")}}, {{jsxref("Global_Objects/String/match", "String.match()")}} y {{jsxref("Global_Objects/String/split", "String.split()")}}. Para obtener información sobre el uso de arreglos con expresiones regulares, consulta [Expresiones regulares](/es/docs/Web/JavaScript/Guide/Regular_Expressions).

### Trabajar con objetos tipo array

Algunos objetos JavaScript, como [`NodeList`](/es/docs/Web/API/NodeList) devueltos por [`document.getElementsByTagName()`](/es/docs/Web/API/Document/getElementsByTagName) o un objeto {{jsxref("Functions/arguments", "arguments")}} disponible dentro del cuerpo de una función, se ven y se comportan como arreglos en la superficie pero no comparten todos sus métodos. El objeto `arguments` proporciona un atributo {{jsxref("Global_Objects/Function/length", "length")}} pero no implementa el método {{jsxref("Array.forEach", "forEach()")}}, por ejemplo.

Los métodos de arreglo no se pueden llamar directamente en objetos similares a un arreglo.

```js example-bad
function printArguments() {
  arguments.forEach(function (item) {
    // TypeError: arguments.forEach no es una función
    console.log(item);
  });
}
```

Pero puedes llamarlos indirectamente usando {{jsxref("Global_Objects/Function/call", "Function.prototype.call()")}}.

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, function (item) {
    console.log(item);
  });
}
```

Los métodos de prototipos de arreglos también se pueden utilizar en cadenas, ya que proporcionan acceso secuencial a sus caracteres de forma similar a los arreglos:

```js
Array.prototype.forEach.call("a string", function (chr) {
  console.log(chr);
});
```

## Arrays tipados

[Los arreglos tipados en JavaScript](/es/docs/Web/JavaScript/Typed_arrays) son objetos similares a arreglos y proporcionan un mecanismo para acceder a datos binarios sin procesar. Como ya sabes, los objetos {{jsxref("Array")}} crecen y se encogen dinámicamente y pueden tener cualquier valor de JavaScript. Los motores de JavaScript realizan optimizaciones para que estos arreglos sean rápidos. Sin embargo, a medida que las aplicaciones web se vuelven cada vez más poderosas, agregando características como manipulación de audio y video, acceso a datos sin procesar usando [WebSockets](/es/docs/WebSockets), y así sucesivamente, ha quedado claro que hay momentos en los que sería útil para que el código JavaScript pueda manipular rápida y fácilmente datos binarios sin procesar en arreglos tipados.

### Búferes y vistas: arquitectura de los arreglos con tipo

Para lograr la máxima flexibilidad y eficiencia, los arreglos de JavaScript dividen la implementación en **búferes** y **vistas**. Un búfer (implementado por el objeto {{jsxref("ArrayBuffer")}} es un objeto que representa una porción de datos; no tiene un formato del que hablar y no ofrece ningún mecanismo para acceder a su contenido. Para acceder a la memoria contenida en un búfer, necesitas usar una vista. Una vista proporciona un **contexto** , es decir, un tipo de datos, un desplazamiento inicial y un número de elementos, que convierte los datos en un arreglo con tipo real.

![Arreglos tipados en un <code>ArrayBuffer</code>](typed_arrays.png)

### `ArrayBuffer`

{{jsxref("ArrayBuffer")}} es un tipo de dato que se utiliza para representar un búfer de datos binarios genérico de longitud fija. No puedes manipular directamente el contenido de un `ArrayBuffer`; en su lugar, creas una vista de arreglo con tipo o un {{jsxref("DataView")}} que representa el búfer en un formato específico, y lo usa para leer y escribir el contenido del búfer.

### Vistas de arreglos tipados

Las vistas de arreglos tipados tienen nombres autodescriptivos y proporcionan vistas para todos los tipos numéricos habituales como `Int8`, `Uint32`, `Float64` y así sucesivamente. Hay una vista de arreglo con tipo especial, {jsxref("Uint8ClampedArray")}}, que fija los valores entre `0` y `255`. Esto es útil para [procesamiento de datos de Canvas](/es/docs/Web/API/ImageData), por ejemplo.

| Tipo                            | Rango de valores               | Tamaño en bytes | Descripción                                                                                      | Tipo de IDL web            | Tipo C equivalente               |
| ------------------------------- | ------------------------------ | --------------- | ------------------------------------------------------------------------------------------------ | -------------------------- | -------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` a `127`                 | 1               | Dos enteros complementarios de 8 bits con signo                                                  | `byte`                     | `int8_t`                         |
| {{jsxref("Uint8Array")}}        | `0` a `255`                    | 1               | Entero de 8-bit sin signo                                                                        | `octeto`                   | `uint8_t`                        |
| {{jsxref("Uint8ClampedArray")}} | `0` a `255`                    | 1               | Entero de 8 bits sin signo (sujeto)                                                              | `octeto`                   | `uint8_t`                        |
| {{jsxref("Int16Array")}}        | `-32768` a `32767`             | 2               | Dos enteros complementarios de 16 bits con signo                                                 | `short`                    | `int16_t`                        |
| {{jsxref("Uint16Array")}}       | `0` a `65535`                  | 2               | Entero de 16 bits sin signo                                                                      | `short sin signo`          | `uint16_t`                       |
| {{jsxref("Int32Array")}}        | `-2147483648` a `2147483647`   | 4               | dos enteros complementarios de 32 bits con signo                                                 | `long`                     | `int32_t`                        |
| {{jsxref("Uint32Array")}}       | `0` a `4294967295`             | 4               | Enteros de 32 bits sin signo                                                                     | `long sin signo`           | `uint32_t`                       |
| {{jsxref("Float32Array")}}      | `1.2`×`10-38` a `3.4`×`1038`   | 4               | Número de coma flotante IEEE de 32 bits (7 dígitos significativos, p. ej., `1.1234567`)          | `float sin restricciones`  | `float`                          |
| {{jsxref("Float64Array")}}      | `5.0`×`10-324` a `1.8`×`10308` | 8               | Número de coma flotante IEEE de 64 bits (16 dígitos significativos, por ejemplo, `1.123 ... 15`) | `double sin restricciones` | `double`                         |
| {{jsxref("BigInt64Array")}}     | `-263` a `263-1`               | 8               | Dos enteros complementarios de 64 bits con signo                                                 | `bigint`                   | `int64_t (long long con signo)`  |
| {{jsxref("BigUint64Array")}}    | `0` a `264-1`                  | 8               | Entero de 64 bits sin signo                                                                      | `bigint`                   | `uint64_t (long long sin signo)` |

Para obtener más información, consulta [Arreglos tipados en JavaScript](/es/docs/Web/JavaScript/Typed_arrays) y la documentación de referencia para los diferentes objetos {{jsxref("TypedArray")}}.

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

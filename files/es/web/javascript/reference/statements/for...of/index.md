---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

La sentencia **`for...of`** ejecuta un bucle que opera sobre una secuencia de valores provenientes de un [objeto iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Los objetos iterables incluyen instancias de objetos nativos como {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{domxref("NodeList")}} (y otras colecciones del DOM), así como el objeto {{jsxref("Functions/arguments", "arguments")}}, [generadores](/es/docs/Web/JavaScript/Reference/Global_Objects/Generator) producidos por [funciones generadoras](/es/docs/Web/JavaScript/Reference/Statements/function*), e iterables definidos por el usuario.

{{InteractiveExample("JavaScript Demo: Statement - For...Of")}}

```js interactive-example
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## Sintaxis

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : Recibe un valor de la secuencia en cada iteración. Puede ser una declaración con [`const`](/es/docs/Web/JavaScript/Reference/Statements/const), [`let`](/es/docs/Web/JavaScript/Reference/Statements/let), o [`var`](/es/docs/Web/JavaScript/Reference/Statements/var), o un objetivo de [asignación](/es/docs/Web/JavaScript/Reference/Operators/Assignment) (p. ej., una variable previamente declarada, una propiedad de objeto o un [patrón de asignación por desestructuración](/es/docs/Web/JavaScript/Reference/Operators/Destructuring)). Las variables declaradas con `var` no son locales al bucle, es decir, están en el mismo ámbito en el que se encuentra el bucle `for...of`.
- `iterable`
  - : Un objeto iterable. La fuente de la secuencia de valores sobre la que opera el bucle.
- `statement`
  - : Una sentencia que se ejecutará en cada iteración. Puede hacer referencia a `variable`. Puedes usar una [sentencia de bloque](/es/docs/Web/JavaScript/Reference/Statements/block) para ejecutar múltiples sentencias.

## Descripción

Un bucle `for...of` opera sobre los valores provenientes de un iterable, uno por uno y en orden secuencial. Cada operación del bucle sobre un valor se denomina _iteración_, y se dice que el bucle _itera sobre el iterable_. Cada iteración ejecuta sentencias que pueden referirse al valor actual de la secuencia.

Cuando un bucle `for...of` itera sobre un iterable, primero llama al método [`[Symbol.iterator]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) del iterable, que devuelve un [iterador](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol), y luego llama repetidamente al método [`next()`](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) del iterador resultante para producir la secuencia de valores que se asignarán a `variable`.

Un bucle `for...of` finaliza cuando el iterador se ha completado (el resultado de `next()` es un objeto con `done: true`). Al igual que otras sentencias de bucle, puedes usar [sentencias de control de flujo](/es/docs/Web/JavaScript/Reference/Statements#control_flow) dentro de `statement`:

- {{jsxref("Statements/break", "break")}} detiene la ejecución de `statement` y va a la primera sentencia después del bucle.
- {{jsxref("Statements/continue", "continue")}} detiene la ejecución de `statement` y va a la siguiente iteración del bucle.

Si el bucle `for...of` termina prematuramente (p. ej., se encuentra una sentencia `break` o se produce un error), se llama al método [`return()`](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) del iterador para realizar cualquier limpieza.

La parte `variable` de `for...of` acepta cualquier cosa que pueda preceder al operador `=`. Puedes usar {{jsxref("Statements/const", "const")}} para declarar la variable siempre y cuando no se reasigne dentro del cuerpo del bucle (puede cambiar entre iteraciones, porque son dos variables separadas). De lo contrario, puedes usar {{jsxref("Statements/let", "let")}}.

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

> [!NOTE]
> Cada iteración crea una nueva variable. Reasignar la variable dentro del cuerpo del bucle no afecta al valor original en el iterable (un arreglo, en este caso).

Puedes usar [desestructuración](/es/docs/Web/JavaScript/Reference/Operators/Destructuring) para asignar múltiples variables locales, o usar un acceso a propiedades como `for (x.y of iterable)` para asignar el valor a una propiedad de objeto.

Sin embargo, una regla especial prohíbe usar `async` como el nombre de la variable. Esta es una sintaxis inválida:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Esto es para evitar la ambigüedad sintáctica con el código válido `for (async of => {};;)`, que es un bucle [`for`](/es/docs/Web/JavaScript/Reference/Statements/for).

## Ejemplos

### Iterando sobre un Array

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### Iterando sobre una cadena de texto

Las cadenas de texto son [iteradas por puntos de código Unicode](/es/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator).

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Iterando sobre un TypedArray

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Iterando sobre un Map

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando sobre un Set

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando sobre el objeto arguments

Puedes iterar sobre el objeto {{jsxref("Functions/arguments", "arguments")}} para examinar todos los parámetros pasados a una función.

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3
```

### Iterando sobre un NodeList

El siguiente ejemplo añade una clase `read` a los párrafos que son descendientes directos del elemento [`<article>`](/es/docs/Web/HTML/Reference/Elements/article) iterando sobre una colección [`NodeList`](/es/docs/Web/API/NodeList) del DOM.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Iterando sobre un iterable definido por el usuario

Iterando sobre un objeto con un método `[Symbol.iterator]()` que devuelve un iterador personalizado:

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

Iterando sobre un objeto con un método generador `[Symbol.iterator]()`:

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

Los _iteradores iterables_ (iteradores con un método `[Symbol.iterator]()` que devuelve `this`) son una técnica bastante común para hacer que los iteradores sean utilizables en sintaxis que esperan iterables, como `for...of`.

```js
let i = 1;

const iterator = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};

for (const value of iterator) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando sobre un generador

```js
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
}
// 1
// 2
// 3
```

### Salida anticipada

La ejecución de la sentencia `break` en el primer bucle hace que termine prematuramente. El iterador aún no ha terminado, por lo que el segundo bucle continuará desde donde se detuvo el primero.

```js
const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("Esta cadena no será registrada.");
}
// 1

// Otro bucle usando el mismo iterador
// continúa donde lo dejó el último bucle.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// El iterador está agotado.
// Este bucle no ejecutará ninguna iteración.
for (const value of iterator) {
  console.log(value);
}
// [Sin salida]
```

Los generadores implementan el método [`return()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Generator/return), lo que hace que la función generadora regrese anticipadamente cuando el bucle termina. Esto hace que los generadores no sean reutilizables entre bucles.

```js example-bad
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("Esta cadena no será registrada.");
}
// 1

// El generador está agotado.
// Este bucle no ejecutará ninguna iteración.
for (const value of generator) {
  console.log(value);
}
// [Sin salida]
```

### Diferencia entre for...of y for...in

Ambas sentencias `for...in` y `for...of` iteran sobre algo. La principal diferencia entre ellas radica en sobre qué iteran.

La sentencia {{jsxref("Statements/for...in", "for...in")}} itera sobre las [propiedades de cadena enumerables](/es/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) de un objeto, mientras que la sentencia `for...of` itera sobre los valores que el [objeto iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) define para ser iterados.

El siguiente ejemplo muestra la diferencia entre un bucle `for...of` y un bucle `for...in` cuando se utilizan con un {{jsxref("Array")}}.

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

El objeto `iterable` hereda las propiedades `objCustom` y `arrCustom` porque contiene tanto `Object.prototype` como `Array.prototype` en su [cadena de prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

El bucle `for...in` solo registra las [propiedades enumerables](/es/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) del objeto `iterable`. No registra los _elementos_ del array `3`, `5`, `7` o `"hello"` porque no son _propiedades_, sino _valores_. Registra los _índices_ del array, así como `arrCustom` y `objCustom`, que son propiedades reales. Si no estás seguro de por qué se itera sobre estas propiedades, hay una explicación más detallada de cómo funciona la [iteración de arrays y `for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in).

El segundo bucle es similar al primero, pero utiliza {{jsxref("Object.hasOwn()")}} para comprobar si la propiedad enumerable encontrada es propia del objeto, es decir, no heredada. Si lo es, se registra la propiedad. Las propiedades `0`, `1`, `2` y `foo` se registran porque son propiedades propias. Las propiedades `arrCustom` y `objCustom` no se registran porque son heredadas.

El bucle `for...of` itera y registra los _valores_ que son `iterable`, como un arreglo (que es [iterable](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)), define para ser iterados. Se muestran los _elementos_ del objeto `3`, `5`, `7`, pero ninguna de las _propiedades_ del objeto.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}

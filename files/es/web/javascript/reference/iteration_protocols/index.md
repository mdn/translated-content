---
title: Protocolos de Iteración
slug: Web/JavaScript/Reference/Iteration_protocols
---

{{jsSidebar("More")}}Las nuevas características de ECMAScript 6 no solo están asociadas a cambios y adiciones de sintaxis o a nuevos objetos nativos, sino también a protocolos. Dichos protocolos puede ser implementados por cualquier objeto en relación a algunas convenciones.Existen dos protocolos: El[protocolo iterable](#The_.22iterable.22_protocol) y el[protocolo iterador](#The_.22iterator.22_protocol).

## El protocolo iterable

El protocolo **iterable** le permite a los objetos en JavaScript definir o personalizar su comportamiento de iteración, como por ejemplo qué valores son iterados dentro de una sentencia {{jsxref("Statements/for...of", "for..of")}}. Algunos objetos nativos, como {{jsxref("Array")}} o {{jsxref("Map")}}, tienen un comportamiento de iteración por defecto, mientras otros objetos (como por ejemplo {{jsxref("Object")}}) no.

Para ser iterable, un objeto debe implementar el método **@@iterator**, lo cual significa que el objeto (o uno de los objetos dentro de su [cadena de prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) debe tener una propiedad con un identificador {{jsxref("Symbol")}}`.iterator`:

- Propiedad
  - : `[Symbol.iterator]`
- Valor
  - : Una función sin argumentos que retorna un objeto, de acuerdo al [protocolo iterador](#The_.22iterator.22_protocol).

Siempre que un objeto necesite ser iterado (como al comienzo de un `for..of` loop), su método `@@iterator` es llamado sin argumentos, y el **iterador** retornado es usado para obtener los valores a ser iterados.

## El protocolo iterador

El protocolo **iterador** define una forma estándar que permite producir una secuencia de valores (sean estos finitos o infinitos).

Un objeto es un iterador cuando este implementa un método **`next()`** con la siguiente semántica:

- Propiedad
  - : `next`
- Valor

  - : Una función sin argumentos que retorna un objeto con dos propiedades:

    - `done` (boleano)

      - Su valor es `true` si el iterador está más allá del final de la secuencia iterada. En este caso `value` opcionalmente especifica el _valor retornado_ por el iterador. Los valores retornados son explicados [aquí](http://www.2ality.com/2013/06/iterators-generators.html#generators-as-threads).
      - Su valor es `false` si el iterador pudo producir el siguiente valor en la secuencia. Esto es equivalente a no especificar la propiedad `done` en su totalidad.

    - `value` - cualquier valor de JavaScript retornado por el iterador. Puede ser omitido cuando el valor de `done` es `true`.

Algunos iteradores son a su vez iterables:

```js
var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();

someArrayEntries.toString(); // "[object Array Iterator]"
someArrayEntries === someArrayEntries[Symbol.iterator](); // true
```

## Ejemplos de protocolos de iteración

Un {{jsxref("String")}} es un ejemplo de un objeto iterable nativo:

```js
var someString = "hi";
typeof someString[Symbol.iterator]; // "function"
```

Para objetos `String` su iterador por defecto retorna cada uno de sus caracteres, uno a la vez:

```js
var iterator = someString[Symbol.iterator]();
iterator + ""; // "[object String Iterator]"

iterator.next(); // { value: "h", done: false }
iterator.next(); // { value: "i", done: false }
iterator.next(); // { value: undefined, done: true }
```

En algunas estructuras nativas del lenguaje como en el caso del [operador de propagación _spread operator_](/es/docs/Web/JavaScript/Reference/Operators/Spread_operator), el mismo protocolo de iteración está presente en su parte interna:

```js
[...someString]; // ["h", "i"]
```

Podemos redefinir el comportamiento de iteración creando nuestro propio `@@iterator`:

```js
// es necesario el uso de un objeto creado a partir de la función constructora String,
// ya que al usar un string primitivo el auto-boxing generaría una referencia temporal
// a un iterador que luego es descartado en el unbox

var someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // este es el objeto iterador que retorna un único elemento, la cadena string "bye"
    next: function () {
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true,
  };
};
```

Nótese que al redefinir un `@@iterator` se puede afectar el comportamiento de construcciones nativas que usan el protocolo de iteración:

```js
[...someString]; // ["bye"]
someString + ""; // "hi"
```

## Ejemplos de iterables

### Iterables nativos

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} y {{jsxref("Set")}} son objetos iterables nativos, ya que en su objeto prototipo existe un método `@@iterator`.

### Iterables personalizados

Podemos crear nuestros propios iterables de la siguiente manera:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### APIs nativas que aceptan iterables

Existen varios APIs que aceptan iterables, como en el caso de: {{jsxref("Map", "Map([iterable])")}}, {{jsxref("WeakMap", "WeakMap([iterable])")}}, {{jsxref("Set", "Set([iterable])")}} y {{jsxref("WeakSet", "WeakSet([iterable])")}}:

```js
var myObj = {};

new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]).get(2); // "b"

new WeakMap([
  [{}, "a"],
  [myObj, "b"],
  [{}, "c"],
]).get(myObj); // "b"

new Set([1, 2, 3]).has(3); // true

new Set("123").has("2"); // true

new WeakSet(
  (function* () {
    yield {};
    yield myObj;
    yield {};
  })(),
).has(myObj); // true
```

De igual manera {{jsxref("Promise.all", "Promise.all(iterable)")}}, {{jsxref("Promise.race", "Promise.race(iterable)")}}, y {{jsxref("Array.from", "Array.from()")}}.

### Sintaxis que espera un iterable

Algunas declaraciones y expresiones esperan iterables, por ejemplo el bucle [`for-of`](/es/docs/Web/JavaScript/Reference/Statements/for...of), el[operador de propagación _spread operator_](/es/docs/Web/JavaScript/Reference/Operators/Spread_operator), la expresión [`Yield*`](/es/docs/Web/JavaScript/Reference/Operators/yield*), y la [asignación desestructurada _destructuring assignment_](/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"
```

### Iterables mal definidos

Un método `@@iterator` iterable que no retorne un objeto iterador no está correctamente definido, por lo tanto al ejecutarlo de esta manera podría resultar en excepciones en tiempo de ejecución y otros errores:

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## Ejemplos de iteradores

### Iterador simple

```js
function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
}

var it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### Iterador infinito

```js
function idMaker() {
  var index = 0;

  return {
    next: function () {
      return { value: index++, done: false };
    },
  };
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### Con un generador

```js
function* makeSimpleGenerator(array) {
  var nextIndex = 0;

  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

var gen = makeSimpleGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
```

## ¿Un objeto generador es un iterador o un iterable?

Un [objeto iterador](/es/docs/Web/JavaScript/Reference/Global_Objects/Generator) es tanto un iterador como un iterable:

```js
var aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
typeof aGeneratorObject.next;
// "function", ya que tiene un método next, por lo tanto es un iterador
typeof aGeneratorObject[Symbol.iterator];
// "function", ya que tiene un método @@iterator, por lo tanto es un iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// true, ya que su método @@iterator retorna a sí mismo (un iterador), por lo tanto es un iterable bien formado
[...aGeneratorObject];
// [1, 2, 3]
```

## Especificaciones

{{Specifications}}

## Temas relacionados

Para información adicional acerca de generadores _generators_ en ES6, puede visitar la [página específica](/es/docs/Web/JavaScript/Reference/Statements/function*) sobre este tema.

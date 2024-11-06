---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
---

{{JSRef}}

El método **`Array.from()`** crea una nueva instancia de `Array` a partir de un objeto iterable.

{{EmbedInteractiveExample("pages/js/array-from.html")}}

## Sintaxis

```
Array.from(arrayLike[, mapFn[, thisArg]])
```

### Parámetros

- `arrayLike`
  - : Objeto iterable para convertirlo en un array.
- `mapFn`{{Optional_inline}}
  - : Función de mapa para llamar a cada elemento de la matriz.
- `thisArg`{{Optional_inline}}
  - : Valor para usar como `this` al ejecutar `mapFn`.

### Valor de retorno

Una nueva instancia de {{jsxref("Array")}}.

## Descripción

`Array.from()` permite crear `Arrays` de:

- Objetos array-like (objetos con propiedad `length` o elementos indexados).
- [Objetos iterables](/es/docs/Web/JavaScript/Referencia/Iteration_protocols) (objetos de los cuales se pueden obtener sus elementos como {{jsxref("Map")}} y {{jsxref("Set")}}).

`Array.from()` tiene un parámetro opcional `mapFn`, que te permite ejecutar una función {{jsxref("Array.prototype.map", "map")}} a cada elemento del array (o a la subclase del objeto) que se ha creado. Para aclararlo, `Array.from(obj, mapFn, thisArg)` es igual que `Array.from(obj).map(mapFn, thisArg)`, excepto en que éste no crea un array intermedio. Esto es importante para ciertas subclases de array, [vectores tipados](/es/docs/Web/JavaScript/Vectores_tipados), ya que el vector intermedio necesitaría tener valores truncados para trabajar con el tipo adecuado.

La propiedad `length` del método `from()` es 1.

En ES2015, la sintaxis de clase permite la subclasificación de clases integradas y definidas por el usuario; como resultado, los métodos estáticos como `Array.from` son "heredados" por subclases de `Array` y crean nuevas instancias de la subclase, no `Array`.

## Ejemplos

### Array desde un `String`

```js
Array.from("foo");
// [ "f", "o", "o" ]
```

### Array desde un `Set`

```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Array desde un `Map`

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### Array desde un objeto Array-like (argumentos)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### Usando una función de flecha y `Array.from`

```js
// Usando una función de flecha como función
// para manipular los elementos
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Generar secuencia de números
// Puesto que el array se inicializa con `undefined` en cada posición,
// el valor de `v` a continuación será `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### Generador de secuencia (rango)

```js
// Función generadora de secuencia (comúnmente llamado "rango", ej. Clojure, PHP, etc.)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Genera un rango de números entre 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Genera un rango de números entre 1..10 con saltos de 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generar el abecedario utilizando Array.from haciendo uso de que se ordena como secuencia
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

## Polyfill

`Array.from` fue añadido en el estándar ECMA-262 en la 6ta edición (ES2015); así que no puede estar presente en otras implementaciones del estándar. Puedes usarlo insertando este código al comienzo de sus scripts, permitiendo el uso de `Array.from` en implementaciones que no lo soportan. Este algoritmo es el mismo especificado en ECMA-262, 6ta edición, suponiendo que `Object` y `TypeError` tengan sus valores originales y `callback.call` evalúa el valor original de {{jsxref("Function.prototype.call")}}. Adicionalmente, ya que verdaderos iterables pueden no ser polyficados, esta implementación no soporta iterables genéricos como definidos en la 6ta edición de ECMA-262.

```js
// Pasos de producción de ECMA-262, Edición 6, 22.1.2.1
// Referencia: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // La propiedad length del método from es 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Deje a C ser el este valor.
      var C = this;

      // 2. Deje que los elementos sean ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. Retornar IfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(
          "Array.from requiere un objeto array-like - not null or undefined",
        );
      }

      // 4. Si mapfn no está definida, entonces deja que sea false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== "undefined") {
        // 5. si no
        // 5. a If IsCallable(mapfn) es false, lanza una excepción TypeError.
        if (!isCallable(mapFn)) {
          throw new TypeError(
            "Array.from: si hay mapFn, el segundo argumento debe ser una función",
          );
        }

        // 5. b. Si thisArg se suministró, deje que T sea thisArg; si no, deje que T esté indefinido.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === "undefined"
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  })();
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}

---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
---

{{JSRef}}

El método **`includes()`** determina si una matriz incluye un determinado elemento, devuelve `true` o `false` según corresponda.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## Sintaxis

```
arr.includes(searchElement[, fromIndex])
```

### Parámetros

- `valueToFind`
  - : El valor a buscar.
    > **Nota:** Al comparar cadenas de texto y caracteres, `includes()` **distingue mayúsculas y minúsculas**.
- `fromIndex` {{optional_inline}}
  - : Posición en la matriz en la cuál se debe comenzar a buscar `valueToFind`; el primer caracter a buscar se encuentra en `fromIndex`. Un valor negativo inicia la búsqueda desde array.length + fromIndex en adelante. El valor por defecto es 0.

### Valor devuelto

Un {{jsxref ("Boolean")}} que es `true` si el valor `valueToFind` se encuentra dentro de la matriz (o la parte de la matriz indicada por el índice `fromIndex`, si se especifica). Todos los valores de cero se consideran iguales independientemente del signo (es decir, -0 se considera igual a 0 y +0), pero `false` no se considera igual a 0.

> **Nota:** Técnicamente hablando, `include()` usa el algoritmo [`sameValueZero`](/es/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality) para determinar si se encuentra el elemento dado

## Ejemplos

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

### `fromIndex` es mayor o igual que la longitud de la matriz

Si `fromIndex` es mayor o igual que la longitud de la matriz, se devuelve `false`. No se buscará en la matriz.

```js
var arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### El índice calculado es menor que 0

Si `fromIndex` es negativo, el índice calculado se calcula para usarse como una posición en la matriz en la cual comenzar a buscar `searchElement`. Si el índice calculado es menor que 0, se buscará la matriz completa.

```js
// la longitud de la matriz es 3
// fromIndex es -100
// el índice calculado es 3 + (-100) = -97

var arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
```

### `includes()` utilizado como método genérico

El método `includes()` es intencionalmente genérico. No requiere que este valor sea un objeto Array, por lo que se puede aplicar a otros tipos de objetos (por ejemplo, objetos tipo array). El siguiente ejemplo ilustra el método `includes()` llamado en el objeto de argumentos de la función.

```js
(function () {
  console.log([].includes.call(arguments, "a")); // true
  console.log([].includes.call(arguments, "d")); // false
})("a", "b", "c");
```

## Polyfill

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value: function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" es null o no está definido');
      }

      // 1. Dejar que O sea ? ToObject(this value).
      var o = Object(this);

      // 2. Dejar que len sea ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. Si len es 0, devuelve false.
      if (len === 0) {
        return false;
      }

      // 4. Dejar que n sea ? ToInteger(fromIndex).
      //    (Si fromIndex no está definido, este paso produce el valor 0.)
      var n = fromIndex | 0;

      // 5. Si n ≥ 0, entonces
      //  a. Dejar que k sea n.
      // 6. Else n < 0,
      //  a. Dejar que k sea len + n.
      //  b. Si k < 0, Dejar que k sea 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" &&
            typeof y === "number" &&
            isNaN(x) &&
            isNaN(y))
        );
      }

      // 7. Repite, mientras k < len
      while (k < len) {
        // a. Dejar que elementK sea el resultado de ? Get(O, ! ToString(k)).
        // b. Si SameValueZero(searchElement, elementK) es true, devuelve true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Incrementa k por 1.
        k++;
      }

      // 8. Devuelve false
      return false;
    },
  });
}
```

Si necesita admitir motores de JavaScript realmente obsoletos que no son compatibles con [`Object.defineProperty`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), es mejor no rellenar los métodos `Array.prototype`, ya que no puede hacerlos no enumerables.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}

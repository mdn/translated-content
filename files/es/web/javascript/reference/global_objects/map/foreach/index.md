---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

El método **`forEach()`** de las instancias de {{jsxref("Map")}} ejecuta la función provista, una vez por cada tupla llave/valor en este _map_, en orden de inserción.

{{InteractiveExample("JavaScript Demo: Map.prototype.forEach()")}}

```js interactive-example
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);

// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"
```

## Sintaxis

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parámetro

- `callbackFn`
  - : Una función que se ejecuta por cada entrada en el _map_. La función es llamada con los siguientes argumentos:
    - `value`
      - : El valor de cada iteración.
    - `key`
      - : La llave de cada iteración.
    - `map`
      - : El _map_ que esta siendo iterado.
- `thisArg` {{optional_inline}}
  - : Un valor que se usa como `this` cuando se ejecuta la función `callbackFn`.

### Valor devuelto

Ningúno ({{jsxref("undefined")}}).

## Descripción

El método `forEach` ejecuta la función `callback` provista, una vez por cada llave que actualmente existe en el _map_. No se invoca para llaves que fueron borradas. Sin embargo, la función es ejecutada para valores que se encuentran en el objeto, pero que su valor es `undefined`.

La función `callback` es invocada con **tres argumentos**:

- el `value` del elemento
- el `key` del elemento
- el **objeto `Map`** que se esta iterando

Si el parámetro `thisArg` se provee a la función `forEach`, este se pasará a la función `callback` cuando sea invocada, para usarse como el valor `this`. De lo contrario, el valor `undefined` será pasado para usarse como el valor `this`. El valor `this` que finalmente es visible para la función `callback`, es determinado de acuerdo a [las reglas para determinar el valor `this` visible para una función](/es/docs/Web/JavaScript/Reference/Operators/this).

Cada valor es visitado una vez, excepto en el caso en que el valor es borrado y agregado antes de que `forEach` haya terminado. La función `callback` no es invocada para valores que se borraron antes de ser visitados. Los valores agregados antes de que `forEach` termine, serán visitados.

## Ejemplos

### Imprimiendo el contenido de un objeto Map

El siguiente código, registra en la consola un mensaje por cada elemento en un objeto `Map`:

```js
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);
// Logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}

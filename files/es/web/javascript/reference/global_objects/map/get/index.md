---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

El método **`get()`** de las instancias de {{jsxref("Map")}} regresa un elemento específico de este _map_. Si el valor que esta asociado a la llave pasada como parámetro es un objeto, entonces obtendras una referencia a dicho objeto y cualquier cambio hecho a ese objeto, lo modificará también dentro del objeto `Map`.

{{InteractiveExample("JavaScript Demo: Map.prototype.get()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// Expected output: "foo"

console.log(map1.get("baz"));
// Expected output: undefined
```

## Sintaxis

```js-nolint
get(key)
```

### Parámetros

- `key`
  - : La llave del elemento que se quiere obtener del objeto `Mqp`.

### Valor devuelto

El elemento asociado a la llave pasada como parámetro, o {{jsxref("undefined")}} si la llave no se encuentra en el objeto `Map`.

## Ejemplos

### Usando get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Regresa "foo"
console.log(myMap.get("baz")); // Regresa undefined
```

### Usando get() para recuperar una referencia a un objeto

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

Note que el _map_ mantiene una referencia al objeto original, esto significa que el objeto no puede ser reclamado por el recolector de basura, lo que puede llevar a errores de memoria inesperados. Si deseas que el objeto guardado en el _map_ tenga el mismo tiempo de vida que el objeto original, considera usar un {{jsxref("WeakMap")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}

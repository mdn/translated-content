---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

El método **`set()`** de las instancias {{jsxref("Map")}} agrega o actualiza una entrada en este _map_ con la llave y valor especificados.

{{InteractiveExample("JavaScript Demo: Map.prototype.set()")}}

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
set(key, value)
```

### Parámetros

- `key`
  - : La llave del elemento que se va a agregar al objeto `Map`. La llave puede ser cualquiera de los [tipos de dato de JavaScript](/es/docs/Web/JavaScript/Guide/Data_structures) (cualquier [valor primitivo](/es/docs/Web/JavaScript/Guide/Data_structures#valores_primitivos) o cualquier tipo de [objeto JavaScript](/es/docs/Web/JavaScript/Guide/Data_structures#objetos)).
- `value`
  - : El valor de el elemento que se va a agregar al objeto `Map`. El valor puede ser cualquiera de los [tipos de dato de JavaScript](/es/docs/Web/JavaScript/Guide/Data_structures) (cualquier [valor primitivo](/es/docs/Web/JavaScript/Guide/Data_structures#valores_primitivos) o cualquier tipo de [objeto JavaScript](/es/docs/Web/JavaScript/Guide/Data_structures#objetos)).

### Valor devuelto

El objeto `Map`.

## Ejemplos

### Usando set()

```js
const myMap = new Map();

// Agrega nuevos elementos a el map
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// Actualiza un elemento en el map
myMap.set("bar", "baz");
```

### Usando set() encadenandolo

Ya que el método `set()` regresa el mismo objeto `Map`, puedes encadenar la llamada al método como se muestra acontinuación:

```js
// Agrega nuevos elementos al map, encadenando las llamadas.
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}

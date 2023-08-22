---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
---

{{JSRef}}

El método **`Object.fromEntries()`** transforma una lista de pares con `[clave-valor]` en un objeto.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Sintaxis

```
Object.fromEntries(iterable);
```

### Parámetros

- `iterador`
  - : Un iterador como {{jsxref("Array")}}, {{jsxref("Map")}} u otros objetos que implementen el [protocolo iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol).

### Valor de retorno

Un nuevo objeto cuyas propiedades son dadas por las entradas del iterador.

## Descripción

El método `Object.fromEntries()` toma una lista de pares con clave-valor y devuelve un nuevo objeto cuyas propiedades son dadas por éstas entradas. El argumento _iterador_ se espera que sea un objeto que implemente un método `@@iterator`, que devuelve un objeto iterador, que produce un objeto tipo array de dos elementos, donde el primer elemento es un valor que se usará como la clave de la propiedad, y el segundo elemento es el valor a asociar con esa clave de propiedad.

`Object.fromEntries()` realiza lo inverso de {{jsxref("Object.entries()")}}.

## Ejemplos

### Convirtiendo un `Map` en un `Objeto`

Con `Object.fromEntries`, puedes convertir de un {{jsxref("Map")}} a un {{jsxref("Object")}}:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Convirtiendo un `Arreglo` en un `Objeto`

Con `Object.fromEntries`, puedes convertir de un {{jsxref("Array")}} a un {{jsxref("Object")}}:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Transformación de Objetos

Con `Object.fromEntries`, su método inverso {{jsxref("Object.entries()")}}, y [array métodos de manipulaciín de arreglos](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2), puedes transformar objetos así:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase tambien

- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}

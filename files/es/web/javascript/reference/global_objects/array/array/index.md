---
title: Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
---

{{JSRef}}

El constructor **`Array()`** se utiliza para crear objetos {{jsxref("Array")}}.

## Sintaxis

```js-nolint
new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)
Array(element0, element1, /* … ,*/ elementN)
Array(arrayLength)
```

> **Nota:** `Array()` puede ser llamado con o sin [`new`](/es/docs/Web/JavaScript/Reference/Operators/new). Ambos crean una nueva instancia de `Array`.

### Parámetros

- `elementN`
  - : Un array de JavaScript se inicializa con los elementos dados, excepto en el caso donde se pase un solo argumento al constructor de `Array` y ese argumento sea un número (véase el parámetro `arrayLength` más abajo). Tenga en cuenta que este caso especial sólo se aplica a los arrays de JavaScript creadas con el constructor `Array`, no a los arrays literales, creadas con la sintaxis de corchetes.
- `arrayLength`
  - : Si el único argumento pasado al constructor de `Array` es un número entero entre 0 y 2^32 - 1 (incluido), éste devuelve un nuevo array de JavaScript con su propiedad de `length` establecida a ese número (**Nota:** esto implica un array de ranuras vacías de `arrayLength`, no ranuras con valores reales `undefined` — ver [sparse arrays](/es/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)).

### Exceptions

- {{jsxref("RangeError")}}
  - : Se lanza si sólo hay un argumento (`arrayLength`) y su valor no está entre 0 y 2^32 - 1 (incluido).

## Ejemplos

### Notación literal de array

Los arrays pueden ser creados usando la notación [literal](/es/docs/Web/JavaScript/Reference/Lexical_grammar#arreglos_literales):

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Constructor de array con un solo parámetro

Los arrays pueden ser creados usando un constructor con un solo parámetro numérico. Un array con su propiedad `length` establecida a ese número y los elementos del array son ranuras vacías.

```js
const fruits = new Array(2);
console.log(fruits.length); // 2
console.log(fruits[0]); // undefined
```

### Constructor de array con múltiples parámetros

Si se pasa más de un argumento al constructor, se crea un nuevo {{jsxref("Array")}} con los elementos dados.

```js
const fruits = new Array("Apple", "Banana");
console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Clase {{jsxref("Array")}}

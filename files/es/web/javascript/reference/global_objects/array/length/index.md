---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
---

{{JSRef}}

La propiedad **`length`** de un objeto que es una instancia de tipo Array establece o devuelve la cantidad de elementos en esa matriz. El valor es un entero sin signo de 32 bits que siempre es numéricamente mayor que el índice más alto en la matriz.

{{EmbedInteractiveExample("pages/js/array-length.html")}}

## Descripción

El valor de la propiedad `length` es un número entero con un signo positivo y un valor menor que 2 a la 32a potencia (232).

```js
var namelistA = new Array(4294967296); //2 a la 32a potencia = 4294967296
var namelistC = new Array(-100); //signo negativo

console.log(namelistA.length); //RangeError: longitud de la matriz inválida
console.log(namelistC.length); //RangeError: longitud de la matriz inválida

var namelistB = [];
namelistB.length = Math.pow(2, 32) - 1; //establecer una longitud de la matriz menor que 2 a la 32ª potencia
console.log(namelistB.length);

//4294967295
```

Puedes establecer la propiedad `length` para truncar una matriz unidimensional en cualquier momento. Cuando extiende una matriz cambiando su propiedad `length`, el número de elementos reales aumenta; por ejemplo, si se establece `length` en 3 cuando actualmente es 2, la matriz ahora contiene 3 elementos, lo que hace que el tercer elemento sea `undefined`.

```js
var arr = [1, 2, 3];
printEntries(arr);

arr.length = 5; // establecer la longitud de la matriz en 5 mientras que actualmente es 3.
printEntries(arr);

function printEntries(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    console.log(arr[i]);
  }
  console.log("=== printed ===");
}

// 1
// 2
// 3
// === impreso ===
// 1
// 2
// 3
// undefined
// undefined
// === impreso ===
```

Pero, la propiedad `length` no necesariamente indica el número de valores definidos en la matriz. Ver también [Relación entre `length` y las propiedades numéricas](/es/docs/Web/JavaScript/Reference/Global_Objects/Array#Relationship_between_length_and_numerical_properties).

{{js_property_attributes(1, 0, 0)}}

- `Sobrescribir`: si este atributo se establece en `false`, el valor de la propiedad no se puede cambiar.
- `Configurable`: si este atributo se establece en `false`, cualquier intento de eliminar la propiedad o cambiar sus atributos (`Sobrescribir`, `Configurable` o `Numerable`) fallará.
- `Numerable`: si este atributo se establece en `true`, la propiedad se repetirá durante los bucles [for](/es/docs/Web/JavaScript/Reference/Statements/for) o [for..in](/es/docs/Web/JavaScript/Reference/Statements/for...in).

## Ejemplos

### Iterando sobre una matriz

En el siguiente ejemplo, la matriz `numbers` se itera a través de la propiedad `length`. El valor en cada elemento se duplica.

```js
var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers ahora es [2, 4, 6, 8, 10]
```

### Acortando una matriz

El siguiente ejemplo acorta los `numbers` de la matriz a una longitud de `3` si la longitud actual es mayor que `3`.

```js
var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array")}}

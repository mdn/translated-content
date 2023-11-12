---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 8bf018f0a39d012a0d98afe3f15e0ed0fb7c8ce5
---

{{JSRef}}

El símbolo conocido como **`Symbol.species`** especifica una propiedad con valor de función que la función constructora utiliza para crear objetos derivados.

{{EmbedInteractiveExample("pages/js/symbol-species.html")}}

## Descripción

La propiedad de acceso `species` permite a las subclases anular el constructor por defecto de los objetos.

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Usando species

Es posible que quieras devolver objetos {{jsxref("Array")}} en tu clase array derivada `MyArray`. Por ejemplo, al utilizar métodos como {{jsxref("Array.map", "map()")}} que devuelven el constructor por defecto, quieres que estos métodos devuelvan un objeto `Array` padre, en lugar del objeto `MyArray`. El símbolo `species` te permite hacer esto:

```js
class MyArray extends Array {
  // Sobrescribir especies al constructor de la matriz Array
  static get [Symbol.species]() {
    return Array;
  }
}
let a = new MyArray(1, 2, 3);
let mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map.@@species", "Map[@@species]")}}
- {{jsxref("Set.@@species", "Set[@@species]")}}

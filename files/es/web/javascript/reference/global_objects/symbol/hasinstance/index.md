---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: d4b12e290fce9ae43a9ae23b9b9c8a5812b82ebd
---

{{JSRef}}

El símbolo conocido como **`Symbol.hasInstance`** se utiliza para determinar si un objeto constructor reconoce un objeto como su instancia. El comportamiento del operador {{jsxref("Operators/instanceof", "instanceof")}} puede personalizarse mediante este símbolo.

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}{{js_property_attributes(0,0,0)}}

## Ejemplos

### Comportamiento de instanceof personalizado

Podrías personalizar el comportamiento de `instanceof` de la siguiente manera, por ejemplo:

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

```js
function MyArray() {}
Object.defineProperty(MyArray, Symbol.hasInstance, {
  value: function (instance) {
    return Array.isArray(instance);
  },
});
console.log([] instanceof MyArray); // true
```

### Comprobación de la instancia de un objeto

De la misma manera que se puede comprobar si un objeto es una instancia de una clase utilizando la palabra clave `instanceof`, también podemos utilizar `Symbol.hasInstance` para dichas comprobaciones.

```js
class Animal {
  constructor() {}
}

const cat = new Animal();

console.log(Animal[Symbol.hasInstance](cat)); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Operators/instanceof", "instanceof")}}

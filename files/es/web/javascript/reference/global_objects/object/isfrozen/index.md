---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
---

{{JSRef}}

El método **`Object.isFrozen()`** determina si un objeto está _congelado_.

## Síntaxis

```
Object.isFrozen(obj)
```

### Parametros

- `obj`
  - : El objeto a ser revisado.

## Descripción

Un objeto está congelado si y solo si no es {{jsxref("Object.isExtensible()", "extendible", "", 1)}}, todas sus propiedades son no-configurables, y todos los datos de sus propiedades no tienen capacidad de escritura.

## Ejemplos

```js
// Un objeto nuevo es extendible, así que no está congelado.
Object.isFrozen({}); // === false

// Un objeto vacio el cuál no es extendible está congelado vacuamente.
var vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // === true

// Un objeto nuevo con una propiedad es tabién extendible, ergo no congelado.
var oneProp = { p: 42 };
Object.isFrozen(oneProp); // === false

// Prevenir la extensión de un objeto no lo congela.
// porque la propiedad sigue teniendo capacidad de configuración (y capacidad de escritura).
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // === false

// ...pero eliminar la propiedad congela el objeto vacuamente.
delete oneProp.p;
Object.isFrozen(oneProp); // === true

// Un ojbeto no-extendible con una propiedad sin capacidad de escritura pero si con capacidad de configuración no está congelado.
var nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", { writable: false }); // Le quita la capacidad de escritura.
Object.isFrozen(nonWritable); // === false

// Quitarle la capacidad de configuración a una propiedad congela el objeto.
Object.defineProperty(nonWritable, "e", { configurable: false }); // le quita la capacidad de configuración.
Object.isFrozen(nonWritable); // === true

// Un objeto no-extendible con una propiedad sin capacidad de configuración pero con capacidad de escritura no congela a dicho objeto.
var nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", { configurable: false });
Object.isFrozen(nonConfigurable); // === false

// Quitarle la capacidad de configuración a esa propiedad congela el objeto.
Object.defineProperty(nonConfigurable, "release", { writable: false });
Object.isFrozen(nonConfigurable); // === true

// A non-extensible object with a configurable accessor property isn't frozen.
var accessor = {
  get food() {
    return "yum";
  },
};
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // === false

// ...but make that property non-configurable and it becomes frozen.
Object.defineProperty(accessor, "food", { configurable: false });
Object.isFrozen(accessor); // === true

// But the easiest way for an object to be frozen is if Object.freeze has been called on it.
var frozen = { 1: 81 };
Object.isFrozen(frozen); // === false
Object.freeze(frozen);
Object.isFrozen(frozen); // === true

// By definition, a frozen object is non-extensible.
Object.isExtensible(frozen); // === false

// Also by definition, a frozen object is sealed.
Object.isSealed(frozen); // === true
```

## Notas

En ES5, si el argumento pasado a éste método no es un objeto (primitivo), entonces causará un {{jsxref("TypeError")}}. En ES6, un no-objeto pasado como argumento será tratado como si fuera un objeto ordinario congelado, simplemente regresa `true`.

```js
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES6 code)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}

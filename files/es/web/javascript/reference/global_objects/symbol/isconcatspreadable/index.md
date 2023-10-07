---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: 88508ebe5c73264be2cf03f1a949d8099d68d1ea
---

{{JSRef}}

El símbolo conocido como **`Symbol.isConcatSpreadable`** se utiliza para configurar si un objeto debe ser aplanado a sus elementos del array cuando se utiliza el método {{jsxref("Array.prototype.concat()")}}.

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## Descripción

El símbolo `@@isConcatSpreadable` (`Symbol.isConcatSpreadable`) puede ser definido como una propiedad propia o heredada y su valor es un booleano. Puede controlar el comportamiento de los arrays y de los objetos tipo array:

- Para los objetos tipo matriz, el comportamiento por defecto es extender (aplanar) los elementos. `Symbol.isConcatSpreadable` puede evitar el aplanamiento en estos casos.
- En el caso de los objetos tipo array, el comportamiento por defecto es no extender ni aplanar. `Symbol.isConcatSpreadable` puede forzar el aplanamiento en estos casos.

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Arrays

Por defecto, {{jsxref("Array.prototype.concat()")}} extiende (aplana) las matrices en su resultado:

```js
let alpha = ['a', 'b', 'c'],
let numeric = [1, 2, 3]

let alphaNumeric = alpha.concat(numeric)

console.log(alphaNumeric)  // Resultado: ['a', 'b', 'c', 1, 2, 3]
```

Al establecer el valor de `Symbol.isConcatSpreadable` a `false`, puedes desactivar el comportamiento por defecto:

```js
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
let alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Resultado: ['a', 'b', 'c', [1, 2, 3] ]
```

### Objetos tipo array

Para los objetos tipo array, el valor por defecto es no extender. `Symbol.isConcatSpreadable` necesita ser establecido a `true` para obtener un array aplanado:

```js
let x = [1, 2, 3];

let fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world",
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

**Nota:** La propiedad `length` se utiliza para controlar el número de propiedades del objeto a añadir. En el ejemplo anterior, `length:2` indica que hay que añadir dos propiedades.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.isConcatSpreadable` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Array.prototype.concat()")}}

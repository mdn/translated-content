---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
---

{{JSRef}}

La propiedad de símbolo **`@@unscopable`** contiene nombres de propiedad que no se incluyeron en el estándar ECMAScript antes de la versión ES2015. Estas propiedades se excluyen de los enlaces de declaración [`with`](/es/docs/Web/JavaScript/Reference/Statements/with).

## Sintaxis

```
arr[Symbol.unscopables]
```

## Descripción

Las propiedades de matriz predeterminadas que se excluyen de los enlaces `with` son: copyWithin, entries, fill, find, findIndex, includes, keys, y values.

Consulte {{jsxref("Symbol.unscopables")}} para saber cómo configurar `unscopables` para sus propios objetos.

{{js_property_attributes(0,0,1)}}

## Ejemplos

El siguiente código funciona bien en ES5 y más abajo. Sin embargo, en ECMAScript 2015 y posterior, se introdujo el método {{jsxref("Array.prototype.keys()")}}. Eso significa que dentro de los entornos `with`, las "keys" ahora serían el método y no la variable. Aquí es donde entra en juego la propiedad de símbolo `@@unscopables` `Array.prototype[@@unscopables]` incorporada y evita que algunos de los métodos Array tengan un alcance en la instrucción `with`.

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Symbol.unscopables")}}

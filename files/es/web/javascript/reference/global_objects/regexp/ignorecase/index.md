---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
---

{{JSRef}}

La propiedad **`ignoreCase`** indica si la expresión regular está usando la bandera "i". `ignoreCase` es una propiedad de _sólo lectura_ de una instancia de expresión regular.

{{js_property_attributes(0, 0, 1)}}

## Descripción

El valor de `ignoreCase` es un {{jsxref("Boolean")}} y `true` si la bandera "i" fue usada. De otra manera es false. La bandera "i" indica que el se debe ignorar la capitalización al tratar de encontrar los equivalentes en un texto.

No se puede cambiar esta propiedad directamente.

## Ejemplos

### Usando `ignoreCase`

```js
var regex = new RegExp("foo", "i");

console.log(regex.ignoreCase); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}

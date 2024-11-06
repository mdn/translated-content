---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: 02024642bdb12940509cb4c7e2e60cbc3d62bf21
---

{{JSRef}}

El **`Symbol.toPrimitive`** es un símbolo que especifica una propiedad con valor de función que se llama para convertir un objeto en un valor primitivo correspondiente.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Descripción

Con la ayuda de la propiedad `Symbol.toPrimitive` (utilizada como valor de la función), se puede convertir un objeto en un valor primitivo. La función se llama con un argumento de cadena `hint`, que especifica el tipo preferido del valor primitivo resultante. El argumento `hint` puede ser uno de los siguientes: "`number`", "`string`" y "`default`".

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Modificar los valores primitivos convertidos desde un objeto

El siguiente ejemplo describe cómo la propiedad `Symbol.toPrimitive` puede modificar el valor primitivo convertido desde un objeto.

```js
// Un objeto sin la propiedad Symbol.toPrimitive.
const obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// Un objeto con la propiedad Symbol.toPrimitive.
const obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 10;
    }
    if (hint === "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        — hint es "number"
console.log(`${obj2}`); // "hello"   — hint es "string"
console.log(obj2 + ""); // "true"    — hint es "default"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]")}}
- {{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}

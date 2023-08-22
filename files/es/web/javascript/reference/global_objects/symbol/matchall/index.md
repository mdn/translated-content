---
title: Symbol.matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
l10n:
  sourceCommit: c20a54b3a4b713b2636f171d00162779e67b99b7
---

{{JSRef}}

El símbolo conocido como **`Symbol.matchAll`** devuelve un iterador, que devuelve las coincidencias de la expresión regular con una cadena. Esta función es llamada por el método {{jsxref("String.prototype.matchAll()")}}.

{{EmbedInteractiveExample("pages/js/symbol-matchall.html","shorter")}}

## Descripción

Este Symbol se utiliza para {{jsxref("String.prototype.matchAll()")}} y específicamente en {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}. Los dos ejemplos siguientes devuelven el mismo resultado:

```js
"abc".matchAll(/a/);

/a/[Symbol.matchAll]("abc");
```

Este método existe para personalizar el comportamiento de las coincidencias dentro de las subclases {{jsxref("RegExp")}}.

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Usando Symbol.matchAll

```js
const str = "2016-01-02|2019-03-07";

const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/[0-9]+/g)) yield n[0];
  },
};

console.log(Array.from(str.matchAll(numbers)));
//  Array ["2016", "01", "02", "2019", "03", "07"]
```

Ver {{jsxref("String.prototype.matchAll()")}} y {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}} para más ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.matchAll` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}

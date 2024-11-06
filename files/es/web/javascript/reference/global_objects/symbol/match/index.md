---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: 7e90bb68293370a2419eb28016f1803b594111ba
---

{{JSRef}}

El símbolo conocido como **`Symbol.match`** especifica la coincidencia de una expresión regular con una cadena. Esta función es llamada por el método {{jsxref("String.prototype.match()")}}.

{{EmbedInteractiveExample("pages/js/symbol-match.html", "taller")}}

## Descripción

Esta función también se utiliza para identificar si los objetos tienen el comportamiento de las expresiones regulares. Por ejemplo, los métodos {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} y {{jsxref("String.prototype.includes()")}}, comprueban si su primer argumento es una expresión regular y lanzarán un {{jsxref("TypeError")}} si lo son. Ahora bien, si el símbolo `match` se establece como `false` (o un valor [Falsy](/es/docs/Glossary/Falsy)), indica que el objeto no está destinado a ser utilizado como un objeto de expresión regular.

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Desactivar la comprobación de `isRegExp`

El siguiente código lanzará un {{jsxref("TypeError")}}:

```js
"/bar/".startsWith(/bar/);

// Lanza TypeError, ya que /bar/ es una expresión regular
// y Symbol.match no se modifica.
```

Sin embargo, si establece `Symbol.match` a `false`, la comprobación `isRegExp` (que utiliza la propiedad `match`) indicará que el objeto no es un objeto de expresión regular. Los métodos `startsWith` y `endsWith` no lanzarán un `TypeError` como consecuencia.

```js
const re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.match` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@match", "RegExp.prototype[@@match]()")}}

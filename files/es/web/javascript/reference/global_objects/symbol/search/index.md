---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
l10n:
  sourceCommit: 88508ebe5c73264be2cf03f1a949d8099d68d1ea
---

{{JSRef}}

El símbolo conocido como **`Symbol.search`** especifica el método que devuelve el índice dentro de una cadena que coincide con la expresión regular. Esta función es llamada por el método {{jsxref("String.prototype.search()")}}.

Para más información, véase {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}} y {{jsxref("String.prototype.search()")}}.

{{EmbedInteractiveExample("pages/js/symbol-search.html")}}{{js_property_attributes(0,0,0)}}

## Ejemplos

### Búsqueda de cadenas personalizadas

```js
class caseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log("foobar".search(new caseInsensitiveSearch("BaR")));
// resultado esperado: 3
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.search` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}}

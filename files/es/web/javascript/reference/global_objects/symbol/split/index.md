---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
l10n:
  sourceCommit: 88508ebe5c73264be2cf03f1a949d8099d68d1ea
---

{{JSRef}}

El símbolo conocido como **`Symbol.split`** especifica el método que divide una cadena en los índices que coinciden con una expresión regular. Esta función es llamada por el método {{jsxref("String.prototype.split()")}}.

Para más información, véase {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} y {{jsxref("String.prototype.split()")}}.

{{EmbedInteractiveExample("pages/js/symbol-split.html")}}{{js_property_attributes(0,0,0)}}

## Ejemplos

### División inversa personalizada

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// resultado esperado: [ "dust", "the", "bites", "one", "Another" ]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.split` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}

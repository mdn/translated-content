---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
l10n:
  sourceCommit: 88508ebe5c73264be2cf03f1a949d8099d68d1ea
---

{{JSRef}}

El símbolo conocido como **`Symbol.replace`** especifica el método que reemplaza las subcadenas coincidentes de una cadena. Esta función es llamada por el método {{jsxref("String.prototype.replace()")}}.

Para más información, consulte {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}} y {{jsxref("String.prototype.replace()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.replace")}}

```js interactive-example
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}

console.log("foo".replace(new Replace1("bar")));
// Expected output: "s/foo/bar/g"
```

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Usando Symbol.replace

```js
class CustomReplacer {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return string.replace(this.value, "#!@?");
  }
}

console.log("football".replace(new CustomReplacer("foo")));
// salida esperada: "#!@?tball"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.replace` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}}

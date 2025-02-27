---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
---

{{JSRef}}

O símbolo **`Symbol.replace`** é conhecido por especificar o método que substitui as substrings conrrespondentes de uma string. Essa função é chamada pelo método {{jsxref("String.prototype.replace()")}}.

Para mais informações, veja {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}} e {{jsxref("String.prototype.replace()")}}.

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

## Exemplos

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
// resultado esperado: "#!@?tball"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}}

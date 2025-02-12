---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
---

{{JSRef}}

O **`Symbol.split`** é um símbolo conhecido que especifica o método que divide uma string nos índices correspondentes a uma expressão regular. Essa função é chamada pelo método {{jsxref("String.prototype.split()")}}.

Para mais informações, veja {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} e {{jsxref("String.prototype.split()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.split")}}

```js interactive-example
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// Expected output: "foo/bar"
```

{{js_property_attributes(0,0,0)}}

## Exemplos

### Divisão reversa personalizada

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

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}

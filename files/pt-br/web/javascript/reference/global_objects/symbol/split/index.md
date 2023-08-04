---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
---

{{JSRef}}

O **`Symbol.split`** é um símbolo conhecido que especifica o método que divide uma string nos índices correspondentes a uma expressão regular. Essa função é chamada pelo método {{jsxref("String.prototype.split()")}}.

Para mais informações, veja {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} e {{jsxref("String.prototype.split()")}}.

{{EmbedInteractiveExample("pages/js/symbol-split.html")}}{{js_property_attributes(0,0,0)}}

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

| Especificação                                                |
| ------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-symbol.split', 'Symbol.split')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol.split")}}

## Veja também

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}

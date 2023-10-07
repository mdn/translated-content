---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
---

{{JSRef}}

O símbolo **`Symbol.replace`** é conhecido por especificar o método que substitui as substrings conrrespondentes de uma string. Essa função é chamada pelo método {{jsxref("String.prototype.replace()")}}.

Para mais informações, veja {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}} e {{jsxref("String.prototype.replace()")}}.

{{EmbedInteractiveExample("pages/js/symbol-replace.html")}}{{js_property_attributes(0,0,0)}}

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

| Especificação                                                    |
| ---------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-symbol.replace', 'Symbol.replace')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol.replace")}}

## Veja também

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}}

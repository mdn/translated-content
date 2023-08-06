---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
---

{{JSRef}}

O símbolo **`Symbol.search`** é um método conhecido por retornar o índice com uma string que corresponde a expressão regular. Essa função é chamada pelo método {{jsxref("String.prototype.search()")}}.

Para mais informação, veja {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}} e {{jsxref("String.prototype.search()")}}.

{{EmbedInteractiveExample("pages/js/symbol-search.html")}}{{js_property_attributes(0,0,0)}}

## Exemplos

### Pesquisa de string personalizada

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

## Especificações

| Especificação                                                  |
| -------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-symbol.search', 'Symbol.search')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol.search")}}

## Veja também

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}}

---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
---

{{JSRef}}O atributo **`ignoreCase`** indica se a flag "i" foi ou não utilizada com a expressão regular.`ignoreCase` é um atributo somente leitura de uma instância individual de expressãoregular.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}

{{js_property_attributes(0, 0, 1)}}

## Descrição

O valor de `ignoreCase` é um {{jsxref("Boolean")}} e`true` se a flag "`i`" foi usada; `false` caso contrário. A flag "i" indica que maiúsculas e minúsculas são equivalentes ao se tentar casar uma string com a expressão regular.

Você não pode alterar essa propriedade diretamente.

## Exemplos

### Usando `ignoreCase`

```js
var regex = new RegExp("foo", "i");

console.log(regex.ignoreCase); // true
```

## Especificações

| Especificação                                                                                  |
| ---------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.ignorecase', 'RegExp.prototype.ignoreCase')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.RegExp.ignoreCase")}}

## See also

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}

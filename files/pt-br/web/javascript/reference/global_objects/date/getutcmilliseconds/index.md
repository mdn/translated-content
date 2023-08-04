---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef}}

o método **`getUTCMilliseconds()`** retorna os milisegundos na data especificada, de acordo com o horário universal (UTC).

## Sintaxe

```
dateObj.getUTCMilliseconds()
```

### Valor de retorno

Um número inteiro, entre 0 e 999, representando os milisegundos na data especificada de acordo com o horário universal (UTC).

## Exemplos

### Usando `getUTCMilliseconds()`

O exemplo a seguir associa a parte dos milissegundos do tempo atual à variável `milissegundos`.

```js
var hoje = new Date();
var milissegundos = today.getUTCMilliseconds();
```

## Especificações

| Especificação                                                                                          | Status               | Comentário                                         |
| ------------------------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                    | {{Spec2('ES1')}}     | definição inicial. Implementado no JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.25', 'Date.prototype.getUTCMilliseconds')}}                           | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getUTCMilliseconds")}}

## Veja também

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}

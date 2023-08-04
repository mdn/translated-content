---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef}}

O método **`getMilliseconds()`** retorna os milissegundos em uma data específica de acordo com o horário local.

## Sintaxe

```
dateObj.getMilliseconds()
```

### Retorna

Um número, entre 0 e 999, representando os milissegundos de uma data de acordo com o horário local.

## Exemplos

### Usando o `getMilliseconds()`

O exemplo a seguir atribui a porção de milissegundos do horário atual à variável `milliseconds`:

```js
var today = new Date();
var milliseconds = today.getMilliseconds();
```

## Especificações

| Specification                                                                                    | Status               | Comment                                            |
| ------------------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                              | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.24', 'Date.prototype.getMilliseconds')}}                        | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getMilliseconds")}}

## Veja também

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}

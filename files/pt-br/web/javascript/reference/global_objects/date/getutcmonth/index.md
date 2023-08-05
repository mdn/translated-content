---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---

{{JSRef}}

A função **`getUTCMonth()`** retorna o mês da data especificada de acordo com o horário universal, como um valor iniciado em zero (aonde zero indica o primeiro mês do ano).

## Sintaxe

```
dateObj.getUTCMonth()
```

### Valor retornado

Um número inteiro, entre 0 e 11, correspondente ao mês da data informada de acordo com o horário universal. 0 para Janeiro, 1 para Fevereiro, 2 para Março, e assim em diante.

## Exemplos

### Usando `getUTCMonth()`

O exemplo a seguir atribui a parte do mês da data atual a variável `month`.

```js
var today = new Date();
var month = today.getUTCMonth();
```

## Especificações

| Specification                                                                            | Status               | Comment                                            |
| ---------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                      | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.13', 'Date.prototype.getUTCMonth')}}                    | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getUTCMonth")}}

## Veja também

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}

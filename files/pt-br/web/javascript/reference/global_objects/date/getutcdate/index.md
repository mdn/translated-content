---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef}}

O método **`getUTCDate()`** retorna o dia (data) do mês na data especificada de acordo com o horário universal.

## Sintaxe

```
dateObj.getUTCDate()
```

### Retorna

Um número inteiro, entre 1 e 31, representando o dia do mês na data especificada de acordo com o horário universal.

## Exemplos

### Usando `getUTCDate()`

O exemplo a seguir atribui o dia da data atual à variável `day`:

```js
var today = new Date();
var day = today.getUTCDate();
```

## Especificações

| Specification                                                                          | Status               | Comment                                            |
| -------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                    | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.15', 'Date.prototype.getUTCDate')}}                   | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getutcdate', 'Date.prototype.getUTCDate')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcdate', 'Date.prototype.getUTCDate')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getUTCDate")}}

## Veja também

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}

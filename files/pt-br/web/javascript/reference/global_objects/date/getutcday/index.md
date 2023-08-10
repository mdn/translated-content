---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
---

{{JSRef}}

O método **`getUTCDay()`** retorna o dia da semana na data especificada de acordo com o horário universal, onde 0 representa domingo.

## Sintaxe

```
dateObj.getUTCDay()
```

### Parâmetros

Nenhum.

### Valor retornado

O valor retornado por `getUTCDay()` é um inteiro correspondente ao dia da semana: 0 para domingo, 1 para segunda-feira, 2 para terça-feira e assim por diante.

## Exemplos

### Usando `getUTCDay()`

O exemplo a seguir atribui a parte do dia da semana da data atual à variável `diaDaSemana`.

```js
var hoje = new Date();
var diaDaSemana = hoje.getUTCDay();
```

## Especificações

| Especificação                                                                    | Situação           | Comentário                                         |
| -------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                              | {{Spec2('ES1')}}   | Definição inicial. Implementado no JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.17', 'Date.prototype.getUTCDay')}}              | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getUTCDay")}}

## Veja também

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}

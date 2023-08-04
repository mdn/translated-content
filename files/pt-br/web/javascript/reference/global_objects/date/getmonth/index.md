---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---

{{JSRef}}

O método **`getMonth()`** retorna o mês na data especificada de acordo com o horário local, como um valor zero-based (onde o zero indica o primeiro mês do ano).

## Sintaxe

```
dateObj.getMonth()
```

### Parâmetros

Nenhum.

### Retorno

O valor retornado pelo método `getMonth()` é um inteiro entre 0 e 11. 0 corresponde a Janeiro, 1 a Fevereiro, e assim sucessivamente.

## Exemplos

### Usando o `getMonth()`

A segunda declaração abaixo atribui o valor 11 à variavel `month`, baseado no valor do objeto {{jsxref("Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var month = Xmas95.getMonth();

console.log(month); // 11
```

## Especificações

| Especificação                                                                  | Status             | Comentário                                         |
| ------------------------------------------------------------------------------ | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                            | {{Spec2('ES1')}}   | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.12', 'Date.prototype.getMonth')}}             | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getmonth', 'Date.prototype.getMonth')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getMonth")}}

## <br>Veja também

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}

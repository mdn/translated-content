---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
---

{{JSRef}}

O método **`toTimeString()`** retorna uma porção de tempo de um objeto {{jsxref("Date")}} de forma legível para um ser humano em Inglês Americano.

{{EmbedInteractiveExample("pages/js/date-totimestring.html","shorter")}}

## Sintaxe

```
dateObj.toTimeString()
```

### Valor de retorno

Uma _string_ representando a porção de tempo da data de forma legível para um ser humano em Inglês Americano.

## Descrição

Instâncias de {{jsxref("Date")}} referem-se a um ponto específico no tempo. Chamando {{jsxref("Date.prototype.toString()", "toString()")}} irá retornar uma data formatada de forma legível para um ser humano em Inglês Americano. No [SpiderMonkey](/pt-BR/docs/SpiderMonkey), isso consiste na porção da data (dia, mês e ano) seguido pela porção de tempo (horas, minutos, segundos e fuso horário). Algumas vezes é desejável obter a _string_ da porção do tempo; tal coisa pode ser atingida utilizando o método `toTimeString()`.

O `toTimeString()` método é especialmente útil por que motores parecidos que implementam a [ECMA-262](/pt-BR/docs/ECMAScript) podem ter _strings_ diferentes obtidas de {{jsxref("Date.prototype.toString()", "toString()")}} para objetos {{jsxref("Date")}}, como o formato é dependente de implementação; abordagens de corte simples de _strings_ pode não produzir resultados consistentes entre múltiplos motores.

## Exemplos

### Uso básico de `toTimeString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString()); // Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
```

## Especificações

| Especificação                                                                              |
| ------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.totimestring', 'Date.prototype.toTimeString')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toTimeString")}}

## Veja também

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}

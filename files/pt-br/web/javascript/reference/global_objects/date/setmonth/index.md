---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
---

{{JSRef}}

O método **`setMonth()`** atribui o mês para uma data específica de acordo com o ano corrente.

{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}

## Sintaxe

```
dateObj.setMonth(monthValue[, dayValue])
```

### Versões anteriores ao JavaScript 1.3

```
dateObj.setMonth(monthValue)
```

### Parâmetros

- `monthValue`
  - : Um inteiro baseado em zero representando o mês do ano a partir do começo do ano. Então, 0 representa Janeiro, 11 representa Dezembro, -1 representa Dezembro do ano passado, e 12 representa Janeiro do ano seguinte.
- `dayValue`
  - : Opcional. Um inteiro de 1 a 31, representando o dia do mês.

### Valor de retorno

O número de milissegundos entre dia 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especifica o parâmetro `dayValue`, o valor retornado do método {{jsxref("Date.prototype.getDate()", "getDate()")}} é utilizado.

Se um parâmetro que você especificou estiver fora do alcance esperado, `setMonth()` tenta atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usa 15 para `monthValue`, o ano será incrementado em 1, e 3 será usado para o mês.

O dia corrente do mês terá um impacto no comportamento deste método. Conceitualmente ele irá adicionar o número de dias dado pelo dia corrente do mês ao primeiro dia do novo mês especificado como parâmetro, retornando uma nova data. Por exemplo, se o valor corrente é 31 de agosto de 2016, chamando `setMonth()` com um valor de 1 irá retornar 2 de Março de 2016. Isso acontece porque Fevereiro de 2016 tem 29 dias.

## Exemplos

### Usando `setMonth()`

```js
var theBigDay = new Date();
theBigDay.setMonth(6);

//Cuidado com transições de final de mês
var endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## Especificações

| Especificação                                                                      |
| ---------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setmonth', 'Date.prototype.setMonth')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setMonth")}}

## Veja também

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}

---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
---

{{JSRef}} {{deprecated_header}}

O método **`setYear()`** atribui o ano para a data especificada de acordo com o horário local. Devido `setYear()` não colocar o anos cheios ("problema do ano 2000"), ele não é mais utilizado e foi substituído pelo método {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}}.

## Sintaxe

```
dateObj.setYear(yearValue)
```

### Parâmetros

- `yearValue`
  - : Um inteiro.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se `yearValue` é um número entre 0 e 99 (inclusivo), então o ano para `dateObj` é atribuido para `1900 + yearValue`. Caso contrário, o ano para `dateObj` é atribuido para `yearValue`.

## Exemplos

### Usando `setYear()`

As duas primeiras linhas atribuem o ano para 1996. O terceiro atribui o ano para 2000.

```js
var theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## Especificações

| Especificação                                                                    |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setyear', 'Date.prototype.setYear')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setYear")}}

## Veja também

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}

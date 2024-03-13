---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
---

{{JSRef}} {{deprecated_header}}

## Resumo

O método **`getYear()`** retorna o ano especificado pela data de acordo com a hora local. Por conta do fato de que `getYear()` não retorna anos completos ("problema do ano 2000"), este método não é mais utilizado e foi substituido pelo método {{jsxref("Date.prototype.getFullYear", "getFullYear()")}}.

## Sintaxe

```
dateObj.getYear()
```

### Parâmetros

Nenhum.

### Retorna

O método `getYear()` retorna o ano menos 1900; então:

- Para ano maior ou igual a 2000, o valor retornado por `getYear()` é 100 ou mais. Por exemplo, se o ano for 2026, `getYear()` retorna 126.
- Para ano entre e incluindo 1900 e 1999, o valor retornado por `getYear()` é entre 0 e 99. Por exemplo, se o anor for 1976, `getYear()` retorna 76.
- Para ano menor que 1900, o valor retornado por `getYear()` é menor que 0. Por exemplo, se o ano for 1800, `getYear()` retorna -100.

Para levar em consideração anos antes e depois de 2000, você deve utilizar {{jsxref("Date.prototype.getFullYear", "getFullYear()")}} ao invés de `getYear()` para que o ano seja especificado por completo.

## Retrocombatibilidade

### Comportamento em JavaScript 1.2 e anteriores

O método `getYear()` retorna um ano de 2 ou 4 dígitos:

- Para anos entre e incluindo 1900 e 1999, o valor retornado por `getYear()` é o ano menos 1900. Por exemplo, se o ano é 1976, o valor retornado é 76.
- Para anos menores que 1900 ou maiores que 1999, o valor retornado por `getYear()` é um ano de 4 dígitos. Por exemplo, se o ano é 1856, o valor retornado é 1856. Se o ano é 2026, o valor retornado é 2026.

## Exemplos

### Exemplo: Anos entre 1900 e 1999

O segundo statement atribui o valor 95 à variável `year`.

```js
var Xmas = new Date("December 25, 1995 23:15:00");
var year = Xmas.getYear(); // returns 95
```

### Exemplo: Anos depois de 1999

O segundo statement atribui o valor 100 à variável `year`.

```js
var Xmas = new Date("December 25, 2000 23:15:00");
var year = Xmas.getYear(); // returns 100
```

### Exemplo: Anos antes de 1900

O segundo statement atribui o valor -100 à variável `year`.

```js
var Xmas = new Date("December 25, 1800 23:15:00");
var year = Xmas.getYear(); // returns -100
```

### Exemplo: Setando e recuperando um ano entre 1900 e 1999

O segundo statement atribui o valor 95 à variável `year`, representanto o ano 1995.

```js
var Xmas.setYear(95);
var year = Xmas.getYear(); // returns 95
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}

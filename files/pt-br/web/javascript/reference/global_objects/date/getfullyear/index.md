---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
---

{{JSRef}}

## Resumo

O método **`getFullYear()`** retorna o ano da data especificada de acordo com a hora local.

Use este método ao invés do {{jsxref("Date.prototype.getYear()", "getYear()")}}.

## Sintaxe

```
dateObj.getFullYear()
```

### Parâmetros

Nenhum.

### Retorna

O valor retornado por `getFullYear()` é um número absoluto. Para datas entre os anos 1000 e 9999, `getFullYear()` retorna um número de quatro dígitos, por exemplo, 1995. Use esta função para ter certeza de que o ano é compatível com os anos depois de 2000.

## Exemplos

### Exemplo: Usando `getFullYear()`

O exemplo seguinte atribui o valor de quatro dígitos do ano corrente à variável year.

```js
var today = new Date();
var year = today.getFullYear();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}

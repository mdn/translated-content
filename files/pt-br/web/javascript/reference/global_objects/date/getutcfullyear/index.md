---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef}}

O método **`getUTCFullYear()`** retorna o ano na data indicada de acordo com o horário universal.

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## Sintaxe

```
dateObj.getUTCFullYear()
```

### Retorna

Um número que representa o ano na data indicada de acordo com o horário universal.

## Descrição

O valor retornado por `getUTCFullYear()` é um número absoluto compatível com ano 2000, por exemplo, 1995.

## Exemplos

### Usando `getUTCFullYear()`

O exemplo a seguir atribui o valor de 4 dígitos do ano atual à variável `year.`

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## Especificações

| Especificação                                                                                  | Status               | Comentário                                         |
| ---------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                            | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.11', 'Date.prototype.getUTCFullYear')}}                       | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getUTCFullYear")}}

## Veja também

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}

---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef}}

O método **`getUTCSeconds()`** retorna os segundos na data informada de acordo com a hora universal.

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html")}}

## Sintaxe

```
dateObj.getUTCSeconds()
```

### Valor de retorno

Um número inteiro, entre 0 e 59, representando os segundos da data informada de acordo com a hora universal.

## Exemplos

### Usando `getUTCSeconds()`

The following example assigns the seconds portion of the current time to the variabl

O exemplo a seguir atribui a parte dos segundos da hora atual à variável `seconds`.

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## Especificações

| Especificação                                                                                | Estado               | Comentário                                         |
| -------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                          | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.23', 'Date.prototype.getUTCSeconds')}}                      | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getUTCSeconds")}}

## Veja também

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}

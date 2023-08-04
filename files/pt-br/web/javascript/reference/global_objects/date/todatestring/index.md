---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
---

{{JSRef}}

O método **`toDateString()`** retorna a porção da data de um objeto {{jsxref("Date")}} em um formato legível para humanos em inglês dos Estados Unidos.

## Sintaxe

```
objetoDate.toDateString()
```

## Descrição

Exemplares de {{jsxref("Date")}} referem-se a um ponto específico no tempo. Chamar {{jsxref("Date.prototype.toString()", "toString()")}} retorna a data num formato legível para humanos em inglês dos Estados Unidos. No [SpiderMonkey](/pt-BR/docs/SpiderMonkey), isso consiste na porção da data (dia, mês e ano) seguida pela porção da hora (horas, minutos, segundos e fuso horário). Ás vezes, deseja-se obter uma string apenas da porção da data; Isso pode ser conseguido com o método `toDateString()`.

`O método toDateString()` é especialmente útil porque motores que implementam o padrão [ECMA-262](/pt-BR/docs/ECMAScript) podem divergir na string retornada pelo {{jsxref("Date.prototype.toString()", "toString()")}} de objetos {{jsxref("Date")}} , pois o formato é dependente da implentação e abordagens simples que repartem a string podem não produzir resultados consistentes nos vários motores.

## Exemplos

### Um uso básico de `toDateString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString()); // exibe Wed Jul 28 1993 14:39:07 GMT-0600 (PDT) no log
console.log(d.toDateString()); // exibe Wed Jul 28 1993 no log
```

## Especificações

| Especificação                                                                              | Situação             | Comentário         |
| ------------------------------------------------------------------------------------------ | -------------------- | ------------------ |
| {{SpecName('ES3')}}                                                                        | {{Spec2('ES3')}}     | Definição inicial. |
| {{SpecName('ES5.1', '#sec-15.9.5.3', 'Date.prototype.toDateString')}}                      | {{Spec2('ES5.1')}}   |                    |
| {{SpecName('ES6', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}}     | {{Spec2('ES6')}}     |                    |
| {{SpecName('ESDraft', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toDateString")}}

## Ver também

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}

---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef}}

O método **`getMinutes()`** retorna os minutos em uma data específica de acordo com o horário local.

## Sintaxe

```
dateObj.getMinutes()
```

### Retorna

Um número inteiro, entre 0 e 59, representando os minutos em uma data de acordo com o horário local.

## Exemplos

### Usando o `getMinutes()`

The second statement below assigns the value 15 to the variable `minutes`, based on the value of the {{jsxref("Global_Objects/Date", "Date")}} object `Xmas95`.

No exemplo abaixo, a segunda linha atribui o valor 15 à variável `minutes`, baseado no valor de objeto {{jsxref("Global_Objects/Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

## Especificações

| Specification                                                                          | Status               | Comment                                            |
| -------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                    | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.20', 'Date.prototype.getMinutes')}}                   | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getminutes', 'Date.prototype.getMinutes')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.getminutes', 'Date.prototype.getMinutes')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getMinutes")}}

## Veja também

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}

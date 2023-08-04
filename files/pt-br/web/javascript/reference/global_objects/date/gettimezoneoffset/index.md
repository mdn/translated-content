---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
---

{{JSRef}}

O método **`getTimezoneOffset()`** retorna a diferença, em minutos, do deslocamento de fuso horário entre o UTC (Tempo Universal Coordenado) e a localidade atual.

## Sintaxe

```
dateObj.getTimezoneOffset()
```

### Parâmetros

Nenhum

### Valor de retorno

O deslocamento de fuso horário é a diferença, em minutos, entre o UTC (Tempo Universal Coordenado) e o horário local. Perceba que isto significa que o deslocamento será negativo se o fuso horário local está à direita do UTC e positivo se está a esquerda. Por exemplo, se seu fuso horário é UTC+10(Padrão da Austrália Oriental), -600 será retornado. O Horário de verão evita que este valor seja sempre o mesmo para uma determinada localidade.

Exemplo

### Utilizando `getTimezoneOffset()`

```js
var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
```

## Especificações

| Especificação                                                                                    | Situação           | comentário                                         |
| ------------------------------------------------------------------------------------------------ | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                              | {{Spec2('ES1')}}   | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.26', 'Date.prototype.getTimezoneOffset')}}                      | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.gettimezoneoffset', 'Date.prototype.getTimezoneOffset')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getTimezoneOffset")}}

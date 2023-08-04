---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---

{{JSRef}}

O método **`toUTCString()`** converte uma data para uma cadeia de caracteres (_string_), usando o fuso horário UTC.

Baseado na [RFC7231](https://tools.ietf.org/html/rfc7231#section-7.1.1.1) e modificado de acordo com a [ECMA-262 toUTCString](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-date.prototype.toutcstring), ele pode ter valores negativos na [versão de 2021](https://tc39.es/ecma262/#sec-date.prototype.toutcstring).

{{EmbedInteractiveExample("pages/js/date-toutcstring.html","shorter")}}

## Sintaxe

```
dateObj.toUTCString()
```

### Valor de retorno

Uma _string_ representando a data usando o fuso horário UTC.

## Descrição

O valor retornado por `toUTCString()` é uma _string_ no formato `Www, dd Mmm yyyy hh:mm:ss GMT`, onde:

| Formato da String | Descrição                                                        |
| ----------------- | ---------------------------------------------------------------- |
| `Www`             | Dia da semana, em três letras (e.g. Sun, Mon, ...)               |
| `dd`              | Dia do mês, como dois dígitos com zero à esquerda se requisitado |
| `Mmm`             | Mês, em três letras (e.g. Jan, Feb, ...)                         |
| `yyyy`            | Ano, como 4 ou mais dígitos com zeros à esquerda se requisitado  |
| `hh`              | Hora, como dois dígitos com zero à esquerda se requisitado       |
| `mm`              | Minutos, como dois dígitos com zero à esquerda se requisitado    |
| `ss`              | Segundos, como dois dígitos com zero à esquerda se requisitado   |

Antes do ECMAScript 2018, o formato do valor de retorno variava de acordo com a plataforma. O valor de retorno mais comum era um carimbo de data formatada na RFC-1123, que é uma versão relativamente atualizada dos carimbos de data da RFC-822.

## Exemplos

### Usando `toUTCString()`

```js
let today = new Date("Wed, 14 Jun 2017 00:00:00 PDT");
let UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

## Especificações

| Especificação                                                                            |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.toutcstring', 'Date.prototype.toUTCString')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toUTCString")}}

## Veja também

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}

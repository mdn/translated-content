---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---

{{JSRef}}

O método **`toISOString()`** retorna uma cadeia de caracteres (_string_) simplificada no formato ISO extendido ([ISO 8601](http://en.wikipedia.org/wiki/ISO_8601)), que é sempre 24 ou 27 caracteres de tamanho (`YYYY-MM-DDTHH:mm:ss.sssZ` ou `±YYYYYY-MM-DDTHH:mm:ss.sssZ`, respectivamente). O fuso horário é sempre o deslocamento zero UTC, como denotado pelo sufixo "`Z`".

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## Sintaxe

```
dateObj.toISOString()
```

### Valor de retorno

Uma _string_ representando a data no formato [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) de acordo com o horário universal.

## Polyfill

Este método foi padronizado na quinta edição da ECMA-262. Motores que não foram atualizados para suportar este método podem funcionar com uma gambiarra na ausência deste método da seguinte forma:

```js
if (!Date.prototype.toISOString) {
  (function () {
    function pad(number) {
      if (number < 10) {
        return "0" + number;
      }
      return number;
    }

    Date.prototype.toISOString = function () {
      return (
        this.getUTCFullYear() +
        "-" +
        pad(this.getUTCMonth() + 1) +
        "-" +
        pad(this.getUTCDate()) +
        "T" +
        pad(this.getUTCHours()) +
        ":" +
        pad(this.getUTCMinutes()) +
        ":" +
        pad(this.getUTCSeconds()) +
        "." +
        (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        "Z"
      );
    };
  })();
}
```

## Exemplos

### Usando `toISOString()`

```js
let today = new Date("05 October 2011 14:48 UTC");

console.log(today.toISOString()); // Retorna 2011-10-05T14:48:00.000Z
```

O exemplo acima usa uma conversão de uma _string_ não-padrão que pode não ser convertida corretamente em navegadores que não sejam da Mozilla..

## Especificações

| Especificação                                                                            |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.toisostring', 'Date.prototype.toISOString')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toISOString")}}

## Veja também

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}

---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
---

{{JSRef("Global_Objects", "Date")}}

## Resumo

O método **`Date.parse()`** analisa uma representação de data em _string_, e retorna o número de milisegundos desde 01 de Janeiro de 1970, 00:00:00 UTC ou NaN se a string não for reconhecida ou, em alguns casos, contiver valores inválidos de data (ex. 2015-02-31).

O uso de `Date.parse` não é recomendado, uma vez que até ES5 a análise de strings era inteiramente dependente de implementação. Ainda existem muitas diferenças de como diferentes plataformas analisam strings de data, então strings de data devem ser manualmente analisadas (uma biblioteca pode ajudar caso seja necessário atender a vários formatos)

## Sintaxe

Chamada direta:

```
Date.parse(dateString)
```

Chamada implícita:

```
new Date(dateString)
```

### Parâmetros

- `dateString`
  - : Uma _string_ de representação de datas no format [RFC2822](http://tools.ietf.org/html/rfc2822#page-14) ou ISO 8601 (outros formatos podem ser utilizados, mas os resultados podem não ser os esperados).

## Descrição

O método `parse()` analisa uma _string_ de data (como `"Dec 25, 1995"`) e retorna o número de milisegundos desde 01 de Janeiro de 1970, 00:00:00 UTC. Esta função é útil para definir valores de data baseados em valores de _string_, por exemplo em conjunto com o método {{jsxref("Date.prototype.setTime()", "setTime()")}} e o objeto {{jsxref("Global_Objects/Date", "Date")}}.

Dada uma string representando um tempo, `parse()` retorna o valor temporal. É aceito o RFC2822 / IETF sintaxe de data ([RFC2822 Section 3.3](http://tools.ietf.org/html/rfc2822#page-14)), ex.: `"Mon, 25 Dec 1995 13:30:00 GMT"`. A função entende as abreviações dos fusos horários continentais dos EUA, mas para uso geral, use um deslocamento de fuso horário, por exemplo, `"Seg, 25 Dez 1995 13:30:00 +0430"` (4 horas, 30 minutos à leste do Meridiano de Greenwich). Se o fuso horário não é especificado e a string está em um formato ISO reconhecido pela ES5, então é adotado o formato UTC (Tempo Universal Coordenado). GMT e UTC são considerados equivalentes. O fuso horário do seu horário local é usado para interpreatar argumentos na [RFC2822 Formato 3.3](http://tools.ietf.org/html/rfc2822#page-14) (ou qualquer formato não reconhecido como ISO 8601 na ES5) que não contenha informação de fuso horário.

### Suporte ao formato ECMAScript 5 ISO-8601

_Astring_ Data e hora pode ser no formato [ISO 8601](https://www.w3.org/TR/NOTE-datetime). Por exemplo, `"2011-10-10"` (apenas data) ou `"2011-10-10T14:48:00"` (data e hora) podem ser passados ou convertidos. O fuso horario UTC é usado para interpretar argumentos no formato [ISO 8601](https://www.w3.org/TR/NOTE-datetime) que não contenham informação de fuso horário (note que [ECMAScript ed 6 draft](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-date-time-string-format) especifica que a _string_ do tipo data e hora sem um fuso horário são tratados como data local, não UTC).

While time zone specifiers are used during date string parsing to interpret the argument, the value returned is always the number of milliseconds between January 1, 1970 00:00:00 UTC and the point in time represented by the argument.

Because `parse()` is a static method of {{jsxref("Global_Objects/Date", "Date")}}, it is called as `Date.parse()` rather than as a method of a {{jsxref("Global_Objects/Date", "Date")}} instance.

### Differences in assumed time zone

Given a date string of `"March 7, 2014"`, `parse()` assumes a local time zone, but given an ISO format such as `"2014-03-07"` it will assume a time zone of UTC. Therefore {{jsxref("Global_Objects/Date", "Date")}} objects produced using those strings will represent different moments in time unless the system is set with a local time zone of UTC. This means that two date strings that appear equivalent may result in two different values depending on the format of the string that is being converted (this behavior is changed in ECMAScript ed 6 so that both will be treated as local).

### Fall-back to implementation-specific date formats

The ECMAScript specification states: If the String does not conform to the standard format the function may fall back to any implementation–specific heuristics or implementation–specific parsing algorithm. Unrecognizable strings or dates containing illegal element values in ISO formatted strings shall cause `Date.parse()` to return {{jsxref("Global_Objects/NaN", "NaN")}}.

However, invalid values in date strings not recognized as ISO format as defined by ES5 may or may not result in {{jsxref("Global_Objects/NaN", "NaN")}}, depending on the browser and values provided, e.g.:

```js
// Non-ISO string with invalid date values
new Date("23/25/2014");
```

will be treated as a local date of 25 November, 2015 in Firefox 30 and an invalid date in Safari 7. However, if the string is recognized as an ISO format string and it contains invalid values, it will return {{jsxref("Global_Objects/NaN", "NaN")}} in all browsers compliant with ES5:

```js
// ISO string with invalid values
new Date("2014-25-23").toISOString();
// returns "RangeError: invalid date" in all es5 compliant browsers
```

SpiderMonkey's implementation-specific heuristic can be found in [`jsdate.cpp`](http://mxr.mozilla.org/mozilla-central/source/js/src/jsdate.cpp?rev=64553c483cd1#889). The string `"10 06 2014"` is an example of a non–conforming ISO format and thus falls back to a custom routine. See also this [rough outline](https://bugzilla.mozilla.org/show_bug.cgi?id=1023155#c6) on how the parsing works.

```js
new Date("10 06 2014");
```

will be treated as a local date of 6 October, 2014 and not 10 June, 2014. Other examples:

```js
new Date("foo-bar 2014").toString();
// returns: "Invalid Date"

Date.parse("foo-bar 2014");
// returns: NaN
```

## Examples

### Example: Using `Date.parse()`

If `IPOdate` is an existing {{jsxref("Global_Objects/Date", "Date")}} object, it can be set to August 9, 1995 (local time) as follows:

```js
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

Some other examples of parsing non–standard date strings:

```js
Date.parse("Aug 9, 1995");
```

Returns `807937200000` in time zone GMT-0300, and other values in other time zones, since the string does not specify a time zone and is not ISO format, therefore the time zone defaults to local.

```js
Date.parse("Wed, 09 Aug 1995 00:00:00 GMT");
```

Returns `807926400000` no matter the local time zone as GMT (UTC) is provided.

```js
Date.parse("Wed, 09 Aug 1995 00:00:00");
```

Returns `807937200000` in time zone GMT-0300, and other values in other time zones, since there is no time zone specifier in the argument and it is not ISO format, so is treated as local.

```js
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
```

Returns `0` no matter the local time zone as a time zone GMT (UTC) is provided.

```js
Date.parse("Thu, 01 Jan 1970 00:00:00");
```

Returns `14400000` in time zone GMT-0400, and other values in other time zones, since no time zone is provided and the string is not in ISO format, therfore the local time zone is used.

```js
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT-0400");
```

Returns `14400000` no matter the local time zone as a time zone GMT (UTC) is provided.

## Specifications

| Specification                                        | Status             | Comment                                            |
| ---------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition.                              | Standard           | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.4.2', 'Date.parse')}} | {{Spec2('ES5.1')}} | ISO 8601 format added.                             |
| {{SpecName('ES6', '#sec-date.parse', 'Date.parse')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.parse")}}

## See also

- {{jsxref("Date.UTC()")}}

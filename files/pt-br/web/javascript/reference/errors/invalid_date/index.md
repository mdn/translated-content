---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
---

{{jsSidebar("Errors")}}

## Mensagem

```
RangeError: invalid date (Firefox)
RangeError: invalid time value (Chrome)
RangeError: Provided date is not in valid range (Chrome)
```

## Tipo de erro

{{jsxref("RangeError")}}

## O que houve de errado?

Uma string apontando para uma data inválida foi disponibilizada para {{jsxref("Date")}} ou {{jsxref("Date.parse()")}}.

## Exemplos

### Casos inválidos

Strings irreconhecíveis ou data contendo elementos de strings formatadas com valores ISO ilegais, geralmente retornam {{jsxref("NaN")}}. No entanto, dependendo da implementação, strings com formatos em não conformidade ISO, também podem disparar `RangeError: invalid date`, como os seguintes casos no Firefox:

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

Isto, no entanto, retorna {{jsxref("NaN")}} no Firefox:

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

Para mais detalhes, veja a documentação {{jsxref("Date.parse()")}}.

### Casos válidos

```js example-good
new Date("05 October 2011 14:48 UTC");
```

## Veja também

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}

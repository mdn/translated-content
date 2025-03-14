---
title: "RangeError: precision is out of range"
slug: Web/JavaScript/Reference/Errors/Precision_range
---

{{jsSidebar("Errors")}}

A exceção JavaScript "precision is out of range" (precisão fora de alcance) ocorre quando um número que está fora do intervalo que vai de 0 à 20 (ou 21) foi passado para `toFixed` ou `toPrecision`.

## Mensagem

```
RangeError: The number of fractional digits is out of range (Edge)
RangeError: The precision is out of range (Edge)
RangeError: precision {0} out of range (Firefox)
RangeError: toExponential() argument must be between 0 and 20 (Chrome)
RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
```

## Tipo de erro

{{jsxref("RangeError")}}

## O que houve de errado?

Existe um argumento de precisão fora do intervalo em um desses métodos:

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}

Po padrão, o intervalo permitido para os métodos acima é de 0 à 20 (ou 21). Todavia, a especificação ECMAScript nos permite extender o intervalo.

| Método                                         | Firefox (SpiderMonkey) | Chrome, Opera (V8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxref("Number.prototype.toExponential()")}} | 0 to 100               | 0 to 20            |
| {{jsxref("Number.prototype.toFixed()")}}       | -20 to 100             | 0 to 20            |
| {{jsxref("Number.prototype.toPrecision()")}}   | 1 to 100               | 1 to 21            |

## Exemplos

### Casos inválidos

```js example-bad
(77.1234).toExponential(-1); // RangeError
(77.1234).toExponential(101); // RangeError

(2.34).toFixed(-100); // RangeError
(2.34).toFixed(1001); // RangeError

(1234.5).toPrecision(-1); // RangeError
(1234.5).toPrecision(101); // RangeError
```

### Casos válidos

```js example-good
(77.1234).toExponential(4); // 7.7123e+1
(77.1234).toExponential(2); // 7.71e+1

(2.34).toFixed(1); // 2.3
(2.35).toFixed(1); // 2.4 (perceba que ele foi arredondado nesse caso)

(5.123456).toPrecision(5); // 5.1235
(5.123456).toPrecision(2); // 5.1
(5.123456).toPrecision(1); // 5
```

## Veja também

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}

---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---

{{JSRef}}

O método **`toExponential()`** retorna uma string representando o objeto {{jsxref("Global_Objects/Number", "Number")}} por meio de notação exponencial.

## Syntax

```
numObj.toExponential([fractionDigits])
```

### Parameters

- `fractionDigits`
  - : Optional. An integer specifying the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number.

### Return value

A string representing the given {{jsxref("Number")}} object in exponential notation with one digit before the decimal point, rounded to `fractionDigits` digits after the decimal point.

### Exceptions

- {{jsxref("RangeError")}}
  - : If `fractionDigits` is too small or too large. Values between 0 and 20, inclusive, will not cause a {{jsxref("RangeError")}}. Implementations are allowed to support larger and smaller values as well.
- {{jsxref("TypeError")}}
  - : If this method is invoked on an object that is not a {{jsxref("Number")}}.

## Description

If the `fractionDigits` argument is omitted, the number of digits after the decimal point defaults to the number of digits necessary to represent the value uniquely.

If you use the `toExponential()` method for a numeric literal and the numeric literal has no exponent and no decimal point, leave whitespace(s) before the dot that precedes the method call to prevent the dot from being interpreted as a decimal point.

If a number has more digits than requested by the `fractionDigits` parameter, the number is rounded to the nearest number represented by `fractionDigits` digits. See the discussion of rounding in the description of the {{jsxref("Number.prototype.toFixed", "toFixed()")}} method, which also applies to `toExponential()`.

## Examples

### Using `toExponential`

```js
var numObj = 77.1234;

console.log(numObj.toExponential()); // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log((77.1234).toExponential()); // logs 7.71234e+1
console.log((77).toExponential()); // logs 7.7e+1
```

## Specifications

| Specification                                                                                    | Status               | Comment                                            |
| ------------------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                                              | {{Spec2('ES3')}}     | Initial definition. Implemented in JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.6', 'Number.prototype.toExponential')}}                         | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-number.prototype.toexponential', 'Number.prototype.toExponential')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-number.prototype.toexponential', 'Number.prototype.toExponential')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.toExponential")}}

## See also

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}

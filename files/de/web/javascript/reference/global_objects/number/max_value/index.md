---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---
{{JSRef}}

Die **`Number.MAX_VALUE`** Eigenschaft repräsentiert den größten nummerische Wert, der in JavaScript repräsentiert werden kann.

{{EmbedInteractiveExample("pages/js/number-maxvalue.html")}}{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die `MAX_VALUE` Eigenschaft hat einen ungefähren Wert von `1.79E+308` (<math><semantics><mrow><mn>1</mn><mo>,</mo><mn>79</mn><mo>⋅</mo><msup><mn>10</mn><mn>308</mn></msup></mrow><annotation encoding="TeX">1,79 \cdot 10^{308}</annotation></semantics></math>). Werte die größer sind, werden als "`Infinity`" (unendlich) repräsentiert.

Weil `MAX_VALUE` eine statische Eigenschaft von {{jsxref("Number")}} ist, wird sie immer mit `Number.` `MAX_VALUE` abgerufen, im Gegensatz zu einer Eigenschaft eines {{jsxref("Number")}} Objektes, was erstellt wurde.

## Beispiele

### Einsatz von `MAX_VALUE`

Im folgenden Quelltext werden zwei nummerische Werte multipliziert. Wenn das Ergebnis kleiner oder gleich `MAX_VALUE` ist, wird `func1()` ausgeführt; andernfalls wird `func2()`ausgeführt.

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.2', 'Number.MAX_VALUE')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.max_value', 'Number.MAX_VALUE')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.max_value', 'Number.MAX_VALUE')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.MAX_VALUE")}}

## Siehe auch

- {{jsxref("Number.MIN_VALUE")}}
- {{jsxref("Number")}}

---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
---
{{JSRef}}

Die **`Number.MIN_VALUE`** Eigenschaft repräsentiert den kleinsten nummerische Wert größer als 0, der in JavaScript repräsentiert werden kann.

{{EmbedInteractiveExample("pages/js/number-min-value.html")}}{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die `MIN_VALUE` Eigenschaft ist die die am nächsten an 0 liegende positive Zahl, die JavaScript repräsentieren kann (nicht die kleinste negative Zahl).

`MIN_VALUE` hat einen ungefähren Wert von <math><semantics><mrow><mn>5</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>324</mn></mrow></msup></mrow><annotation encoding="TeX">5 \cdot 10^{-324}</annotation></semantics></math>. Zahlen die zwischen `MIN_VALUE` und 0 liegen ( "underflow values" werden zu 0 konvertiert`.`

Weil `MIN_VALUE` eine statische Eigenschaft von {{jsxref("Number")}} ist, wird sie immer mit `Number.` `MIN_VALUE` abgerufen, im Gegensatz zu einer Eigenschaft eines {{jsxref("Number")}} Objektes, was erstellt wurde.

## Beispiele

### Einsatz von `MIN_VALUE`

Im folgenden Quelltext werden zwei nummerische Werte dividiert. Wenn das Ergebnis größer oder gleich `MIN_VALUE` ist, wird `func1()` ausgeführt; andernfalls wird `func2() `ausgeführt.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
  func1();
} else {
  func2();
}
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.3', 'Number.MIN_VALUE')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.min_value', 'Number.MIN_VALUE')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.min_value', 'Number.MIN_VALUE')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.MIN_VALUE")}}

## Siehe auch

- {{jsxref("Number.MAX_VALUE")}}

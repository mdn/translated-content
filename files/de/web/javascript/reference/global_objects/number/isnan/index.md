---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---
{{JSRef}}

Die **`Number.isNaN()`** Methode stellt fest, ob der Übergabewert {{jsxref("NaN")}} ist und der Typ des Parameters {{jsxref("Number")}} ist . Dieses ist eine robustere Version der globalen Methode {{jsxref("isNaN", "isNaN()")}}

{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}

## Syntax

    Number.isNaN(testWert)

### Parameter

- `testWert`
  - : Der Wert, der auf {{jsxref("NaN")}} getestet werden soll.

### Rückgabewert

**true** wenn der Wert {{jsxref("NaN")}} und der Typ {{jsxref("Number")}} ist. Anderfalls **false**.

## Beschreibung

Weil beide Gleichheitsoperatoren, {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} und {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}, den Vergleich, ob {{jsxref("NaN")}} _gleich_ {{jsxref("NaN")}} ist, zu `false `auswerten, hat die Methode `Number.isNaN()` an Bedeutung gewonnen. Diese Situation ist anders als bei allen anderen Vergleichen von Werten in JavaScript.

Im Vergleich zu der globalen Methode {{jsxref("isNaN", "isNaN()")}} hat die Methode `Number.isNaN()` nicht das Problem, dass Werte zu einer Nummer konvertiert werden. Das bedeutet, das Werte, die normalerweise zu {{jsxref("NaN")}} konvertiert würden, aber momentan nicht dem Wert {{jsxref("NaN")}} entsprechen, ohne Probleme der Methode übergeben werden können. Das wiederum bedeutet, dass nur Werte vom Typ {{jsxref("Number")}}, die zudem {{jsxref("NaN")}} entsprechen `true `als Resultat haben.

## Beispiele

```js
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// Beispiele, bei denen isNaN() true zurück gibt
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// Diese alle geben false zurück
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
```

## Polyfill

Das Folgende funktioniert, weil `NaN` der einzige Wert ist, welcher nicht gleich mit sich selbst ist.

```js
Number.isNaN = Number.isNaN || function(value) {
    return value !== value;
}
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar            |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-number.isnan', 'Number.isnan')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.isnan', 'Number.isnan')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.isNaN")}}

## Siehe auch

- {{jsxref("Number")}}
- {{jsxref("isNaN", "isNaN()")}}

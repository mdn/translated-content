---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---
{{JSRef}}

Die **`Number.isSafeInteger()`** Methode prüft, ob der übergebene Wert eine Nummer ist, die ein sichere ganze Zahl ist.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

Eine sichere ganze Zahl ist

- eine Zahl, die exakt als IEEE-754 double precision Zahl repräsentiert werden kann, und
- eine Zahl, deren IEEE-754 Repräsentation nicht das Ergebnis von Rundungen anderer ganzer Zahlen sein kann.

Zum Beispiel ist `253 - 1` eine sichere ganze Zahle: sie kann exakt repräsentiert werden und keine andere ganze Zahl wird in jedem IEEE-754 Rundungsmodus zu ihr gerundet. Im gegensatz dazu ist `253` keine sichere ganze Zahl: Sie kann in IEEE-754 exakt repräsentiert werden, jedoch wird die ganze Zahl `253 + 1` kann nicht exakt repräsentiert werden und wird zu `253 `in den Modus _zum nächsten Runden_ und _zu null runden_ gerundet. Die sicheren ganzen Zahlen sind alle ganzen Zahlen im Bereich von `-(253 - 1)` inklusiv und `253 - 1` inklusiv.

Der Einsatz von Zahlen größer \~9 Biliarden oder kleiner \~-9 Biliarder mit voller Präzision benötigen eine [Langzahlarythmetik Bibliothek](https://de.wikipedia.org/wiki/Langzahlarithmetik). Mehr Informationen über die Repräsentation von Gleitkommazahlen gibt es in dem Artikel [What Every Programmer Needs to Know about Floating Point Arithmetic](http://floating-point-gui.de/).

## Syntax

    Number.isSafeInteger(testValue)

### Parameter

- `testValue`
  - : Wert der getestet wird, ob er ein sichere ganze Zahl ist.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob die übergebenen Zahl eine sichere ganze Zahl ist oder nicht.

## Beispiele

```js
Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true
```

## Polyfill

```js
Number.isSafeInteger = Number.isSafeInteger || function (value) {
   return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-number.issafeinteger', 'Number.isSafeInteger')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.issafeinteger', 'Number.isSafeInteger')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.isSafeInteger")}}

## Siehe auch

- Das {{jsxref("Number")}} Objekt.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}

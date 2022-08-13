---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
tags:
  - JavaScript
  - Method
  - Number
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---
{{JSRef}}

Die Methode **`Number.isFinite()`** stellt fest, ob ein Wert endlich ist oder nicht.

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## Syntax

    Number.isFinite(testWert)

### Parameter

- ` test``Wert `
  - : Wert, der auf Endlichkeit getestet wird.

### Rückgabewert

Ein {{jsxref("Boolean")}} der beschreibt, ob eine Zahl endlich oder nicht endlich ist.

## Beschreibung

Im Vergleich zu der globalen Funktion {{jsxref("isFinite", "isFinite()")}}, werden übergeben Wert nicht in eine Zahl konvertiert. Das bedeutet, dass nur Werte vom Typ number die endlich sind `true` als Resultat haben.

## Beispiele

```js
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false, würde mit der globalen
                            // Funktion isFinite('0') true ergeben
Number.isFinite(null);      // false, würde mit der globalen
                            // Funktion isFinite(null) true ergeben
```

## Polyfill

```js
Number.isFinite = Number.isFinite || function(value) {
    return typeof value === 'number' && isFinite(value);
}
```

## Spezifikationen

| Spezifikation                                                                            | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-number.isfinite', 'Number.isInteger')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.isfinite', 'Number.isInteger')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.isFinite")}}

## Siehe auch

- Das {{jsxref("Number")}} Objekt.
- Die globale Funktion {{jsxref("isFinite")}}.

---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
tags:
  - ECMAScript 2015
  - Experimental
  - Expérimental(2)
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/is
---
{{JSRef("Global_Objects", "Object")}}

## Zusammenfassung

Die **`Object.is()`** Methode entscheidet, ob zwei Werte [die gleichen Werte sind](/de/docs/Web/JavaScript/Guide/Sameness).

## Syntax

    var isSame = Object.is(value1, value2);

### Parameter

- `value1`
  - : Der erste Wert zum vergleichen.
- `value2`
  - : Der zweite Wert zum vergleichen.

## Beschreibung

`Object.is()` bestimmt, ob zwei Werte [_gleich sind_](/de/docs/Web/JavaScript/Guide/Sameness). Dabei gelten zwei Werte genau dann als gleich, wenn eine der folgenden Bedingungen zutrifft:

- beide sind `undefined`
- beide sind `null`
- beide sind `true` oder beide sind `false`
- beide sind Strings mit selber Länge und den selben Zeichen
- beide sind das selbe Objekt
- beide sind Zahlen und eine der folgenden Bedingungen trifft zu:

  - beide sind `+0`
  - beide sind `-0`
  - beide sind `NaN`
  - beide sind nicht Null, beide sind nicht `NaN` und beide haben den selben Zahlenwert

Dies ist _nicht_ das selbe wie der `==`-Operator. Dieser verwendet verschiedene, situationsabhängige Typ-Umwandlungen auf beiden Seiten bevor auf Gleichheit getestet wird (was z.B. dazu führt, dass der Ausdruck `"" == false` zu `true` ausgewertet wird). `Object.is` hingegen wandelt keinen der beiden Werte um.

Es ist ebenfalls nicht das selbe wie der strikte `===`-Operator. Dieser – ebenso wie der `==`-Operator – behandelt zum Beispiel `+0` und `-0` als identisch während `NaN` und `NaN` als nicht identisch behandelt werden.

## Beispiele

```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

Object.is(null, null);       // true

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

## Polyfill

`Object.` ist eine vorgeschlagene Ergänzung des ECMA-262 Standard; als solcher könnte dieser nicht von allen Browser verstanden werden. Du kannst drum herum arbeiten, indem du den folgenden Code an den Anfang deines Scripts packst. Das erlaubt dir die `Object.is Methode` zu verwenden, auch wenn es keine eingebaute Unterstützung dafür gibt.

    if (!Object.is) {
      Object.is = function(x, y) {
        // SameValue algorithm
        if (x === y) { // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
         // Step 6.a: NaN == NaN
         return x !== x && y !== y;
        }
      };
    }

## Spezifikationen

| Spezifikation                                                            | Status                   | Kommentar           |
| ------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('ES2015', '#sec-object.is', 'Object.is')}} | {{Spec2('ES2015')}} | Initial definition. |

## Browserkompatibilität

{{Compat("javascript.builtins.Object.is")}}

## Siehe auch

- [JavaScript Guide: Sameness](/de/docs/Web/JavaScript/Guide/Sameness) — ein Vergleich aller drei eingebauten Gleichheitseinrichtungen

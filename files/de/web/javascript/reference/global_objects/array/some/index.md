---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript5
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/some
---
{{JSRef}}

Die Methode **`some()`** überprüft ob mindestens ein Element des Arrays den als Funktion übergebenen Kriterien entspricht.

> **Hinweis:** Diese Methode gibt `false` für jede Bedingung auf einem leeren Array zurück.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## Syntax

    arr.some(callback[, thisArg])

### Parameter

- `callback`
  - : Funktion die jedes Element überprüft, nimmt drei Argumente entgegen:_ `currentValue`
    _ : Das aktuell zu verarbeitende Element des Arrays.
    - `index`{{Optional_inline}}
      - : Der Index des aktuell zu verarbeitenden Elementes im Array.
    - `array`{{Optional_inline}}
      - : Die Arrayinstanz auf welcher die `some()` Methode aufgerufen wurde.
- `thisArg`{{Optional_inline}}
  - : Wert der über das `this` Schüsselwort innerhalb von `callback` verfügbar ist.

### Rückgabewert

**`true`** wenn die callback Methode ein positives ({{Glossary("truthy")}}) Ergebnis für eines der Elemente im array ermittelt hat; Andernfalls, **`false`**.

## Beschreibung

`some()` führt die `callback` Funktion einmal für jedes Element innerhalb des Arrays aus, bis ein Element gefunden wird, bei dem `callback` einen _truthy_ Wert (\_e_in Wert der durch die Konvertierung zu boolean true ergibt) zurückgibt. Wird ein solches Element gefunden, gibt `some()` sofort `true` zurück. `callback` wird nur für Elemente des Arrays ausgeführt, die einen zugewiesenen Wert haben; Für undefinierte oder gelöschte Elemente des Arrays wird `callback` nicht ausgeführt.

`callback` wird mit drei Argumenten aufgerufen: Dem Wert des Elementes, dem Index des Elementes und dem zugrundeliegenden `Array`.

WIrd ein `thisArg` Parameter an die `some()` Methode übergeben, wird dieser als `this` bei der `callback` Funtion benutzt. Andernfalls wird der Wert {{jsxref("undefined")}} als `this` benutzt. Der tatsächliche Wert von `this` wird entsprechend der [generellen Regeln zur Belegung des this Schlüsselwortes innerhalb von Funktionen](/de/docs/Web/JavaScript/Reference/Operators/this)gesetzt.

`some()` verändert nicht das Array auf dem die Methode aufgerufen wurde.

Die von `some()` zu verarbeitenden Elemente werden vor dem ersten Aufruf von `callback` ermittelt. Elemente, die nach dem Aufruf von `some()` zum Array hinzugefügt werden, werden nicht mit `callback` aufgerufen. Wird ein noch nicht besuchtes Element des Arrays durch `callback` geändert, wird sein Wert, der an `callback` übermittelt wird, der Wert zu dem Zeitpunkt, zu dem `some()` den Index besucht, sein. Wird ein Element aus dem Array gelöscht, wird es nicht betrachtet.

## Beispiele

### Werte eines Arrays überprüfen

Die folgenden Beispiele prüfen ob es ein Element größer als 10 im Array gibt.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Werte eines Arrays mit arrow functions überprüfen

[Arrow Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ermöglichen eine kürzere Schreibweise für die gleiche Logik.

```js
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```

### Prüfen ob ein Element in einem Array existiert

Um die Methode `includes()` nachzuahmen, gibt die folgende Funktion `true` zurück, wenn das Element im Array existiert:

```js
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

### Prüfen ob ein Element in einem Array existiert mit einer arrow function

```js
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

### Jeden Wert in einen boolschen Wert konvertieren

```js
var TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(a) {
  'use strict';

  var value = a;

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
```

## Polyfill

`some()` wurde im Rahmen des ECMA-262 Standards in der 5. Edition hinzugefügt. Daher kann es sein, dass es nicht in allen Implementierungen des Standards enthalten ist. Diese Problem kann behoben werden, indem folgenden Quelltext vor Ihren Skripten eingefügt wird, wodurch Sie die `some()` Methode in Ihrem Programmcode verwenden können. Die nachfolgende Implementierung ist eine exakte Abdeckung der ECMA-262 Spezifikation in der 5. Edition, basierend auf der Annahme dass {{jsxref("Object")}} und {{jsxref("TypeError")}} Originalwerte aufweisen und dass `fun.call` den Originalwert von {{jsxref("Function.prototype.call()")}} liefert.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun/*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.17', 'Array.prototype.some')}}                 | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.some', 'Array.prototype.some')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.some', 'Array.prototype.some')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.some")}}

## Siehe auch

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}

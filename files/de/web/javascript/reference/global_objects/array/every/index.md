---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/every
---
{{JSRef}}

Die **`every()`** Methode testet ob alle Elemente in einem Array einen Test bestehen, welcher mittels einer implementierten Funktion bereitgestellt wird.

> **Note:** Hinweis: Diese Methode gibt `true` für jede Bedingung bei einem leeren Array zurück.

{{EmbedInteractiveExample("pages/js/array-every.html")}}

## Syntax

    arr.every(callback[, thisArg])

### Parameter

- `callback`
  - : Funktion welche jedes Element testet, mit drei Argumenten:_ `currentValue` (required)
    _ : Der aktuelle Wert des Arrays.
    - `index`{{Optional_inline}}
      - : Der Index des aktuellen Elementes im Array.
    - `array`{{Optional_inline}}
      - : Das Array auf welchem `every` aufgerufen wurde.
- `thisArg`{{Optional_inline}}
  - : Optional. Wert welcher als `this` in der `callback `Funktion benutzt wird.

### Rückgabewert

**`true`** wenn die callback-Funktion einen {{Glossary("truthy")}} Wert für jedes Array-Element zurückgibt, andernfalls **`false`**.

## Beschreibung

Die `every` Methode führt die übergebene `callback` Funktion für jedes Element in dem Array aus, solange die `callback` Funktion keinen {{Glossary("falsy")}} Wert zurückgibt. Wenn ein solches Element gefunden wird gibt die `every` Methode `false` zurück. Anderfalls, wenn` callback` für jedes Element einen {{Glossary("truthy")}} Wert zurück gibt, gibt die Funktion `every` `true` zurück. Die `callback` Funktion wird nur für Indizes im Array aufgerufen, denen ein Wert zugewiesen wurde; sie wird nicht aufgerufen für Indizes, die gelöscht wurden, oder welche, die nie beschrieben wurden.

Die `callback` Funktion wird mit drei Argumenten aufgerufen: Der Wert eines Elements, der Index des Elements und Array auf dem `every` aufgerufen wurde.

Wenn der `thisArg` Parameter von `every` angegeben wird, wird auf diesem Objekt die `callback` Funktion aufgerufen und dieses Objekt kann mit `this` aufgerufen werden. Anderfalls wird der Wert `undefined` für den Einsatz von `this` übergeben. Der `this` Wert ist nur in der `callback` Funktion verfügbar und wird nach den [normalen Regeln für das ermitteln von this](/de/docs/Web/JavaScript/Reference/Operators/this) für die Funktion ermittelt.

Die `every` Funktion verändert nicht die Werte des Arrays, auf dem sie aufgerufen wird.

Die Anzahl der von `every` abzuarbeitenden Elemente wird vor dem ersten Aufruf von `callback` ermittelt. Elemente welche nach dem Aufruf von `every` angehängt werden, werden nicht von der `callback` Funktion besucht. Wenn existierende Element eines Arrays geändert werden, wird der `callback` Funktion der Wert übergeben, der zu dem Zeitpunkt des Aufrufens von `callback` im Array steht. Werte die gelöscht werden, werden nicht besucht.

`every` Arbeitet wie ein [Allquantor](https://de.wikipedia.org/wiki/Quantor#Existenz-_und_Allquantor) in der Mathematik. Wenn das Array leer ist, gibt er `true` zurück. (Es ist wahr, dass alle Elemente einer [leeren Menge](https://de.wikipedia.org/wiki/Leere_Menge) immer alle Bedingungen erfüllen.)

## Beispiele

### Größe aller Arrayelemente abprüfen

Das folgende Beispiel testet, ob alle Elemente in einem Array größer oder gleich 10 sind.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Einsatz von arrow Funktionen

[Arrow Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) unterstützen eine kürzere Syntax für den gleichen Test.

```js
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true
```

## Polyfill

`every` wurde im ECMA-262 Standard in der 5. Auflage hinzugefügt. Es kann sein, dass diese Funktion in anderer Implementierungen des Standards nicht vorkommt. Man dieses beheben, indem man den folgenden Quelltext an den Anfang eines Programms hinzufügt. Dadurch wird die `every` Funktion dort hinzugefügt, wo sie nicht nativ unterstützt wird. Der Algorithmus ist exakt der aus der 5. Auflage des ECMA-262 Standards, mit der Voraussetzung, dass `Object` und `TypeError` ihre originalen Werte haben und dass `callbackfn.call` die originale Funktion {{jsxref("Function.prototype.call")}} aufrufen kann.

```js
if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== 'function') {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callbackfn with T as the this value and argument list
        //     containing kValue, k, and O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.16', 'Array.prototype.every')}}                     | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.every', 'Array.prototype.every')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.every', 'Array.prototype.every')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.every")}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.every()")}}

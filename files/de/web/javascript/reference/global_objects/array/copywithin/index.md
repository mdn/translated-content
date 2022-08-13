---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---
{{JSRef}}

Die **`copyWithin()`** Methode kopiert einen Teil eines Arrays in eine andere Stelle des gleichen Arrays und gibt das Array zurück, ohne die Länge des Arrays zu verändern.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Syntax

    arr.copyWithin(target)
    arr.copyWithin(target, start)
    arr.copyWithin(target, start, end)

### Parameter

- `target`

  - : Null-Basierter Index an dem die kopierte Sequenz kopiert wird. Wenn `target` negativ ist, wird vom Ende angefangen zu zählen.

    Wenn `target` glößer oder gleich `arr.length` ist, wird nicht kopiert. Wenn `target` nach `start` positioniert ist, wird die kopierte Sequenz gekürzt, um in die Länge des Arrays zu passen.

- `start` {{optional_inline}}

  - : Null-Basierter Index an dem das Kopieren begonnen werden soll. Wenn `start` negativ ist, wird vom Ende angefangen zu zählen.

    Wenn `start` nicht angegeben wird, nutzt `copyWithin` den Standardwert 0.

- `end` {{optional_inline}}

  - : Null-Basierter Index an dem das Kopieren beendet werden soll. `end` ist exklusiv und wird deswegen nicht mitkopiert. Wenn `end` negativ ist, wird vom Ende angefangen zu zählen.

    Wenn `end` nicht angegeben wird, nutzt `copyWithin` den Standardwert `arr.length`.

### Rückgabewert

Das geänderte Array

## Beschreibung

`copyWithin` arbeitet wie die `memcpy` Funktion in C und C++ und ist eine hoch perfomante Methode zum Verschieben von Daten in einem {{jsxref("Array")}} oder {{jsxref("TypedArray")}}. Die Sequenz wird in einer Operation kopiert und eingefügt; Die eingefügte Sequenz wird den kopierten Wert haben, auch wenn sich die Regionen im Array überschneiden.

Die `copyWithin` Funktion ist absichtlich generisch. Es wird nicht vorausgesetzt, dass `this` ein {{jsxref("Array")}} Objekt ist.

Die `copyWithin` Methode ist eine veränderbare Methode. Sie ändert nichts an der Länge von `this`, aber sie ändert den Inhalt von `this` und erstellt neue Eigenschaften, wenn es notwendig ist.

## Beispiele

```js
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 5]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed-Arrays sind Unterklassen von Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// Für Plattformen die noch nicht ES6 unterstützen:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## Polyfill

    if (!Array.prototype.copyWithin) {
      Array.prototype.copyWithin = function(target, start/*, end*/) {
        // Steps 1-2.
        if (this == null) {
          throw new TypeError('this is null or not defined');
        }

        var O = Object(this);

        // Steps 3-5.
        var len = O.length >>> 0;

        // Steps 6-8.
        var relativeTarget = target >> 0;

        var to = relativeTarget < 0 ?
          Math.max(len + relativeTarget, 0) :
          Math.min(relativeTarget, len);

        // Steps 9-11.
        var relativeStart = start >> 0;

        var from = relativeStart < 0 ?
          Math.max(len + relativeStart, 0) :
          Math.min(relativeStart, len);

        // Steps 12-14.
        var end = arguments[2];
        var relativeEnd = end === undefined ? len : end >> 0;

        var final = relativeEnd < 0 ?
          Math.max(len + relativeEnd, 0) :
          Math.min(relativeEnd, len);

        // Step 15.
        var count = Math.min(final - from, len - to);

        // Steps 16-17.
        var direction = 1;

        if (from < to && to < (from + count)) {
          direction = -1;
          from += count - 1;
          to += count - 1;
        }

        // Step 18.
        while (count > 0) {
          if (from in O) {
            O[to] = O[from];
          } else {
            delete O[to];
          }

          from += direction;
          to += direction;
          count--;
        }

        // Step 19.
        return O;
      };
    }

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.copywithin', 'Array.prototype.copyWithin')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ES2016', '#sec-array.prototype.copywithin', 'Array.prototype.copyWithin')}} | {{Spec2('ES2016')}}     |                      |
| {{SpecName('ESDraft', '#sec-array.prototype.copywithin', 'Array.prototype.copyWithin')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.copyWithin")}}

## Siehe auch

- {{jsxref("Array")}}

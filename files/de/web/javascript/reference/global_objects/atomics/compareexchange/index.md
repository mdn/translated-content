---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
---
{{JSRef}}

Die statische **`Atomics.compareExchange()`** Methode ersetzt einen Wert an einer gegebenen Position im einem Array mit einem gegebene Wert aus, wenn ein gegebenen Wert gleich dem alten Wert ist. Es wird der alte Wert an der Position zurückgegeben, egal ob der abzugleichende Wert gleich oder nicht ist. Die atomare Operation garantiert, dass kein anderer Schreibprozess während der Operation durchgeführt wird.

{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}

## Syntax

    Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)

### Parameter

- `typedArray`
  - : Ein geteiltes getrypted Integer Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} oder {{jsxref("Uint32Array")}}.
- `index`
  - : Die Position in `typedArray`, an den ein Wert ersetzt wird.
- `expectedValue`
  - : Wert, auf dem die gleichheit geprüft wird.
- replacementValue
  - : Neu Zahl, die geschreiben wird.

### Rückgabewert

Der alte Wert an der gegebenen Position (`typedArray[index]`).

### Exceptions

- Erzeugt einen {{jsxref("TypeError")}}, wenn `typedArray` nicht von einem erlaubten Integer Typ ist.
- Erzeugt eine {{jsxref("TypeError")}}, wenn `typedArray` kein geteilter Arraytyp ist.
- Erzeugt ein {{jsxref("RangeError")}}, wenn der `index` nicht in den Grenzen von `typedArray` ist.

## Beispiele

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
Atomics.load(ta, 0); // 12
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                      |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.compareexchange', 'Atomics.compareExchange')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.compareExchange")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}

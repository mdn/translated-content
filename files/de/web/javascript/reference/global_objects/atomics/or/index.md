---
title: Atomics.or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/or
---
{{JSRef}}

Die statische **`Atomics.or()`** Methode berechnet eine bitweises ODER mit einem gegebenen Wert auf einem Wert an einer gegebenen Position im Array und gibt den alten Wert an der Position zurück. Die atomare Operation garantiert, dass kein anderer Schreibprozess während der Operation durchgeführt wird.

{{EmbedInteractiveExample("pages/js/atomics-or.html")}}

## Syntax

    Atomics.and(typedArray, index, value)

### Parameter

- `typedArray`
  - : Ein geteiltes getrypted Integer Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} oder {{jsxref("Uint32Array")}}.
- `index`
  - : Die Position in `typedArray`, mit der das bitweise ODER berechnet wird.
- `value`
  - : Die Zahl, mit der das bitweise ODER berechnet wird.

### Rückgabewert

Der alte Wert an der gegebenen Position (`typedArray[index]`).

### Exceptions

- Erzeugt einen {{jsxref("TypeError")}}, wenn `typedArray` nicht von einem erlaubten Integer Typ ist.
- Erzeugt eine {{jsxref("TypeError")}}, wenn `typedArray` kein geteilter Arraytyp ist.
- Erzeugt ein {{jsxref("RangeError")}}, wenn der `index` nicht in den Grenzen von `typedArray` ist.

## Beschreibung

Die bitweise ODER Operation ergibt nur 1, wenn eine Werte, `a` oder `b`, 1 ist. Die Wahrheitstabelle für die ODER Operation ist:

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

Zum Beispiel resultiert ein bitweises ODER auf `5 | 1` in `0111`, was im Dezimalsystem 5 ist.

    5  0101
    1  0001
       ----
    5  0101

## Beispiele

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 2;

Atomics.or(ta, 0, 1); // returns 2, the old value
Atomics.load(ta, 0);  // 3
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                      |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.or', 'Atomics.or')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.or")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.xor()")}}

---
title: Atomics.xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/xor
---
{{JSRef}}

Die statische **`Atomics`\*\***`.xor()`\*\* Methode berechnet eine bitweises XOR mit einem gegebenen Wert auf einem Wert an einer gegebenen Position im Array und gibt den alten Wert an der Position zurück. Die atomare Operation garantiert, dass kein anderer Schreibprozess während der Operation durchgeführt wird.

{{EmbedInteractiveExample("pages/js/atomics-xor.html")}}

## Syntax

    Atomics.and(typedArray, index, value)

### Parameter

- `typedArray`
  - : Ein geteiltes getrypted Integer Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} oder {{jsxref("Uint32Array")}}.
- `index`
  - : Die Position in `typedArray`, mit der das bitweise XOR berechnet wird.
- `value`
  - : Die Zahl, mit der das bitweise XOR berechnet wird.

### Rückgabewert

Der alte Wert an der gegebenen Position (`typedArray[index]`).

### Exceptions

- Erzeugt einen {{jsxref("TypeError")}}, wenn `typedArray` nicht von einem erlaubten Integer Typ ist.
- Erzeugt eine {{jsxref("TypeError")}}, wenn `typedArray` kein geteilter Arraytyp ist.
- Erzeugt ein {{jsxref("RangeError")}}, wenn der `index` nicht in den Grenzen von `typedArray` ist.

## Beschreibung

Die bitweise XOR Operation ergibt nur 1, wenn genau ein Werte, `a` oder `b`, 1 ist. Die Wahrheitstabelle für die XOR Operation ist:

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

Zum Beispiel resultiert ein bitweises XOR auf `5 & 1` in `0100`, was im Dezimalsystem 4 ist.

    5  0101
    1  0001
       ----
    4  0100

## Beispiele

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.xor(ta, 0, 1); // returns 5, the old value
Atomics.load(ta, 0);  // 4
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                      |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.xor', 'Atomics.xor')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.xor")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.or()")}}

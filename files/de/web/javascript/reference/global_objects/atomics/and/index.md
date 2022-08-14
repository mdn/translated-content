---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/and
---
{{JSRef}}

Die statische **`Atomics`\*\***`.and()`\*\* Methode berechnet eine bitweises UND mit einem gegebenen Wert auf einem Wert an einer gegebenen Position im Array und gibt den alten Wert an der Position zurück. Die atomare Operation garantiert, dass kein anderer Schreibprozess während der Operation durchgeführt wird.

{{EmbedInteractiveExample("pages/js/atomics-and.html")}}

## Syntax

    Atomics.and(typedArray, index, value)

### Parameter

- `typedArray`
  - : Ein geteiltes getrypted Integer Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} oder {{jsxref("Uint32Array")}}.
- `index`
  - : Die Position in `typedArray`, mit der das bitweise UND berechnet wird.
- `value`
  - : Die Zahl, mit der das bitweise UND berechnet wird.

### Rückgabewert

Der alte Wert an der gegebenen Position (`typedArray[index]`).

### Exceptions

- Erzeugt einen {{jsxref("TypeError")}}, wenn `typedArray` nicht von einem erlaubten Integer Typ ist.
- Erzeugt eine {{jsxref("TypeError")}}, wenn `typedArray` kein geteilter Arraytyp ist.
- Erzeugt ein {{jsxref("RangeError")}}, wenn der `index` nicht in den Grenzen von `typedArray` ist.

## Beschreibung

Die bitweise UND Operation ergibt nur 1, wenn beide Werte, `a` und `b`, 1 sind. Die Wahrheitstabelle für die UND Operation ist:

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

Zum Beispiel resultiert ein bitweises UND auf `5 & 1` in `0001`, was im Dezimalsystem 1 ist.

    5  0101
    1  0001
       ----
    1  0001

## Beispiele

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // returns 0, the old value
Atomics.load(ta, 0);  // 1
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                      |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.and', 'Atomics.and')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.and")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}

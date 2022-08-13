---
title: Atomics.load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/load
---
{{JSRef}}

Die statische **`Atomics.load()`** Methode gibt den Wert an einer gegebenen Position in einem Array zurück.

{{EmbedInteractiveExample("pages/js/atomics-load.html")}}

## Syntax

    Atomics.load(typedArray, index)

### Parameter

- `typedArray`
  - : Ein geteiltes getrypted Integer Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} oder {{jsxref("Uint32Array")}}.
- `index`
  - : Die Position in `typedArray`, von der der Wert geladen wird.

### Rückgabewert

Der Wert an der gegebenen Position (`typedArray[index]`).

### Exceptions

- Erzeugt einen {{jsxref("TypeError")}}, wenn `typedArray` nicht von einem erlaubten Integer Typ ist.
- Erzeugt eine {{jsxref("TypeError")}}, wenn `typedArray` kein geteilter Arraytyp ist.
- Erzeugt ein {{jsxref("RangeError")}}, wenn der `index` nicht in den Grenzen von `typedArray` ist.

## Beispiele

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar                      |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.load', 'Atomics.load')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.load")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.store()")}}

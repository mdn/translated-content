---
title: Atomics.add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/add
---
{{JSRef}}

Die statische **`Atomics.add()`** Methode addiert eine gegebenen Wert an einer gegebenen Position im Array und gibt den alten Wert zurück. Diese atomare Operation garantiert, dass keine andere Schreiboperation während der Operation durchgeführt werden kann.

{{EmbedInteractiveExample("pages/js/atomics-add.html")}}

## Syntax

    Atomics.add(typedArray, index, value)

### Parameter

- `typedArray`
  - : Ein geteiltes getrypted Integer Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} oder {{jsxref("Uint32Array")}}.
- `index`
  - : Die Position in `typedArray`, zu der `value` addiert wird.
- `value`
  - : Die Zahl, die addiert werden soll.

### Return value

Der alte Wert an der gegebenen Position (`typedArray[index]`).

### Exceptions

- Erzeugt einen {{jsxref("TypeError")}}, wenn `typedArray` nicht von einem erlaubten Integer Typ ist.
- Erzeugt eine {{jsxref("TypeError")}}, wenn `typedArray` kein geteilter Arraytyp ist.
- Erzeugt ein {{jsxref("RangeError")}}, wenn der `index` nicht in den Grenzen von `typedArray` ist.

## Beispiele

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                      |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.add', 'Atomics.add')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.add")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}

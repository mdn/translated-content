---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
tags:
  - Atomics
  - Java
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/sub
---
{{JSRef}}

Die statische **`Atomics`\*\***`.sub()`\*\* Methode subtrahiert eine gegebenen Wert an einer gegebenen Position im Array und gibt den alten Wert zurück. Diese atomare Operation garantiert, dass keine andere Schreiboperation während der Operation durchgeführt werden kann.

{{EmbedInteractiveExample("pages/js/atomics-sub.html")}}

## Syntax

    Atomics.add(typedArray, index, value)

### Parameter

- `typedArray`
  - : Ein geteiltes getrypted Integer Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} oder {{jsxref("Uint32Array")}}.
- `index`
  - : Die Position in `typedArray`, zu der `value` subtrahiert wird.
- `value`
  - : Die Zahl, die subtrahiert werden soll.

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
ta[0] = 48;

Atomics.sub(ta, 0, 12); // returns 48, the old value
Atomics.load(ta, 0); // 36
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                      |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.sub', 'Atomics.sub')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.sub")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}

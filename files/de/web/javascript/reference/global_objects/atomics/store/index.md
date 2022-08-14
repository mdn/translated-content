---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/store
---
{{JSRef}}

Die statische **`Atomics`\*\***`.store()`\*\* Methode speichert einen gegebenen Wert an einer gegebenen Position in dem Array und gibt den Wert zurück.

{{EmbedInteractiveExample("pages/js/atomics-store.html")}}

## Syntax

    Atomics.store(typedArray, index, value)

### Parameter

- `typedArray`
  - : Ein geteiltes getrypted Integer Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} oder {{jsxref("Uint32Array")}}.
- `index`
  - : Die Position in `typedArray`, an der `value` gespeichert wird.
- `value`
  - : Die Zahl, die gespeichert wird.

### Rückgabewert

Der Wert, der abgespeichert wurde.

### Exceptions

- Erzeugt einen {{jsxref("TypeError")}}, wenn `typedArray` nicht von einem erlaubten Integer Typ ist.
- Erzeugt eine {{jsxref("TypeError")}}, wenn `typedArray` kein geteilter Arraytyp ist.
- Erzeugt ein {{jsxref("RangeError")}}, wenn der `index` nicht in den Grenzen von `typedArray` ist.

## Beispiele

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                      |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.store', 'Atomics.store')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.store")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}

---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/notify
original_slug: Web/JavaScript/Reference/Global_Objects/Atomics/wake
---
{{JSRef}}

Die statische **`Atomics.notify()`** Methode benachrichtigt Threads, die in einer Warteschlange schlafen.

> **Hinweis:** Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}}.

## Syntax

    Atomics.notify(typedArray, index, count)

### Parameter

- `typedArray`
  - : Ein geteiltes {{jsxref("Int32Array")}}.
- `index`
  - : Die Position im `typedArray`, an der aufgewacht wird.
- `count`
  - : Anzahl der aufzuweckenden Threads. Standard ist {{jsxref("Infinity", "+Infinity")}}.

### Rückgabewert

Anzahl an geweckten Threads.

### Exceptions

- Erzeugt einen {{jsxref("TypeError")}}, wenn `typedArray` kein {{jsxref("Int32Array")}} ist.
- Erzeugt ein {{jsxref("RangeError")}}, wenn der `index` nicht in den Grenzen von `typedArray` ist.

## Beipsiele

Gegeben ist ein `Int32Array`:

```js
var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet auf Position 0, ander der Wert 0 erwartet wird. Solange diese gegeben ist, geht es nicht weiter. Immer wenn ein neuer schreibender Thread einen neuen Wert speichert, wacht der Thread. Im Anschluss ist der neue Wert an der Position 0 (123).

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Ein schreibender Thread speichert einen neuen Wert und wacht den wartenden Tread nach dem Schreiben auf.

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                      |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.notify', 'Atomics.notify')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.notify")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}

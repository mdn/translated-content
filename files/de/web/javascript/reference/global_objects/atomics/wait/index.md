---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/wait
---
{{JSRef}}

Die statische **`Atomics.wait()`** Methode verifiziert, dass eine gegebene Position in einem {{jsxref("Int32Array")}} ein gegebene Wert ist und dann schläft und entweder aufgeweckt wird oder ein Timeout bekommt. Die Strings `"ok"`, `"not-equal"`, und `"timed-out"` sind alle möglichen Rückgabewerte

> **Hinweis:** Diese Operation funktioniert nur mit einem geteilten {{jsxref("Int32Array")}} und ist nicht im Main-Thread erlaubt.

## Syntax

    Atomics.wait(typedArray, index, value[, timeout])

### Parameter

- `typedArray`
  - : Ein geteiltes {{jsxref("Int32Array")}}.
- `index`
  - : Die Position im `typedArray`, an der gewartet wird.
- `value`
  - : Der wert, mit dem getestet wird.
- `timeout` {{optional_inline}}
  - : Wartezeit in Millisekunden. {{jsxref("Infinity")}}, wenn keine Zeit angegeben wird.

### Rückgabewert

Ein {{jsxref("String")}} welcher `"ok"`, `"not-equal"` oder `"timed-out"` ist.

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

Ein schreibender Thread speichert einen neuen Wert und wacht den wartenden Thread nach dem Schreiben auf.

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.wake(int32, 0, 1);
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar                      |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.wait', 'Atomics.wait')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.wait")}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wake()")}}

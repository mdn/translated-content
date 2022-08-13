---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
---
{{JSRef}}

Die statische **`Atomics.isLockFree()`** Methode wird benutzt, um festzustellen, ob ein Lock (Sperre) oder eine atomare Operation vorhanden ist. Sie gibt `true` zurück, wenn die gegebene Größe eine von den in der [BYTES_PER_ELEMENT](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Eigenschften von Integer TypedArray Typen ist.

{{EmbedInteractiveExample("pages/js/atomics-islockfree.html")}}

## Syntax

    Atomics.isLockFree(size)

### Parameter

- `size`
  - : Die größe in Bytes, für die geprüft wird.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob die Operation frei von Locks ist.

## Beispiele

```js
Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // false
```

## Spezifikationen

| Spezifikation                                                                                    | Status                       | Kommentar                      |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics.islockfree', 'Atomics.isLockFree')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics.isLockFree")}}

## Siehe auch

- {{jsxref("Atomics")}}

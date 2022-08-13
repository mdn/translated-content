---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
tags:
  - ArrayBuffer
  - JavaScript
  - Method
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
---
{{JSRef}}

Die **`ArrayBuffer.isView()`** Methode gibt `true` zurück, wenn `arg` eines der `ArrayBuffer` Views ist, so wie [getyptes Array Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder eine {{jsxref("DataView")}}; andernfalls `false`.

{{EmbedInteractiveExample("pages/js/arraybuffer-isview.html")}}

## Syntax

    ArrayBuffer.isView(arg)

### Parameter

- `arg`
  - : Der Parameter, der überprüft wird.

### Rückgabewert

`true`, wenn der gegebene Parameter ist einer der `ArrayBuffer` Views; andernfalls `false`.

## Beispiele

```js
ArrayBuffer.isView();                    // false
ArrayBuffer.isView([]);                  // false
ArrayBuffer.isView({});                  // false
ArrayBuffer.isView(null);                // false
ArrayBuffer.isView(undefined);           // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array());    // true
ArrayBuffer.isView(new Float32Array());  // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

var buffer = new ArrayBuffer(2);
var dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## Spezifikationen

| Spezifikation                                                                                    | Status                           | Kommentar                             |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------- |
| {{SpecName('Typed Array')}}                                                             | {{Spec2('Typed Array')}} | Ersetzt in ECMAScript 2015.           |
| {{SpecName('ES2015', '#sec-arraybuffer.isview', 'ArrayBuffer.isView')}} | {{Spec2('ES2015')}}         | Initiale Definition im ECMA Standard. |
| {{SpecName('ESDraft', '#sec-arraybuffer.isview', 'ArrayBuffer.isView')}} | {{Spec2('ESDraft')}}     |                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.ArrayBuffer.isView")}}

## Siehe auch

- [JavaScript typed arrays](/de/docs/Web/JavaScript/Typed_arrays "en/JavaScript typed arrays")

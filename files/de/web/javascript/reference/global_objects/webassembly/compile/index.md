---
title: WebAssembly.compile()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compile
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - compile
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/compile
---
{{JSRef}}

Die **`WebAssembly.compile()`** Funktion kompiliert ein {{jsxref("WebAssembly.Module")}} aus WebAssembly Binärcode. Hilfreich ist diese Funktion, um ein Modul zu kompilieren, bevor es instanziiert werden kann (Andernfalls sollte die {{jsxref("WebAssembly.instantiate()")}} Funktion verwendet werden).

## Syntax

    Promise<WebAssembly.Module> WebAssembly.compile(bufferSource);

### Parameter

- _bufferSource_
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den Binärcode des zu kompilierenden .wasm Moduls enthält.

### Rückgabewert

Ein `Promise`, das sich in ein {{jsxref("WebAssembly.Module")}} kompiliertes Objekt auflöst.

### Fehlerbehandlung

- Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Typed_arrays) ist, wird ein {{jsxref("TypeError")}} geworfen.
- Wenn die Kompilierung fehlschlägt, wird das Promise mit einem {{jsxref("WebAssembly.CompileError")}} verworfen.

## Beispiele

Das folgende Beispiel kompiliert den geladenen simple.wasm Bytecode unter Verwendung der `compile()` Funktion und sendet ihn an einen [Web Worker](/de/docs/Web/API/Web_Workers_API) mittels [postMessage()](/de/docs/Web/API/Worker/postMessage).

```js
var worker = new Worker("wasm_worker.js");

fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.compile(bytes)
).then(mod =>
  worker.postMessage(mod)
);
```

> **Note:** **Hinweis**: Du wirst wahrscheinlich in den meisten Fällen {{jsxref("WebAssembly.compileStreaming()")}} verwenden wollen, da es effizienter als `compile()` arbeitet.

## Spezifikationen

| Spezifikation                                                                            | Status                               | Kommentar                 |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblycompile', 'compile()')}} | {{Spec2('WebAssembly JS')}} | Initial draft definition. |

## Browserkompatibilität

{{Compat("javascript.builtins.WebAssembly.compile")}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly concepts](/de/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)

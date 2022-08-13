---
title: WebAssembly.compileStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - compile
  - compileStreaming
  - streaming
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
---
{{JSRef}}

Die **`WebAssembly.compileStreaming()`** Funktion kompiliert ein {{jsxref("WebAssembly.Module")}} direkt aus einer zugrunde liegenden Quelle. Nützlich ist diese Funktion wenn ein Modul kompiliert werden muss, bevor es instanziiert werden kann. (ansonsten sollte die {{jsxref("WebAssembly.instantiateStreaming()")}} Funktion verwendet werden).

## Syntax

    Promise<WebAssembly.Module> WebAssembly.compileStreaming(source);

### Parameter

- _source_
  - : Ein {{domxref("Response")}} Objekt oder ein Promise das sich zu einem solchen auflöst. Es stellt die zugrunde liegende Quelle eines .wasm Moduls dar, die gestreamt und kompiliert werden soll.

### Rückgabewert

Ein `Promise` das sich in ein {{jsxref("WebAssembly.Module")}} Objekt auflöst, welche das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Typed_arrays)ist, wird ein {{jsxref("TypeError")}} geworfen.
- Schlägt die Kompilierung fehl, wird das Promise mit einem {{jsxref("WebAssembly.CompileError")}} verworfen.

## Beispiele

Das folgende Beispiel (siehe unsere [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) Demo auf GitHub, und [siehe das live Beispiel](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)) streamt ein .wasm Modul direkt aus der zugrunde liegenden Quelle und kompiliert es in ein {{jsxref("WebAssembly.Module")}} Objekt. Weil die `compileStreaming()` Funktion ein Promise für ein {{domxref("Response")}} Objekt annimmt, kann ihr direkt ein {{domxref("WindowOrWorkerGlobalScope.fetch()")}} Aufruf durchgereicht werden, woraufhin es die Antwort in diese Funktion abgibt, sobald das Promise sich erfüllt.

```js
var importObject = { imports: { imported_func: arg => console.log(arg) } };

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(module => WebAssembly.instantiate(module, importObject))
.then(instance => instance.exports.exported_func());
```

Das resultierende Modul wird dann mittels {{jsxref("WebAssembly.instantiate()")}} instanziiert und die bereitgestellte Funktion wird aufgerufen.

## Spezifikationen

| Spezifikationen                                                                                                          | Status                                       | Kommentar                 |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------- |
| {{SpecName('WebAssembly Embedding', '#webassemblycompilestreaming', 'compileStreaming()')}} | {{Spec2('WebAssembly Embedding')}} | Initial draft definition. |

## Browserkompatibilität

{{Compat("javascript.builtins.WebAssembly.compileStreaming")}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly concepts](/de/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)

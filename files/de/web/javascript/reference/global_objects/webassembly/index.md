---
title: WebAssembly
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly
tags:
  - API
  - JavaScript
  - Objekt
  - Referenz
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly
---
{{JSRef}}

Das **`WebAssembly`** JavaScript Objekt existiert als Namensraum für alle [WebAssembly](/de/docs/WebAssembly)-bezogenen Funktionalitäten.

Anders als die meisten anderen globalen Objekte, ist `WebAssembly` kein Konstruktor (es ist kein Funktionsobjekt). Es kann mit {{jsxref("Math")}} verglichen werden, welches ebenfalls einen Namensraum für mathematische Konstanten und Funktionen bildet. Oder mit {{jsxref("Intl")}}, welches den Namensraum für die Internationalisierunges API mit sprachabhängigen Funktionen bildet.

## Beschreibung

Die primäre Verwendung des `WebAssembly` Objekts sind:

- Laden von WebAssembly Code, verwenden der {{jsxref("WebAssembly.instantiate()")}} Funktion.
- Neue Speicher- und Tabelleninstanzen mittels der {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}} Konstruktoren.
- Bereitstellen von Einrichtungen zur Fehlerbehandlung, die in WebAssembly auftreten, mittels der {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}} Konstruktoren.

## Methoden

- {{jsxref("WebAssembly.instantiate()")}}
  - : Die primäre API für das Kompilieren und Instanziieren des WebAssembly Codes. Der Rückgabewert als `Promise` ergibt ein `Module` als auch die erste `Instance`.
- {{jsxref("WebAssembly.instantiateStreaming()")}}
  - : Kompiliert und instanziiert ein WebAssembly-Modul direkt aus einer Streamingquelle, mit dem Rückgabewert als `Promise` ergibt sich ein `Module` als auch die erste `Instance`.
- {{jsxref("WebAssembly.compile()")}}
  - : Kompiliert ein {{jsxref("WebAssembly.Module")}} aus dem WebAssembly Binärcode, wodurch die Instanziierung als separater Schritt durchgeführt werden kann.
- {{jsxref("WebAssembly.compileStreaming()")}}
  - : Kompiliert ein {{jsxref("WebAssembly.Module")}} direkt aus einer Streamingquelle, wodurch die Instanziierung als separater Schritt durchgeführt werden kann.
- {{jsxref("WebAssembly.validate()")}}
  - : Validiert das gegebene, typisierte Array eines WebAssembly Binärcodes. Gibt zurück, ob die Bytes validen WebAssembly Code darstellen (`true`) oder nicht (`false`).

## Konstruktoren

- {{jsxref("WebAssembly.Global()")}}
  - : Erzeugt ein neues WebAssembly `Global` Objekt.
- {{jsxref("WebAssembly.Module()")}}
  - : Erzeugt ein neues WebAssembly `Module` Objekt.
- {{jsxref("WebAssembly.Instance()")}}
  - : Erzeugt ein neues WebAssembly `Instance` Objekt.
- {{jsxref("WebAssembly.Memory()")}}
  - : Erzeugt ein neues WebAssembly `Memory` Objekt.
- {{jsxref("WebAssembly.Table()")}}
  - : Erzeugt ein neues WebAssembly `Table` Objekt.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Erzeugt ein neues WebAssembly `CompileError` Objekt.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Erzeugt ein neues WebAssembly `LinkError` Objekt.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Erzeugt ein neues WebAssembly `RuntimeError` Objekt.

## Beispiele

Das folgende Beispiel (siehe [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) Demo auf GitHub, [siehe auch live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) streamt ein .wasm Modul direkt aus einer zugrunde liegenden Quelle, um es dann zu kompilieren und zu instanziieren. Das Promise erfüllt sich mit einem `ResultObject`. Weil die `instantiateStreaming()` Funktion ein Promise für ein {{domxref("Response")}} akzeptiert, kann ihr ein {{domxref("WindowOrWorkerGlobalScope.fetch()")}} direkt übergeben werden, welches die Antwort an die Funktion weitergibt, sobald das Promise sich erfüllt.

```js
var importObject = { imports: { imported_func: arg => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

Auf die `ResultObject` Instanz wird damit zugegriffen und die beinhaltete, exportierte Funktion aufgerufen.

## Spezifikationen

| Specification                                                                                    | Status                               | Comment                   |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------- |
| {{SpecName('WebAssembly JS', '#the-webassembly-object', 'WebAssembly')}} | {{Spec2('WebAssembly JS')}} | Initial draft definition. |

## Browserkompatibilität

{{Compat("javascript.builtins.WebAssembly")}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly concepts](/de/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)

---
title: Globale Objekte
slug: Web/JavaScript/Reference/Global_Objects
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects
---
{{jsSidebar("Objects")}}

Dieses Kapitel dokumentiert alle Objekte, die standardmäßig in einer JavaScript-Umgebung zur Verfügung stehen.

Der Ausdruck "Globales Objekt" (oder Standardobjekt) ist nicht zu verwechseln mit dem **global object**. Hier sind globale Objekte Objekte, die zu **Objekten im globalen Zugriffsbereich (scope) referenzieren**. Das **global object** selbst wird mit Hilfe des {{jsxref("Operators/this", "this")}}-Operators im globalen Bereich angesprochen (sofern der Strict-Modus von ECMAScript 5 nicht verwendet wird, andernfalls sind sie `undefined`). Tatsächlich _besteht_ der globale Bereich aus den Eigenschaften (properties) des _global object_ (einschließlich geerbter Eigenschaften, falls vorhanden).

Andere Objekte im globalen Bereich wurden entweder [vom Benutzerscript erstellt](/de/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects) oder von der ausführenden Anwendung (meist der Browser) bereitgestellt. Die Anwendungsobjekte, welche im Browserumfeld (DOM) verfügbar sind, werden in der [API-Referenz ](/de/docs/Web/API/Reference)dokumentiert. Eine detailiertere Unterscheidung zwischen [DOM-](/de/docs/DOM/DOM_Reference) und [Kern-JavaScript](/de/docs/Web/JavaScript) befindet sich im Kapitel [Überblick JavaScript-Technologien](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Standardobjekte (kategorisiert)

### Eigenschaften

Diese globalen Eigenschaften stellen einen einfachen Wert dar; sie haben keine weiteren Eigenschaften oder Methoden.

- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}
- {{jsxref("null")}} literal

### Funktionen

Diese globalen Funktionen werden als solche aufgerufen, nicht als Teil eines Objektes.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline()}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline()}}
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline()}}

### Fundamentale Objekte

Auf nachfolgenden Objekte basieren alle anderen, in JavaScript verfügbaren Objekte. Sie repräsentieren sowohl Objekte, als auch Funktionen und Fehler.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}
- {{jsxref("Error")}}
- {{jsxref("EvalError")}}
- {{jsxref("InternalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}

### Zahlen und Zeiten

Objekte, die sich mit Zahlen und Zeit-Daten, sowie mathematischen Berechnungen befassen.

- {{jsxref("Number")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Textverarbeitung

Objekte zum Verarbeiten von Text.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indexgebundene Kollektionen

Diese Objekte umfassen Sammlungen von anderen Objekten, auf die über einen fortlaufenden, nummerischen Index zugegriffen werden kann. Zu ihnen gehören Arrays (Felder) und Array-ähnliche Objekte.

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Schlüsselgebundene Kollektionen

Diese Objekte umfassen Sammlungen von anderen Objekten, auf die über einen wahlfreien Schlüssel zugegriffen werden kann; sie lassen sich zudem nach Einfügereihenfolge durchlaufen.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Vector Kollektionen

{{Glossary("SIMD")}} Vector Datentypen sind Objekte in denen die Daten in Bahnen angeordnet sind.

- {{jsxref("SIMD")}} {{experimental_inline}}
- {{jsxref("Float32x4", "SIMD.Float32x4")}} {{experimental_inline}}
- {{jsxref("Float64x2", "SIMD.Float64x2")}} {{experimental_inline}}
- {{jsxref("Int8x16", "SIMD.Int8x16")}} {{experimental_inline}}
- {{jsxref("Int16x8", "SIMD.Int16x8")}} {{experimental_inline}}
- {{jsxref("Int32x4", "SIMD.Int32x4")}} {{experimental_inline}}
- {{jsxref("Uint8x16", "SIMD.Uint8x16")}} {{experimental_inline}}
- {{jsxref("Uint16x8", "SIMD.Uint16x8")}} {{experimental_inline}}
- {{jsxref("Uint32x4", "SIMD.Uint32x4")}} {{experimental_inline}}
- {{jsxref("Bool8x16", "SIMD.Bool8x16")}} {{experimental_inline}}
- {{jsxref("Bool16x8", "SIMD.Bool16x8")}} {{experimental_inline}}
- {{jsxref("Bool32x4", "SIMD.Bool32x4")}} {{experimental_inline}}
- {{jsxref("Bool64x2", "SIMD.Bool64x2")}} {{experimental_inline}}

### Strukturierte Daten

Datenpuffer und **J**ava**S**cript-**O**bjekt-**N**otation.

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}} {{experimental_inline}}
- {{jsxref("Atomics")}} {{experimental_inline}}
- {{jsxref("DataView")}}
- {{jsxref("JSON")}}

### Kontrollabstraktions Objekte

- {{jsxref("Promise")}}
- {{jsxref("Generator")}}
- {{jsxref("GeneratorFunction")}}
- {{experimental_inline}} {{jsxref("AsyncFunction")}}

### Reflection

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalisierung

Ergänzungen zum ECMAScript-Kern für Aufgaben, die verschiedene Sprachen unterstützen sollen.

- {{jsxref("Intl")}}
- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Global_Objects/NumberFormat", "Intl.NumberFormat")}}

### WebAssembly

- {{jsxref("WebAssembly")}}
- {{jsxref("WebAssembly.Module")}}
- {{jsxref("WebAssembly.Instance")}}
- {{jsxref("WebAssembly.Memory")}}
- {{jsxref("WebAssembly.Table")}}
- {{jsxref("WebAssembly.CompileError")}}
- {{jsxref("WebAssembly.LinkError")}}
- {{jsxref("WebAssembly.RuntimeError")}}

### Sonstiges

- {{jsxref("Functions/arguments", "arguments")}}

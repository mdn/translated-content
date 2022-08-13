---
title: Transferable
slug: Web/API/Transferable
tags:
  - API
  - Interface
  - Reference
  - Web Workers
  - postMessage
translation_of: Web/API/Transferable
---
{{ ApiRef("HTML DOM") }}

Das **`Transferable`** Interface stellt ein Objekt dar, welches zwischen unterschiedlichen Ausführungskontexten, wie zum Beispiel dem main thread und Web Workers, ausgetauscht werden kann.

Es existiert von dem Interface keine Instanz und kein Objekt. Ebenso definiert es keinerlei Eigenschaften und Methoden. Zweck des **`Transferable`** Interface ist lediglich die Möglichkeit der Kennzeichnung von Objekten für die spezifische Situation eines Transfers und Austauschs etwa zwischen Anwendung und {{domxref("Worker")}} via {{domxref("Worker.postMessage()")}}.

Die Typen {{jsxref("ArrayBuffer")}}, {{domxref("MessagePort")}} and {{domxref("ImageBitmap")}} implementieren dieses Interface.

## Properties

_Das_ _`Transferable`_ _Interface implementiert und erbt keine spezifischen Eigenschaften._

## Methods

_Das_ _`Transferable` Interface implementiert und erbt keine spezifischen Methoden._

## Specifications

| Specification                                                                                                        | Status                           | Comment                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "infrastructure.html#transferable-objects", "Transferable")}} | {{Spec2('HTML WHATWG')}} | Keine Änderung von {{SpecName("HTML5 W3C")}}, wenngleich das neue {{domxref("CanvasProxy")}} auch `Transferable` implementiert. |
| {{SpecName('HTML5 W3C', "infrastructure.html#transferable-objects", "Transferable")}}     | {{Spec2('HTML5 W3C')}}     | Initiale Definition.                                                                                                                             |

## Browser compatibility

{{Compat}}

\[1] Internet Explorer 10 only accepts a single {{domxref("Transferable")}} object as parameter, but not an array.

## See also

- Interfaces implementing it: {{jsxref("ArrayBuffer")}}, {{domxref("MessagePort")}}, {{domxref("ImageBitmap")}}.

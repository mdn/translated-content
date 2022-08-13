---
title: WindowBase64.btoa()
slug: Web/API/btoa
tags:
  - API
  - Méthode
  - Referenz
translation_of: Web/API/WindowOrWorkerGlobalScope/btoa
original_slug: Web/API/WindowOrWorkerGlobalScope/btoa
---
{{APIRef("HTML DOM")}}

Erzeugt eine Base-64-kodierten ASCII-Zeichenkette aus einer "Zeichenkette" von Binärdaten.

Hinweis: diese Funktion ist nicht für Raw-[Unicode](http://www.unicode.org/standard/WhatIsUnicode.html)-Zeichenketten geeignet (siehe Abschnitt "Unicode-Zeichenketten" unten).

## Syntax

    var encodedData = window.btoa(stringToEncode);

## Example

```js
var encodedData = window.btoa("Hello, world"); // Zeichenkette kodieren
var decodedData = window.atob(encodedData); // Zeichenkette dekodieren
```

## Hinweise

Diese Methode kann verwendet werden, um Daten zu kodieren, übertragen, und mittels`{{domxref("WindowBase64.atob","window.atob()")}}` wieder zu dekodieren, welche andernfalls Übertragungsprobleme bereiten würden. Beispielsweise ist es möglich, die Steuerzeichen mit den ASCII-Werten 0 bis 31 zu kodieren.

`btoa()` steht auch in JavaScript implementierten XPCOM-Komponenten zur Verfügung, auch wenn [`window`](/de/docs/DOM/window "DOM/window") in solchen Komponenten nicht das globale Objekt ist.

## Unicode-Zeichenketten

In den meisten Browsern verursacht ein Aufruf von `window.btoa()` mit einer Unicode-Zeichenkette eine "Character Out Of Range"-Exception ("Zeichen außerhalb des zulässigen Wertebereichs").

Das kann mithilfe eines solchen Code-Schemas vermieden werden (beigesteuert von [Johan Sundström](http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html)):

```js
function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

// Usage:
utf8_to_b64('✓ à la mode'); // JTI1dTI3MTMlMjUyMCUyNUUwJTI1MjBsYSUyNTIwbW9kZQ==
b64_to_utf8('JTI1dTI3MTMlMjUyMCUyNUUwJTI1MjBsYSUyNTIwbW9kZQ=='); // "✓ à la mode"

utf8_to_b64('I \u2661 Unicode!'); // SSUyNTIwJTI1dTI2NjElMjUyMFVuaWNvZGUlMjUyMQ==
b64_to_utf8('SSUyNTIwJTI1dTI2NjElMjUyMFVuaWNvZGUlMjUyMQ=='); // "I ♡ Unicode!"
```

Eine günstigere, zuverlässigere und effizientere Lösung ist, [`DOMString`](/de/docs/Web/API/DOMString) zunächst in eine UTF-8-kodierte Zeichenkette zu konvertieren, die sich für [typed arrays](/de/docs/Web/JavaScript/Typed_arrays) eignet. Eine Anleitung bietet **[dieser Abschnitt](</de/docs/Web/JavaScript/Base64_encoding_and_decoding#Solution_.232_.E2.80.93_rewriting_atob()_and_btoa()_using_TypedArrays_and_UTF-8>)**.

## Specifications

| Specification                                                                                        | Status                           | Comment                                                                                                                  |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', '#dom-windowbase64-btoa', 'WindowBase64.btoa()')}} | {{Spec2('HTML WHATWG')}} | No change since the latest snapshot, {{SpecName("HTML5.1")}}.                                                   |
| {{SpecName('HTML5.1', '#dom-windowbase64-btoa', 'WindowBase64.btoa()')}}     | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName("HTML WHATWG")}}. No change.                                                             |
| {{SpecName("HTML5 W3C", "#dom-windowbase64-btoa", "WindowBase64.btoa()")}} | {{Spec2('HTML5 W3C')}}     | Snapshot of {{SpecName("HTML WHATWG")}}. Creation of `WindowBase64` (properties where on the target before it). |

## Browser compatibility

{{Compat}}

\[1] `btoa()` is also available to XPCOM components implemented in JavaScript, even though [`window`](/en-US/docs/DOM/window) is not the global object in components.

## See also

- [Base64 encoding and decoding](/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [`data` URIs](/de/docs/data_URIs)
- {{domxref("WindowBase64.atob","window.atob()")}}
- [Components.utils.importGlobalProperties](/de/docs/Components.utils.importGlobalProperties)

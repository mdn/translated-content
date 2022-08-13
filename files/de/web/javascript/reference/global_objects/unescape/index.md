---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/unescape
---
{{jsSidebar("Objects")}} {{deprecated_header()}}

## Zusammenfassung

Die veraltete **`unescape()`** Methode erstellt einen neuen String, in dem hexadezimal escapte Sequenzen mit den entsprechenden umgewandelten Zeichen ersetzt werden. Die escape Sequenz kann vorher durch eine Funktion wie {{jsxref("Global_Objects/escape", "escape")}} erzeugt werden. Da `unescape` veraltet ist, sollte {{jsxref("Global_Objects/decodeURI", "decodeURI")}} oder {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} verwendet werden.

> **Note:** **HInweis:** `unescape` sollte nicht verwendet werden um URIs zu decodieren, nutze stattdessen `decodeURI`.

## Syntax

    unescape(str)

### Parameter

- `str`
  - : Ein String der decodiert werden soll.

## Beschreibung

Die `unescape` Funktion ist eine Eigenschaft des _global object_.

## Beispiele

```js
unescape("abc123");     // "abc123"
unescape("%E4%F6%FC");  // "äöü"
unescape("%u0107");     // "ć"
```

## Spezifikationen

| Spezifikation                                                            | Status                   | Kommentar                                                                            |
| ------------------------------------------------------------------------ | ------------------------ | ------------------------------------------------------------------------------------ |
| ECMAScript 1st Edition.                                                  | Standard                 | Initiale Definition.                                                                 |
| {{SpecName('ES5.1', '#sec-B.2.2', 'unescape')}}         | {{Spec2('ES5.1')}} | Definiert im (informative) Compatibility Annex B                                     |
| {{SpecName('ES6', '#sec-unescape-string', 'unescape')}} | {{Spec2('ES6')}}     | Definiert im (normative) Annex B for Additional ECMAScript Features for Web Browsers |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Global_Objects/decodeURI", "decodeURI")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}}

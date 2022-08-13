---
title: Date.prototype.toGMTString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
tags:
  - Date
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
---
{{JSRef}} {{deprecated_header}}Die **`toGMTString()`** Methode konvertiert ein Datum in ein String unter Benutzung der mittleren Greenwich Zeit. Das exakte Format des Rückgabewertes der `toGMTString()` Methode variierte von Browser zu Browser. Generel wird ein für Menschen lesbarer String zurückgegeben.{{noteStart}}`toGMTString()` ist deprecated und sollte nicht mehr benutzt werden. Es ist nur noch für die Rückwärtskompatibilität vorhanden; nutzt stattdessen {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}}{{noteEnd}}

## Syntax

    dateObj.toGMTString()

### Rückgabewert

Einen String, der das gegebene {{jsxref("Date")}} Objekt nach den Internet Greenwich Mean Zeit (GMT) Konventionen repräsentiert.

## Beispiele

### Einfaches Beispiel

In diesem Beispiel konvertiert die `toGMTString()` Methode das {{jsxref("date")}} Objekt zu einem String mit der GMT (UTC) unter benutzung der Systemzeitzone. Die exakte Formatierung des String hängt von der Implementierung ab.

```js
var today = new Date();
var str = today.toGMTString();  // deprecated! use toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                                                                 |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition, aber schon als deprecated markiert. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-B.2.6', 'Date.prototype.toGMTString')}}                             | {{Spec2('ES5.1')}}     | Im (informativen) Anhang B "Compatibility" definiert.                                     |
| {{SpecName('ES6', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}}     | {{Spec2('ES6')}}         | Im (normativen) Anhang B "Additional ECMAScript Features for Web Browsers" definiert.     |
| {{SpecName('ESDraft', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}} | {{Spec2('ESDraft')}} | Im (normativen) Anhang B "Additional ECMAScript Features for Web Browsers" definiert.     |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toGMTString")}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}

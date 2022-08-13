---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
tags:
  - Error
  - JavaScript
  - Non-standard
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
---
{{JSRef}} {{non-standard_header}}

Die **`columnNumber`** Eigenschaft enthält die Spaltennummer in der Zeile in der Datei, in der der Fehler erzeugt wurde.

## Beispiele

### Einsatz von `columnNumber`

```js
var e = new Error('Could not parse input');
throw e;
console.log(e.columnNumber) // 0
```

## Spezifikationen

In keiner Spezifikation enthalten. Kein Standard.

## Browserkompatibilität

{{Compat("javascript.builtins.Error.columnNumber")}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}

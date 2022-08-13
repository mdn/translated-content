---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
tags:
  - Error
  - JavaScript
  - Non-standard
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/fileName
---
{{JSRef}} {{non-standard_header}}

Die **`fileName`** Eigenschaft enthält den Pfad der Datei, in der der Fehler erzeugt wurde.

## Beschreibung

Diese nicht standardisierte Eigenschaft enthält den Pfad der Datei, in der der Fehler erzeugt wurde. Wenn diese Eigenschaft von aus einem Debugger heraus aufgerufen wird (z. B. Firefox Developer Tools), wird "debugger eval code" zurückgegeben.

## Beispiele

### Einsatz von `fileName`

```js
var e = new Error('Could not parse input');
throw e;
// e.fileName könnte aussehen wie: "file:///C:/example.html"
```

## Spezifikationen

In keiner Spezifikation enthalten. Kein Standard.

## Browserkompatibilität

{{Compat("javascript.builtins.Error.fileName")}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}

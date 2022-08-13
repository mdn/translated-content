---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
tags:
  - Error
  - JavaScript
  - Non-standard
  - Property
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
---
{{JSRef}} {{non-standard_header}}

Die **`lineNumber`** Eigenschaft enthält die Zeilennummer in der Datei, in der der Fehler erzeugt wurde.

## Beispiele

### Einsatz von `lineNumber`

```js
var e = new Error('Could not parse input');
throw e;
console.log(e.lineNumber) // 2
```

### Alternatives Beispiel mit `error` Events

```js
window.addEventListener('error', function(e) {
  console.log(e.lineNumber); // 5
});
var e = new Error('Could not parse input');
throw e;
```

Das ist keine Standardfunktion und es gibt auch keine breite Unterstützung (siehe Browserkompatibilitätstabelle unten).

## Spezifikationen

Ist in keiner Spezifikation enthalten. Kein Standard.

## Browserkompatibilität

{{Compat("javascript.builtins.Error.lineNumber")}}

## Siehe auch

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}

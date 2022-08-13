---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
tags:
  - Error
  - EvalError
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/EvalError
---
{{JSRef}}

Das **`EvalError`** Objekt bedeutet einen Fehler in Verbindung mit der globalen {{jsxref("Global_Objects/eval", "eval()")}} Funktion. Dieser Fehler wird nicht von JavaScript erzeugt, jedoch gibt es das `EvalError` Objekt noch aus Kompatibilitätsgründen.

## Syntax

    new EvalError([message[, fileName[, lineNumber]]])

### Parameters

- `message`
  - : Optional. Für Menschen lesbare Beschreibung des Fehlers.
- `fileName` {{non-standard_inline}}
  - : Optional. Der Name der Datei, die den Code enthält, welcher zu dem Fehler führt.
- `lineNumber` {{non-standard_inline}}
  - : Optional. Die Zeilennummer, die den Code enthält, welcher zu dem Fehler führt.

## Eigenschaften

- {{jsxref("EvalError.prototype")}}
  - : Erlaubt das Hinzufügen von Eigenschaften zu einem `EvalError` Objekt.

## Methoden

Das globale `EvalError` Objekt enthält keine eigen Methoden, jedoch erbt es einige Methoden über die Prototypenkette.

## `EvalError` Instanzen

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/EvalError/prototype', 'Eigenschaften')}}

### Methoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/EvalError/prototype', 'Methoden')}}

## Beispiele

`EvalError` wird nicht in der aktuellen ECMAScript Spezifikation verwendet und wird daher auch nicht von der Laufzeitumgebung erzeugt. Jedoch wird das Objekt aus Gründen der Rückwärtskompatibilität zu älteren Versionen der Spezifikation erhalten.

### Erstellen eines `EvalError`

```js
try {
  throw new EvalError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "EvalError"
  console.log(e.fileName);             // "someFile.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}
```

## Spezifikationen

| Spezifikation                                                                                                                    | Status                       | Kommentar                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                         | {{Spec2('ES3')}}         | Initiale Definition.                                                         |
| {{SpecName('ES5.1', '#sec-15.11.6.1', 'EvalError')}}                                                             | {{Spec2('ES5.1')}}     | Nicht benutzt in dieser Spezifikation. Erhalten für Rückwärtskompatibilität. |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-evalerror', 'EvalError')}}         | {{Spec2('ES6')}}         | Nicht benutzt in dieser Spezifikation. Erhalten für Rückwärtskompatibilität. |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-evalerror', 'EvalError')}} | {{Spec2('ESDraft')}} |                                                                              |

## Browserkompatibilität

{{Compat("javascript.builtins.EvalError")}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("EvalError.prototype")}}
- {{jsxref("Global_Objects/eval", "eval()")}}

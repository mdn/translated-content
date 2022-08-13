---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
tags:
  - Error
  - JavaScript
  - Object
  - Reference
  - SyntaxError
translation_of: Web/JavaScript/Reference/Global_Objects/SyntaxError
---
{{JSRef}}

Das **`SyntaxError`** Objekt repräsentiert einen Fehler, der auftritt, wenn versucht wird syntaktisch falschen Quelltext zu interpretieren.

## Beschreibung

Ein `SyntaxError` wird erzeugt, wenn die JavaScript-Umgebung Quelltextstücke entdeckt, die nicht der Syntax der Sprachdefinition von JavaScript entspricht.

## Syntax

    new SyntaxError([message[, fileName[, lineNumber]]])

### Parameter

- `message`
  - : Optional. Für Menschen lesbare Beschreibung des Fehlers.
- `fileName` {{non-standard_inline}}
  - : Optional. Der Name der Datei, in der der Fehler erzeugt wurde.
- `lineNumber` {{non-standard_inline}}
  - : Optional. Die Zeilennummer, in der der Fehler erzeugt wurde.

## Eigenschaften

- {{jsxref("SyntaxError.prototype")}}
  - : Erlaubt es Eigenschaften zu allen `SyntaxError` Objekten hinzuzufügen.

## Methoden

Das globale `SyntaxError`-Objekt enthält keine eigenen Methoden. Jedoch erbt das Objekt einige Methoden durch die Prototypenkette.

## `SyntaxError` Instanzen

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype', 'Eigenschaften')}}

### Methoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype', 'Methoden')}}

## Beispiele

### Auffangen eines `SyntaxError`

```js
try {
  eval('hoo bar');
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "missing ; before statement"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "Scratchpad/1"
  console.log(e.lineNumber);             // 1
  console.log(e.columnNumber);           // 4
  console.log(e.stack);                  // "@Scratchpad/1:2:3\n"
}
```

### Erzeugen eines `SyntaxError`

```js
try {
  throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "Hello"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "someFile.js"
  console.log(e.lineNumber);             // 10
  console.log(e.columnNumber);           // 0
  console.log(e.stack);                  // "@Scratchpad/2:11:9\n"
}
```

## Spezifikationen

| Spezifikation                                                                                                                        | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                             | {{Spec2('ES3')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.11.6.4', 'SyntaxError')}}                                                             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-syntaxerror', 'SyntaxError')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-syntaxerror', 'SyntaxError')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.SyntaxError")}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("SyntaxError.prototype")}}

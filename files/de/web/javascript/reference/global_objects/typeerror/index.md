---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
tags:
  - Error
  - JavaScript
  - Object
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Global_Objects/TypeError
---
{{JSRef}}

Das **`TypeError`** Objekt repräsentiert einen Fehler, wenn ein Wert nicht dem erwartetem Typ enspricht.

## Syntax

    new TypeError([message[, fileName[, lineNumber]]])

### Parameter

- `message`
  - : Optional. Beschreibung des Fehlers
- `fileName` {{non-standard_inline}}
  - : Optional. Name der Datei, welches den Fehlerverursachenden Code beinhaltet
- `lineNumber` {{non-standard_inline}}
  - : Optional. Zeilennummer des Codes, welches den Fehler verursacht

## Beschreibung

Ein `TypeError` wird generiert, wenn ein an eine Funktion mitgegebener Operand oder Argument, inkompatibel dem erwartetem Typ ist.

## Eigenschaften

- {{jsxref("TypeError.prototype")}}
  - : Erlaubt das Hinzufügen von Eigenschaften an einem `TypeError` Objekt.

## Methoden

Die Globale `TypeError` kennt keine eigene Methode, jedoch erbt diese einige Methoden durch die Prototype-Kette.

## `TypeError` Instanzen

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype', 'Eigenschaften')}}

### Methoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype', 'Methoden')}}

## Beispiele

### Abfangen eines `TypeError`

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "null hat keine Eigenschaften"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "Scratchpad/1"
  console.log(e.lineNumber);           // 2
  console.log(e.columnNumber);         // 2
  console.log(e.stack);                // "@Scratchpad/2:2:3\n"
}
```

### Erzeugen eines `TypeError`

```js
try {
  throw new TypeError('Hallo', "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "Hallo"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "someFile.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}
```

## Spezifikationen

| Spezifikation                                                                                                                    | Status                       | Kommentar           |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES3', '#sec-15.11.6.5', 'TypeError')}}                                                             | {{Spec2('ES3')}}         | Initiale Definition |
| {{SpecName('ES5.1', '#sec-15.11.6.5', 'TypeError')}}                                                             | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-typeerror', 'TypeError')}}         | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-typeerror', 'TypeError')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat("javascript.builtins.TypeError")}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("TypeError.prototype")}}

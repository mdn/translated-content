---
title: 'TypeError: cyclic object value'
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cyclic_object_value
original_slug: Web/JavaScript/Reference/Fehler/Cyclic_object_value
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: cyclic object value (Firefox)
    TypeError: Converting circular structure to JSON (Chrome and Opera)
    TypeError: Circular reference in value argument not supported (Microsoft Edge)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Wenn {{jsxref("JSON.stringify()")}} aufgerufen wird, kann eine zyklische Objektreferenzstruktur nicht zu eine String konvertiert werden.

## Beispiele

In eine zyklischen Struktur wie folgender

```js
var circularReference = {otherData: 123};
circularReference.myself = circularReference;
```

wird {{jsxref("JSON.stringify()")}} nicht funktionieren

```js example-bad
JSON.stringify(a);
// TypeError: cyclic object value
```

Um zyklische Referenzen zu serialisieren, kann man eine Bibliotheken benutzen (z. B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder eine eigene Lösung implementieren, welche zyklische Referenzen findet und mit serialisierbaren Werten ersetzt (oder diese entfernt).

Das folgende Codebeispiel zeigt, wie man eine zyklische Referenz mit dem Einsatz des `replacer` Parameters von {{jsxref("JSON.stringify()")}} findet und filtert (das bedeutet, es gehen Daten verloren):

```js
const getCircularReplacer = () => {
  const seen = new WeakSet;
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}
```

## Siehe auch

- {{jsxref("JSON.stringify")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – Führt zwei Funktionen ein, `JSON.decycle` und `JSON.retrocycle`, welche es ermöglichen zyklische Strukturen aufzulösen, diese in JSON unterzubringen und sie wieder zu erstellen.

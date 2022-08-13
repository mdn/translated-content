---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/has
---
{{JSRef}}

Die Methode **`has()`** prüft, ob ein `Set`-Objekt ein Element mit dem angegebenen Wert enthält und gibt entsprechend `true` oder `false` zurück.

## Syntax

    mySet.has(value);

### Parameter

- value
  - : Der zu suchende Wert.

### Rückgabewert

- Boolean
  - : Gibt `true` zurück, falls ein Element mit dem angegebenen Wert innerhalb des `Set`-Objektes existiert, ansonsten wird `false` zurückgegeben.

## Beispiel

### `has()` verwenden

Das folgende Beispiel verwendet `has()`, um zu prüfen, ob bestimmte Werte in einem `Set` enthalten sind oder nicht.

```js
var mySet = new Set();
mySet.add('foo');

mySet.has('foo');  // returns true
mySet.has('bar');  // returns false
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.has', 'Set.prototype.has')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-set.prototype.has', 'Set.prototype.has')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}

---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
translation_of: Web/JavaScript/Reference/Global_Objects/Set/add
---
{{JSRef}}

Die **`add()`** Methode fügt ein neues Element mit dem angegebenen Wert an das Ende eines `Set` Objekts hinzu.

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## Syntax

    mySet.add(value);

### Parameter

- `value`
  - : Der hinzufügende Wert zu dem `Set` Objekt.

### Rückgabewert

Das `Set` Objekt.

## Beispiele

### Verwenden der add() Methode

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5).add('some text'); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
```

## Spezifikationen

| Spezifikation                                                                                |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-set.prototype.add', 'Set.prototype.add')}} |

## Browserkompatibilität

{{Compat("javascript.builtins.Set.add")}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}

---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
translation_of: Web/JavaScript/Reference/Global_Objects/Set/delete
---
{{JSRef}}

Die **`delete()`** Methode entfernt das angegebene Element aus einem `Set` Objekt.

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## Syntax

    mySet.delete(value);

### Parameter

- `value`
  - : Der zu entfernende Wert aus `mySet`.

### Rückgabewert

Rückgabewert ist `true` wenn `value` erfolgreich aus `mySet entfernt wurde`; ansonsten`false`.

## Beispiel

### Verwenden der delete() Methode

```js
const mySet = new Set();
mySet.add('foo');

mySet.delete('bar'); // Returns false. No "bar" element found to be deleted.
mySet.delete('foo'); // Returns true.  Successfully removed.

mySet.has('foo');    // Returns false. The "foo" element is no longer present.
```

Ein Beispiel, wie ein Objekt aus einem Set entfernt werden kann.

```js
const setObj = new Set();   // Create a New Set.

setObj.add({x: 10, y: 20}); // Add object in the set.

setObj.add({x: 20, y: 30}); // Add object in the set.

// Delete any point with `x > 10`.
setObj.forEach(function(point){
  if (point.x > 10){
    setObj.delete(point)
  }
})
```

## Spezifikationen

| Specification                                                                                        |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-set.prototype.delete', 'Set.prototype.delete')}} |

## Browserkompatibilität

{{Compat("javascript.builtins.Set.delete")}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}

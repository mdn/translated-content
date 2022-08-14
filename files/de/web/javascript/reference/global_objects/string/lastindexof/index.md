---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
translation_of: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---
{{JSRef("Global_Objects", "String")}}

## Zusammenfassung

Die **`lastIndexOf()`** Methode gibt den Index des letzten Vorkommnisses des angegebenen Wertes innerhalb des aufrufenden {{jsxref("Global_Objects/String", "Strings")}} Objekts zurück, oder -1, wenn der Wert nicht gefunden wurde. Der aufrufende String wird rückwärts durchsucht, beginnend beim `fromIndex`.

## Syntax

    str.lastIndexOf(searchValue[, fromIndex])

### Parameter

- `searchValue`
  - : Ein String mit dem Wert, nach dem gesucht werden soll.
- `fromIndex`
  - : Optional. Die Position im aufrufenden String, ab der gesucht rückwärts werden soll. The Position wird gezählt von links nach rechts. Gesucht wird von dieser Position ab nach links. Diese kann jeden Integerwert annehmen. Der Standartwert ist `str.length`. Wenn der Wert negativ ist, wird 0 verwendet. Wenn `fromIndex > str.length`, wird `str.length `statt `fromIndex` benutzt.

## Beschreibung

Zeichen in einem String werden von links nach rechts gezählt. Der Index des ersten Zeichens ist 0, der Index des letzten Zeichens ist `stringName.length - 1`.

```js
'canal'.lastIndexOf('a');     // returns 3
'canal'.lastIndexOf('a', 2);  // returns 1
'canal'.lastIndexOf('a', 0);  // returns -1
'canal'.lastIndexOf('x');     // returns -1
```

### Groß- und Kleinschreibung

Die `lastIndexOf() `Methode unterscheidet zwischen Groß- und Kleinschreibung. Der folgende Ausdruck gibt zum Beispiel `-1` zurück.

```js
'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1
```

## Beispiele

### Beispiel: Benutzung von `indexOf()` und `lastIndexOf()`

Das folgende Beispiel verwendet {{jsxref("String.prototype.indexOf()", "indexOf()")}} und `lastIndexOf(),` um Werte im String `"Brave new world" zu finden`.

```js
var anyString = 'Brave new world';

console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));
// Displays 8
console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w'));
// Displays 10

console.log('The index of "new" from the beginning is ' + anyString.indexOf('new'));
// Displays 6
console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new'));
// Displays 6
```

## Spezifikationen

| Specification                                                                                                        | Status                   | Comment             |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| ECMAScript 1st Edition.                                                                                              | Standard                 | Initial definition. |
| {{SpecName('ES5.1', '#sec-15.5.4.8', 'String.prototype.lastIndexOf')}}                         | {{Spec2('ES5.1')}} |                     |
| {{SpecName('ES6', '#sec-string.prototype.lastindexof', 'String.prototype.lastIndexOf')}} | {{Spec2('ES6')}}     |                     |

## Browserkompatibilität

{{Compat}}

## Links

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}

---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/indexOf
---
{{JSRef}}

Die **`indexOf()`** Methode gibt den Index der Zeichenkette innerhalb des aufrufenden {{jsxref("Global_Objects/String", "String")}} Objekts des ersten Vorkommnis des angegebenen Wertes beginnend bei `fromIndex` zurück. Gibt -1 zurück, wenn der Wert nicht gefunden wurde.

## Syntax

    str.indexOf(searchValue[, fromIndex])

### Parameter

- `searchValue`
  - : Ein String der den zu suchenden Wert repräsentiert.
- `fromIndex` {{optional_inline}}
  - : Der Index, von dem angefangen wird vorwärts im String zu suchen. Der Standardwert ist 0, so dass der ganze String durchsucht wird. Wenn `fromIndex < 0` ist, wird der ganze String durchsucht. Wenn `fromIndex >= str.length` ist, wird der String nicht durchsucht und -1 wird zurückgegeben. Die Ausnahme ist, wenn für `searchValue` ein leeren String eingesetzt wird, dann wird `str.length` zurückgegeben.

### Rückgabewert

Den Index des ersten Vorkommens des gesuchten Wertes; **-1** wenn der Wert nicht gefunden wurde.

## Beschreibung

Die Zeichen in einem String sind von links nach rechts nummeriert. Der Index des ersten Zeichens ist 0, und der Index des letzten Zeichens eines Strings mit Namen ` stringName``  `ist `stringName.length - 1`.

```js
'Blue Whale'.indexOf('Blue');     // returns  0
'Blue Whale'.indexOf('Blute');    // returns -1
'Blue Whale'.indexOf('Whale', 0); // returns  5
'Blue Whale'.indexOf('Whale', 5); // returns  5
'Blue Whale'.indexOf('', 9);      // returns  9
'Blue Whale'.indexOf('', 10);     // returns 10
'Blue Whale'.indexOf('', 11);     // returns 10
```

### Groß- und Kleinschreibung

Die `indexOf()` Methode unterscheidet zwischen Groß- und Kleinschreibung. Zum Beispiel gibt die folgende Zeile -1 zurück:

```js
'Blue Whale'.indexOf('blue'); // returns -1
```

### Vorkommnisse prüfen

Zu beachten ist, dass '0' nicht zu `true` und '-1' nicht zu `false` ausgewertet wird. Deswegen ist der korrekte weg zum überprüfen, ob ein String in einem anderen String existiert, der folgende:

```js
'Blue Whale'.indexOf('Blue') != -1; // true
'Blue Whale'.indexOf('Bloe') != -1; // false
```

## Beispiele

### Einsatz von `indexOf()` `und lastIndexOf()`

Die folgenden Beispiele benutzen `indexOf()` und {{jsxref("String.prototype.lastIndexOf()", "lastIndexOf()")}}, um Werte im String `"Brave new world"` zu finden.

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

### `indexOf()` und Groß- und Kleinschreibung

Das folgende Beispiel definiert zwei Strings. Die Variablen enthalten den selben String, außer dass der zweite String Großbuchstaben enthält. Die erste {{domxref("console.log()")}} Methode zeigt 19. Da die `indexOf()` Methode Groß- und Kleinschreibung unterscheidet, wird der String`"cheddar"` im String `myCapString` nicht gefunden. Deshalb gibt die zweite `console.log()` Methode -1 zurück.

```js
var myString    = 'brie, pepper jack, cheddar';
var myCapString = 'Brie, Pepper Jack, Cheddar';

console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'));
// Displays 19
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar'));
// Displays -1
```

### Einsatz von `indexOf()`, um das Vorkommen eines Buchstaben in einem String zu zählen

Das folgende Beispiel setzt `count` auf die Anzahl der Vorkommnisse des Buchstaben `e` in dem String `str`:

```js
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos != -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}

console.log(count); // displays 4
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.5.4.7', 'String.prototype.indexOf')}}                         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-string.prototype.indexof', 'String.prototype.indexOf')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-string.prototype.indexof', 'String.prototype.indexOf')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}

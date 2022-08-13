---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Referenz
  - String
  - protype
translation_of: Web/JavaScript/Reference/Global_Objects/String/startsWith
---
{{JSRef}}

Die **startsWith()-**Methode stellt fest, ob ein String mit den Zeichen eines anderen Strings beginnt, falls dies so ist, wird `true`, sonst wird `false` zurückgegeben.

    str.startsWith(searchString[, position])

### Parameter

- `searchString`
  - : Die Zeichenfolge, nach der am Anfang des Strings gesucht wird.
- `position`
  - : Optional. Die Position, an der die Suche nach `searchString` begonnen werden soll. Der Standardwert ist 0.

### Rückgabewert

**true** wenn der String mit den Zeichen aus dem übergebenen String beginnt, andernfalls **false**.

## Beschreibung

Diese Methode dient dazu herauszufinden, ob ein String am Anfang eines anderen Strings steht. Die Methode unterscheidet Groß- und Kleinschreibung.

## Beispiele

### Benutzung von `startsWith()`

```js
//startsWith
var str = 'Sein oder nicht sein, das ist hier die Frage';

console.log(str.startsWith('Sein oder'));      // true
console.log(str.startsWith('nicht sein'));     // false
console.log(str.startsWith('nicht sein', 10)); // true
```

## Polyfill

Diese Methode ist Bestandteil der ECMAScript-6-Spezifikation. Dennoch kann es vorkommen, dass sie noch nicht in allen Javascript-Implementierungen vorhanden ist. Man kann ihre Funktionsweise allerdings mit folgendem Ausdruck emulieren:

```js
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
```

Eine robustere und schnellerer (optimierte) Version findet sich [auf GitHub, geschrieben von Mathias Bynens](https://github.com/mathiasbynens/String.prototype.startsWith).

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-string.prototype.startswith', 'String.prototype.startsWith')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-string.prototype.startswith', 'String.prototype.startsWith')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat}}

##

Zu beachten ist, dass die MSDN Dokumentation für diese Methode ([https://msdn.microsoft.com/en-us/library/mt146831(v=vs.94).aspx](<https://msdn.microsoft.com/de/library/mt146831(v=vs.94).aspx>)) besagt, das es nicht im Internet Explorer unterstützt wird.

## Siehe auch

- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}

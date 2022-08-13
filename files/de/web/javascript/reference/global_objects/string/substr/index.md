---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/substr
---
{{JSRef}}

Die Methode **`substr()`** gibt die Zeichen eines Strings in einem gegebenen Intervall zurück.

## Syntax

    str.substr(start[, length])

### Parameter

- `start`
  - : Ort im String, an dem mit dem Extrahieren von Zeichen begonnen wird. Wird eine negative Zahl übergeben, wird sie als `str.length - start` behandelt (Wenn `start` z. B. -3 ist, wird es als `str.length - 3` behandelt).
- `length`
  - : Optional. Die Anzahl der Zeichen, die extrahiert werden sollen.

### Rückgabewert

Einen neuen String, der den extrahierten Bereich des gegebene Strings enthält. Wenn **`length` `0`** oder negativ ist, wird ein leerer String zurückgegeben.

## Beschreibung

`start` ist ein Zeichenindex. Der Index des ersten Zeichens ist 0 und der Index des letzten Zeichens ist 1 weniger als die Länge des Strings. `substr()`fängt mit dem Extrahieren von Zeichen bei `start` an und extrahiert `length` Zeichen (es sei denn, es erreicht vorher das Ende des Strings, dann gibt es weniger zurück).

Wenn `start` positiv ist und größer gleich der Länge des Strings ist, gibt `substr()` einen leeren String zurück.

Wenn `start` negativ ist, verwendet `substr()` es als Zeichenindex vom Ende des Strings. Wenn `start` negativ ist und `abs(start)` größer als die Länge des Strings ist, verwendet `substr()` 0 als Zeichenindex. Anmerkung: Der beschriebene Umgang mit negativen Werten für `start` wird von Microsoft JScript nicht unterstützt.

Wenn `length` 0 oder negativ ist, gibt `substr()` einen leeren String zurück. Wenn `length` nicht übergeben wird, extrahiert `substr()` alle Zeichen bis zum Ende des Strings.

## Beispiele

### Verwenden von `substr()`

```js
var str = 'abcdefghij';

console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'
console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
console.log('(1): '      + str.substr(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '
```

## Polyfill

Microsofts JScript unterstützt keine negativen Werte für den Startindex. Der folgende Kompatibilitätscode ist ein Workaround für diesen Bug:

```js
// Nur verwenden, wenn die substr()-Funktion nicht funktioniert
if ('ab'.substr(-1) != 'b') {
  /**
   *  Einen Teilstring erhalten
   *  @param  {integer}  start   Startindex des Teilstrings
   *  @param  {integer}  length  Länge des Teilstrings
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
       // Aufruf der Originalfunktion
       return substr.call(this,
         // Wenn start negativ ist, berechnen wie viel start
         // vom Anfang des Strings ist
         start < 0 ? this.length + start : start,
         length);
    }
  }(String.prototype.substr);
}
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                                                              |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Im (informativen) Anhang B "Compatibility" definiert. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-B.2.3', 'String.prototype.substr')}}                         | {{Spec2('ES5.1')}}     | Im (informativen) Anhang B "Compatibility" definiert.                                  |
| {{SpecName('ES6', '#sec-string.prototype.substr', 'String.prototype.substr')}}     | {{Spec2('ES6')}}         | Im (normativen) Anhang B "Additional ECMAScript Features for Web Browsers" definiert.  |
| {{SpecName('ESDraft', '#sec-string.prototype.substr', 'String.prototype.substr')}} | {{Spec2('ESDraft')}} | Im (normativen) Anhang B "Additional ECMAScript Features for Web Browsers" definiert.  |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}

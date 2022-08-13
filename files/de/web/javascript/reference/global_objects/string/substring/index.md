---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
tags:
  - Funktion
  - JavaScript
  - Method
  - Methode(2)
  - Méthode
  - Prototype
  - Reference
  - Referenz
  - Référence(2)
  - String
  - Zeichenkette
translation_of: Web/JavaScript/Reference/Global_Objects/String/substring
---
{{JSRef("Global_Objects", "String")}}

## Definition

Die **`substring()`** Methode gibt einen Teilstring eines `Strings` zwischen einem Index und einem anderen, oder dem Ende der Zeichenkette zurück.

## Syntax

    str.substring(indexA[, indexB])

### Parameter

- `indexA`
  - : Ein Integer zwischen `0` und der Länge der Zeichenkette, welcher das erste Zeichen des Teilstrings repräsentiert.
- `indexB`
  - : Optional. Ein Integer zwischen `0` und der Länge der Zeichenkette, welcher das erste nicht im Teilstring enthaltene Zeichen darstellt.

## Beschreibung

`substring()` extrahiert Zeichen von `indexA` bis nicht einschließlich `indexB`. Im Detail:

- Falls `indexA` gleich `indexB ist`, gibt `substring()` einen leeren String zurück.
- Falls `indexB` nicht angegeben ist, extrahiert `substring()` alle Zeichen bis zum Ende der Zeichenkette.
- Falls eines der Argumente kleiner als 0 oder {{jsxref("Global_Objects/NaN", "NaN")}} ist, wird dieser als 0 interpretiert.
- Falls eines der Argumente größer als die Länge der Zeichenkette ist, wird dieses als `stringName.length behandelt`.

Falls `indexA` größer als `indexB ist`, werden die Argumente vertauscht `substring()`; zum Beispiel, `str.substring(1, 0) == str.substring(0, 1)`.

## Beispiele

### Beispiel: Benutzung von `substring()`

Das folgende Beispiel benutzt `substring()`, um Zeichen des Strings `'Mozilla' anzuzeigen`:

```js
var anyString = 'Mozilla';

// Zeigt 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// Zeigt 'lla'
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Zeigt 'Mozill'
console.log(anyString.substring(0, 6));

// Zeigt 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

### Beispiel: Benutzung von `substring()` mit `length` Eigenschaft

Das folgende Beispiel benutzt die `substring()` Methode und die {{jsxref("String.length", "length")}} Eigenschaft, um die letzten Zeichen des Strings zu extrahieren. Diese Methode ist leichter zu merken, da die genauen Start- und Endparameter nicht bekannt sein müssen.

```js
// Zeigt 'illa' - die letzten 4 Zeichen
var anyString = 'Mozilla';
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Zeigt 'zilla' - die letzten 5 Zeichen
var anyString = 'Mozilla';
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
```

### Beispiel: Ersetze ein Teilstring mit einem String

Das folgende Beispiel ersetzt ein Teilstring mit einem String. Es werden sowohhl einzelne Zeichen als auch Teilstrings ersetzt. Der Funktionsaufruf am Ende des Beispiel ändert die Zeichenkette `'Brave New World'` in `'Brave New Web'`.

```js
// Ersetzt oldS mit newS in der Zeichenkette fullS
function replaceString(oldS, newS, fullS) {
  for (var i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString('World', 'Web', 'Brave New World');
```

Beachte, dass dieses Beispiel auch in einer Endlosschleife resultieren kann, wenn `oldS` ein Teilstring von `newS` ist — zum Beispiel, falls 'World' mit 'OtherWorld' ersetzt wird. Der folgende Code zeigt ein bessere Methode Strings zu ersetzen:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Der oben stehende Code zeigt ein Beispiel für die Verwendung der substring Operation. Falls Teilstrings ersetzt werden, kann in den meisten Fällen {{jsxref("String.prototype.replace()")}} verwendet werden.

## Spezifikationen

| Spezifikation                                                                                                    | Status                   | Kommentar                        |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------- |
| ECMAScript 1. Edition.                                                                                           | Standard                 | In JavaScript 1.0 implementiert. |
| {{SpecName('ES5.1', '#sec-15.5.4.15', 'String.prototype.substring')}}                     | {{Spec2('ES5.1')}} |                                  |
| {{SpecName('ES6', '#sec-string.prototype.substring', 'String.prototype.substring')}} | {{Spec2('ES6')}}     |                                  |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}

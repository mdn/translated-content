---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/includes
---
{{JSRef}}

Die **`includes()-`**Methode gibt an, ob ein String innerhalb eines anderen Strings gefunden wird und gibt dabei `true` oder `false` wieder.

## Syntax

    str.includes(searchString[, position])

### Parameter

- `searchString`
  - : Ein String, der innerhalb eines anderen Strings gesucht wird.
- `position`
  - : Optional. Die Position innerhalb des besuchten Strings durch `searchString`; Standard ist 0.

### Wertwiedergabe

**`true`**, wenn der String den gesuchten String enthält, andernfalls **`false`**.

## Beschreibung

Diese Methode lässt dich feststellen, ob ein String einen anderen String beinhaltet.

### Achtung auf Groß-, Kleinschreibung

Bei der `includes()`-Methode muss auf Groß- und Kleinschreibung geachtet werden.
Zum Beispiel gibt die folgende Darstellung `false` aus:

```js
'Blue Whale'.includes('blue'); // gibt false wieder
```

## Beispiele

### Einsatz von `includes()`

```js
var str = 'Sein oder nicht sein, das ist hier die Frage.';

console.log(str.includes('Sein'));        // true
console.log(str.includes('Frage'));       // true
console.log(str.includes('nicht da'));    // false
console.log(str.includes('Sein', 1));     // false
console.log(str.includes('SEIN'));        // false
```

## Polyfill

Diese Methode wurde den ECMAScript 6 Spezifikationen hinzugefügt und könnte nicht in allen JavaScript-Umgebunden vorhanden sein. Jedoch kann man diesen Polyfill nutzen:

```js
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```

## Spezifikationen

| Spezifikationen                                                                                                      | Status                       | Kommentar        |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------- |
| {{SpecName('ES2015', '#sec-string.prototype.includes', 'String.prototype.includes')}}     | {{Spec2('ES2015')}}     | erste Definition |
| {{SpecName('ESDraft', '#sec-string.prototype.includes', 'String.prototype.includes')}} | {{Spec2('ESDraft')}} |                  |

## Browser-Kompatibilität

{{Compat("javascript.builtins.String.includes")}}

## String.prototype.contains

In Firefox 18 - 39 hieß diese Methode `contains()`. Es wurde zu `includes()` ({{bug(1102219)}}) wegen folgender Gründe umbenannt:

Es wurde gemeldet, dass manche Webseiten, die MooTools 1.2 nutzen mit Firefox 17 nicht mehr funktionieren. Diese Version von MooTools kontrolliert, ob `String.prototype.contains()` existiert und, wenn nicht, fügt es seine eigene Funktion hinzu.
Mit der Einführung dieser Funktion in Firefox 17 wurde das Verhalten dieser Kontrolle geändert, sodass auf MooTools `String.prototype.contains()` basierender Code funktionsunfähig wurde.
Aufgrund dessen wurde die Implementierung in Firefox 17 [abgeschaltet](https://hg.mozilla.org/releases/mozilla-aurora/rev/086db97198a8)und `String.prototype.contains()` war in Firefox 18 nutzbar. Ermöglicht wurde dies durch die [Veröffentlichung von MooTools Version 1.2.6.](http://mootools.net/blog/2013/02/19/mootools-1-2-6-released)

MooTools 1.3 erzwingt die Nutzung der eigenen Version von `String.prototype.contains()`, demnach sollten Webseiten, die abhängig davon sind, weiterhin funktionieren. Beachte jedoch, dass sich die [MooTools 1.3 Signatur](http://mootools.net/core/docs/1.3.2/Types/String#String-method:-contains)von der ECMAScript 6 Signatur für diese Methode unterscheidet.

Später änderte [MooTools 1.5+ die Signatur, um sie dem ES2015 Standard anzupassen.](https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note)

In Firefox 48 wurde `String.prototype.contains()` entfernt. Nutze lediglich `String.prototype.includes()`.

## Siehe auch

- {{jsxref("Array.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("TypedArray.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}

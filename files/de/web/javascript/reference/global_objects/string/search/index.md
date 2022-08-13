---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
tags:
  - JavaScript
  - Méthode
  - Prototyp
  - Referenz
  - Regulärer Ausdruck
  - Zeichenkette
translation_of: Web/JavaScript/Reference/Global_Objects/String/search
original_slug: Web/JavaScript/Reference/Global_Objects/String/suchen
---
{{JSRef}}

Die **`search()`** methode führt eine Suche für eine Übereinstimmung von einem Regulären Ausdruck und diesem {{jsxref("String")}} Objekt.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Syntax

    str.search(regexp)

### Parameter

- `regexp`
  - : Ein Regulär-Ausdruck Objekt. Wenn ein nicht-RegExp Objekt `obj` eingereicht wird, wird es durch `new RegExp(obj)` zu {{jsxref("RegExp")}} konvertiert.

### Rückgabewert

Die erste übereinstimmung zwischen dem Regulären Audruck und und der gegebenen Zeichenkette; wenn nicht gefunden, **-1**.

## Beschreibung

Wenn du wissen willst ob ein Muster gefunden wurde, und was sein Index ist nutze `search()` (wenn du nur wissen willst ob es das gibt nutze die ähnliche {{jsxref("RegExp.prototype.test()", "test()")}} Methode auf dem RegExp Prototyp, der einen boolean zurückgibt); für mehr informationen (aber langsamererere Ausführung) nutze {{jsxref("String.prototype.match()", "match()")}} (ähnlich zum Ausdruck {{jsxref("RegExp.prototype.exec()", "exec()")}}).

## Beispiele

### Benutzung von `search()`

Das folgende Beispiel durchsucht eine Zeichenkette mit 2 verschiedenen regex Objekten, um eine erfolgreiche, und unerfolgreiche Suche zu zeigen.

```js
var str = "hey LukE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // gibt 4 zurück, was der Index des ersten Großbuchstaben "L" ist.
console.log(str.search(re2)); // gibt -1 zurück kann "." nicht finden
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                           |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Initielle Definition. Eingeführt in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.12', 'String.prototype.search')}}                     | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-string.prototype.search', 'String.prototype.search')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-string.prototype.search', 'String.prototype.search')}} | {{Spec2('ESDraft')}} |                                                     |

## Browser Kompatibilität

{{Compat("javascript.builtins.String.search")}}

## Gecko-spezifische Hinweise

- `flags` war ein nicht-standard Zweitargument nur in Gecko verfügbar: _str_.search(_regexp, flags_)
- Vorher {{Gecko("8.0")}}, `search()` war falsch eingeführt; wenn es ohne oder mit {{jsxref("undefined")}} parametern Ausgeführt wurde, würde es mit 'undefined' übereinstimmen, anstatt mit einer leeren Zeichenkette übereinzustimmen. Das wurde behoben; jetzt ist `'a'.search()` und `'a'.search(undefined)` korrekt und geben 0 zurück.
- Ab Gecko 39 {{geckoRelease(39)}}, gibt das nicht-Standard `flag` Argument eine Konsolenwarnung ({{bug(1142351)}}).
- Ab Gecko 47 {{geckoRelease(47)}}, ist das nicht-Standard `flag` Argument nicht länger unterstützt in nicht-veröffentlichten Builds und wird bald vollständig entfernt ({{bug(1245801)}}).
- Ab Gecko 49 {{geckoRelease(49)}}, ist das nicht-Standard `flag` Argument nicht länger unterstützt ({{bug(1108382)}}).

## Siehe auch

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}

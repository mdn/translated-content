---
title: String.length
slug: Web/JavaScript/Reference/Global_Objects/String/length
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/length
---
{{JSRef}}

Die **`length`** Eigenschaft repräsentiert die Länge eines Strings.

## Syntax

    str.length

## Beschreibung

Die **`length`** Eigenschaft gibt die Anzahl der Codeteile des Strings zurück. Javascript verwendet {{interwiki("wikipedia", "UTF-16")}}. , also einen 16-Bit Code zur Kodierung der meisten Zeichen, aber zur Darstellung weniger verbreiteter Zeichen werden 2 Codes benötigt. Es ist also durchaus möglich, dass der zurückgegebene Wert nicht der Anzahl der Zeichen in einem String entspricht.

ECMAScript 2016 (ed. 7) Spezifikation definiert eine maximale Länge von `253 - 1 `Elementen.
Vor dieser Spezifikation war keine maximale Länge an Elementen definiert.

Ein leerer String hat die Länge 0.

Die statische String-Eigenschaft gibt den Wert 1 zurück.

## Beispiele

### Grundlegende Nutzung

```js
var str = 'Mozilla';
var leerstr = '';

console.log('Mozilla ist ' + str.length + ' Zeichen lang');
/* "Mozilla ist 7 Zeichen lang" */

console.log('Der leere String hat eine Länge von ' + leerstr.length + 'Zeichen');
/* "Der leere String hat eine Länge von 0 Zeichen" */
```

## Spezifikationen

| Spezifikation                                                                                                                    | Status                       | Kommentar                                            |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                         | {{Spec2('ES1')}}         | Initiale Deinition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.5.1', 'String.prototype.length')}}                                         | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-properties-of-string-instances-length', 'String.prototype.length')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-properties-of-string-instances-length', 'String.prototype.length')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.builtins.String.length")}}

## Siehe auch

- [JavaScript `String.length` and Internationalizing Web Applications](http://developer.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)

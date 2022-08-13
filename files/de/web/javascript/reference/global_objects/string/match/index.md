---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
tags:
  - JavaScript
  - Method
  - Property
  - Reference
  - Regular Expression
  - String
  - match
  - Übereinstimmung
translation_of: Web/JavaScript/Reference/Global_Objects/String/match
---
{{JSRef}}

**`match()`** gibt zurück, wo ein regulärer Ausdruck in einem String enthalten ist.

## Syntax

    str.match(regexp)

### Parameter

- `regexp`
  - : Ein regulärer Ausdruck. Falls `regexp` kein Objekt vom Typ {{jsxref("RegExp")}} ist wird es mit Hilfe von `new RegExp(obj)` konvertiert. Falls dieser Parameter nicht übergeben wird, wird ein {{jsxref("Array")}} mit einem leeren {{jsxref("String")}} zurückgegben: \[""].

### Rückgabewert

Es wird ein {{jsxref("Array")}} zurückgegeben, das als erstes Element den gesamten übereinstimmenden String enthält, gefolgt von allen weiteren Treffern, die in Klammern angegeben wurden. Falls keine Übereinstimmungen gefunden wurden, wird {{jsxref("null")}} zurückgegeben.

## Beschreibung

Falls der reguläre Ausdruck nicht den Modifikator `g` enthält, verhält sich **`match()` **wie {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}. Im zurückgegebenen {{jsxref("Array")}} sind zusätzlich die propertys `input` und `index` enthalten. `input` ist gleich dem zu durchsuchenden String, `index` enthält den Index der Übereinstimmung.

Falls der `g` Modifikator im regulären Ausdruck enthalten ist, wird ein {{jsxref("Array")}} mit allen übereinstimmenden Substrings zurückgegeben.

## Beispiele

### Verwendung von `match()`

Im folgenden Beispiel wird **`match()`** verwendet um `'Kapitel'` und anschließend eine oder mehrere Zahlen, gefolgt von einem Punkt und einer Zahl, 0 oder mehrmals zu finden. Der reguläre Ausdruck enthält den `i` Modifikator und unterscheidet somit nicht zwischen Groß- und Kleinschreibung.

```js
var str = 'Fuer mehr Informationen siehe Kapitel 3.4.5.1';
var re = /siehe (kapitel \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// gibt folgendes auf der Konsole aus:
//   [ 'siehe Kapitel 3.4.5.1',
//     'Kapitel 3.4.5.1',
//     '.1',
//     index: 22,
//     input: 'Fuer mehr Informationen siehe Kapitel 3.4.5.1' ]
```

### Verwendung von `match()` mit den `i` und `g` Modifikatoren

Die Buchstaben von A - E und von a - e werden auf der Konsole ausgegeben.

```js
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

### `match()` ohne Parameter

```js
var str = "Nichts kommt von nichts.";

str.match();
// [""]
```

### Verwendung mit einem nicht regulären Ausdruck

Falls ein String oder eine Zahl anstatt eines regulären Ausdrucks übergeben wird, wird der Parameter in einen {{jsxref("RegExp", "regulären Ausdruck")}} konvertiert. Ist es eine positive Zahl mit Vorzeichen, wird das positive Vorzeichen ignoriert.

```js
var str1 = "NaN bedeutet not a number. Infinity enthält -Infinity and +Infinity in JavaScript.",
    str2 = "Zahlen: 1, 6, 3",
    str3 = "null ist ein Datentyp.";

str1.match("number");   // ["number"]
str1.match(NaN);        // ["NaN"]
str1.match(Infinity);   // ["Infinity"]
str1.match(+Infinity);  // ["Infinity"]
str1.match(-Infinity);  // ["-Infinity"]
str2.match(6);          // ["6"]
str2.match(+3);         // ["3"]
str3.match(null);       // ["null"]
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Extras                                              |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Anfangsdefinition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.10', 'String.prototype.match')}}                     | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-string.prototype.match', 'String.prototype.match')}}         | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-string.prototype.match', 'String.prototype.match')}} | {{Spec2('ESDraft')}} |                                                     |

## Browser-Kompatibilität

{{Compat("javascript.builtins.String.match")}}

## Siehe auch

- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}

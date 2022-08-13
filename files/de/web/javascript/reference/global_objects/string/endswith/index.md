---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
tags:
  - JavaScript
  - Méthode
  - Prototyp
  - Referenz
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/endsWith
---
{{JSRef}}

Die Methode **`endsWith()`** bestimmt, ob ein String das Ende eines anderen Strings ist, und liefert entsprechend true oder false zurück.

## Syntax

    str.endsWith(suchString[, position])

### Parameter

- `suchString`
  - : Der String, nach dem am Ende von str gesucht wird.
- `position`
  - : Optional. Durchsucht str, als wäre es nur **position** Zeichen lang. Standardmäßig wird die Länge von str benutzt, wird automatisch auf die Länge von str gebracht, falls diese überschritten wird.

### Rückgabewert

`Falls suchString das Ende von str ist, wird`**`true`** zurückgeliefert, andernfalls wird **`false`** zurückgeliefert.

## Beschreibung

Diese Methode bestimmt, ob ein String das Ende eines anderen Strings ist. Die Methode unterscheidet zwischen Groß- und Kleinschreibung.

## Beispiele

### Benutzung von `endsWith()`

```js
var str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be'));     // false
console.log(str.endsWith('to be', 19)); // true
```

## Polyfill

Diese Methode wurde der ECMAScript6-Spezifikation hinzugefügt und könnte noch nicht in allen JavaScript-Implementierungen verfügbar sein. Mithilfe des folgenden Code-Stücks kann die Methode auch bei fehlender Implementierung genutzt werden:

```js
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}
```

## Spezifikation

| Specifikation                                                                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-string.prototype.endswith', 'String.prototype.endsWith')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-string.prototype.endswith', 'String.prototype.endsWith')}} | {{Spec2('ESDraft')}} |                      |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}

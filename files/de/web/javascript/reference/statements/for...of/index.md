---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
tags:
  - ECMAScript 2015
  - Experimental
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/for...of
---
{{jsSidebar("Statements")}}

Mit dem **`for...of` statement** können sogenannte [iterable objects](/de/docs/Web/JavaScript/Guide/iterable) durchlaufen werden ({{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, das [arguments](/de/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) Objekt und weitere eingeschlossen), wobei auf jeden gefundenen Wert eigene Statements ausgeführt werden können.

## Syntax

    for (variable of iterable) {
      statement
    }

- `variable`
  - : Bei jedem Durchlauf wird _variable_ der jeweils gefundene Wert zugewiesen.
- iterable
  - : Objekt, dessen aufzählbare Eigenschaften durchlaufen werden.

## Beispiele

### Unterschied zwischen `for...of` und `for...in`

Das folgende Beispiel zeigt den Unterschied zwischen einer `for...of` und einer [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in "en-US/docs/JavaScript/Reference/Statements/for...in") Schleife. Während `for...in` über die Namen der Eigenschaften läuft, geht `for...of` über deren Werte:

```js
let arr = [3, 5, 7];
arr.foo = "hallo";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
```

### Nutzen von `Array.prototype.forEach()`

Um dieselben Werte zu bekommen, die eine `for...of` Schleife zurückgeben würde, kann man auch die {{jsxref("Array.prototype.forEach()")}} Methode nutzen:

```js
let arr = [3, 5, 7];
arr.foo = "hallo";

arr.forEach(function (element, index) {
    console.log(element); // logs "3", "5", "7"
    console.log(index);   // logs "0", "1", "2"
});

// or with Object.keys()

Object.keys(arr).forEach(function (element, index) {
    console.log(arr[element]); // logs "3", "5", "7", "hallo"
    console.log(arr[index]);   // logs "3", "5", "7"
});
```

### Durchlaufen von DOM collections

DOM collections wie {{domxref("NodeList")}} durchlaufen: Das folgende Beispiel fügt eine `read` class zu allen Paragraphen hinzu, die direkte Nachfolger eines Artikels sind:

```js
// Notiz: Das wird nur auf Plattformen funktionieren, die
// NodeList.prototype[Symbol.iterator] implementiert haben
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Durchlaufen von Generatoren

Man kann auch [Generatoren](/de/docs/Web/JavaScript/Reference/Statements/function*) durchlaufen:

```js
function* fibonacci() { // ein Generator
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    // die Sequence bei 1000 abbrechen
    if (n > 1000)
        break;
    console.log(n);
}
```

## Spezifikation

| Spezifikation                                                                                                | Status                   | Kommentar           |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('ES2015', '#sec-for-in-and-for-of-statements', 'for...of statement')}} | {{Spec2('ES2015')}} | Initial definition. |

## Browserkompatibilität

{{Compat}}

\[1] Dieses Feature ist als Option enthalten. In chrome://flags/#enable-javascript-harmony muss der Eintrag “Enable Experimental JavaScript” aktiviert werden.

## See also

- [for each...in](/de/docs/Web/JavaScript/Reference/Statements/for_each...in) - ein ähnliches Statement, durchläuft aber die Werte der Objekt-Eigenschaften statt der Namen der Eigenschaften selbst (veraltet).
- {{jsxref("Array.prototype.forEach()")}}

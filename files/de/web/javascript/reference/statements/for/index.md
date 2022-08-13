---
title: for
slug: Web/JavaScript/Reference/Statements/for
tags:
  - Anweisung
  - JavaScript
  - Loop
  - for
translation_of: Web/JavaScript/Reference/Statements/for
---
{{jsSidebar("Anweisungen")}}

Die **for Anweisung** beschreibt eine Schleife mit drei optionalen Ausdrücken und einer oder mehreren Anweisungen.

## Syntax

    for ([initialization]; [condition]; [final-expression])
       statement

- `initialization`
  - : Ein Ausdruck (inklusive Zuweisungen) oder eine Variablendeklaration. Normalerweise wird ein Schleifenzähler initialisiert. Neu deklarierte Variablen haben denselben Geltungsbereich wie die `for` Schleife (d.h. sie sind nicht lokal auf die Schleife begrenzt). Die Initialisierung ist optional.
- `condition`
  - : Die Bedingung wird **vor** jedem Schleifendurchlauf ausgewertet. Ergibt die Auswertung _**true**_, dann wird die Answeisung (`statement`) ausgeführt. Die Bedingung ist optional. Bei fehlender Bedingung gilt immer _**true**_. Bei **_false_** wird die Schleife verlassen (und bei der nächsten Anweisung, die dem Schleifenende folgt, weitergemacht).
- `final-expression`
  - : Dieser Ausdruck wird **nach** jedem Schleifendurchlauf ausgewertet. Dies findet vor der nächsten Auswertung der Schleifenbedinung statt. Üblicherweise wird der Schleifenzähler inkrementiert oder dekrementiert.
- `statement`
  - : Der Ausdruck wird ausgeführt solange die Bedingung erfüllt ist (_**true**_). Man kann mehrere Anweisungen ausführen, indem man sie in einer [block](/de/docs/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block") Anweisung (`{ ... }`) zusammenfasst. Eine leere Anweisung ([empty](/de/docs/Web/JavaScript/Reference/Statements/Empty) statement), markiert durch semikolon, kann auch ausgeführt werden.

## Beispiele

### Verwendung der `for` Schleife

Die folgende for Anweisung initialisiert die Variable `i` mit null. Die Bedingung prüft ob `i` kleiner neun ist, führt den Code in der [block](/de/docs/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block") Anweisung aus und erhöht `i` um eins nach jedem Schleifendurchlauf.

```js
for (var i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
```

### Optionale `for` Ausdrücke

Alle drei `for` Ausdrücke sind optional.

Z.B. kann der Initialisierungsblock leer sein:

```js
var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // more statements
}
```

Die Schleifenbedinung ist auch optional. Man muss jedoch darauf achten, dass in der Schleife eine Austrittsbedingung ([break](/de/docs/Web/JavaScript/Reference/Statements/break) Anweisung) vorkommt, um nicht in eine Endlosschleife zu geraten.

```js
for (var i = 0;; i++) {
   console.log(i);
   if (i > 3) break;
   // more statements
}
```

Das gleiche gilt selbstverständlich wenn man alle drei Blöcke leer lässt. Hier wird `i` in der Schleife inkrementiert, um sicherzustellen, dass nach endlich vielen Durchläufen die Schleife abgebrochen wird.

```js
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

### Verwendung von `for` Schleife mit leerer Anweisung

Das folgende Beispiel zeigt eine leere Anweisung im Schleifenkörper. Die Berechnungen finden im Ausdruck _\[final-expression]_ statt. Die Schleife wird solange durchlaufen bis die Bedingung nicht mehr erfüllt ist.

```js
function showOffsetPos (sId) {
  var nLeft = 0, nTop = 0;

  for (var oItNode = document.getElementById(sId); // initialization
       oItNode; // condition
       nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent) // final-expression
       /* empty statement */ ;

  console.log("Offset position of \"" + sId + "\" element:\n left: " + nLeft + "px;\n top: " + nTop + "px;");
}

// Example call:

showOffsetPos("content");

// Output:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"
```

> **Note:** **Beachte:** Die leere Anweisung folgt der Schleife und besteht lediglich aus einem Semikolon.

## Spezifikationen

| Spezifikation                                                                        | Status                       | Bemerkung                 |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------- |
| {{SpecName('ES1', '#sec-12.6.2', 'for statement')}}                 | {{Spec2('ES1')}}         | Ursprüngliche Definition. |
| {{SpecName('ES3', '#sec-12.6.3', 'for statement')}}                 | {{Spec2('ES3')}}         |                           |
| {{SpecName('ES5.1', '#sec-12.6.3', 'for statement')}}             | {{Spec2('ES5.1')}}     |                           |
| {{SpecName('ES6', '#sec-for-statement', 'for statement')}}         | {{Spec2('ES6')}}         |                           |
| {{SpecName('ESDraft', '#sec-for-statement', 'for statement')}} | {{Spec2('ESDraft')}} |                           |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/empty", "empty")}}
- {{jsxref("Statements/while", "while")}}
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)

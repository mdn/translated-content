---
title: while
slug: Web/JavaScript/Reference/Statements/while
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/while
---
{{jsSidebar("Anweisungen")}}

Die **while-Anweisung (Engl. _statement_)** beschreibt eine Schleife, die solange durchlaufen wird wie die Schleifenbedingung wahr (Engl. _**true**_) ergibt. Die Schleifenbedingung (Engl. **_condition_**) wird am Anfang der Schleife ausgewertet.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntax

    while (condition) {
      statement
    }

- `condition`
  - : Die Schleifenbedinung wird zu Anfang eines Schleifendurchlaufs ausgewertet. Ergibt die Auswertung wahr (_**true)**_, dann wird der Schleifenkörper durchlaufen (`statement` wird ausgeführt). Ist die Bedingung falsch (**_false)_**, dann fährt das Program mit der ersten Anweisung nach der _**while**_ Schleife fort.
- `statement`

  - : Eine optionale Anweisung wird ausgeführt solange die Bedingung wahr (_**true**_) ist. Mehrere Anweisungen müssen in einer [block](/de/docs/JavaScript/Reference/Statements/block "JavaScript/Reference/Statements/block") Anweisung (`{ ... }`) gruppiert werden.

    Bemerkung: Ein break-Statement kann eingesetzt werden, um die Schleife vorzeitig zu beenden, bevor die Bedingung auf `false` wechselt.

## Beispiele

Die folgende `while` Schleife wird so oft durchlaufen wie `n` kleiner drei ist.

```js
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

In jedem Durchlauf wird `n` inkrementiert und zu `x` addiert. Die Schleifendurchläufe können wie folgt beschrieben werden:

- Nach 1. Durchlauf: `n` = 1 und `x` = 1
- Nach 2. Durchlauf: `n` = 2 und `x` = 3
- Nach 3. Durchlauf: `n` = 3 und `x` = 6

Nach dem dritten Durchlauf ist die Schleifenbedingung nicht mehr wahr, und die Schleife wird beendet.

## Spezifikationen

| Spezifikation                                                                            | Status                       | Bemerkung           |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ESDraft', '#sec-while-statement', 'while statement')}} | {{Spec2('ESDraft')}} |                     |
| {{SpecName('ES6', '#sec-while-statement', 'while statement')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ES5.1', '#sec-12.6.2', 'while statement')}}                 | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES3', '#sec-12.6.2', 'while statement')}}                 | {{Spec2('ES3')}}         |                     |
| {{SpecName('ES1', '#sec-12.6.1', 'while statement')}}                 | {{Spec2('ES1')}}         | Initiale Definition |

## Browserkompatibilität

{{Compat("javascript.statements.while")}}

## Siehe auch

- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- {{jsxref("Statements/for", "for")}}

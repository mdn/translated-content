---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/continue
---
{{jsSidebar("Statements")}}

Die **continue** Anweisung beendet die Ausführung von Anweisungen im aktuellen Durchlauf der aktuellen oder benannten Schleife und setzt die Schleife mit der nächsten Iteration fort.

{{EmbedInteractiveExample("pages/js/statement-continue.html")}}

## Syntax

    continue [label];

- `label`
  - : Bezeichner mit dem Namen der verbundenen Anweisung.

## Beschreibung

Im Gegensatz zur {{jsxref("Statements/break", "break")}} Anweisung, beendet `continue` die Ausführung der Schleife nicht komplett sondern:

- In einer {{jsxref("Statements/while", "while")}} Schleife wird zur Bedingung gesprungen.

- In einer {{jsxref("Statements/for", "for")}} Schleife wird zur Schlussanweisung gesprungen.

Die `continue` Anweisung kann optional den Namen beinhalten und erlaubt dem Programm zum nächsten Durchlauf einer benannten Schleife zu springen anstatt der aktuellen. In diesem Fall muss die `continue` Anweisung innerhalb der benannten Anweisung liegen.

## Beispiele

### Verwendung von `continue` mit `while`

Das folgende Beispiel zeigt eine {{jsxref("Statements/while", "while")}} Schleife mit einer `continue` Anweisung, die ausgeführt wird, wenn `i` den Wert 3 hat. Daher nimmt `n` die Werte 1, 3, 7, und 12 an.

```js
var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### Verwendung von `continue` mit einem Bezeichner

Im folgenden Beispiel enthält die `checkiandj` benannte Anweisung eine benannte Anweisung namens `checkj`. Wenn `continue` erreicht wird, wird das Programm am Beginn der `checkj` Anweisung fortgesetzt. Jedes mal wenn `continue` erreicht wird, beginnt `checkj` einen neuen Durchlauf, bis die Bedingung _false_ zurückgibt. Wenn _false_ zurückgegeben wird, wird der Rest der `checkiandj` Anweisung ausgeführt.

Falls `continue` einen Bezeichner `checkiandj` hätte, dann würde das Programm am Beginn der `checkiandj` Anweisung fortgesetzt.

Siehe auch {{jsxref("Statements/label", "label")}}.

```js
var i = 0;
var j = 8;

checkiandj: while (i < 4) {
  console.log('i: ' + i);
  i += 1;

  checkj: while (j > 4) {
    console.log('j: '+ j);
    j -= 1;

    if ((j % 2) == 0)
      continue checkj;
    console.log(j + ' is odd.');
  }
  console.log('i = ' + i);
  console.log('j = ' + j);
}
```

Ausgabe:

```js
i: 0

// start checkj
j: 8
7 is odd.
j: 7
j: 6
5 is odd.
j: 5
// end checkj

i = 1
j = 4

i: 1
i = 2
j = 4

i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
```

## Spezifikationen

| Spezifikation                                                                                    | Status                       | kommentar                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------- |
| {{SpecName('ES1')}}                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Unbenannte Version. |
| {{SpecName('ES3')}}                                                                         | {{Spec2('ES3')}}         | Benannte Version hinzugefügt.            |
| {{SpecName('ES5.1', '#sec-12.7', 'Continue statement')}}                     | {{Spec2('ES5.1')}}     |                                          |
| {{SpecName('ES6', '#sec-continue-statement', 'Continue statement')}}     | {{Spec2('ES6')}}         |                                          |
| {{SpecName('ESDraft', '#sec-continue-statement', 'Continue statement')}} | {{Spec2('ESDraft')}} |                                          |

## Browserkompatibilität

{{Compat("javascript.statements.continue")}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "label")}}

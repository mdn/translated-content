---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/switch
---
{{jsSidebar("Statements")}}

Die **switch Anweisung** wertet einen [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_Operators) aus. Diese Auswertung wird mit einer case Klausel verglichen und (bei Übereinstimmung) die entsprechenden [Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) ausgeführt.

## Syntax

    switch (expression) {
      case value1:
        // Anweisungen werden ausgeführt,
        // falls expression mit value1 übereinstimmt
        [break;]
      case value2:
        // Anweisungen werden ausgeführt,
        // falls expression mit value2 übereinstimmt
        [break;]
      ...
      case valueN:
        // Anweisungen werden ausgeführt,
        // falls expression mit valueN übereinstimmt
        [break;]
      default:
        // Anweisungen werden ausgeführt,
        // falls keine der case-Klauseln mit expression übereinstimmt
        [break;]
    }

- `expression`
  - : Ausdruck, der mit jeder case Klausel verglichen wird.
- `case valueN`
  - : Der Wert einer case Klausel wird mit `expression` verglichen.

## Beschreibung

Ein switch Statement wertet als erstes den Ausdruck aus. Danach wird nach der ersten `case` Klausel gesucht, die zu dem gleichen Wert ausgewertet wird wie der erste Ausdruck im `switch` (mit [striktem Vergleich](</de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identität_strikte_Gleichheit_()>), `===` ) und springt im Kontrollfluss zu der Klausel und führt die dort geschriebenen Statements aus. (Bei mehrfachen Übereinstimmungen springt das Programm zu der ersten gefundenen Klausel, auch wenn die gefunden Klausen nicht gleich sind.) Falls keine übereinstimmende `case` Klausel gefunden wird, sucht das Programm die optionale `default` Klausel und führt, wenn diese Klausel existiert, die Anweisungen in der Klausel aus. Wenn keine `default` Klausel vorhanden ist, wird das Programm nach dem switch Statement fortgesetzt. Konventionell ist die `default` Klausel die letzte Klausel, das muss aber nicht so sein.

Die optionale [break](/de/docs/Web/JavaScript/Reference/Statements/break "JavaScript/Reference/Statements/break") Anweisung in jedem `case` Block weist das Programm an die switch Anweisung zu beenden. Das Programm macht dann mit der Anweisung weiter, die dem Ende der switch Anweisung folgt. Wird die `break` Anweisung weggelassen, dann macht das Programm linear weiter; es wird die nächste Anweisung ausgeführt.

## Beispiele

### Verwendung von `switch`

Betrachten wir das folgende Beispiel. Falls `expr` zu "Bananas" ausgewertet wird, dann springt das Programm zu der case Klausel "Bananas" und führt die entsprechenden Anweisungen aus. Die `break` Anweisung füht dazu, dass das Programm die switch Anweisung verlässt und mit der ersten Anweisung weitermacht, die dem Ende der switch Anweisung folgt.
Hätte man `break` weggelassen, dann hätte das Programm die Anweisungen der case Klausel "Cherries" ausgeführt.

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");
```

### Was passiert, falls man eine `break` Anweisung weglässt?

Falls man eine break Anweisung vergisst, dann führt das Programm sowohl die übereinstimmende case Klausel als auch die darauf folgende case Klausel aus, unabhängig des Wertes der case Klausel.

Im Allgemeinen fährt das Programm linear fort bis es auf eine `break` Anweisung stößt. Falls keine `break` Anweisung vorhanden ist, dann werden alle Anweisungen bis zum Ende der `switch` Anweisung ausgeführt.

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo ist 0 - diese case-Klausel wird ausgeführt
    console.log(0)
    // HINWEIS: break Anweisung wurde hier weggelassen
  case 1: // Da keine break Anweisung in 'case 0:'
          // wird diese Klausel ebenfalls ausgeführt,
          // obwohl der Wert nicht mit dem Ausdruck von
          // switch übereinstimmt
    console.log(1);
    break; // das Programm verlässt die switch Anweisung.
           // 'case 2:' wird nicht ausgeführt
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}
```

### Techniken für case Klauseln mit mehr als einem Kriterium

Die Quelle der erwähnten Methode kann hier aufgerufen werden (auf Englisch):
[Switch statement multiple cases in JavaScript (Stack Overflow)](http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript)

#### Mehrere case Klauseln mit einer einfachen Anweisung

Diese Technik macht es sich zum Vorteil, dass das Programm einfach bei der nächsten case Klausel weitermacht, wenn man die `break` Anweisung weglässt. Siehe Abschnitt "Was passiert, falls ich eine `break` Anweisung weglasse?"

Dieses Beispiel zeigt eine einfache Operation, die für alle entsprechenden case Klauseln ausgeführt wird ('Cow', 'Giraffe', 'Dog', 'Pig').

```js
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}
```

#### Mehrere case Klauseln mit mehreren Anweisungen

Dieses Beispiel zeigt wie mehrere Anweisungen verschiedener case Klauseln ausgeführt werden.
Die case Klauseln werden in geschriebener Reihenfolge ausgeführt, also unabhängig jeglicher Ordnung der Ausdrücke der case Klauseln.

```js
var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 10:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 6!');
}
```

Mögliche Ergebnisse:

| Wert                 | Ausgabe                           |
| -------------------- | --------------------------------- |
| 10                   | Output: So What Is Your Name?     |
| 1                    | Output: What Is Your Name?        |
| 2                    | Output: Your Name?                |
| 3                    | Output: Name?                     |
| 4                    | Output: ?                         |
| 5                    | Output: !                         |
| _Alle anderen Werte_ | Please pick a number from 0 to 6! |

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                                            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-12.11', 'switch statement')}}                     | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-switch-statement', 'switch statement')}}         | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-switch-statement', 'switch statement')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)

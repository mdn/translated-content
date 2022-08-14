---
title: Bedingter (ternärer) Operator
slug: Web/JavaScript/Reference/Operators/Conditional_Operator
tags:
  - JavaScript
  - Operator
translation_of: Web/JavaScript/Reference/Operators/Conditional_Operator
---
{{jsSidebar("Operators")}}

Der **bedingte (ternäre) Operator** ist der einzige Operator in JavaScript, der drei Operanden hat. Er wird häufig als Kurzform eines [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Statements genutzt.

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## Syntax

    Bedingung ? Ausdruck1: Ausdruck2

### Parameter

- `Bedingung (oder Bedingungen)`
  - : Ein Ausdruck, der zu `true` oder `false` ausgewertet wird.

<!---->

- `Ausdruck1`, `Ausdruck2`
  - : Ausdrücke mit Werten eines beliebigen Typs.

## Beschreibung

Wenn `Bedingung` zu `true` ausgewertet wird, wird `Ausdruck1` zurückgegeben; andernfalls wird `Ausdruck2` zurückgegeben.

Ein einfaches Beispiel zeigt dieser Test, ob man in den USA alt genug ist, um Alkohol zu trinken.

```js
var age = 26;
var canDrinkAlcohol = (age >= 21) ? "True, 21 or older" : "False, under 21";
console.log(canDrinkAlcohol); // "True, 21 or older"
```

Ein anderes Beispiel ist die Anzeige von verschiedenen Nachrichten, abhängig von der `isMember` Variable:

```js
"The fee is " + (isMember ? "$2.00" : "$10.00")
```

Man kann auch Variablen abhängig von einem ternären Ergebnis zuweisen:

```js
var elvisLives = Math.PI > 4 ? "Yep" : "Nope";
```

Mehrere ternäre Auswertungen hintereinander sind ebenfalls möglich (Beachte: der ternäre Operator ist rechtsassoziativ):

```js
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log(access); // logt "Access granted"
```

Man kann ihn auch wie ein If Statement mit mehreren Bedingungen verwenden

```js
var condition1 = true,
    condition2 = false,
    access = condition1 ? (condition2 ? "true true" : "true false") : (condition2 ? "false true" : "false false");

console.log(access); // logt "true false"
```

Zu beachten ist, dass die Klammern nicht notwendig sind und das Ergebnis nicht verändern. Sie sind zur Übersichtshilfe vorhanden.

Man kann den ternären Operator alleinstehend verwenden, um verschiedene Operationen auszuführen:

```js
var stop = false, age = 16;

age > 18 ? location.assign("continue.html") : stop = true;
```

Man kann auch mehr als eine Operation pro Fall ausführen, indem die Operationen mit einem Komma getrennt und geklammert werden:

```js
var stop = false, age = 23;

age > 18 ? (
    alert("OK, you can go."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Sorry, you are much too young!")
);
```

Man kann auch mehrere Operationen während einer Zuweisung durchführen. _**In diesem Fall wird der letzte von Kommas getrennte Wert als Zuweisungswert benutzt.**_

```js
var age = 16;

var url = age > 18 ? (
    alert("OK, you can go."),
    // alert liefert "undefined" zurück, wird aber ignoriert
    // weil es nicht der letzte Ausdruck in der Klammer ist.
    "continue.html" // dieser Wert wird zugewiesen, wenn der
                    //Wert > 18 ist.
) : (
    alert("You are much too young!"),
    alert("Sorry :-("),
    // etc. etc.
    "stop.html" // dieser Wert wird zugewiesen wenn "age" <= 18 ist;

location.assign(url); // "stop.html"
```

### Rückgabe durch ternäre Statements

Der ternäre Operator ist nützlich für Funktionen, die einen Rückgabewert abhängig von einem `if/else` Statement zurückgeben.

```js
var func1 = function ( .. ) {
  if (condition1) { return value1; }
  else { return value2; }
}

var func2 = function ( .. ) {
  return condition1 ? value1 : value2;
}
```

Ein häufiger Weg, um das legale Alter zum Trinken von Alkohol in den USA zurückzugeben:

```js
function canDrinkAlcohol(age) {
  return (age > 21) ? "True, over 21" : "False, under 21";
}
var output = canDrinkAlcohol(26);
console.log(output); // "True, over 21"
```

Ein guter Weg, um herauszufinden, ob der ternäre Operator ein guter Ersatz für ein `if/else` Statement ist, ist wenn das `return` Schlüsselwort mehrfach eingesetzt wird und in jedem Block der einzige Ausdruck ist.

Beim Aufteilen des ternären Operators in mehrere Zeilen und extra Leerzeichen, kann dieser ein sehr sauberer Ersatz für eine längere Serie von `if/else` Statements sein. Dadurch wird ein leichter Weg für logisch gleiche Ausdrücke geschaffen:

```js
var func1 = function ( .. ) {
  if (condition1) { return value1; }
  else if (condition2) { return value2; }
  else if (condition3) { return value3; }
  else { return value4; }
}

var func2 = function ( .. ) {
  return condition1 ? value1
       : condition2 ? value2
       : condition3 ? value3
       :              value4;
}
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-conditional-operator', 'Conditional Operator')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-conditional-operator', 'Conditional Operator')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.12', 'The conditional operator')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1', '#sec-11.12', 'The conditional operator')}}                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |

## Browserkompatibilität

{{Compat("javascript.operators.conditional")}}

## Siehe auch

- [if Statement](/de/docs/Web/JavaScript/Reference/Statements/if...else)

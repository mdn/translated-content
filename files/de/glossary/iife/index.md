---
title: IIFE
slug: Glossary/IIFE
translation_of: Glossary/IIFE
---
Eine IIFE (Immediately Invoked Function Expression) ist eine JavaScript-Funktion, die ausgeführt wird, sobald sie definiert ist.

```js
(function () {
    statements
})();
```

Es handelt sich um ein Entwurfsmuster, das auch als selbstausführende anonyme Funktion bekannt ist und aus zwei Hauptteilen besteht:

1. Die erste ist die anonyme Funktion mit lexikalischem Umfang, die innerhalb des {{jsxref("Operators/Grouping", "Grouping Operator")}} `()` eingeschlossen ist. Dies verhindert sowohl den Zugriff auf Variablen innerhalb des IIFE-Idioms als auch die Beeinträchtigung des globalen Geltungsbereichs.
2. Der zweite Teil erzeugt den unmittelbar aufgerufenen Funktionsausdruck `()`, durch den die JavaScript-Engine die Funktion direkt interpretiert.

## Beispiele

Die Funktion wird zu einem Funktionsausdruck, der sofort ausgeführt wird. Auf die Variable innerhalb des Ausdrucks kann von außerhalb nicht zugegriffen werden.

```js
(function () {
    var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"
```

Die Zuweisung des IIFE an eine Variable speichert den Rückgabewert der Funktion, nicht die Funktionsdefinition selbst.

```js
var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"
```

1. Mehr darüber erfahren

    1. [Quick example](/de/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions) (at the end of the "Functions" section, right before "Custom objects")

2. Wikipedia Artikel

    1. {{interwiki("wikipedia", "Immediately-invoked function expression", "IIFE")}}

3. [Glossar](/de/docs/Glossary)

    1. {{Glossary("Function")}}
    2. {{Glossary("Self-Executing Anonymous Function")}}

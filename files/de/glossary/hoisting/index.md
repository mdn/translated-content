---
title: Hoisting
slug: Glossary/Hoisting
tags:
  - CodingScripting
  - Glossary
  - JavaScript
  - hoisted
  - hoisting
translation_of: Glossary/Hoisting
---
Hoisting (engl. _(an)heben_, _hochziehen_, _hissen_) ist ein Begriff, den Sie in _keiner_ normativen Spezifikation vor [ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/index.html) finden werden. Unter Hoisting wird eine allgemeine Denkweise verstanden, wie Ausführungskontexte (insbesondere die Erstellungs- und Ausführungsphasen) in JavaScript funktionieren. Das Konzept kann jedoch zunächst etwas verwirrend sein.

Konzeptionell bedeutet beispielsweise eine strikte Definition von Hoisting, dass Variablen- und Funktionsdeklarationen physisch an die Spitze Ihres Codes gestellt werden, was jedoch nicht das ist was tatsächlich passiert. Stattdessen werden die Variablen- und Funktionsdeklarationen während der _Kompilierungsphase_ in den Speicher gestellt, bleiben aber genau dort, wo Sie sie in Ihrem Code geschrieben haben.

## Erfahren Sie mehr

### Technisches Beispiel

Wenn JavaScript Funktionsdeklarationen vor der Ausführung eines Codesegments in den Speicher ablegt, können Sie eine Funktion verwenden, bevor Sie sie in Ihrem Code deklarieren. Zum Beispiel:

```js
function catName(name) {
  console.log("Der Name meiner Katze ist " + name);
}

catName("Tigger");

/*
Das Ergebnis des Codes oben ist: "Der Name meiner Katze ist Tigger"
*/
```

Das Beispiel zeigt an, wie Sie den Code schreiben würden, damit er funktioniert. Nun wollen wir sehen, was passiert, wenn wir die Funktion aufrufen, bevor wir sie schreiben:

```js
catName("Chloe");

function catName(name) {
  console.log("Der Name meiner Katze ist " + name);
}
/*
Das Ergebnis des Codes oben ist: "Der Name meiner Katze ist Chloe"
*/
```

Obwohl wir die Funktion zuerst in unserem Code aufrufen, funktioniert der Code auch dann noch, bevor die Funktion geschrieben wird. Dies liegt daran, wie die Kontextausführung in JavaScript funktioniert.

Hoisting funktioniert auch gut mit anderen Datentypen und Variablen. Variablen können vor der Deklaration initialisiert und verwendet werden.

### Nur Deklarationen werden gehoistet

JavaScript hoistet nur Deklarationen, keine Initialisierungen. Wenn eine Variable nach ihrer Verwendung deklariert und initialisiert wird, ist der Wert `undefined`. Zum Beispiel:

```js
console.log(num); // Gibt undefined zurück
var num;
num = 6;
```

Wenn Sie die Variable nach der Verwendung deklarieren, sie jedoch vorher initialisieren, wird der Wert zurückgegeben:

```js
num = 6;
console.log(num); // Gibt 6 zurück
var num;
```

Die beiden folgenden Beispiele zeigen das gleiche Verhalten:

```js
var x = 1; // Initialisiere x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialisiere y

// Das obige Beispiel wird implizit als das folgende verstanden:
var x; // Deklariere x
var y; // Deklariere y
// Hoisting beendet.

x = 1; // Initialisiere x
console.log(x + " " + y); // '1 undefined'
y = 2; // Initialisiere y
```

### Technische Referenz

- [JavaScript: Verstehe die seltsamen Teile](https://www.udemy.com/javascript-verstehe-die-seltsamen-teile/) — Udemy.com Kurs
- [var Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/var) — MDN
- [function Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/function) — MDN

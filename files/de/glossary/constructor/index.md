---
title: Konstruktor
slug: Glossary/Constructor
translation_of: Glossary/Constructor
original_slug: Glossary/Konstruktor
---
Ein **Konstruktor** gehört zu einer Instanz eines bestimmten Klassen-{{glossary("object","Objekts")}}.

Der Konstrutktor instanziiert dieses Objekt und bietet Zugriff auf seine privaten Informationen. Das Konzept des Konstruktors findet in den meisten {{glossary("OOP","Objekt-orientierten Programmiersprachen")}} Anwendung. Im Allgemeinen wird ein Konstruktor in {{glossary("JavaScript")}} in der Instanz einer {{glossary("class","Klasse")}} deklariert.

## Syntax

```js
// This is a generic default constructor class Default
function Default() {
}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, ...,argN){
}
```

Um einen Konstruktor aufzurufen, verwenden Sie den `new` operator, welcher einer {{glossary("variable","Variable")}} eine neue {{glossary("object reference","Objekt-Referenz")}} zuweist.

```js
function Default() {
}

// A new reference of a Default object assigned to a
// local variable defaultReference
var defaultReference = new Default();
```

## Siehe auch

### Generelles Wissen

- {{Interwiki("wikipedia", "Constructor_%28object-oriented_programming%29", "Konstruktor")}} auf Wikipedia

### Technische Referenz

- [The constructor in object oriented programming for JavaScript](/de/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_Constructor) on MDN
- [New operator in JavaScript](/de/docs/Web/JavaScript/Reference/Operators/new) on MDN

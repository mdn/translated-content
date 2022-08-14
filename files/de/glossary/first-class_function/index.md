---
title: Funktion erster Klasse
slug: Glossary/First-class_Function
translation_of: Glossary/First-class_Function
original_slug: Glossary/Funktion_erster-Klasse
---
Funktionen, die wie jede andere Variable behandelt werden, bezeichnet man als **Funktionen erster Klasse**.

In einer Programmiersprache, die über **Funktionen erster Klasse** verfügt, kann so eine Funktion als Argument anderen Funktionen übergeben werden, als Wert einer Variable zugewiesen, oder von einer anderen Funktion zurückgegeben werden.

## Beispiel | Zuweisung einer Funktion an eine Variable

### JavaScript

```js
const foo = function() {
   console.log("foobar");
}
// Aufruf der Funktion über die Variable.
foo();
```

Wir weisen der Variable '_foo_' eine `anonyme Funktion`, die den String "_foobar_" in der Konsole ausgibt, zu. Dann rufen wir diese Funktion über die Variable auf, indem wir ein Paar Klammern an das Ende hinzufügen.

> **Note:** **Auch wenn die Funktion benannt ist,** kann der Name der Variable, der sie zugewiesen ist, benutzt werden, um die Funktion aufzurufen. Funktionen zu benennen _wirkt sich nicht auf die Weise, wie sie aufgerufen wird aus_, kann aber beim Debuggen hilfreich sein

## Beispiel | Übergeben einer Funktion als Argument

### JavaScript

```js
function sagHallo() {
   return "Hallo, ";
}
function gruessen(gruss, name) {
  console.log(gruss() + name);
}
// Übergebe `sagHallo` als Argument an die `gruessen` Funktion.
gruessen(sagHallo, "JavaScript!");
```

Wir übergeben unsere `sagHallo()` Funktion als ein Argument an die `gruessen() `Funktion. Auf diese Art behandeln wir die Funktion als `Wert`.

> **Note:** Die Funktion, die wir als Argument einer anderen Funktion übergeben wird als **[Callback function](/de/docs/Glossary/Callback_function) **bezeichnet. sagHallo() ist eine _Callback function._

## Example | Return a function

### JavaScript

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
```

In this example; We need to return a function from another function - _We can return a function because we treated function in JavaScript as_ _a_ _`value`\_\_._

> **Note:** A function that returns a function called **Higher-Order Function**

Back to our example; Now, we need to invoke `sayHello` function and its returned `Anonymous Function`. To do so, we have two ways:

### 1- Using a variable

```js
const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc();
```

This way, it returns the `Hello!` message.

> **Note:** You have to use another variable. If you invoked `sayHello` directly, it would return the function itself **without invoking its returned function**.

### 2- Using double parentheses

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();
```

We are using double parentheses `()()` to invoke the returned function as well.

## Learn more

### General knowledge

- {{Interwiki("wikipedia", "First-class_function", "First-class functions")}} on Wikipedia

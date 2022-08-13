---
title: Hoisting
slug: Glossary/Hoisting
translation_of: Glossary/Hoisting
---
W języku {{Glossary("JavaScript")}}, {{Glossary("Function", "funkcje")}} oraz {{Glossary("Variable", "zmienne")}} są **windowane**. Windowanie (hoisting) w JavaScripcie oznacza przeniesienie deklaracji na samą górę (do globalnego {{Glossary("scope", "zasięgu")}} lub do zasięgu funkcji).

Oznacza to, że możesz użyć funkcji lub zmiennej przed jej zadeklarowaniem lub innymi słowy: funkcje lub zmienne mogę być deklarowane po ich użyciu.

## Naucz się więcej

### Przykład

Zmienne:

```js
foo = 2
var foo;

// można to rozumieć jako:

var foo;
foo = 2;
```

Funkcje:

```js
hoisted(); // w consoli zobaczymy "foo"

function hoisted() {
  console.log("foo");
}
```

### Tylko deklaracje są windowane

W języku JavaScript tylko deklaracje są windowane, nie inicjalizacje. Jeśli zmienna zostanie zadeklarowana i zainicjalizowana po jej użyciu, wartość zmiennej będzię niezdefiniowana (undefined).

```js
console.log(num); // zwróci undefined
var num;
num = 6;
```

Jeśli zadeklarujesz zmienną po tym jak zostanie użyta, ale zainicjalizujesz jej wartość przed tym, owa wartość zostanie zwrócona:

```js
num = 6;
console.log(num); // zwróci 6
var num;
```

Dwa przykłady poniżej obrazują to samo zachowanie.

    var x = 1; // inicjalizacja x
    console.log(x + " " + y); // '1 undefined'
    var y = 2; // inicjalizacja y

    // Powyższy przykład jest rozumiany jako:
    var x = 1; // inicjalizacja x
    var y; // deklaracja y
    console.log(x + " " + y); // '1 undefined'
    y = 2; // inicjalizacja y

### Odnośniki

- [JavaScript: Understanding the Weird Parts](https://www.udemy.com/understand-javascript/) - Udemy.com Course
- [var statement](/pl/docs/Web/JavaScript/Reference/Statements/var) - MDN
- [function statement](/pl/docs/Web/JavaScript/Reference/Statements/function) - MDN

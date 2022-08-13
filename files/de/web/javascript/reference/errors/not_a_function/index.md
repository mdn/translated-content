---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_function
original_slug: Web/JavaScript/Reference/Fehler/Not_a_function
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: "x" is not a function

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist falsch gelaufen?

Es wird versucht, ein Wert wie eine Funktion aufzurufen, da aber der Wert eigentlich keine Funktion ist, kommt es zu diesem Fehler. Manchmal erwartet das Programm, dass eine Funktion erstellt wird, was aber nicht der Fall ist.

Vielleicht ist ein Tippfehler im Funktionsnamen. Manchmal besitzt das aufgerufene Objekt eine Funktion aber auch nicht. Zum Beispiel besitzen JavaScript Objekte keine `map` Funktion, aber JavaScript Arrays haben diese Funktion.

Es gibt viele eingebaute Funktionen, die eine (Callback-) Funktion benötigen. Es muss eine Funktion bereitgestellt werden, damit diese Methoden normal funktionieren:

- Wenn mit {{jsxref("Array")}} oder {{jsxref("TypedArray")}} Objekten gearbeitet wird:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Wenn mit {{jsxref("Map")}} und {{jsxref("Set")}} Objekten gearbeitet wird:

  - {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}}

## Beispiele

### Ein Schreibfehler im Funktionsnamen

In diesem Fall passiert es viel zu oft, dass im Name ein Schreibfehler enthält:

```js example-bad
var x = document.getElementByID('foo');
// TypeError: document.getElementByID is not a function
```

Der korrekte Funktionsname ist `getElementById`:

```js example-good
var x = document.getElementById('foo');
```

### Funktion wird auf dem falschen Objekt aufgerufen

Für bestimmte Methoden musst eine (callback) Funktion benutzt werden, die nur bei spezifizierten Objekten funktionieren. In diesem Beispiel wird {{jsxref("Array.prototype.map()")}} verwendet, welche nur mit {{jsxref("Array")}} Objekten funktioniert.

```js example-bad
var obj = {a: 13, b: 37, c: 42};

obj.map(function(num) {
  return num * 2;
});

// TypeError: "x" is not a function
```

Stattdessen muss ein Array verwendet werden:

```js example-good
var numbers = [1, 4, 9];

numbers.map(function(num) {
  return num * 2;
});

// Array [2, 8, 18]
```

### Funktionen teilen einen Namen mit einer existierenden Eigenschaft

Manchmal, wenn eine Klasse geschrieben wird, haben eine Eigenschaft und eine Funktion den gleichen Namen. Nach dem Aufruf der Funktion denkt der Compiler, dass die Funktion nicht mehr existiert.

```js example-bad
var Dog = function () {
 this.age = 11;
 this.color = "black";
 this.name = "Ralph";
 return this;
}

Dog.prototype.name = function(name) {
 this.name = name;
 return this;
}


var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name is not a function
```

Stattdessen kann ein anderer Eigenschaftsname benutzt werden:

```js example-good
var Dog = function () {
 this.age = 11;
 this.color = "black";
 this.dogName = "Ralph"; //Using this.dogName instead of .name
 return this;
}

Dog.prototype.name = function(name) {
 this.dogName = name;
 return this;
}


var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

## Siehe auch

- [Functions](/de/docs/Web/JavaScript/Reference/Functions)

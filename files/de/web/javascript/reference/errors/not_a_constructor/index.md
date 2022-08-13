---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
tags:
  - Fehler
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_constructor
original_slug: Web/JavaScript/Reference/Fehler/Not_a_constructor
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: "x" is not a constructor

    TypeError: Math is not a constructor
    TypeError: JSON is not a constructor
    TypeError: Symbol is not a constructor
    TypeError: Reflect is not a constructor
    TypeError: Intl is not a constructor
    TypeError: SIMD is not a constructor
    TypeError: Atomics is not a constructor

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Es wurde versucht auf ein Objekt oder eine Variable zuzugreifen welche kein Konstruktor ist. Mehr darüber, was ein Konstruktur ist, finden Sie unter {{Glossary("constructor")}} oder in der Beschreibung des [`new` Operators](/de/docs/Web/JavaScript/Reference/Operators/new).

Es gibt viele globale Objekte, wie {{jsxref("String")}} oder {{jsxref("Array")}}, welche mittels `new` erstellt werden können. Jedoch funktioniert das bei einigen Objekten nicht und deren Eigenschaften und Methoden sind statisch.

Die folgenden Standard build-in Objekte sind keine Konstruktoren: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("SIMD")}}, {{jsxref("Atomics")}}.

[Generelle Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können ebenso nicht als Konstruktor verwendet werden.

## Beispiele

### Ungültige Fälle

```js example-bad
var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
```

### Ein car Konstruktor

Stellen Sie sich vor, Sie erstellen ein Objekt vom Typ vars. Sie wollen dieses Objekt als `Car` bezeichen und es soll Eigenschaften für make, model und year besitzt. Um dies zu erreichen, schreiben Sie die folgende Funktion:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Jetzt können Sie wie folgt ein Objekt mit dem Namen `mycar` erstellen:

```js
var mycar = new Car('Eagle', 'Talon TSi', 1993);
```

### Promises

Bei Rückgabe eines Promises, welches sofort im Status resolved oder rejected ist, brauchen Sie kein neues Promise mit _new Promise(...)_ erstellen und damit zu arbeiten.

Folgendes ist nicht erlaubt (der [Promise Konstruktor](/de/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor) wird nicht korrekt aufgerufen) und wirft eine `TypeError: this is not a constructor` Exception.

```js example-bad
return new Promise.resolve(true);
```

Verwenden Sie stattdessen[Promise.resolve()](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) oder die [statische Methode Promise.reject()](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject):

```js
// Das ist erlaubt, aber unnötig lang:
return new Promise((resolve, reject) => { resolve(true); })

// Alternative Verwendung der statische Methoden:
return Promise.resolve(true);
return Promise.reject(false);
```

## Siehe auch

- {{Glossary("constructor","Konstruktor")}}
- [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new)

---
title: super
slug: Web/JavaScript/Reference/Operators/super
translation_of: Web/JavaScript/Reference/Operators/super
original_slug: Web/JavaScript/Referencje/Operatory/super
---
{{jsSidebar("Operators")}}

Słowo kluczowe **super** jest wykorzystywane do udostępniania i korzystania z funkcji klasy po której nasz obiekt dziedziczy.

Wyrażenia `super.prop` i `super[expr]` są poprawne w każdej definicji metody zarówno w [klasach](/pl/docs/Web/JavaScript/Reference/Classes) i [literałach obiektowych](/pl/docs/Web/JavaScript/Referencje/Operatory/Object_initializer).

## Składnia

    super([arguments]); // wywołuje konstruktor klasy rodzica
    super.functionOnParent([arguments]);

## Opis

W przypadku użycia w konstruktorze, słowo kluczowe `super` pojawia się samodzielnie i musi zostać użyte przed użyciem słowa kluczowego `this` . Słowo kluczowe `super`  można również wykorzystać do wywoływania funkcji które nasz obiekt odziedziczył po swoim rodzicu.

## Przykład

### Użycie `super` w klasach

Poniższy snippet został pobrany z [próbki klasy](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) (live demo). W tym przykładzie, super() jest wywoływane w celu uniknięcia powielania tych części konstruktora, które są wspólne zarówno dla `Rectangle` (trójkąta) jak i `Square` (kwadratu).

```js
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Wywołanie konstruktora klasy nadrzędnej
    // określenie szerokości i wysokości prostokąta
    super(length, length);
    // Uwaga: W pochodnych klasach, super() musi być wywołane wcześniej niż
    // pierwsze użycie 'this'. W przeciwnym wypadku pojawi się błąd odniesienia.
    this.name = 'Square';
  }
}
```

### Super-wywołanie metod statycznych

Za pomocą `super` jesteś w stanie także wywołać metody statyczne.

```js
class Rectangle {
  constructor() {}
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### Usuwanie właściwości z super wyrzuci błąd

Nie możesz użyć [operatora usuwania](/pl/docs/Web/JavaScript/Referencje/Operatory/Operator_delete) oraz `super.prop` bądź `super[expr]` w celu usunięcia właściwości klasy rodzica ponieważ zostanie zwrócony błąd {{jsxref("ReferenceError")}}.

```js
class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo; // to jest niepoprawnie
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### `super.prop` nie może nadpisać właściwości typu non-writable 

Definiując właściwości non-writable (niezapisywalne) np. {{jsxref("Object.defineProperty")}}, pamiętaj, że `super` nie może nadpisać takiej wartości.

```js
class X {
  constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2;   // Nie można nadpisać wartości
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

### Używanie `super.prop` w literałach obiektowych

`super` może być także wykorzystane [inicjalizatorze / literale obiektu](/pl/docs/Web/JavaScript/Referencje/Operatory/Object_initializer).

W tym przykładzie dwa obiekty definiują swoją metodę. W drugim obiekcie, `super` wywołuje metodę obiektu pierwszego. To działa dzięki {{jsxref("Object.setPrototypeOf()")}} z czym jesteśmy w stanie ustawić prototyp obiektu `obj2` na `obj1`, tak aby `super` było w stanie znaleźć metodę `method1` w obiekcie `obj1`.

```js
var obj1 = {
  method1() {
    console.log('method 1');
  }
}

var obj2 = {
  method2() {
    super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // wypisze "method 1"
```

## Specyfikacje

| Specyfikacja                                                             |
| ------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-super-keyword', 'super')}} |

## Kompatybilność

{{Compat("javascript.operators.super")}}

## Zobacz też

- [Classes](/pl/docs/Web/JavaScript/Reference/Classes)
- [Anurag Majumdar - Super & Extends in JavaScript](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)

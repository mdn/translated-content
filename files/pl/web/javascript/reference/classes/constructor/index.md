---
title: Konstruktor
slug: Web/JavaScript/Reference/Classes/constructor
tags:
  - Classes
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/constructor
original_slug: Web/JavaScript/Reference/Classes/Konstruktor
---
{{jsSidebar("Classes")}}

Konstruktor jest specjalną metodą tworzenia i inicjowania obiektu utworzonego w klasie.

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## Składnia

    constructor([arguments]) { ... }

## Opis

Konstruktor umożliwia zdefiniowanie inicjalizacji obiektu, która musi się wykonać, zanim będzie można wywołać metody obiektu.

```js
class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();
```

Jeśli niestandardowy konstruktor nie został podany, to domyślny konstruktor będzie użyty. Dla klas bazowych konstruktor domyślny jest pusty:

```js
constructor() {}
```

Dla klas pochodnych domyślny konstruktor wywołuje konstruktor klasy nadrzędnej:

```js
constructor(...args) {
  super(...args);
}
```

Pozwala to na działanie takiego kodu:

```js
class ValidationError extends Error {

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}
```

Klasa `ValidationError` nie musi mieć niestandardowego konstruktora, ponieważ domyślny konstruktor wywołuje konstruktor klasy `Error`.

Jeśli jednak klasa `ValidationError` ma niestandardowy konstruktor, to musi on wywoływać konstruktor klasy nadrzędnej przy użyciu `super`:

```js
class ValidationError extends Error {

  constructor(message) {
    super(message);  // call parent class constructor
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}
```

Wewnątrz klasy może być tylko jedna metoda nazwana `constructor`. Jeżeli `constructor` wystąpi więcej niż jeden raz, to wygeneruje błąd {{jsxref("SyntaxError")}}.

## Przykłady

### Używanie konstruktora

Fragment kodu pochodzi z [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Wywołanie konstruktora klasy nadrzędnej
    // określenie szerokości i wysokości wielokątu
    super(length, length);
    // Uwaga: W pochodnych klasach, super() musi być wywołane wcześniej niż
    // pierwsze użycie 'this'. W przeciwnym wypadku pojawi się błąd odniesienia.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### Inny przykład

W tym przykładzie klasa `Square` jest zmieniona — ale konstruktor klasy `Polygon` nadal jest wywoływany przy tworzeniu nowej instancji klasy `Square`.

```js
class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon
```

## Specyfikacje

| Specyfikacja                                                                                                         | Status                       | Komentarz           |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-static-semantics-constructormethod', 'Constructor Method')}} | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-static-semantics-constructormethod', 'Constructor Method')}} | {{Spec2('ESDraft')}} |                     |

## Kompatybilność

{{Compat("javascript.classes.constructor")}}

## Zobacz też

- [super()](/pl/docs/Web/JavaScript/Reference/Operators/super)
- [`class` expression](/pl/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/pl/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/pl/docs/Web/JavaScript/Reference/Classes)

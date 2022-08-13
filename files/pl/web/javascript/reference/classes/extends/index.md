---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
translation_of: Web/JavaScript/Reference/Classes/extends
---
{{jsSidebar("Classes")}}

Słowo kluczowe **`extends`** jest używane w [deklaracjach klas](/pl/docs/Web/JavaScript/Referencje/Polecenia/class) lub [wyrażeniach class](/pl/docs/Web/JavaScript/Reference/Operators/class) do tworzenia klasy jako elementu potomnego innej klasy.

{{EmbedInteractiveExample("pages/js/classes-extends.html")}}

## Składnia

    class ChildClass extends ParentClass { ... }

## Opis

Słowo kluczowe `extends` może być użyte do dziedziczenia po niestandardowych klasach lub standardowych obiektach wbudowanych.

Prototypem rozszerzenia musi być {{jsxref("Object")}} lub {{jsxref("null")}}.

## Przykłady

### Zastosowanie `extends`

Pierwszy przykład tworzy klasę `Square` rozszerzającą klasę `Polygon`. [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

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
}
```

### Zastosowanie `extends` z obiektami wbudowanymi

Poniższy przykład rozszerza wbudowany obiekt {{jsxref("Date")}}. [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class myDate extends Date {

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
  }
}
```

## Specyfikacje

| Specyfikacja                                                                     |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-class-definitions', 'extends')}} |

## Kompatybilność

{{Compat("javascript.classes.extends")}}

## Zobacz też

- [Classes](/pl/docs/Web/JavaScript/Reference/Classes)
- [Konstruktor](/pl/docs/Web/JavaScript/Reference/Classes/Konstruktor)
- [super](/pl/docs/Web/JavaScript/Referencje/Operatory/super)
- [Anurag Majumdar - Super & Extends in JavaScript](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)

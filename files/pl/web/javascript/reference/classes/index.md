---
title: Classes
slug: Web/JavaScript/Reference/Classes
tags:
  - Classes
  - Constructors
  - ECMAScript 2015
  - Inheritance
  - Intermediate
  - JavaScript
  - TopicStub
translation_of: Web/JavaScript/Reference/Classes
---
{{JsSidebar("Classes")}}

Klasy w Javascript zostały wprowadzone w ECMAScript 2015 jako lukier składniowy\*\* **(ang. _syntactic sugar_) dla istniejącego, opartego na prototypach modelu dziedziczenia. Składnia klas **nie\*\* wprowadza nowego zorientowanego obiektowo modelu dziedziczenia. Klasy wprowadzają znacznie prostszą i bardziej czytelną składnię do tworzenia obiektów i dziedziczenia.

## Definiowanie klas

Klasy są w zasadzie "szczególnymi [funkcjami](/pl/docs/Web/JavaScript/Reference/Functions)". Podobnie jak w funkcji można definiować [wyrażenie `function`](/pl/docs/Web/JavaScript/Referencje/Operatory/Operator_function) i [deklaracje funkcji](/pl/docs/Web/JavaScript/Reference/Statements/function), tak składnia klasy posiada dwa komponenty: [wyrażenie `class`](/pl/docs/Web/JavaScript/Reference/Operators/class) i [deklaracje klasy](/pl/docs/Web/JavaScript/Reference/Statements/class).

### Deklaracje klas

Jednym ze sposobów definiowania klas jest **deklaracja klasy**. Aby zadeklarować klasę, należy użyć słowa kluczowego `class` wraz z nazwą klasy (w tym przypadku "Prostokat").

```js
class Prostokat {
  constructor(wysokosc, szerokosc) {
    this.wysokosc = wysokosc;
    this.szerokosc = szerokosc;
  }
}
```

#### Hoisting

Ważną różnicą pomiędzy **deklaracją funkcji** a **deklaracją klasy** jest to, że deklaracje funkcji są przenoszone na początek ({{Glossary("Hoisting")}}) a klas nie. Najpierw musisz zadeklarować swoją klasę, by mieć do niej dostęp, w przeciwnym razie kod, jak ten poniżej, wygeneruje błąd {{jsxref("ReferenceError")}}:

```js example-bad
var p = new Prostokat(); // ReferenceError

class Prostokat {}
```

### Wyrażenie `class`

**Wyrażenie `class`** jest kolejnym sposobem definiowania klasy. Wyrażenia `class` mogą być nazwane lub nienazwane. Nazwa przypisana nazwanemu wyrażeniu `class` jest lokalna dla ciała klasy. (można ją odczytać z właściwości {{jsxref("Function.name", "name")}} klasy)

```js
// nienazwane
var Prostokat = class {
  constructor(wysokosc, szerokosc) {
    this.wysokosc = wysokosc;
    this.szerokosc = szerokosc;
  }
};
console.log(Prostokat.name); // Prostokat

// nazwane
var Prostokat = class Prostokat2 {
  constructor(wysokosc, szerokosc) {
    this.wysokosc = wysokosc;
    this.szerokosc = szerokosc;
  }
};
console.log(Prostokat.name); // Prostokat2
```

> **Note:** **Uwaga**: **Wyrażenia** `class` dotykają te same kwestie związane z przenoszeniem na początek (ang. hoisting) co wspomnianych **deklaracji** klas.

## Ciało klasy i definicje metod

Ciało klasy jest umieszczane w nawiasach klamrowych `{}`. To tam definiuje się metody, czy konstruktory.

### Tryb ścisły

Ciało klasy jest wykonywane w [trybie ścisłym](/pl/docs/Web/JavaScript/Reference/Strict_mode) (ang. _strict mode_). W celu poprawienia wydajności, kod wykorzystywany tutaj podlega ścisłej składni; nie pozwala to na ukrycie niektórych wyjątków, a pewne słowa kluczowe są rezerwowane dla przyszłych wersji ECMAScript.

### Konstruktor

[`Constructor`](/en-US/docs/Web/JavaScript/Reference/Classes/constructor) jest szczególną metodą, która służy tworzeniu i inicjalizowaniu obiektu zdefiniowanego słowem kluczowym `class`. Dozwolony jest tylko jeden konstruktor w danej klasie. Jeśli klasa posiada więcej niż jedno wystąpienie metody `constructor`, wygenerowany zostanie błąd {{jsxref("SyntaxError")}}.

Aby wywołać konstruktor klasy bazowej, należy użyć słowa kluczowego `super`.

### Metody

Zobacz też [definiowanie metod](/pl/docs/Web/JavaScript/Reference/Functions/Method_definitions).

```js
class Prostokat {
  constructor(wysokosc, szerokosc) {
    this.wysokosc = wysokosc;
    this.szerokosc = szerokosc;
  }
  // Getter
  get pole() {
    return this.liczPole();
  }
  // Method
  liczPole() {
    return this.wysokosc * this.szerokosc;
  }
}

const kwadrat = new Prostokat(10, 10);

console.log(kwadrat.pole); // 100
```

### Metody i właściwości statyczne

Słowo kluczowe [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static) definiuje metodę kub właściwość statyczną w klasie. Statyczne metody i właściwości są wywoływane bez [inicjalizowania](/pl/docs/Learn/JavaScript/Obiekty 'An example of class instance is "var john = new Person();"') ich klas i **nie mogą** być wywołane przez instancję klasy.

```js
class Punkt {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static nazwa = "Punkt";
  static odleglosc(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }
}

const p1 = new Punkt(5, 5);
const p2 = new Punkt(10, 10);
p1.nazwa; // undefined
p1.odleglosc; // undefined
p2.nazwa; // undefined
p2.odleglosc; // undefined

console.log(Punkt.nazwa); // "Punkt"
console.log(Punkt.odleglosc(p1, p2)); // 7.0710678118654755
```

### Powiązanie `this` z metodami niestatycznymi i statycznymi

Kiedy metoda typu `static` lub `prototype` jest wywoływana bez `this` (na przykład poprzez przypisanie metody do zmiennej), wtedy `this`\_ \_będzie `undefined` w środku metody. Takie zachowanie będzie takie same, nawet jeżeli dyrektywa `"use strict"` nie będzie obecna, ponieważ kod w obrębie metody danej klasy zawsze będzie wykonywał się jako `strict mode`.

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // obiekt Animal
let speak = obj.speak;
speak(); // undefined

Animal.eat(); // klasa Animal
let eat = Animal.eat;
eat(); // undefined
```

Jeśli przepiszemy powyższy przykład z użyciem tradycyjnych funkcji bez dyrektywy `"use strict"`, to `this` wywołane w metodzie będzie automatycznie przypisane do pierwotnej wartości `this`, którą domyślnie jest [global object](/pl/docs/Glossary/Global_object).

```js
function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // global object

let eat = Animal.eat;
eat(); // global object
```

### Właściwości instancji

Właściwości instancji muszą być zdefiniowane wewnątrz metody klasy:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Statyczne właściwości i właściwości prototypu muszą być zdefiniowane poza ciałem klasy:

```js
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

### Deklaracje pól

> **Warning:** Publiczna i prywatne deklaracje pól są [funkcjonalnościami eksperymentalnymi](https://github.com/tc39/proposal-class-fields) zaproponowanymi na [TC39](https://tc39.es). Wsparcie przeglądarek jest ograniczone, ale ta funkcjonalność może być używana przy użyciu systemów takich jak [Babel](https://babeljs.io/).

#### Deklaracje pól publicznych

Przy użyciu deklaracji pól, powyższy przykład może być przepisany na:

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Dzięki deklarowaniu pól na początku klasy, definicje klas stają się bardziej samodokumentujące, a pola są zawsze obecne.

Jak widać w powyższym przykładzie, pola mogą być zadeklarowane z lub bez domyślnej wartości.

Zobacz [public class fields](/pl/docs/Web/JavaScript/Reference/Classes/Public_class_fields) po więcej informacji.

#### Deklaracje pól prywatnych

Używając deklaracji pól prywatnych, definicja może być zapisana w taki sposób:

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

Próba odniesienia się do prywatnego pola poza ciałem klasy wygeneruje błąd. Prywatne pola mogą być tylko odczytywane i modyfikowane wewnątrz ciała klasy. Poprzez definicję właściwości niewidocznych poza ciałem klasy, można zapewnić, że użytkownicy klasy nie będą polegali na jej wewnętrznych właściwościach.

> **Note:** Pola prywatne mogą być tylko zadeklarowane na początku ciała klasy

Prywatnych pól nie da się utworzyć później, poprzez przypisywanie, tak jak normalnych właściwości.

Po więcej informacji zobacz [private class fields](/pl/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

## Podklasy z `extends`

Słowo kluczowe [`extends`](/en-US/docs/Web/JavaScript/Reference/Classes/extends) jest używane w _deklaracjach klas_ lub _wyrażeniach klas_ do tworzenia klasy jako elementu potomnego innej klasy.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // wywyłanie konstruktora klasy nadrzędnej poprzez użycie super()
  }
  speak() {
    console.log(this.name + ' barks.');
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

Jeśli w podklasie znajduje się konstruktor, musi najpierw wywołać super() przed użyciem "this".

Można również rozszerzyć tradycyjne klasy oparte na funkcjach:

```js
function Animal (name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks
```

Zwróć uwagę, że klasy nie mogą rozszerzać zwykłych (niezdatnych do konstrukcji) obiektów. Jeśli chcesz dziedziczyć po zwykłym obiekcie, możesz, zamiast tego użyć {{jsxref ("Object.setPrototypeOf()")}}:

```js
var Animal = {
  speak() {
    console.log(this.name + ' makes a noise.');
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);// If you do not do this you will get a TypeError when you invoke speak

let d = new Dog('Mitzie');
d.speak(); //Mitzie makes a noise.
```

## Species

Jeśli chcesz zwrócić obiekt {{jsxref("Array")}} w twojej klasie `MyArray`, która dziedziczy po `Array`, to możesz użyć wzorca "species", który pozwala na nadpisywanie domyślnych konstruktorów.

Na przykład, wywołanie metody {{jsxref("Array.map", "map()")}} zwraca domyślny konstruktor `MyArray`. Użycie {{jsxref("Symbol.species")}} pozwala na nadpisanie tego zachowania tak, by zwracany był obiekt typu `Array`, a nie `MyArray`:

```js
class MyArray extends Array {
  // Nadpisanie domyślnego kontruktora
  static get [Symbol.species]() { return Array; }
}

var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
```

## Słowo kluczowe `super`

Słowo kluczowe **super** jest wykorzystywane do udostępniania i korzystania z funkcji klasy, po której nasz obiekt dziedziczy.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

let l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

## Mix-ins

Abstrakcyjne podklasy lub _mix-ins_ są szablonami dla klas. Klasa może mieć tylko jedną klasę nadrzędną, więc dziedziczenie z wielu klas jest niemożliwe. Cała funkcjonalność musi być dostarczona przez jedną klasę nadrzędną.

Funkcja przyjmująca klasę nadrzędną jako argument i zwracająca podklasę rozszerzającą klasę nadrzędną może być użyta do implementacji mix-in'ów:

```js
var calculatorMixin = Base => class extends Base {
  calc() { }
};

var randomizerMixin = Base => class extends Base {
  randomize() { }
};
```

Klasa używająca tych mix-in'ów może być zapisana w taki sposób:

```js
class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
```

## Specyfikacje

| Specyfikacja                                                                                 | Status                       | Komentarz           |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                     |

## Kompatybilność

{{Compat("javascript.classes")}}

## Zobacz też

- [Functions](/pl/docs/Web/JavaScript/Reference/Functions)
- [`class` declaration](/pl/docs/Web/JavaScript/Reference/Statements/class)
- [`class` expression](/pl/docs/Web/JavaScript/Reference/Operators/class)
- {{jsxref("Operators/super", "super")}}
- [Blog post: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)

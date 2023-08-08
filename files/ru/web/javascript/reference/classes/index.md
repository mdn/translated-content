---
title: Классы
slug: Web/JavaScript/Reference/Classes
---

{{JsSidebar("Классы")}}

Классы в JavaScript были введены в ECMAScript 2015 и представляют собой синтаксический сахар над существующим в JavaScript механизмом прототипного наследования. Синтаксис классов **не вводит** новую объектно-ориентированную модель, а предоставляет более простой и понятный способ создания объектов и организации наследования.

## Определение классов

На самом деле классы — это "специальные [функции](/ru/docs/Web/JavaScript/Reference/Functions)", поэтому точно также, как вы определяете функции ([function expressions](/ru/docs/Web/JavaScript/Reference/Operators/function) и [function declarations](/ru/docs/Web/JavaScript/Reference/Statements/function)), вы можете определять и классы с помощью: [class declarations](/ru/docs/Web/JavaScript/Reference/Statements/class) и [class expressions](/ru/docs/Web/JavaScript/Reference/Operators/class).

### Объявление класса

Первый способ определения класса — **class declaration (_объявление класса_)**. Для этого необходимо воспользоваться ключевым словом `class` и указать имя класса (в примере — «Rectangle»).

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### Подъём (hoisting)

Разница между _объявлением функции_ (_function declaration_) и _объявлением класса_ (_class declaration_) в том, что _объявление функции_ совершает подъём ({{Glossary("Hoisting", "hoisting")}}), в то время как _объявление класса_ — нет. Поэтому вначале необходимо объявить ваш класс и только затем работать с ним, а код же вроде следующего сгенерирует исключение типа {{jsxref("ReferenceError")}}:

```js
var p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### Выражение класса

Второй способ определения класса — **class expression (_выражение класса_)**. Можно создавать именованные и безымянные выражения. В первом случае имя выражения класса находится в локальной области видимости класса и может быть получено через свойства самого класса, а не его экземпляра.

```js
// безымянный
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// отобразится: "Rectangle"

// именованный
var Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// отобразится: "Rectangle2"
```

> **Примечание:** выражения класса подвержены тем же проблемам с подъёмом (hoisting), что и **объявления** класса.

## Тело класса и задание методов

Тело класса — это часть кода, заключённая в фигурные скобки `{}`. Здесь вы можете объявлять члены класса, такие как методы и конструктор.

### Строгий режим

Тела _объявлений классов_ и _выражений классов_ выполняются в строгом режиме ([strict mode](/ru/docs/Web/JavaScript/Reference/Strict_mode)).

### Constructor

Метод [`constructor`](/ru/docs/Web/JavaScript/Reference/Classes/constructor) — специальный метод, необходимый для создания и инициализации объектов, созданных, с помощью класса. В классе может быть только один метод с именем `constructor`. Исключение типа {{jsxref("SyntaxError")}} будет выброшено, если класс содержит более одного вхождения метода `constructor`.

Ключевое слово `super` можно использовать в методе `constructor` для вызова конструктора родительского класса.

### Методы прототипа

Смотрите также [определение методов](/ru/docs/Web/JavaScript/Reference/Functions/%D0%9E%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D0%BD%D0%B8%D0%B5_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2).

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

### Статические методы и свойства

Ключевое слово [`static`](/ru/docs/Web/JavaScript/Reference/Classes/static), определяет статический метод или свойства для класса. Статические методы и свойства вызываются без [инстанцирования](/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_Object_.28Class_Instance.29) их класса, и **не могут** быть вызваны у экземпляров (_instance_) класса. Статические методы, часто используются для создания служебных функций для приложения, в то время как статические свойства полезны для кеширования в рамках класса, фиксированной конфигурации или любых других целей, не связанных с реплецированием данных между экземплярами.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Точка";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; //undefined
p1.distance; //undefined
p2.displayName; //undefined
p2.distance; //undefined

console.log(Point.displayName); // "Точка"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### Привязка `this` в прототипных и статических методах

Когда статический или прототипный метод вызывается без привязки к this объекта (или когда this является типом boolean, string, number, undefined, null), тогда this будет иметь значение undefined внутри вызываемой функции. Поведение будет таким же даже без директивы `"use strict"`, потому что код внутри тела класса всегда выполняется в строгом режиме.

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
obj.speak(); // объект Animal
let speak = obj.speak;
speak(); // undefined

Animal.eat(); // класс Animal
let eat = Animal.eat;
eat(); // undefined
```

Если мы напишем этот же код используя классы основанные на функциях, тогда произойдёт автоупаковка основанная на значении this, в течение которого функция была вызвана. В строгом режиме автоупаковка не произойдёт - значение this останется прежним.

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

let obj = new Animal();
let speak = obj.speak;
speak(); // глобальный объект (нестрогий режим)

let eat = Animal.eat;
eat(); // глобальный объект (нестрогий режим)
```

### Свойства экземпляра

Свойства экземпляра должны быть определены в методе класса:

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Статические (class-side) свойства и свойства прототипа должны быть определены за рамками тела класса:

```
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

### Определение полей

> **Предупреждение:** Публичные и приватные поля - это [экспериментальная особенность (stage 3)](https://github.com/tc39/proposal-class-fields), предложенная комитетом [TC39](https://tc39.es/) по стандартам языка Javascript. Поддержка браузерами ограничена, но это нововведение может быть использовано на моменте сборки, используя к примеру [Babel](https://babeljs.io/).

#### Публичные поля

Используя Javascript синтаксис определения полей, приведённый выше пример может быть изменён следующим образом:

```
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Как видно из примера, поля могут быть объявлены как со начальным значением, так и без него.

Более подробно об этом написано в [публичные поля класса](/ru/docs/Web/JavaScript/Reference/Classes/Class_fields).

#### Приватные поля

Предыдущий пример может быть изменён следующим образом, используя приватные поля:

```
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

Приватные поля могут быть изменены или прочитаны только в рамках класса и не могут быть вызваны извне. Определяя вещи, которые не видны за пределами класса, вы гарантируете, что пользователи ваших классов не могут зависеть от внутренних компонентов, которые могут изменить версию на версию.

> **Примечание:** Приватные поля могут быть объявлены только заранее в объявлении поля.

Приватные поля не могут быть созданы позже путём присваивания им значения, в отличии от обычных свойств.

Более подробно об этом написано в [Приватные поля класса](/ru/docs/Web/JavaScript/Reference/Classes/%D0%9F%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%BD%D1%8B%D0%B5_%D0%BF%D0%BE%D0%BB%D1%8F_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0).

## Наследование классов с помощью `extends`

Ключевое слово [`extends`](/ru/docs/Web/JavaScript/Reference/Classes/extends) используется в _объявлениях классов_ и _выражениях классов_ для создания класса, дочернего относительно другого класса.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} издаёт звук.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // вызывает конструктор super класса и передаёт параметр name
  }

  speak() {
    console.log(`${this.name} лает.`);
  }
}

let d = new Dog("Митци");
d.speak(); // Митци лает
```

Если в подклассе присутствует конструктор, он должен сначала вызвать super, прежде чем использовать this.

Аналогичным образом можно расширять традиционные, основанные на функциях "классы":

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} издаёт звук.`);
};

class Dog extends Animal {
  speak() {
    console.log(`${this.name} лает.`);
  }
}

let d = new Dog("Митци");
d.speak(); // Митци лает

// Для аналогичных методов дочерний метод имеет приоритет над родительским.
```

Обратите внимание, что классы не могут расширять обычные (non-constructible) объекты. Если вам необходимо создать наследование от обычного объекта, в качестве замены можно использовать {{jsxref("Object.setPrototypeOf()")}}:

```js
var Animal = {
  speak() {
    console.log(`${this.name} издаёт звук.`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Если вы этого не сделаете, вы получите ошибку TypeError при вызове speak.
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog("Митци");
d.speak(); // Митци издаёт звук.
```

## Species

Допустим, вам хотелось бы возвращать объекты типа {{jsxref("Array")}} в вашем производном от массива классе `MyArray`. Паттерн species позволяет вам переопределять конструкторы по умолчанию.

Например, при использовании таких методов, как {{jsxref("Array.map", "map()")}}, который возвращает конструктор по умолчанию, вам хотелось бы, чтобы они возвращали родительский объект `Array` вместо объекта `MyArray`. Символ {{jsxref("Symbol.species")}} позволяет это реализовать:

```js
class MyArray extends Array {
  // Изменить species на родительский конструктор Array
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Обращение к родительскому классу с помощью `super`

Ключевое слово [`super`](/ru/docs/Web/JavaScript/Reference/Operators/super) используется для вызова функций на родителе объекта.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} издаёт звук.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} рычит.`);
  }
}

let l = new Lion("Фаззи");
l.speak();
// Фаззи издаёт звук.
// Фаззи рычит.
```

## Mix-ins

Абстрактные подклассы, или mix-ins, — это шаблоны для классов. У класса в ECMAScript может быть только один родительский класс, поэтому множественное наследование (к примеру, от tooling classes) невозможно. Функциональность должен предоставлять родительский класс.

Для реализации mix-ins в ECMAScript можно использовать функцию, которая в качестве аргумента принимает родительский класс, а возвращает подкласс, его расширяющий:

```js
var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

Класс, использующий такие mix-ins, можно описать следующим образом:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Повторное определение класа

Класс не может быть переопределён. Попытка этого приведёт к `SyntaxError` .

Если мы запускаете код в веб браузере, к примеру в Firefox Web Console (**Tools** > **Web Developer** > **Web Console**) и вы используете ('Run') определение класса с одним и тем же именем дважды, вы получите `SyntaxError: redeclaration of let ClassName;`. (Обсуждение по ошибке можно посмотреть в {{Bug(1428672)}}.) Chrome Developer Tools возвращает сообщение типа `Uncaught SyntaxError: Identifier 'ClassName' has already been declared at <anonymous>:1:1`.

## Смотрите также

- [Функции](/ru/docs/Web/JavaScript/Reference/Functions)
- [Определение классов](/ru/docs/Web/JavaScript/Reference/Statements/class)
- [Выражение классов](/ru/docs/Web/JavaScript/Reference/Operators/class)
- [Публичные поля класса](/ru/docs/Web/JavaScript/Reference/Classes/Class_fields)
- [Приватные поля класса](/ru/docs/Web/JavaScript/Reference/Classes/%D0%9F%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%BD%D1%8B%D0%B5_%D0%BF%D0%BE%D0%BB%D1%8F_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0)
- [super](/ru/docs/Web/JavaScript/Reference/Operators/super)
- [Статья в блоге: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [Fields and public/private class properties proposal (stage 3)](https://github.com/tc39/proposal-class-fields)

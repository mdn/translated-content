---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
---

{{jsSidebar("Classes")}}

`constructor` - это специальный метод, служащий для создания и инициализации объектов, созданных с использованием `class`.

## Синтаксис

```
constructor([arguments]) { ... }
```

## Описание

Конструктор позволяет произвести начальную инициализацию, которая должна быть выполнена до того, как остальные методы будут вызваны.

```
class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Отто');

otto.introduce();
```

Если вы не определили метод constructor, то будет использован конструктор по умолчанию. Если ваш класс базовый, то конструктор по умолчанию пустой:

```
constructor() {}
```

Если ваш класс является производным классом, конструктор по умолчанию вызывает родительский конструктор, передавая любые аргументы, которые были предоставлены:

```
constructor(...args) {
  super(...args);
}
```

Это позволяет работать следующему коду:

```
class ValidationError extends Error {

  printCustomerMessage() {
    return `Проверка не удалась :-( (подробности: ${this.message})`;
  }

}

try {
  throw new ValidationError("Неправильный номер телефона");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Это Error вместо ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Неизвестная ошибка', error);
    throw error;
  }
}
```

`ValidationError` классу не нужен явный (explicit) конструктор, потому что не требуется инициализация. Затем, конструктор по умолчанию позаботится об инициализации родительского класса `Error`, переданным ему аргументом.

Однако, если определён ваш собственный конструктор и класс является производным от какого-либо родительского класса, то вы должны явно объявить конструктор родительского класса, используя `super`. К примеру:

```
class ValidationError extends Error {

  constructor(message) {
    super(message);  // вызов конструктора родительского класса
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `Проверка не удалась :-( (подробности: ${this.message}, code: ${this.code})`;
  }

}

try {
  throw new ValidationError("Неправильный номер телефона");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Теперь это ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Неизвестная ошибка', error);
    throw error;
  }
}
```

В классе может быть только один метод с именем "`constructor`". Если класс содержит более одного `constructor`, будет сгенерировано исключение {{jsxref("SyntaxError")}}.

## Примеры

### Использование метода `constructor`

Данный фрагмент кода взят из [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Здесь вызывается конструктор родительского класса,
    // в который передаётся length в качестве аргументов,
    // соответствующим полям width и height класса Polygon
    super(length, length);
    // Примечание: В производном классе, super() должен вызываться перед тем, как
    // вы сможете использовать 'this'. Иначе будет сгенерировано исключение reference error.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### Другой пример

Посмотрите на этот отрывок кода.

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

Здесь прототип **Square** класса изменён, но в то же время constructor предыдущего базового класса **Polygon** вызывается при создании нового экземпляра **Square**.

### Constructors по умолчанию

Если вы не определите метод constructor, будет использован constructor по умолчанию. Для базовых классов, constructor по умолчанию:

```js
constructor() {}
```

Для производных классов, constructor по умолчанию:

```js
constructor(...args) {
  super(...args);
}
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [super()](/ru/docs/Web/JavaScript/Reference/Operators/super)
- [`class` expression](/ru/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/ru/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/ru/docs/Web/JavaScript/Reference/Classes)
- [Object.prototype.constructor](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

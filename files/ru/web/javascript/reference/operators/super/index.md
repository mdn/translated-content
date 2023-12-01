---
title: super
slug: Web/JavaScript/Reference/Operators/super
---

{{jsSidebar("Operators")}}

Ключевое слово **super** используется для вызова функций, принадлежащих родителю объекта.

Выражения `super.prop` и `super[expr]` действительны в любом [определении метода](/ru/docs/Web/JavaScript/Reference/Functions/Method_definitions) в [классах](/ru/docs/Web/JavaScript/Reference/Classes) и в [литералах объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Синтаксис

```js
super([arguments]); // вызов родительского конструктора.
super.functionOnParent([arguments]);
```

## Описание

В конструкторе ключевое слово `super()` используется как функция, вызывающая родительский конструктор. Её необходимо вызвать до первого обращения к ключевому слову `this` в теле конструктора. Ключевое слово `super` также может быть использовано для вызова функций родительского объекта.

## Пример

### Использование super в классах

Этот фрагмент кода взят из [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([демонстрация](https://googlechrome.github.io/samples/classes-es6/index.html)). В этом примере `super()` вызывается, чтобы не повторять части конструктора, одинаковые для классов `Rectangle` и `Square`.

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
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
    this.height; // ReferenceError, super должен быть вызван первым!

    // Здесь вызывается конструктор родительского класса с длинами,
    // указанными для ширины и высоты класса Rectangle
    super(length, length);

    // Примечание: в производных классах super() необходимо вызывать, прежде чем
    // использовать 'this'. Если этого не сделать, произойдет ошибка ReferenceError.
    this.name = "Square";
  }
}
```

### Вызов статических методов через super

Вы также можете вызывать super для [статических](/ru/docs/Web/JavaScript/Reference/Classes/static) методов.

```js
class Rectangle {
  static logNbSides() {
    return "У меня 4 стороны";
  }
}

class Square extends Rectangle {
  static logDescription() {
    return super.logNbSides() + ", равные между собой";
  }
}
Square.logDescription(); // 'У меня 4 стороны, равные между собой'
```

### Удаление свойств через super вызывает ошибку

Вы не можете использовать [оператор delete](/ru/docs/Web/JavaScript/Reference/Operators/delete) и `super.prop` или `super[expr]` для удаления свойств родительского класса, он выдаст: {{jsxref("ReferenceError")}}.

```js
class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo; // это плохо
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### `super.prop` не может переопределять свойства, защищённые от записи

При определении незаписываемых свойств с помощью, например, {{jsxref("Object.defineProperty")}}, `super` не может перезаписать значение свойства.

```js
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2; // Невозможно перезаписать значение.
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" доступен только для чтения
console.log(y.prop); // 1
```

### Использование `super.prop` в объектных литералах

Super также можно использовать в [объекте инициализатора / литерала](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer). В этом примере метод определяют два объекта. Во втором объекте `super` вызывает метод первого объекта. Это работает благодаря {{jsxref("Object.setPrototypeOf()")}}, с помощью которого мы можем установить прототип для `obj2` в `obj1`, так что `super` может найти `method1` в `obj1`.

```js
var obj1 = {
  method1() {
    console.log("method 1");
  },
};

var obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // выведет "method 1"
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Классы](/ru/docs/Web/JavaScript/Reference/Classes)

---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
---

{{jsSidebar("Classes")}}

Ключевое слово **`extends`** используется в [объявлении класса](/ru/docs/Web/JavaScript/Reference/Statements/class) или в [выражениях класса](/ru/docs/Web/JavaScript/Reference/Operators/class) для создания дочернего класса.

## Синтаксис

```
class ChildClass extends ParentClass { ... }
```

## Описание

Ключевое слово **`extends`** может быть использовано для создания дочернего класса для уже существующего класса или встроенного объекта.

Свойство **`.prototype`** родительского класса или объекта должно быть {{jsxref("Object")}} или {{jsxref("null")}}.

## Примеры

### Использование `extends`

В первом примере создаётся дочерний класс с именем `Square` от класса с именем `Polygon`. Этот пример был взят из [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class Square extends Polygon {
  constructor(length) {
    // Здесь вызывается конструктор родительского класса,
    // в который передаётся свойство length в качестве
    // аргументов, соответствующих полям width и height,
    // класса Polygon
    super(length, length);
    // Примечание:
    // В конструкторе класса, метод super() должен быть вызван
    // перед использованием this. В противном случае, будет
    // выброшена ошибка.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }
}
```

### Расширение встроенных объектов с помощью `extends`

Этот пример расширяет встроенный объект {{jsxref("Date")}}. Пример взят из [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    );
  }
}
```

### Расширение `null`

Расширение {{jsxref("null")}} работает как и с обычным классом, за исключением того, что прототип объекта не наследует {{jsxref("Object.prototype")}}.

```js
class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype); // null

new nullExtends(); //ReferenceError: this is not defined
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Classes](/ru/docs/Web/JavaScript/Reference/Classes)
- [super](/ru/docs/Web/JavaScript/Reference/Operators/super)

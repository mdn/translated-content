---
title: static
slug: Web/JavaScript/Reference/Classes/static
---

{{jsSidebar("Classes")}}

Для того, чтобы объявить статический метод класса, необходимо использовать ключевое слово **static**.

## Синтаксис

```
static methodName() { ... }
```

## Описание

Статические методы вызываются через имя класса. Вызывать статические методы через имя объекта запрещено. Статические методы часто используются для создания вспомогательных функций приложения.

## Вызов статических методов

### Вызов из другого статического метода

Чтобы вызвать статический метод в другом статическом методе того же класса, вы можете использовать ключевое слово [`this`](/ru/docs/Web/JavaScript/Reference/Operators/this).

```js
class StaticMethodCall {
  static staticMethod() {
    return "Вызван статический метод";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " из другого статического метода";
  }
}
StaticMethodCall.staticMethod();
// 'Вызван статический метод'

StaticMethodCall.anotherStaticMethod();
// 'Вызван статический метод из другого статического метода'
```

### Вызов из конструктора класса и других методов

Статические методы недоступны напрямую, используя ключевое слово [`this`](/ru/docs/Web/JavaScript/Reference/Operators/this) из нестатических методов. Вам нужно вызвать их с помощью имени класса: `CLASSNAME.STATIC_METHOD_NAME()` или вызовом метода как свойства конструктора: `this.constructor.STATIC_METHOD_NAME()`.

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod());
    // 'вызван статический метод.'

    console.log(this.constructor.staticMethod());
    // 'вызван статический метод.'
  }

  static staticMethod() {
    return "вызван статический метод.";
  }
}
```

## Примеры

Следующий пример демонстрирует:

1. Как статический метод реализуется в классе.
2. Как переопределить статический метод при наследовании.
3. Как можно и как нельзя вызывать статические методы.

```js
class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple()); // 3
console.log(Triple.triple(6)); // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (не затрагивается экземпляром родителя)

console.log(tp.triple());
// Выведет сообщение, что "tripple" не является
// функцией ('tp.tripple is not a function').
```

## Спецификации

{{Specifications}}

## Поддержка в браузерах

{{Compat}}

## Смотрите также

- [`class` expression](/ru/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/ru/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/ru/docs/Web/JavaScript/Reference/Classes)

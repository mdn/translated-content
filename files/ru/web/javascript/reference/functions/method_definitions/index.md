---
title: Определение методов
slug: Web/JavaScript/Reference/Functions/Method_definitions
---

{{JsSidebar("Functions")}}

Начиная с ECMAScript 6, существует короткий синтаксис для определения методов в инициализаторе объекта. По сути, это сокращение для функции, которая назначена имени метода.

## Синтаксис

```
var obj = {
  property([parameters]) {},
  get property() {},
  set property(value) {},
  * generator() {}
};
```

## Описание

Короткий синтаксис похожий на синтаксис [getter](/ru/docs/Web/JavaScript/Reference/Functions/get)'ов и [setter](/ru/docs/Web/JavaScript/Reference/Functions/set)'ов представленных в ECMAScript 5.

Следующий код:

```js
var obj = {
  foo: function () {},
  bar: function () {},
};
```

Вы теперь можете сократить до:

```js
var obj = {
  foo() {},
  bar() {},
};
```

### Сокращение методов-генераторов

[Методы-генераторы](/ru/docs/Web/JavaScript/Reference/Statements/function*) также могут быть определены используя короткий синтаксис. Обратите внимание, что звёздочка (\*) в коротком синтаксисе должна быть перед именем свойства генератора. То есть, `* g(){}` будет работать, а `g *(){}` не будет.

```js
// Используя свойство с именем (pre-ES6)
var obj2 = {
  g: function* () {
    var index = 0;
    while (true) yield index++;
  },
};

// Тот же объект используя короткий синтаксис
var obj2 = {
  *g() {
    var index = 0;
    while (true) yield index++;
  },
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Определения методов (ES6) не могут быть конструкторами

Все определения методов кроме методов-генераторов не могут быть конструкторами и будут выбрасывать {{jsxref("TypeError")}} если вы попытаетесь создать их экземпляр.

```js
var obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method is not a constructor

var obj = {
  *g() {},
};
new obj.g(); // Генератор
```

## Примеры

### Простой тестовый пример

```js
var obj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "foo"
```

### Вычисляемые имена свойств

Короткий синтаксис также поддерживает вычисляемые имена свойств.

```js
var bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo" + 2]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`get`](/ru/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/ru/docs/Web/JavaScript/Reference/Functions/set)
- [Lexical grammar](/ru/docs/Web/JavaScript/Reference/Lexical_grammar)

---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
---

{{JSRef}}

Статический метод **`Reflect.construct()`** работает как [`new` operator](/ru/docs/Web/JavaScript/Reference/Operators/new). Он эквивалентен `new target(...args)`. Это также даёт дополнительную возможность указать другой прототип.

{{EmbedInteractiveExample("pages/js/reflect-construct.html")}}

## Синтаксис

```
Reflect.construct(target, argumentsList[, newTarget])
```

### Параметры

- `target`
  - : Целевая функция для вызова.
- `argumentsList`
  - : Массивоподобный объект указывающий аргументы, с которыми `target` должна вызываться.
- `newTarget` {{optional_inline}}
  - : Конструктор, чей прототип должен быть использован. Смотрите также [`new.target`](/ru/docs/Web/JavaScript/Reference/Operators/new.target) оператор. Если `newTarget` не указан, то используется `target`.

### Возвращаемое значение

Новый экземпляр `target` (или `newTarget`, если указан), инициализируется `target` как конструктор с заданными аргументами.

### Исключения

Исключение {{jsxref("TypeError")}}, если `target` или `newTarget` не являются конструкторами.

## Описание

`Reflect.construct()` позволяет вам вызывать конструктор с любым числом аргументов (что также возможно с использованием [spread syntax](/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax) вместе с [`new` operator](/ru/docs/Web/JavaScript/Reference/Operators/new)).

```js
var obj = new Foo(...args);
var obj = Reflect.construct(Foo, args);
```

### `Reflect.construct()` против `Object.create()`

До появления `Reflect`, объекты могли быть созданы с использованием произвольной комбинации из конструктора и прототипа при помощи {{jsxref("Object.create()")}}.

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

// Данный вызов:
var obj1 = Reflect.construct(OneClass, args, OtherClass);

// ...будет аналогичен данному:
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

В любом случае, пока конечный результат один и тот же, существует одно важное отличие в этом процессе. При использовании `Object.create()` и {{jsxref("Function.prototype.apply()")}}, оператор `new.target` будет указывать на `undefined` внутри функции используемой в качестве конструктора, пока ключевое слово `new` не будет использовано для создания объекта.

С другой стороны, в случае вызова `Reflect.construct()`, оператор `new.target` будет указывать на параметр `newTarget` если он задан, или `target` в отличном случае.

```js
function OneClass() {
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  console.log("OtherClass");
  console.log(new.target);
}

var obj1 = Reflect.construct(OneClass, args);
// Вывод:
//     OneClass
//     function OneClass { ... }

var obj2 = Reflect.construct(OneClass, args, OtherClass);
// Вывод:
//     OneClass
//     function OtherClass { ... }

var obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Вывод:
//     OneClass
//     undefined
```

## Примеры

### Использования `Reflect.construct()`

```js
var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Reflect")}}
- [`new`](/ru/docs/Web/JavaScript/Reference/Operators/new)
- [`new.target`](/ru/docs/Web/JavaScript/Reference/Operators/new.target)

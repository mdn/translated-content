---
title: setter
slug: Web/JavaScript/Reference/Functions/set
---

{{jsSidebar("Functions")}}

Оператор **`set`** связывает свойство объекта с функцией, которая будет вызвана при попытке установить это свойство.

## Синтаксис

```
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```

### Параметры

- `prop`
  - : Имя свойства для привязки к заданной функции.

<!---->

- `val`
  - : Псевдоним переменной, которая хранит значение, неудавшегося определения `prop.`
- expression
  - : Начиная с ECMAScript 6, вы также можете использовать выражения для вычисляемого имя свойства для привязки к данной функции.

## Описание

В JavaScript, сеттер можно использовать для выполнения функции, когда будет попытка изменения указанного свойства. Сеттеры используются чаще всего в сочетании с геттерами для создания одного из видов псевдо-свойства. Невозможно одновременно иметь сеттер для свойства, которое содержит фактическое значение.

Обратите внимание на следующие моменты при работе с синтаксисом `set`:

- Он может иметь идентификатор, который является либо числом, либо строкой;
- Он должен иметь ровно один параметр (смотрите [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) для более подробной информации);
- Он не должен объявляться в литерале объекта, с другим набором или вводом данных для того же самого свойства.
  ( `{ set x(v) { }, set x(v) { } }` и `{ x: ..., set x(v) { } }` запрещены)

Сеттер может быть удалён оператором [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete).

## Примеры

### Определение сеттера при инициализации новых объектов

Это позволит определить псевдо-параметр `current` объекта `o`, который задаёт значение, обновляющее значение `log`:

```js
var o = {
  set current(str) {
    this.log[this.log.length] = str;
  },
  log: [],
};
```

`обратите внимание, что current` не определён и любые попытки доступа к нему вернут `undefined`.

### Удаление сеттера оператором `delete`

Если вы хотите удалить сеттер, вы можете просто его [`удалить`](/ru/docs/Web/JavaScript/Reference/Operators/delete):

```js
delete o.current;
```

### Определение сеттера для существующих объектов используя `defineProperty`

Чтобы добавить сеттер на существующий объект в любое время, используйте {{jsxref("Object.defineProperty()")}}.

```js
var o = { a: 0 };

Object.defineProperty(o, "b", {
  set: function (x) {
    this.a = x / 2;
  },
});

o.b = 10; // Запускает сеттер, который присваивает 10 / 2 (5) свойству 'a'
console.log(o.a); // 5
```

### Использование вычисляемого имени свойства

```js
var expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"
obj.foo = "baz"; // запускает сеттер
console.log(obj.baz); // "baz"
```

## Спецификации

{{Specifications}}

**Совместимость с браузерами**

{{Compat}}

## Смотрите также

- [getter](/ru/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Defining Getters and Setters](/ru/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) в руководстве по JavaScript

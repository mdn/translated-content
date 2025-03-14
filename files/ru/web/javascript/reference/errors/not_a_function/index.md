---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: "x" is not a function
```

## Тип ошибки

{{jsxref("TypeError")}}.

## Что пошло не так?

Была сделана попытка вызвать значение как функцию, но оно на самом деле не является функцией. Некоторый код ожидает, что вы предоставите функцию, но этого не происходит.

Возможно, есть ошибка в имени функции? Возможно, объект, метод которого вы вызываете, не содержит в себе этой функции? Для примера, JavaScript объекты не имеют `map` функции, а JavaScript Array - имеют.

Есть множество функций, нуждающихся в колбэк-функциях. Вы должны будете предоставить колбэк-функцию для того, чтобы эти методы работы правильно:

- Когда работаете с {{jsxref("Array")}} или {{jsxref("TypedArray")}} объектами:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Когда работаете с {{jsxref("Map")}} и {{jsxref("Set")}} объектами:

  - {{jsxref("Map.prototype.forEach()")}} и {{jsxref("Set.prototype.forEach()")}}

## Примеры

### Ошибки в имени функции

В данном случае, случающемся очень часто, есть опечатка в имени метода:

```js example-bad
var x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

Корректное имя функции - `getElementById`:

```js example-good
var x = document.getElementById("foo");
```

### Функция вызвана с неверным объектом

Для некоторых методов вы должны предоставить колбэк-функцию, и она будет работать только на корректных объектах. В этом примере используется {{jsxref("Array.prototype.map()")}}, в котором {{jsxref("Array")}} будет работать только с массивами.

```js example-bad
var obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

Использование с массивом:

```js example-good
var numbers = [1, 4, 9];

numbers.map(function (num) {
  return num * 2;
});

// Array [ 2, 8, 18 ]
```

## Смотрите также

- [Functions](/ru/docs/Web/JavaScript/Reference/Functions)

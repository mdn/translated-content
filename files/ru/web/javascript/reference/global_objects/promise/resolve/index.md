---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
---

{{JSRef}}

Метод **`Promise.resolve(value)`** возвращает {{jsxref("Promise")}} выполненный с переданным значением. Если переданное значение является thenable - объект (т.е. имеет метод {{jsxref("Promise.then", "\"then\" method")}}), возвращаемый промис будет следовать thenable - объекту, принимая своё состояние; в ином случае возвращаемый промис будет выполнен с переданным значением.

## Синтаксис

```
Promise.resolve(value);
Promise.resolve(promise);
Promise.resolve(thenable);
```

### Параметры

- value
  - : Значение с которым будет выполнен промис. Может также быть промисом или объект подобный промису (thenable - объект имеющий метод then).

### Возвращаемое значение

Выполненный с переданным значением {{jsxref("Promise")}}.

## Описание

`Метод Promise.resolve` возвращает выполненное промис (`Promise`).

## Примеры

### Использование метода `Promise.resolve`

```js
Promise.resolve("Success").then(
  function (value) {
    console.log(value); // "Success"
  },
  function (value) {
    // не будет вызвана
  },
);
```

### Выполнение с массивом

```js
var p = Promise.resolve([1, 2, 3]);
p.then(function (v) {
  console.log(v[0]); // 1
});
```

### Выполнение с другим промисом ( `Promise`)

```js
var original = Promise.resolve(true);
var cast = Promise.resolve(original);
cast.then(function (v) {
  console.log(v); // true
});
```

### Выполнение с thenable объектом и выбрасывание исключений

```js
// Выполнение с thenable объектом
var p1 = Promise.resolve({
  then: function (onFulfill, onReject) {
    onFulfill("fulfilled!");
  },
});
console.log(p1 instanceof Promise); // true

p1.then(
  function (v) {
    console.log(v); // "fulfilled!"
  },
  function (e) {
    // не вызывается
  },
);

// Thenable объект выбрасывает исключение
// перед вызовом колбэка Promise resolves
var thenable = {
  then: function (resolve) {
    throw new TypeError("Throwing");
    resolve("Resolving");
  },
};

var p2 = Promise.resolve(thenable);
p2.then(
  function (v) {
    // не вызывается
  },
  function (e) {
    console.log(e); // TypeError: Throwing
  },
);

// Thenable объект выбрасывает исключение
// после вызова колбэка Promise resolves
var thenable = {
  then: function (resolve) {
    resolve("Resolving");
    throw new TypeError("Throwing");
  },
};

var p3 = Promise.resolve(thenable);
p3.then(
  function (v) {
    console.log(v); // "Resolving"
  },
  function (e) {
    // не вызывается
  },
);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Promise")}}

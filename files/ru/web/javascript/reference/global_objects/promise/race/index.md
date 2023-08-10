---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
---

{{JSRef}}

Метод **Promise.race(iterable)** возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится первый из переданных промисов, со значением или причиной отклонения этого промиса.

{{EmbedInteractiveExample("pages/js/promise-race.html")}}

## Синтаксис

```js
Promise.race(iterable);
```

### Параметры

- `iterable`
  - : Итерируемый объект, такой как ({{jsxref("Array")}}). Смотри [iterable](/ru/docs/Web/JavaScript/Guide/iterable).

### Возвращаемое значение

Выполненный или отклонённый {{jsxref("Promise")}} в зависимости от результата первого завершённого из переданных в итерируемом объекте промисов.

## Описание

Метод `race` возвращает `Promise` с результатом, первого завершённого из переданных промисов. Т.е. возвратит resolve или reject, в зависимости от того, что случится первым.

## Примеры

### Использование `Promise.race` – пример с `setTimeout`

```js
var p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "один");
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "два");
});

Promise.race([p1, p2]).then(function (value) {
  console.log(value); // "два"
  // Оба вернули resolve, однако p2 вернул результат первым
});

var p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "три");
});
var p4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "четыре");
});

Promise.race([p3, p4]).then(
  function (value) {
    console.log(value); // "три"
    // p3 быстрее, поэтому выведется значение его resolve
  },
  function (reason) {
    // Не вызывается
  },
);

var p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "пять");
});
var p6 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, "шесть");
});

Promise.race([p5, p6]).then(
  function (value) {
    // Не вызывается
  },
  function (reason) {
    console.log(reason); // "шесть"
    // p6 быстрее, выводится его rejects
  },
);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Promise")}}

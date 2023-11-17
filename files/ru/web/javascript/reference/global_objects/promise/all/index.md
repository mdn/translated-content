---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
---

{{JSRef}}

## Общее описание

Метод **`Promise.all(iterable)`** возвращает промис, который выполнится тогда, когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонено любое из переданных промисов.

## Синтаксис

```
Promise.all(iterable);
```

### Параметры

- iterable
  - : Перечисляемый объект, например, массив ({{jsxref("Array")}}). Смотрите [iterable](/ru/docs/Web/JavaScript/Guide/iterable).

### Возвращаемое значение

{{jsxref("Promise")}}, который будет выполнен когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонён, если будет отклонено хоть одно из переданных промисов.

## Описание

**`Promise.all`** возвращает массив значений от всех промисов, которые были ему переданы. Возвращаемый массив значений сохраняет порядок оригинального перечисляемого объекта, но не порядок выполнения промисов. `Если какой-либо элемент перечисляемого объекта не является промисом, то он будет преобразован с помощью метода {{jsxref("Promise.resolve")}}.

Если одно из переданных промисов будет отклонено, **`Promise.all`** будет немедленно отклонён со значением отклонённого промиса, не учитывая другие промисы, независимо выполнены они или нет. Если в качестве аргумента будет передан пустой массив, то `Promise.all` будет выполнен немедленно.

## Примеры

### Использование `Promise.all`

**Promise.all** ждёт выполнения всех промисов (или первого метода `reject()`).

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});

//Выведет:
// [3, 1337, "foo"]
```

### `Promise.all` поведение немедленного отклонения

**`Promise.all`** будет немедленно отклонён если один из переданных промисов будет отклонен: если у вас есть четыре промиса которые будут выполнены с задержкой и один, который будет отклонен немедленно - тогда **`Promise.all`** будет немедленно отклонён.

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
  // Этот промис прервёт Promise.all
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  },
);

//Выведет:
//"reject"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Родственные темы

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}

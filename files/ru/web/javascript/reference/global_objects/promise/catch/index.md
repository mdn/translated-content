---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
---

{{JSRef}}

Метод **`catch()`** экземпляров {{jsxref("Promise")}} планирует вызов функции при отклонении промиса. Он немедленно возвращает другой объект {{jsxref("Promise")}}, что позволяет создавать цепочки вызовов вместе с другими методам промисов. Это краткая запись для {{jsxref("Promise/then", "then(undefined, onRejected)")}}.

{{InteractiveExample("JavaScript Demo: Promise.prototype.catch()")}}

```js interactive-example
const promise = new Promise((resolve, reject) => {
  throw new Error("Ой-ой!");
});

promise.catch((error) => {
  console.error(error);
});
// Ожидаемый результат: Error: Ой-ой!
```

## Синтаксис

```js-nolint
promiseInstance.catch(onRejected)
```

### Параметры

- onRejected
  - : {{jsxref("Function")}} вызывается когда промис отклонен. У этой функции один аргумент:
    - `reason`
      - : Причина отказа.

        Промис, возвращённый catch (), отклоняется, если onRejected выдаёт ошибку(throw) или возвращает Promise, который был отклонён; В противном случае Promise, возвращаемый catch () имеет статус выполнено (fulfilled)

### Возвращаемое значение

{{jsxref("Promise")}}.

## Описание

Метод `catch может быть полезен для обработки ошибок` в вашей структуре промисов.

## Примеры

### Использование метода `catch`

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("Success");
});

p1.then(function (value) {
  console.log(value); // "Success!"
  throw "oh, no!";
})
  .catch(function (e) {
    // Функция не перевыбросила исключение 'e'
    // в результате произойдёт resolve(undefined)
    // для Promise, возвращённого функцией catch
    console.log(e); // "oh, no!"
  })
  .then(
    function () {
      console.log("after a catch the chain is restored");
    },
    function () {
      // Функция не перевыбросила исключение 'e'
      // в результате произойдёт resolve(undefined)
      // для Promise, возвращённого функцией catch
      console.log("Not fired due to the catch");
    },
  );

// Следующий код ведёт себя также, как вышенаписанный
p1.then(function (value) {
  console.log(value); // "Success!"
  return Promise.reject("oh, no!");
})
  .catch(function (e) {
    // Функция не перевыбросила исключение 'e'
    // в результате произойдёт resolve(undefined)
    // для Promise, возвращённого функцией catch
    console.log(e); // "oh, no!"
  })
  .then(
    function () {
      console.log("after a catch the chain is restored");
    },
    function () {
      // Функция не перевыбросила исключение 'e'
      // в результате произойдёт resolve(undefined)
      // для Promise, возвращённого функцией catch
      console.log("Not fired due to the catch");
    },
  );
```

### Ловим выброшенные исключения

```js
// Выкидываемая ошибка вызовет метод catch
var p1 = new Promise(function (resolve, reject) {
  throw "Uh-oh!";
});

p1.catch(function (e) {
  console.log(e); // "Uh-oh!"
});

// Ошибки выброшенные из асинхронных функций не будут пойманы методом catch
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    throw "Uncaught Exception!";
  }, 1000);
});

p2.catch(function (e) {
  console.log(e); // Никогда не вызовется
});

// Ошибки выброшенные после выполнения промиса будут проигнорированны
var p3 = new Promise(function (resolve, reject) {
  resolve();
  throw "Silenced Exception!";
});

p3.catch(function (e) {
  console.log(e); // Никогда не вызовется
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}

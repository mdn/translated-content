---
title: Promise.race()
short-title: race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
---

{{JSRef}}

Статический метод **`Promise.race()`** принимает итерируемый объект с промисами в качестве входных данных и возвращает {{jsxref("Promise")}}, который завершается (выполняется или отклоняется) в зависимости от результата первого промиса из переданного итерируемого объекта, который завершится, с его значением или причиной отклонения.

{{InteractiveExample("JavaScript Demo: Promise.race()", "taller")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
```

## Синтаксис

```js-nolint
Promise.race(iterable)
```

### Параметры

- `iterable`
  - : [Итерируемый объект](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (например, {{jsxref("Array")}}) с промисами.

### Возвращаемое значение

{{jsxref("Promise")}}, который асинхронно завершается с конечным состоянием первого промиса из `iterable`, который завершится. Иными словами, промис выполняется успешно, если первым завершится успешный промис, и отклоняется, если первым завершится отклонённый промис. Если переданный `iterable` пуст, возвращённый промис навсегда останется в состоянии ожидания. Если переданный `iterable` не пуст, но не содержит ни одного ожидающего промиса, возвращённый промис всё равно завершится асинхронно (а не синхронно).

## Описание

Метод `Promise.race()` является одним из методов [параллельного выполнения промисов](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency). Он полезен, когда вы хотите дождаться завершения первой асинхронной задачи, но вам не важно её конечное состояние (то есть она может как успешно завершиться, так и завершиться ошибкой).

Если итерируемый объект содержит одно или несколько значений, не являющихся промисами, и/или уже завершившийся промис, то `Promise.race()` завершится с первым таким значением, встреченным в итерируемом объекте.

## Примеры

### Использование Promise.race()

Этот пример демонстрирует, как `Promise.race()` можно использовать для "гонки" нескольких таймеров, реализованных с помощью {{domxref("Window.setTimeout", "setTimeout()")}}. Таймер с наименьшим временем всегда выигрывает гонку и определяет состояние результирующего промиса.

```js
function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfill") {
        resolve(value);
      } else {
        reject(new Error(value));
      }
    }, time);
  });
}

const p1 = sleep(500, "one", "fulfill");
const p2 = sleep(100, "two", "fulfill");

Promise.race([p1, p2]).then((value) => {
  console.log(value); // "two"
  // Оба промиса успешны, но p2 срабатывает быстрее
});

const p3 = sleep(100, "three", "fulfill");
const p4 = sleep(500, "four", "reject");

Promise.race([p3, p4]).then(
  (value) => {
    console.log(value); // "three"
    // p3 быстрее, поэтому он успешен
  },
  (error) => {
    // Не вызывается
  },
);

const p5 = sleep(500, "five", "fulfill");
const p6 = sleep(100, "six", "reject");

Promise.race([p5, p6]).then(
  (value) => {
    // Не вызывается
  },
  (error) => {
    console.error(error.message); // "six"
    // p6 быстрее, поэтому он отклонён
  },
);
```

### Асинхронность Promise.race

Следующий пример демонстрирует асинхронность `Promise.race`. В отличие от других методов параллельного выполнения промисов, `Promise.race` всегда асинхронен: он никогда не завершается синхронно, даже если `iterable` пуст.

```js
// Передача массива уже успешно завершённых промисов,
// чтобы инициировать Promise.race как можно скорее
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// Немедленно выводим значение p
console.log(p);

// Используя setTimeout, мы можем выполнить код после очистки стека
setTimeout(() => {
  console.log("стек теперь пуст");
  console.log(p);
});

// Вывод, в порядке:
// Promise { <state>: "pending" }
// стек теперь пуст
// Promise { <state>: "fulfilled", <value>: 33 }
```

Пустой итерируемый объект приводит к тому, что возвращённый промис навсегда остаётся в состоянии ожидания:

```js
const foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(() => {
  console.log("стек теперь пуст");
  console.log(foreverPendingPromise);
});

// Вывод, в порядке:
// Promise { <state>: "pending" }
// стек теперь пуст
// Promise { <state>: "pending" }
```

Если итерируемый объект содержит одно или несколько значений, не являющихся промисами, и/или уже завершившийся промис, то `Promise.race` завершится с первым таким значением, встреченным в массиве:

```js
const foreverPendingPromise = Promise.race([]);
const alreadyFulfilledProm = Promise.resolve(100);

const arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
const arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
const p = Promise.race(arr);
const p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("стек теперь пуст");
  console.log(p);
  console.log(p2);
});

// Вывод, в порядке:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// стек теперь пуст
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
```

### Использование Promise.race() для реализации таймаута запроса

Вы можете устроить гонку между потенциально долгим запросом и таймером, который отклоняет промис, чтобы по истечении лимита времени результирующий промис автоматически отклонился.

```js
const data = Promise.race([
  fetch("/api"),
  new Promise((resolve, reject) => {
    // Отклонить через 5 секунд
    setTimeout(() => reject(new Error("Request timed out")), 5000);
  }),
])
  .then((res) => res.json())
  .catch((err) => displayError(err));
```

Если промис `data` успешно завершится, он будет содержать данные, полученные от `/api`; в противном случае он отклонится, если `fetch` останется в состоянии ожидания на 5 секунд и проиграет гонку таймеру `setTimeout`.

### Использование Promise.race() для определения состояния промиса

Поскольку `Promise.race()` разрешается первым не ожидающим промисом в итерируемом объекте, мы можем проверить состояние промиса, включая его нахождение в состоянии ожидания. Этот адаптированный пример взят из библиотеки [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js).

```js
function promiseState(promise) {
  const pendingState = { status: "pending" };

  return Promise.race([promise, pendingState]).then(
    (value) =>
      value === pendingState ? value : { status: "fulfilled", value },
    (reason) => ({ status: "rejected", reason }),
  );
}
```

В этой функции, если `promise` находится в состоянии ожидания, второе значение `pendingState` (не являющееся промисом) становится результатом гонки; в противном случае, если `promise` уже завершился, мы можем узнать его состояние через обработчики `onFulfilled` и `onRejected`. Например:

```js
const p1 = new Promise((res) => setTimeout(() => res(100), 100));
const p2 = new Promise((res) => setTimeout(() => res(200), 200));
const p3 = new Promise((res, rej) =>
  setTimeout(() => rej(new Error("failed")), 100),
);

async function getStates() {
  console.log(await promiseState(p1));
  console.log(await promiseState(p2));
  console.log(await promiseState(p3));
}

console.log("Сразу после инициализации:");
getStates();
setTimeout(() => {
  console.log("После ожидания 100мс:");
  getStates();
}, 100);

// Вывод:
// Сразу после инициализации:
// { status: 'pending' }
// { status: 'pending' }
// { status: 'pending' }
// После ожидания 100мс:
// { status: 'fulfilled', value: 100 }
// { status: 'pending' }
// { status: 'rejected', reason: Error: failed }
```

> [!NOTE]
> Функция `promiseState` всё ещё выполняется асинхронно, поскольку не существует способа синхронно получить значение промиса (то есть без `then()` или `await`), даже если он уже завершился. Однако `promiseState()` всегда успешно завершается в течение одного тика и никогда фактически не ожидает завершения какого-либо промиса.

### Сравнение с Promise.any()

`Promise.race` принимает первый завершившийся (settled) {{jsxref("Promise")}}.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("успешно завершён со значением:", value);
  })
  .catch((reason) => {
    // Успешен только promise1, но promise2 срабатывает быстрее
    console.error("отклонён по причине:", reason);
  });
// отклонён по причине: two
```

{{jsxref("Promise.any")}} принимает первый успешно завершившийся (fulfilled) {{jsxref("Promise")}}.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.any([promise1, promise2])
  .then((value) => {
    // Успешен только promise1, даже несмотря на то, что promise2 завершился раньше
    console.log("успешно завершён со значением:", value);
  })
  .catch((reason) => {
    console.error("отклонён по причине:", reason);
  });
// успешно завершён со значением: one
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}

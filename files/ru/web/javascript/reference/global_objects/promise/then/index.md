---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
---

{{JSRef}}

Метод **`then()`** возвращает {{jsxref("Promise")}}. Метод может принимать два аргумента: колбэк-функции для случаев выполнения и отклонения промиса.

> **Примечание:** Если один или оба аргумента отсутствуют или их значения не функции, то `then` пропустит их и не выбросит ошибку. Если для `Promise`, который переходит в состояние `выполнен` или `отклонён` вызван метод `then`, и у данного метода нет нужного обработчика, то в таком случае `then` просто возвращает промис с состоянием начального `Promise`, для которого `then` был вызван.

## Синтаксис

```
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // выполнение
  }, reason => {
  // отклонение
});
```

### Параметры

- `onFulfilled` {{optional_inline}}
  - : {{jsxref("Function")}} вызывается, когда `Promise` выполнен. Эта функция принимает один аргумент, значение с которым промис был выполнен. Если значение onFulfilled не функция, то оно автоматически заменяется на "Identity" функцию (возвращает полученный аргумент)
- `onRejected` {{optional_inline}}
  - : {{jsxref("Function")}} вызывается, когда `Promise` отклонён. Эта функция принимает один аргумент, значение с которым промис был отклонён. Если значение onRejected не функция, то оно автоматически заменяется на "Thrower" функцию (выбрасывает полученный аргумент как ошибку)

## Описание

Так как и метод `then`, и метод {{jsxref("Promise.prototype.catch()")}} возвращают `Promise`, их можно вызвать цепочкой — эта операция называется _соединение_.

## Примеры

### Использование метода `then`

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("Успех!");
  // или
  // reject("Ошибка!");
});

p1.then(
  function (value) {
    console.log(value); // Успех!
  },
  function (reason) {
    console.log(reason); // Ошибка!
  },
);
```

### Соединение

Так как метод `then` возвращает промис (`Promise`), вы можете объединить несколько вызовов `then` в цепочку. Значения возвращаемые из колбэков onFulfilled или onRejected будут автоматически обёрнуты в промис.

```js
var p2 = new Promise(function (resolve, reject) {
  resolve(1);
});

p2.then(function (value) {
  console.log(value); // 1
  return value + 1;
}).then(function (value) {
  console.log(value); // 2
});

p2.then(function (value) {
  console.log(value); // 1
});
```

Вы также можете соединить одну функцию, имеющую подобный с промисами API, с другой функцией.

```js
function fetch_current_data() {
  // API функции fetch() возвращает промис. Эта функция
  // имеет аналогичный API, за исключением значения в случае выполнения
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") != "application/json") {
      throw new TypeError();
    }
    var j = response.json();
    // можем что-нибудь делать с j
    return j; // в случае выполнения промиса, значение
    // передаётся в fetch_current_data().then()
  });
}
```

Если onFulfilled возвращает промис, возвращаемое значение может быть выполнено (resolved) / отклонено (rejected) промисом.

```js
function resolveLater(resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(function () {
    reject(20);
  }, 1000);
}

var p1 = Promise.resolve("foo");
var p2 = p1.then(function () {
  // Возвращает промис, который будет разрешен значением 10 через 1 секунду
  return new Promise(resolveLater);
});
p2.then(
  function (v) {
    console.log("resolved", v); // "resolved", 10
  },
  function (e) {
    // не вызвано
    console.log("rejected", e);
  },
);

var p3 = p1.then(function () {
  // Возвращает промис, который будет отброшен значением 20 через 1 секунду
  return new Promise(rejectLater);
});
p3.then(
  function (v) {
    // не
    console.log("resolved", v);
  },
  function (e) {
    console.log("rejected", e); // "rejected", 20
  },
);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}

---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
---

{{JSRef}}

Метод **`finally()`** возвращает {{jsxref("Promise")}}. Когда промис был выполнен, вне зависимости успешно или с ошибкой, указанная функция будет выполнена. Это даёт возможность запустить один раз определённый участок кода, который должен выполниться вне зависимости от того, с каким результатом выполнился `Promise`.

Это позволяет вам избавиться от дубликации кода в обработчиках {{jsxref("Promise.then", "then()")}} и {{jsxref("Promise.catch", "catch()")}}.

## Синтаксис

```
p.finally(onFinally);

p.finally(function() {
   // завершён (успешно или с ошибкой)
});

p.finally(() => {
// завершён (успешно или с ошибкой)
});
```

### Параметры

- `onFinally`
  - : Функция {{jsxref("Function")}} вызываемая когда промис завершен.

### Возвращаемое значение

Возвращает {{jsxref("Promise")}} для которого в качестве обработчика `finally` задана функция `onFinally`.

## Описание

`finally()` может быть полезен, если необходимо произвести какие-либо вычисления или очистку, как только `Promise` (промис) завершено, вне зависимости от результата.

`finally()` очень схож с вызовом `.then(onFinally, onFinally)`, однако существует несколько различий:

- Использование `finally()` позволяет избежать двойного объявления одной и той же функции или создания переменной.
- `finally` не получает аргументов, так как не существует способа определить, будет ли промис выполнен успешно или с ошибкой. Данный метод необходимо использовать, если не важна причина ошибки или результат успешного выполнения и, следовательно, нет необходимости её/его передавать.
- В отличие от `Promise.resolve(2).then(() => {}, () => {})` (результатом которого будет resolved-промис, со значением `undefined`), результатом `Promise.resolve(2).finally(() => {})` будет resolved-промис со значением `2`.
- Аналогично, в отличии от `Promise.reject(3).then(() => {}, () => {})` (результатом которого будет resolved-промис, со значением `undefined`), результатом `Promise.reject(3).finally(() => {})` будет rejected-промис со значением `3`.

> **Примечание:** A `throw` (or returning a rejected promise) in the `finally` callback will reject the new promise with the rejection reason specified when calling `throw()`.

## Примеры

```js
let isLoading = true;

fetch(myRequest)
  .then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function (json) {
    /* process your JSON further */
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    isLoading = false;
  });
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}

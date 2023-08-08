---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
---

{{JSRef}}

Метод **`Promise.reject(reason)`** возвращает объект `Promise, который был отклонён по указанной причине`.

## Синтаксис

```
Promise.reject(reason);
```

### Параметры

- reason
  - : Причина по которой `Promise` был отклонён.

### Возвращаемое значение

Отклонённый с указанной причиной {{jsxref("Promise")}}.

## Описание

`Promise.reject` возвращает `Promise` который был отклонён. В целях отладки и выборочного отлова ошибок, удобно использовать в качестве причины объекты {{jsxref("Error")}}.

## Примеры

### Использование статического метода Promise.reject()

```js
Promise.reject(new Error("провал")).then(
  function (success) {
    // не вызывается
  },
  function (error) {
    console.log(error); // печатает "провал" + Stacktrace
    throw error; // повторно выбрасываем ошибку, вызывая новый reject
  },
);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Promise")}}
- [Выборочный отлов ошибок с использованием библиотеки BlueBird Promise](http://bluebirdjs.com/docs/api/error.html)

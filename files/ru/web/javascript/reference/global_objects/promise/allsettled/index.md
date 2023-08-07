---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
---

{{JSRef}}

Метод **`Promise.allSettled()`** возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

{{EmbedInteractiveExample("pages/js/promise-allsettled.html")}}

## Синтаксис

```
promise.allSettled(iterable);
```

### Параметры

- `iterable`
  - : Любой [итерируемый](/ru/docs/Web/JavaScript/Reference/Iteration_protocols) объект, такой как {{jsxref("Array")}}, в котором каждый элемент является `Promise`.

### Возвращаемое значение

{{jsxref("Promise")}}, который будет выполнен после завершения каждого промиса, вне зависимости от того выполнился он успешно или был отклонён. В то же время, в возвращаемый обработчик промиса передаётся массив, который содержит результат каждого промиса в исходном наборе промисов.

Объект каждого результата содержит свойство `status`. Если `status` имеет значение `fulfilled` (выполнено), то объект будет содержать свойство `value`. Если `status` имеет значение `rejected` (отклонено), то объект будет содержать свойство `reason`. Свойство `value` (или `reason`) будет содержать значение с которым был выполнен (или отклонён) промис.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Promises](/ru/docs/Archive/Add-ons/Techniques/Promises)
- [Использование промисов](/ru/docs/Web/JavaScript/Guide/Using_promises)
- [Graceful asynchronous programming with promises](/ru/docs/Learn/JavaScript/Asynchronous/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}

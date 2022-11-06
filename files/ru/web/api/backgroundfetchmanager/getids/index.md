---
title: BackgroundFetchManager.getIds()
slug: Web/API/BackgroundFetchManager/getIds
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - getIds
  - BackgroundFetchManager
  - Experimental
  - Service Workers
  - Fetch
browser-compat: api.BackgroundFetchManager.getIds
---

{{DefaultAPISidebar("Background Fetch API")}}

Метод **`getIds()`** интерфейса {{domxref("BackgroundFetchManager")}} возвращает идентификаторы всех зарегистрированных фоновых запросов.

## Синтаксис

```js
getIds();
```

### Параметры

Отсутствуют.

### Возвращаемое значение

{{jsxref("Promise")}}, результатом обработки которого будет {{jsxref('Array', 'массив')}} {{jsxref('String', 'строк')}}.

### Исключения

Отсутствуют.

## Примеры

Следующие примеры показывают, как получить идентификаторы всех зарегистрированных фоновых запросов. При активном {{domxref('ServiceWorker', 'сервис-воркере')}} используйте свойство {{domxref('ServiceWorkerRegistration.backgroundFetch')}} для доступа к объекту `BackgroundFetchManager` и вызовите его метод `getIds()`.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const ids = await swReg.backgroundFetch.getIds();
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

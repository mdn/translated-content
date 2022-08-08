---
title: BackgroundFetchManager.get()
slug: Web/API/BackgroundFetchManager/get
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - get
  - BackgroundFetchManager
  - Experimental
  - Service Workers
  - Fetch
browser-compat: api.BackgroundFetchManager.get
---

{{DefaultAPISidebar("Background Fetch API")}}

Метож **`get()`** интерфейса {{domxref("BackgroundFetchManager")}} возвращает {{jsxref("Promise")}} который разрешается с {{domxref("BackgroundFetchRegistration")}} связанного с предоставленным `id`, или {{jsxref("undefined")}}, если идентификатор не найден.

## Синтаксис

```js
get(id);
```

### Параметры

- `id`
  - : Идентификатор {{domxref("backgroundFetchRegistration")}} определяемый при вызове {{domxref("BackgroundFetchRegistration.fetch","fetch()")}}.

### Возвращаемое значение

{{jsxref("Promise")}} который разрешается с {{domxref("BackgroundFetchRegistration")}} или {{jsxref("undefined")}}.

## Примеры

Следующие примеры показывают как использовать `get()` для получения {{domxref("BackgroundFetchRegistration")}}. При активном {{domxref('ServiceWorker', 'service worker')}} используйте {{domxref('ServiceWorkerRegistration.backgroundFetch')}} для доступа к объекту `BackgroundFetchManager` и вызовите его метод `get()`.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.get('my-fetch');
});
my code block
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

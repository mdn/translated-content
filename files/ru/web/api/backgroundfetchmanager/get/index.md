---
title: BackgroundFetchManager.get()
slug: Web/API/BackgroundFetchManager/get
---

{{DefaultAPISidebar("Background Fetch API")}}

Метод **`get()`** интерфейса {{domxref("BackgroundFetchManager")}} возвращает {{jsxref("Promise")}}, результатом обработки которого будет объект {{domxref("BackgroundFetchRegistration")}}, связанный с переданным `id`, или {{jsxref("undefined")}}, если идентификатор не найден.

## Синтаксис

```js
get(id);
```

### Параметры

- `id`
  - : Идентификатор {{domxref("backgroundFetchRegistration")}}, определяемый при вызове {{domxref("BackgroundFetchRegistration.fetch","fetch()")}}.

### Возвращаемое значение

{{jsxref("Promise")}}, результатом обработки которого будет объект {{domxref("BackgroundFetchRegistration")}} или {{jsxref("undefined")}}.

## Примеры

Следующие примеры показывают, как использовать `get()` для получения {{domxref("BackgroundFetchRegistration")}}. При активном {{domxref('ServiceWorker', 'сервис-воркере')}} используйте {{domxref('ServiceWorkerRegistration.backgroundFetch')}} для доступа к объекту `BackgroundFetchManager` и вызовите его метод `get()`.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.get('my-fetch');
});
my code block
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

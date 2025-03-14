---
title: Clients.claim()
slug: Web/API/Clients/claim
---

{{APIRef("Service Worker Clients")}}

Метод **`claim()`** интерфейса {{domxref("Clients")}} позволяет активному сервис-воркеру установить себя {{domxref("ServiceWorkerContainer.controller", "контролирующим воркером")}} для всех клиентских страниц в своей {{domxref("ServiceWorkerRegistration.scope", "области видимости")}}. Вызывает событие "`controllerchange`" на {{domxref("ServiceWorkerContainer","navigator.serviceWorker")}} всех клиентских страниц, контролируемых сервис-воркером.

После регистрации сервис-воркера страницы не начнут использовать его, пока не загрузятся вновь. Метод `claim()` позволяет установить контроль над страницами немедленно. Имейте в виду, что в этом случае ваш сервис-воркер будет контролировать все загружаемые по сети страницы этого origin, в т. ч. из других сервис-воркеров.

## Синтаксис

```js
await clients.claim();
```

### Параметры

Нет.

### Результат

[`Promise`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise) с `undefined`.

## Пример

В примере ниже внутри обработчика события "`activate`" сервис-воркера используется метод `claim()`, что позволяет клиентской странице, загруженной в той же области видимости, обходиться без перезагрузки для использования сервис-воркером.

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Service Worker](/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [The service worker lifecycle](https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise", "Promises")}}
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}} — переключайте состояние ожидания сервис-воркера

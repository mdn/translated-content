---
title: Clients
slug: Web/API/Clients
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

Интерфейс `Clients` [Service Workers API](/ru/docs/Web/API/ServiceWorker_API) представляет собой контейнер со списком объектов {{domxref("Client")}}.

## Методы

- {{domxref("Clients.get()")}}
  - : Получает клиента сервис воркера, соответствующего данному `id,` и возвращает его в {{jsxref("Promise")}}.
- {{domxref("Clients.matchAll()")}}
  - : Получает список клиентов сервис воркера и возвращает их в {{jsxref("Promise")}}. Включает параметр `options` для возврата всех клиентов сервис воркера, чьи источники являются теми же источниками, что и у связанного источника сервис воркера. Если `options` не включены, метод возвращает только тех клиентов сервис воркера, которых тот контролирует.
- {{domxref("Clients.openWindow()")}}
  - : Открывает {{domxref("Client")}} сервис воркера в новом окне браузера.
- {{domxref("Clients.claim()")}}
  - : Позволяет активному Сервис Воркеру установить себя, как активного воркера для клиентской страницы, когда воркер и страница находятся в одной области.

## Примеры

```js
clients.matchAll(options).then(function (clients) {
  for (i = 0; i < clients.length; i++) {
    if (clients[i] === "index.html") {
      clients.openWindow(clients[i]);
      // или сделать что-то другое, с учётом подошедшего клиента
    }
  }
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using Service Workers](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ru/docs/Web/Guide/Performance/Using_web_workers)

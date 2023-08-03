---
title: ExtendableEvent.waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
---

{{APIRef("Service Workers API")}}

Метод **`ExtendableEvent.waitUntil()`** сообщает диспетчеру событий, что выполняется действие. Также этот метод может быть использован, для того чтобы определить было ли то действие успешным. В рамках service workers, `waitUntil()` сообщает браузеру, что действие продолжается пока промис не завершится (_promise settles_) и браузер не должен прерывать service worker если он хочет, чтобы это действие завершилось.

События `install` в {{domxref("ServiceWorkerGlobalScope", "service workers")}} используют `waitUntil()` чтобы задержать service worker в {{domxref("ServiceWorkerRegistration.installing", "installing")}} фазе пока не завершатся задачи. Если промис, переданный в `waitUntil()`, отклоняется, установка считается неудачной и устанавливаемый service worker отбрасывается. В первую очередь это используется для гарантии того, что service worker не рассматривается как установленный (installed), пока все основные кеши на которые он зависит успешно не заполнены.

События `activate` в {{domxref("ServiceWorkerGlobalScope", "service workers")}} используют `waitUntil()` для размещения в буфере функциональных событий таких как `fetch` и `push` пока промис, переданный в `waitUntil()`, не завершится успешно. Это даёт service worker время, чтобы обновить схемы базы данных и удалить устаревшие {{domxref("Cache", "caches")}}, таким образом другие события могут полагаться на полностью обновлённое состояние.

Метод `waitUntil()` должен быть изначально вызван внутри колбэка события (_event callback_), но после этого он может быть вызван множество раз, до тех пор пока все промисы, переданные в него, не завершатся успешно.

> **Примечание:** Поведение описанное в параграфе выше, было исправлено в Firefix 43 (смотрите {{bug(1180274)}}).

## Синтаксис

```
extendableEvent.waitUntil(promise);
```

### Параметры

{{jsxref("Promise")}}.

### Возвращаемое значение

`undefined`.

## Примеры

Использование `waitUntil()` внутри события `install` в service worker:

```js
addEventListener("install", (event) => {
  const preCache = async () => {
    const cache = await caches.open("static-v1");
    return cache.addAll(["/", "/about/", "/static/styles.css"]);
  };
  event.waitUntil(preCache());
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Service Workers](/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Готов ли ServiceWorker?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}

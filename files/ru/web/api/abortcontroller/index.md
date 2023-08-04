---
title: AbortController
slug: Web/API/AbortController
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Интерфейс **`AbortController`** представляет объект контроллера, который позволяет вам при необходимости обрывать один и более DOM запросов.

Вы можете создать новый объект `AbortController` используя конструктор {{domxref("AbortController.AbortController()")}}. Взаимодействие с DOM запросами сделано с использованием объекта {{domxref("AbortSignal")}}.

## Конструктор

- {{domxref("AbortController.AbortController()")}}
  - : Создаёт новый экземпляр `AbortController`.

## Свойства

- {{domxref("AbortController.signal")}} {{readonlyInline}}
  - : Возвращает экземпляр {{domxref("AbortSignal")}}, который может быть использован для коммуникаций/останова DOM запросов.

## Методы

- {{domxref("AbortController.abort()")}}
  - : Прерывает DOM запрос до момента его завершения. Это даёт возможность обрывать [fetch запросы](/ru/docs/Web/API/WindowOrWorkerGlobalScope/fetch), потребителей любых ответов с {{domxref("Body")}} и потоки.

## Примеры

В текущем фрагменте мы пытаемся скачать видео используя [Fetch API](/ru/docs/Web/API/Fetch_API).

Для начала мы создадим контроллер используя конструктор {{domxref("AbortController.AbortController","AbortController()")}}, затем возьмём ссылку на ассоциированный с ним объект {{domxref("AbortSignal")}} используя свойство {{domxref("AbortController.signal")}}.

При инициализации [fetch запроса](/ru/docs/Web/API/WindowOrWorkerGlobalScope/fetch), мы передаём `AbortSignal` в качестве параметра (смотрите ниже `{signal}`). Это ассоциирует сигнал и контроллер с fetch запросом и даёт нам возможность остановить запрос вызовом метода {{domxref("AbortController.abort()")}}, что можно увидеть во втором addEventListener.

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}
```

> **Примечание:** При вызове `abort()`, промис `fetch()` будет отклонён с `AbortError`.

Вы можете найти полный рабочий пример на GitHub — смотрите [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) ([и живой пример](https://mdn.github.io/dom-examples/abort-api/)).

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) от Jake Archibald

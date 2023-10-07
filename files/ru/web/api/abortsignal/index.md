---
title: AbortSignal
slug: Web/API/AbortSignal
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`AbortSignal`** интерфейс представляет собой объект сигнала, который позволяет вам общаться с DOM запросом (например, Fetch) и прервать его при необходимости с помощью объекта {{domxref("AbortController")}}.

## Свойства

_AbortSignal также наследует свойства от своего родительского интерфейса, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : Это {{domxref("Boolean")}}, который указывает, отменён ли запрос(ы), с которым связывался сигнал, отменён (`true`) или нет (`false`).

### Обработчики событий

- {{domxref("AbortSignal.onabort")}}
  - : Вызывается когда происходит событие {{event("abort_(dom_abort_api)", "abort")}}, т.е. когда DOM запрос(ы), с которым связывался сигнал, отменён.

## Методы

_AbortSignal наследует методы от родительского интерфейса, {{domxref("EventTarget")}}._

## Примеры

В следующем фрагменте мы будем загружать видео используя [Fetch API](/ru/docs/Web/API/Fetch_API).

Сначала мы создаём контроллер с помощью конструктора {{domxref("AbortController.AbortController","AbortController()")}}, а затем получаем ссылку на связанный объект {{domxref("AbortSignal")}} используя свойство {{domxref("AbortController.signal")}}.

Когда [fetch запрос](/ru/docs/Web/API/WindowOrWorkerGlobalScope/fetch) инициируется, мы передаём `AbortSignal` в качестве опции внутрь объекта параметров запроса (см. `{signal}` ниже). Это связывает сигнал и контроллер с fetch запросом и позволяет нам прервать его, вызвав {{domxref("AbortController.abort()")}}, как показано ниже во втором обработчике событий.

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Загрузка прервана');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = 'Ошибка загрузки: ' + e.message;
  })
}
```

> **Примечание:** Когда `abort()` вызывается, `fetch()` промис отклоняется с `AbortError`.

> **Предупреждение:** Текущая версия Firefox отклоняет промис с `DOMException`

Вы можете найти полный рабочий пример на GitHub — см. [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) ([см. как он работает в живую](https://mdn.github.io/dom-examples/abort-api/)).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) by Jake Archibald

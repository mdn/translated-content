---
title: AbortController.AbortController()
slug: Web/API/AbortController/AbortController
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Конструктор **`AbortController()`** создаёт новый экземпляр объекта `AbortController`.

## Синтаксис

```js
var controller = new AbortController();
```

### Параметры

Нет.

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

Вы можете найти полный рабочий пример на GitHub — см. [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) ([см. как он работает в живую](https://mdn.github.io/dom-examples/abort-api/)).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)

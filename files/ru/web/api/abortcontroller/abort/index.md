---
title: AbortController.abort()
slug: Web/API/AbortController/abort
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Метод `abort()` интерфейса {{domxref("AbortController")}} прерывает DOM запрос (например Fetch запрос) до его завершения. Это позволяет прервать [fetch запросы](/ru/docs/Web/API/WindowOrWorkerGlobalScope/fetch), использование любого ответа {{domxref("Body")}} и потоков.

## Синтаксис

```js
controller.abort();
```

### Параметры

Отсутствуют.

### Возвращаемое значение

Не возвращает.

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

Вы можете найти полный работающий пример на GitHub — см. [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) ([увидеть работу в живую](https://mdn.github.io/dom-examples/abort-api/)).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)

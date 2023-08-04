---
title: "Document: событие scroll"
slug: Web/API/Document/scroll_event
---

{{APIRef}}

Событие **`scroll`** возникает при прокрутке области просмотра документа или элемента.

<table class="properties">
  <thead></thead>
  <tbody>
    <tr>
      <th>Всплытие</th>
      <td>Да</td>
    </tr>
    <tr>
      <th>Отменяемый</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th>Интерфейс</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>Свойство обработчика событий</th>
      <td>
        {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}}
      </td>
    </tr>
  </tbody>
</table>

> **Примечание:** В iOS UIWebViews события `scroll` не срабатывают во время самого прокручивания, только по его завершении. См. [issue в Bootstrap #16202](https://github.com/twbs/bootstrap/issues/16202). Safari и WKWebViews не подвержены этому багу.

## Примеры

### Пропуск тактов события прокрутки

Поскольку события прокрутки могут запускаться с высокой скоростью, обработчик событий не должен выполнять вычислительно-ёмкие операции, такие как модификации DOM. Вместо этого рекомендуется пропускать такты события, используя {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{DOMxRef("WindowOrWorkerGlobalScope.setTimeout()", "setTimeout()")}} или {{DOMxRef("CustomEvent")}}, как показано ниже.

Обратите внимание, однако, что входные события и кадры анимации запускаются примерно с одинаковой скоростью, и поэтому приведённая ниже оптимизация зачастую не требуется. В примере ниже оптимизируется событие `scroll` для `requestAnimationFrame`:

```js
// Источник: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Делаем что-нибудь с позицией скролла
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
```

Больше похожих примеров можно найти на странице события [`resize`](/ru/docs/Web/API/Window/resize_event).

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Element: событие `scroll`](/ru/docs/Web/API/Element/scroll_event)

---
title: DOMContentLoaded
slug: conflicting/Web/API/Document/DOMContentLoaded_event
original_slug: Web/API/Window/DOMContentLoaded_event
---

`Событие DOMContentLoaded` происходит когда весь HTML был полностью загружен и пройден парсером, не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов. Значительно отличающееся от него событие [`load`](/ru/docs/Mozilla_event_reference/load) используется для отслеживания только полностью загруженной страницы. Широко распространённой ошибкой является использование [`load`](/ru/docs/Mozilla_event_reference/load) в ситуации когда `DOMContentLoaded` является более подходящим, будьте внимательны.

> **Примечание:** Синхронный JavaScript останавливает парсинг DOM.

> **Примечание:** Существуют различные библиотеки, как общего назначения так и специализированные, предлагающие кросс-браузерные методы, позволяющие определить, что DOM готов к использованию.

## Ускорение работы

Если вы хотите чтобы DOM был пройден парсером насколько возможно быстро, сразу после запроса пользователем страницы, вы можете попробовать выполнять [JavaScript асинхронно](/ru/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) и [оптимизировать загрузку таблиц стилей](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) которые обычно замедляют загрузку документа поскольку загружаясь одновременно "крадут" трафик у основного документа.

## Основная информация

- Спецификация
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#the-end)
- Интерфейс
  - : Event
- Всплывает
  - : Да
- Отменяемое
  - : Да (несмотря на то, что в спецификации указано как простое событие, которое не является отменяемым)
- Цель
  - : Document
- Default Action
  - : Нет.

## Свойства

| Свойство                        | Тип                        | Описание                                               |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Тип события.                                           |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Возможно ли отменить событие.                          |

## Пример

```
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
</script>
```

```
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

for(var i=0; i<1000000000; i++)
{} // this synchronous script is going to delay parsing of the DOM. So the DOMContentLoaded event is going to launch later.
</script>
```

## Поддержка браузерами

{{Compat}}

## Связанные события

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}

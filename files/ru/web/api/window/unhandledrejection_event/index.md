---
title: unhandledrejection
slug: Web/API/Window/unhandledrejection_event
---

Событие **`unhandledrejection`** происходит, когда {{jsxref("Promise")}} завершён с ошибкой, но на данную ошибку не установлен обработчик.

<table class="properties">
  <tbody>
    <tr>
      <td>Всплытие</td>
      <td>Нет</td>
    </tr>
    <tr>
      <td>Возможность отмены</td>
      <td>Нет</td>
    </tr>
    <tr>
      <td>Target objects</td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td>Интерфейс</td>
      <td>{{domxref("PromiseRejectionEvent")}}</td>
    </tr>
  </tbody>
</table>

## Пример

```js
window.addEventListener("unhandledrejection", function (event) {
  console.warn(
    "Внимание: Необработанная ошибка Promise. Позор вам! Причина: " +
      event.reason,
  );
});
```

## Inheritance

Событие `unhandledrejection` реализует {{domxref("PromiseRejectionEvent")}} интерфейс, который наследуется от {{domxref("Event")}}. Вы можете использовать свойства и методы, определённые в данных интерфейсах.

{{InheritanceDiagram('','','', 'PromiseRejectionEvent')}}

## Смотрите также

- {{Event("rejectionhandled")}}
- {{domxref("PromiseRejectionEvent")}}
- {{domxref("Promise")}}

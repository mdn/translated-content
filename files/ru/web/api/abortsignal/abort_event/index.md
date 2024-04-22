---
title: abort
slug: Web/API/AbortSignal/abort_event
---

{{SeeCompatTable}}

Событие **`abort`** из [Fetch API](/ru/docs/Web/API/Fetch_API) вызывается когда fetch запрос прерывается, т.е. с помощью {{domxref("AbortController.abort()")}}.

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>Нет</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>Нет</td>
    </tr>
    <tr>
      <td>Target objects</td>
      <td>{{domxref("AbortSignal")}}</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## Примеры

В следующем фрагменте мы создаём новый объект {{domxref("AbortController")}}, и получаем его {{domxref("AbortSignal")}} (доступно в свойстве `signal`). Позже мы проверяем, был ли прерван сигнал, используя свойство `aborted`, и выводим соответствующее сообщение в консоль.

```js
var controller = new AbortController();
var signal = controller.signal;

signal.onabort = function () {
  console.log("Request aborted");
};
```

## Наследование

Событие `abort` реализует {{domxref("Event")}} интерфейс — он имеет свойства и методы, определённые в нём.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)

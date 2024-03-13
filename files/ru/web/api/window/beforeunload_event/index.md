---
title: "Window: beforeunload event"
slug: Web/API/Window/beforeunload_event
---

{{APIRef}}

Событие **beforeunload** запускается, когда окно, документ и его ресурсы вот-вот будут выгружены. Документ все ещё виден, и событие в этот момент может быть отменено.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Всплываемость</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Отменяемость</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">Интерфейс</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Свойство обработчика событий</th>
      <td>
        {{domxref("WindowEventHandlers/onbeforeunload", "onbeforeunload")}}
      </td>
    </tr>
  </tbody>
</table>

Это событие позволяет веб-странице вызвать диалоговое окно подтверждения, спрашивающее пользователя, действительно ли он хочет покинуть страницу. Если пользователь подтверждает, браузер переходит на новую страницу, в противном случае он отменяет навигацию.

В соответствии со спецификацией, для отображения диалогового окна подтверждения обработчик события должен вызвать{{domxref("Event.preventDefault()", "preventDefault()")}} по событию.

Однако обратите внимание, что не все браузеры поддерживают этот метод, а некоторые требуют от обработчика событий реализации одного из двух старых методов:

- назначение строки свойству returnValue события
- возвращающий строку из обработчика событий.

Некоторые браузеры используют для отображения возвращаемой строки в диалоге подтверждения, позволяя обработчику события отображать пользователю пользовательское сообщение. Однако это устарело и больше не поддерживается в большинстве браузеров.

Для борьбы с нежелательными всплывающими окнами браузеры могут не отображать подсказки, созданные в обработчиках событий **beforeunload**, за исключением случаев, когда страница была обработана или даже не отображается вообще.

Прикрепление обработчика событий к `window` или `document` `beforeunload` событие не позволяет браузерам использовать кеш навигации по страницам в памяти, наподобие [Firefox's Back-Forward cache](/ru/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching) or [WebKit's Page Cache](https://webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/).

В спецификации HTML указано, что вызовы {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, и {{domxref("window.prompt()")}} методы могут быть проигнорированы во время этого события. Посмотреть [HTML specification](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts) для более подробной информации.

## Примеры

В HTML-спецификации указано, что авторы должны использовать метод {{domxref("Event.preventDefault()")}}, а не {{domxref("Event.returnValue")}}. Однако, это поддерживается не всеми браузерами.

```js
window.addEventListener("beforeunload", (event) => {
  // Отмените событие, как указано в стандарте.
  event.preventDefault();
  // Chrome требует установки возвратного значения.
  event.returnValue = "";
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

Смотрите [WindowEventHandlers/onbeforeunload](/ru/docs/Web/API/WindowEventHandlers/onbeforeunload#Browser_compatibility) для получения более подробной информации о том, как различные браузеры обрабатывают это событие.

## Смотрите также

- Related events: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/#prompt-to-unload-a-document)
- [Remove Custom Messages in onbeforeload Dialogs after Chrome 51](https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeunload_dialogs)

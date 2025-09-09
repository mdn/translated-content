---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

**`EventSource`** — это интерфейс веб-контента для [отправляемых сервером событиям](/ru/docs/Web/API/Server-sent_events).

Экземпляр `EventSource` открывает постоянное соединение с [HTTP](/ru/docs/Web/HTTP)-сервером, который отправляет [события](/ru/docs/Learn_web_development/Core/Scripting/Events) в формате `text/event-stream`.
Соединение остаётся открытым до тех пор, пока не будет закрыто вызовом {{domxref("EventSource.close()")}}.

{{InheritanceDiagram}}

После открытия соединения входящие сообщения с сервера доставляются в клиентский код в виде событий.
Если во входящем сообщении есть поле события, то вызывается событие, совпадающее со значением этого поля.
Если поле события отсутствует, то запускается общее событие {{domxref("EventSource/message_event", "message")}}.

В отличие от [WebSockets](/ru/docs/Web/API/WebSockets_API), отправляемые сервером события являются однонаправленными, то есть сообщения с данными доставляются в одном направлении, от сервера к клиенту (например, веб-браузеру пользователя).
Это делает их отличным выбором, когда нет необходимости отправлять данные в форме сообщений от клиента к серверу. Например, `EventSource` будет полезным для реализации таких функций, как обновление новостной ленты и статуса в социальных сетях, доставки данных в механизм [хранилища на стороне клиента](/ru/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage), такой как [IndexedDB](/ru/docs/Web/API/IndexedDB_API) или [веб-хранилища](/ru/docs/Web/API/Web_Storage_API).

> [!WARNING] **Без использования HTTP/2**, максимальное количество открытых SSE-соединений может быть ограничено, что может быть особенно заметным при открытии нескольких вкладок, поскольку ограничение действует _на браузер_ и установлено в очень низкое значение (6). Эта проблема отмечена как «Не будет исправлена» в [Chrome](https://crbug.com/275955) и [Firefox](https://bugzil.la/906896). Ограничение действует на связку «браузер + домен», то есть можно открыть только 6 SSE-соединений к `www.example1.com` для всех вкладок и ещё 6 SSE-соединений к `www.example2.com` (согласно [StackOverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). При использовании HTTP/2, максимальное количество одновременных _HTTP-потоков_ согласовывается между сервером и клиентом (по умолчанию оно равно 100).

## Конструктор

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : Создаёт новый `EventSource` для обработки отправленных сервером событий с указанного URL-адреса, при необходимости с учётными данными.

## Свойства экземпляра

_Этот интерфейс наследует свойства своего родителя, {{domxref("EventTarget")}}._

- {{domxref("EventSource.readyState")}} {{ReadOnlyInline}}
  - : Число, представляющее состояние соединения. Допустимые значения: `CONNECTING` (`0`), `OPEN` (`1`) или `CLOSED` (`2`).
- {{domxref("EventSource.url")}} {{ReadOnlyInline}}
  - : Строка, представляющая URL-адрес источника.
- {{domxref("EventSource.withCredentials")}} {{ReadOnlyInline}}
  - : Логическое значение, указывающее, был ли объект `EventSource` создан с кросс-доменными ([CORS](/ru/docs/Web/HTTP/Guides/CORS)) учётными данными (`true`) или нет (`false`, по умолчанию).

## Методы экземпляра

_Этот интерфейс наследует методы своего родителя, {{domxref("EventTarget")}}._

- {{domxref("EventSource.close()")}}
  - : Закрывает соединение и устанавливает атрибут `readyState` в значение `CLOSED`. Если соединение было уже закрыто, то этот метод ничего не делает.

## События

- {{domxref("EventSource/error_event", "error")}}
  - : Возникает, когда не удаётся установить соединение с источником событий.
- {{domxref("EventSource/message_event", "message")}}
  - : Возникает при получении данных от источника событий.
- {{domxref("EventSource/open_event", "open")}}
  - : Возникает при открытии соединения с источником событий.

Кроме того, источник событий может отправлять сообщения с полем события, что будет вызывать именованные события, использовать которые можно по значению этого поля.

## Примеры

В этом общем примере объект `EventSource` создаётся для получения неименованных событий, получаемых от сервера.
Страница с именем `sse.php` отвечает за генерацию событий.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `Сообщение: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Каждое полученное событие запускает обработчик `onmessage` объекта `EventSource`, который, создаёт новый элемент {{HTMLElement("li")}}, записывает в него текст сообщения и добавляет его в элемент списка, который был создан заранее.

> [!NOTE]
> Полный код этого примера можно найти на GitHub, смотрите [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Для обработки именованных событий необходимо установить обработчик для каждого типа события.

```js
const sse = new EventSource("/api/v1/sse");

/*
 * Такой обработчик будет вызываться при поступлении событий такого вида:
 *
 * event: notice
 * data: useful data
 * id: some-id
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * Аналогично, такой код будет обрабатывать события с полем `event: update`
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * Событие "message" является особым случаем.
 * Этот обработчик будет вызываться для неименованных событий и для событий с типом `event: message`.
 * Он не будет обрабатывать события с другим типом.
 */
sse.addEventListener("message", (e) => {
  console.log(e.data);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Отправляемые сервером события](/ru/docs/Web/API/Server-sent_events)
- [Использование отправляемых сервером событий](/ru/docs/Web/API/Server-sent_events/Using_server-sent_events)

---
title: Server-sent events
slug: Web/API/Server-sent_events
l10n:
  sourceCommit: ca3d9b9512aa8b38039a6a51a5cf7b3e4d70393a
---

{{DefaultAPISidebar("Server Sent Events")}}{{AvailableInWorkers}}

Традиционно веб-страница должна отправить запрос на сервер для получения новых данных, то есть страница запрашивает данные с сервера.
Благодаря технологии отправляемых сервером событий (англ. _Server-sent events_) сервер может отправлять новые данные на веб-страницу в любое время с помощью сообщений.
Внутри веб-страницы такие входящие сообщения можно рассматривать как связку «_[Событие](/ru/docs/Web/API/Event) + данные_».

> [!NOTE]
> В настоящее время Firefox не поддерживает использование отправляемых сервером событий в сервис-воркерах (но поддерживает их в выделенных и общих воркерах). Смотрите [Firefox bug 1681218](https://bugzil.la/1681218).

## Концепция и применение

Для обучения обратитесь к нашей статье [Использование отправляемых сервером событий](/ru/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Интерфейсы

- {{domxref("EventSource")}}
  - : Определяет все функции, которые обрабатывают подключение к серверу, получение событий/данных, ошибок, закрытие соединения и т.д.

## Примеры

- [Простое демо на языке PHP](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Спецификации

{{Specifications}}

## Смотрите также

### Инструменты

- [Mercure: a real-time communication protocol (publish-subscribe) built on top of SSE](https://mercure.rocks/)
- [Transmit: a native opinionated Server-Sent-Event (SSE) module built for AdonisJS](https://docs.adonisjs.com/guides/digging-deeper/transmit)
- [Полифил EventSource для Node.js](https://github.com/EventSource/eventsource)
- [Полифил EventSource](https://github.com/remy/polyfills/blob/master/EventSource.js) от Remy Sharp
- [Полифил EventSource](https://github.com/Yaffle/EventSource) от Yaffle
- [Плагин для jQuery](https://github.com/rwaldron/jquery.eventsource) от Rick Waldron
- intercooler.js [поддержка декларативных SSE](https://intercoolerjs.org/docs.html#sse)

### Связанные темы

- [Получение данных с сервера](/ru/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JavaScript](/ru/docs/Web/JavaScript)
- [WebSockets](/ru/docs/Web/API/WebSockets_API)

### Другие ресурсы

- [Создание социального приложения](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) на основе server-sent events и [его исходный код на GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).

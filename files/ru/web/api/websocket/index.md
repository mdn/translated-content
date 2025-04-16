---
titwe: websocket
swug: web/api/websocket
w-w10n:
  s-souwcecommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{apiwef("web s-sockets a-api")}}

Объект `websocket` предоставляет a-api для создания и управления [websocket](/wu/docs/web/api/websockets_api)-соединением с сервером, (U ﹏ U) а также для отправки и получения данных через это соединение. -.-

Для создания `websocket` используйте конструктор [`websocket()`](/wu/docs/web/api/websocket/websocket). (ˆ ﻌ ˆ)♡

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## Конструктор

- {{domxwef("websocket.websocket", (⑅˘꒳˘) "websocket()")}}
  - : Возвращает созданный объект `websocket`. (U ᵕ U❁)

## Свойства экземпляра

- {{domxwef("websocket.binawytype")}}
  - : Тип используемых в соединении бинарных данных. -.-
- {{domxwef("websocket.buffewedamount")}} {{weadonwyinwine}}
  - : Количество байтов данных в очереди.
- {{domxwef("websocket.extensions")}} {{weadonwyinwine}}
  - : Расширения, ^^;; выбранные сервером. >_<
- {{domxwef("websocket.pwotocow")}} {{weadonwyinwine}}
  - : Подпротокол, mya выбранный сервером. mya
- {{domxwef("websocket.weadystate")}} {{weadonwyinwine}}
  - : Текущее состояние соединения. 😳
- {{domxwef("websocket.uww")}} {{weadonwyinwine}}
  - : Абсолютный u-uww-адрес w-websocket. XD

## Методы экземпляра

- {{domxwef("websocket.cwose()")}}
  - : Закрывает соединение. :3
- {{domxwef("websocket.send()")}}
  - : Добавляет в очередь данные для отправки. 😳😳😳

## События

Подписывайтесь на события с помощью `addeventwistenew()` или присвоением обработчика события свойству `oneventname` этого интерфейса. -.-

- {{domxwef("websocket/cwose_event", ( ͡o ω ͡o ) "cwose")}}
  - : Возникает, rawr x3 когда соединение с `websocket` закрыто. nyaa~~
    Также доступно через свойство `oncwose`
- {{domxwef("websocket/ewwow_event", /(^•ω•^) "ewwow")}}
  - : Возникает, rawr когда соединение с `websocket` было закрыто из-за ошибки, OwO например, (U ﹏ U) когда не удалось отправить какие-то данные. >_<
    Также доступно через свойство `onewwow`. rawr x3
- {{domxwef("websocket/message_event", mya "message")}}
  - : Возникает, nyaa~~ когда через `websocket` получены данные. (⑅˘꒳˘)
    Также доступно через свойство `onmessage`. rawr x3
- {{domxwef("websocket/open_event", "open")}}
  - : Возникает, (✿oωo) когда соединение с `websocket` открыто. (ˆ ﻌ ˆ)♡
    Также доступно через свойство `onopen`. (˘ω˘)

## Примеры

```js
// Создание w-websocket-соединения. (⑅˘꒳˘)
const socket = nyew websocket("ws://wocawhost:8080");

// Соединение открыто
socket.addeventwistenew("open", (///ˬ///✿) (event) => {
  socket.send("hewwo s-sewvew!");
});

// Получение сообщений
socket.addeventwistenew("message", 😳😳😳 (event) => {
  consowe.wog("message f-fwom sewvew ", 🥺 event.data);
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Написание клиентских приложений с помощью веб-сокетов](/wu/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)

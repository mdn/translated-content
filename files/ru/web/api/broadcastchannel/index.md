---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
---

{{APIRef("Broadcast Channel API")}}

Интерфейс **`BroadcastChannel`** представляет собой именованный канал, на который можно подписаться из любого {{glossary("browsing context","контекста просмотра")}} данного {{glossary("origin","источника")}}. Это позволяет настроить коммуникацию между разными документами (в разных окнах, вкладках, фреймах и т.д.) одного источника. Сообщения распространяются с помощью события {{event("message")}}, выстреливающего для всех объектов `BroadcastChannel`, слушающих этот канал.

{{AvailableInWorkers}}

## Конструктор

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : Создаёт объект, связанный с именованным каналом.

## Свойства

_Этот интерфейс также наследует свойства от своего родителя, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.name")}}
  - : Возвращает {{domxref("DOMString")}}, имя канала.

### Обработчики событий

- {{domxref("BroadcastChannel.onmessage")}}

  - : {{event("Event_handlers", "event handler")}} свойство, определяющее функцию, которая будет запущена, когда произойдёт вызов события {{event("message")}} на этом объекте.

- {{domxref("BroadcastChannel.onmessageerror")}}
  - : {{event("Event_handlers", "event handler")}}, который вызывается, когда приходит {{domxref("MessageEvent")}} типа {{domxref("MessageError")}} — когда приходит сообщение, которое не может быть десереализовано.

## Методы

_Этот интерфейс также наследует свойства от своего родителя,{{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.postMessage()")}}
  - : Отправляет сообщение любого типа объекта всем объектам `BroadcastChannel`, прослушивающим данный канал.
- {{domxref("BroadcastChannel.close()")}}
  - : Закрывает объект канала, указывая, что тот больше не будет получать новые сообщения, и позволяет сборщику мусора уничтожить его.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Another, more heavyweight, way of communicating between browser contexts: {{domxref("ServiceWorker")}}.
- [Broadcast Channel API overview](/ru/docs/Web/API/Broadcast_Channel_API)

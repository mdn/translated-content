---
title: RTCPeerConnection.connectionState
slug: Web/API/RTCPeerConnection/connectionState
---

{{APIRef("WebRTC")}}

Только для чтения свойство **`connectionState`** интерфейса {{domxref("RTCPeerConnection")}} указывает на текущее состояние соединения, возвращая одно из строковых значений, определяемых в перечислении [`RTCPeerConnectionState`](#rtcpeerconnectionstate_enum).

Когда значение свойство изменяется, возникает событие [`connectionstatechange`](/ru/docs/Web/Events/connectionstatechange) на объекте интерфейса {{domxref("RTCPeerConnection")}} .

## Синтаксис

```
var connectionState = RTCPeerConnection.connectionState;
```

### Значение

Текущий статус соединения представлен одним из значений перечисления [`RTCPeerConnectionState`](#rtcpeerconnectionstate_enum).

## Пример

```js
var pc = new RTCPeerConnection(configuration);

/* ... */

var connectionState = pc.connectionState;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Жизненный цикл сессии WebRTC](/ru/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
- [`connectionstatechange`](/ru/docs/Web/Events/connectionstatechange)
- [WebRTC](/ru/docs/Web/API/WebRTC_API)

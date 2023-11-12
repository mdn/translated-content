---
title: RTCPeerConnection.canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
---

{{APIRef("WebRTC")}}Свойство только для чтения **`canTrickleIceCandidates`** , объекта **{{domxref("RTCPeerConnection")}}**, возвращает значение типа {{jsxref("Boolean")}} , которое указывает на то, может ли удалённый пир принимать кандидаты, согласно спецификации [trickled ICE candidates](https://tools.ietf.org/html/draft-ietf-mmusic-trickle-ice).

**ICE trickling (ICE просачивание)** - процесс продолжающейся отправки кандидатов, после первоначальной передачи предложения или ответа удалённому пиру..

Свойство инициализируется только после вызова метода {{domxref("RTCPeerConnection.setRemoteDescription()")}}. Было бы идеально, если бы ваш протокол сигнализации предоставлял способ определения поддержки просачивания кандидатов, для того, что бы не полагаться на это свойство. Браузер, поддерживающий WebRTC, всегда будет поддерживать ICE просачивание.

Если оно не поддерживается, или о поддержке неизвестно, то проверив ложное значение этого свойства, необходимо подождать, пока значение свойства {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} измениться на `"completed"` до создания и передачи первоначального предложения. Таким образом, отправка предложения сдерживается до сборки всех кандидатов.

## Синтаксис

```
 var canTrickle = RTCPeerConnection.canTrickleIceCandidates;
```

### Значение

Тип {{jsxref("Boolean")}} содержит `true` , если удалённый пир может принимать просвечивающие ICE кандидаты, и `false` , если не может. Если удалённый пир ещё не инициализирован, свойство возвращает `null`.

> **Примечание:** Значение свойства инициализируется после того, как локальный пир вызовет метод {{domxref("RTCPeerConnection.setRemoteDescription()")}}; Возвращаемый объект описания используется агентом ICE для определения возможности удалённого пира поддерживать просачивающихся ICE кандидатов.

## Пример

```js
var pc = new RTCPeerConnection();
// Следующий код может быть использован для обработки предложения от пира, когда
// он не знает поддерживает ли он просачивание
pc.setRemoteDescription(remoteOffer)
  .then(_ => pc.createAnswer())
  .then(answer => pc.setLocalDescription(answer))
  .then(_ =>
    if (pc.canTrickleIceCandidates) {
      return pc.localDescription;
    }
    return new Promise(r => {
      pc.addEventListener('icegatheringstatechange', e => {
        if (e.target.iceGatheringState === 'complete') {
          r(pc.localDescription);
        }
      });
    });
  })
  .then(answer => sendAnswerToPeer(answer)) // сигнальное сообщение
  .catch(e => handleError(e));

pc.addEventListener('icecandidate', e => {
  if (pc.canTrickleIceCandidates) {
    sendCandidateToPeer(e.candidate); // сигнальное сообщение
  }
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebRTC](/ru/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCPeerConnection.addIceCandidate()")}}
- [Жизненный цикл сессии WebRTC](/ru/docs/Web/API/WebRTC_API/Session_lifetime)

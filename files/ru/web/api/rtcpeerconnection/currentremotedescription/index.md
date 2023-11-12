---
title: RTCPeerConnection.currentRemoteDescription
slug: Web/API/RTCPeerConnection/currentRemoteDescription
---

{{DefaultAPISidebar("WebRTC")}}

Только для чтения свойство **`RTCPeerConnection.currentRemoteDescription`** возвращает объект {{domxref("RTCSessionDescription")}} , представляющий удалённую сторону соединения, как последний, успешно согласованный объект данных, с момента завершения согласования и установки соединения объектом {{domxref("RTCPeerConnection")}} с удалённым пиром.

Для изменения значения свойства `currentRemoteDescription`, вызовите метод {{domxref("RTCPeerConnection.setRemoteDescription()")}}, который запускает серию событий, приводящих к установке нового значения. Подробнее о том, что точно происходит и почему изменение значения не происходит немедленно, смотрите [Ожидающие и текущие объекты описания](/ru/docs/Web/API/WebRTC_API/Connectivity#рассматриваемые_и_текущие_описания).

> **Примечание:** В отличии от {{domxref("RTCPeerConnection.remoteDescription")}}, это значение действительный текущий статус соединения; `remoteDescription` может указывать на объект описания, на который соединение находиться в процессе перехода..

## Синтаксис

```
sessionDescription = RTCPeerConnection.currentRemoteDescription;
```

### Возвращаемое значение

Текущий объект описания, представляющий удалённую сторону соединения, если она присутствует. Если ни один объект описания не установлен, значением будет `null`.

## Пример

Пример рассматривает свойство `currentRemoteDescription` и отображает предупреждение, содержащее значения свойств `type` и `sdp` ,объекта {{domxref("RTCSessionDescription")}}.

```js
var pc = new RTCPeerConnection();
…
var sd = pc.currentRemoteDescription;
if (sd) {
  alert("Local session: type='" +
        sd.type + "'; sdp description='" +
        sd.sdp + "'");
}
else {
  alert("No local session yet.");
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.remoteDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/ru/docs/Web/Guide/API/WebRTC)

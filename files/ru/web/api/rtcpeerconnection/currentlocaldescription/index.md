---
title: RTCPeerConnection.currentLocalDescription
slug: Web/API/RTCPeerConnection/currentLocalDescription
---

{{DefaultAPISidebar("WebRTC")}}

Только для чтения свойство **`RTCPeerConnection.currentLocalDescription`** возвращает объект {{domxref("RTCSessionDescription")}} , описывающий локальную сторону соединения, как самый последний, удачно согласованный объект описания, с момента последнего завершения согласования {{domxref("RTCPeerConnection")}} и соединения с удалённым пиром (участником соединения) .

Для изменения `currentLocalDescription`, вызовите метод {{domxref("RTCPeerConnection.setLocalDescription()")}}, который запускает серию событий, приводящих к присвоению значения. Более подробно о том, что точно происходит и почему изменения происходят не сразу, смотрите [Ожидающие и текущие объекты описания](/ru/docs/Web/API/WebRTC_API/Connectivity#рассматриваемые_и_текущие_описания).

> **Примечание:** В отличие от {{domxref("RTCPeerConnection.localDescription")}}, это значение представляет актуальный, текущий статус локальной стороны соединения; `localDescription` может устанавливать описание, на которое соединение находится в процессе перехода.

## Синтаксис

```
sessionDescription = RTCPeerConnection.currentLocalDescription;
```

### Возвращаемое значение

Текущий объект описания локальной стороны соединения. Если установка значения не удалась, значением станет `null`.

## Пример

В этом примере рассматривается свойство `currentLocalDescription` и отображается предупреждение, содержащее свойства объекта {{domxref("RTCSessionDescription")}} `type` и `sdp` .

```js
var pc = new RTCPeerConnection();
…
var sd = pc.currentLocalDescription;
if (sd) {
  alert("Локальная сессия: type='" +
        sd.type + "'; sdp description='" +
        sd.sdp + "'");
}
else {
  alert("Локальной сессии ещё нет.");
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

> **Примечание:** The addition of `currentLocalDescription` and {{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}} to the WebRTC spec is relatively recent. In browsers which don't support them, just use {{domxref("RTCPeerConnection.localDescription", "localDescription")}}.

## See also

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.pendingLocalDescription")}}, {{domxref("RTCPeerConnection.localDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/ru/docs/Web/Guide/API/WebRTC)

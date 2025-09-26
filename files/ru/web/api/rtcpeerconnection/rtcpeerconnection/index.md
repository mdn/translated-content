---
title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
---

{{APIRef("WebRTC")}}

Конструктор **`RTCPeerConnection()`** возвращает новый экземпляр объекта {{domxref("RTCPeerConnection")}}, который представляет соединение между локальным устройством и удалённым пиром (участником соединения)

## Синтаксис

```
pc = new RTCPeerConnection([configuration]);
```

### Параметры

- `configuration` {{optional_inline}}
  - : Объект класса [`RTCConfiguration`](#rtcconfiguration_dictionary), предоставляющий свойства для конфигурации нового экземпляра соединения.

### Возвращаемое значение

Экземпляр класса {{domxref("RTCPeerConnection")}} , сконфигурированный по свойствам параметра `configuration`, если используется, иначе сконфигурированный по умолчанию.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Сигнализированные и видеовызов](/ru/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Обзор архитектуры WebRTC](/ru/docs/Web/API/WebRTC_API/Protocols)
- [Жизненный цикл сессии WebRTC](/ru/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}

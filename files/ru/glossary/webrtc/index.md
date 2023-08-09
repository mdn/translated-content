---
title: WebRTC
slug: Glossary/WebRTC
---

**WebRTC** (_Web Real-Time Communication_) — это {{Glossary("API")}}, который может использоваться в видео- и аудио-чатах, а также для обмена файлов через одноранговую сеть (P2P).

WebRTC в основном состоит из следующих частей:

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : Получает доступ к камере и/или микрофону пользователя для передачи данных в RTC-подключение.
- {{domxref("RTCPeerConnection")}}
  - : Интерфейс для настройки видеочата или голосовых вызовов.
- {{domxref("RTCDataChannel")}}
  - : Метод, позволяющий установить одноранговый ({{Glossary("P2P", "peer-to-peer")}}) канал связи между браузерами.

## Узнать больше

- [WebRTC API на MDN](/ru/docs/Web/API/WebRTC_API)
- [Поддержка WebRTC браузерами](https://caniuse.com/rtcpeerconnection)

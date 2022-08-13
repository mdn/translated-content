---
title: WebRTC
slug: Glossary/WebRTC
translation_of: Glossary/WebRTC
---
**WebRTC** (_Web Real-Time Communication (übersetzt: Web Echtzeit Kommunikation)_) ist eine {{Glossary("API")}}, die zum Erstellen von Video-Chat-, Audiogespräch- und P2P-Dateiaustausch
Web-Anwendungen benutzt wird.

WebRTC besteht hauptsächtlich aus folgenden Teilen:

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : Gewährt Zugang zu einer Kamera und/oder Mikrofon des Geräts, dessen Signale an eine RTC-Verbindung übergeben werden können.
- {{domxref("RTCPeerConnection")}}
  - : Eine Schnittstelle zum Konfigurieren von Video- oder Audio-Gespächen.
- {{domxref("RTCDataChannel")}}
  - : Stellt eine Methode zum Erstellen von {{Glossary("P2P")}} Daten Kanälen zwischen Browsern bereit.

## Learn more

- {{Interwiki("wikipedia", "WebRTC")}} on Wikipedia
- [WebRTC API on MDN](/de/docs/Web/API/WebRTC_API)
- [Browser support for WebRTC](http://caniuse.com/rtcpeerconnection)

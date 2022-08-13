---
title: WebSockets
slug: Web/API/WebSockets_API
tags:
  - Referenz
  - WebSockets
translation_of: Web/API/WebSockets_API
original_slug: WebSockets
---
WebSockets ist eine fortschrittliche Technologie welche es möglich macht eine interaktive Kommunikations-Session zwischen dem Browser des Benutzers und dem Server herzustellen. Mit dieser API können Sie Nachrichten zum Server senden und ereignisorientierte Antworten erhalten ohne beim Server die Antwort abzufragen.

## Dokumentation

- [Websocket Client-Anwendungen schreiben](/de/docs/WebSockets/Writing_WebSocket_client_applications "WebSockets/Writing WebSocket client applications")
  - : Eine Anleitung um WebSocket-Clients im Browser laufen zu lassen.
- [WebSockets Referenz](/de/docs/WebSockets/WebSockets_reference "WebSockets/WebSockets reference")
  - : Eine Referenz für die Client-seitige WebSocket API.
- [Websocket-Server schreiben (Benötigt Inhalt)](/de/docs/WebSockets/Writing_WebSocket_servers)
  - : Eine Anleitung zum schreiben von Server-seitigem Code um das WebSocket-Protokoll zu handhaben.

## Tools

- [Socket.IO](http://socket.io "http://socket.io/"): Eine mächtige, plattform-übergreifende WebSocket API für [Node.js](http://nodejs.org).
- [WebSocket-Node](https://github.com/Worlize/WebSocket-Node): Eine WebSocket-Server API Implementation für [Node.js](http://nodejs.org "http://nodejs.org/").
- [Total.js](http://www.totaljs.com): Ein Web-Applikation Framework für [Node.js](http://www.nodejs.org) (Beispiel: [WebSocket chat](https://github.com/totaljs/examples/tree/master/websocket))
- [Eine erweiterte Liste von Frameworks und Bibliotheken](http://ajf.me/websocket/#libs)

## Verwandte Themen

- [AJAX](/de/docs/AJAX "AJAX"), [JavaScript](/de/docs/JavaScript "JavaScript")

## Siehe auch

- [RFC 6455 - The WebSocket Protocol](http://tools.ietf.org/html/rfc6455)
- [WebSocket API Specification](http://www.w3.org/TR/websockets/)
- [Server-Sent Events](/de/docs/Server-sent_events "Server-sent_events")

## Browser-Kompatibilität

{{Compat}}

### Hinweise zu Gecko

Die WebSocket-Unterstützung in Firefox wird weiterhin die Entwicklungen in der entstehenden WebSocket-Spezifikation verfolgen. Firefox 6 implementiert Version 7 des darunterliegenden Protokolls, währen Firefox 7 Version 8 implementiert (lt. IETF-Vorlage 10). Firefox mobile erhielt in Version 7.0 unterstützung für WebSockets.

#### Gecko 6.0

Vor Gecko 6.0 {{geckoRelease("6.0")}} gab es, fälschlicherweise, ein `WebSocket`-Objekt. Mane Seiten schlossen daraus, dass `WebSocket`-Dienste keine Präfixe haben; dieses Objekt wurde mittlerweile zu `MozWebSocket` umbenannt.

#### Gecko 7.0

Beginnend mit Gecko 7.0 {{geckoRelease("7.0")}} wird die Einstellung `network.websocket.max-connections` genutzt, um die maximale Anzahl von WebSockets festzustellen, die gleichzeitig genutzt werden können. Der Standardwert ist 200.

#### Gecko 8.0

Beginnend mit Gecko 8.0 {{geckoRelease("8.0")}} wird die Deflate-Stream-Erweiterung des WebSocket-Protokolls abgeschaltet, da es von den Spezifikations-Vorlagen überholt wurde. Dies löst Inkompatibilitäten mit manchen Seiten.

#### Gecko 11.0

Vor Gecko 11.0 waren sowohl eingehende als auch ausgehende Nachrichten auf 16 MB begrenzt. Sie können jetzt bis zu 2 GB groß sein. Beachten Sie, dass Speicherbegrenzungen (insbesondere auf mobilen Geräten) ein theoretisches Maximum darstellen, jedoch kein praktisches. In Wirklichkeit werden Übertragungen dieser Größe auf Geräten, die nicht über genügend Speicher verfügen, fehlschlagen.

Zusätzlich wurde eine ArrayBuffer Sende- und Empfangsunterstützung für Binärdaten implementiert.

Ab Gecko 11.0 steht die WebSocket-API ohne Präfixe zur Verfügung.

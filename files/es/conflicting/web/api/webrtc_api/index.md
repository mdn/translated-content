---
title: Comunicaciones peer-to-peer (P2P) con WebRTC
slug: conflicting/Web/API/WebRTC_API
original_slug: Web/Guide/API/WebRTC/Peer-to-peer_communications_with_WebRTC
---

{{SeeCompatTable}}

Las **WebRTC APIs** están diseñadas para permitir a las aplicaciones JS la creación de conexiones de tiempo real con canales de Audio, Video, y/o Datos (Data), directamente entre usuarios y a través de sus browsers, o hacia servers que soporten los protocolos WebRTC. También potencia navigator.mozGetUserMedia() para acceder a los datos de cámara y micrófono (getUserMedia() está siendo estandarizado por la Media Capture Task Force, así como las Recording APIs).

Las fuentes primarias de las especificaciones para WebRTC (en constante **evolución**), son las especificaciones [WebRTC](https://dev.w3.org/2011/webrtc/editor/webrtc.html) y [getUserMedia](https://dev.w3.org/2011/webrtc/editor/getusermedia.html), y varios de los borradores del IETF, en mayor medida en el [rtcweb working group](https://tools.ietf.org/wg/rtcweb/), pero también [mmusic](https://tools.ietf.org/wg/mmusic/), [rmcat](https://tools.ietf.org/wg/rmcat/) y algunos otros.

Gran parte de la implementación en Chrome y Firefox está basada en código que fue abierto por Google en [webrtc.org](http://www.webrtc.org/reference).

> [!NOTE]
> Las versiones actuales de FlashBlock pueden bloquear elementos HTML5 \<video>. Si es así, dile que permita el contenido en la página, o deshabilita esa opción vía Herramientas/Add-ons.

Hay un buen tutorial en las características básicas de WebRTC en [HTML5 Rocks](https://www.html5rocks.com/en/tutorials/webrtc/basics/). Una colección de páginas de pruebas básicas para soportar el desarrollo existe en [webrtc-landing](http://mozilla.github.com/webrtc-landing).

Puedes hacer simples llamadas persona-a-persona (inclusive si usan Chrome) en [apprtc.appspot.com](https://apprtc.appspot.com/).

Una descripción de alto nivel de lo que sucede en una conexión RTCPeerConnection se publicó en un artículo de [Mozilla Hacks](https://hacks.mozilla.org/2013/05/embedding-webrtc-video-chat-right-into-your-website/) (puedes ver todos los artículos sobre WebRTC [aquí](https://hacks.mozilla.org/category/webrtc/)).

![Basics of RTCPeerConnection call setup](https://hacks.mozilla.org/wp-content/uploads/2013/05/webRTC-BasicsOfHowItWorks2.png)

## Especificaciones

| Especificación   | Estado        | Comentarios                                              |
| ---------------- | ------------- | -------------------------------------------------------- |
| WebRTC API       | En definición |                                                          |
| getUserMedia API | En definición | <http://dev.w3.org/2011/webrtc/editor/getusermedia.html> |

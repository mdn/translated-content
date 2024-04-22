---
title: WebRTC Introduction
slug: Web/API/WebRTC_API/Session_lifetime
---

> **Nota:** WebRTC te permite establecer una comunicación par-a-par en una aplicación del navegador.

## Estableciendo la conexión

La conexión inicial entre pares debe ser establecida a través de un servidor de aplicaciones que proporcione descubrimiento de usuarios, comunicación y traducción de direcciones de red (NAT) con transmisión de datos.

### Señalización

Señalización es el mecanismo por el cual los pares se envían mensajes de control entre sí con el propósito de establecer el protocolo, canal, y método de comunicación. Estos no están especifiados en el standar WebRTC. En su lugar, el desarrollador puede elegir cualquier protocolo de mensajería (como SIP o XMPP), y cualquier canal de comunicación bidirecional (como WebSocket o XMLHttpRequest) en conjunción con un servidor con un API de conexión permanente (como el [Google Channel API](https://developers.google.com/appengine/docs/python/channel/overview)) para AppEngine.

## Transmisión

### getUserMedia

LocalMediaStream object

## Recepción

El soporte para WebRTC en Firefox está escondido detrás de un selector de preferencias. Ve a [about:config](/about:config) y establce 'media.navigator.enabled' a 'true'.

> **Nota:** Hay algunos archivos de prueba en el repositorio de código para darte una idea de cómo funciona. Ve: [dom/media/tests/local_video_test.html](http://hg.mozilla.org/projects/alder/file/tip/dom/media/tests/local_video_test.html). Por favor, prueba también la[demo de servicio de llamadas](http://webrtc-demo.herokuapp.com/mozdemo), la página de su código, y [el código de su servidor](https://github.com/anantn/webrtc-demo/).

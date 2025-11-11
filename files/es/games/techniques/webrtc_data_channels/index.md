---
title: WebRTC data channels
slug: Games/Techniques/WebRTC_data_channels
---

{{SeeCompatTable}}

La API [WebRTC](/es/docs/Web/API/WebRTC_API) (Web Real-Time Communications - Comunicaciones WEB en tiempo real) es principalmente conocida por dar soporte en las comunicaciones de audio y video; sin embargo también ofrece canales de datos punto a punto. Este artículo explica más sobre esto y te muestra como usar librerias para implementar canales de datos en tu juego.

## ¿Qué es un canal de datos?

Un canal de datos WebRTC te permite enviar texto o datos binarios a través de una conexión activa a un punto. En el contexto de un juego, esto permite a los jugadores enviarse datos entre ellos, ya sea por chat de texto o por información de estado del juego. Los canales de datos vienen en dos sentidos.

Los **canales fiables** garantizan que los mensajes que envíes lleguen al otro interlocutor y en el mismo orden en que se enviaron. Esto es análogo a un socket TCP.

Los **canales no confiables** no ofrecen tales garantías; no se garantiza que los mensajes lleguen en un orden particular y, de hecho, no se garantiza que lleguen. Esto es análogo a un socket UDP.

Tenemos [documentación sobre WebRTC](/es/docs/Web/API/WebRTC_API). Este artículo, sin embargo, aprovechará algunas bibliotecas que pueden ayudar a trivializar el trabajo, y demostrará formas de usar la abstracción para evitar las diferencias de implementación entre los navegadores. Con suerte, por supuesto, esas diferencias se desvanecerán en el tiempo.

## Usando la libreria p2p

Una biblioteca que puede usar es la biblioteca [p2p](https://github.com/js-platform/p2p). Esta biblioteca proporciona una API simple para crear conexiones entre puntos y configurar transmisiones y canales de datos. También hay un componente de servidor intermediario y un agente hospedado que puedes usar en lugar de tener que configurar uno.

> [!NOTE]
> Continuaremos agregando contenido aquí pronto; hay algunos problemas de organización por resolver.

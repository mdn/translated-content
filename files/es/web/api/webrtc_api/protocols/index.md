---
title: WebRTC protocols
slug: Web/API/WebRTC_API/Protocols
---

{{DefaultAPISidebar("WebRTC")}}

Este artículo presenta los protocolos sobre los cuales se construye la API WebRTC.

## ICE

[Interactive Connectivity Establishment (ICE)](http://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) es un marco para permitir que su navegador web se conecte con sus compañeros. Hay muchas razones por las que una conexión directa de un par a otro simplemente no funcionará. Debe evitar los firewalls que evitarían abrir conexiones, darle una dirección única si, como en la mayoría de las situaciones, su dispositivo no tiene una dirección IP pública y transmitir datos a través de un servidor si su enrutador no le permite conectarse directamente con sus pares. ICE utiliza algunas de las siguientes técnicas que se describen a continuación para lograr esto:

## STUN

[Session Traversal Utilities for **NAT** (STU**N**)](http://en.wikipedia.org/wiki/STUN) (acrónimo dentro de un acrónimo) es un protocolo para descubrir su dirección pública y determinar cualquier restricción en su enrutador que impida una conexión directa con un par.

El cliente enviará una solicitud a un servidor STUN en Internet que responderá con la dirección pública del cliente y si el cliente está accesible detrás del NAT del enrutador.

![An interaction between two users of a WebRTC application involving a STUN server.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](http://en.wikipedia.org/wiki/NAT) se usa para dar a su dispositivo una dirección IP pública. Un enrutador tendrá una dirección IP pública y cada dispositivo conectado al enrutador tendrá una dirección IP privada. Las solicitudes se traducirán de la IP privada del dispositivo a la IP pública del enrutador con un puerto único. De esa manera, no necesita una IP pública única para cada dispositivo, pero aún puede descubrirse en Internet.

Algunos enrutadores tendrán restricciones sobre quién puede conectarse a dispositivos en la red. Esto puede significar que aunque tengamos la dirección IP pública encontrada por el servidor STUN, nadie puede crear una conexión. En esta situación, debemos recurrir a TURN.

## TURN

Algunos enrutadores que utilizan NAT emplean una restricción llamada "NAT simétrica". Esto significa que el enrutador solo aceptará conexiones de pares a los que se haya conectado previamente.

[Traversal Using Relays around NAT (TURN)](http://en.wikipedia.org/wiki/TURN) está destinado a eludir la restricción NAT simétrica al abrir una conexión con un servidor TURN y transmitir toda la información a través de ese servidor. Crearía una conexión con un servidor TURN y le diría a todos los pares que envíen paquetes al servidor que luego se le reenviarán. Obviamente, esto conlleva algunos gastos generales, por lo que solo se usa si no hay otras alternativas.

![An interaction between two users of a WebRTC application involving STUN and TURN servers.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](http://en.wikipedia.org/wiki/Session_Description_Protocol) es un estándar para describir el contenido multimedia de la conexión, como la resolución, los formatos, los códecs, el cifrado, etc., de modo que ambos pares puedan entenderse una vez que se transfieren los datos. Esto es, en esencia, los metadatos que describen el contenido y no el contenido de los medios en sí.

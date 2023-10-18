---
title: "502"
slug: conflicting/Web/HTTP/Status/502
original_slug: Glossary/502
---

Un código código de error {{Glossary("HTTP")}} que significa "Bad Gateway" (Pasarela incorrecta).

Un {{Glossary("Server", "server")}} puede actuar como gateway (pasarela) o proxy entre un cliente (como tu navegador) y otros servidores. Cuando realizas una petición para acceder a una {{Glossary("URL")}}, el gateway (la pasarela) retransmite tu petición al otro servidor."502" significa que ese otro servidor, al que accedemos mediante el gateway o proxy, ha devuelto una respuesta inválida.

Normalmente el servidor no está caído (por ejemplo no proporciona respuesta al servidor gateway/proxy), simplemente no comprende el mismo protocolo de intercambio de datos que el servidor gateway/proxy. Los {{Glossary("Protocol", "protocols")}} son bastante explícitos, y 502 usualmente significa que uno de las dos, o las dos máquinas fueron incorrectamente programadas.

## Aprender más

- [list of HTTP response codes](/es/docs/Web/HTTP/Response_codes)

---
title: Protocolos desafío-respuesta
slug: Glossary/Challenge
---

En protocolos de seguridad, un _desafío_ es una información enviada al cliente por el servidor con el fin de generar una respuesta diferente cada vez . Los protocolos desafío-respuesta son una forma de batallar contra los [ataques de REPLAY](https://es.wikipedia.org/wiki/Ataque_de_REPLAY) donde un atacante escucha los mensajes previos y los reenvía en un momento posterior para obtener las mismas credenciales que el mensaje original.

El [protocolo de autenticación HTTP](/es/docs/Web/HTTP/Authentication) está basado en los protocolos desafío-respuesta, aunque la autenticación "Basic" no usa un desafío real (el _realm_ siempre es el mismo).

## Leer más

- [Protocolos desafío-respuesta](https://es.wikipedia.org/wiki/Protocolos_desaf%C3%ADo-respuesta) en Wikipedia.

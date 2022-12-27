---
title: TRACE
slug: Web/HTTP/Methods/TRACE
translation_of: Web/HTTP/Methods/TRACE
---
{{HTTPSidebar}}

El **método HTTP `TRACE`** efectúa una prueba de bucle de mensaje por el camino al recurso objetivo proporcionando un útil mecanismo de debugging.

El destino final de la petición debería devolver el mensaje recibido, excluyendo algunos de los campos descritos abajo, de vuelta al cliente como el mensaje body y una respuesta 200 (OK) con un {{httpheader("Content-Type")}} de `message/http`. El destinatario final es o el servidor de origen o el primer servidor en recibir un {{httpheader("Max-Forwards")}} de valor 0 en la petición.

| Request has body                     | No  |
| ------------------------------------ | --- |
| Successful response has body         | No  |
| {{Glossary("Safe")}}         | Yes |
| {{Glossary("Idempotent")}} | Yes |
| {{Glossary("Cacheable")}}     | No  |
| Allowed in HTML forms                | No  |

## Sintaxis

```
TRACE /index.html
```

## Especificaciones

| Specification                                | Title                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "TRACE", "4.3.8")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidad con Buscadores

{{Compat("http.methods.TRACE")}}

## Ver también

- [HTTP methods](/es/docs/Web/HTTP/Methods)

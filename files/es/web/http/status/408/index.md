---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
---

{{HTTPSidebar}}

El código de estado de la respuesta **`408 Request Timeout`** del Protocolo de Transferencia de Hipertexto (HTTP) significa que el servidor desea cerrar esta conexión no usada. Se envía a una conexión inactiva por algunos servidores, incluso sin solicitud previa por parte del cliente.

Un servidor debe enviar "close" en el campo de la cabecera {{HTTPHeader("Connection")}} en la respuesta, ya que `408` implica que el servidor ha decidido cerrar la conexión en lugar de continuar esperando.

Esta respuesta es usada mucho más desde que algunos navegadores, como Chrome, Firefox 27+, y IE9, usan el mecanizmo de pre-conexión HTTP para acelerar la naveación.

> **Nota:** Algunos servidores simplemente cierran la conexión sin enviar este mensaje.

## Estado

```
408 Request Timeout
```

## Especificaciones

| Especificación                                   | Título                                                                      |
| ------------------------------------------------ | --------------------------------------------------------------------------- |
| {{RFC("7231", "408 Request Timeout" , "6.5.7")}} | Protocolo de Transferencia de HiperTexto (HTTP/1.1): Semánticas y Contenido |

## Ver también

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}

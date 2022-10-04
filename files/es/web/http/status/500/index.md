---
title: 500 Error Interno del Servidor
slug: Web/HTTP/Status/500
tags:
  - Codigo de Estado
  - Error del servidor
  - HTTP
translation_of: Web/HTTP/Status/500
---
El código de respuesta **`500 Error Interno del Servidor`** del Protocolo de Transferencia de Hipertexto (HTTP) indica que el servidor encontró una condición inesperada que le impide completar la petición.

Este código es una respuesta genérica. Usualmente, esto indica que el servidor no puede encontrar un mejor código de respuesta del tipo 5xx. En ocasiones, los administradores del servidor registran respuestas como el código de estado 500 con más detalles sobre la petición en aras de evitar que el error vuelva a ocurrir en el futuro.

## Estado

```
500 Error Interno del Servidor
```

## Especificaciones

| Especificación                                                                   | Titulo                                                                     |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| {{RFC("7231", "500 Error Interno del Servidor" , "6.6.1")}} | Protocolo de Transferencia de Hipertexto (HTTP/1.1): Semántica y Contenido |

## Compatibilidad del navegador

La información que se muestra a continuación se ha extraído del MDN de GitHub. (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.500")}}

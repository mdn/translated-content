---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

El código de estado de respuesta **`405 Method Not Allowed`** (Método no permitido, en español) del protocolo de transferencia de hipertexto (HTTP) indica que el servidor conoce el método de solicitud, pero el recurso de destino no admite este método.

El servidor **debe** generar un campo de cabecera **`Allow`** en una respuesta con código de estado 405. El campo debe contener una lista de métodos que el recurso de destino admite actualmente.

## Estado

```http
405 Method Not Allowed
```

## Especificaciones

{{Specifications}}

## Véase también

- {{HTTPHeader("Allow")}}
- [Definiciones de código de estado HTTP](https://httpwg.org/specs/rfc9110.html#status.405)
- [Cómo arreglar `405 Method Not Allowed`](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Solución de problemas de HTTP 405](https://docs.microsoft.com/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)

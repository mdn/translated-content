---
title: 413 Content Too Large
slug: Web/HTTP/Status/413
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

El código de estado de respuesta HTTP **`413 Content Too Large`** indica que la entidad de solicitud es mayor que los límites definidos por el servidor; el servidor podría cerrar la conexión o devolver un campo de cabecera {{HTTPHeader("Retry-After")}}.

Antes del RFC 9110, la frase de respuesta para el estado era **`Payload Too Large`**. Ese nombre todavía se usa ampliamente.

## Estado

```http
413 Content Too Large
```

## Especificaciones

{{Specifications}}

## Véase también

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}

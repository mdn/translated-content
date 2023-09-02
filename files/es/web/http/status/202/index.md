---
title: 202 Aceptado
slug: Web/HTTP/Status/202
---

{{HTTPSidebar}}

El código de respueta de estado del Protocolo de Transferencia de Hipertexto (HTTP) **`202 Aceptado`** indica que la petición ha sido recibida pero que todavía no se ha actuado al respecto. Es libre, en el sentido de que no hay manera para el HTTP para enviar después una respuesta asíncrona indicando el resultado del procesamiento de la petición. Es pretendida para casos donde otro proceso o servidor maneje la petición, o para procesamiento por lotes.

## Estado

```
202 Aceptado
```

## Especificaciones

| Specification                             | Title                                                         |
| ----------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "202 Accepted" , "6.3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Ver también

- {{HTTPHeader("Accept")}}

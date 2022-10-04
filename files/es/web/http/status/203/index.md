---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
tags:
  - Códigos de respuesta
  - Códigos de respuestas HTTP
  - HTTP
  - Referências
  - Respuesta satisfactoria
translation_of: Web/HTTP/Status/203
---
{{HTTPSidebar}}

El código de respueta de estado del Protocolo de Transferencia de Hipertexto (HTTP) **`203 Non-Authoritative Information`** indica que la peticion fue satisfactoria pero su contenido ha sido modificado por un transformador {{Glossary("Proxy server", "proxy")}} desde los origenes del servidor {{HTTPStatus("200")}} (`OK`)

El código de respuesta `203` es similar al código [`214`](/en-US/docs/Web/HTTP/Headers/Warning#Warning_codes), quiere decir `Transformation Applied`, of the {{HTTPHeader("Warning")}} header code, que tiene la ventaja adicional de estar disponible para las respuestas con cualquier código.

## Status

```
203 Non-Authoritative Information
```

## Specifications

| Specification                                                                        | Title                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}

---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
---

{{HTTPSidebar}}El código de respuesta **`101 Switching Protocols`** que el servidor está cambiando de protocolo al solicitado por un cliente que mandó un mensaje incluyendo la cabecera {{HTTPHeader("Upgrade")}}.

El servidor incluye en esta respuesta una cabecera {{HTTPHeader("Upgrade")}} para indicar a qué protocolo ha cambiado. El proceso se describe en detalle en el artículo [Protocol upgrade mechanism](/es/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Estado

```
101 Switching Protocols
```

## Ejemplos

El cambio de protocolos se podría usar con [WebSockets](/es/docs/Web/API/WebSockets_API).

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Especificaciones

| Specification                                       | Title                                                         |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "101 Switching Protocol" , "6.2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Vea también

- [Protocol upgrade mechanism](/es/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/es/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`

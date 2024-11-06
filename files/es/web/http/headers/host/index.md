---
title: Host
slug: Web/HTTP/Headers/Host
---

{{HTTPSidebar}}

El encabezado de solicitud **`Host`** especifica el nombre de dominio del servidor (para hosting virtual), y (opcionalmente) el número de puerto TCP en el que el servidor esta escuchando.

Si no se provee un puerto, se usará el puerto por defecto para el servicio solicitado (e.j.: "80" para una URL HTTP).

El encabezado `Host` debe enviarse obligatoriamente en todas las solicitudes HTTP/1.1. Un código de error {{HTTPStatus("400")}} (Petición mala) debería enviarse a cualquier solicitud HTTP/1.1 que no contiene o contiene más de un encabezado `Host`.

| Header type                           | Encabezado de solicitud |
| ------------------------------------- | ----------------------- |
| {{Glossary("Forbidden header name")}} | sí                      |

## Sintaxis

```
Host: <host>:<puerto>
```

## Directivas

- \<host>
  - : el nombre de dominio del servidor (pata hosting virtual).
- \<puerto> {{optional_inline}}
  - : número de puerto TCP en el que el servidor está escuchando.

## Ejemplos

```
Host: developer.mozilla.org
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTTPStatus("400")}}
- {{HTMLElement("base")}}

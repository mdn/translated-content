---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
---

{{HTTPSidebar}}{{Non-standard_header}}

El encabezado **`Keep-Alive`** permite al remitente indicar como será la forma de conexión, se puede establecer un tiempo de espera y una cantidad máxima de solicitudes.

> **Nota:** El encabezado {{HTTPHeader("Connection")}} se tiene que establecer en "keep-alive" para que este encabezado tenga sentido. Además, {{HTTPHeader("Connection")}} y {{HTTPHeader("Keep-Alive")}} son ignorados en HTTP/2; la administración de la conexión se realiza mediante otros mecanismos.

| Header type                           | {{Glossary("General header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## Sintaxis

```
Keep-Alive: parámetros
```

## Directivas

- _parámetros_
  - : Lista de parámetros separados por coma, cada uno consiste en un identificador y un valor separado por el signo igual (`'='`). Es posible establecer los siguientes identificadores:
    - `timeout`: indica la cantidad de tiempo _mínima_ en la cual una conexión ociosa se debe mantener abierta (en segundos). Nótese que los _timeouts_ mas largos que el _timeout_ de TCP pueden ser ignorados si no se establece un mensaje de _TCP keep-alive_ en la capa de transporte.
    - `max`: indica el número máximo de peticiones que pueden ser enviadas en esta conexión antes de que sea cerrada. Si es `0`, este valor es ignorado para las conexiones no segmentadas, ya que se enviara otra solicitud en la próxima respuesta. Una canalización de HTTP puede ser usada para limitar la división.

## Ejemplos

Una respuesta que contiene el encabezado `Keep-Alive`:

```
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mirar tambien

- {{HTTPHeader("Connection")}}
- [Connection management in HTTP/1.x](/es/docs/Web/HTTP/Connection_management_in_HTTP_1.x)

---
title: 200 OK
slug: Web/HTTP/Reference/Status/200
original_slug: Web/HTTP/Status/200
---

El código de respuesta de estado satisfactorio HTTP **`200 OK`** indica que la solicitud ha tenido éxito. Una respuesta 200 es almacenable de forma predeterminada.

El significado de un éxito depende del método de solicitud HTTP:

- {{HTTPMethod("GET")}}: El recurso ha sido recuperado y se transmite el mensaje al body.
- {{HTTPMethod("HEAD")}}: Los encabezados de entidad estan en el body del mensaje.
- {{HTTPMethod("POST")}}: El recurso que describe el resultado de la acción se transmite en el body del mensaje.
- {{HTTPMethod("TRACE")}}: El body del mensaje contiene el mensaje de solicitud tal como lo recibió el servidor.

El resultado exitoso de un método {{HTTPMethod("PUT")}} o uno {{HTTPMethod("DELETE")}} no es a menudo un `200 OK` sino un {{HTTPStatus("204")}} `No Content` (o un {{HTTPStatus("201")}} `Created` cuando el recurso es subido por primera vez).

## Estado

```
200 OK
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [HTTP request methods](/es/docs/Web/HTTP/Reference/Methods)

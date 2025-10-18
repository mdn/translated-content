---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
original_slug: Web/HTTP/Status/302
---

El código de estado de redirección HTTP **`302 Found`** indica que el recurso solicitado ha sido movido temporalmente a la URL dada por las cabeceras {{HTTPHeader("Location")}}. Un navegador redirecciona a esta página, pero los motores de búsqueda no actualizan sus enlaces al recurso ( hablando en lenguaje SEO, se suele decir que el link juice no es enviado a la nueva URL).

Incluso si la especificación requiere el método, y el cuerpo, no debe ser alterado cuando la redirección se completa, no todos los user-agents se conforman aquí, y tu puedes encontrar software inestable por ahí. Por la tanto se recomienda poner el código `302` sólo como respuesta a los métodos {{HTTPMethod("GET")}} o {{HTTPMethod("HEAD")}} , y usar en cambio {{HTTPStatus("307")}} `Temporary Redirect` , ya que el método de cambio está explicitamente prohibido en ese caso.

En casos en los que quieras que el método usado para cambiar a {{HTTPMethod("GET")}}, usa {{HTTPStatus("303")}} `See Other`. Esto es práctico cuando quieres dar una respuesta al método {{HTTPMethod("PUT")}} que no es el recurso subido, pero sí un mensaje de confirmación (como "Has subido satisfactoriamente XYZ").

## Estado

```
302 Found
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- {{HTTPStatus("307")}} `Temporary Redirect`, el equivalente a este código de estado, pero que nunca cambia el método usado.
- {{HTTPStatus("303")}} `See Other`, una redirección temporal que cambia el método usado a {{HTTPMethod("GET")}}.
- {{HTTPStatus("301")}} `Moved Permanently`, la redirección permanente.

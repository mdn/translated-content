---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
original_slug: Web/HTTP/Status/100
---

El código de respuesta de estado informativo **`100 Continue`** indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarlo si ya está terminado.

Para que un servidor verifique los encabezados de la solicitud, un cliente debe enviar {{HTTPHeader("Expect")}}`: 100-continue` como encabezado en su solicitud inicial y recibe un código de estado `100 Continue` en respuesta antes de enviar el cuerpo.

## Estado

```
100 Continue
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}

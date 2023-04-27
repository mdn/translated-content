---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
---

{{HTTPSidebar}}

El código de error HTTP 401 indica que la petición (request) no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado.

Este estatus se envia con un {{HTTPHeader("WWW-Authenticate")}} encabezado que contiene informacion sobre como autorizar correctamente.

Es similar al estatus {{HTTPStatus("403")}}, pero en este caso , la autenticación si es posible.

## Estado

```
401 Unauthorized
```

## Respuesta de ejemplo

```
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [HTTP authentication](/es/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}

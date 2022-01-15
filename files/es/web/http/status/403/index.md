---
title: 403 Forbidden
slug: Web/HTTP/Status/403
translation_of: Web/HTTP/Status/403
tags:
  - Client error
  - HTTP
  - Reference
  - Status code
browser-compat: http.status.403
---

{{HTTPSidebar}}

El error 403 o **`403 Forbidden`** es un código de respuesta HTTP el cual indica que el servidor ha recibido y ha entendido la petición, pero rechaza enviar una respuesta.

Hay similitudes entre el status {{HTTPStatus("401")}} y el **`error 403`**, la diferencia es que este último no se soluciona con una re-autenticación. El acceso está permanentemente prohibido y ligado a la lógica de la aplicación, como el no tener los permisos necesarios para acceder al recurso.

## Estado

```
403 Forbidden
```

## Ejemplo de respuesta

```
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Especificaciones

{{Specifications}}

## Compatibilidad de navegadores

{{Compat}}

## Vea también

- {{HTTPStatus("401")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

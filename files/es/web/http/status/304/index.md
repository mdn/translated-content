---
title: 304 Not Modified
slug: Web/HTTP/Status/304
---

{{HTTPSidebar}}

El código HTTP de redirección **`304 Not Modified`** en el response de la petición indica que no hay necesidad de retransmitir los recursos solicitados. Es una redirección implícita a un elemento/recurso de caché.Esto sucede cuando el método de la solicitud es {{glossary("seguro")}} ({{glossary("safe")}}), como en el las peticiones con métodos {{HTTPMethod("GET")}} o {{HTTPMethod("HEAD")}}, o cuando el request (petición) está condicionada y usa la cabecera {{HTTPHeader("If-None-Match")}} o un {{HTTPHeader("If-Modified-Since")}}El response {{HTTPStatus("200")}} `OK` habría incluido los encabezados {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}}, {{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}}, y {{HTTPHeader("Vary")}}.

> [!NOTE]
> Muchos [developer tools' network panels](/es/docs/Tools/Network_Monitor) (paneles de red de desarrollo) de los navegadores crean extraños request que conducen a un "response(respuesta del servidor) `304` ", entonces el acceso al caché local es accesible a los desarrollodares.

## Status

```
304 Not Modified
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}

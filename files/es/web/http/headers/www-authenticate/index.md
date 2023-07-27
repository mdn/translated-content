---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
---

{{HTTPSidebar}}

La cabezera de la respuesta HTTP **`WWW-Authenticate`** define el método de autentificación que debe ser utilizado para acceder al recurso solicitado.

La cabezera `WWW-Authenticate` es enviada junto al estado {{HTTPStatus("401")}} `Unauthorized` en la respuesta.

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Syntax

```
WWW-Authenticate: <type> realm=<realm>
```

## Directives

- \<type>
  - : [Tipo de autentificación](/es/docs/Web/HTTP/Authentication#Authentication_schemes). Un tipo común es ["Basic"](/es/docs/Web/HTTP/Authentication#Basic_authentication_scheme). IANA mantiene una [lista de los esquemas de autentificación](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- realm=\<realm>
  - : Una descripción del recurso protegido. Si el realm no es especificado, los clientes a menudo muestran el hostname.
- charset=\<charset>
  - : Le indica al cliente el tipo de encoding scheme preferido por el servidor cuando se envía un nombre de usuario y contraseña. El único valor permitido es la cadena de texto (no diferencia entre mayúsculas o mínusculas) "UTF-8". Esto no esta relacionado a el encoding del parámetro realm.

## Ejemplos

Típicamente, la respuesta del servidor contiene una cabecera `WWW-Authenticate` que se parece a estas:

```
WWW-Authenticate: Basic

WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

Vea también [HTTP authentication](/es/docs/Web/HTTP/Authentication) por ejemplos sobre como configurar un servidor Apache o nginx para proteger con contraseña tu sitio con autenticación básica HTTP.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [HTTP authentication](/es/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}

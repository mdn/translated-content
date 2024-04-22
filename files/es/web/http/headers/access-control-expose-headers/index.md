---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
---

{{HTTPSidebar}}

La cabecera de respuesta **`Access-Control-Expose-Headers`** indica qué cabeceras pueden ser expuestas como parte de la respuesta listando sus nombres.

Por defecto, solo se exponen las 7 cabeceras HTTP seguras ({{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}}, {{Glossary("Simple response header", "simple response headers")}}):

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Si quieres que los clientes puedan acceder a otra cabeceras, tienes que listarlas usando la cabecera `Access-Control-Expose-Headers`

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Sintaxis

```
Access-Control-Expose-Headers: <header-name>, <header-name>, ...
Access-Control-Expose-Headers: *
```

## Directivas

- \<header-name>
  - : Una lista de cabeceras expuestas que consiste en cero o mas [nombres de cabeceras](/es/docs/Web/HTTP/Headers) diferentes a {{Glossary("Simple response header", "simple response headers")}} que el recurso puede usar y pueden ser expuestas.
- `*` (_wildcard_, comodín)
  - : El valor "`*`" solo funciona como comodín para peticiones sin credenciales (peticiones sin [HTTP cookies](/es/docs/Web/HTTP/Cookies) o autenticación HTTP). Para peticiones con credenciales, se trata como el literal "`*`", sin semánticas especiales.
    La cabecera {{HTTPHeader("Authorization")}} siempre se añadirá de manera explícita.
    _Vea cómo se añade en los ejemplos de más abajo_.

## Ejemplos

Para exponer una cabecera no simple, puedes especificar:

```
Access-Control-Expose-Headers: Content-Length
```

Para exponer cabeceras personalizadas, como `X-Kuma-Revision`, puedes especificar varias cabeceras separadas por coma:

```
Access-Control-Expose-Headers: Content-Length, X-Kuma-Revision
```

En peticiones sin credenciales puedes utilizar el valor comodín:

```
Access-Control-Expose-Headers: *
```

Si necesitas acceder (exponer) la cabecera {{HTTPHeader("Authorization")}}, hay que añadirla de manera explícita:

```
Access-Control-Expose-Headers: *, Authorization
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}

---
title: Referer
slug: Web/HTTP/Headers/Referer
---

{{HTTPSidebar}}

La cabecera de solicitud **`Referer`** ("referente") contiene la dirección de la página web anterior de la que provenía el enlace a la página actual que se siguió. La cabecera `Referer` permite a los servidores identificar de dónde los visitan las personas y pueden emplear estos datos para realizar análisis, registros o un almacenamiento en antememoria optimizado, por mencionar algunos ejemplos.

Observe que _referer_ es una grafía errónea de la palabra _referrer_. Consulte [<em>HTTP referer</em> en Wikipedia](https://es.wikipedia.org/wiki/HTTP_referer) para obtener más información.

> **Advertencia:** La cabecera `Referer` tiene el potencial de revelar información sobre el histórico de navegación del usuario, lo cual constituye un problema de privacidad.

Los navegadores no envían ninguna cabecera `Referer` si:

- el recurso referente es un URI local «file» o «data»;
- se emplea una solicitud HTTP no segura y la página referente fue recibida a través de un protocolo seguro (HTTPS).

| Tipo de cabecera                      | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | sí                             |

## Sintaxis

```
Referer: <url>
```

## Directivas

- \<url>
  - : Una dirección absoluta o parcial de la página web anterior, la cual contenía un enlace hacia la página solicitada actual que se siguió. No se incluyen los fragmentos de URL (esto es, «#sección») ni los datos de usuario (o sea, «nombredeusuario:contraseña» en URI como `https://nombredeusuario:contraseña\@ejemplo.com/equis/ye/`).

## Ejemplos

```
Referer: https://developer.mozilla.org/es/docs/Web/JavaScript
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Referer HTTP en Wikipedia](https://es.wikipedia.org/wiki/HTTP_referer)
- {{HTTPHeader("Referrer-Policy")}}

---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
---

{{HTTPSidebar}}

El encabezado de respuesta **`Access-Control-Allow-Headers`** es usado en la respuesta a una {{glossary("preflight request", "solicitud preflight")}} para indicar cuáles encabezados HTTP pueden ser usados durante dicha solicitud.

Los {{glossary("simple header", "encabezados simples")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} (pero sólo con un tipo MIME de sus valores analizados (ignorando los parámetros) de cualquier `application/x-www-form-urlencoded`, `multipart/form-data`, o `text/plain`), siempre están disponibles y no necesitan ser incluidos por este encabezado.

Este encabezado es necesario si la solicitud tiene un encabezado {{HTTPHeader("Access-Control-Request-Headers")}}.

| Tipo de encabezado                                                      | {{Glossary("Response header", "Encabezado de respuesta")}} |
| ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| {{Glossary("Forbidden header name", "Nombre de encabezado prohibido")}} | no                                                         |

## Sintaxis

```
Access-Control-Allow-Headers: <nombre-de-encabezado>, <nombre-de-encabezado>, ...
```

## Directivas

- \<nombre-de-encabezado>
  - : Lista de los encabezados soportados separados por una coma.

## Ejemplos

```
Access-Control-Allow-Headers: X-Custom-Header
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}

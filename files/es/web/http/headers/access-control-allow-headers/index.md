---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
tags:
  - CORS
  - encabezado
  - encabezado HTTP
  - header
translation_of: Web/HTTP/Headers/Access-Control-Allow-Headers
---
{{HTTPSidebar}}

El encabezado de respuesta **`Access-Control-Allow-Headers`** es usado en la respuesta a una {{glossary("preflight request", "solicitud preflight")}} para indicar cuáles encabezados HTTP pueden ser usados durante dicha solicitud.

Los {{glossary("simple header", "encabezados simples")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} (pero sólo con un tipo MIME de sus valores analizados (ignorando los parámetros) de cualquier `application/x-www-form-urlencoded`, `multipart/form-data`, o `text/plain`), siempre están disponibles y no necesitan ser incluidos por este encabezado.

Este encabezado es necesario si la solicitud tiene un encabezado {{HTTPHeader("Access-Control-Request-Headers")}}.

| Tipo de encabezado                                                                               | {{Glossary("Response header", "Encabezado de respuesta")}} |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name", "Nombre de encabezado prohibido")}} | no                                                                           |

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

| Specification                                                                                                            | Status                   | Comment             |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('Fetch','#http-access-control-allow-headers', 'Access-Control-Allow-Headers')}} | {{Spec2("Fetch")}} | Definición inicial. |

## Compatibilidad con navegadores

{{Compat("http.headers.Access-Control-Allow-Headers")}}

## Notas de compatibilidad

- El carácter comodín (\*) que es mencionado en la última especificación, todavía no está implementado en los navegadores:

  - Chromium: [Issue 615313](https://bugs.chromium.org/p/chromium/issues/detail?id=615313)
  - Firefox: {{bug(1309358)}}
  - Servo: [Issue 13283](https://github.com/servo/servo/issues/13283)
  - WebKit: [Issue 165508](https://bugs.webkit.org/show_bug.cgi?id=165508)

## Véase también

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}

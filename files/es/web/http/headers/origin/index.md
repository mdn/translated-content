---
title: Origin
slug: Web/HTTP/Headers/Origin
---

{{HTTPSidebar}}

La cabecera de petición **`Origin`** indica de dónde se origina una búsqueda. No incluye ninguna información de ruta, sino sólo el nombre del servidor. Es enviado con las peticiones {{Glossary("CORS")}}, tanto como con las peticiones {{HTTPMethod("POST")}}. Es similar a la cabecera {{HTTPHeader("Referer")}}, pero, a diferencia de ésta, no revela la ruta completa.

| Tipo de encabezado                                                      | {{Glossary("Request header", "Petición del encabezado")}} |
| ----------------------------------------------------------------------- | --------------------------------------------------------- |
| {{Glossary("Forbidden header name", "Nombe prohibido del encabezado")}} | Sí                                                        |

## Sintaxis

```
Origin: ""
Origin: <esquema> "://" <nombre de host> [ ":" <puerto> ]
```

`Origin` puede ser una cadena vacía: esto es útil, por ejemplo, si el origen es una `data` URL.

## Directivas

- \<esquema>
  - : El protocolo usado. Generalmente es el protocolo HTTP o su versión segura, HTTPS.
- \<nombre de host>
  - : El nombre de dominio del servidor (para hosting virtual) o la IP.
- \<puerto> {{optional_inline}}
  - : Número de puerto TCP en el que el servidor está escuchando. Si no se proporciona, se usa el puerto por defecto para el servicio requerido (e.g., "80" para una URL HTTP).

## Ejemplos

```
Origin: https://developer.mozilla.org
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Política same-origin](/es/docs/Web/Security/Same-origin_policy)

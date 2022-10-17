---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
translation_of: Web/HTTP/Headers/Content-Length
---
{{HTTPSidebar}}

El encabezado de entidad **`Content-Length`** indica el tamaño de la entidad-cuerpo, en bytes, enviado al destinatario.

| Tipo de cabecera                                             | {{Glossary("Entity header")}} |
| ------------------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Nombre de cabecera prohibido")}} | si                                       |

## Sintaxis

```
Content-Length: <longitud>
```

## Directivas

- \<length>
  - : La longitud en número decimal de octetos.

## Especificaciones

| Especificación                                           | Título                                                                                   |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {{RFC("7230", "Content-Length", "3.3.2")}} | Protocolo de Transferencia de Hipertexto (HTTP/1.1): Sintaxis y enrutamiento de mensajes |

## Compatibilidad con navegadores

{{Compat("http.headers.Content-Length")}}

## Véase también

- {{HTTPHeader("Transfer-Encoding")}}

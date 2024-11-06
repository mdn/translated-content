---
title: Allow
slug: Web/HTTP/Headers/Allow
---

{{HTTPSidebar}}

La cabecera **`Allow`** enumera el conjunto de métodos admitidos por un recurso.

Esta cabecera debe ser enviada si el servidor responde con un estado {{HTTPStatus("405")}} `Method Not Allowed` para indicar cual metodo de peticion puede ser usado. Una cabecera `Allow` vacia indica que el recurso no permite ningún método de solicitud, que podría ocurrir temporalmente para un recurso determinado, por ejemplo.

| Header type                           | {{Glossary("Entity header")}} |
| ------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}} | no                            |

## Sintáxis

```js
Allow: <http-methods>
```

## Directivas

- \<http-methods>
  - : La lista de métodos de solicitud HTTP permitidos.

## Ejemplo

```
Allow: GET, POST, HEAD
```

## Especificaciones

| Especificación                    | Título                                                        |
| --------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Allow", "7.4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Vea también

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}

---
title: Server
slug: Web/HTTP/Headers/Server
---

{{HTTPSidebar}}

La cabecera **`Server`** contiene la información acerca del software usado por el servidor original encargado de la solicitud.

La información larga y detallada debe de ser evitada en las cabeceras Server ya que puede revelar detalles de implementación que pueden hacer (un poco) más fácil para los atacantes encontrar y explotar huecos de seguridad.

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Sintaxis

```
Server: <producto>
```

## Directivas

- \<producto>
  - : El nombre del software o (sub) producto que se encargó de las solicitudes.

## Ejemplos

```
Server: Apache/2.4.1 (Unix)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTTPHeader("Allow")}}

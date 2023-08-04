---
title: Vary
slug: Web/HTTP/Headers/Vary
---

{{HTTPSidebar}}

El encabezado de respuesta **`Vary`** HTTP determina como hacer coincidir los encabezados de las solicitudes futuras para decidir si se puede utilizar una respuesta almacenada en caché en lugar de solicitar una nueva desde el servidor de origen. Esto es usado por el servidor para indicar cuales encabezados usa cuando selecciona una representación de recursos en un algoritmo [content negotiation](/es/docs/Web/HTTP/Content_negotiation) .

El encabezado `Vary` se debe establecer en una respuesta {{HTTPStatus("304")}} `Not Modified` exactamente igual que habría sido fijado en una respuesta equivalente {{HTTPStatus("200")}} `OK`.

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Sintaxis

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Directivas

- \*
  - : Cada solicitud para una URL debe ser tratada como unica e inaccesible . Una de las mejores formas de indicar esto es {{HTTPHeader("Cache-Control")}}`: private`, la cual hace mas claro leer y señalar que el objeto no debe ser almacenado nunca.
- \<header-name>
  - : Una lista de nombres de encabezados separados por coma para tener en cuenta al decidir si se puede utilizar o no una respuesta cache.

## Ejemplos

### Servicio Dinámico

Cuando usamos el encabezado `Vary: User-Agent` , los servidores de almacenamiento en cache deben considerar al agente de usuario al decidir si desea publicar la págína desde la memoria cache. Por ejemplo, si está sirviendo contenido diferente a usuarios móviles, puede ayudarle a evitar que la memoria cache pueda servir erróneamente una versión de escritorio de su sitio a usuarios móviles. Esto puede ayudar a Google y otros motores de búsqueda para descubrir la versión de una página web, y además permitir que intenten [Cloaking](https://en.wikipedia.org/wiki/Cloaking).

```
Vary: User-Agent
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Notas de Compatibilidad

- [Vary with care – Vary header problems in IE6-9](https://blogs.msdn.microsoft.com/ieinternals/2009/06/17/vary-with-care/)

## Vea tambien

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("User-Agent")}}
- [Mejores practicas para usar el encabezado Vary – fastly.com](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)

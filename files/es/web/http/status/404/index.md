---
title: 404 Not Found
slug: Web/HTTP/Status/404
tags:
  - Codigo de Estado
  - Error de Cliente
  - HTTP
translation_of: Web/HTTP/Status/404
---
{{HTTPSidebar}}

El codigo de error HTTP **`404 Not Found`** (404 No Encontrado) de respuesta de cliente indica que el servidor no puede encontrar el recurso solicitado. Vinculos que conducen a una pagina 404 son normalmente llamados _vinculos rotos_ o _vinculos muertos_, y pueden estar sujetos a [Enlace Roto](https://es.wikipedia.org/wiki/Enlace_roto).

Un código de estado 404 no indica si el recurso está temporalmente o permanentemente ausente. Pero si un recurso es permanentemente eliminado, un {{HTTPStatus(410)}} (Gone) debe ser usado en lugar del estado 404.

## Estado

```
404 Not Found
```

En español:

```
404 No Encontrado
```

## Paginas de error personalizadas

Muchos sitios web personalizan la apariencia de la pagina 404 para que sea de utilidad al usuario y proveen una guia para saber qué hacer. Servidores Apache pueden ser configurados usando un archivo `.htaccess` con el siguiente codigo:

```bash
ErrorDocument 404 /no-encontrado.html
```

Para una pagina 404 de ejemplo, mire la pagina [MDN 404](/es/404).

> **Nota:** Diseños personalizados son buenos, si se usan de manera moderada. Siente libre de hacer tus paginas 404 humoristicas y humanas, pero no confundas a tus usuarios.

## Especificaciones

| Especificacion                                           | Titulo                                                         |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| {{RFC("7231", "404 Not Found" , "6.5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semanticas y contenido |

## Compatibilidad con Navegadores

{{Compat("http.status.404")}}

## Vea también

- {{HTTPStatus(410)}}
- {{interwiki("wikipedia", "HTTP_404", "Wikipedia: HTTP 404")}}

---
title: 100 Continue
slug: Web/HTTP/Status/100
tags:
  - Códigos de estado
  - HTTP
  - Informativa
  - continue
translation_of: Web/HTTP/Status/100
---
{{HTTPSidebar}}

El código de respuesta de estado informativo **`100 Continue`** indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarlo si ya está terminado.

Para que un servidor verifique los encabezados de la solicitud, un cliente debe enviar {{HTTPHeader("Expect")}}`: 100-continue` como encabezado en su solicitud inicial y recibe un código de estado `100 Continue` en respuesta antes de enviar el cuerpo.

## Estado

```
100 Continue
```

## Especificaciones

| Especificación                                           | Título                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "100 Continue" , "6.2.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidad de navegadores

{{Compat("http.status.100")}}

## Ver también

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}

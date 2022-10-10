---
title: Link
slug: Web/HTTP/Headers/Link
tags:
  - Enlaces
  - HTTP
  - HTTP Headers
  - Links
  - Referencia
translation_of: Web/HTTP/Headers/Link
---
{{HTTPSidebar}}

El campo de encabezado de entidad de **`Link`** HTTP proporciona un medio para serializar uno o más enlaces en encabezados HTTP. Es semánticamente equivalente al elemento HTML {{HTMLElement("link")}}.

## Sintaxis

```
Link: < uri-referencia >; parametro1=valor1; parametro2="valor2"
```

- `<uri-reference>`
  - : La referencia de URI debe estar encerrada entre `<` y `>`.

### Parametros

El encabezado del enlace contiene parámetros, que se separan con `;` y son equivalentes a los atributos del elemento {{HTMLElement("link")}}.

## Ejemplos

El URI debe estar encerrado entre `<` y `>`:

```http example-good
Link: <https://ejemplo.com>; rel="preconnect"
```

```http example-bad
Link: https://mal.ejemplo; rel="preconnect"
```

### Especificando multiples links

Se puede especificar varios enlaces separados por comas, por ejemplo:

```
Link: <https://uno.ejemplo.com>; rel="preconnect", <https://dos.ejemplo.com>; rel="preconnect", <https://tres.ejemplo.com>; rel="preconnect"
```

## Especificaciones

| Especificaciones                                                         | Estado   | Comentarios        |
| ------------------------------------------------------------------------ | -------- | ------------------ |
| {{RFC(8288, "Link Serialisation in HTTP Headers", 3)}} | IETF RFC |                    |
| {{RFC(5988, "The Link Header Field", 5)}}                 | IETF RFC | Definición inicial |

## Compatibilidad del navegador

{{Compat("http.headers.Link")}}

## Ver también

- {{HTTPStatus(103, "103 Early Hints")}}

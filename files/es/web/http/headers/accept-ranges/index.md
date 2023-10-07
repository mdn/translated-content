---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
---

El encabezado de respuesta HTTP **`Accept-Ranges`** es un marcador usado por el servidor para notificar que soporta solicitudes parciales. El valor de este campo indica la unidad que puede ser usada para definir el rango.

En caso de estar presente un encabezado de respuesta `Accept-Ranges`, el navegador puede intentar restablecer una descarga interrumpida, en vez de reiniciarla o comenzarla desde el principio.

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Sintaxis

```
Accept-Ranges: bytes
Accept-Ranges: none
```

## Directivas

- `none`
  - : No indicar la unidad de medida del rango no está soportado, esto hace que el encabezado sea tomado como ausente, y por lo tanto es usado raramente, aunque algunos exploradores , como IE9, esto es usado para inhabilitar o remover el botón de pausa en el administrador de descargas.
- `bytes`
  - : La unidad de medida del rango es bytes.

## Ejemplos

```
Accept-Ranges: bytes
```

## Especificaciones

| Specification                           | Title                                                  |
| --------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Accept-Ranges", "2.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}

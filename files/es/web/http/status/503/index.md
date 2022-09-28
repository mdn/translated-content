---
title: 503 Servicio No Disponible
slug: Web/HTTP/Status/503
tags:
  - Codigo de Estado
  - Error de servidor
  - HTTP
  - error 503
translation_of: Web/HTTP/Status/503
---
{{HTTPSidebar}}

El envío de un código de error **`503 Servicio No Disponible`** como respuesta por un servidor que use el Protocolo de Transferencia de Hipertexto (HTTP) indica que el servidor no está listo para manejar la solicitud.

Las causas más comunes son que el servidor esté apagado por mantenimiento o esté sobrecargado. Esta respuesta debería usarse para condiciones temporales y la cabecera HTTP {{HTTPHeader("Retry-After")}} debería, si es posible, contener el tiempo estimado para la recuperación del servicio.

> **Nota:** debería enviarse con esta respuesta una página informativa explicando el problema.

Debe tenerse cuidado con las cabeceras relacionadas con la caché, ya que un estado 503 suele ser algo temporal, y, por lo tanto, no se deberían almacenar las respuestas en caché.

## Estado

```
503 Servicio No Disponible
```

## Especificaciones

| Especificación                                                       | Título                                                                     |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| {{RFC("7231", "503 Service Unavailable" , "6.6.4")}} | Protocolo de Transferencia de HiperTexto (HTTP/1.1): Semántica y Contenido |

## Compatibilidad entre Navegadores

La información mostrada abajo ha sido obtenida desde el GitHub de MDN (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.503")}}

## Ver también

- {{HTTPHeader("Retry-After")}}

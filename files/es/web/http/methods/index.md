---
title: Métodos de petición HTTP
slug: Web/HTTP/Methods
---

{{HTTPSidebar}}

HTTP define un conjunto de **métodos de petición** para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados _HTTP verbs_. Cada uno de ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos: ej. un _request method_ puede ser {{glossary("safe")}}, {{glossary("idempotent")}}, o {{glossary("cacheable")}}.

- [`GET`](/es/docs/Web/HTTP/Methods/GET)
  - : El método `GET` solicita una representación de un recurso específico. Las peticiones que usan el método `GET` sólo deben recuperar datos.
- [`HEAD`](/es/docs/Web/HTTP/Methods/HEAD)
  - : El método `HEAD` pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
- [`POST`](/es/docs/Web/HTTP/Methods/POST)
  - : El método `POST` se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
- [`PUT`](/es/docs/Web/HTTP/Methods/PUT)
  - : El modo `PUT` reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
- [`DELETE`](/es/docs/Web/HTTP/Methods/DELETE)
  - : El método `DELETE` borra un recurso en específico.
- [`CONNECT`](/es/docs/Web/HTTP/Methods/CONNECT)
  - : El método `CONNECT` establece un túnel hacia el servidor identificado por el recurso.
- [`OPTIONS`](/es/docs/Web/HTTP/Methods/OPTIONS)
  - : El método `OPTIONS` es utilizado para describir las opciones de comunicación para el recurso de destino.
- [`TRACE`](/es/docs/Web/HTTP/Methods/TRACE)
  - : El método `TRACE` realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.
- [`PATCH`](/es/docs/Web/HTTP/Methods/PATCH)
  - : El método `PATCH` es utilizado para aplicar modificaciones parciales a un recurso.

## Especificaciones

| Especificación                              | Título                                                                      | Comentario                                                        |
| ------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| {{RFC("7231", "Métodos de petición", "4")}} | Protocolo de Transferencia de HiperTexto (HTTP/1.1): Semánticas y Contenido | Especifica GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE. |
| {{RFC("5789", "Método Patch", "2")}}        | Método PATCH para HTTP                                                      | Especifica PATCH.                                                 |

## Compatibilidad del navegador

{{Compat}}

## Ver también

- [HTTP headers](/es/docs/Web/HTTP/Headers)

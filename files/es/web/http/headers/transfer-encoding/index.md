---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
---

El encabezado Transfer-Encoding especifica la forma de codificación utilizada para transferir de forma segura el {{Glossary("Payload body", "cuerpo del payload")}} al usuario.

> **Nota:** [HTTP/2](https://wikipedia.org/wiki/HTTP/2) no admite el mecanismo de codificación de transferencia fragmentada de HTTP 1.1, ya que proporciona sus propios mecanismos, más eficientes, para la transmisión de datos.

`Transfer-Encoding` es un encabezado [salto por salto](/es/docs/Web/HTTP/Headers#hbh), que se aplica a un mensaje entre dos nodos, no a un recurso en sí mismo. Cada segmento de una conexión de múltiples nodos puede usar diferentes valores de `Transfer-Encoding`. Si desea comprimir datos en toda la conexión, use el encabezado de extremo a extremo {{HTTPHeader("Content-Encoding")}} en su lugar.

Cuando está presente en una respuesta a una solicitud {{HTTPMethod ("HEAD")}} que no tiene cuerpo, indica el valor que se habría aplicado al mensaje {{HTTPMethod ("GET")}} correspondiente.

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | yes                             |

## Sintaxis

```
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
Transfer-Encoding: identity

// Se pueden enumerar varios valores, separados por una coma
Transfer-Encoding: gzip, chunked
```

## Directivas

- `chunked`
  - : Los datos se envían en una serie de fragmentos. El encabezado {{HTTPHeader ("Content-Length")}} se omite en este caso y al comienzo de cada fragmento debe agregar la longitud del fragmento actual en formato hexadecimal, seguido de '`\r\n`' y luego el trozo en sí, seguido de otro '`\r\n`'. El trozo de terminación es un trozo regular, con la excepción de que su longitud es cero. Le sigue el avance, que consiste en una secuencia (posiblemente vacía) de campos de encabezado de entidad.
- `compress`
  - : Un formato usando el algoritmo [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW). El nombre del valor se tomó del programa de compresión UNIX, que implementó este algoritmo.
    Al igual que el programa de compresión, que ha desaparecido de la mayoría de las distribuciones de UNIX, esta codificación de contenido no es utilizada por casi ningún navegador en la actualidad, en parte debido a un problema de patente (que expiró en 2003).
- `deflate`
  - : Usando la estructura [zlib](http://en.wikipedia.org/wiki/Zlib) (definida en la [RFC 1950](http://tools.ietf.org/html/rfc1950)), con el algoritmo de compresión [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) (definido en la [RFC 1951](http://tools.ietf.org/html/rfc1952)).
- `gzip`
  - : Un formato usando la codificación [Lempel-Ziv](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), con un CRC de 32 bits. Este es originalmente el formato del programa gzip de UNIX. El estándar HTTP / 1.1 también recomienda que los servidores que admiten esta codificación de contenido deben reconocer como un alias `x-gzip`, para fines de compatibilidad.
- `identity`
  - : Indica la función de identidad (es decir, sin compresión ni modificación). Este token, excepto si se especifica explícitamente, siempre se considera aceptable.

## Ejemplos

### Codificación Fragmentada

La codificación fragmentada es útil cuando se envían grandes cantidades de datos al cliente y el tamaño total de la respuesta puede no conocerse hasta que la solicitud se haya procesado por completo. Por ejemplo, al generar una tabla HTML grande como resultado de una consulta a la base de datos o al transmitir imágenes grandes. Veamos un ejemplo de una respuesta fragmentada:

```
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- Header fields that regulate the use of trailers: {{HTTPHeader("TE")}} (requests) and {{HTTPHeader("Trailer")}} (responses).
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)

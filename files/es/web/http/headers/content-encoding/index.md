---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
---

{{HTTPSidebar}}

La cabecera **`Content-Encoding`** es usada para comprimir el media-type. Cuando está presente, su valor indica qué codificación de contenido adicional ha sido aplicada al cuerpo de la entidad. Permite al cliente saber cómo decodificar para obtener el media-type referido por la cabecera `Content-Type`.

Se recomienda comprimir los datos tanto como sea posible y por lo tanto utilizar este campo, pero algunos tipos de recursos, como imágenes JPEG, ya están comprimidos. A veces, el uso de compresión adicional no reduce el tamaño de la petición e incluso puede hacer que la petición sea más larga.

| Header type                           | {{Glossary("Entity header")}} |
| ------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}} | no                            |

## Sintaxis

```
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: identity
Content-Encoding: br
```

## Directivas

- `gzip`
  - : Un formato que usa [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), con un CRC de 32 bits. Este es originalmente el formato del programa _gzip de_ UNIX . El estándar HTTP/1.1 también recomienda que los servidores que soporten esta codificación también deberían reconocer `x-gzip` como un alias por motivos de compatibilidad.
- `compress`
  - : Un formato que usa el algoritmo [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW). El nombre viene del programa _compress de_ UNIX , que implementó este algoritmo.
    Al igual que el programa compress, el cual ha desaparecido de la mayoría de distribuciones UNIX, esta codificación apenas es utilizada por los navegadores de hoy día, en parte debido a un problema de patente (la cual expiró en 2003).
- `deflate`
  - : Usa la estructura [zlib](http://en.wikipedia.org/wiki/Zlib) (definida en [RFC 1950](http://tools.ietf.org/html/rfc1950)), con el algoritmo de compresión [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) (definido en [RFC 1951](http://tools.ietf.org/html/rfc1952)).
- `identity`
  - : Indica la función de identidad (es decir, sin compresión ni modificación). Este símbolo, excepto si se especifica explícitamente, siempre se considera aceptable.
- `br`
  - : Un formato que usa el algoritmo [Brotli](https://en.wikipedia.org/wiki/Brotli).

## Ejemplos

### Comprimiendo con gzip

En el lado del cliente, puede detectar una lista de esquemas de compresión que serán enviados en una petición HTTP. La cabecera {{HTTPHeader("Accept-Encoding")}} se utiliza para la negociación de la codificación del contenido.

```
Accept-Encoding: gzip, deflate
```

El servidor responde con el esquema usado, indicado por la cabecera de respuesta `Content-Encoding`.

```
Content-Encoding: gzip
```

Ten en cuenta que el servidor no está obligado a usar algun método de compresión. La compresión depende directamente de la configuración del servidor y los módulos que utilice.

## Especificaciones

| Especificación                                   | Título                                                        |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "Content-Encoding", "3.1.2.2")}}   | Hypertext Transfer Protocol (HTTP/1.1): Semántica y Contenido |
| <http://www.ietf.org/id/draft-alakuijala-brotli> | Formato de datos comprimidos Brotli                           |

## Compatibilidad con los navegadores

{{Compat}}

## Ver también

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}

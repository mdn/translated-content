---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
---

{{HTTPSidebar}}

**`Content-Encoding`** - это сущность заголовка, используемая для сжатия медиа-типа. При наличии её значение определяет кодировку, применённую к сущности **`body`**. Это позволяет клиенту информацию как декодировать **`body`**, чтобы получить медиа-тип ссылающийся на заголовок **`Content-Type`**

Рекомендация - сжимать данные насколько это возможно и следовательно использовать это поле, но некоторые типы данных, такие как изображения в формате jpeg, уже сжаты. Иногда, использование дополнительного сжатия не уменьшает размер пакета и даже может сделать загрузку дольше.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: identity
Content-Encoding: br

// Multiple, in the order in which they were applied
Content-Encoding: gzip, identity
Content-Encoding: deflate, gzip
```

## Директивы

- `gzip`
  - : A format using the [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), with a 32-bit CRC. This is the original format of the UNIX _gzip_ program. The HTTP/1.1 standard also recommends that the servers supporting this content-encoding should recognize `x-gzip` as an alias, for compatibility purposes.
- `compress`
  - : A format using the [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) algorithm. The value name was taken from the UNIX _compress_ program, which implemented this algorithm. Like the compress program, which has disappeared from most UNIX distributions, this content-encoding is not used by many browsers today, partly because of a patent issue (it expired in 2003).
- `deflate`
  - : Using the [zlib](http://en.wikipedia.org/wiki/Zlib) structure (defined in [RFC 1950](http://tools.ietf.org/html/rfc1950)) with the [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) compression algorithm (defined in [RFC 1951](http://tools.ietf.org/html/rfc1951)).
- `identity`
  - : Indicates the identity function (i.e., no compression or modification). This token, except if explicitly specified, is always deemed acceptable.
- `br`
  - : A format using the [Brotli](https://en.wikipedia.org/wiki/Brotli) algorithm.

## Examples

### Compressing with gzip

On the client side, you can advertise a list of compression schemes that will be sent along in an HTTP request. The {{HTTPHeader("Accept-Encoding")}} header is used for negotiating content encoding.

```
Accept-Encoding: gzip, deflate
```

The server responds with the scheme used, indicated by the `Content-Encoding` response header.

```
Content-Encoding: gzip
```

Note that the server is not obligated to use any compression method. Compression highly depends on server settings and used server modules.

## Specifications

| Specification                                    | Title                                                         |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7932", "Brotli Compressed Data Format")}} | Brotli Compressed Data Format                                 |
| {{RFC("7231", "Content-Encoding", "3.1.2.2")}}   | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |
| {{RFC("2616", "Content-Encoding", "14.11")}}     | Content-Encoding                                              |

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}

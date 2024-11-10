---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

La cabecera **`Transfer-Encoding`** especifica la forma de codificación utilizada para transferir de forma segura el {{Glossary("Payload body", "cuerpo de carga útil")}} al usuario.

> **Nota:** [HTTP/2](https://es.wikipedia.org/wiki/HTTP/2) prohíbe todos los usos de la cabecera _Transfer-Encoding_ que no sean los específicos de HTTP/2: `"trailers"`. HTTP 2 proporciona sus propios mecanismos más eficientes para la transmisión de datos que la transferencia fragmentada y prohíbe el uso de la cabecera. El uso de la cabecera en HTTP/2 puede dar como resultado un `error de protocolo` específico, ya que el protocolo HTTP/2 prohíbe su uso.

`Transfer-Encoding` es una [cabecera salto por salto](/es/docs/Web/HTTP/Headers#hop-by-hop_headers), que se aplica a un mensaje entre dos nodos, no a un recurso en sí mismo. Cada segmento de una conexión de múltiples nodos puede usar diferentes valores de `Transfer-Encoding`. Si desea comprimir datos en toda la conexión, use la cabecera de extremo a extremo {{HTTPHeader("Content-Encoding")}} en su lugar.

Cuando está presente en una respuesta a una solicitud {{HTTPMethod("HEAD")}} que no tiene cuerpo, indica el valor que se habría aplicado al mensaje {{HTTPMethod("GET")}} correspondiente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabecera</th>
      <td>
        {{Glossary("Request header","Cabecera de solicitud")}}, {{Glossary("Response header","Cabecera de respuesta")}}, {{Glossary("Payload header","Cabecera de carga útil")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name","Nombre de cabecera prohibido")}}</th>
      <td>Sí</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```http
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip

// Se pueden enumerar varios valores, separados por una coma.
Transfer-Encoding: gzip, chunked
```

## Directivas

- `chunked`
  - : Los datos se envían en una serie de fragmentos. La cabecera {{HTTPHeader("Content-Length")}} se omite en este caso y al comienzo de cada fragmento debe agregar la longitud del fragmento actual en formato hexadecimal, seguido de '`\r\n`' y luego el fragmento en sí, seguido de otro '`\r\n`'. El fragmento de terminación es un fragmento regular, con la excepción de que su longitud es cero. Le sigue el avance, que consiste en una secuencia (posiblemente vacía) de campos de cabeceras de entidad.
- `compress`
  - : Un formato usando el algoritmo [Lempel-Ziv-Welch](https://es.wikipedia.org/wiki/LZW) (LZW). El nombre del valor se tomó del programa de compresión UNIX, que implementó este algoritmo.
    Al igual que el programa de compresión, que ha desaparecido de la mayoría de las distribuciones de UNIX, esta codificación de contenido no es utilizada por casi ningún navegador en la actualidad, en parte debido a un problema de patente (que expiró en 2003).
- `deflate`
  - : Usando la estructura [zlib](https://es.wikipedia.org/wiki/Zlib) (definida en la [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), con el algoritmo de compresión [_deflate_](<https://es.wikipedia.org/wiki/Deflaci%C3%B3n_(algoritmo)>) (definido en la [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : Un formato usando la codificación [Lempel-Ziv](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), con un CRC de 32 bits. Este es originalmente el formato del programa gzip de UNIX. El estándar HTTP/1.1 también recomienda que los servidores que admiten esta codificación de contenido deben reconocer como un alias `x-gzip`, para fines de compatibilidad.

## Ejemplos

### Codificación fragmentada

La codificación fragmentada es útil cuando se envían grandes cantidades de datos al cliente y el tamaño total de la respuesta puede no conocerse hasta que la solicitud se haya procesado por completo. Por ejemplo, al generar una tabla HTML grande como resultado de una consulta a la base de datos o al transmitir imágenes grandes. Veamos un ejemplo de una respuesta fragmentada:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
11\r\n
Developer Network\r\n
0\r\n
\r\n
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- Campos de cabecera que regulan el uso de _trailers_: {{HTTPHeader("TE")}} (solicitudes) y {{HTTPHeader("Trailer")}} (respuestas).
- [Codificación de transferencia fragmentada](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)

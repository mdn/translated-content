---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
---

{{HTTPSidebar}}

O cabeçalho **`Transfer-Encoding`** especifica a forma de codificação usada para transferir seguramente o corpo da mensagem ({{Glossary("Payload body","payload body")}}) para o usuário.

> **Nota:** [HTTP/2](https://wikipedia.org/wiki/HTTP/2) não suporta o mecanismo de codificação de trasferência fragmentada do HTTP 1.1, já que ele provém o próprio, e mais eficiente, mecanismo para _streaming_ de dados.

`Transfer-Encoding` é um cabeçalho salto-por-salto (_[hop-by-hop header](/pt-BR/docs/Web/HTTP/Headers#hbh)_), que é aplicado a uma mensagem entre dois nós, não ao recurso em si. Cada segmento da conexão multi-nós pode usar diferentes valores `Transfer-Encoding`. Se você quer comprimir dados através da conexão inteira, use o cabeçalho {{HTTPHeader("Content-Encoding")}} ao invés disso.

Quando presente em uma resposta para uma requisição {{HTTPMethod("HEAD")}} que não tem corpo, ele indica o valor que seria aplicado a mensagem {{HTTPMethod("GET")}} correspondente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
Transfer-Encoding: identity

// Diversos valores podem ser listados, separados por vírgula
Transfer-Encoding: gzip, chunked
```

## Diretivas

- `chunked`
  - : Dados enviados em uma série de fragmentos. O cabeçalho {{HTTPHeader("Content-Length")}} é omitido neste caso e no começo de cada fragmento, você precisa adicionar o tamanho do fragmento atual em formato hexadecimal, seguido por '`\r\n`' e o fragmento em si, seguido por outro '`\r\n`'. O fragmento final é um fragmento normal, com exceção que seu tamanho é zero. Ele é seguido por um reboque, que consiste de uma (possívelmente vazia) sequência de cabeçalhos de entidade.
- `compress`
  - : Um formato usando o algoritmo [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW). O nome do valor foi pego do programa UNIX _compress_, que implementa o algoritmo.
    Como o programa de compressão, que desapareceu da maioria das distribuições UNIX, esta codificação de conteúdo não é usada por quase nenhum navegador atualmente, em partes por causa do seu problema de patente (que expirou em 2003).
- `deflate`
  - : Usando a estrutura [zlib](http://en.wikipedia.org/wiki/Zlib) (definida na [RFC 1950](http://tools.ietf.org/html/rfc1950)), com o algoritmo de compressão [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) (definido em [RFC 1951](http://tools.ietf.org/html/rfc1952)).
- `gzip`
  - : O formato usando a [codificação Lempel-Ziv](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), com CRC 32-bit. Este é originalmente o formato do programa UNIX _gzip_. O padrão HTTP/1.1 também recomenda que os servidores que suportem esta codificação de conteúdo devem reconhecer `x-gzip` como um pseudônimo, para propósitos de compatibilidade.
- `identity`
  - : Indica a função de identidade (i.e. sem compressão, nem modificação). Este _token_, exceto se explicitamente especificado, é sempre considerado aceitável.

## Exemplos

### Codificação fragmentada

Codificação fragmentada é útil quando grandes quantidade de dados estão sendo enviados para o cliente e o tamanho total da resposta pode não ser conhecido até que a requisição seja totalmente processada. Por exemplo, quando gerando uma grande tabela HTML resultante de uma consulta no banco de dados ou transmitindo grandes imagens. A resposta fragmentada se parece com isto:

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

## Especificações

| Especificação                                 | Título                                                             |
| --------------------------------------------- | ------------------------------------------------------------------ |
| {{RFC("7230", "Transfer-Encoding", "3.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Compatibilidade com navegadores

{{Compat("http.headers.Transfer-Encoding")}}

## Veja também

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- Cabeçalho que regulam o uso de reboques: {{HTTPHeader("TE")}} (requisições) e {{HTTPHeader("Trailer")}} (respostas).
- [Codificação de transferência fragmentada](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)

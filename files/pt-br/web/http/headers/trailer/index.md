---
title: Trailer
slug: Web/HTTP/Headers/Trailer
---

{{HTTPSidebar}}

O cabeçalho de resposta **Trailer** permite o remetente incluir campos adicionais ao final de mensagens fragmentadas visando prover metadados que podem ser dinamicamente gerados enquanto o corpo da mensagem é enviado, como a mensagem de checagem de integridade, assinatura digital, ou status de pós-processamento.

> **Nota:** O cabeçalho de requisição {{HTTPHeader("TE")}} precisa ser colocado como "trailers" para permitir campos de reboque (_trailers_).

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
Trailer: header-names
```

## Diretivas

- `header-names`

  - : Cabeçalhos HTTP que estarão presentes na parte de reboque das mensagens fragmentadas. Estes campos de cabeçalhos **não** estão permitidos:

    - cabeçalhos de enquadramento de mensagem (e.g., {{HTTPHeader("Transfer-Encoding")}} e {{HTTPHeader("Content-Length")}}),
    - Cabeçalhos de roteamento (e.g., {{HTTPHeader("Host")}}),
    - Modificadores de requisição (e.g., controles e condicionais, como {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, ou {{HTTPHeader("TE")}}),
    - cabeçalhos de autenticação (e.g., {{HTTPHeader("Authorization")}} ou {{HTTPHeader("Set-Cookie")}}),
    - ou {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, e `Trailer` em si.

## Exemplos

### Codificação de transferência fragmentada usando cabeçalho de reboque

Neste exemplo, o cabeçalho {{HTTPHeader("Expires")}} é usado no fim da mensagem fragmentada e serve como cabeçalho de reboque.

```
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
Expires: Wed, 21 Oct 2015 07:28:00 GMT\r\n
\r\n
```

## Especificações

| Especificação                                    | Título                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Trailer", "4.4")}}                | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |
| {{RFC("7230", "Chunked trailer part", "4.1.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Compatibilidade com navegadores

{{Compat("http.headers.Trailer")}}

## Veja também

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- [Codificação de transferência fragmentada](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)

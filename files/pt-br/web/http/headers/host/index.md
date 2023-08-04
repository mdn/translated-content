---
title: Host
slug: Web/HTTP/Headers/Host
---

{{HTTPSidebar}}

O cabeçalho de solicitação de **`Host`** especifica o nome de domínio do servidor (para hospedagem virtual), e (opcionalmente) o número da porta TCP no qual o servidor está escutando.

Se nenhuma porta for fornecida a porta padrão para o serviço solicitado (por exemplo, "80" para um HTTP URL) está implícita.

Um campo de cabeçalho de `Host` deve ser enviado em todas as mensagens desolicitação HTTP / 1. 1. Um código de status {{HTTPStatus("400")}} (Bad Request) será enviado para qualquer mensagem de solicitação HTTP/1.1 que não contenha um campo de cabeçalho do host ou contenha mais de um.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Host: <host>:<port>
```

## Directives

- \<host>
  - : the domain name of the server (for virtual hosting).
- \<port> {{optional_inline}}
  - : TCP port number on which the server is listening.

## Examples

```
Host: developer.mozilla.org
```

## Specifications

| Specification                  | Title                                                              |
| ------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Host", "5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Compatibilidade com navegadores

{{Compat("http.headers.Host")}}

## See also

- {{HTTPStatus("400")}}

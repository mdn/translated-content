---
title: Keep-Alive
slug: Web/HTTP/Reference/Headers/Keep-Alive
original_slug: Web/HTTP/Headers/Keep-Alive
---

O cabeçalho **`Keep-Alive`** permite que o remetente indique como a conexão deve ser usada, para definir um tempo limite e um máximo de requisições.

> [!NOTE]
> O {{HTTPHeader("Connection")}} cabeçalho precisa ser definido como "keep-alive" para isso funcionar , {{HTTPHeader("Connection")}} e {{HTTPHeader("Keep-Alive")}} são ignorados em conexões HTTP/2; Gerenciamento de conexões são feitos por outros mecanismos.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Keep-Alive: parametros
```

## Diretivas

- _parâmetros_
  - : Uma vírgula separa a lista de parâmetros, Cada consiste de um identificador e um valor separado pelo sinal de igualdade (`'='`). São possíveis os seguintes identificadores:
    - `timeout`: indicando a quantidade mínima de tempo que uma conexão deve ser mantida aberta (em segundos). Observe que os tempos limite maiores que o tempo limite do TCP podem ser ignorados se nenhuma mensagem TCP keep-alive estiver definida na camada de transporte.
    - `max`: indicando o número máximo de pedidos que podem ser enviados nesta conexão antes de fechá-lo. Menor que `0`, este valor será ignorado por conexões non-pipelined, pois outra requisição será enviada na próxima resposta. Um HTTP pipeline pode usar isso para limitar o pipelining.

## Exemplos

Uma resposta content o cabeçalho `Keep-Alive`:

```
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

## Especificações

| Specification                                                                                                                     | Title                                                              |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [HyperText Transport Protocol Keep-Alive Header](https://tools.ietf.org/id/draft-thomson-hybi-http-timeout-01.html#rfc.section.2) | The Keep-Alive Header (Experimental specification)                 |
| [RFC 7230, appendix A.1.2: Keep-Alive](https://tools.ietf.org/html/rfc7230#appendix-A.1.2)                                        | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Connection")}}
- [Connection management in HTTP/1.x](/pt-BR/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)

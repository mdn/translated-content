---
title: Expect
slug: Web/HTTP/Headers/Expect
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Expect`** indica expectativas que precisão ser cumpridas pelo servidor para lidar com a requisição apropriadamente.

A única expectativa definida na especificação é `Expect: 100-continue`, para qual o servidor deve responder com:

- {{HTTPStatus("100")}} se a informação contida no cabeçalho é suficiente para causar sucesso imediato,
- {{HTTPStatus("417")}} (Expectativa Falhou) se ele não pode se comprometer com a expectativa; ou qualquer outro código de status 4xx caso contrário.

Por exemplo, o servidor pode rejeitar a requisição se o cabeçalho {{HTTPHeader("Content-Length")}} for muito grande.

Navegadores comuns não enviam um cabeçalho `Expect`, mas alguns clientes como o cURL fazem isso por padrão.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

Nenhuma outra expectativa exceto "100-continue" foi especificada atualmente.

```
Expect: 100-continue
```

## Diretivas

- 100-continue
  - : Informa os receptores que o cliente está para mandar uma mensagem com corpo (presumidamente grande) na requisição e deseja receber um código de status {{HTTPStatus("100")}} (Continue) como resposta interina.

## Exemplos

### Mensagem de corpo grande

Um cliente envia uma requisição com cabeçalho Expect e aguarda a resposta do servidor antes de mandar o corpo da mensagem.

```
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

O servidor checa os cabeçalhos da requisição e responde com uma resposta {{HTTPStatus("100")}} (Continue) para instruir o cliente a continuar e enviar o corpo da mensagem, ou ele irá mandar um código de status {{HTTPStatus("417")}} (Expectativa Falhou) se qualquer uma das expectativas não pode ser cumprida.

## Especificações

| Especificação                      | Título                                                        |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Expect", "5.1.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Expect")}}

## Veja também

- {{HTTPStatus("417")}} `Expectation Failed`
- {{HTTPStatus("100")}} `Continue`

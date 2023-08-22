---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Retry-After`** indica quanto tempo o agente de usuário deve aguardar antes de fazer outro pedido de acompanhamento. Existem dois casos principais em que este cabeçalho é usado:

- Quando enviado com uma resposta {{HTTPStatus(503)}} (Service Unavailable), indica quanto tempo o serviço deve ficar indisponível.
- Quando enviado com uma resposta de redirecionamento, como {{HTTPStatus(301)}} (Moved Permanently), indica o tempo mínimo solicitado que o agente de usuário aguarde antes de realizar o pedido de redirecionamento.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Retry-After: <data-http>
Retry-After: <atraso-segundos>
```

## Diretivas

- \<data-http>
  - : Uma data para tentar novamente posteriormente. Veja o cabeçalho {{HTTPHeader("Date")}} para mais detalhes sobre o formato de data HTTP.
- \<atraso-segundos>
  - : Um decimal inteiro não-negativo indicando o tempo em segundos para esperar após a resposta ser recebida.

## Exemplos

### Lidando com uma indisponibilidade programada

O suporte para o cabeçalho `Retry-After` tanto em clientes quanto em servidores ainda é inconsistente. Apesar disto, alguns indexadores e robôs, como o Googlebot, honram o cabeçalho `Retry-After`. É útil enviá-lo junto com uma resposta {{HTTPStatus(503)}} (Service Unavailable), assim, os mecanismos de busca poderão continuar indexando o seu site quando a indisponibilidade acabar.

```
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## Especificações

| Especificação                           | Título                                                        |
| --------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Retry-After", "7.1.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Retry-After")}}

## Veja também

- [Google Webmaster blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Service Unavailable)
- {{HTTPStatus(301)}} (Moved Permanently)

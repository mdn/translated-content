---
title: Origin
slug: Web/HTTP/Headers/Origin
---

{{HTTPSidebar}}

O cabeçalho de requisição **`Origin`** indica onde a requisição se originou. Ele não inclui nenhuma informação do caminho, somente o nome do servidor. Ele é enviado com requisições {{Glossary("CORS")}}, também como requisições {{HTTPMethod("POST")}}. Ele é similar ao cabeçalho {{HTTPHeader("Referer")}}, mas, diferente deste cabeçalho, ele não mostra o caminho inteiro.

> **Nota:** O cabeçalho {{httpheader("Origin")}} não é colocado em [requisições Fetch](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/fetch) com um método {{HTTPMethod("HEAD")}} ou {{HTTPMethod("GET")}} (este comportamento foi corrigido no Firefox 65 — veja [Erro do Firefox 1508661](https://bugzil.la/1508661)).

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

```
Origin: null
Origin: <scheme> "://" <hostname> [ ":" <port> ]
```

## Diretivas

- \<scheme>
  - : O protocolo que é usado. Usualmente ele é o protocolo HTTP ou na sua versão segura, HTTPS.
- \<hostname>
  - : O nome do domínio do servidor (para _host_ virtual) ou o endereço IP.
- \<port> {{optional_inline}}
  - : O número da porta TCP que o servidor está escutando. Se a porta não é dada, a porta padrão do serviço requisitado é implítica (e.g., "80" para uma URL HTTP).

## Exemplos

```
Origin: https://developer.mozilla.org
```

## Especificações

| Especificação                                          | Comentários                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| {{RFC("6454", "Origin", "7")}}                         | Conceito da Origem da Internet                           |
| {{SpecName('Fetch','#origin-header','Origin header')}} | Substitui o cabeçalho `Origin` como definido na RFC6454. |

## Compatibilidade com navegadores

{{Compat("http.headers.Origin")}}

## Veja também

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Same-origin policy](/pt-BR/docs/Web/Security/Same-origin_policy)

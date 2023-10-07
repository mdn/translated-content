---
title: Via
slug: Web/HTTP/Headers/Via
---

{{HTTPSidebar}}

O cabeçalho geral **`Via`** é adicionado por proxies, ambos diretos e reversos, e pode aparecer em cabeçalhos de requisição e de cabeçalhos de resposta. Ele é usado para rastrear mensagens direcionadas, evitando laços de requisição, e identificando as capacidades dos protocolos dos remetentes ao longo da cadeia de requisição/resposta.

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
Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
or
Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>
```

## Diretivas

- \<protocol-name>
  - : Opcional. O nome do protocolo usado, como "HTTP".
- \<protocol-version>
  - : A versão do protocolo usado, como "1.1".
- \<host> e \<port>
  - : URL pública do proxy e sua porta.
- \<pseudonym>
  - : Nome/pseudônimo de um proxy interno.

## Exemplos

```
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## Especificações

| Especificação                   | Título                                                             |
| ------------------------------- | ------------------------------------------------------------------ |
| {{RFC("7230", "Via", "5.7.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Compatibilidade com navegadores

{{Compat("http.headers.Via")}}

## Veja também

- {{HTTPHeader("X-Forwarded-For")}}
- [Biblioteca proxy Vegur do Heroku](https://github.com/heroku/vegur)

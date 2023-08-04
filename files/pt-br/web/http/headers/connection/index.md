---
title: Connection
slug: Web/HTTP/Headers/Connection
---

{{HTTPSidebar}}

O cabeçalho **`Connection`** controla se a conexão se mantém aberta ou não após o término da transação atual. Se o valor for `keep-alive`, a conexão é persistente e não fecha, permitindo que requisições futuras ao mesmo servidor sejam feitas.

> **Nota:** [Campos de cabeçalho de conexão específica como Connection não devem ser usados com HTTP/2.](https://tools.ietf.org/html/rfc7540#section-8.1.2.2)

Exceto pelos cabeçalhos padrões _hop-by-hop_ (salto-por-salto) ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Connection")}}, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}} e {{HTTPHeader("Proxy-Authenticate")}}), quaisquer cabeçalhos _hop-by-hop_ usados pela mensagem devem estar listados no cabeçalho `Connection`, para que o primeiro proxy saiba que tem que consumi-los e não repassá-los além. Os cabeçalhos _hop-by-hop_ padrões podem ser listados também (como é o caso do {{HTTPHeader("Keep-Alive")}}, mas não é obrigatório).

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
Connection: keep-alive
Connection: close
```

## Diretivas

- `close`
  - : Indica que ou o cliente, ou o servidor querem fechar a conexão. Este é o valor padrão em requisições HTTP/1.0.
- qualquer lista de cabelhaços HTTP separados por vírgulas \[Geralmente apenas o `keep-alive` ]
  - : Indica que o cliente gostaria de manter a ligação aberta. Ter uma conexão persistente é o valor padrão das requisições HTTP/1.1. A lista de cabeçalhos são os nomes dos cabeçalhos a serem removidos pelo primeiro proxy não-transparente ou com "cache no meio": estes cabeçalhos definem a conexão entre o emissor e a primeira entidade, não o nó destinatário.

## Compatibilidade com navegadores

{{Compat("http.headers.Connection")}}

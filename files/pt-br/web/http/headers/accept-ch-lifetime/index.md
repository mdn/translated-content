---
title: Accept-CH-Lifetime
slug: Web/HTTP/Headers/Accept-CH-Lifetime
tags:
  - Client hints
  - Dicas do Cliente
  - HTTP
  - HTTP Header
translation_of: Web/HTTP/Headers/Accept-CH-Lifetime
---
{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

O cabeçalho **`Accept-CH-Lifetime`** é colocado pelo servidor para especificar a persistência do valor do cabeçalho {{HTTPHeader("Accept-CH")}}, que especifica para quais cabeçalhos [Client Hints](/pt-BR/docs/Glossary/Client_hints) o cliente deve incluir nas suas requisições subsequentes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>?</td>
    </tr>
  </tbody>
</table>

> **Nota:** Client Hints são acessíveis somente em origens seguras (via TLS). Os cabeçalhos Accept-CH e Accept-CH-Lifetime devem ser persistidos por todas as requisições seguras para assegurar que os Client Hints são enviados com segurança.

## Sintaxe

```
Accept-CH-Lifetime: <age>
```

## Exemplos

```
Accept-CH: Viewport-Width, DPR
Accept-CH-Lifetime: 86400
```

## Compatibilidade com navegadores

{{Compat("http.headers.Accept-CH-Lifetime")}}

## Veja também

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Vary")}}

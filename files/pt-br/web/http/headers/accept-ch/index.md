---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

O cabeçalho **`Accept-CH`** é colocado pelo servidor para especificar quais cabeçalhos [Client Hints](/pt-BR/docs/Web/HTTP/Client_hints) o cliente deve incluir nas requisições subsequentes.

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

> [!NOTE]
> Client Hints são acessíveis somente em origens seguras (via TLS). Os cabeçalhos Accept-CH e Accept-CH-Lifetime devem ser persistidos por todas as requisições seguras para assegurar que os Client Hints são enviados com segurança.

## Sintaxe

```
Accept-CH: <lista de client hints>
```

## Exemplos

```
Accept-CH: DPR, Viewport-Width
Accept-CH: Width
Accept-CH-Lifetime: 86400
Vary: DPR, Viewport-Width, Width
```

> [!NOTE]
> Lembre de [variar a resposta](/pt-BR/docs/Web/HTTP/Client_hints#varying_client_hints) baseado nos client hints aceitos.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}

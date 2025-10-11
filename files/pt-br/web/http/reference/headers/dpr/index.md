---
title: DPR
slug: Web/HTTP/Reference/Headers/DPR
original_slug: Web/HTTP/Headers/DPR
---

{{securecontext_header}}{{SeeCompatTable}}

O cabeçalho **`DPR`** é um cabeçalho de requisição _[Client Hints](/pt-BR/docs/Web/HTTP/Client_hints)_ que representa a razão de pixeis do dispositivo do cliente, por isso ({{Glossary("DPR")}})(_device pixel ratio_), que é o número de pixeis físicos do dispositivo correspondendo a cada pixel CSS.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>?</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> _Client Hints_ são acessíveis somente em origens seguras (via TLS). Servidor deve optar em receber um cabeçalho `DPR` do cliente enviando cabeçalhos de resposta {{HTTPHeader("Accept-CH")}} e {{HTTPHeader("Accept-CH-Lifetime")}}.

## Sintaxe

```
DPR: <number>
```

## Exemplos

O servidor primeiro optar por receber o cabeçalho `DPR` enviando os cabeçalhos de resposta {{HTTPHeader("Accept-CH")}} contendo `DPR` e {{HTTPHeader("Accept-CH-Lifetime")}}.

```
Accept-CH: DPR
Accept-CH-Lifetime: 86400
```

Então as requisições subsequentes do cliente podem enviar o cabeçalho `DPR` de volta:

```
DPR: 1.0
```

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}

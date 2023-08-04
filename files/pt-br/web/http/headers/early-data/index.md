---
title: Early-Data
slug: Web/HTTP/Headers/Early-Data
---

{{SeeCompatTable}}{{HTTPSidebar}}

O cabeçalho **`Early-Data`** é colocado por um intermediário para indicar que a requisição foi transportada em [dados precoces do TLS (TLS _early data_)](/pt-BR/docs/Web/Security/Transport_Layer_Security#TLS_1.3), e também indica que o intermediário entende o código de status {{HTTPStatus("425", "425 (Too Early)")}}.

O cabeçalho `Early-Data` **não é** definido pelo gerador da requisição (i.e., um navegador).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sitnaxe

```
Early-Data: 1
```

## Exemplos

```
GET /resource HTTP/1.0
Host: example.com
Early-Data: 1
```

## Especificações

| Especificação                                         | Título                   |
| ----------------------------------------------------- | ------------------------ |
| {{RFC("8470", "The Early-Data Header Field", "5.1")}} | Using Early Data in HTTP |

## Compatibilidade com navegadores

{{Compat("http.headers.Early-Data")}}

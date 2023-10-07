---
title: Location
slug: Web/HTTP/Headers/Location
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Location`** indica o URL para qual página deve-se ser redirecionada. Ele só tem significado quando é enviado junto a uma resposta de status `3xx` (redirecionamento) ou `201` (criado).

Em casos de redirecionamento, o método HTTP utilizado para fazer a nova requisição à página apontada pelo cabeçalho `Location` depende do método original e do tipo de redirecionamento:

- Se respostas com status {{HTTPStatus("303")}} (Veja também) sempre levam ao uso do método {{HTTPMethod("GET")}}, {{HTTPStatus("307")}} (Redirecionamento Temporário) e {{HTTPStatus("308")}} (Redirecionamento Permanente) não mudam o método utilizado na requisição original;
- {{HTTPStatus("301")}} (Movido Permanentemente) e {{HTTPStatus("302")}} (Encontrado) não mudam o método na maior parte das vezes, entretanto agentes de usuário antigos talvez mudem (basicamente você não sabe se eles farão isso).

Todas as respostas com um desses códigos de status enviam um cabeçalho `Location`.

Em casos de recursos de criação, ele indica o URL para o novo recurso criado.

`Location` e {{HTTPHeader("Content-Location")}} são diferentes: `Location` indica o alvo de redirecionamento (ou URL do novo recurso criado), enquanto {{HTTPHeader("Content-Location")}} indica o URL direto para ter acesso ao recurso quando [negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation) acontecer, sem a necessidade de futura negociação de conteúdo. `Location` é um cabeçalho associado com a resposta, enquanto {{HTTPHeader("Content-Location")}} é associado com a entidade retornada.

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
Location: <url>
```

## Diretivas

- \<url>
  - : Uma URL relativa (ao URL de requisição) ou absoluta.

## Exemplos

```
Location: /index.html
```

## Especificações

| Especificação                        | Título                                                        |
| ------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "Location", "7.1.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Location")}}

## Veja também

- {{HTTPHeader("Content-Location")}}
- Código de status de respostas que incluem o cabeçalho `Location`: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.

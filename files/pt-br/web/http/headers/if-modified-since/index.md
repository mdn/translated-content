---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
---

{{HTTPSidebar}}

A requisição do cabeçalho HTTP **`If-Modified-Since`** torna a requisição condicional: o servidor enviará de volta o recurso solicitado, com um status {{HTTPStatus("200")}}, apenas se foi modificado pela ultima vez após a data fornecida. Se a requisição não foi modificada, a resposta será um {{HTTPStatus("304")}} sem qualquer corpo; o cabeçalho {{HTTPHeader("Last-Modified")}} irá conter a data da ultima modificação. Ao contrário {{HTTPHeader("If-Unmodified-Since")}}, `If-Modified-Since` pode ser apenas utilizado com um {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}.

Quando utilizado em combinação com {{HTTPHeader("If-None-Match")}}, é ignorado, a menos que não suporte `If-None-Match`.

O uso mais comum é para atualizar uma entidade em cache que não tem um {{HTTPHeader("ETag")}} associado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
If-Modified-Since: <nome-dia>, <dia> <mês> <ano> <hora>:<minuto>:<segundo> GMT
```

## Diretivas

- \<nome-dia>
  - : Um entre "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (sensível ao caso).
- \<dia>
  - : 2 digitos, número do dia. Por exemplo "04" ou "23".
- \<mês>
  - : Um entre "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (sensível ao caso).
- \<ano>
  - : 4 digitos, número do ano,. Por exemplo. "1990" ou "2016".
- \<hora>
  - : 2 digitos, número da hora. Por exemplo. "09" ou "23".
- \<minuto>
  - : 2 digiitos, número do minuto. Por exemplo. "04" ou "59".
- \<segundos>
  - : 2 digitos, número dos segundos, Por exemplo. "04" ou "59".
- `GMT`
  - : Horário de Greenwich (Greenwich Mean Time). Datas HTTP sempre são expressas em GMT, nunca em tempo local.

## Exemplos

```
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Especificações

| Especificação                               | Título                                                       |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Modified-Since", "3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.If-Modified-Since")}}

## Veja também

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`

---
title: If-Range
slug: Web/HTTP/Headers/If-Range
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`If-Range`** faz uma requisição de intervalo condicional: se a condição é realizada, a requisição de intervalo será enviada e o servidor mandará de volta como resposta um {{HTTPStatus("206")}} `Partial Content` com o corpo apropriado. Se a condição não é realizada, a recurso inteiro é enviado de volta, com um código de status {{HTTPStatus("200")}} `OK`.

Este cabeçalho pode ser usado ou com um validador {{HTTPHeader("Last-Modified")}}, ou com um {{HTTPHeader("ETag")}}, mas não com ambos.

O caso de uso mais comum é continuar um _download_, para garantir que o recurso guardado não tenha sido modificado desde o último fragmento que foi recebido.

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

## Sintaxe

```
If-Range: <nome-dia>, <dia> <mês> <ano> <hora>:<minuto>:<segundo> GMT
If-Range: <etag>
```

## Diretivas

- \<etag>
  - : _Tags_ de entidade que representam unicamente os recursos requisitados. Eles são uma cadeia de caracteres ASCII colocados entre aspas duplas (como `"675af34563dc-tr34"`). Elas podem ser prefixadas por `W/` para indicar que o _algoritmo de comparação fraco_ deve ser utilizado.
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
- \<segundo>
  - : 2 digitos, número dos segundo, Por exemplo. "04" ou "59".
- `GMT`
  - : Horário de Greenwich (Greenwich Mean Time). Datas HTTP sempre são expressas em GMT, nunca em tempo local.

## Exemplos

```
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Especificações

| Especificação                      | Título                                                 |
| ---------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "If-Range", "3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.If-Range")}}

## Veja também

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("206")}} `Partial Content`
- [Requisições Condicionais HTTP](/pt-BR/docs/Web/HTTP/Conditional_requests)

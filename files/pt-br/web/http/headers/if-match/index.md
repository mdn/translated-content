---
title: If-Match
slug: Web/HTTP/Headers/If-Match
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`If-Match`** faz a requisição condicional. Para métodos {{HTTPMethod("GET")}} e {{HTTPMethod("HEAD")}}, o servidor irá mandar de volta o recurso requisitado somente se ele corresponde com uma das `ETags` listadas. Para {{HTTPMethod("PUT")}} e outros métodos não-seguros, ele somente irá fazer o upload do recurso neste caso.

A comparação com a {{HTTPHeader("ETag")}} guardada usa o _algoritmo de comparação forte_, significa dois arquivos são considerados idênticos _byte_ a _byte_ somente. Se a `ETag` listada com o prefixo `W/` indicando a _tag_ como uma entidade fraca, ele nunca irá combinar usando este algoritmo de comparação.

Existem dois casos de uso comuns:

- Para os métodos {{HTTPMethod("GET")}} e {{HTTPMethod("HEAD")}}, utilizado em combinação com o cabeçalho {{HTTPHeader("Range")}}, ele pode garantir que novos intervalos requisitados venham do mesmo recurso ao invés do anterior. Se ele não corresponde, então uma resposta {{HTTPStatus("416")}} (Range Not Satisfiable) é retornarda.
- Para outros métodos, e em particular para o método {{HTTPMethod("PUT")}}, `If-Match` pode ser usado para previnir o [problema de perde de atualização](https://www.w3.org/1999/04/Editing/#3.1). Ele pode checar se a modificação de um recurso que o usuário que fazer o upload não sobrescreverá outra modificação que foi feita desde que o recurso original foi buscado. Se a requisição não puder ser completada, a resposta {{HTTPStatus("412")}} (Precondition Failed) é retornada.

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
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## Diretivas

- \<etag_value>
  - : _Tags_ de entidade que representam unicamente os recursos requisitados. Eles são uma cadeia de caracteres ASCII colocados entre aspas duplas (como `"675af34563dc-tr34"`). Elas podem ser prefixadas por `W/` para indicar que elas são "fracas", i.e. que elas representam o recurso semânticamente, mas não byte-por-byte. Entretanto, em um cabeçalho **`If-Match`**, _tags_ de entidade fraca nunca irão corresponder.
- `*`
  - : O asterísco é um valor especial representando qualquer recurso.

## Exemplos

```
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
```

## Especificações

| Especificação                      | Título                                                       |
| ---------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Match", "3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.If-Match")}}

## Veja também

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("416")}} `Range Not Satisfiable`
- {{HTTPStatus("412")}} `Precondition Failed`

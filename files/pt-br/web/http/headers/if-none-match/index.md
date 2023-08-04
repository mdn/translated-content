---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`If-None-Match`** faz uma requisição condicional. Para os métodos {{HTTPMethod("GET")}} e {{HTTPMethod("HEAD")}}, o servidor irá mandar de volta o recurso requisitado, com um código de status {{HTTPStatus("200")}}, somente se ele não tiver um {{HTTPHeader("ETag")}} correspondendo as _tags_ dadas pela requisição. Para outros métodos, a requisição será processada somente o recurso existente eventualmente não possuir nenhuma {{HTTPHeader("ETag")}} correspondente nos valores listados.

Quando a condição falha para métodos {{HTTPMethod("GET")}} e {{HTTPMethod("HEAD")}}, então o servidor deve retornar um código de status HTTP 304 (Not Modified). Para outros métodos que aplicam mudanças no lado do servidor, o código de status 412 (Precondition Failed) é utilizado. Note que o servidor gerando uma resposta 304 DEVE gerar qualquer um dos seguintes cabeçalhos que seriam enviados em uma resposta 200 (OK) para a mesma requisição: Cache-Control, Content-Location, Date, ETag, Expires, and Vary.

A comparação com a {{HTTPHeader("ETag")}} guardada usa o _algoritmo de comparação fraco_, significa que dois arquivos são considerados idênticos se o conteúdo é equivalente — eles não precisam ser idênticos _byte_ por _byte_. Por exemplo, duas páginas que diferem pela data de sua geração no rodapé ainda assim serão consideradas como idênticas.

Quando usado em combinação com {{HTTPHeader("If-Modified-Since")}}, **`If-None-Match`** tem precedência (se o servidor suporta isso).

Existem dois casos de uso comuns:

- Para métodos {{HTTPMethod("GET")}} e {{HTTPMethod("HEAD")}}, para atualizar uma entidade cacheada que possui um {{HTTPHeader("ETag")}} associado.
- Para outros métodos, e em particular para {{HTTPMethod("PUT")}}, `If-None-Match` usado com o valor `*` pode ser utilizado para salvar um arquivo que não se sabia existir, garantindo que outro _upload_ não tenha acontecido anteriormente, perdendo os dados do _PUT_ anterior; esse problema é uma variação do [problema de perda de atualização](https://www.w3.org/1999/04/Editing/#3.1).

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
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## Diretivas

- \<etag_value>
  - : _Tags_ de entidade que representam unicamente os recursos requisitados. Eles são uma cadeia de caracteres ASCII colocados entre aspas duplas (como `"675af34563dc-tr34"`). Elas podem ser prefixadas por `W/` para indicar que o _algoritmo de comparação fraco_ deve ser utilizado (Isso é inútil com `If-None-Match` por ele utilizar somente este algoritmo).
- `*`
  - : O asterísco é um valor especial representando qualquer recurso. Eles somente são úteis quando fazendo o _upload_ de um recurso, geralmente com {{HTTPMethod("PUT")}}, para checar se outro recurso com a identidade já teve seu _upload_ feito anteriormente.

## Exemplos

```
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## Especificações

| Especificação                           | Título                                                       |
| --------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-None-Match", "3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.If-None-Match")}}

## Veja também

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`

---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Access-Control-Allow-Credentials`** diz aos navegadores se a resposta deve ser exposta ao código _frontend_ JavaScript quando o modo de credenciais da requisição ({{domxref("Request.credentials")}}) é `include`.

Quando o modo de credenciais da requisição ({{domxref("Request.credentials")}}) é `include`, navegadores vão somente expor a resposta ao código _frontend_ JavaScript se o valor de `Access-Control-Allow-Credentials` for `true`.

Credenciais são _cookies_, cabeçalhos de autorização ou certificados de cliente TLS.

Quando usado como parte de uma resposta a uma requisição pré-vôo (_preflight)_, isso indica se a requisição atual vai ou não ser feita usando credenciais. Note que uma simples requisição {{HTTPMethod("GET")}} não é feita com pré-vôo, e se uma requisição é feita para um recurso usando credenciais, se o cabeçalho não é retornado com o recurso, a resposta é ignorada pelo navegador e não é retornada ao conteúdo web.

O cabeçalho `Access-Control-Allow-Credentials` funciona em conjunto com a propriedade {{domxref("XMLHttpRequest.withCredentials")}} ou com a opção `credentials` na construtor da {{domxref("Request.Request()", "Request()")}} na Fetch API. Para requisições CORS com credenciais, para que os navegadores exponham a resposta ao código _frontend_ JavaScript, ambos o servidor (usando o cabeçalho `Access-Control-Allow-Credentials`) e o cliente (colocando o modo de credenciais para o XHR, Fetch, ou requisição Ajax) devem indicar que eles estão optando por incluir as credenciais.

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
Access-Control-Allow-Credentials: true
```

## Diretivas

- true
  - : O único valor válido para este cabeçalho é `true` (case-sensitive). Se você não precisa de credenciais, omita este cabeçalho inteiramente (ao invés de colocar seu valor para `false`).

## Exemplos

Permitindo credenciais:

```
Access-Control-Allow-Credentials: true
```

Usando [XHR](/pt-BR/docs/Web/API/XMLHttpRequest) com credenciais:

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

Usando [Fetch](/pt-BR/docs/Web/API/Fetch_API) com credenciais:

```js
fetch(url, {
  credentials: "include",
});
```

## Especificações

| Especificação                                                                                      | Status             | Comentário        |
| -------------------------------------------------------------------------------------------------- | ------------------ | ----------------- |
| {{SpecName('Fetch','#http-access-control-allow-credentials', 'Access-Control-Allow-Credentials')}} | {{Spec2("Fetch")}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("http.headers.Access-Control-Allow-Credentials")}}

## Veja também

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}

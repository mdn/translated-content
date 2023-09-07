---
title: Request
slug: Web/API/Request
---

{{APIRef("Fetch")}}

A interface **`Request`** da [Fetch API](/pt-BR/docs/Web/API/Fetch_API) representa uma requisição de recursos.

Você pode criar um novo objeto `Request` usando o construtor {{domxref("Request.Request()")}}, porém é mais provável que você encontre um objeto `Request` que seja retornado como resultado de outra operação de API, como um service worker {{domxref("FetchEvent.request")}}.

## Construtor

- {{domxref("Request.Request()")}}
  - : Cria um novo objeto `Request`.

## Propriedades

- {{domxref("Request.method")}} {{readonlyInline}}
  - : Contém o método da requisição (`GET`, `POST` etc.)
- {{domxref("Request.url")}} {{readonlyInline}}
  - : Contém a URL da requisição.
- {{domxref("Request.headers")}} {{readonlyInline}}
  - : Contém o objeto {{domxref("Headers")}} associado à requisição.
- {{domxref("Request.context")}} {{readonlyInline}} {{deprecated_inline()}}
  - : Contém o contexto da requisição (ex., `audio`, `image`, `iframe` etc.)
- {{domxref("Request.referrer")}} {{readonlyInline}}
  - : Contém a referência da requisição (ex., `client`).
- {{domxref("Request.referrerPolicy")}} {{readonlyInline}}
  - : Contém a política de referência da requisição (ex., `no-referrer`).
- {{domxref("Request.mode")}} {{readonlyInline}}
  - : Contém o modo da requisição (ex., `cors`, `no-cors`, `same-origin`, `navigate`.)
- {{domxref("Request.credentials")}} {{readonlyInline}}
  - : Contém a credencial da requisição (Ex., `omit`, `same-origin`, `include`).
- {{domxref("Request.redirect")}} {{readonlyinline}}
  - : Contém o modo de como os redirecionamentos serão tratados. Pode ser: `follow`, `error` ou `manual`.
- {{domxref("Request.integrity")}} {{readonlyInline}}
  - : Contém o valor da [subresource integrity](/pt-BR/docs/Web/Security/Subresource_Integrity) da requisição (ex., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- {{domxref("Request.cache")}} {{readonlyInline}}
  - : Contém o modo de cache da requisição (ex., `default`, `reload`, `no-cache`).

`Request` implementa {{domxref("Body")}}, então também possui as seguintes propriedades disponíveis:

- {{domxref("Body.body")}} {{readonlyInline}}
  - : Um simples "getter" para ler o conteúdo do corpo através da interface {{domxref("ReadableStream")}}.
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Armazena um {{domxref("Boolean", "Booleano")}} que declara se o corpo da requisição já foi utilizado em uma resposta.

## Métodos

- {{domxref("Request.clone()")}}
  - : Cria uma cópia atual do objeto `Request`.

`Request` implementa {{domxref("Body")}}, então também possui os seguintes métodos disponíveis:

- {{domxref("Body.arrayBuffer()")}}
  - : Retorna um objeto do tipo promise que resolve um {{domxref("ArrayBuffer")}} com a representação do corpo da requisição.
- {{domxref("Body.blob()")}}
  - : Retorna um objeto do tipo promise que resolve um {{domxref("Blob")}} com a representação do corpo da requisição.
- {{domxref("Body.formData()")}}
  - : Retorna um objeto do tipo promise que resolve um {{domxref("FormData")}} com a representação do corpo da requisição.
- {{domxref("Body.json()")}}
  - : Retorna um objeto do tipo promise que resolve um {{domxref("JSON")}} com a representação do corpo da requisição.
- {{domxref("Body.text()")}}
  - : Retorna um objeto do tipo promise que resolve um {{domxref("USVString")}} (texto) com a representação do corpo da requisição.

> **Nota:** Os métodos de {{domxref("Body")}} só poderão ser executadas apenas uma vez; As chamadas subsequentes serão resolvidas com strings/ArrayBuffers vazias.

## Exemplos

No exemplo a seguir, nós criamos uma nova requisição utilizando o construtor `Request()` (para um arquivo de imagem no mesmo diretório do código) e, em seguida, nos retorna alguns valores das propriedades da requisição:

```js
const myRequest = new Request("http://localhost/flowers.jpg");

const myURL = myRequest.url; // http://localhost/flowers.jpg
const myMethod = myRequest.method; // GET
const myCred = myRequest.credentials; // omit
```

Você poderá, então, solicitar uma nova requisição passando o objeto `Request` como parâmetro para a chamada {{domxref("GlobalFetch.fetch()")}}, por exemplo:

```js
fetch(myRequest)
  .then((response) => response.blob())
  .then((blob) => {
    myImage.src = URL.createObjectURL(blob);
  });
```

No exemplo a seguir, nós criamos uma nova requisição utilizando o construtor `Request()` com alguns valores iniciais e contendo o corpo para APIs que precisam processar essas informações:

```js
const myRequest = new Request("http://localhost/api", {
  method: "POST",
  body: '{"foo":"bar"}',
});

const myURL = myRequest.url; // http://localhost/api
const myMethod = myRequest.method; // POST
const myCred = myRequest.credentials; // omit
const bodyUsed = myRequest.bodyUsed; // true
```

> **Nota:** O tipo do corpo poderá ser apenas: {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} ou {{domxref("ReadableStream")}}. Para adicionar um objeto JSON ao corpo, é necessário converter esse objeto para string.

Você poderá, então, solicitar uma nova requisição passando o objeto `Request` como parâmetro para a chamada {{domxref("GlobalFetch.fetch()")}}, por exemplo, e poderá capturar a resposta da seguinte forma:

```js
fetch(myRequest)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Ops! Houve um erro em nosso servidor.");
    }
  })
  .then((response) => {
    console.debug(response);
    // ...
  })
  .catch((error) => {
    console.error(error);
  });
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [ServiceWorker API](/pt-BR/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/pt-BR/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/pt-BR/docs/Web/HTTP)

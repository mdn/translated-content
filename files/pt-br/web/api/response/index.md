---
title: Response
slug: Web/API/Response
---

{{APIRef("Fetch API")}}

A interface **`Response`** da [Fetch API](/pt-BR/docs/Web/API/Fetch_API) representa a resposta para uma requisição.

Você pode criar um novo objeto `Response` usando o construtor {{domxref("Response.Response()")}}, porém é mais provável você encontrar um objeto Response sendo retornado como o resultado de uma outra operação da API, por exemplo um service worker {{domxref("Fetchevent.respondWith")}}, ou um simples {{domxref("GlobalFetch.fetch()")}}.

## Construtor

- {{domxref("Response.Response","Response()")}}
  - : Cria um novo objeto `Response`.

## Propriedades

- {{domxref("Response.headers")}} {{readonlyinline}}
  - : Contém o objeto {{domxref("Headers")}} associado à resposta.
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : Contém um valor booleano indicando se a resposta foi bem sucedida ("status" no intervalo 200-299) ou não.
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : Indica se a resposta é ou não o resultado de um redirecionamento; isto é, sua lista de URL tem mais de uma entrada.
- {{domxref("Response.status")}} {{readonlyinline}}
  - : Contém o código de "status" da resposta (ex., `200` para um sucesso).
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : Contém a mensagem de "status" correspondente ao código de "status" (ex., `OK` para `200`).
- {{domxref("Response.type")}} {{readonlyinline}}
  - : Contém o tipo da resposta (ex., `basic`, `cors`).
- {{domxref("Response.url")}} {{readonlyinline}}
  - : Contém a URL de resposta.
- {{domxref("Response.useFinalURL")}}
  - : Contém um valor boleano indicando se essa é a URL final da resposta.

`Response` implementa {{domxref("Body")}}, por isso também tem as seguintes propriedades disponíveis:

- {{domxref("Body.body")}} {{readonlyInline}}
  - : Um simples "getter" para ler do conteúdo do corpo através da interface {{domxref("ReadableStream")}}.
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Armazena um {{domxref("Boolean")}} que indica se o corpo já foi utilizado em uma resposta.

## Métodos

- {{domxref("Response.clone()")}}
  - : Cria uma cópia do objeto `Response`.
- {{domxref("Response.error()")}}
  - : Retorna um novo objeto `Response` associado a um erro de rede.
- {{domxref("Response.redirect()")}}
  - : Cria uma nova resposta com uma URL diferente.

`Response` implementa {{domxref("Body")}}, por isso também tem as seguintes propriedades disponíveis:

- {{domxref("Body.arrayBuffer()")}}
  - : Recebe um "stream" {{domxref("Response")}} e lê até a conclusão. Retorna uma "promise" que resolve com um {{domxref("ArrayBuffer")}}.
- {{domxref("Body.blob()")}}
  - : Recebe um "stream" {{domxref("Response")}} e lê até a conclusão. Retorna uma "promise" que resolve com um {{domxref("Blob")}}.
- {{domxref("Body.formData()")}}
  - : Recebe um "stream" {{domxref("Response")}} e lê até a conclusão. Retorna uma "promise" que resolve com um objeto {{domxref("FormData")}}.
- {{domxref("Body.json()")}}
  - : Recebe um "stream" {{domxref("Response")}} e lê até a conclusão. Retorna uma "promise" que resolve com o resultado do parseamento do texto do corpo como {{jsxref("JSON")}}.
- {{domxref("Body.text()")}}
  - : Recebe um "stream" {{domxref("Response")}} e lê até a conclusão. Retorna uma "promise" que resolve com um {{domxref("USVString")}} (texto).

## Exemplos

Em nosso [exemplo básico fetch](https://github.com/mdn/fetch-examples/tree/master/basic-fetch) ([executar exemplo live](http://mdn.github.io/fetch-examples/basic-fetch/)) nós usamos uma simples chamada `fetch()` para pegar uma imagem e exibi-la em uma tag {{htmlelement("img")}}. A chamada `fetch()` retorna uma "promise", que resolve com o objeto `Response` associado com o recurso da operação "fetch". Você irá notar que como estamos solicitando uma imagem, nós precisamos executar {{domxref("Body.blob")}} ({{domxref("Response")}} implementa o "body") para dar à resposta seu tipo MIME correto.

```js
var myImage = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then(function (response) {
    return response.blob();
  })
  .then(function (blob) {
    var objectURL = URL.createObjectURL(blob);
    myImage.src = objectURL;
  });
```

Você também pode usar o construtor {{domxref("Response.Response()")}} para criar seu objeto `Response` personalizado:

```js
var myResponse = new Response();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [ServiceWorker API](/pt-BR/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/pt-BR/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/pt-BR/docs/Web/HTTP)

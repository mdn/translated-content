---
title: Request()
slug: Web/API/Request/Request
---

{{APIRef("Fetch")}}

O construtor **`Request()`** cria um novo objeto {{domxref("Request")}}.

## Sintaxe

```
var myRequest = new Request(input[, init]);
```

### Parâmetros

- _input_

  - : Define o recurso que você deseja buscar. Isso pode ser:

    - Um {{domxref("USVString")}} contendo o URL direto do recurso que você deseja buscar.
    - Um objeto {{domxref("Request")}}, criando efetivamente uma cópia. Observe as seguintes atualizações comportamentais para reter a segurança e, ao mesmo tempo, tornar o construtor menos propenso a gerar exceções:

      - Se esse objeto existir em outra origem para a chamada do construtor, o {{domxref("Request.referrer")}} será removido.
      - Se esse objeto tiver um {{domxref("Request.mode")}} de navegação, o valor do modo será convertido para a mesma origem.

- _init_ {{optional_inline}}

  - : Um objeto de opções contendo quaisquer configurações personalizadas que você deseja aplicar à solicitação. As opções possíveis são:

    - `method`: O método de request, ex: `GET`, `POST`.
    - `headers`: Quaisquer cabeçalhos que você deseja adicionar à sua solicitação, contidos em um objeto {{domxref("Headers")}} ou em um objeto literal com valores de {{domxref("ByteString")}}.
    - `body`: Qualquer corpo que você deseja adicionar à sua solicitação: isso pode ser um {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}}, ou objeto {{domxref("ReadableStream")}}. Observe que uma solicitação usando o método GET ou HEAD não pode ter um corpo.
    - `mode`: O modo que você deseja usar para a solicitação, por exemplo: `cors`, `no-cors`, `same-origin`, or `navigate`. O padrão é `cors`. No Chrome o padrão é `no-cors` antes do Chrome 47 e `same-origin` do Chrome 47 em diante.
    - `credentials`: As credenciais de solicitação que você deseja usar para a solicitação: `omit`, `same-origin`, ou `include`. O padrão é `omit`. No Chrome o padrão é `same-origin` antes do Chrome 47 e `include` do Chrome 47 em diante.
    - `cache`: O [cache mode](/pt-BR/docs/Web/API/Request/cache) que você deseja usar para a solicitação.
    - `redirect`: O modo de redirecionamento para usar: `follow`, `error`, or `manual`. No Chrome o padrão é `follow` (antes do Chrome 47 foi padronizado `manual`).
    - `referrer`: Um {{domxref("USVString")}} especificando `no-referrer`, `client`, ou uma URL. O padrão é `client`.
    - `integrity`: Contém o [valor de integridade do sub-recurso](/pt-BR/docs/Web/Security/Subresource_Integrity) da solicitação (exemplo: `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

## Erros

| Tipo        | Descrição                                                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError` | Desde [Firefox 43](/pt-BR/docs/Mozilla/Firefox/Releases/43), `Request()` lançará um TypeError se o URL tiver credenciais, tal como `http://user:password@example.com`. |

## Exemplo

Em nosso [exemplo Fetch Request](https://github.com/mdn/fetch-examples/tree/master/fetch-request-with-init)(veja [Fetch Request live](http://mdn.github.io/fetch-examples/fetch-request/)) nós criamos um novo objeto `Request` usando o construtor, em seguida, busque-o usando uma chamada {{domxref("GlobalFetch.fetch")}}. Como estamos buscando uma imagem, executamos o {{domxref("Body.blob")}} na resposta para fornecer o tipo MIME adequado para que ela seja manipulada corretamente. Em seguida, criamos uma URL do objeto e a exibimos em um Elemento {{htmlelement("img")}}.

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

Em nosso [Fetch Request with init example](https://github.com/mdn/fetch-examples/tree/master/fetch-request-with-init) (veja [Fetch Request init live](http://mdn.github.io/fetch-examples/fetch-request-with-init/)) nós fazemos a mesma coisa, exceto que passamos em um objeto init quando invocamos `fetch()`:

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg',myInit);

fetch(myRequest).then(function(response) {
  ...
});
```

Observe que você também pode passar o objeto init para a chamada `fetch` para obter o mesmo efeito, por exemplo:

```js
fetch(myRequest,myInit).then(function(response) {
  ...
});
```

Você também pode usar um literal de objeto como `headers` em `init`.

```js
var myInit = {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);
```

Você também pode passar um objeto {{domxref ("Request")}} para o construtor `Request()` para criar uma cópia do Request (isso é semelhante a chamar o método {{domxref("Request.clone", "clone()")}} .)

```js
var copy = new Request(myRequest);
```

> **Nota:** Este último uso é provavelmente útil apenas em [ServiceWorkers](/pt-BR/docs/Web/API/ServiceWorker_API).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [ServiceWorker API](/pt-BR/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/pt-BR/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/pt-BR/docs/Web/HTTP)

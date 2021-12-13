---
title: fetch()
slug: Web/API/fetch
translation_of: Web/API/fetch
tags:
  - API
  - Experimental
  - Fetch
  - Fetch API
  - GlobalFetch
  - Method
  - Reference
  - request
browser-compat: api.fetch
---

{{APIRef("Fetch API")}}

O método global **`fetch()`** inicia o processo de busca de um recurso da rede, retornando uma promessa que é cumprida assim que a resposta estiver disponível.

A promessa é resolvida para o objeto {{domxref("Response")}} que representa a resposta à sua solicitação. A promessa _não_ rejeita erros de HTTP - apenas rejeita erros de rede. Você deve usar os manipuladores `then` para chechar erros de HTTP.

`WindowOrWorkerGlobalScope` é implementado por {{domxref("Window")}} e
{{domxref("WorkerGlobalScope")}}, o que significa que o método `fetch()` está disponível em praticamente qualquer contexto no qual você queira buscar recursos.

Uma promessa {{domxref("fetch()")}} só é rejeitada quando um erro de rede é encontrado (que é geralmente quando há um problema de permissão ou
similar). Uma promessa {{domxref("fetch()")}} _não_ rejeita erros HTTP (`404`, etc.). Em vez disso, um manipulador
`then()` deve checar as propriedades {{domxref("Response.ok")}} e/ou
{{domxref("Response.status")}}.

O método `fetch()` é controlado pela diretiva `connect-src` da [Content Security Policy](/pt-BR/docs/Web/HTTP/Headers/Content-Security-Policy) em vez da diretiva dos recursos que está recuperando.

> **Note:** Os parâmetros do método `fetch()` são idênticos 
> aos do construtor {{domxref("Request.Request","Request()")}}.

## Sintaxe

```js
const fetchResponsePromise = fetch(resource [, init])
```

### Parâmetros

- `resource`

  - : Isto define o recurso que você deseja buscar. Isto pode ser:

    - String ou qualquer outro objeto com um [stringifier](/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file#stringifiers) — incluindo um objeto {{domxref("URL")}} — que fornece a URL do recurso que você deseja buscar.
    - Um objeto {{domxref("Request")}}.

- `init` {{optional_inline}}

  - : Um objeto contendo quaisquer configurações customizadas que você deseja aplicar à solicitação. As opções possíveis são:

    - `method`
      - : O método da requisição, por exemplo `GET`, `POST`. Observe que o cabeçalho
        {{httpheader("Origin")}} não é definido em requisições Fetch com um método de
        {{HTTPMethod("HEAD")}} ou {{HTTPMethod("GET")}}.
        (Este comportamento foi corrigido no Firefox 65 — consulte {{bug(1508661)}}).
    - `headers`
      - : Qualquer cabeçalho que você queira adicionar à sua requisição, contido dentro de um objeto
        {{domxref("Headers")}} ou um objeto literal com valores {{jsxref("String")}}. Observe que [alguns nomes são proibidos](/en-US/docs/Glossary/Forbidden_header_name).
    - `body`
      - : Qualquer corpo que você queira adicionar à sua requisição: podendo ser um
        {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}},
        {{domxref("URLSearchParams")}}, {{domxref("USVString")}}, ou um objeto
        {{domxref("ReadableStream")}}. Note que uma requisição usando os métodos
        `GET` or `HEAD` não pode ter um corpo.
    - `mode`
      - : O modo que deseja usar para a requisição, por exemplo, `cors`,
        `no-cors`, ou `same-origin`.
    - `credentials`

      - : Controla o que os navegadores fazem com as credenciais ([cookies](/pt-BR/docs/Web/HTTP/Cookies), entradas de [Autenticação HTTP](/pt-BR/docs/Web/HTTP/Authentication), e certificados de cliente TLS). Deve ser uma das seguintes strings:

        - `omit`
          - : Diz aos navegadores para excluir credenciais da requisição, e ignorar quaisquer credenciais enviadas de volta na resposta (por exemplo, qualquer cabeçalho {{HTTPHeader("Set-Cookie")}}).
        - `same-origin`
          - : Diz aos navegadores para incluir credenciais com requisições para URLs da mesma origem, e usar quaisquer credenciais enviadas de volta nas respostas de URLs da mesma origem.
        - `include`

          - : Diz aos navegadores para incluir credenciais em ambas requisições `same-origin` e `cross-origin`, e sempre use as credenciais enviadas de volta nas respostas.

            > **Note:** As credenciais podem ser incluídas em requisições cross-origin simples e "finais", mas não devem ser incluídas em [requisições de comprovação de CORS](/en-US/docs/Web/HTTP/CORS#preflight_requests_and_credentials).

    - `cache`
      - : A string indicating how the request will interact with the browser’s [HTTP cache](/en-US/docs/Web/HTTP/Caching). The possible values, `default`, `no-store`, `reload`, `no-cache`, `force-cache`, and `only-if-cached`, are documented in the article for the {{domxref("Request/cache", "cache")}} property of the {{domxref("Request")}} object.
    - `redirect`

      - : How to handle a `redirect` response:

        - `follow`: Automatically follow redirects. Unless otherwise stated the redirect mode is set to `follow`
        - `error`: Abort with an error if a redirect occurs.
        - `manual`: Caller intends to process the response in another context.
          See [WHATWG fetch standard](https://fetch.spec.whatwg.org/#requests) for more information.

    - `referrer`
      - : A {{domxref("USVString")}} specifying the referrer of the request. This can be a
        same-origin URL, `about:client`, or an empty string.
    - `referrerPolicy`
      - : Specifies the [referrer
        policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies) to use for the request. May be one of `no-referrer`,
        `no-referrer-when-downgrade`, `same-origin`,
        `origin`, `strict-origin`,
        `origin-when-cross-origin`,
        `strict-origin-when-cross-origin`, or `unsafe-url`.
    - `integrity`
      - : Contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
        value of the request (e.g.,
        `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
    - `keepalive`
      - : The `keepalive` option can be used to allow the request to outlive
        the page. Fetch with the `keepalive` flag is a replacement for the
        {{domxref("Navigator.sendBeacon()")}} API.
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance; allows you to communicate with a
        fetch request and abort it if desired via an {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("Response")}} object.

### Exceptions

- `AbortError`
  - : The request was aborted due to a call to the {{domxref("AbortController")}}
    {{domxref("AbortController.abort", "abort()")}} method.
- `TypeError`
  - : Can occur for the following reasons:

<table>
  <thead>
    <tr>
      <th scope="col">Reason</th>
      <th scope="col">Failing examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Invalid header name</td>
      <td>
        <pre>
// space in "C ontent-Type"
const headers = {
    "C ontent-Type": "text/xml",
    "Breaking-Bad": "<3"
};
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Invalid header value. The header object must contain exactly two elements.
      </td>
      <td>
        <pre>
const headers = [
    ["Content-Type", "text/html", "extra"],
    ["Accept"],
];
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Invalid URL or scheme, or using a scheme that fetch does not support, or using a scheme that is not supported for a particular request mode.
      </td>
      <td>
        <pre>
fetch('blob://example.com/', { mode: 'cors' })
        </pre>
      </td>
    </tr>
      <td>URL includes credentials</td>
      <td>
        <pre>
fetch('https://user:password@example.com/')
        </pre>
      </td>
    <tr>
      <td>Invalid referrer URL</td>
      <td>
        <pre>
fetch('https://example.com/', {
  referrer: './abc\u0000df'
})
        </pre>
      </td>
    </tr>
    <tr>
      <td>Invalid modes (<code>navigate</code> and <code>websocket</code>)</td>
      <td>
        <pre>
fetch('https://example.com/', { mode: 'navigate' })
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        If the request cache mode is "only-if-cached" and the request mode is other than "same-origin".
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  cache: 'only-if-cached',
  mode: 'no-cors'
})
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        If the request method is an invalid name token or one of forbidden headers.
        CONNECT, TRACE or TRACK
      </td>
      <td>
        <pre>
fetch('https://example.com/', { method: 'CONNECT' })
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        If the request mode is "no-cors" and the request method is not a CORS-safe-listed method (GET, HEAD, or POST)
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'CONNECT',
  mode: 'no-cors'
})
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        If the request method is GET or HEAD and the body is non-null or not undefined.
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData()
})
        </pre>
      </td>
    </tr>
    <tr>
      <td>If fetch throws a network error.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Examples

In our [Fetch
Request example](https://github.com/mdn/fetch-examples/tree/master/fetch-request) (see [Fetch Request live](https://mdn.github.io/fetch-examples/fetch-request/)) we
create a new {{domxref("Request")}} object using the relevant constructor, then fetch it
using a `fetch()` call. Since we are fetching an image, we run
{{domxref("Response.blob()")}} on the response to give it the proper MIME type so it will be
handled properly, then create an Object URL of it and display it in an
{{htmlelement("img")}} element.

```js
const myImage = document.querySelector('img');

let myRequest = new Request('flowers.jpg');

fetch(myRequest)
.then(function(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
})
.then(function(response) {
  let objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});
```

In the [Fetch
with init then Request example](https://github.com/mdn/fetch-examples/blob/master/fetch-with-init-then-request/index.html) (see [Fetch
Request init live](https://mdn.github.io/fetch-examples/fetch-with-init-then-request/)), we do the same thing except that we pass in an
`init` object when we invoke `fetch()`:

```js
const myImage = document.querySelector('img');

let myHeaders = new Headers();
myHeaders.append('Accept', 'image/jpeg');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('flowers.jpg');

fetch(myRequest, myInit).then(function(response) {
  // ...
});
```

You could also pass the `init` object in with the
`Request` constructor to get the same effect:

```js
let myRequest = new Request('flowers.jpg', myInit);
```

You can also use an object literal as `headers` in
`init`.

```js
const myInit = {
  method: 'GET',
  headers: {
    'Accept': 'image/jpeg'
  },
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('flowers.jpg', myInit);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)

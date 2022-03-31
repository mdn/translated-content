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
      - : Uma string indicando como a requisição vai interagir como o [cache HTTP](/pt-BR/docs/Web/HTTP/Caching) do navegador. Os valores possíveis, `default`, `no-store`, `reload`, `no-cache`, `force-cache`, e `only-if-cached`, estão documentados no artigo para a propriedade {{domxref("Request/cache", "cache")}} do objeto {{domxref("Request")}}.
    - `redirect`

      - : Como lidar com uma resposta `redirect`:

        - `follow`: Segue os redirecionamentos automaticamente. A menos que esteja definido de outra forma, o redirecionamento é definido, por padrão, como `follow`.
        - `error`: Aborta com um erro se o redirecionamento ocorrer.
        - `manual`: O autor da chamada pretende processar a resposta em outro contexto.
          Veja [WHATWG fetch standard](https://fetch.spec.whatwg.org/#requests) para mais informações.

    - `referrer`
      - : Uma {{domxref("USVString")}} especificando o referenciador da requisição. Isso pode ser uma URL
        same-origin, `about:client`, ou uma string vazia.
    - `referrerPolicy`
      - : Especifica a [referrer
        policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies) para usar para a requisição. Pode ser `no-referrer`,
        `no-referrer-when-downgrade`, `same-origin`,
        `origin`, `strict-origin`,
        `origin-when-cross-origin`,
        `strict-origin-when-cross-origin` ou `unsafe-url`.
    - `integrity`
      - : Contém o valor [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
        da requisição (por exemplo,
        `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
    - `keepalive`
      - : A opção `keepalive` pode ser usada para permitir que a requisição sobreviva à página. A busca com a flag `keepalive` é uma substituição para a API
        {{domxref("Navigator.sendBeacon()")}}.
    - `signal`
      - : Uma instância de objeto {{domxref("AbortSignal")}}; permite comunicar com uma requisição fetch e abortá-la, se desejado, por meio de um {{domxref("AbortController")}}.

### Valor de retorno

Uma {{jsxref("Promise")}} que resolve para um objeto {{domxref("Response")}}.

### Exceções

- `AbortError`
  - : A requisição foi abortada devido a uma chamada ao {{domxref("AbortController")}} ou ao método
    {{domxref("AbortController.abort", "abort()")}}.
- `TypeError`
  - : Pode ocorrer pelos seguintes motivos:

<table>
  <thead>
    <tr>
      <th scope="col">Motivo</th>
      <th scope="col">Exemplos de falha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nome do cabeçalho inválido</td>
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
        Valor do cabeçalho inválido. O objeto header deve conter exatamente dois elementos.
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
        URL inválida ou esquema, ou está usando um esquema que fetch não suporta, ou está usando um esquema que não é suportado por um modo de requisição específico.
      </td>
      <td>
        <pre>
fetch('blob://example.com/', { mode: 'cors' })
        </pre>
      </td>
    </tr>
      <td>URL que inclui credenciais</td>
      <td>
        <pre>
fetch('https://user:password@example.com/')
        </pre>
      </td>
    <tr>
      <td>URL de referência inválida</td>
      <td>
        <pre>
fetch('https://example.com/', {
  referrer: './abc\u0000df'
})
        </pre>
      </td>
    </tr>
    <tr>
      <td>Modos inválidos (<code>navigate</code> and <code>websocket</code>)</td>
      <td>
        <pre>
fetch('https://example.com/', { mode: 'navigate' })
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Se o modo de cache da requisição é "only-if-cached" e o modo da requisição é diferente de "same-origin".
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
        Se o método da requisição for um token de nome inválido ou um dos cabeçalhos proibidos:
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
        Se o modo da requisição é "no-cors" e o método da requisição não é um método CORS-safe-listed (GET, HEAD ou POST)
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
        Se o método da requisição é GET ou HEAD e o corpo não for nulo(null) ou undefined.
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
      <td>Se fetch gera um erro de rede.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Exemplos

No nosso exemplo de [requisição Fetch](https://github.com/mdn/fetch-examples/tree/master/fetch-request) (veja [Fetch Request live](https://mdn.github.io/fetch-examples/fetch-request/)) nós criamos um novo objeto {{domxref("Request")}} usando um constructor relevante, depois buscamos isso usando uma chamada ao `fetch()`. Uma vez que estamos buscando uma imagem, executamos
{{domxref("Response.blob()")}} na resposta para dar a ela o tipo MIME adequado para que lidemos adequadamente
handled properly, então criamos um Objeto URL disso e exibimos isso em um elemento
{{htmlelement("img")}}.

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

No exemplo [Fetch
with init then Request](https://github.com/mdn/fetch-examples/blob/master/fetch-with-init-then-request/index.html) (veja [Fetch
Request init live](https://mdn.github.io/fetch-examples/fetch-with-init-then-request/)), nós fazemos a mesma coisa exceto que passamos em um objeto
`init` quando invocamos o `fetch()`:

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

Você também poderia passar o objeto `init` com o constructor
`Request` para obter o mesmo efeito:

```js
let myRequest = new Request('flowers.jpg', myInit);
```

Você também pode usar um object literal como `headers` em
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

## Especificações

{{Specifications}}

## Compatibilidade nos navegadores

{{Compat}}

## Veja também

- [Fetch API](/pt-BR/docs/Web/API/Fetch_API)
- [ServiceWorker API](/pt-BR/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/pt-BR/docs/Web/HTTP/CORS)
- [HTTP](/pt-BR/docs/Web/HTTP)

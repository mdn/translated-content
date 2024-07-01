---
title: Usando Fetch
slug: Web/API/Fetch_API/Using_Fetch
---

A [API Fetch](/pt-BR/docs/Web/API/Fetch_API) fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global {{domxref("GlobalFetch.fetch","fetch()")}} que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

Este tipo de funcionalidade era obtida anteriormente utilizando {{domxref("XMLHttpRequest")}}. Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como {{domxref("ServiceWorker_API", "Service Workers")}}. Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.

Note que a especificação `fetch()` difere de `jQuery.ajax()`, principalmente, de três formas:

- A Promise retornada do `fetch()` **não rejeitará o status do erro HTTP,** mesmo que a resposta seja um HTTP 404 ou 500. Em vez disso, ela irá resolver normalmente (com o status `ok` definido como falso), e só irá rejeitar se houver falha na rede ou se algo impedir a requisição de ser completada.
- `fetch()` **não receberá cookies cross-site;** você não pode estabelecer uma conexão cross-site usando fetch. Cabeçalhos [`Set-Cookie`](/pt-BR/docs/Web/HTTP/Headers/Set-Cookie) de outros sites são ignorados silenciosamente.
- `fetch()` **não enviará cookies**, a não ser que seja definida a opção _credentials_ do [parâmetro init](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parâmetros). (Desde [25 de agosto de 2017](https://github.com/whatwg/fetch/pull/585). A especificação alterou as políticas padrão de credenciais para `same-origin`. O Firefox mudou desde 61.0b13.)

## Situação do suporte por navegadores

Os suportes para Fetch ainda estão em uma fase bastante precoce, mas começa a ter progresso. Se tornou um padrão no Firefox 39 e Chrome 42 até as versões mais atuais.

Caso tenha interesse no uso da ferramenta, há também uma [Fetch Polyfill](https://github.com/github/fetch) disponivel que recria as funcionalidade para outros navegadores que ainda não o suporta. Fique ciente que está em estado experimental e ainda não há uma versão completa.

> **Nota:** There have been some concerns raised that the [Fetch spec](https://fetch.spec.whatwg.org/) is at odds with the [Streams spec](https://streams.spec.whatwg.org/); however, future plans show an intention to integrate Streams with Fetch: read [Fetch API integrated with Streams](https://github.com/yutakahirano/fetch-with-streams/) for more information.

## Detecção de Recursos

Fetch API support pode ser detectada na existência do escopo {{domxref("Headers")}}, {{domxref("Request")}}, {{domxref("Response")}} ou {{domxref("GlobalFetch.fetch","fetch()")}} no {{domxref("Window")}} ou {{domxref("Worker")}} . Por exemplo, faça o seguinte teste no seu código:

```js
if (self.fetch) {
  // execute minha solicitação do fetch aqui
} else {
  // faça alguma coisa com XMLHttpRequest?
}
```

## Fazendo as requisições Fetch

Uma requisição fetch é realizada para configuração. Temos um exemplo no seguinte código:

```js
var myImage = document.querySelector("img");

fetch("flowers.jpg")
  .then(function (response) {
    return response.blob();
  })
  .then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

Aqui estamos procurando uma imagem e inserindo em um elemento {{htmlelement("img")}}. O uso mais básico do`fetch()` acarreta em um argumento — a pasta do recurso que você deseja buscar — e retorna uma promessa contendo a resposta (a {{domxref("Response")}} object).

Esta é apenas uma resposta HTTP, não a imagem em sí. Para extrairmos a imagem da resposta, nós usamos o método {{domxref("Body.blob","blob()")}} (definido no mixin do {{domxref("Body")}}, que são implementados por ambos os objetos {{domxref("Request")}} e {{domxref("Response")}}.)

> **Nota:** O Body mixin além disso possui métodos similares para extrair outros tipos de conteúdo do body; Veja a sessão [Body](#body) para mais detalhes.

Um `objectURL` é criado na extração de {{domxref("Blob")}}, que então é inserido no {{domxref("img")}}.

Requisições Fetch são controladas pela directiva `connect-src` do [Content Security Policy](/pt-BR/docs/Security/CSP/CSP_policy_directives) ao invés da directiva do recurso retornado.

### Fornecendo opções de request

O método `fetch()` pode receber um segundo parametro opcional, que consiste em um objeto `init` que permite setar várias configurações:

```js
var myHeaders = new Headers();

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

fetch("flowers.jpg", myInit)
  .then(function (response) {
    return response.blob();
  })
  .then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

See {{domxref("GlobalFetch.fetch","fetch()")}} for the full options available, and more descriptions.

### Verificando se o fetch foi bem sucedido

Uma promise {{domxref("GlobalFetch.fetch","fetch()")}} será rejeitada com um {{jsxref("TypeError")}} quando um erro de rede é encontrado, embora isso geralmente signifique problemas de permissão ou similar — um 404 não constitui um erro de rede, por exemplo. Uma verificação precisa de um `fetch()` bem-sucedido incluiria a verificação de que a promessa foi resolvida e, em seguida, a verificação de que a propriedade {{domxref("Response.ok")}} tem o valor de `true`. O código seria parecido com o abaixo:

```js
fetch("flowers.jpg")
  .then(function (response) {
    if (response.ok) {
      response.blob().then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
      });
    } else {
      console.log("Network response was not ok.");
    }
  })
  .catch(function (error) {
    console.log(
      "There has been a problem with your fetch operation: " + error.message,
    );
  });
```

### Fornecendo seu próprio objeto de solicitação

Em vez de passar um caminho, para o recurso que você deseja solicitar, dentro da rquisição `fetch()`, você pode criar um objeto de solicitação usando o construtor {{domxref("Request.Request","Request()")}}, e então passar a solicitação como um argumento do método `fetch()` :

```js
var myHeaders = new Headers();

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

`Request()` aceita exatamente os mesmos parâmetros do método `fetch()`. Você pode até mesmo passar um objeto de solicitação existente para criar uma cópia dele:

```js
var anotherRequest = new Request(myRequest, myInit);
```

Isso é muito útil, pois os conteúdos de cada solicitação e resposta tem apenas um uso. Fazer uma cópia como essa permite que você use a solicitação / resposta novamente, variando as opções de inicialização, se desejar.

> **Nota:** Também existe um método que cria uma cópia: {{domxref ("Request.clone", "clone ()")}}. Isso tem uma semântica ligeiramente diferente do outro método de cópia: o primeiro dirá se o conteúdo, da solicitação anterior, já tiver sido lido (ou copiado), enquanto o segundo, `clone()` não.

## Headers

A interface {{domxref("Headers")}} permite que você crie seus proprios objetos headers por meio do construtor {{domxref("Headers.Headers","Headers()")}}. Um objeto headers é um mapa multidimensional simples de nomes para o valor?

```js
var content = "Hello World";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
```

O mesmo pode ser feito passando um array de arrays ou um objeto literal para o construtor:

```js
myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
```

O conteúdo pode ser consultado e recuperado:

```js
console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.getAll("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.getAll("X-Custom-Header")); // [ ]
```

Some of these operations are only useful in {{domxref("ServiceWorker_API","ServiceWorkers")}}, but they provide a much nicer API for manipulating headers.

All of the Headers methods throw a TypeError if a header name is used that is not a valid HTTP Header name. The mutation operations will throw a TypeError if there is an immutable guard (see below). Otherwise they fail silently. For example:

```js
var myResponse = Response.error();
try {
  myResponse.headers.set("Origin", "http://mybank.com");
} catch (e) {
  console.log("Cannot pretend to be a bank!");
}
```

A good use case for headers is checking whether the content type is correct before you process it further. For example:

```js
fetch(myRequest).then(function (response) {
  var contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function (json) {
      // process your JSON further
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});
```

### Guard

Since headers can be sent in requests and received in responses, and have various limitations about what information can and should be mutable, headers objects have a guard property. This is not exposed to the Web, but it affects which mutation operations are allowed on the headers object.

Possible guard values are:

- `none`: default.
- `request`: guard for a headers object obtained from a request ({{domxref("Request.headers")}}).
- `request-no-cors`: guard for a headers object obtained from a request created with {{domxref("Request.mode")}} `no-cors`.
- `response`: guard for a Headers obtained from a response ({{domxref("Response.headers")}}).
- `immutable`: Mostly used for ServiceWorkers; renders a headers object read-only.

> **Nota:** You may not append or set a `request` guarded Headers' `Content-Length` header. Similarly, inserting `Set-Cookie` into a response header is not allowed: ServiceWorkers are not allowed to set cookies via synthesized responses.

## Response objects

As you have seen above, {{domxref("Response")}} instances are returned when `fetch()` promises are resolved.

They can also be created programmatically via JavaScript, but this is only really useful in {{domxref("ServiceWorker_API", "ServiceWorkers")}}, when you are providing a custom response to a received request using a {{domxref("FetchEvent.respondWith","respondWith()")}} method:

```js
var myBody = new Blob();

addEventListener("fetch", function (event) {
  event.respondWith(
    new Response(myBody, {
      headers: { "Content-Type": "text/plain" },
    }),
  );
});
```

The {{domxref("Response.Response","Response()")}} constructor takes two optional arguments — a body for the response, and an init object (similar to the one that {{domxref("Request.Request","Request()")}} accepts.)

The most common response properties you'll use are:

- {{domxref("Response.status")}} — An integer (default value 200) containing the response status code.
- {{domxref("Response.statusText")}} — A string (default value "OK"),which corresponds to the HTTP status code message.
- {{domxref("Response.ok")}} — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a {{domxref("Boolean")}}.

> **Nota:** The static method {{domxref("Response.error","error()")}} simply returns an error response. Similarly, {{domxref("Response.redirect","redirect()")}} returns a response resulting in
> a redirect to a specified URL. These are also only relevant to Service Workers.

## Body

Both requests and responses may contain body data. A body is an instance of any of the following types.

- {{domxref("ArrayBuffer")}}
- {{domxref("ArrayBufferView")}} (Uint8Array and friends)
- {{domxref("Blob")}}/File
- string
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}

The {{domxref("Body")}} mixin defines the following methods to extract a body (implemented by both {{domxref("Request")}} and {{domxref("Response")}}). These all return a promise that is eventually resolved with the actual content.

- {{domxref("Body.arrayBuffer","arrayBuffer()")}}
- {{domxref("Body.blob","blob()")}}
- {{domxref("Body.json","json()")}}
- {{domxref("Body.text","text()")}}
- {{domxref("Body.formData","formData()")}}

This makes usage of non-textual data much easier than it was with XHR.

Request bodies can be set by passing body parameters:

```js
var form = new FormData(document.getElementById("login-form"));
fetch("/login", {
  method: "POST",
  body: form,
});
```

Both request and response (and by extension the `fetch()` function), will try to intelligently determine the content type. A request will also automatically set a `Content-Type` header if none is set in the dictionary.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

- [ServiceWorker API](/pt-BR/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/pt-BR/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/pt-BR/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch examples on Github](https://github.com/mdn/fetch-examples/)

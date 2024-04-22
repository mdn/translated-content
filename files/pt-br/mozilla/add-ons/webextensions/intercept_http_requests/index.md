---
title: Interceptando requisições HTTP
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
---

{{AddonSidebar}}

Para interceptar uma requisição HTTP, utilize a API {{WebExtAPIRef("webRequest")}}. Esta API permite adicionar listeners para vários estágios de uma requisição HTTP. Nos listeners, você pode:

- ter acesso ao cabeçalho e o corpo da requisição e, o cabeçalho da resposta
- cancelar e redirecionar requisições
- modificar requisições e o cabeçalho da resposta

Neste artigo você verá três diferentes usos para o módulo `webRequest`:

- Logando como as URLs da requisição são feitas.
- Redirecionando requisições.
- Modificando os cabeçalhos da requisição.

## Logando URLs de requisição

Crie um novo diretório chamado "requests". Neste diretório, crie um arquivo chamado "manifest.json" com seguinte conteúdo:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "<all_urls>"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

A seguir, crie um arquivo chamado"background.js" com o seguinte conteúdo:

```js
function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

Aqui vamos usar {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} para chamar a função `logURL()` antes do inicio da requisição. A função `logURL()` guarda a URL da requisição para o objeto event e efetua log no console do navegador. O [padrão](/pt-BR/Add-ons/WebExtensions/Match_patterns) `{urls: ["<all_urls>"]}` significa que iremos interceptar as requisições HTTP para todas URLs.

Para testá-lo, [instale a extensão](/pt-BR/Add-ons/WebExtensions/Temporary_Installation_in_Firefox), [abra o console do navegador](/pt-BR/docs/Tools/Browser_Console), e abra alguma página da internet. No console do navegador você pode ver as URLs para alguns recursos que o navegador requisita:

{{EmbedYouTube("X3rMgkRkB1Q")}}

## Redirecionando requisições

Agora vamos usar o `webRequest` para redirecionar requisições HTTP. Primeiro, substitua o manifest.json com o seguinte conteúdo:

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://developer.mozilla.org/",
    "https://mdn.mozillademos.org/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

A única alteração aqui é a adição da [permissão](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"webRequestBlocking"`. Precisamos invocar esta permissão extra toda vez que estamos ativamente modificando a requisição.

A seguir, substitua o "background.js" com o seguinte conteúdo:

```js
var pattern = "https://mdn.mozillademos.org/*";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl:
      "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif",
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Novamente vamos usar event listener {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} apenas para executar a função antes que cada requisição seja feita. Está função irá substituir a URL desejada com o `redirectUrl` especificado na função.

Desta vez não estamos interceptando cada requisição: a opção `{urls:[pattern], types:["image"]}` especifica apenas o que deveria interceptar requisições(1) para URLs residindo sob o "https\://mdn.mozillademos.org/" (2) para o recurso de imagens. Veja mais em {{WebExtAPIRef("webRequest.RequestFilter")}}.

Observe também que estamos passando uma opção chamada `"blocking"`: precisamos informá-la toda vez que desejamos modificar a requisição. Isto faz com que a função bloqueie a requisição de rede, então o navegador espera pelo event listener retornar antes de continuar. Veja a documentação {{WebExtAPIRef("webRequest.onBeforeRequest")}} para mais no `"blocking"`.

Teste abrindo uma página no MDN que possua muitas imagens (por exemplo [https://developer.mozilla.org/pt-BR/docs/Tools/Network_Monitor](/pt-BR/docs/Tools/Network_Monitor)), [recarregue a extensão](/pt-BR/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on) e então recarregue a página:

{{EmbedYouTube("ix5RrXGr0wA")}}

## Modificando os cabeçalhos da requisição

Finalmente iremos utilizar `webRequest` para modificar os cabeçalhos da requisição. Neste example iremos modificar o cabeçalho "User-Agent" que identifica o navegador como Opera 12.16, mas apenas quando visitamos páginas sob "http\://useragentstring.com/".

O "manifest.json" pode permanecer do mesmo jeito.

Modifique o "background.js" com este código:

```js
var targetPage = "http://useragentstring.com/*";

var ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach(function (header) {
    if (header.name.toLowerCase() == "user-agent") {
      header.value = ua;
    }
  });
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

Aqui vamos usar event listener {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} para executar a função somente quando os cabeçalhos forem enviados.

O event listener será chamada somente para requisitar as URLs que batem com o [padrão](/pt-BR/Add-ons/WebExtensions/Match_patterns). Observe também que passamos novamente `"blocking"` como uma opção. Passamos também `"requestHeaders"`, que significa que o listener será passado como um array contendo os cabeçalhos da requisição que desejamos enviar. Veja {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} para mais informações dessas opções.

A função listener procura pelo cabeçalho "User-Agent" no array de cabeçalhos da requisição, substitui seu valor com o valor `ua` da variável, e retorna o array modificado. Este array modificado será agora enviado para o servidor.

Teste abrindo [useragentstring.com](http://useragentstring.com/) e veja como ele identifica o navegador como sendo o Firefox. Então, recarregue a extensão, recarregue também o [useragentstring.com](http://useragentstring.com/) e veja que agora o Firefox é identificado como Opera:

{{EmbedYouTube("SrSNS1-FIx0")}}

## Aprenda mais

Para aprender sobre todas as coisas que você pode fazer com a API `webRequest`, veja sua [documentação de referência](/pt-BR/Add-ons/WebExtensions/API/WebRequest).

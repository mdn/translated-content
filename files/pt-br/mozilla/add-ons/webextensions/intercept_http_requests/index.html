---
title: Interceptando requisições HTTP
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
translation_of: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
---
<div>{{AddonSidebar}}</div>

<p>Para interceptar uma requisição HTTP, utilize a API {{WebExtAPIRef("webRequest")}}. Esta API permite adicionar listeners para vários estágios de uma requisição HTTP. Nos listeners, você pode:</p>

<ul>
 <li>ter acesso ao cabeçalho e o corpo da requisição e, o cabeçalho da resposta</li>
 <li>cancelar e redirecionar requisições</li>
 <li>modificar requisições e o cabeçalho da resposta</li>
</ul>

<p>Neste artigo você verá três diferentes usos para o módulo <code>webRequest</code>:</p>

<ul>
 <li>Logando como as URLs da requisição são feitas.</li>
 <li>Redirecionando requisições.</li>
 <li>Modificando os cabeçalhos da requisição.</li>
</ul>

<h2 id="Logando_URLs_de_requisição">Logando URLs de requisição</h2>

<p>Crie um novo diretório chamado "requests". Neste diretório, crie um arquivo chamado "manifest.json" com seguinte conteúdo:</p>

<pre class="brush: json">{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "&lt;all_urls&gt;"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}</pre>

<p>A seguir, crie um arquivo chamado"background.js" com o seguinte conteúdo:</p>

<pre class="brush: js">function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["&lt;all_urls&gt;"]}
);

</pre>

<p>Aqui vamos usar {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} para chamar a função <code>logURL()</code> antes do inicio da requisição. A função <code>logURL()</code> guarda a URL da requisição para o objeto event e efetua log no console do navegador. O <a href="/en-US/Add-ons/WebExtensions/Match_patterns">padrão</a> <code>{urls: ["&lt;all_urls&gt;"]}</code> significa que iremos interceptar as requisições HTTP para todas URLs.</p>

<p>Para testá-lo, <a href="/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">instale a extensão</a>, <a href="/en-US/docs/Tools/Browser_Console">abra o console do navegador</a>, e abra alguma página da internet. No console do navegador você pode ver as URLs para alguns recursos que o navegador requisita:</p>

<p>{{EmbedYouTube("X3rMgkRkB1Q")}}</p>

<h2 id="Redirecionando_requisições">Redirecionando requisições</h2>

<p>Agora vamos usar o <code>webRequest</code> para redirecionar requisições HTTP. Primeiro, substitua o manifest.json com o seguinte conteúdo:</p>

<pre class="brush: json">{

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

}</pre>

<p>A única alteração aqui é a adição da <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissão</a> <code>"webRequestBlocking"</code>. Precisamos invocar esta permissão extra toda vez que estamos ativamente modificando a requisição.</p>

<p>A seguir, substitua o "background.js" com o seguinte conteúdo:</p>

<pre class="brush: js">var pattern = "https://mdn.mozillademos.org/*";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);</pre>

<p>Novamente vamos usar event listener {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} apenas para executar a função antes que cada requisição seja feita. Está função irá substituir a URL desejada com o <code>redirectUrl</code> especificado na função.</p>

<p>Desta vez não estamos interceptando cada requisição: a opção <code>{urls:[pattern], types:["image"]}</code> especifica apenas o que deveria interceptar requisições(1) para URLs residindo sob o "https://mdn.mozillademos.org/" (2) para o recurso de imagens. Veja mais em {{WebExtAPIRef("webRequest.RequestFilter")}}.</p>

<p>Observe também que estamos passando uma opção chamada <code>"blocking"</code>: precisamos informá-la toda vez que desejamos modificar a requisição. Isto faz com que a função bloqueie a requisição de rede, então o navegador espera pelo event listener retornar antes de continuar. Veja a documentação {{WebExtAPIRef("webRequest.onBeforeRequest")}} para mais no <code>"blocking"</code>.</p>

<p>Teste abrindo uma página no MDN que possua muitas imagens (por exemplo <a href="https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor">https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor</a>), <a href="/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on">recarregue a extensão</a> e então recarregue a página:</p>

<p>{{EmbedYouTube("ix5RrXGr0wA")}}</p>

<h2 id="Modificando_os_cabeçalhos_da_requisição">Modificando os cabeçalhos da requisição</h2>

<p>Finalmente iremos utilizar <code>webRequest</code> para modificar os cabeçalhos da requisição. Neste example iremos modificar o cabeçalho "User-Agent" que identifica o navegador como Opera 12.16, mas apenas quando visitamos páginas sob "http://useragentstring.com/".</p>

<p>O "manifest.json" pode permanecer do mesmo jeito.</p>

<p>Modifique o "background.js" com este código:</p>

<pre class="brush: js">var targetPage = "http://useragentstring.com/*";

var ua = "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach(function(header){
    if (header.name.toLowerCase() == "user-agent") {
      header.value = ua;
    }
  });
  return {requestHeaders: e.requestHeaders};
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: [targetPage]},
  ["blocking", "requestHeaders"]
);</pre>

<p>Aqui vamos usar event listener {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} para executar a função somente quando os cabeçalhos forem enviados.</p>

<p>O event listener será chamada somente para requisitar as URLs que batem com o <a href="/en-US/Add-ons/WebExtensions/Match_patterns">padrão</a>. Observe também que  passamos novamente <code>"blocking"</code> como uma opção. Passamos também <code>"requestHeaders"</code>, que significa que o listener será passado como um array contendo os cabeçalhos da requisição que desejamos enviar. Veja {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} para mais informações dessas opções.</p>

<p>A função listener procura pelo cabeçalho "User-Agent" no array de cabeçalhos da requisição, substitui seu valor com o valor <code>ua</code> da variável, e retorna o array modificado. Este array modificado será agora enviado para o servidor.</p>

<p>Teste abrindo <a href="http://useragentstring.com/">useragentstring.com</a> e veja como ele identifica o navegador como sendo o Firefox. Então, recarregue a extensão, recarregue também o <a href="http://useragentstring.com/">useragentstring.com</a> e veja que agora o Firefox é identificado como Opera:</p>

<p>{{EmbedYouTube("SrSNS1-FIx0")}}</p>

<h2 id="Aprenda_mais">Aprenda mais</h2>

<p>Para aprender sobre todas as coisas que você pode fazer com a API <code>webRequest</code>, veja sua <a href="/en-US/Add-ons/WebExtensions/API/WebRequest">documentação de referência</a>.</p>

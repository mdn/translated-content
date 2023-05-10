---
title: Usando Service Workers
slug: Web/API/Service_Worker_API/Using_Service_Workers
---

{{DefaultAPISidebar("Service Workers API")}}

Esse artigo contém informações de como começar com service workers, incluindo a arquitetura básica, registro de um service worker, o processo de instalação e ativação de um novo service worker, atualização de seu service worker, controle de cache e respostas customizadas, tudo isso no contexto de um simples app com a funcionalidade offline.

## A premissa dos Service Workers

O principal problema que os usuários da web sofreram durante anos foi a perda de conexão. Até mesmo melhor web app do mundo terá uma péssima experiência de usuário se você não conseguir baixa-lá. Houveram várias tentativas de criar tecnologias para resolver esse problema, como mostra nossa página [Offline](/en-US/Apps/Build/Offline), e algumas questões foram resolvidas. Mas o maior problema é que, no geral, ainda não há um bom mecanismo de controle para caching de assets e requisições de rede personalizadas.

A tentativa anterior — [AppCache](/pt-BR/docs/Web/HTML/Using_the_application_cache) — parecia uma boa ideia, pois permitia especificar facilmente os assets para cache. Porém, fazia várias suposições sobre o que você estava tentando fazer e depois quebrava horrivelmente quando seu app não seguia exatamente tais suposições. Leia [Application Cache is a Douchebag](http://alistapart.com/article/application-cache-is-a-douchebag) de Jake Archibald para mais detalhes.

> **Nota:** A partir do Firefox 44, quando [AppCache](/pt-BR/docs/Web/HTML/Using_the_application_cache) é usado para fornecer suporte offline uma página, um aviso é exibido no console para que os desenvolvedores usem [Service workers](/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers) ({{bug("1204581")}}.)

Service workers devem finalmente corrigir esses problemas. A sintaxe do service worker é mais complexa do que a do AppCache, mas a vantagem é que você pode usar Javascript para controlar os comportamentos implícitos do AppCache com um bom grau de granularidade, permitindo que você lide com esse problema e muitos outros. Usando Service Worker você pode facilmente configurar um app para usar primeiro assets em cache, provendo uma experiência padronizada mesmo que esteja offline, antes de obter mais dados da rede (mais conhecido como [Offline First](http://offlinefirst.org/)). Isso já está disponível em apps nativos, que é uma das principais razões pelas quais apps nativos são frequentemente mais escolhidos do que web apps.

## Configuração para usar service workers

Várias características de service workers estão habilitadas por padrão em versões mais recentes dos navegadores suportados. Se, no entanto, encontrar um código de demonstração que não está funcionando na suas versões instaladas, você precisará habilitar essa preferência:

- **Firefox Nightly**: Vá para sobre: config e mude `dom.serviceWorkers.enabled para true; reinicie o browser.`
- **Chrome Canary**: Vá para `chrome://flags e mude para experimental-web-platform-features; reinicie o navegador (note que alguns recursos do Chrome vem habilitados por padrão.)`
- **Opera**: Vá em `opera://flags e habilite Support for ServiceWorker; reinicie o navegador.`
- **Microsoft Edge**: Vá para `about:flags` and marque `Enable service workers`; reinicie o navegador.

Você também precisa fornecer seu código via HTTPS — Service workers estão restritos a rodar apenas via HTTPS por motivos de segurança. GitHub serve como um bom host para os experimentos, pois suporta HTTPS. Para facilitar o desenvolvimento local, localhost também é considerado uma origem segura pelos navegadores.

## Arquitetura Básica

Com service workers, os seguintes passos geralmente são observados como configuração básica:

1. A URL do service worker é buscada e registrada via {{domxref("serviceWorkerContainer.register()")}}.
2. Em caso de sucesso, o service worker é executado em um {{domxref("ServiceWorkerGlobalScope") }}; isto é basicamente um tipo especial de contexto do worker, que é executado fora da thread de execução do script principal, sem acesso ao DOM.
3. O service worker agora está pronto para processar eventos.
4. A tentativa de instalação do worker acontece quando as páginas controladas pelo service worker são acessadas. O evento de instalação é sempre o primeiro a ser enviado ao service worker (isto pode ser usado para iniciar o processode preencher um IndexedDB, e armazenar em cache os assets do site). Este é realmente o mesmo tipo de procedimento para instalação de um aplicativo nativo ou do Firefox OS — disponibilizando tudo offline.
5. Quando o manipulador `oninstall` estiver completo, considera-se que o service worker está instalado.
6. O próximo é a ativação. Quando um service worker é instalado, ele recebe um evento de ativação. O uso primário do `onactivate é` para limpeza de recursos usado em versões anterioires do script de um Service worker.
7. O Service worker agora vai controlar páginas, mas apenas aquelas abertas após o `register()` tiver sido bem-sucedido. Isto é, um documento inicia a vida com ou sem Service worker e mantém isso durante seu tempo de vida. Logo, documentos terão de ser recarregados para serem controlados.

![](sw-lifecycle.png)

O gráfico abaixo mostra um resumo dos eventos de service worker disponíveis:

![install, activate, message, fetch, sync, push](sw-events.png)

### Promises

[Promises](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) são um ótimo mecanismo para executar operações assíncronas, onde o sucesso de uma depende do sucesso das outras. Isto é o fundamento para o modo como os service workers trabalham.

Promises pode fazer uma variedade de coisas, mas tudo o que precisa saber agora é que, se algo retorna uma promise, você pode inserir `.then()` ao final e incluir dentro dela callback para casos de sucesso ou poder inserir `.catch()` ao final, se quiser incluir um callback para falha.

Vamos comparar a estrutura de um callback tradicional síncrono para uma promise assíncrona equivalente.

#### sync

```js
try {
  var value = myFunction();
  console.log(value);
} catch(err) {
  console.log(err);
}
```

#### async

```js
myFunction().then(function(value) {
  console.log(value);
}).catch(function(err) {
  console.log(err);
});
```

No primeiro exemplo, temos que esperar `myFunction()` executar e retornar `value` antes que qualquer código adicional possa ser executado. No segundo exemplo, `myFunction()` retorna uma promessa para `value`, então o resto do código pode ser executado logo em seguida. Quando a promessa é atendida, o código dentro do método `then` será executado, assincronamente.

Agora para um exemplo real — e se quiséssemos carregar imagens dinamicamente, mas quiséssemos ter certeza que as imagens estão carregadas antes de tentar mostrá-las? É uma coisa padrão que estamos querendo fazer, mas pode ser um pouco complicado. Podemos usar `.onload` para somente mostrar a imagem após ela ter carregado, mas e para os eventos que aconteceram antes de começarmos a ouvi-los? Podemos tentar contornar isso usando `.complete`, mas ainda não é a prova de falhas, e para várias imagens? E, ummm, ainda é síncrono, portanto bloqueia a thread principal.

Ao invés disso, podemos contruir nossa própria promessa para lidar com casos deste tipo. (Veja o exemplo [Promises test](https://github.com/mdn/js-examples/tree/master/promises-test) para o código fonte, ou [veja rodando live](https://mdn.github.io/promises-test/).)

> **Nota:** Uma implementação real de service worker usaria caching e onfetch ao invés da depreciada XMLHttpRequest API. Estes features não são usados aqui para que você foque em entender Promises.

```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };

    request.send();
  });
}
```

Retornamos uma nova promise usando o `Promise()` constructor, o qual tem uma função callback como argumento com os parâmetros `resolve` e`reject`. Em algum lugar na função, precisamos definir o que acontece para que a promessa ser resolvida com sucesso ou ser rejeitada — neste caso, retornar um status 200 OK ou não — e então chamar `resolve` em caso de sucesso, ou `reject` em caso de falha. O resto do conteúdo desta função é XHR padrão, então, não vamos nos preocupar com isso agora.

Quando chamamos a função `imgLoad()`, chamamos com a url para a imagem que queremos carregar, como seria de se esperar, mas o resto do código é um pouco diferente:

```js
var body = document.querySelector('body');
var myImage = new Image();

imgLoad('myLittleVader.jpg').then(function(response) {
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
}, function(Error) {
  console.log(Error);
});
```

No fim da chamada da função, encadeamos o método `then()` da promisse, o qual contém duas funções — a primeira é executada quando a promisse é resolvida com sucesso, e a segunda é chamada quando a promise é rejeitada. Caso seja resolvida, exibimos a imagem dentro de `myImage` e a acrescentamos ao corpo (cujo argument é o `request.response` contido dentro do método `resolve` da promise); no caso de rejeição, nos retornamos um erro ao console.

Tudo isto acontece assincronamente.

> **Nota:** Você também pode encadear chamadas de promises, por exemplo:
> `myPromise().then(success, failure).then(success).catch(failure);`

> **Nota:** Você pode encontrar muito mais informações sobre promises lendo o excelente [JavaScript Promises: there and back again](http://www.html5rocks.com/en/tutorials/es6/promises/) de Jake Archibald.

## Demonstração de Service workers

Para demonstrar apenas o básico de registro e instalação de um service worker, criamos uma simples demonstração chamada [sw-test](https://github.com/mdn/sw-test), que é uma simples galeria de imagens de Star Wars Lego. Usa uma função ativada por promise para ler dados de imagem a partir de um objeto JSON e carrega as imagens usando Ajax, antes de exibir as imagens em uma linha ao longo da página. Mantivemos as coisas estáticas e simples por enquanto. Também registra, instala e ativa um service worker, e quando mais especificações são suportadas pelos navegadores, armazena em cache todos os arquivos necessários para que funcione offline!

![](demo-screenshot.png)

Você pode ver o [código-fonte no GitHub](https://github.com/mdn/sw-test/), e [ver um exemplo vivo](https://mdn.github.io/sw-test/). A parte que mencionaremos aqui é a promise (veja [app.js linhas 22-47](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L22-L47)), que é uma versão modificada do que você leu a respeito acima, em [Promises test demo](https://github.com/mdn/promises-test). É diferente das seguintes formas:

1. No original, passamos somente uma URL para uma image que queríamos carregar. Nesta versão, passamos um fragmento de um JSON contendo todos os dados de uma única imagem (veja como se parecem em [image-list.js](https://github.com/mdn/sw-test/blob/gh-pages/image-list.js)). Isto porque todos os dados para cada resolução de promise precisam ser transmitidos com a promise, pois é assíncrona. Se você passou apenas a url, e depois tentou acessar os outros itens no JSON separadamente, quando o laço de repetição `for()` estivesse sendo iterado posteriormente, não funcionaria, pois a promise não se resolveria ao mesmo tempo que as iterações estão sendo feitas (isso é um processo síncrono).
2. Na verdade, resolvemos a promise como uma matriz, pois queremos tornar o blob da imagem carregada disponível para a função de resolução mais adiante no código, além do nome da imagem, créditos e texto alternativo (veja [app.js linhas 31-34](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L31-L34)). Promises resolverão somente com um único argumento, então, se você quiser resolver múltiplos valores, precisará usar uma matriz/objeto..
3. Para acessar os valores da promise resolvida, acessamos esta função como esperado (veja [app.js linhas 60-64](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L60-L64)). Pode parecer um pouco estranho no começo, mas é assim que as promises funcionam.

## Inserir service workers

Agora vamos aos service workers!

### Registrando seu worker

O primeiro bloco de código do nosso arquivo do app JavaScript — `app.js` — é conforme segue. Este é nosso entry point para usar service workers.

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', {scope: '/sw-test/'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
```

1. The outer block performs a feature detection test to make sure service workers are supported before trying to register one.
2. Next, we use the {{domxref("ServiceWorkerContainer.register()") }} function to register the service worker for this site, which is just a JavaScript file residing inside our app (note this is the file's URL relative to the origin, not the JS file that references it.)
3. The `scope` parameter is optional, and can be used to specify the subset of your content that you want the service worker to control. In this case, we have specified '`/sw-test/'`, which means all content under the app's origin. If you leave it out, it will default to this value anyway, but we specified it here for illustration purposes.
4. The `.then()` promise function is used to chain a success case onto our promise structure. When the promise resolves successfully, the code inside it executes.
5. Finally, we chain a `.catch()` function onto the end that will run if the promise is rejected.

This registers a service worker, which runs in a worker context, and therefore has no DOM access. You then run code in the service worker outside of your normal pages to control their loading.

A single service worker can control many pages. Each time a page within your scope is loaded, the service worker is installed against that page and operates on it. Bear in mind therefore that you need to be careful with global variables in the service worker script: each page doesn’t get its own unique worker.

> **Nota:** Your service worker functions like a proxy server, allowing you to modify requests and responses, replace them with items from its own cache, and more.

> **Nota:** One great thing about service workers is that if you use feature detection like we’ve shown above, browsers that don’t support service workers can just use your app online in the normal expected fashion. Furthermore, if you use AppCache and SW on a page, browsers that don’t support SW but do support AppCache will use that, and browsers that support both will ignore the AppCache and let SW take over.

#### Why is my service worker failing to register?

This could be for the following reasons:

1. You are not running your application through HTTPS.
2. The path to your service worker file is not written correctly — it needs to be written relative to the origin, not your app’s root directory. In our example, the worker is at `https://mdn.github.io/sw-test/sw.js`, and the app’s root is `https://mdn.github.io/sw-test/`. But the path needs to be written as `/sw-test/sw.js`, not `/sw.js`.
3. The service worker being pointed to is on a different origin to that of your app. This is also not allowed.

![](important-notes.png)

Also note:

- The service worker will only catch requests from clients under the service worker's scope.
- The max scope for a service worker is the location of the worker.
- If your server worker is active on a client being served with the `Service-Worker-Allowed` header, you can specify a list of max scopes for that worker.
- In Firefox, Service Worker APIs are hidden and cannot be used when the user is in [private browsing mode](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history).

### Install and activate: populating your cache

After your service worker is registered, the browser will attempt to install then activate the service worker for your page/site.

The install event is fired when an install is successfully completed. The install event is generally used to populate your browser’s offline caching capabilities with the assets you need to run your app offline. To do this, we use Service Worker’s brand new storage API — {{domxref("cache")}} — a global on the service worker that allows us to store assets delivered by responses, and keyed by their requests. This API works in a similar way to the browser’s standard cache, but it is specific to your domain. It persists until you tell it not to — again, you have full control.

> **Nota:** The Cache API is not supported in every browser. (See the [Browser support](#browser_support) section for more information.) If you want to use this now, you could consider using a polyfill like the one available in [Google's Topeka demo](https://github.com/Polymer/topeka/blob/master/sw.js), or perhaps store your assets in [IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API).

Let’s start this section by looking at a code sample — this is the [first block you’ll find in our service worker](https://github.com/mdn/sw-test/blob/gh-pages/sw.js#L1-L18):

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
```

1. Here we add an `install` event listener to the service worker (hence `this`), and then chain a {{domxref("ExtendableEvent.waitUntil()") }} method onto the event — this ensures that the service worker will not install until the code inside `waitUntil()` has successfully occurred.
2. Inside `waitUntil()` we use the [`caches.open()`](/pt-BR/docs/Web/API/CacheStorage/open) method to create a new cache called `v1`, which will be version 1 of our site resources cache. This returns a promise for a created cache; once resolved, we then call a function that calls `addAll()` on the created cache, which for its parameter takes an array of origin-relative URLs to all the resources you want to cache.
3. If the promise is rejected, the install fails, and the worker won’t do anything. This is ok, as you can fix your code and then try again the next time registration occurs.
4. After a successful installation, the service worker activates. This doesn’t have much of a distinct use the first time your service worker is installed/activated, but it means more when the service worker is updated (see the [Updating your service worker](#updating_your_service_worker) section later on.)

> **Nota:** [localStorage](/pt-BR/docs/Web/Guide/API/DOM/Storage) works in a similar way to service worker cache, but it is synchronous, so not allowed in service workers.

> **Nota:** [IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API) can be used inside a service worker for data storage if you require it.

### Custom responses to requests

Now you’ve got your site assets cached, you need to tell service workers to do something with the cached content. This is easily done with the `fetch` event.

![](sw-fetch.png)

A `fetch` event fires every time any resource controlled by a service worker is fetched, which includes the documents inside the specified scope, and any resources referenced in those documents (for example if `index.html` makes a cross origin request to embed an image, that still goes through its service worker.)

You can attach a `fetch` event listener to the service worker, then call the `respondWith()` method on the event to hijack our HTTP responses and update them with your own magic.

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    // magic goes here
  );
});
```

We could start by simply responding with the resource whose url matches that of the network request, in each case:

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
```

`caches.match(event.request)` allows us to match each resource requested from the network with the equivalent resource available in the cache, if there is a matching one available. The matching is done via url and vary headers, just like with normal HTTP requests.

Let’s look at a few other options we have when defining our magic (see our [Fetch API documentation](/pt-BR/docs/Web/API/Fetch_API) for more information about {{domxref("Request")}} and {{domxref("Response")}} objects.)

1. The `{{domxref("Response.Response","Response()")}}` constructor allows you to create a custom response. In this case, we are just returning a simple text string:

    ```js
    new Response('Hello from your friendly neighbourhood service worker!');
    ```

2. This more complex `Response` below shows that you can optionally pass a set of headers in with your response, emulating standard HTTP response headers. Here we are just telling the browser what the content type of our synthetic response is:

    ```js
    new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
      headers: { 'Content-Type': 'text/html' }
    });
    ```

3. If a match wasn’t found in the cache, you could tell the browser to simply {{domxref("GlobalFetch.fetch","fetch")}} the default network request for that resource, to get the new resource from the network if it is available:

    ```js
    fetch(event.request);
    ```

4. If a match wasn’t found in the cache, and the network isn’t available, you could just match the request with some kind of default fallback page as a response using {{domxref("CacheStorage.match","match()")}}, like this:

    ```js
    caches.match('/fallback.html');
    ```

5. You can retrieve a lot of information about each request by calling parameters of the {{domxref("Request")}} object returned by the {{domxref("FetchEvent")}}:

    ```js
    event.request.url
    event.request.method
    event.request.headers
    event.request.body
    ```

## Recovering failed requests

So `caches.match(event.request)` is great when there is a match in the service worker cache, but what about cases when there isn’t a match? If we didn’t provide any kind of failure handling, our promise would reject and we would just come up against a network error when a match isn’t found.

Fortunately service workers’ promise-based structure makes it trivial to provide further options towards success. We could do this:

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
```

If the resources isn't in the cache, it is requested from the network.

If we were being really clever, we would not only request the resource from the network; we would also save it into the cache so that later requests for that resource could be retrieved offline too! This would mean that if extra images were added to the Star Wars gallery, our app could automatically grab them and cache them. The following would do the trick:

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
```

Here we return the default network request with `return fetch(event.request)`, which returns a promise. When this promise is resolved, we respond by running a function that grabs our cache using `caches.open('v1')`; this also returns a promise. When that promise resolves, `cache.put()` is used to add the resource to the cache. The resource is grabbed from `event.request`, and the response is then cloned with `response.clone()` and added to the cache. The clone is put in the cache, and the original response is returned to the browser to be given to the page that called it.

Cloning the response is necessary because request and response streams can only be read once. In order to return the response to the browser and put it in the cache we have to clone it. So the original gets returned to the browser and the clone gets sent to the cache. They are each read once.

The only trouble we have now is that if the request doesn’t match anything in the cache, and the network is not available, our request will still fail. Let’s provide a default fallback so that whatever happens, the user will at least get something:

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
        });
        return response;
      });
    }).catch(function() {
      return caches.match('/sw-test/gallery/myLittleVader.jpg');
    })
  );
});
```

We have opted for this fallback image because the only updates that are likely to fail are new images, as everything else is depended on for installation in the `install` event listener we saw earlier.

## Updating your service worker

If your service worker has previously been installed, but then a new version of the worker is available on refresh or page load, the new version is installed in the background, but not yet activated. It is only activated when there are no longer any pages loaded that are still using the old service worker. As soon as there are no more such pages still loaded, the new service worker activates.

You’ll want to update your `install` event listener in the new service worker to something like this (notice the new version number):

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',

        …

        // include other new resources for the new version...
      ]);
    })
  );
});
```

While this happens, the previous version is still responsible for fetches. The new version is installing in the background. We are calling the new cache `v2`, so the previous `v1` cache isn't disturbed.

When no pages are using the current version, the new worker activates and becomes responsible for fetches.

### Deleting old caches

You also get an `activate` event. This is a generally used to do stuff that would have broken the previous version while it was still running, for example getting rid of old caches. This is also useful for removing data that is no longer needed to avoid filling up too much disk space — each browser has a hard limit on the amount of cache storage that a given service worker can use. The browser does its best to manage disk space, but it may delete the Cache storage for an origin. The browser will generally delete all of the data for an origin or none of the data for an origin.

Promises passed into `waitUntil()` will block other events until completion, so you can rest assured that your clean-up operation will have completed by the time you get your first `fetch` event on the new cache.

```js
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
```

## Developer tools

Chrome has `chrome://inspect/#service-workers`, which shows current service worker activity and storage on a device, and `chrome://serviceworker-internals`, which shows more detail and allows you to start/stop/debug the worker process. In the future they will have throttling/offline modes to simulate bad or non-existent connections, which will be a really good thing.

Firefox has also started to implement some useful tools related to service workers:

- You can navigate to [`about:debugging`](/en-US/docs/Tools/about:debugging) to see what SWs are registered and update/remove them.
- When testing you can get around the HTTPS restriction by checking the "Enable Service Workers over HTTP (when toolbox is open)" option in the [Firefox Developer Tools settings](/pt-BR/docs/Tools/Settings).

> **Nota:** You may serve your app from `http://localhost` (e.g. using `me@localhost:/my/app$ python -m SimpleHTTPServer`) for local development. See [Security considerations](https://www.w3.org/TR/service-workers/#security-considerations)

## Specifications

| Specification                                    | Status                               | Comment             |
| ------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '')}} | {{Spec2('Service Workers')}} | Initial definition. |

## See also

- [The Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- Download the [Service Workers 101 cheatsheet](sw101.png).
- [Promises](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/pt-BR/docs/Web/Guide/Performance/Using_web_workers)

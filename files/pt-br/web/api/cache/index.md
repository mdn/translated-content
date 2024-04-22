---
title: Cache
slug: Web/API/Cache
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

A interface de **Cache** provê um mecanismo de pares de objeto [Request](http://fetch.spec.whatwg.org/#request) / [Response](http://fetch.spec.whatwg.org/#response) que estão cacheados, por exemplo, como parte do ciclo de vida de um {{domxref("ServiceWorker")}}. Note que a interface do `Cache` é exposta a escopos de janela como também aos workers. Você não precisa utiliza-la em conjunto com os service workers em si, mesmo que ela esteja definida na especificação dos mesmos.

Uma origem pode ter múltiplos objetos de `cache` nomeados. Você é o responsável por implementar como seu script (por exemplo, em um {{domxref("ServiceWorker")}}) trata uma atualização deste `Cache`. Itens em um `Cache` não são atualizados a não ser que explicitamente comandados para fazer tal coisa, também não expiram a não ser quando são deletados. Use {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} para abrir um `Cache` nomeado específico e depois chame qualquer um dos métodos presentes no `Cache` para manter os objetos cacheados.

Você é também o responsavel por, periódicamente, limpar as entradas de cache. Cada browser tem um limite fixo do tamanho de armazenamento de cache que cada origem pode utilizar. O browser faz o melhor que pode para gerenciar o espaço em disco, mas ele pode deletar um cache que não devia. Ele também vai, geralmente, deletar todos os dados de uma origem ou nenhum dado da mesma, nunca haverá uma ocasião não atômica onde o browser delete parcialmente os dados.

Certifique-se de versionar seus caches por nome e usar somente os caches nas versões do script que eles podem seguramente operar. Veja também o artigo sobre [remoção de caches antigos](/pt-BR/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Deleting_old_caches) para mais informações.

> **Nota:** Implementações iniciais do Cache (tanto no Blink quando no Gecko) resolvem promises de {{domxref("Cache.add")}}, {{domxref("Cache.addAll")}}, e {{domxref("Cache.put")}} somente quando o corpo completo da resposta foi armazenado. Versões mais recentes desta especificação possuem uma melhora de linguagem informando que o browser pode resolver a promise assim que a entrada é registrada no banco de dados, mesmo que o corpo da resposta ainda esteja sendo enviado.

> **Nota:** O algoritmo de comparação de chaves depende do [cabeçalho VARY](https://www.fastly.com/blog/best-practices-for-using-the-vary-header) no valor. Então, comparar uma nova chave depende tanto de olhar para o valor e para a própria chave para novas entradas no cache.

> **Nota:** A API de cache não segue os padrões HTTP de cabeçalhos de Cache.

## Métodos

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : Retorna uma {{jsxref("Promise")}} que resolve para a resposta associada com a primeira requisição encontrada no objeto {{domxref("Cache")}}.
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : Retorna uma {{jsxref("Promise")}} que resolve para um array com todas as referências encontradas de requisições presentes no objeto {{domxref("Cache")}}.
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : Pega a URL, obtém o resultado da resposta e adiciona o mesmo no cache informado. Esta funcionalidade é equivalente a chamar `fetch()`, e depois utilizar `Cache.put()` para adicionar o resultado no cache.
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : A partir de um array de URL's, obtém as respostas e adiciona todos os objetos resultantes no cache informado.
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : Dado uma requisição e uma resposta, adiciona ambas ao cache informado.
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : Encontra a entrada do {{domxref("Cache")}} na qual a chave é a requisição e, se encontrada, deleta a entrada do {{domxref("Cache")}} e retorna uma {{jsxref("Promise")}} que se resolve para `true`. Se nenhuma entrada do {{domxref("Cache")}} for encontrada, ela é resolvida para `false`.
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : Retorna uma {{jsxref("Promise")}} que resolve em um array de chaves de {{domxref("Cache")}}.

## Exemplos

Este trecho de código é da [amostra de cache seletivo](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) (veja [seleção live de cache](https://googlechrome.github.io/samples/service-worker/selective-caching/)), ele utiliza {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} para abrir quaisquer objetos {{domxref("Cache")}} com um cabeçalho `Content-Type` que inicie com `font/`.

Então, utilizamos {{domxref("Cache.match", "Cache.match(request, options)")}} para verificar se já existe uma fonte encontrada no cache e, se existir, retorna-la. Caso contrário, o código busca a fonte da rede e utiliza {{domxref("Cache.put","Cache.put(request, response)")}} para adiciona-la ao cache.

O código gerencia as exceções disparadas pela operação {{domxref("Globalfetch.fetch","fetch()")}}. Note que uma resposta de erro HTTP (como o 404) não vai ativar uma exceção. Será retornado um objeto de resposta padrão que possui seu próprio código de erros.

O trecho também mostra as melhores práticas de versionamento de caches utilizadas pelo service worker. Mesmo que só estejamos utilizando um cache neste exemplo, a mesma aproximação pode ser utilizada para múltiplos caches. Mapeamos um identificador para um cache específico e versionado. Por fim, o código deleta todos os cache que não estão presentes em `CURRENT_CACHES`.

No exemplo, "Caches" é um atributo dos service workers no WorkerGlobalScope. Ele contém o CacheStorage, um objeto pelo qual podemos acessar a [API de mesmo nome](/pt-BR/docs/Web/API/CacheStorage).

> **Nota:** No Chrome, visite `chrome://inspect/#service-workers` e clique no link "inspect" abaixo do service worker registrado para analisar os logs das várias ações que o script "[service-worker.js](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js)" está executando.

```js
var CACHE_VERSION = 1;

// Identificador menor para uma versão específica do cache
var CURRENT_CACHES = {
  font: "font-cache-v" + CACHE_VERSION,
};

self.addEventListener("activate", function (event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
    return CURRENT_CACHES[key];
  });

  // O worker não vai ser tratado como ativo até que a Promise se resolva.
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log("Deletando cache expirado:", cacheName);

            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", function (event) {
  console.log("Obtendo evento fetch para", event.request.url);

  event.respondWith(
    // Abre o objeto de cache que inicia com 'font'
    caches.open(CURRENT_CACHES["font"]).then(function (cache) {
      return cache
        .match(event.request)
        .then(function (response) {
          if (response) {
            console.log(" Encontrou resposta em cache:", response);

            return response;
          }
        })
        .catch(function (error) {
          // Trata exceções que vem de match() ou fetch().
          console.error("  Erro na handler:", error);

          throw error;
        });
    }),
  );
});
```

## Especificações

{{Specifications}}

## Tabela de compatibilidade

{{Compat}}

## Ver também

- [Usando Service Workers](/pt-BR/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Exemplo básico de service workers](https://github.com/mdn/sw-test)
- [Service workers estão prontos?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Usando Web Workers](/pt-BR/docs/Web/Guide/Performance/Using_web_workers)

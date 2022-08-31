---
title: ServiceWorkerGlobalScope.oninstall
slug: orphaned/Web/API/ServiceWorkerGlobalScope/oninstall
tags:
  - API
  - Property
  - Reference
  - Service Worker
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - oninstall
translation_of: Web/API/ServiceWorkerGlobalScope/oninstall
original_slug: Web/API/ServiceWorkerGlobalScope/oninstall
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **oninstall** プロパティは、（Service Worker がインストールされたときの）{{Event("install")}} イベントが発生するたびに発火するイベントハンドラーです。これはアクティブ化の前に発生します。

## 構文

```js
ServiceWorkerGlobalScope.oninstall = function(event) { ... };
ServiceWorkerGlobalScope.addEventListener('install', function(event) { ... });
```

## 例

次のスニペットは [Using Service Workers](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Install_and_activate.3A_populating_your_cache) のものです。詳細はそちらをご覧ください。

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
   caches.create('v1').then(function(cache) {
         return cache.add(
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
     );
   })
   );
});
```

## 仕様

| 仕様                                                                                                                             | ステータス                           | コメント   |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-event-handlers', 'Event Handlers')}} | {{Spec2('Service Workers')}} | 初期定義。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.oninstall")}}

## 関連情報

- [Using Service Workers](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ja/docs/Web/Guide/Performance/Using_web_workers)

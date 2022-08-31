---
title: ServiceWorkerGlobalScope.onactivate
slug: orphaned/Web/API/ServiceWorkerGlobalScope/onactivate
tags:
  - API
  - Property
  - Reference
  - Service
  - ServiceWorker
  - ServiceWorkerGlovalScope
  - Worker
  - onactivate
translation_of: Web/API/ServiceWorkerGlobalScope/onactivate
original_slug: Web/API/ServiceWorkerGlobalScope/onactivate
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **onactivate** プロパティは、（Service Worker がアクティブになったときの）{{Event("activate")}} イベントが発生したとき常に発火されるイベントハンドラーです。これは、Service Worker に制御されたページがリフレッシュされるインストール後に発生します。

## 構文

```js
ServiceWorkerGlobalScope.onactivate = function(event) { ... };
ServiceWorkerGlobalScope.addEventListener('activate', function(event) { ... });
```

## 例

次のスニペットは、[Using Service Workers](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Updating_your_service_worker) のものです; 詳細はそちらを見てください。

```js
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.forEach(function(cache, cacheName) {
      if (cacheWhitelist.indexOf(cacheName) == -1) {
        return caches.delete(cacheName);
      }
    })
  );
});
```

## 仕様

| 仕様                                                                                                                             | ステータス                           | コメント   |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-event-handlers', 'Event Handlers')}} | {{Spec2('Service Workers')}} | 初期定義。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.onactivate")}}

## 関連情報

- [Using Service Workers](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ja/docs/Web/Guide/Performance/Using_web_workers)

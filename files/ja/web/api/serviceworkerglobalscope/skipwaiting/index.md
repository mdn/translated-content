---
title: ServiceWorkerGlobalScope.skipWaiting()
slug: Web/API/ServiceWorkerGlobalScope/skipWaiting
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} スコープの **`ServiceWorkerGlobalScope.skipWaiting()`** メソッドは、待機している Service Worker がアクティブになるように強制します。

このメソッドは、{{domxref("Clients.claim()")}} と併用することで、現在のクライアントと他のすべてのアクティブなクライアントの両方で、元となる Service Worker の更新が即座に有効になるようにします。

## 構文

```js
ServiceWorkerGlobalScope.skipWaiting().then(function() {
  //Do something
});
```

### 返値

{{jsxref("Promise")}}。

## 例

次の例では、登録済みの Service Worker の新しいバージョンでインストールされている既存のものを置き換え、開いているページ上で現在アクティブな worker を入れ替えています。

```js
self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
```

## 仕様

| 仕様                                                                                             | ステータス                           | コメント   |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------- |
| {{SpecName('Service Workers', '#service-worker-obj', 'ServiceWorker')}} | {{Spec2('Service Workers')}} | 初期定義。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.skipWaiting")}}

## 関連情報

- [Using Service Workers](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{domxref("Clients.claim()")}}
- {{jsxref("Promise", "Promises")}}
- [Using web workers](/ja/docs/Web/Guide/Performance/Using_web_workers)

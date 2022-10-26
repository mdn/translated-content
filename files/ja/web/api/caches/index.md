---
title: WorkerGlobalScope.caches
slug: Web/API/caches
original_slug: Web/API/WindowOrWorkerGlobalScope/caches
---

{{APIRef()}}{{SeeCompatTable}}

{{domxref("WindowOrWorkerGlobalScope")}} インターフェイスの **`caches`** 読み取り専用プロパティは、現在のワーカーコンテキストに関連する {{domxref("CacheStorage")}} オブジェクトを返します。このオブジェクトにより、オフライン利用のために資産 (assets、アセット) を保存したり、リクエストに対するカスタムレスポンスを生成したりするなどの機能を使用できます。

## 構文

```
var myCacheStorage = self.caches; // または単に caches
```

### 値

{{domxref("CacheStorage")}}。

## 例

次の例では、アセットをオフラインで利用できるようにするために、[ServiceWorker](/ja/docs/Web/API/Service_Worker_API) コンテキストでキャッシュを使う方法を示しています。

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(
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

| 仕様                                     | ステータス                           | コメント   |
| ---------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('Service Workers')}} | {{Spec2('Service Workers')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.WindowOrWorkerGlobalScope.caches")}}

## 関連項目

- [Service Workers](/ja/docs/Web/API/ServiceWorker_API)
- [Web Workers](/ja/docs/Web/API/Web_Workers_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}

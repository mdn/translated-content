---
title: FetchEvent
slug: Web/API/FetchEvent
---

{{APIRef("Service Workers API")}}

これは、{{domxref("ServiceWorkerGlobalScope", "サービスワーカーのグローバルスコープ", "", 1)}}にディスパッチされる `fetch` イベント用のイベント型です。 これには、リクエストや、受け手がどうレスポンスを扱うのかといった、フェッチに関する情報が含まれています。 これは、このフェッチへのレスポンスを提供できるようにする {{domxref("FetchEvent.respondWith", "event.respondWith()")}} メソッドを提供します。

## コンストラクター

- {{domxref("FetchEvent.FetchEvent()", "FetchEvent()")}}
  - : 新しい `FetchEvent` オブジェクトを作成します。 このコンストラクターは通常は使用しません。 ブラウザーはこのオブジェクト自体を作成して `fetch` イベントのコールバックのために提供します。

## プロパティ

_先祖の {{domxref("Event")}} からプロパティを継承します。_

- {{domxref("FetchEvent.clientId")}} {{readonlyInline}}
  - : フェッチを開始した同一オリジンの {{domxref("Client")}} の {{domxref("Client.id", "id")}}。
- {{domxref("FetchEvent.preloadResponse")}} {{readonlyinline}}
  - : {{domxref("Response")}} への {{jsxref("Promise")}}、またはこのフェッチがナビゲーションでない場合や、[ナビゲーションのプリロード](/ja/docs/Web/API/NavigationPreloadManager)が有効になっていない場合は `undefined`。
- {{domxref("FetchEvent.replacesClientId")}} {{readonlyInline}}
  - : ページのナビゲーション中に置き換えられる {{domxref("Client")}} の {{domxref("Client.id", "id")}}。
- {{domxref("FetchEvent.resultingClientId")}} {{readonlyInline}}
  - : ページのナビゲーション中に前のクライアントを置き換える {{domxref("Client")}} の {{domxref("Client.id", "id")}}。
- {{domxref("FetchEvent.request")}} {{readonlyInline}}
  - : ブラウザーが行うつもりの {{domxref("Request")}}。

## メソッド

_親である {{domxref("ExtendableEvent")}} からメソッドを継承します。_

- {{domxref("FetchEvent.respondWith()")}}
  - : ブラウザー既定のフェッチ処理を抑止し、自身のレスポンス (の promise を) 提供します。
- {{domxref("ExtendableEvent.waitUntil()")}}
  - : イベントの存続期間を延長します。 ストリーミングやキャッシングなど、レスポンスの返却を超えて延長するタスクをブラウザーに通知するために使用します。

## 例

この fetch イベントは、非 GET リクエストに対してブラウザー既定のものを使用します。 GET リクエストに対してはキャッシュからマッチするものを返そうとし、ネットワークにフォールバックします。 キャッシュにマッチするものが見つかった場合、次回ためにキャッシュを非同期に更新します。

```js
self.addEventListener('fetch', event => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method != 'GET') return;

  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function() {
    // Try to get the response from a cache.
    const cache = await caches.open('dynamic-v1');
    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {
      // If we found a match in the cache, return it, but also
      // update the entry in the cache in the background.
      event.waitUntil(cache.add(event.request));
      return cachedResponse;
    }

    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  }());
});
```

## 仕様

| 仕様                                                                                                     | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-fetchevent-fetchevent', 'FetchEvent()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.FetchEvent")}}

## 関連情報

- {{jsxref("Promise")}}
- [Fetch API](/ja/docs/Web/API/Fetch_API)

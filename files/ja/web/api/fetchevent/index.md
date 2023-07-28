---
title: FetchEvent
slug: Web/API/FetchEvent
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("Service Workers API")}}

これは `fetch` イベント用のイベント型で、{{domxref("ServiceWorkerGlobalScope", "サービスワーカーのグローバルスコープ", "", 1)}}に配信されます。これには、リクエストや、受け手がどうレスポンスを扱うのかといった、フェッチに関する情報が含まれています。これは、このフェッチへのレスポンスを提供する {{domxref("FetchEvent.respondWith", "event.respondWith()")}} メソッドを提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("FetchEvent.FetchEvent()", "FetchEvent()")}}
  - : 新しい `FetchEvent` オブジェクトを作成します。 このコンストラクターは通常は使用しません。 ブラウザーはこのオブジェクト自体を作成して `fetch` イベントのコールバックに提供します。

## プロパティ

_祖先である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("FetchEvent.clientId")}} {{ReadOnlyInline}}
  - : フェッチを開始した同一オリジンの{{domxref("Client", "クライアント")}}の {{domxref("Client.id", "id")}} です。
- {{domxref("FetchEvent.preloadResponse")}} {{ReadOnlyInline}}
  - : {{domxref("Response")}} のための {{jsxref("Promise")}}、またはこのフェッチがナビゲーションでない場合や、[ナビゲーションの先読み](/ja/docs/Web/API/NavigationPreloadManager)が有効になっていない場合は `undefined` です。
- {{domxref("FetchEvent.replacesClientId")}} {{ReadOnlyInline}}
  - : ページのナビゲーション中に置き換えられる{{domxref("Client", "クライアント")}}の {{domxref("Client.id", "id")}} です。
- {{domxref("FetchEvent.resultingClientId")}} {{ReadOnlyInline}}
  - : ページのナビゲーション中に前のクライアントを置き換える{{domxref("Client", "クライアント")}}の {{domxref("Client.id", "id")}} です。
- {{domxref("FetchEvent.request")}} {{ReadOnlyInline}}
  - : ブラウザーが行おうとしている {{domxref("Request")}} です。

## メソッド

_親である {{domxref("ExtendableEvent")}} からメソッドを継承しています。_

- {{domxref("FetchEvent.respondWith()")}}
  - : ブラウザー既定のフェッチ処理を抑止し、自身のレスポンス（のプロミス）を提供します。
- {{domxref("ExtendableEvent.waitUntil()")}}
  - : イベントの存続期間を延長します。 ストリーミングやキャッシュなど、レスポンスの返却を超えて延長するタスクをブラウザーに通知するために使用します。

## 例

この fetch イベントは、 GET 以外のリクエストに対してブラウザー既定のものを使用します。 GET リクエストに対してはキャッシュから一致するものを返そうとし、ない場合はネットワークから読み取ります。キャッシュに一致するものが見つかった場合、次回ためにキャッシュを非同期に更新します。

```js
self.addEventListener("fetch", (event) => {
  // GET 以外のリクエストでは、ブラウザーに既定のことをさせる
  if (event.request.method !== "GET") return;

  // 既定のことを行わず、自分自身のリクエストを扱う
  event.respondWith(
    (async () => {
      // キャッシュからレスポンスの取得を試みる
      const cache = await caches.open("dynamic-v1");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // キャッシュに一致するものが見つかった場合は返却し、
        // バックグラウンドでキャッシュ内の項目を更新
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      // キャッシュに一致するものがなければ、ネットワークのものを使用
      return fetch(event.request);
    })(),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)

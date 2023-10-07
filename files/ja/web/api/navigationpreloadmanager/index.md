---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
---

{{APIRef("Service Workers API")}}

[Service Worker API](/ja/docs/Web/API/Service_Worker_API) の **`NavigationPreloadManager`** インターフェイスは、サービスワーカーによるリソースのプリロード（事前読み込み）を管理するためのメソッドを提供します。

## メソッド

- {{domxref("NavigationPreloadManager.enable()")}}
  - : ナビゲーションのプリロードを有効にし、解決する {{jsxref("Promise")}} を返します。
- {{domxref("NavigationPreloadManager.disable()")}}
  - : ナビゲーションのプリロードを無効にし、解決する {{jsxref("Promise")}} を返します。
- {{domxref("NavigationPreloadManager.setHeaderValue()")}}
  - : `Service-Worker-Navigation-Preload` ヘッダーの値を設定し、空の {{jsxref("Promise")}} を返します。
- {{domxref("NavigationPreloadManager.getState()")}}
  - : プリロードが有効かどうかと、`Service-Worker-Navigation-Preload` の内容を示すプロパティを持つオブジェクトに解決する {{jsxref("Promise")}} を返します。

## 例

#### ナビゲーションのプリロードの機能を検出して有効化

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async function () {
      if (self.registration.navigationPreload) {
        // ナビゲーションのプリロードを有効にします！
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

#### プリロードされたレスポンスの使用

次の例は、プリロードされたレスポンスを使用する fetch イベントの実装を示しています。

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      // 可能なら、キャッシュから応答します
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // それがなく、プリロードされたレスポンスがあれば、それを使用します
      const response = await event.preloadResponse;
      if (response) return response;

      // それもなければ、ネットワークを試します。
      return fetch(event.request);
    })(),
  );
});
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.NavigationPreloadManager")}}

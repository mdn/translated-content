---
title: "Request: isHistoryNavigation プロパティ"
short-title: isHistoryNavigation
slug: Web/API/Request/isHistoryNavigation
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`isHistoryNavigation`** は {{domxref("Request")}} インターフェイスの。読み取り専用プロパティで、このリクエストが履歴ナビゲーションであるかどうかを示す論理値です。

履歴ナビゲーションは、ブラウザーの履歴の中の移動であり、 {{domxref("History.go()")}}、{{domxref("History.back()")}}、{{domxref("History.forward()")}}、{{domxref("Navigation.traverseTo()")}}、{{domxref("Navigation.back()")}}、{{domxref("Navigation.forward()")}} を呼び出したり、ブラウザーの前ページ、次ページへのナビゲーションボタンをクリックしたりして行うものです。

## 値

論理値です。

## 例

この例は、サービスワーカー内で実行されます。 {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}} イベントを待ち受けします。イベントハンドラー内で、サービスワーカーは `isHistoryNavigation` プロパティをチェックして、リクエストが履歴ナビゲーションによるものかどうかを判断します。 履歴ナビゲーションによるリクエストの場合は、キャッシュされたレスポンスで応答しようと試みます。 キャッシュがこのリクエストに対するレスポンスを含んでいない場合は、サービスワーカーはネットワークからレスポンスを取得し、その複製をキャッシュし、ネットワークレスポンスで応答します。

```js
self.addEventListener("request", (event) => {
  // ...

  if (event.request.isHistoryNavigation) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response !== undefined) {
          return response;
        } else {
          return fetch(event.request).then((response) => {
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });

            return response;
          });
        }
      }),
    );
  }

  // ...
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("History API", "履歴 API", "", 1)}}
- {{domxref("Navigation API", "ナビゲーション API", "", 1)}}
- {{domxref("Service Worker API", "サービスワーカー API", "", 1)}}

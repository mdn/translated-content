---
title: "Request: isReloadNavigation プロパティ"
short-title: isReloadNavigation
slug: Web/API/Request/isReloadNavigation
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`isReloadNavigation`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエストがユーザーによる再読み込みであるかどうかを示す論理値です。

ユーザーによる再読み込みは、<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd> のキーを押す、ブラウザーの再読み込みボタンをクリックするなどのブラウザー操作によって、あるいはプログラム的に（例えば、{{domxref("Location.reload()")}}、 {{domxref("History.go()", "History.go(0)")}}、{{domxref("Navigation.reload()")}} を呼び出すなど）によって実行できます。

このプロパティは、主にサービスワーカーの {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} イベントハンドラー内で、再読み込みリクエストとそれ以外のリクエストに対して適切に対応するために使用されます。
例えば、再読み込みリクエストは、ユーザーが最新のデータを期待していることを示しているため、キャッシュ内のコンテンツよりもサーバーからのコンテンツを推奨すべきです。

## 値

論理値です。

## 例

### 基本的な使い方

次の例は、サービスワーカーのスクリプト内で使用でき、ページの再読み込みを調べて適切に対応するために利用できます。

{{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}} イベントハンドラー内では、まず、そのイベントの {{domxref("Request.mode")}} が `navigate` であり、`isReloadNavigation` プロパティが `true` であるかどうかを調べます。その場合、これはナビゲーションの再読み込みであるため、更新されたバージョンを提供するためにネットワークからページを取得します。それが失敗した場合は、代替手段として {{domxref("Cache")}} からページを取得しようとします。

ナビゲーションが再読み込みを伴うものでない場合、まず `Cache` からページを取得しようと試み、キャッシュされたページが得られない場合にのみ、ネットワークから取得します。

```js
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate" && event.request.isReloadNavigation) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request)),
    );
  } else {
    event.respondWith(
      caches
        .match(event.request)
        .then((cached) => cached || fetch(event.request)),
    );
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Navigation API", "", "", 1)}}

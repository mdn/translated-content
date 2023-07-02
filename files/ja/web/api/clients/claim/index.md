---
title: "Clients: claim() method"
slug: Web/API/Clients/claim
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Service Worker Clients")}}

**`claim()`** は {{domxref("Clients")}} インターフェイスのメソッドで、アクティブなサービスワーカーが自身のスコープ（{{domxref("ServiceWorkerRegistration.scope", "scope")}}）内のすべてのクライアントのコントローラー（{{domxref("ServiceWorkerContainer.controller", "controller")}}）として自分自身を設定できます。
これにより、このサービスワーカーによって制御されるようになる {{domxref("ServiceWorkerContainer","navigator.serviceWorker")}} の中のクライアントで "`controllerchange`" イベントが発行されます。

サービスワーカーが最初に登録されると、ページは次に読み込まれるまでそれを使用しません。 `claim()` メソッドを使用すると、これらのページがすぐに制御されます。 これにより、サービスワーカーがネットワークを介して、または別のサービスワーカーを介して定期的に読み込まれるページを制御することに注意してください。

## 構文

```js-nolint
claim()
```

### 引数

なし。

### 返値

`undefined` に解決される {{jsxref("Promise")}}。

## 例

次の例では、`claim()` をサービスワーカーの "`activate`" イベントリスナー内で使用しているため、同じスコープに読み込まれたクライアントは、フェッチがこのサービスワーカーを通過する前に再読み込みする必要がありません。

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーのライフサイクル](https://web.dev/service-worker-lifecycle/)
- [サービスワーカーは利用できますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise", "Promises")}}
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}} - サービスワーカーの待機フェーズをスキップする

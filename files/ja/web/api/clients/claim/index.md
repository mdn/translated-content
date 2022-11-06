---
title: Clients.claim()
slug: Web/API/Clients/claim
---

{{APIRef("Service Worker Clients")}}

{{domxref("Clients")}} インターフェイスの **`claim()`** メソッドを使用すると、アクティブなサービスワーカーが自身のスコープ（{{domxref("ServiceWorkerRegistration.scope", "scope")}}）内のすべてのクライアントのコントローラー（{{domxref("ServiceWorkerContainer.controller", "controller")}}）として自分自身を設定できます。 これにより、このサービスワーカーによって制御されるようになるクライアントの {{domxref("ServiceWorkerContainer","navigator.serviceWorker")}} で `"controllerchange"` イベントがトリガーされます。

サービスワーカーが最初に登録されると、ページは次に読み込まれるまでそれを使用しません。 `claim()` メソッドを使用すると、これらのページがすぐに制御されます。 これにより、サービスワーカーがネットワークを介して、または別のサービスワーカーを介して定期的に読み込まれるページを制御することに注意してください。

## 構文

```
await clients.claim();
```

### パラメーター

なし。

### 戻り値

`undefined` に解決される {{jsxref("Promise")}}。

## 例

次の例では、サービスワーカーの `"activate"` イベントリスナー内で `claim()` を使用しているため、同じスコープに読み込まれたクライアントは、フェッチがこのサービスワーカーを通過する前に再読み込みする必要がありません。

```js
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
```

## 仕様

| 仕様                                                                             | 状態                                 | コメント |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#clients-claim', 'claim()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Clients.claim")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service Worker のライフサイクル](https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle)
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise", "Promises")}}
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}} - サービスワーカーの待機フェーズをスキップする

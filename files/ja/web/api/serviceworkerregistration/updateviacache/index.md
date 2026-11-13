---
title: "ServiceWorkerRegistration: updateViaCache プロパティ"
short-title: updateViaCache
slug: Web/API/ServiceWorkerRegistration/updateViaCache
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`updateViaCache`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、ブラウザーがサービスワーカーや {{domxref("WorkerGlobalScope.importScripts", "importScripts()")}} を通じてインポートされたスクリプトを更新しようとする際に、HTTP キャッシュを参照する条件を決定するために使用される設定の値を返します。

## 値

以下の値のいずれかを返します。

- `imports`: サービスワーカースクリプトの更新については HTTP キャッシュを参照しませんが、{{domxref("WorkerGlobalScope.importScripts", "importScripts()")}} を使用してインポートされたスクリプトについては参照します。これがデフォルト値です。
- `all`: サービスワーカーのスクリプトの更新や、{{domxref("WorkerGlobalScope.importScripts", "importScripts()")}} を使用してインポートされたスクリプトについて、HTTP キャッシュを参照します。
- `none`: HTTP キャッシュを参照しません。

## 例

次の例は、 updateViaCache の使用例です。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", {
      updateViaCache: "none",
    })
    .then((registration) => {
      registration.addEventListener("updatefound", () => {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        console.log(`Value of updateViaCache: ${registration.updateViaCache}`);
      });
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) <sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)

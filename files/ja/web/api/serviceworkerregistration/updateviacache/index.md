---
title: ServiceWorkerRegistration.updateViaCache
slug: Web/API/ServiceWorkerRegistration/updateViaCache
tags:
  - API
  - プロパティ
  - リファレンス
  - サービスワーカー
  - ServiceWorkerRegistration
  - updateViaCache
browser-compat: api.ServiceWorkerRegistration.updateViaCache
translation_of: Web/API/ServiceWorkerRegistration/updateViaCache
---
{{APIRef("Service Workers API")}}

**`updateViaCache`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、 {{domxref('ServiceWorkerContainer.register')}} の呼び出しで指定されたモードを使用してキャッシュを更新します。
\`importScripts\` のリクエストは HTTP キャッシュで行われます。 \`updateViaCache\` はこの動作を制御します。

## 値

以下の値の何れかを返します。

- `imports`: サービスワーカーの更新のために HTTP キャッシュは参照されませんが、 `importScripts` では参照されることを意味します。
- `all`: 両方の場合で HTTP キャッシュが参照されることを意味します。
- `none`: HTTP キャッシュが参照されないことを意味します。

## 例

次の例は、 updateViaCache の使用例です。

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', {
    updateViaCache: 'none'
  }).then(function(registration) {
    registration.addEventListener('updatefound', function() {
      // If updatefound is fired, it means that there's
      // a new service worker being installed.
      console.log('Value of updateViaCache:', registration.updateViaCache);
    });
  })
  .catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test) (英語)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/) (英語)
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)

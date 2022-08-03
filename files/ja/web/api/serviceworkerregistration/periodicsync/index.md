---
title: ServiceWorkerRegistration.periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
tags:
  - API
  - 実験的
  - PeriodicSyncManager
  - プロパティ
  - リファレンス
  - サービスワーカー
  - ServiceWorkerRegistration
  - periodicSync
browser-compat: api.ServiceWorkerRegistration.periodicSync
translation_of: Web/API/ServiceWorkerRegistration/periodicSync
---
{{APIRef("Service Workers API")}}

**`periodicSync`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、定期的なバックグラウンド同期プロセスを管理する {{domxref('PeriodicSyncManager')}} インターフェイスへの参照を返します。

## 値

{{domxref("PeriodicSyncManager")}} オブジェクトです。

## 例

このプロパティはメインスクリプトと登録済みサービスワーカーのどちらからでもアクセスできます。

ここでは、メインスクリプトからアクセスする例を示します。

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ('periodicSync' in registration) {

  // Background Periodic Sync functionality
  const periodicSync = registration.periodicSync;

}
```

[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)からの呼び出し例です。

```js
// service worker script

const periodicSync = self.registration.periodicSync;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/) (英語)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html) (英語)

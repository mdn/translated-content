---
title: "ServiceWorkerRegistration: periodicSync プロパティ"
short-title: periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`periodicSync`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、定期的なバックグラウンド同期プロセスを管理する {{domxref('PeriodicSyncManager')}} インターフェイスへの参照を返します。

## 値

{{domxref('PeriodicSyncManager')}} オブジェクトです。

## 例

このプロパティはメインスクリプトと登録済みサービスワーカーのどちらからでもアクセスできます。

ここでは、メインスクリプトからアクセスする例を示します。

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ("periodicSync" in registration) {
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

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync) <sup>(英語)</sup>

---
title: PeriodicSyncEvent
slug: Web/API/PeriodicSyncEvent
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

{{domxref('Web Periodic Background Synchronization API', 'ウェブ定期バックグラウンド同期 API', '', 'nocode')}} の **`PeriodicSyncEvent`** インターフェイスは、ネットワーク接続がある状態でサービスワーカーでタスクを実行する方法を提供します。

このイベントのインスタンスが {{domxref('ServiceWorkerGlobalScope.periodicsync_event', 'periodicsync')}} ハンドラーに渡されます。これは、{{domxref('PeriodicSyncManager.register()')}} メソッドで設定した以上の間隔で、定期的に行われます。実際の間隔は、ユーザーのサイトとのかかわりなど、その他の実装定義の要素によります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PeriodicSyncEvent.PeriodicSyncEvent", "PeriodicSyncEvent()")}} {{Experimental_Inline}}
  - : 新しい `PeriodicSyncEvent` オブジェクトを生成します。このコンストラクターは通常使用されません。ブラウザーがこれらのオブジェクトを作成し、{{domxref('ServiceWorkerGlobalScope.periodicsync_event', 'onperiodicsync')}} コールバックに渡します。

## インスタンスプロパティ

_親の {{domxref('ExtendableEvent')}} からプロパティを継承します。_

- {{domxref('PeriodicSyncEvent.tag')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この `PeriodicSyncEvent` 用の開発者定義の識別子を返します。ウェブアプリケーションは、異なる定期的なタスクを異なる頻度で実行するため、複数のタグを使用できます。

## インスタンスメソッド

_親の {{domxref('ExtendableEvent')}} からメソッドを継承します。_

## 例

以下の例は、サービスワーカーで定期的な同期のイベントに応答する方法を示します。

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

`fetchAndCacheLatestNews` は開発者が定義した関数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)

---
title: "ServiceWorkerGlobalScope: periodicsync イベント"
short-title: periodicsync
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`periodicsync`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、 {{domxref('PeriodicSyncManager')}}を登録したときに指定された時間間隔で発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("periodicsync", (event) => {});

onperiodicsync = (event) => {};
```

## イベント型

{{domxref("PeriodicSyncEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PeriodicSyncEvent")}}

## イベントプロパティ

_祖先である {{domxref("Event")}} からプロパティを継承しています_。

- {{domxref('PeriodicSyncEvent.tag')}} {{ReadOnlyInline}}
  - : この `PeriodicSyncEvent` の開発者定義の識別子を返します。ウェブアプリケーションで複数のタグを使用すると、異なる頻度で異なる定期的なタスクを実行することができます。

## 例

以下の例は、サービスワーカーで定期的な同期イベントに応答する方法を示しています。

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

また、 `onperiodicsync` プロパティを使用してイベントハンドラーを設定することもできます。

```js
self.onperiodicsync = (event) => {
  // ...
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)

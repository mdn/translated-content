---
title: "ServiceWorkerGlobalScope: sync イベント"
slug: Web/API/ServiceWorkerGlobalScope/sync_event
l10n:
  sourceCommit: ad50409e75b81d80e24c745cd033ee9f57fdb4ec
---

{{DefaultAPISidebar("Background Sync")}}

**`sync`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、 {{domxref('SyncManager')}} にイベントを登録したページ（またはワーカー）が実行されているとき、ネットワーク接続が利用できるようになるとすぐに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("sync", (event) => {});

onsync = (event) => {};
```

## イベント型

{{domxref("SyncEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("SyncEvent")}}

## イベントプロパティ

_祖先である {{domxref("Event")}} からプロパティを継承しています_。

- {{domxref("SyncEvent.tag")}} {{ReadOnlyInline}}
  - : この `SyncEvent` の開発者が定義した識別子を返します。
- {{domxref("SyncEvent.lastChance")}} {{ReadOnlyInline}}
  - : ユーザーエージェントが現在の同期を試行した後、それ以上同期を試行しない場合には `true` を返します。

## 例

以下の例は、サービスワーカーで同期イベントに応答する方法を示しています。

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

また、 `onsync` プロパティを使用して、イベントハンドラーを設定することもできます。

```js
self.onsync = (event) => {
  // ...
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)

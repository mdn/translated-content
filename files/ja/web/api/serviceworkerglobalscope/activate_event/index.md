---
title: "ServiceWorkerGlobalScope: activate イベント"
short-title: activate
slug: Web/API/ServiceWorkerGlobalScope/activate_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`activate`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、{{domxref("ServiceWorkerRegistration")}} が新しいアクティブワーカー（{{domxref("ServiceWorkerRegistration.active")}} worker）を取得すると発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("activate", (event) => {});

onactivate = (event) => {};
```

## イベント型

{{domxref("ExtendableEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("ExtendableEvent")}}

## イベントプロパティ

_固有のプロパティは実装していませんが、親である {{domxref("Event")}} からプロパティを継承しています。_

## 例

次のスニペットは、`activate` イベントハンドラーを使用してキャッシュをアップグレードする方法を示しています。

```js
self.addEventListener("activate", (event) => {
  const cacheAllowlist = ["v2"];

  event.waitUntil(
    caches.forEach((cache, cacheName) => {
      if (!cacheAllowlist.includes(cacheName)) {
        return caches.delete(cacheName);
      }
    }),
  );
});
```

次のように `onactivate` プロパティを使用してイベントハンドラーを設定することもできます。

```js
self.onactivate = (event) => {
  // ...
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} イベント
- {{domxref("ServiceWorkerGlobalScope")}}
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)

---
title: "ServiceWorkerGlobalScope: install イベント"
short-title: install
slug: Web/API/ServiceWorkerGlobalScope/install_event
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`install`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、 {{domxref("ServiceWorkerRegistration")}} が新しい {{domxref("ServiceWorkerRegistration.installing")}} ワーカーを取得したときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("install", (event) => {});

oninstall = (event) => {};
```

## イベント型

{{domxref("ExtendableEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("ExtendableEvent")}}

## イベントプロパティ

_固有のプロパティは実装していませんが、親である {{domxref("Event")}} からプロパティを継承しています。_

## 例

以下のスニペットでは、`install`イベントハンドラーを使用して、キャッシュに多くのレスポンスを投入し、サービスワーカーがオフラインで資産を提供するために使用する方法を示しています。

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

また、 `oninstall` プロパティを使用して、イベントハンドラーを設定することもできます。

```js
self.oninstall = (event) => {
  // ...
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} イベント
- {{domxref("ServiceWorkerGlobalScope")}}
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)

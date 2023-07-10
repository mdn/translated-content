---
title: "ServiceWorker: error イベント"
slug: Web/API/ServiceWorker/error_event
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Service Workers API")}}

`error` イベントは、サービスワーカーでエラーが発生するたびに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下のコードでは、{{domxref("ServiceWorker")}} オブジェクトのハンドルを {{domxref("ServiceWorkerRegistration.active")}} で取得し、結果オブジェクトに `onerror` ハンドラーを設定しています。

```js
// 制御下にあるページで
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.onerror = (event) => {
      console.log("An error occurred in the service worker!");
    };
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

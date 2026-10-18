---
title: "ServiceWorkerRegistration: updatefound イベント"
short-title: updatefound
slug: Web/API/ServiceWorkerRegistration/updatefound_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`updatefound`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのイベントで、 {{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーが取得するたびに呼び出されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用したり、イベントハンドラープロパティに設定したりしてください。

```js-nolint
addEventListener("updatefound", (event) => { })

onupdatefound = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const registration = await navigator.serviceWorker.getRegistration();
if (registration) {
  registration.addEventListener("updatefound", () => {
    console.log("サービスワーカーの更新版が見つかりました。");
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)

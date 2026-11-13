---
title: "ServiceWorkerRegistration: updatefound イベント"
short-title: updatefound
slug: Web/API/ServiceWorkerRegistration/updatefound_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`updatefound`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのイベントで、{{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーを取得するたびに発生します。

## 構文

このイベント名を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で使用してください。

```js-nolint
addEventListener("updatefound", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入してください。

```js-nolint
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

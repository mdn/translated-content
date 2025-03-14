---
title: "ServiceWorkerRegistration: updatefound イベント"
slug: Web/API/ServiceWorkerRegistration/updatefound_event
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Service Workers API")}}

**`updatefound`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのイベントで、 {{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーが取得するたびに呼び出されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用したり、イベントハンドラープロパティに設定したりしてください。

```js
addEventListener("updatefound", (event) => {});

onupdatefound = (event) => {};
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

---
title: 'ServiceWorkerRegistration: updatefound イベント'
slug: Web/API/ServiceWorkerRegistration/updatefound_event
tags:
  - API
  - イベント
  - リファレンス
  - サービスワーカー
  - ServiceWorkerRegistration
browser-compat: api.ServiceWorkerRegistration.updatefound_event
translation_of: Web/API/ServiceWorkerRegistration/updatefound_event
original_slug: Web/API/ServiceWorkerRegistration/onupdatefound
---
{{APIRef("Service Workers API")}}

**`updatefound`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのイベントで、  {{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーが取得するたびに呼び出されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用したり、イベントハンドラープロパティに設定したりしてください。

```js
addEventListener('updatefound', event => { });

onupdatefound = event => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const registration = await navigator.serviceWorker.getRegistration();
if (registration) {
    registration.addEventListener('updatefound', () => {
        console.log('サービスワーカーの更新版が見つかりました。');
    });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)

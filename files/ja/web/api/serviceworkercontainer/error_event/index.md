---
title: ServiceWorkerContainer.onerror
slug: Web/API/ServiceWorkerContainer/error_event
original_slug: Web/API/ServiceWorkerContainer/onerror
---

{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`onerror`** プロパティは、関連するサービスワーカーで {{Event("error")}} イベントが発生するたびに発生するイベントハンドラーです。

## 構文

```
serviceWorkerContainer.onerror = function(errorevent) { ... }
```

## 例

```js
navigator.serviceWorker.onerror = function(errorevent) {
  console.log(`受信したエラーメッセージ: ${errorevent.message}`);
}
```

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.onerror")}}

---
title: "ServiceWorkerContainer: error イベント"
slug: Web/API/ServiceWorkerContainer/error_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Service Workers API")}}{{Deprecated_header}}{{Non-standard_header}}

`error` イベントは、サービスワーカーでエラーが発生したときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
navigator.serviceWorker.onerror = (errorevent) => {
  console.error(`受信したエラーメッセージ: ${errorevent.message}`);
};
```

## ブラウザーの互換性

{{Compat}}

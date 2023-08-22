---
title: "ServiceWorkerContainer: controllerchange イベント"
slug: Web/API/ServiceWorkerContainer/controllerchange_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Service Workers API")}}

**`controllerchange`** は {{domxref("ServiceWorkerContainer")}} インターフェイスのイベントで、文書の関連する {{domxref("ServiceWorkerRegistration")}} が新しいアクティブ ({{domxref("ServiceWorkerRegistration.active","active")}}) ワーカーを取得したときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("controllerchange", (event) => {});

oncontrollerchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
// TBD
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

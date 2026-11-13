---
title: "Worker: error イベント"
short-title: error
slug: Web/API/Worker/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

**`error`** は {{domxref("Worker")}} インターフェイスのイベントで、ワーカーでエラーが発生したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下の例では {{domxref("Worker")}} オブジェクトを {{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して生成し、結果のオブジェクトに `onerror` ハンドラーを設定しています。

```js
const myWorker = new Worker("worker.js");

myWorker.onerror = (event) => {
  console.log("There is an error with your worker!");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

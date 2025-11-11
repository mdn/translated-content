---
title: "SharedWorker: error イベント"
slug: Web/API/SharedWorker/error_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Workers API")}}

**`error`** は {{domxref("SharedWorker")}} インターフェイスのイベントで、ワーカーでエラーが発生したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下のコードでは {{domxref("SharedWorker") }} コンストラクターを使用して {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} オブジェクトを作成し、結果オブジェクトに `onerror` ハンドラーを設定しています。

```js
const mySharedWorker = new SharedWorker("shared-worker.js");

mySharedWorker.onerror = (event) => {
  console.error("ワーカーでエラーが発生しました。");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

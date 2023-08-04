---
title: "Worker: error イベント"
slug: Web/API/Worker/error_event
l10n:
  sourceCommit: 6d697b8a86ea3ce1bf82615c5dc006aeaa22d90b
---

{{APIRef("Web Workers API")}}

**`error`** は {{domxref("Worker")}} インターフェイスのイベントで、ワーカーでエラーが発生したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('error', (event) => { });

onerror = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下の例では {{domxref("Worker")}} オブジェクトを {{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して生成し、結果のオブジェクトに `onerror` ハンドラーを設定しています。

```js
const myWorker = new Worker('worker.js');

myWorker.onerror = (event) => {
  console.log('There is an error with your worker!');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

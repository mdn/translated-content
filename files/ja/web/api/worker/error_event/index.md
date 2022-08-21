---
title: Worker.onerror
slug: Web/API/Worker/error_event
tags:
  - API
  - Worker
  - EventHandler
  - Property
  - Reference
  - Web Workers
  - Workers
  - onerror
translation_of: Web/API/Worker/onerror
original_slug: Web/API/Worker/onerror
browser-compat: api.Worker.onerror
---
{{APIRef("Web Workers API")}}

**`onerror`** は {{domxref("Worker")}} インターフェイスのプロパティで、 [イベントハンドラー](/ja/docs/Web/Events/Event_handlers)を表し、 {{event("error")}} イベントが発行されたときに呼び出される関数を表します。

## 構文

```js
myWorker.onerror = function(event) { ... };
```

## 例

以下の例では {{domxref("Worker")}} オブジェクトを {{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して生成し、結果のオブジェクトに `onerror` ハンドラーを設定しています。

```js
var myWorker = new Worker('worker.js');

  myWorker.onerror = function(event) {
    console.log('There is an error with your worker!');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

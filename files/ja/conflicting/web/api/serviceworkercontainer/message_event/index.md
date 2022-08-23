---
title: ServiceWorkerContainer.onmessage
slug: conflicting/Web/API/ServiceWorkerContainer/message_event
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
translation_of: Web/API/ServiceWorkerContainer/onmessage
original_slug: Web/API/ServiceWorkerContainer/onmessage
---
{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`onmessage`** プロパティは、{{Event("message")}} イベントが発生するたびに発火するイベントハンドラーです。 （例えば、{{domxref("Client.postMessage()")}} 呼び出しを介して）着信メッセージを {{domxref("ServiceWorkerContainer")}} オブジェクトに受信したときに発生します。

> **Note:** **注**: 他のウェブメッセージング機能との整合性を保つため、サービスワーカーコンテキストから受信されるメッセージ（`onmessage` のイベントオブジェクトなど）は、最新のブラウザーでは {{domxref("MessageEvent")}} オブジェクトによって表されます。 （これらは、以前は廃止された {{domxref("ServiceWorkerMessageEvent")}} オブジェクトで表されていました。）

## 構文

```
serviceWorkerContainer.onmessage = function(messageevent) { ... }
```

## 例

```js
navigator.serviceWorker.onmessage = function(messageevent) {
  console.log(`received data: ${messageevent.data}`);
}
```

## 仕様

| 仕様                                                                                                                                                 | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-serviceworkerglobalscope-onmessage', 'ServiceWorkerContainer: onmessage')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.onmessage")}}

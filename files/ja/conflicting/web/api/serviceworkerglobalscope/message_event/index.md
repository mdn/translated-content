---
title: ServiceWorkerGlobalScope.onmessage
slug: conflicting/Web/API/ServiceWorkerGlobalScope/message_event
tags:
  - API
  - Property
  - Reference
  - Service
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - Worker
  - onmessage
translation_of: Web/API/ServiceWorkerGlobalScope/onmessage
original_slug: Web/API/ServiceWorkerGlobalScope/onmessage
---
{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`onmessage`** プロパティは、（着信メッセージの受信時に）{{domxref("ServiceWorkerGlobalScope.message_event","message")}} イベントが発生するたびに発火するイベントハンドラーです。

> **Note:** **注**: サービスワーカーは、延長可能なイベントを定義して、イベントの存続期間を延長できるようにします。 `message` イベントの場合、サービスワーカーは {{domxref("ExtendableEvent")}} インターフェイスを拡張した {{domxref("ExtendableMessageEvent")}} インターフェイスを使用します。

> **Note:** **注**: 他のウェブメッセージング機能との整合性を保つため、サービスワーカーのコンテキストから受信されるメッセージ（`onmessage` のイベントオブジェクトなど）は、最新のブラウザーでは {{domxref("MessageEvent")}} オブジェクトによって表されます。 （これらは、以前は廃止された {{domxref("ServiceWorkerMessageEvent")}} オブジェクトで表されていました。）

## 構文

```
serviceWorkerGlobalScope.onmessage = function(extendableMessageEvent) { ... };
```

## 例

```js
self.addEventListener('message', function(messageEvent) {
  console.log('Handling message event:', messageEvent);
})
```

## 仕様

| 仕様                                                                                                                             | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#service-worker-global-scope-event-handlers', 'Event Handlers')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.onmessage")}}

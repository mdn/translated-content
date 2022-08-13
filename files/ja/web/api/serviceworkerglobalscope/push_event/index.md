---
title: 'ServiceWorkerGlobalScope: push イベント'
slug: Web/API/ServiceWorkerGlobalScope/push_event
tags:
  - API
  - Event
  - Notifications
  - Push
  - Push API
  - PushEvent
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - events
  - messaging
  - イベント
translation_of: Web/API/ServiceWorkerGlobalScope/push_event
---
{{APIRef("Push API")}}

`push` イベントは、サービスワーカーがプッシュメッセージを受信したときにサービスワーカーのグローバルスコープ ({{domxref("ServiceWorkerGlobalScope")}} インターフェイスで表現されるもの) に送られます。

| バブリング                   | なし                                                                         |
| ---------------------------- | ---------------------------------------------------------------------------- |
| キャンセル                   | 不可                                                                         |
| インターフェイス             | {{domxref("PushEvent")}}                                             |
| イベントハンドラープロパティ | {{domxref("ServiceWorkerGlobalScope.onpush", "onpush")}} |

## 例

この例は `push` イベントのハンドラーを設定して、 {{Glossary("JSON")}} データを取り、解析し、メッセージ内に含まれる情報に基づいて扱うためにメッセージを仕分けします。

```js
self.addEventListener("push", event => {
  let message = event.data.json();

  switch(message.type) {
    case "init":
      doInit();
      break;
    case "shutdown":
      doShutdown();
      break;
  }
}, false);
```

## 仕様書

| 仕様書                                                                                                                   | 状態                         | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName('Push API', '#extensions-to-the-serviceworkerglobalscope-interface', 'push')}} | {{Spec2('Push API')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.push_event")}}

## 関連情報

- [Push API の使用](/ja/docs/Web/API/Push_API/Using_the_Push_API)
- {{domxref("ServiceWorkerGlobalScope.onpush", "onpush")}} イベントハンドラープロパティ
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} イベント

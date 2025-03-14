---
title: ExtendableMessageEvent.lastEventId
slug: Web/API/ExtendableMessageEvent/lastEventId
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Service Workers API")}}

**`lastEventID`** は {{domxref("ExtendableMessageEvent")}} インターフェイスの読み取り専用プロパティで、[サーバー送信イベント](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)における、イベントソースの最後のイベント ID を表します。 これは空の文字列です。

## 値

文字列です。

## 例

次のコードをサービスワーカー内で使用して、{{domxref("PushMessageData")}} を介して受信したデータを[チャンネルメッセージ](/ja/docs/Web/API/Channel_Messaging_API)を介してメインコンテキストに送信することにより、プッシュメッセージに応答する場合、`onmessage` のイベントオブジェクトは `ExtendableMessageEvent` になります。

```js
let port;

self.addEventListener("push", (e) => {
  const obj = e.data.json();

  if (obj.action === "subscribe" || obj.action === "unsubscribe") {
    port.postMessage(obj);
  } else if (obj.action === "init" || obj.action === "chatMsg") {
    port.postMessage(obj);
  }
});

self.onmessage = (e) => {
  console.log(e.lastEventId);
  port = e.ports[0];
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [チャンネルメッセージング](/ja/docs/Web/API/Channel_Messaging_API)

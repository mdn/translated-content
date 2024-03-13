---
title: ExtendableMessageEvent.ports
slug: Web/API/ExtendableMessageEvent/ports
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Service Workers API")}}

**`ports`** は {{domxref("ExtendableMessageEvent")}} インターフェイスの読み取り専用プロパティで、関連するメッセージチャンネル（メッセージが送信されるチャンネル）のポートを表す {{domxref("MessagePort")}} オブジェクトを含む配列を返します。

## 値

{{domxref("MessagePort")}} オブジェクトの配列。

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

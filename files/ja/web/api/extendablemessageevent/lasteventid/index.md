---
title: ExtendableMessageEvent.lastEventId
slug: Web/API/ExtendableMessageEvent/lastEventId
---

{{APIRef("Service Workers API")}}

{{domxref("ExtendableMessageEvent")}} インターフェイスの **`lastEventID`** 読み取り専用プロパティは、サーバー送信イベント（[server-sent events](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)）で、イベントソースの最後のイベント ID を表します。 これは空の文字列です。

## 構文

```
var myLastEventId = extendableMessageEvent.lastEventId;
```

### 値

{{domxref("DOMString")}}。

## 例

次のコードをサービスワーカー内で使用して、{{domxref("PushMessageData")}} を介して受信したデータを[チャンネルメッセージ](/ja/docs/Web/API/Channel_Messaging_API)を介してメインコンテキストに送信することにより、プッシュメッセージに応答する場合、`onmessage` のイベントオブジェクトは `ExtendableMessageEvent` になります。

```js
var port;

self.addEventListener('push', function(e) {
  var obj = e.data.json();

  if(obj.action === 'subscribe' || obj.action === 'unsubscribe') {
    port.postMessage(obj);
  } else if(obj.action === 'init' || obj.action === 'chatMsg') {
    port.postMessage(obj);
  }
});

self.onmessage = function(e) {
  console.log(e.lastEventId);
  port = e.ports[0];
}
```

## 仕様

| 仕様                                                                                                                                                 | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-extendablemessageevent-lasteventid', 'ExtendableMessageEvent.lastEventId')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ExtendableMessageEvent.lastEventId")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [Channel Messaging](/ja/docs/Web/API/Channel_Messaging_API)

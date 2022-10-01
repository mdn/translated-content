---
title: MessagePort
slug: Web/API/MessagePort
---

{{APIRef("HTML DOM")}}

[Channel Messaging API](/ja/docs/Web/API/Channel_Messaging_API) の **`MessagePort`** インターフェースは、{{domxref("MessageChannel")}} の 2 つのポートの一方を表し、片方のポートから送信されるメッセージをもう片方のポートで受信待機できます。

{{AvailableInWorkers}}

## メソッド

_親である {{domxref("EventTarget")}} からのメソッドを継承します。_

- {{domxref("MessagePort.postMessage")}}
  - : ポートからメッセージを送信します。また、任意でオブジェクトの所有権を他のブラウジングコンテキストへ転送します。
- {{domxref("MessagePort.start")}}
  - : ポート上で順番待ちのメッセージの送信を開始します。({{domxref("EventTarget.addEventListener")}} を使用する場合のみ必要。これは、{{domxref("MessagePort.onmessage")}} を使用する場合を含みます)
- {{domxref("MessagePort.close")}}
  - : ポートとの接続を切断し、このポートはアクティブではなくなります。

## イベントハンドラ

_親である {{domxref("EventTarget")}} からのイベントハンドラを継承します。_

- {{domxref("MessagePort.onmessage")}}
  - : これは、`message` 型の {{domxref("MessageEvent")}} がポート上で発動した時に呼び出される {{domxref("EventListener")}} です。つまり、ポートがメッセージを受信した時に呼び出されます。
- {{domxref("MessagePort.onmessageerror")}}
  - : ポートで `messageerror` 型の {{domxref("MessageEvent")}} が発火すると呼び出されます。つまり、デシリアライズできないメッセージを受け取ったときです。

## 例

次のコードブロックには、{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} コンストラクタで作成された新しいチャンネルがあります。

Iframe が読み込まれると、{{domxref("MessageChannel.port1")}} に `onmessage` ハンドラーを登録し、メッセージと共に {{domxref("window.postMessage")}} を使用して IFrame に {{domxref("MessageChannel.port2")}} を送信します。

IFrame からメッセージが返却されると。`onMessage` 関数でメッセージをパラグラフに出力します。

```
var channel = new MessageChannel();
var output = document.querySelector('.output');
var iframe = document.querySelector('iframe');

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Listen for messages on port1
  channel.port1.onmessage = onMessage;

  // Transfer port2 to the iframe
  iframe.contentWindow.postMessage('Hello from the main page!', '*', [channel.port2]);
}


// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
}
```

完全に動作する例は、Github 上の [channel messaging basic demo](https://github.com/mdn/channel-messaging-basic-demo) を参照してください ([実際のデモも実行できます](http://mdn.github.io/channel-messaging-basic-demo/))。

## 仕様

| 仕様書                                                                                                   | 策定状況                         | 備考 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'web-messaging.html#message-ports','Message ports')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザの実装状況

{{Compat("api.MessagePort")}}

## 関連情報

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)

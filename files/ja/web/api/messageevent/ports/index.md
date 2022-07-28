---
title: MessageEvent.ports
slug: Web/API/MessageEvent/ports
tags:
  - API
  - DOM
  - MessagingEvent
  - プロパティ
  - リファレンス
  - messaging
  - ports
browser-compat: api.MessageEvent.ports
translation_of: Web/API/MessageEvent/ports
---
{{APIRef("HTML DOM")}}

**`ports`** は {{domxref("MessageEvent")}} インターフェイスの読み取り専用プロパティで、メッセージが（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、適切な場合に）送信されるチャネルに関連するポートを表す {{domxref("MessagePort")}} オブジェクトの配列です。

## 値

{{domxref("MessagePort")}} オブジェクトの配列です。

## 例

```js
onconnect = function(e) {
  var port = e.ports[0];

  port.addEventListener('message', function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。

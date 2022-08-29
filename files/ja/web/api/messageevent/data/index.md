---
title: MessageEvent.data
slug: Web/API/MessageEvent/data
tags:
  - API
  - DOM
  - MessageEvent
  - プロパティ
  - リファレンス
  - data
  - messaging
browser-compat: api.MessageEvent.data
translation_of: Web/API/MessageEvent/data
---
{{APIRef("HTML DOM")}}

**`data`** は {{domxref("MessageEvent")}} インターフェイスのプロパティで、このメッセージの送信元が送信するデータを表します。

## 値

このメッセージの送信元が送信するデータです。これはどの型でも構いません。

## 例

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。

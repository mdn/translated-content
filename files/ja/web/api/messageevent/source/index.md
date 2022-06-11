---
title: MessageEvent.source
slug: Web/API/MessageEvent/source
tags:
  - API
  - DOM
  - MessageEvent
  - プロパティ
  - リファレンス
  - messaging
  - source
browser-compat: api.MessageEvent.source
translation_of: Web/API/MessageEvent/source
---
{{APIRef("HTML DOM")}}

**`source`** は {{domxref("MessageEvent")}} インターフェイスの読み取り専用プロパティで、メッセージ送信者を表す `MessageEventSource` （{{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} オブジェクトのいずれか）です。

## 値

メッセージ送信者を表す `MessageEventSource` （{{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} オブジェクトのいずれか）です。

## 例

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
  console.log(e.source);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。

---
title: MessageEvent.lastEventId
slug: Web/API/MessageEvent/lastEventId
tags:
  - API
  - DOM
  - MessageEvent
  - プロパティ
  - リファレンス
  - lastEventID
  - messaging
browser-compat: api.MessageEvent.lastEventId
translation_of: Web/API/MessageEvent/lastEventId
---
{{APIRef("HTML DOM")}}

**`lastEventId`** は {{domxref("MessageEvent")}} インターフェイスの読み取り専用プロパティで、このイベントの固有の ID を表す {{domxref("DOMString")}} です。

## 値

ID を表す {{domxref("DOMString")}} です。

## 例

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
  console.log(e.lastEventId);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。

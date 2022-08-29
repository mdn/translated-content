---
title: MessageEvent.origin
slug: Web/API/MessageEvent/origin
tags:
  - API
  - DOM
  - MessageEvent
  - プロパティ
  - リファレンス
  - messaging
  - origin
browser-compat: api.MessageEvent.origin
translation_of: Web/API/MessageEvent/origin
---
{{APIRef("HTML DOM")}}

**`origin`** は {{domxref("MessageEvent")}} インターフェイスの読み取り専用プロパティで、メッセージ送信元のオリジンを表す {{domxref("USVString")}} です。

## 値

オリジンを表す {{domxref("USVString")}} です。

## 例

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
  console.log(e.origin);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。

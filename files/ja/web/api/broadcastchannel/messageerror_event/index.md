---
title: 'BroadcastChannel: messageerror イベント'
slug: Web/API/BroadcastChannel/messageerror_event
tags:
  - Event
translation_of: Web/API/BroadcastChannel/messageerror_event
---
{{APIRef}}

`messageerror` イベントは、逆シリアル化できないメッセージがチャネルに到着したときに {{domxref('BroadcastChannel')}} オブジェクトに対して発生します。

| バブリング                 | なし                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------ |
| キャンセル                 | 不可                                                                                 |
| インターフェイス           | {{domxref("MessageEvent")}}                                                 |
| イベントハンドラプロパティ | {{domxref("BroadcastChannel.onmessageerror","onmessageerror")}} |

## 例

このコードは [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を使用してメッセージとエラーをリッスンします。

```js
const channel = new BroadcastChannel('example-channel');

channel.addEventListener('message', (event) => {
  received.textContent = event.data;
});

channel.addEventListener('messageerror', (event) => {
  console.error(event);
});
```

上と同じですが、{{domxref("BroadcastChannel.onmessage","onmessage")}} と {{domxref("BroadcastChannel.onmessageerror","onmessageerror")}} のイベントハンドラプロパティを使用します。

```js
const channel = new BroadcastChannel('example-channel');

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

## 仕様

| 仕様                                                                                 | 状態                             |
| ------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('HTML WHATWG', 'indices.html#event-messageerror')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel.messageerror_event")}}

## 関連情報

- 関連イベント: {{domxref("BroadcastChannel.message_event","message")}}。

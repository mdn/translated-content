---
title: "BroadcastChannel: messageerror イベント"
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef}}

`messageerror` イベントは、シリアル化を解釈できないメッセージがチャンネルに到着したときに {{domxref('BroadcastChannel')}} オブジェクト上で発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("messageerror", (event) => { })
onmessageerror = (event) => { }
```

## イベント型

{{domxref("MessageEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MessageEvent")}}

## イベントプロパティ

_このインターフェイスは親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : メッセージ送信元によって送信されたデータです。
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 文字列で、メッセージ送信元のオリジンを表します。
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 文字列で、このイベントの一意の ID を表します。
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : メッセージイベントソース、すなわち {{glossary("WindowProxy")}}、{{domxref("MessagePort")}}、{{domxref("ServiceWorker")}} の何れかのオブジェクトで、メッセージの送信元を表します。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

このコードは [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を使用してメッセージとエラーを待ち受けします。

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

上と同じですが、 `onmessage` と `onmessageerror` のイベントハンドラープロパティを使用します。

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`message`](/ja/docs/Web/API/BroadcastChannel/message_event)

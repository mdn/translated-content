---
title: "Window: messageerror イベント"
slug: Web/API/Window/messageerror_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef}}

`messageerror` イベントは、解読できないメッセージを受け取った時に {{domxref('Window')}} オブジェクトに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('messageerror', (event) => { });

onmessageerror = (event) => { };
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
  - : `MessageEventSource` （{{domxref("WindowProxy")}}、{{domxref("MessagePort")}}、{{domxref("ServiceWorker")}} の何れかのオブジェクト）で、メッセージの送信元を表します。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

`messageerror` を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で待ち受けします。

```js
window.addEventListener('messageerror', (event) => {
    console.error(event);
});
```

同じもので、 `onmessageerror` イベントハンドラープロパティを使用したものです。

```js
window.onmessageerror = (event) => {
    console.error(event);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.postMessage()")}}
- 関連イベント: {{domxref("Window/message_event", "message")}}

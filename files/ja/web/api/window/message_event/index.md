---
title: "Window: message イベント"
slug: Web/API/Window/message_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef}}

`message` は {{domxref('Window')}} オブジェクトのイベントで、ウィンドウが例えば他の閲覧コンテキストからの [`Window.postMessage()`](/ja/docs/Web/API/Window/postMessage) の呼び出しによってメッセージを受け取った時に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('message', (event) => { });

onmessage = (event) => { };
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

あるスクリプトが、次のようなコードを使用して、別の [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) のような異なる閲覧コンテキストにメッセージを送信するとします。

```js
const targetFrame = window.top.frames[1];
const targetOrigin = 'https://example.org';
const windowMessageButton = document.querySelector('#window-message');

windowMessageButton.addEventListener('click', () => {
    targetFrame.postMessage('hello there', targetOrigin);
});
```

受信側は、以下のようなコードで [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用し、メッセージを待ち受けることができます。

```js
window.addEventListener('message', (event) => {
    console.log(`Received message: ${event.data}`);
});
```

他にも、リスナーは `onmessage` イベントハンドラープロパティを使用することもできます。

```js
window.onmessage = (event) => {
    console.log(`Received message: ${event.data}`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`messageerror`](/ja/docs/Web/API/Window/messageerror_event)
- [`Window.postMessage()`](/ja/docs/Web/API/Window/postMessage)

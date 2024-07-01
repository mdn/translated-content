---
title: "BroadcastChannel: message イベント"
slug: Web/API/BroadcastChannel/message_event
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef}}

`message` イベントは、メッセージがそのチャンネルに到着したときに {{domxref('BroadcastChannel')}} オブジェクト上で発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("message", (event) => { })
onmessage = (event) => { }
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

この例では "Sender" の [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) があり、ユーザーがボタンをクリックしたときに [`<textarea>`](/ja/docs/Web/HTML/Element/textarea) の内容を配信します。 "Receiver" の iframe は 2 つあり、ブロードキャストメッセージを受信し、その結果を [`<div>`](/ja/docs/Web/HTML/Element/div) 要素に書き込みます。

### Sender

```html hidden
<h1>Sender</h1>
<label for="message">Type a message to broadcast:</label><br />
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">Broadcast message</button>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 150px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}

textarea {
  padding: 0.2rem;
}

label,
br {
  margin: 0.5rem 0;
}

button {
  vertical-align: top;
  height: 1.5rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
const messageControl = document.querySelector("#message");
const broadcastMessageButton = document.querySelector("#broadcast-message");

broadcastMessageButton.addEventListener("click", () => {
  channel.postMessage(messageControl.value);
});
```

### Receiver 1

```html hidden
<h1>Receiver 1</h1>
<div id="received"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});
```

### Receiver 2

```html hidden
<h1>Receiver 2</h1>
<div id="received"></div>
```

```css hidden
body {
  border: 1px solid black;
  padding: 0.5rem;
  height: 100px;
  font-family: "Fira Sans", sans-serif;
}

h1 {
  font:
    1.6em "Fira Sans",
    sans-serif;
  margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel("example-channel");
channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});
```

### 結果

{{ EmbedLiveSample('Sender', '100%', 220) }}

{{ EmbedLiveSample('Receiver_1', '100%', 160) }}

{{ EmbedLiveSample('Receiver_2', '100%', 160) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`messageerror`](/ja/docs/Web/API/BroadcastChannel/messageerror_event)

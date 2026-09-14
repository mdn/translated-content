---
title: "EventSource: message イベント"
short-title: message
slug: Web/API/EventSource/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

**`message`** は {{domxref("EventSource")}} インターフェイスのイベントで、イベントソースからデータを受け取ったときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

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
  - : `MessageEventSource` （{{glossary("WindowProxy")}}、{{domxref("MessagePort")}}、{{domxref("ServiceWorker")}} のいずれかのオブジェクト）で、メッセージの送信元を表します。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャンネルに関連するポートを表します（チャンネルメッセージングや、共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

この基本的な例では、サーバーからイベントを受け取るために `EventSource` を作成し、 `sse.php` という名前のページがイベントを作成する役割を担っています。

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.addEventListener("message", (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
});
```

### onmessage による同等品

```js
evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サーバー送信イベントの使用](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/ja/docs/Web/API/EventSource/open_event)
- [`error`](/ja/docs/Web/API/EventSource/error_event)

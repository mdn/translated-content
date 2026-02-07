---
title: "BroadcastChannel: messageerror イベント"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: 079b166268e5a1353e4244133f5883a3f530228f
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

**`messageerror`** は {{domxref("BroadcastChannel")}} インターフェイスのイベントで、シリアル化の解除ができないメッセージがチャンネルに到着したときに発生します。

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

### messageerror イベントの待ち受け

このコードは {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用してメッセージとエラーを待ち受けします。

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

### 共有メモリーを使用した試行

`messageerror` イベントの一般的な原因は、{{jsxref("SharedArrayBuffer")}} オブジェクト、またはそれを裏付けとするバッファビューを[エージェントクラスター](/ja/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing)間で送信しようとすることです。次のコードはその例を示しています。

ページ A では次のコードを実行します。

```js
const channel = new BroadcastChannel("hello");
channel.postMessage({ data: new SharedArrayBuffer(1024) });
```

ページ B では次のコードを実行します。

```js
const channel = new BroadcastChannel("hello");
channel.addEventListener("messageerror", (event) => {
  console.error("Message error");
});
```

その後、ページ B はページ A から送信されたメッセージをシリアル化解除しようとすると、`messageerror` イベントを受信します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("BroadcastChannel/message_event", "message")}}

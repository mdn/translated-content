---
title: "SharedWorkerGlobalScope: connect イベント"
slug: Web/API/SharedWorkerGlobalScope/connect_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef}}

**`connect`** イベントは、新しいクライアントが接続したときに共有ワーカーの {{domxref("SharedWorkerGlobalScope")}} に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## イベント型

{{domxref("MessageEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MessageEvent")}}

## イベントプロパティ

_このインターフェイスには、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : メッセージ送信者から送信されたデータです。
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : 文字列で、メッセージ送信者のオリジンを表します。
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : 文字列で、このイベントの固有の ID を表します。
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : `MessageEventSource` （{{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} の何れかのオブジェクトがなれる）で、メッセージ送信者を表します。
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、必要に応じて）。

## 例

この例は共有ワーカーファイルを示しています。メインスレッドから {{domxref("MessagePort")}} を通してわーカーへの接続が発生したとき、 `onconnect` イベントハンドラーが呼び出されます。イベントオブジェクトは {{domxref("MessageEvent")}} です。

接続しようとしているポート番号は、イベントオブジェクトの `ports` 引数で参照することができます。この参照にはポートを通じて来るメッセージを扱うために割り当てられた `onmessage` ハンドラーがあり、その `postMessage()` メソッドにワーカーを使用してメインスレッドにメッセージを送り返すために使用することができます。

```js
self.onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };

  port.start();
};
```

実行している例を完成させるには、 [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([共有ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)) をご覧ください。

### addEventListener による同等の処理

{{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを使用してイベントハンドラーを設定することもできます。

```js
self.addEventListener("connect", (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("SharedWorkerGlobalScope")}}

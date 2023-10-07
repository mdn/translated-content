---
title: SharedWorker
slug: Web/API/SharedWorker
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Web Workers API")}}

**`SharedWorker`** インターフェイスは、ウィンドウ、iframe、ワーカーなど複数の閲覧コンテキストからアクセスできる、特定の種類のワーカーを表します。これらは専用ワーカーとは異なるインターフェイスを実装しており、異なるグローバルコンテキストである {{domxref("SharedWorkerGlobalScope")}} を持ちます。

> **メモ:** SharedWorkerが複数の閲覧コンテキストからアクセスできる場合、それらの閲覧コンテキストはすべて、まったく同じ元（同じプロトコル、ホスト、ポート）を共有している必要があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : 指定された URL のスクリプトを実行する共有ウェブワーカーを作成します。

## インスタンスプロパティ

_{{domxref("EventTarget")}} のプロパティを継承しています。_

- {{domxref("SharedWorker.port")}} {{ReadOnlyInline}}
  - : 共有ワーカーとの通信および制御に使用される {{domxref("MessagePort")}} オブジェクトを返します。

## イベント

- {{domxref("SharedWorker.error_event", "error")}}
  - : 共有ワーカーでエラーが発生したときに発行されます。

## メソッド

_{{domxref("EventTarget")}} のメソッドを継承しています。_

## 例

[基本的な共有ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[共有ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）には 2 つの HTML ページがあり、それぞれでは JavaScript で単純な計算を行っています。異なるスクリプトが同じワーカーファイルを使用して計算を行っているため、ページが異なるウィンドウで実行されていても、どちらもアクセスすることができます。

以下のコードでは `SharedWorker` オブジェクトを、 {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} コンストラクターを使用して生成しています。どちらのスクリプトもこれを格納します。

```js
const myWorker = new SharedWorker("worker.js");
```

どちらのスクリプトも、{{domxref("SharedWorker.port")}} プロパティを使用して作成された {{domxref("MessagePort")}} オブジェクトを通してワーカーにアクセスします。addEventListener を使用して onmessage イベントが関連づけられている場合、ポートはその `start()` メソッドを使用して手動で開始されます。

```js
myWorker.port.start();
```

ポートが開始されると、どちらのスクリプトも `port.postMessage()` と `port.onmessage` を使用して、それぞれワーカーにメッセージを投稿し、ワーカーから送られたメッセージを処理します。

```js
first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

ワーカー内部では {{domxref("SharedWorkerGlobalScope.connect_event", "onconnect")}} ハンドラーを使用して、前述と同じポートに接続します。そのワーカーに関連するポートは {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}} イベントの `ports` プロパティでアクセスできます。それから {{domxref("MessagePort") }} を使用して、ワーカーを開始します。ポートを始めるには `start()` メソッドを、メインスレッドから送られるメッセージを処理するには `onmessage` ハンドラーを使用します。

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Worker")}}

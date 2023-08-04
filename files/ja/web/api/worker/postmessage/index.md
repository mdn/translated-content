---
title: Worker.postMessage()
slug: Web/API/Worker/postMessage
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("Web Workers API")}}

**`postMessage()`** は {{domxref("Worker")}} インターフェイスのメソッドで、ワーカーの内部スコープにメッセージを送信します。これは、ワーカーに送信するデータを単一の引数として受け取ります。このデータは任意の値、または[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)で扱う JavaScript オブジェクト (循環参照を含んでもよい) が許可されます。

{{domxref("Worker")}} の `postMessage()` メソッドは {{domxref("MessagePort")}} の {{domxref("MessagePort.postMessage", "postMessage()")}} メソッドに委任して、受信する {{domxref("MessagePort")}} に対応するイベントループのタスクを追加します。

ワーカーは {{domxref("DedicatedWorkerGlobalScope.postMessage")}} メソッド使用して自分を起動したスレッドに情報を送り返すことができます。

## 構文

```js
postMessage(message)
postMessage(message, transfer)
```

### 引数

- `message`

  - : ワーカーに送るオブジェクトです。これは {{domxref("DedicatedWorkerGlobalScope.message_event")}} イベントに配信されるイベントの `data` フィールドに入ります。このデータは任意の値、または[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)で扱う JavaScript オブジェクト (循環参照を含んでもよい) が許可されます。

    `message` 引数が提供されて*いない*場合は、 `TypeError` が発生します。ワーカーに渡すデータが重要でない場合は、 `null` または `undefined` を明示的に渡すことができます。

- `transfer` {{optional_inline}}

  - : オプションで、所有権を移転する{{Glossary("Transferable Objects", "移転可能オブジェクト")}}の[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)です。オブジェクトの所有権が移転されると、そのオブジェクトは送信元のコンテキストでは使用できなくなり、送信先のワーカーのみが使用できるようになります。

    移転可能オブジェクトは {{jsxref("ArrayBuffer")}}、{{domxref("MessagePort")}}、{{domxref("ImageBitmap")}} のような移転可能なクラスのインスタンスです。 `null` を `transfer` の値として受け付けることはできません。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次のコードスニペットは、 {{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して {{domxref("Worker")}} オブジェクトを作成しています。2 つのフォーム入力要素 (`first` と `second`) のどちらかの値が変更されると、 {{domxref("HTMLElement/change_event", "change")}} イベントによって `postMessage()` が呼び出され、両方の入力要素の値が現在のワーカーに送信されます。

```js
const myWorker = new Worker('worker.js');

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}

second.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}
```

完全な例は、[簡単なワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) （[例を実行](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)）を参照してください。

> **メモ:** `postMessage()` は同時に一つしかオブジェクトを送信できません。上記のように、複数の値を渡したい場合は配列を送信してください。

### 移転を伴う例

この最小限の例では、 `main` が `ArrayBuffer` を作成して `myWorker` に移転し、次に `myWorker` がそれを `main` に再移転して、それぞれの段階で大きさを記録します。

#### main.js のコード

```js
// ワーカーの生成
const myWorker = new Worker("myWorker.js");

// myWorker を待ち受けしてバッファーを main に再移転する
myWorker.addEventListener("message", function handleMessageFromWorker(msg) {
  console.log("message from worker received in main:", msg);

  const bufTransferredBackFromWorker = msg.data;

  console.log(
    "buf.byteLength in main AFTER transfer back from worker:",
    bufTransferredBackFromWorker.byteLength
  );
});

// バッファーの生成
const myBuf = new ArrayBuffer(8);

console.log(
  "buf.byteLength in main BEFORE transfer to worker:",
  myBuf.byteLength
);

// myBuf を myWorker に送信し、配下の ArrayBuffer を移転する
myWorker.postMessage(myBuf, [myBuf]);

console.log(
  "buf.byteLength in main AFTER transfer to worker:",
  myBuf.byteLength
);
```

#### myWorker.js のコード

```js
// main を待ち受けしてバッファーを myWorker に移転する
self.onmessage = function handleMessageFromMain(msg) {
  console.log("message from main received in worker:", msg);

  const bufTransferredFromMain = msg.data;

  console.log(
    "buf.byteLength in worker BEFORE transfer back to main:",
    bufTransferredFromMain.byteLength
  );

  // バッファーを main に送信し返し、配下の ArrayBuffer を移転する
  self.postMessage(bufTransferredFromMain, [bufTransferredFromMain]);

  console.log(
    "buf.byteLength in worker AFTER transfer back to main:",
    bufTransferredFromMain.byteLength
  );
};
```

#### ログ出力

```bash
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
```

`byteLength` は `ArrayBuffer` が移転されると 0 になります。 `ArrayBuffer` の移転のより洗練された完全な動作例については、 [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b) の Firefox デモアドオンを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Worker")}} インターフェイス

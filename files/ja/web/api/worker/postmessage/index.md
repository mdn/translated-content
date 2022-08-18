---
title: Worker.prototype.postMessage()
slug: Web/API/Worker/postMessage
tags:
  - API
  - JavaScript
  - Method
  - Reference
  - Web Workers
  - Worker
  - postMessage
translation_of: Web/API/Worker/postMessage
browser-compat: api.Worker.postMessage
---
{{APIRef("Web Workers API")}}

**`postMessage()`** は {{domxref("Worker")}} インターフェイスのメソッドで、ワーカーの内部スコープにメッセージを送信します。これは、ワーカーに送信するデータを単一の引数として受け取ります。このデータは任意の値、または循環参照を含む場合は[構造化クローン](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)アルゴリズムで扱う JavaScript オブジェクトが許可されます。

{{domxref("Worker")}} の `postMessage()` メソッドは {{domxref("MessagePort")}} の {{domxref("MessagePort.postMessage", "postMessage()")}} メソッドに委任して、受信する {{domxref("MessagePort")}} に対応するイベントループのタスクを追加します。

`Worker` は {{domxref("DedicatedWorkerGlobalScope.postMessage")}} メソッド使用して自分を起動したスレッドに情報を送り返すことができます。

## 構文

```js
worker.postMessage(message, [transfer]);
```

### 引数

<dl><dt><em>message</em></dt><dd>ワーカーに送るオブジェクトです。これは {{domxref("DedicatedWorkerGlobalScope.onmessage")}} ハンドラーに配信されるイベントの <code>data</code> フィールドに入ります。このデータは任意の値、または循環参照を含む場合は<a href="/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">構造化クローン</a>アルゴリズムで扱う JavaScript オブジェクトが許可されます。</dd><dd><code>message</code> 引数が提供されて<em>いない</em>場合は、 <code>TypeError</code> が発生します。ワーカーに渡すデータが重要でない場合は、 <code>null</code> または <code>undefined</code> を明示的に渡すことができます。</dd><dt><em>transfer</em> {{optional_inline}}</dt><dd>オプションで、所有権を移転する {{domxref("Transferable")}} オブジェクトの<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array">配列</a>です。オブジェクトの所有権が移転されると、そのオブジェクトは送信元のコンテキストでは使用できなくなり、送信先のワーカーのみが使用できるようになります。</dd><dd>Transferable オブジェクトは {{jsxref("ArrayBuffer")}}、{{domxref("MessagePort")}}、{{domxref("ImageBitmap")}} のような移転可能なクラスのインスタンスです。 <code>null</code> を <code>transfer</code> の値として受け付けることはできません。</dd></dl>

### 返値

なし。

## 例

次のコードスニペットは、 {{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して {{domxref("Worker")}} オブジェクトを作成しています。2 つのフォーム入力要素 (`first` と `second`) のどちらかの値が変更されると、変更イベントによって `postMessage()` が呼び出され、両方の入力要素の値が現在のワーカーに送信されます。

```js
var myWorker = new Worker('worker.js');

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
```

完全な例は、[簡単なワーカーの例](https://github.com/mdn/simple-web-worker) ([実行例](https://mdn.github.io/simple-web-worker/)) を参照してください。

> **Note:** **メモ:** `postMessage()` は同時に一つしかオブジェクトを送信できません。上記のように、複数の値を渡したい場合は配列を送信してください。

### 移転を伴う例

この最小限の例では、 `main` が `ArrayBuffer` を作成して `myWorker` に移転し、次に `myWorker` がそれを `main` に再移転して、それぞれの段階で大きさを記録します。

#### main.js のコード:

```js
// ワーカーの生成
var myWorker = new Worker("myWorker.js");

// myWorker を待ち受けしてバッファーを main に再移転する
myWorker.addEventListener("message", function handleMessageFromWorker(msg) {
  console.log("message from worker received in main:", msg);

  var bufTransferredBackFromWorker = msg.data;

  console.log(
    "buf.byteLength in main AFTER transfer back from worker:",
    bufTransferredBackFromWorker.byteLength
  );
});

// バッファーの生成
var myBuf = new ArrayBuffer(8);

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

  var bufTransferredFromMain = msg.data;

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

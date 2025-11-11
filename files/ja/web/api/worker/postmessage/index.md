---
title: "Worker: postMessage() メソッド"
short-title: postMessage()
slug: Web/API/Worker/postMessage
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

**`postMessage()`** は {{domxref("Worker")}} インターフェイスのメソッドで、ワーカーにメッセージを送信します。最初の引数は、ワーカーに送信するデータです。データは、[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)で処理できる任意の JavaScript オブジェクトです。

{{domxref("Worker")}} の `postMessage()` メソッドは {{domxref("MessagePort")}} の {{domxref("MessagePort.postMessage", "postMessage()")}} メソッドに委任して、受信する {{domxref("MessagePort")}} に対応するイベントループのタスクを追加します。

ワーカーは {{domxref("DedicatedWorkerGlobalScope.postMessage")}} メソッド使用して自分を起動したスレッドに情報を送り返すことができます。

## 構文

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### 引数

- `message`
  - : ワーカーに送るオブジェクトです。これは {{domxref("DedicatedWorkerGlobalScope.message_event", "message")}} イベントに配信されるイベントの `data` フィールドに入ります。このデータは任意の値、または[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)で扱う JavaScript オブジェクト (循環参照を含んでもよい) が許可されます。

    引数 `message` は必須です。ワーカーに渡すデータが重要でない場合は、`null` または `undefined` を明示的に渡す必要があります。

- `transfer` {{optional_inline}}
  - : オプションで、[移譲可能なオブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)の[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)。これらのオブジェクトの所有権は出力先に渡され、送信側では使用できなくなります。これらの移譲可能なオブジェクトは、メッセージに添付する必要があります。そうしないと、移動はされるものの、実際には受信側ではアクセスできなくなります。
- `options` {{optional_inline}}
  - : 次のプロパティを含むオプションのオブジェクトです。
    - `transfer` {{optional_inline}}
      - : `transfer` 引数と同じ意味です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次のコードスニペットは、 {{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して {{domxref("Worker")}} オブジェクトを作成しています。2 つのフォーム入力要素 (`first` と `second`) のどちらかの値が変更されると、 {{domxref("HTMLElement/change_event", "change")}} イベントによって `postMessage()` が呼び出され、両方の入力要素の値が現在のワーカーに送信されます。

```js
const myWorker = new Worker("worker.js");

[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("メッセージがワーカーへ渡されました");
  };
});
```

完全な例は、[簡単なワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) （[例を実行](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)）を参照してください。

> [!NOTE]
> `postMessage()` は同時に一つしかオブジェクトを送信できません。上記のように、複数の値を渡したい場合は配列を送信してください。

### 移転を伴う例

この最小限の例では、 `main` が `ArrayBuffer` を作成して `myWorker` に移転し、次に `myWorker` がそれを `main` に再移転して、それぞれの段階で大きさを記録します。

#### main.js のコード

```js
// ワーカーの生成
const myWorker = new Worker("myWorker.js");

// myWorker を待ち受けしてバッファーを main に再移転する
myWorker.addEventListener("message", (msg) => {
  console.log("message from worker received in main:", msg);

  const bufTransferredBackFromWorker = msg.data;

  console.log(
    "buf.byteLength in main AFTER transfer back from worker:",
    bufTransferredBackFromWorker.byteLength,
  );
});

// バッファーの生成
const myBuf = new ArrayBuffer(8);

console.log(
  "buf.byteLength in main BEFORE transfer to worker:",
  myBuf.byteLength,
);

// myBuf を myWorker に送信し、配下の ArrayBuffer を移転する
myWorker.postMessage(myBuf, [myBuf]);

console.log(
  "buf.byteLength in main AFTER transfer to worker:",
  myBuf.byteLength,
);
```

#### myWorker.js のコード

```js
// main を待ち受けしてバッファーを myWorker に移転する
self.onmessage = (msg) => {
  console.log("message from main received in worker:", msg);

  const bufTransferredFromMain = msg.data;

  console.log(
    "buf.byteLength in worker BEFORE transfer back to main:",
    bufTransferredFromMain.byteLength,
  );

  // バッファーを main に送信し返し、配下の ArrayBuffer を移転する
  self.postMessage(bufTransferredFromMain, [bufTransferredFromMain]);

  console.log(
    "buf.byteLength in worker AFTER transfer back to main:",
    bufTransferredFromMain.byteLength,
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

---
title: 読み取り可能なバイトストリームの使用
slug: Web/API/Streams_API/Using_readable_byte_streams
l10n:
  sourceCommit: 0375c6ef43ed08593ce222dc23c8b2d29e6edfa7
---

{{DefaultAPISidebar("Streams")}}

読み取り可能なバイトストリームとは、[読み取り可能なストリーム](/ja/docs/Web/API/Streams_API/Using_readable_streams)のうち `type: "bytes"` の基盤バイトソースがあり、（ストリーム内部のキューをバイパスして）基盤ソースからコンシューマーへの効率的なゼロコピー移譲に対応しています。
これは、データが任意の大きさの、潜在的にとても大きなチャンクで供給されたりリクエストされたりする可能性があり、したがってコピーを避けることが効率を向上させる可能性がある使用される用途を意図しています。

この記事では、読み取り可能なバイトストリームと通常の「既定」ストリームとの比較、およびそれらをどのように作成し、使用するかについて説明します。

> [!NOTE]
> 読み取り可能なバイトストリームは、「通常の」読み取り可能なストリームとほとんど同じであり、概念もほとんどすべて同じです。
> この記事は、あなたがすでにそれらの概念を理解していることを想定しており、（もしそうであれば）表面的にしか取り上げません。
> 関連する概念に慣れていない方は、先に[読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)、[ストリームの概念と使用法の概要](/ja/docs/Web/API/Streams_API#概念と使用方法)、[ストリーム API の概要](/ja/docs/Web/API/Streams_API/Concepts) を読んでください。

## 概要

読み取り可能なストリームは、ファイルやソケットなどの基盤となるソースから、リーダー、変換ストリーム、書き込み可能ストリームなどのコンシューマーにデータをストリーミングするための一貫したインターフェイスを提供します。
通常の読み取り可能なストリームでは、基盤となるソースからのデータは常に内部キューを通ってコンシューマーに渡されます。
読み取り可能なバイトストリームは、内部キューが空の場合、基盤となるソースがコンシューマーに直接書き込める（効率的なゼロコピー移譲）という点で異なります。

読み取り可能なバイトストリームは `type: "bytes"` を `underlyingSource` オブジェクトに指定したものを、 [`ReadableStream()` コンストラクター](/ja/docs/Web/API/ReadableStream/ReadableStream)に渡すことで作成されます。
この値を設定すると、ストリームは {{domxref("ReadableByteStreamController")}} で作成され、`start(controller)` と `pull(controller)` コールバック関数を呼び出す際に、このオブジェクトが基盤内のソースに渡されます。

{{domxref("ReadableByteStreamController")}} と既定のコントローラー ({{domxref("ReadableStreamDefaultController")}}) との主な違いは、追加のプロパティ {{domxref("ReadableByteStreamController.byobRequest")}} （{{domxref("ReadableStreamBYOBRequest")}} 型）を持っていることです。
これは、基盤ソースからのゼロコピー移譲として行われる、コンシューマーによる待機中の読み取りリクエストを表します。
保留中のリクエストがない場合、このプロパティは `null` になります。

`byobRequest` は、読み取り可能なバイトストリームに対して読み取りリクエストが行われ、ストリームの内部キューにデータがない場合にのみ利用できます（データがある場合は、それらのキューからリクエストが満たされます）。

データを転送する必要があるバイト基盤は `byobRequest` プロパティを調べ、利用できる場合はそれを使用してデータを転送する必要があります。
プロパティが `null` の場合、受信データは代わりに {{domxref("ReadableByteStreamController.enqueue()")}} を使用してストリーム内部のキューに追加する必要があります（これは、「既定の」 ストリームを使用している場合にデータを転送する唯一の方法です）。

{{domxref("ReadableStreamBYOBRequest")}} は {{domxref("ReadableStreamBYOBRequest.view","view")}} プロパティを持っています。これは移譲のために割り当てられたバッファーに関するビューです。
基盤となるソースからのデータはこのプロパティに書き込まれ、次に基盤となるソースは、書き込まれたバイト数を示す {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} を呼び出さなければなりません。
これはデータが移譲されるべきことを指示し、コンシューマーによる待機中の読み取りリクエストは解決されます。
`respond()` を呼び出した後、 `view` には書き込みができなくなります。

追加のメソッド {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} もあります。このメソッドに、基盤となるソースは、移譲するデータを格納した「新しい」ビューを渡すことができます。
この新しいビューは、元と同じメモリーバッファー上で、同じ開始オフセットからでなければなりません。
このメソッドは、例えば、バイト基盤が最初にワーカースレッドにビューを移譲し、それを取得してから `byobRequest` に応答する必要がある場合に使用します。
ほとんどの場合、このメソッドは必要ありません。

読み取り可能なバイトストリームは通常、 {{domxref("ReadableStreamBYOBReader")}} を使用して読み取られます。これは、ストリーム上で {{domxref("ReadableStream.getReader()")}} を呼び出し、 options 引数に `mode: "byob"` を指定します。

読み取り可能なバイトストリームは、既定のリーダー ({{domxref("ReadableStreamDefaultReader")}}) を使用して読み取ることもできますが、この場合 `byobRequest` オブジェクトは、ストリームに対して自動バッファー割り当てが有効になっている（[`autoAllocateChunkSize`](/ja/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) がストリームの `underlyingSource` に設定されている）場合にのみ作成されます。
この用途では `autoAllocateChunkSize` で示されるサイズがバッファーサイズとして使用されることに注意してください。
このプロパティを指定しなかった場合、既定値ではリーダーは「動作」しますが、基盤になるソースに `byobRequest` が提供されることはなく、すべてのデータはストリームの内部キューを通じて転送されます。

上記の異なる点の他にも、バイトストリームのコントローラーと基盤は、既定のストリームのコントローラーととてもよく似ており、[ほぼ同じ方法で使用します](/ja/docs/Web/API/Streams_API/Using_readable_streams)。

## 例

### バイトリーダーの基盤のプッシュソース

このライブ例では、プッシュ基礎バイトソースで読み取り可能なバイトストリームを作成し、バイトリーダーを使用して読み取る方法を示します。

プル型バイトソースの場合とは異なり、データは任意の時点で到着します。
そのため、基礎となるソースは `controller.byobRequest` を使用して、受信データが存在する場合はそれを移譲し、そうでない場合はストリーム内部のキューにデータを入れる必要があります。
さらに、データはいつでも到着する可能性があるため、監視動作は `underlyingSource.start()` コールバック関数で設定します。

この例は、ストリーム仕様のプッシュバイトソースの例から大きな影響を受けています。
この例では、任意のサイズのデータを供給する「仮想ソケット」ソースを使用しています。
元の基盤がストリームにデータを送信するために移譲と待ち行列の両方を使用することができるように、リーダーは様々な点で意図的に遅延しています。
背圧対応は実演されていません。

> [!NOTE]
> 既定のリーダーでは、基盤バイトソースも使用することができます。
> 自動バッファー割り当てが有効になっている場合、コントローラーは、リーダーからの未処理のリクエストがあり、ストリームの内部キューが空である場合に、ゼロコピー移譲用に修正されたサイズのバッファーを供給します。
> 自動バッファー割り当てが有効になっていない場合、バイトストリームのデータはすべて常に待ち行列に入れられます。
> これは、"pull: underlying byte source "の例で表示させた動作に似ています。

#### 模擬基盤ソケットソース

模擬基盤には 3 つの重要なメソッドがあります。

- `select2()` は未処理のリクエストを表します。
  データが利用できると解決するプロミスを返します。
- `readInto()` はソケットから与えられたバッファーにデータを読み込み、データをクリアします。
- `close()` はソケットを閉じます。

実装するためにとても単純化しています。
下記で示すように、 `select2()` はタイムアウト時にランダムなサイズのランダムなデータのバッファー を作成します。
作成したデータはバッファーに読み込まれ、`readInto()` でクリアされます。

```js
class MockHypotheticalSocket {
  constructor() {
    this.max_data = 800; // ソケットからストリーミングするデータの総量
    this.max_per_read = 100; // 一度に読み取るデータ量の最大値
    this.min_per_read = 40; // 一度に読み取るデータ量の最大値
    this.data_read = 0; // total data read so far (capped is maxdata)
    this.socketdata = null;
  }

  // このソケットが読み取り可能な場合にプロミスを返すメソッド。
  select2() {
    // プロミスを解決するために使用するオブジェクト
    const resultobj = {};
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (this.data_read >= this.max_data) {
        //out of data
        resolve(resultobj);
        return;
      }

      // データの遅い読み込みをエミュレート
      setTimeout(() => {
        const numberBytesReceived = this.getNumberRandomBytesSocket();
        this.data_read += numberBytesReceived;
        this.socketdata = this.randomByteArray(numberBytesReceived);
        resultobj["bytesRead"] = numberBytesReceived;
        resolve(resultobj);
      }, 500);
    });
  }

  /* 指定したバッファーオフセットにデータを読み込む */
  readInto(buffer, offset, length) {
    let length_data = 0;
    if (this.socketdata) {
      length_data = this.socketdata.length;
      const myview = new Uint8Array(buffer, offset, length);
      // 指定した長さのデータをバッファーに書き込む
      // コードは常にバッファーが受信データより大きいことを想定
      for (let i = 0; i < length_data; i++) {
        myview[i] = this.socketdata[i];
      }
      this.socketdata = null; // Clear "socket" data after reading
    }
    return length_data;
  }

  // ダミーの close 関数
  close() {
    return;
  }

  // Return random number bytes in this call of socket
  getNumberRandomBytesSocket() {
    // Capped to remaining data and the max min return-per-read range
    const remaining_data = this.max_data - this.data_read;
    const numberBytesReceived =
      remaining_data < this.min_per_read
        ? remaining_data
        : this.getRandomIntInclusive(
            this.min_per_read,
            Math.min(this.max_per_read, remaining_data),
          );
    return numberBytesReceived;
  }

  // Return random number between two values
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // ランダムな文字の文字列を返す
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  /* ランダムな Uint8Array のバイト列を返す */
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- 以下の HTML と js は報告をセットアップします。読者には有益でないため、非表示にしています。 -->

```css hidden
.input {
  float: left;
  width: 50%;
}
.output {
  float: right;
  width: 50%;
  overflow-wrap: break-word;
}
button {
  display: block;
}
```

```html hidden
<button>Cancel stream</button>
<div class="input">
  <h2>Underlying source</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul></ul>
</div>
```

```js hidden
// リスト、段落、ボタンへの参照を格納
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// 最終結果を格納するために空文字列を作成
let result = "";

// 基盤からデータをログ出力する関数
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// コンシューマーのデータをログ出力する関数
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

#### 読み取り可能なソケットプッシュバイトストリームの作成

以下のコードは、読み取り可能なソケット「プッシュ」バイトストリームを定義する方法を示しています。

`underlyingSource` オブジェクトの定義は [`ReadableStream()` コンストラクター](/ja/docs/Web/API/ReadableStream/ReadableStream)の最初の引数として渡されます。
これを読み取り可能な「バイト」ストリームにするために、 `type: "bytes"` をオブジェクトのプロパティとして指定します。
これにより、ストリームは確実に {{domxref("ReadableByteStreamController")}} に（既定のコントローラー ({{domxref("ReadableStreamDefaultController")}} の代わりに）渡されるようになります。

データはコンシューマーが処理する準備ができる前にソケットに到着する可能性があるため、基盤の読み取りに関するすべての設定は `start()` コールバックメソッドで行います（データの処理を始めるにはプルを待ちません）。
実装は "socket" を開き、データをリクエストするために `select2()` を呼び出します。
返されたプロミスが解決されると、コードは `controller.byobRequest` が存在するか (`null` でないか) を調べ、存在する場合は `socket.readInto()` を呼び出してデータをリクエストにコピーして移譲します。
もし `byobRequest` が存在しなければ、ゼロコピーで転送できる消費ストリームからの未処理のリクエストはありません。
この場合、 `controller.enqueue()` を使用してストリーム内部のキューにデータをコピーします。

さらにデータを要求する `select2()` リクエストは、データがないリクエストを返すまで再投稿されます。
この点で、コントローラーはストリームを閉じるために使用されます。

```js
const stream = makeSocketStream("dummy host", "dummy port");

const DEFAULT_CHUNK_SIZE = 400;

function makeSocketStream(host, port) {
  const socket = new MockHypotheticalSocket();

  return new ReadableStream({
    type: "bytes",

    start(controller) {
      readRepeatedly().catch((e) => controller.error(e));
      function readRepeatedly() {
        return socket.select2().then(() => {
          // Since the socket can become readable even when there's
          // no pending BYOB requests, we need to handle both cases.
          let bytesRead;
          if (controller.byobRequest) {
            const v = controller.byobRequest.view;
            bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
            if (bytesRead === 0) {
              controller.close();
            }
            controller.byobRequest.respond(bytesRead);
            logSource(`byobRequest with ${bytesRead} bytes`);
          } else {
            const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
            bytesRead = socket.readInto(buffer, 0, DEFAULT_CHUNK_SIZE);
            if (bytesRead === 0) {
              controller.close();
            } else {
              controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
            }
            logSource(`enqueue() ${bytesRead} bytes (no byobRequest)`);
          }

          if (bytesRead === 0) {
            return;
            // no more bytes in source
          }
          return readRepeatedly();
        });
      }
    },

    cancel() {
      socket.close();
      logSource(`cancel(): socket closed`);
    },
  });
}
```

`readRepeatedly()` はプロミスを返すことに注意してください。これを使用して、読み込み処理の設定や処理で発生したエラーをキャッチします。
エラーは上で示したようにコントローラに渡されます（`readRepeatedly().catch((e) => controller.error(e));` を参照）。

最後に `cancel()` メソッドが指定され、基盤となっているソースを閉じます。`pull()` コールバックは不要なので実装しません。

#### プッシュバイトストリームの使用

以下のコードはソケットのバイトストリーム用に `ReadableStreamBYOBReader` を作成し、それを使用してデータをバッファーに読み込みます。
なお、 `processText()` が再帰的に呼び出され、バッファーが一杯になるまでデータを読み込まれることに注意してください。
基盤がもうデータがないと指示すると、`reader.read()`には `done` が設定され、読み込み処理を完了します。

このコードは、上記の[バイトリーダー付きの基盤プルソース](#バイトリーダー付きの基盤プルソース)の例とほとんど同じです。
唯一の違いは、リーダーが読み取りを遅くするコードを含んでいることです。

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that resolves when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(async function processText({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given all its data.
        // value - some data. Always undefined when done is true.

        if (done) {
          logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        //logConsumer(`Read ${bytesReceived} bytes: ${value}`);
        logConsumer(`Read ${bytesReceived} bytes`);
        result += value;

        // Add delay to emulate when data can't be read and data is enqueued
        if (bytesReceived > 300 && bytesReceived < 600) {
          logConsumer(`Delaying read to emulate slow stream reading`);
          const delay = (ms) =>
            new Promise((resolve) => setTimeout(resolve, ms));
          await delay(1000);
        }

        // Read some more, and call this function again
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processText);
      });
  }
}
```

#### リーダーと使用したストリームの取り消し

{{domxref("ReadableStreamBYOBReader.cancel()")}} を使用してストリームを取り消すことができます。
この例では、"user choice" の理由でボタンがクリックされた場合にメソッドを呼び出しています（ボタンの他の HTML やコードは表示していません）。
取り消される可能性がある処理が完了したときもログ出力しています。

```js
button.addEventListener("click", () => {
  reader
    .cancel("user choice")
    .then(() => logConsumer("reader.cancel complete"));
});
```

{{domxref("ReadableStreamBYOBReader.releaseLock()")}} を使用すると、ストリームを取り消すことなくリーダーを解放することができます。
ただし、未処理の読み込みリクエストは即座に拒否されることに注意してください。
残りのチャンクを読むために、後で新しいリーダーを取得することができます。

#### ストリームの close/error を監視

{{domxref("ReadableStreamBYOBReader.closed")}} プロパティは、ストリームが閉じられたときに解決し、エラーがある場合は拒否されたプロミスを返します。
このケースではエラーは期待されませんが、続くコードでは完了ケースをログ出力する必要があります。

```js
reader.closed
  .then(() => {
    logConsumer("ReadableStreamBYOBReader.closed: resolved");
  })
  .catch(() => {
    logConsumer("ReadableStreamBYOBReader.closed: rejected:");
  });
```

#### 結果

基盤となるプッシュソース（左）とコンシューマー（右）からのログ出力を下記に示します。
中央の期間は、データがゼロコピー処理として移譲されるのではなく、エンキューされる期間です。

{{EmbedLiveSample("Underlying push source with default reader","100%","500px")}}

### バイトリーダー付きの基盤プルソース

このライブ表示例は、ファイルなどの「プル」バイト基盤からデータを読み取り、ストリームによって {{domxref("ReadableStreamBYOBReader")}} にゼロコピー移譲する方法を示しています。

#### 模擬基盤ファイルソース

基盤となるプルソースには、以下のクラスを使用して、nodejs の [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)、特に [`read()`](https://nodejs.org/api/fs.html#filehandlereadbuffer-offset-length-position) メソッドを（とても表面的に）模倣します。
このクラスは、ファイルを表すランダムなデータを生成します。
`read()` メソッドはランダムなデータの「擬似乱数」の大きさのブロックを、指定された位置から提供されたバッファーに読み込みます。
`close()` メソッドは何かするわけではありません。ストリームのコンストラクターを定義する際に、ソースを閉じる場所を示すために指定されただけです。

> [!NOTE]
> 類似しているクラスは、すべての「プルソース」の例に使用しています。
> ここで表示させているのは、あくまで情報です（模擬であることがわかるように）。

```js
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // プロミスを解決するために使用するオブジェクト
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultobj);
        return;
      }

      // 乱数のバイト列を返すファイル読み込みのシミュレーション
      // リクエストされた最小バイト数と返すことができるランダムバイト数を読み取る
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // 提供されたバッファーにランダムデータを読み込む
      const myview = new Uint8Array(buffer, offset, readLength);
      // 指定した長さのデータを書く
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // データの遅い読み込みをエミュレート
      setTimeout(() => {
        resolve(resultobj);
      }, 1000);
    });
  }

  // ダミーの close 関数
  close() {
    return;
  }

  // ランダムな文字の文字列を返す
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  // ランダムな Uint8Array のバイト列を返す
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- 以下の HTML と js は報告をセットアップします。読者には有益でないため、非表示にしています。 -->

```css hidden
.input {
  float: left;
  width: 50%;
}
.output {
  float: right;
  width: 50%;
  overflow-wrap: break-word;
}
button {
  display: block;
}
```

```html hidden
<button>Cancel stream</button>
<div class="input">
  <h2>Underlying source</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul></ul>
</div>
```

```js hidden
// リスト、段落、ボタンへの参照を格納
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// 最終結果を格納するために空文字列を作成
let result = "";

// 基盤からデータをログ出力する関数
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// コンシューマーのデータをログ出力する関数
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

#### 読み取り可能なファイルバイトストリームの作成

以下のコードは、読み取り可能なファイルのバイトストリームを定義する方法を示しています。

前の例と同様に、 `underlyingSource` オブジェクト定義は [`ReadableStream()` コンストラクター](/ja/docs/Web/API/ReadableStream/ReadableStream)の最初の引数として渡されます。
これを読み取り可能な「バイト」ストリームにするために、オブジェクトのプロパティに `type: "bytes"` をオブジェクトのプロパティとして指定します。
これにより、ストリームに {{domxref("ReadableByteStreamController")}} が渡されることを確実にします。

`start()` 関数は単にファイルハンドルを開き、これは `cancel()` コールバックで閉じられます。
`cancel()` は {{domxref("ReadableStream.cancel()")}} または {{domxref("ReadableStreamDefaultController.close()")}} が呼び出された場合にリソースをクリーンアップするために指定されています。

最も興味深いコードは `pull()` コールバックです。
これはファイルから待機中の読み込みリクエストにデータをコピーし（{{domxref("ReadableByteStreamController.byobRequest")}}）、 {{domxref("ReadableStreamBYOBRequest.respond()","respond()")}} を呼び出してバッファー内のデータ量を示し、それを転送します。
ファイルから 0 バイトが転送された場合、すべてコピーされたことがわかり、コントローラーの {{domxref("ReadableStreamDefaultController.close()","close()")}} を呼び出します。

```js
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      const theView = controller.byobRequest.view;
      const { bytesRead, buffer } = await fileHandle.read(
        theView.buffer,
        theView.byteOffset,
        theView.byteLength,
        position,
      );
      if (bytesRead === 0) {
        await fileHandle.close();
        controller.close();
        controller.byobRequest.respond(0);
        logSource(
          `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
        );
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
      }
    },
    cancel(reason) {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
  });
}
```

#### バイトストリームの使用

以下のコードはファイルのバイトストリーム用に `ReadableStreamBYOBReader` を作成し、それを使用してデータをバッファーに読み込んでいます。
なお、 `processText()` が再帰的に呼び出され、バッファーが一杯になるまでデータを読み込みます。
基盤となるソースがこれ以上データがないことを指示すると、 `reader.read()` の `done` が true に設定され、読み込み処理を完了します。

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  // read() returns a promise that resolves when a value has been received
  reader
    .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
    .then(function processText({ done, value }) {
      // Result objects contain two properties:
      // done  - true if the stream has already given all its data.
      // value - some data. Always undefined when done is true.

      if (done) {
        logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
        return;
      }

      buffer = value.buffer;
      offset += value.byteLength;
      bytesReceived += value.byteLength;

      logConsumer(
        `Read ${value.byteLength} (${bytesReceived}) bytes: ${value}`,
      );
      result += value;

      // Read some more, and call this function again
      return reader
        .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
        .then(processText);
    });
}
```

最後に、ボタンがクリックされた場合にストリームを取り消される可能性のあるハンドラーを追加します（HTML とボタンのためのコードは示しません）。

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### 結果

基盤となるプルソース（左）とコンシューマー（右）からのログ出力を下記に示します。
特筆すべきことは次の通りです。

- `start()` 関数には `ReadableByteStreamController` が渡されます。
- リーダに渡されるバッファーは「ファイル」全体を包含するのに十分な大きさです。
  基礎となるデータソースは、ランダムサイズのチャンクでデータを供給します。

{{EmbedLiveSample("Underlying pull source","100%","500px")}}

### 既定のリーダー付きの基盤プルソース

このライブ例では、既定のリーダー ({{domxref("ReadableStreamDefaultReader")}}) を使用して、同じデータをゼロコピー移譲で読み取る方法を示します。
この例では、先の例と同じ[模擬基盤ファイルソース](#模擬基盤ファイルソース)を使用しています。

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // プロミスを解決するために使用するオブジェクト
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultobj);
        return;
      }

      // 乱数のバイト列を返すファイル読み込みのシミュレーション
      // リクエストされた最小バイト数と返すことができるランダムバイト数を読み取る
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // 提供されたバッファーにランダムデータを読み込む
      const myview = new Uint8Array(buffer, offset, readLength);
      // 指定した長さのデータを書く
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // データの遅い読み込みをエミュレート
      setTimeout(() => {
        resolve(resultobj);
      }, 1000);
    });
  }

  // ダミーの close 関数
  close() {
    return;
  }

  // ランダムな文字の文字列を返す
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  // ランダムな Uint8Array のバイト列を返す
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- 以下の HTML と js は報告をセットアップします。読者には有益でないため、非表示にしています。 -->

```css hidden
.input {
  float: left;
  width: 50%;
}
.output {
  float: right;
  width: 50%;
  overflow-wrap: break-word;
}
button {
  display: block;
}
```

```html hidden
<button>Cancel stream</button>
<div class="input">
  <h2>Underlying source</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul></ul>
</div>
```

```js hidden
// リスト、段落、ボタンへの参照を格納
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// 最終結果を格納するために空文字列を作成
let result = "";

// 基盤からデータをログ出力する関数
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// コンシューマーのデータをログ出力する関数
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

#### 自動バッファー割り当てによる読み取り可能なファイルバイトストリームの作成

唯一の基盤の違いは、`autoAllocateChunkSize` を指定しなければならないことと、コンシューマーから提供されるサイズではなく、`controller.byobRequest` のビューバッファーサイズとして使用することです。

```js
const DEFAULT_CHUNK_SIZE = 20;
const stream = makeReadableByteFileStream("dummy file.txt");

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      const theView = controller.byobRequest.view;
      const { bytesRead, buffer } = await fileHandle.read(
        theView.buffer,
        theView.byteOffset,
        theView.byteLength,
        position,
      );
      if (bytesRead === 0) {
        await fileHandle.close();
        controller.close();
        controller.byobRequest.respond(0);
        logSource(
          `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
        );
      } else {
        position += bytesRead;
        controller.byobRequest.respond(bytesRead);
        logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
      }
    },
    cancel(reason) {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
    autoAllocateChunkSize: DEFAULT_CHUNK_SIZE, // Only relevant if using a default reader
  });
}
```

#### 既定のリーダーでのバイトストリームの利用

以下のコードでは、モードを指定せずに `stream.getReader();` を呼び出してファイルバイトストリーム用の {{domxref("ReadableStreamDefaultReader")}} を作成し、それを使用してデータをバッファーに読み込んでいます。
コードの処理は、バッファーがコンシューマではなくストリームから供給されることを除いて、前回の例と同じです。

```js
const reader = stream.getReader();
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
      return;
    }

    bytesReceived += value.length;
    logConsumer(
      `Read ${value.length} (${bytesReceived}). Current bytes = ${value}`,
    );
    result += value;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

最後に、ボタンがクリックされた場合にストリームを取り消される可能性のあるハンドラーを追加します（ボタンのための他の HTML とコードは示しません）。

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### 結果

基盤のバイトプルソース（左）とコンシューマ（右）からのログ出力を下記に示します。

これでチャンクの幅は最大でも 20 バイトになったことに注意してください。これは、基盤のバイトソース (`autoAllocateChunkSize`) で指定した自動割り当てバッファのサイズだからです。
これらは、ゼロコピー移譲として行われます。

{{EmbedLiveSample("Underlying pull source with default reader","100%","500px")}}

### 既定のリーダーと割り当てなしのプルソース基盤

完全を期すために、自動バッファー割り当てに対応していないバイトソースの既定のリーダーも使用することができます。

```js hidden
class MockUnderlyingFileHandle {
  constructor() {
    this.maxdata = 100; // "file size"
    this.maxReadChunk = 25; // "max read chunk size"
    this.minReadChunk = 13; // "min read chunk size"
    this.filedata = this.randomByteArray(this.maxdata);
    this.position = 0;
  }

  // Read data from "file" at position/length into specified buffer offset
  read(buffer, offset, length, position) {
    // プロミスを解決するために使用するオブジェクト
    const resultobj = {};
    resultobj["buffer"] = buffer;
    resultobj["bytesRead"] = 0;

    return new Promise((resolve /*, reject*/) => {
      if (position >= this.maxdata) {
        //out of data
        resolve(resultobj);
        return;
      }

      // 乱数のバイト列を返すファイル読み込みのシミュレーション
      // リクエストされた最小バイト数と返すことができるランダムバイト数を読み取る
      let readLength =
        Math.floor(
          Math.random() * (this.maxReadChunk - this.minReadChunk + 1),
        ) + this.minReadChunk;
      readLength = length > readLength ? readLength : length;

      // 提供されたバッファーにランダムデータを読み込む
      const myview = new Uint8Array(buffer, offset, readLength);
      // 指定した長さのデータを書く
      for (let i = 0; i < readLength; i++) {
        myview[i] = this.filedata[position + i];
        resultobj["bytesRead"] = i + 1;
        if (position + i + 1 >= this.maxdata) {
          break;
        }
      }
      // データの遅い読み込みをエミュレート
      setTimeout(() => {
        resolve(resultobj);
      }, 1000);
    });
  }

  // ダミーの close 関数
  close() {
    return;
  }

  // ランダムな文字の文字列を返す
  randomChars(length = 8) {
    let string = "";
    let choices =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }

  // ランダムな Uint8Array のバイト列を返す
  randomByteArray(bytes = 8) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(this.randomChars(bytes));
  }
}
```

<!-- 以下の HTML と js は報告をセットアップします。読者には有益でないため、非表示にしています。 -->

```css hidden
.input {
  float: left;
  width: 50%;
}
.output {
  float: right;
  width: 50%;
  overflow-wrap: break-word;
}
button {
  display: block;
}
```

```html hidden
<button>Cancel stream</button>
<div class="input">
  <h2>Underlying source</h2>
  <ul></ul>
</div>
<div class="output">
  <h2>Consumer</h2>
  <ul></ul>
</div>
```

```js hidden
// リスト、段落、ボタンへの参照を格納
const list1 = document.querySelector(".input ul");
const list2 = document.querySelector(".output ul");
const button = document.querySelector("button");

// 最終結果を格納するために空文字列を作成
let result = "";

// 基盤からデータをログ出力する関数
function logSource(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list1.appendChild(listItem);
}

// コンシューマーのデータをログ出力する関数
function logConsumer(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list2.appendChild(listItem);
}
```

しかし、この場合、コントローラーは `byobRequest` を基盤に書き込むことはできません。
その代わりに、基盤ソースはデータをエンキューしなければなりません。
なお、このケースに対応するために、 `pull()` で `byobRequest` が存在するかどうかを調べる必要があります。

```js
const stream = makeReadableByteFileStream("dummy file.txt");
const DEFAULT_CHUNK_SIZE = 40;

function makeReadableByteFileStream(filename) {
  let fileHandle;
  let position = 0;
  return new ReadableStream({
    type: "bytes", // An underlying byte stream!
    start(controller) {
      // Called to initialise the underlying source.
      // For a file source open a file handle (here we just create the mocked object).
      fileHandle = new MockUnderlyingFileHandle();
      logSource(
        `start(): ${controller.constructor.name}.byobRequest = ${controller.byobRequest}`,
      );
    },
    async pull(controller) {
      // Called when there is a pull request for data
      if (controller.byobRequest) {
        const theView = controller.byobRequest.view;
        const { bytesRead, buffer } = await fileHandle.read(
          theView.buffer,
          theView.byteOffset,
          theView.byteLength,
          position,
        );
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
          controller.byobRequest.respond(0);
          logSource(
            `pull() with byobRequest. Close controller (read bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.byobRequest.respond(bytesRead);
          logSource(`pull() with byobRequest. Transfer ${bytesRead} bytes`);
        }
      } else {
        // No BYOBRequest so enqueue data to stream
        // NOTE, this branch would only execute for a default reader if autoAllocateChunkSize is not defined.
        const mynewBuffer = new Uint8Array(DEFAULT_CHUNK_SIZE);
        const { bytesRead, buffer } = await fileHandle.read(
          mynewBuffer.buffer,
          mynewBuffer.byteOffset,
          mynewBuffer.byteLength,
          position,
        );
        if (bytesRead === 0) {
          await fileHandle.close();
          controller.close();
          controller.enqueue(mynewBuffer);
          logSource(
            `pull() with no byobRequest. Close controller (read bytes: ${bytesRead})`,
          );
        } else {
          position += bytesRead;
          controller.enqueue(mynewBuffer);
          logSource(`pull() with no byobRequest. enqueue() ${bytesRead} bytes`);
        }
      }
    },
    cancel(reason) {
      // This is called if the stream is cancelled (via reader or controller).
      // Clean up any resources
      fileHandle.close();
      logSource(`cancel() with reason: ${reason}`);
    },
  });
}
```

```js hidden
const reader = stream.getReader();

readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let result = "";

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
      return;
    }

    bytesReceived += value.length;
    logConsumer(`Read ${bytesReceived} bytes so far. Current bytes = ${value}`);
    result += value;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

```js hidden
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => {
    logConsumer(`reader.cancel complete`);
  });
});
```

#### 結果

基礎となるプルソース（左）とコンシューマ（右）からのログ出力を下記に示します。
基盤となるソースの側は、データがゼロバイト移譲ではなく、エンキューされたことを示していることに注意してください。

{{EmbedLiveSample("Underlying pull source with default reader and no allocation","100%","500px")}}

## 関連情報

- [ストリーム API の概念](/ja/docs/Web/API/Streams_API/Concepts)
- [ストリームの概念と使用方法の概要](/ja/docs/Web/API/Streams_API#概念と使用方法)
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)

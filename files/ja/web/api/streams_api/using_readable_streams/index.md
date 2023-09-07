---
title: 読み取り可能なストリームの使用
slug: Web/API/Streams_API/Using_readable_streams
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiref("Streams")}}

JavaScript 開発者として、ネットワークを介して受信したデータのストリームをチャンクごとにプログラムで読み取り、操作することはとても便利です。しかし、ストリーム API の読み取り可能なストリームの機能はどのように使用するのでしょうか。この記事では、その基本について説明します。

> **メモ:** この記事は、読者が読み取り可能なストリームの用途を理解し、高レベルの概念を理解していることを前提としています。 そうでない場合は、まず[ストリームの概念と使用方法の概要](/ja/docs/Web/API/Streams_API#概念と使用方法)と[ストリーム API の概念](/ja/docs/Web/API/Streams_API/Concepts)の記事を読んでから、戻ってくることをお勧めします。

> **メモ:** 書き込み可能なストリームに関する情報を探しているのであれば、[書き込み可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_writable_streams)を見てみてください。

## ブラウザーの対応

Fetch の本文オブジェクトをストリームとして消費し、自分自身で読み取り可能なストリームを作成することができます。ほとんどのブラウザーで可能です。
[パイプチェーン](/ja/docs/Web/API/Streams_API/Concepts#パイプチェーン)の対応はまだ普遍的ではないので、互換性一覧表を調べる価値があるかもしれません（例えば、 {{domxref("ReadableStream.pipeThrough()")}} を参照してください）。

## いくつかの例を見つける

この記事では、[dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) リポジトリーから取得したさまざまな例を見ていきます。 そこには完全なソースコードと例へのリンクがあります。

## フェッチをストリームとして消費する

[Fetch API](/ja/docs/Web/API/Fetch_API) は、ネットワークを通じてリソースをフェッチすることができ、 [XHR](/ja/docs/Web/API/XMLHttpRequest) に代わる現代的な方法を提供します。これには多くの利点があり、実に素晴らしいのは、ブラウザーが最近、フェッチしたレスポンスを読み取り可能なストリームとして消費する機能を追加したことです。

{{domxref("Request.body")}} と {{domxref("Response.body")}} プロパティが利用できますが、これらは本体の中身を読み取り可能なストリームとして取得できるゲッターです。

単純なストリームポンプ（[Simple stream pump](https://github.com/mdn/dom-examples/tree/main/streams/simple-pump)）の例が示しているように（[ライブも参照](https://mdn.github.io/dom-examples/streams/simple-pump/)）、それを公開することは、次のように応答の `body` プロパティにアクセスするだけのことです。

```js
// 元の画像を読み取る
fetch("./tortoise.png")
  // その body を ReadableStream として取得
  .then((response) => response.body);
```

これにより、 {{domxref("ReadableStream")}} オブジェクトが提供されます。

### リーダーの取り付け

ストリームする本体が得られました。ストリームを読むには、リーダーを取り付ける必要があります。 これは、 {{domxref("ReadableStream.getReader()")}} メソッドを使用して行われます。

```js
// 元の画像をフェッチ
fetch("./tortoise.png")
  // その body を ReadableStream として取得
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();
    // …
  });
```

このメソッドを呼び出すと、リーダーが作成され、ストリームにロックされます。このリーダーが解放されるまで、他のリーダーはこのストリームを読み取ることができません。 解放するには、例えば {{domxref("ReadableStreamDefaultReader.releaseLock()")}} を呼び出します。

また、`response.body` は同期的であり、プロミスを必要としないため、前の例を 1 ステップ減らすことができることに注意してください。

```js
// 元の画像をフェッチ
fetch("./tortoise.png")
  // その body を ReadableStream として取得
  .then((response) => {
    const reader = response.body.getReader();
    // …
  });
```

### ストリームを読む

リーダーを取り付けたら、{{domxref("ReadableStreamDefaultReader.read()")}} メソッドを使用してストリームからデータチャンクを読み取ることができます。 これにより、ストリームから 1 つチャンクを読み取って、好きなことを実行できます。 例えば、単純なストリームポンプの例では、新しいカスタム `ReadableStream` で各チャンクをキューに入れ（これについては次のセクションで詳しく説明します）、そこから新しい {{domxref("Response")}} を作成し、{{domxref("Blob")}} として使用し、 {{domxref("URL.createObjectURL()")}} を使用してその blob からオブジェクト URL を取得し、それを {{htmlelement("img")}} 要素で画面に表示して、元のフェッチした画像のコピーを効果的に作成します。

```js
// 元の画像を取得
fetch("./tortoise.png")
  // 本体を ReadableStream として取得
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // データを消費する必要がなくなったら、ストリームを閉じる
            if (done) {
              controller.close();
              return;
            }
            // 次のデータチャンクを対象のストリームのキューに入れる
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  })
  // 新しいレスポンスをストリームの外に作成
  .then((stream) => new Response(stream))
  // レスポンスのオブジェクト URL を作成
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  // Update image
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

`read()` の使用方法を詳しく見てみましょう。 上記の `pump()` 関数では、最初に結果オブジェクトを含むプロミスを返す `read()` を呼び出します。 結果オブジェクトには、次のように読み取りの結果が `{ done, value }` の形式で含まれています。

```js
reader.read().then(({ done, value }) => {
  /* … */
});
```

結果は、次の 3 つの異なる形式のいずれかになります。

- チャンクが読み取り可能であれば、 `{ value: theChunk, done: false }` の形式のオブジェクトでプロミスが履行されます。
- ストリームが閉じられると、`{ value: undefined, done: true }` という形式のオブジェクトでプロミスが履行されます。
- ストリームにエラーが発生すると、関連するエラーでプロミスが拒否されます。

次に、 `done` が `true` であるかどうかを確認します。 その場合、読み込むチャンクはもうないので（値は `undefined` です）、関数から戻り、{{domxref("ReadableStreamDefaultController.close()")}} でカスタムストリームを閉じます。

```js
if (done) {
  controller.close();
  return;
}
```

> **メモ:** `close()` は、ここで説明している元のストリームではなく、新しいカスタムストリームの一部です。 次の節でカスタムストリームについて詳しく説明します。

`done` が `true` でない場合、読み込んだ新しいチャンク（結果オブジェクトの `value` プロパティに含まれる）を処理してから、再度 `pump()` 関数を呼び出して次のチャンクを読み込みます。

```js
// 次のデータチャンクを対象のストリームのキューに入れます
controller.enqueue(value);
return pump();
```

これは、ストリームのリーダーを使用するときに示される次のような標準パターンです。

1. ストリームの読み取りを開始する関数を作成します。
2. 読み込むストリームがこれ以上ない場合は、関数から戻ります。
3. さらに読み込むストリームがある場合は、現在のチャンクを処理してから、関数を再度実行します。
4. 読み取るストリームがなくなるまで関数を再帰的に実行し続けます。 この場合、手順 2 が実行されます。

> **メモ:** この関数は `pump()` が自分自身を呼び出すかのように見え、深い再帰につながる可能性があります。しかし、 `pump` は非同期であり、それぞれの `pump()` の呼び出しはプロミスハンドラーの終わりにあるため、実際にはプロミスハンドラーの連鎖に類似しています。

## 独自の読み取り可能なストリームを作成する

この記事で学習している単純なストリームポンプの例には 2 番目の部分が含まれています — フェッチした本体から画像をチャンク単位で読み取った後、独自作成の別のカスタムストリームのキューに入れます。 これをどのように作成するのでしょうか？ `ReadableStream()` コンストラクターです。

### ReadableStream() コンストラクター

Fetch の場合のように、ブラウザーが提供したストリームから読み取るのは簡単ですが、時にはカスタムストリームを作成し、自分自身でチャンクを投入する必要がある場合があります。 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターを使うと、最初のうちは複雑に見えますが、実はそれほど悪くない構文でこれを行うことができます。

一般的な構文の骨組みは次のようになります。

```js
const stream = new ReadableStream(
  {
    start(controller) {},
    pull(controller) {},
    cancel() {},
    type,
    autoAllocateChunkSize,
  },
  {
    highWaterMark: 3,
    size: () => 1,
  },
);
```

コンストラクターは、引数として 2 つのオブジェクトを取ります。 最初のオブジェクトは必須であり、データの読み取り元である基になるソースのモデルを JavaScript で作成します。 2 番目のオブジェクトはオプションであり、ストリームに使用する[カスタムのキューイング戦略](/ja/docs/Web/API/Streams_API/Concepts#内部キューとキューイング戦略)を指定できます。 これを行う必要はほとんどないため、ここでは最初のものに集中します。

次のように最初のオブジェクトには最大 5 つのメンバーを含めることができ、最初のオブジェクトのみが必須です。

1. `start(controller)` — `ReadableStream` が構築された直後に 1 回だけ呼び出されるメソッド。 このメソッド内には、ストリーム機能を設定するコードを含める必要があります。 例えば、データの生成を開始するか、ソースにアクセスします。
2. `pull(controller)` — 含まれている場合、ストリームの内部キューがいっぱいになるまで繰り返し呼び出されるメソッド。 これは、より多くのチャンクがキューに入れられるときにストリームを制御するために使用できます。
3. `cancel()` — 含まれている場合、ストリームをキャンセルすることをアプリが通知した場合に呼び出されるメソッド（例えば、 {{domxref("ReadableStream.cancel()")}} が呼び出された場合）。 内容は、ストリームのソースへのアクセスを解放するために必要なことを行う必要があります。
4. `type` および `autoAllocateChunkSize` — これらが含まれている場合、ストリームがバイトストリームであることを示すために使用されます。バイトストリームは、通常の（既定の）ストリームとは目的や用途が多少異なるため、今後のチュートリアルで個別に取り上げます。また、まだどこでも実装されていません。

簡単な例のコードをもう一度見ると、次のように `ReadableStream()` コンストラクターには、フェッチしたストリームからすべてのデータを読み取るための単一のメソッド `start()` のみが含まれていることがわかります。

```js
// 元の画像をフェッチ
fetch("./tortoise.png")
  // 本体を ReadableStream として取得
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // データを消費する必要がなくなったら、ストリームを閉じます
            if (done) {
              controller.close();
              return;
            }
            // 次のデータチャンクを対象のストリームのキューに入れます
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  });
```

### ReadableStream コントローラー

`ReadableStream()` コンストラクターに渡される `start()` メソッドと `pull()` メソッドには `controller` 引数が与えられます。 これらは、ストリームの制御に使用できる {{domxref("ReadableStreamDefaultController")}} クラスのインスタンスです。

この例では、コントローラーの {{domxref("ReadableStreamDefaultController.enqueue","enqueue()")}} メソッドを使用して、値をフェッチした本体から読み取った後、カスタムストリームのキューに入れます。

さらに、フェッチした本体の読み取りが完了したら、コントローラーの {{domxref("ReadableStreamDefaultController.close","close()")}} メソッドを使用してカスタムストリームを閉じます。 以前にキューに入れられたチャンクはそれから読み取ることができますが、キューに入れることはできません。 読み取りが終了すると、ストリームは閉じられます。

### カスタムストリームからの読み取り

単純なストリームポンプの例では、カスタムの読み取り可能なストリームを {{domxref("Response.Response", "Response")}} コンストラクターの呼び出しに渡すことで消費し、その後 `blob()` として消費します。

```js
readableStream
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

ただし、カスタムストリームも `ReadableStream` インスタンスであるため、それにリーダーを取りつけることができます。 例として、単純なランダムストリーム（[Simple random stream](https://github.com/mdn/dom-examples/blob/main/streams/simple-random-stream/index.html)）のデモをご覧ください（[ライブも参照](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。これはカスタムストリームを作成し、いくつかのランダムな文字列をキューに入れてから、\[文字列の生成を停止] ボタンが押されるとストリームからデータを再度読み取ります。

> **メモ:** {{domxref("FetchEvent.respondWith()")}} を使用してストリームを消費するためには、キューに入ったストリームコンテンツは {{jsxref("Uint8Array")}} 型でなければなりません。例えば、 {{domxref("TextEncoder")}} を使用してエンコードされます。

カスタムストリームのコンストラクターには、{{domxref("setInterval()")}} 呼び出しを使用して 1 秒ごとにランダムな文字列を生成する `start()` メソッドがあります。 次に、{{domxref("ReadableStreamDefaultController.enqueue()")}} を使用してストリームに入れます。 ボタンが押されると、インターバルがキャンセルされ、 `readStream()` と呼ばれる関数が呼び出されて、データをストリームから再度読み取ります。 また、チャンクをストリームのキューへ入れることを止めたため、ストリームを閉じます。

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      const string = randomChars();
      // ストリームに文字列を追加
      controller.enqueue(string);
      // それを画面に表示
      const listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);
    button.addEventListener("click", () => {
      clearInterval(interval);
      readStream();
      controller.close();
    });
  },
  pull(controller) {
    // この例では実際には pull は必要ありません
  },
  cancel() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    clearInterval(interval);
  },
});
```

`readStream()` 関数自体では、　{{domxref("ReadableStream.getReader()")}} を使用してリーダーをストリームにロックし、先ほど見たのと同様のパターンに従います。 `read()` で各チャンクを読み取り、`done` が `true` であるかどうかを確認し、その場合はプロセスを終了し、そうでない場合は `read()` メソッドを再度実行する前に次のチャンクを読み取って処理します。

```js
function readStream() {
  const reader = stream.getReader();
  let charsReceived = 0;
  let result = "";

  // read() は、値を受け取ったときに解決するプロミスを返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // done  - ストリームがすべてのデータを既に提供している場合は true。
    // value - 一部のデータ。 done が true の場合、常に undefined。
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    charsReceived += value.length;
    const chunk = value;
    const listItem = document.createElement("li");
    listItem.textContent = `Read ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // さらに読み、この関数を再度呼び出します
    return reader.read().then(processText);
  });
}
```

### ストリームのクローズとキャンセル

{{domxref("ReadableStreamDefaultController.close()")}} を使用してリーダーを閉じる例を既に示しました。 前に言ったように、以前にキューに入れられたチャンクはすべて読み込まれますが、閉じられているため、それ以上キューに入れることはできません。

ストリームを完全に取り除き、キューに入れられたチャンクを破棄したい場合は、{{domxref("ReadableStream.cancel()")}} または {{domxref("ReadableStreamDefaultReader.cancel()")}} を使用します。

## ストリームの分岐

ストリームを 2 回同時に読み取りたい場合があります。 これは、{{domxref("ReadableStream.tee()")}} メソッドを介して実現されます。元の読み取り可能なストリームの 2 つの同一コピーを含む配列を出力し、2 つの別々のリーダーで個別に読み取ることができます。

例えば[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)で、サーバーからレスポンスを取得してブラウザーにストリーミングしつつ、サービスワーカーのキャッシュにもストリーミングしたい場合、このようなことを行うかもしれません。レスポンス本文は複数回消費することができず、ストリームは一度に複数のリーダーから読めないので、これを行うには 2 つのコピーが必要です。

単純な分岐の例（[Simple tee example](https://github.com/mdn/dom-examples/blob/main/streams/simple-tee-example/index.html)）でこの例を示します（[ライブも参照](https://mdn.github.io/dom-examples/streams/simple-tee-example/)）。 この例は、単純なランダムストリームとほぼ同じように機能しますが、ボタンを押してランダムな文字列の生成を停止すると、カスタムストリームが取得されて分岐され、結果の両方のストリームが読み取られる点が異なります。

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## パイプチェーン

ストリームのもう一つの機能として、ストリームを互いにパイプ接続する機能（[パイプチェーン](/ja/docs/Web/API/Streams_API/Concepts#パイプチェーン)と呼ばれる）があります。このメソッドには、読み取り可能なストリームをライターとリーダーのペアを通してパイプ接続し、あるデータ形式を別の形式に変換する {{domxref("ReadableStream.pipeThrough()")}} と、パイプチェーンの終点として動作するライターに読み取り可能なストリームをパイプする {{domxref("ReadableStream.pipeTo()")}} の 2 つが含まれます。

[Unpack Chunks of a PNG](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) ([ライブでも確認](https://mdn.github.io/dom-examples/streams/png-transform-stream/)) という簡単な例を見てみましょう。これは、画像をストリームとして取得し、それをカスタム PNG 変換ストリームに接続して、バイナリーデータストリームから PNG チャンクを取得するものです。

```js
// 元の画像をフェッチ
fetch("png-logo.png")
  // その body を ReadableStream として取得
  .then((response) => response.body)
  // 元の画像からグレースケール PNG ストリームを作成
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

{{domxref("TransformStream")}} を使用する例は、まだありません。

## まとめ

以上が、「既定の」読み取り可能なストリームの基本的な説明です。

読み取り可能なバイトストリームの使用方法については、[読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams) を参照してください.
ストリームの内部キューをバイパスして、コンシューマーへのゼロコピー転送を効率的に実行できる基礎となるバイトソースのあるストリームです。

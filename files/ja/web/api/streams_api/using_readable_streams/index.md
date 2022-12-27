---
title: 読み取り可能なストリームの使用
slug: Web/API/Streams_API/Using_readable_streams
---

{{apiref("Streams")}}

JavaScript 開発者として、ネットワークを介して受信したデータのストリームをチャンクごとにプログラムで読み取り、操作することは非常に便利です！ しかし、Streams API の読み取り可能なストリームの機能はどのように使用するのでしょうか？ この記事では、その基本について説明します。

> **メモ:** この記事は、読者が読み取り可能なストリームのユースケースを理解し、高レベルの概念を理解していることを前提としています。 そうでない場合は、まず [Streams の概念と使用方法の概要](/ja/docs/Web/API/Streams_API#Concepts_and_usage)と専用の [Streams API の概念](/ja/docs/Web/API/Streams_API/Concepts)の記事を読んでから、戻ってくることをお勧めします。

> **メモ:** 書き込み可能なストリームに関する情報を探している場合は、代わりに[書き込み可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_writable_streams)を試してください。

## ブラウザーのサポート

Firefox 65 以降および Chrome 42 以降（および同等の Chromium ベースのブラウザー）で、Fetch の {{domxref("Body")}} オブジェクトをストリームとして消費し、独自のカスタムの読み取り可能なストリームを作成できます。 [パイプチェーン](/ja/docs/Web/API/Streams_API/Concepts#Pipe_chains)は現在 Chrome でのみサポートされており、その機能は変更される可能性があります。

## いくつかの例を見つける

この記事では、[dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams) リポジトリから取得したさまざまな例を見ていきます。 そこには完全なソースコードと例へのリンクがあります。

## フェッチをストリームとして消費する

[Fetch API](/ja/docs/Web/API/Fetch_API) を使用すると、ネットワーク経由でリソースをフェッチでき、[XHR](/ja/docs/Web/API/XMLHttpRequest) の最新の代替手段が提供されます。 これには多くの利点がありますが、本当に素晴らしいのは、ブラウザーがフェッチの応答を読み取り可能なストリームとして消費する機能を最近追加したことです。

{{domxref("Body")}} ミックスインには {{domxref("Body.body","body")}} プロパティが含まれるようになりました。 これは、ボディの内容を読み取り可能なストリームとして公開する単純なゲッターです。 このミックスインは、{{domxref("Request")}}（要求）インターフェイスと {{domxref("Response")}}（応答）インターフェイスの両方で実装されているため、両方で使用できますが、応答のボディのストリームを消費するであろうことはちょっとだけ明白です。

単純なストリームポンプ（[Simple stream pump](https://github.com/mdn/dom-examples/tree/master/streams/simple-pump)）の例が示しているように（[ライブも参照](https://mdn.github.io/dom-examples/streams/simple-pump/)）、それを公開することは、次のように応答の `body` プロパティにアクセスするだけのことです。

```js
// 元の画像をフェッチ
fetch('./tortoise.png')
// その body を ReadableStream として取得
.then(response => response.body)
```

これにより、{{domxref("ReadableStream")}} オブジェクトが提供されます。

### リーダーの取り付け

ストリームするボディができました。 ストリームを読むには、リーダーを取り付ける必要があります。 これは、{{domxref("ReadableStream.getReader()")}} メソッドを使用して行われます。

```js
// 元の画像をフェッチ
fetch('./tortoise.png')
// その body を ReadableStream として取得
.then(response => response.body)
.then(body => {
  const reader = body.getReader();
```

このメソッドを呼び出すと、リーダーが作成され、ストリームにロックされます — このリーダーが開放されるまで、他のリーダーはこのストリームを読み取ることができません。 開放するには、例えば {{domxref("ReadableStreamDefaultReader.releaseLock()")}} を呼び出します。

また、`response.body` は同期的であり、promise を必要としないため、前の例を 1 ステップ減らすことができることに注意してください。

```js
// 元の画像をフェッチ
  fetch('./tortoise.png')
  // その body を ReadableStream として取得
  .then(response => {
    const reader = response.body.getReader();
```

### ストリームを読む

リーダーを取り付けたら、{{domxref("ReadableStreamDefaultReader.read()")}} メソッドを使用してストリームからデータチャンクを読み取ることができます。 これにより、ストリームから 1 つチャンクを読み取って、好きなことを実行できます。 例えば、単純なストリームポンプの例では、新しいカスタム `ReadableStream` で各チャンクをキューに入れ（これについては次のセクションで詳しく説明します）、そこから新しい {{domxref("Response")}} を作成し、{{domxref("Blob")}} として使用し、 {{domxref("URL.createObjectURL()")}} を使用してその blob からオブジェクト URL を取得し、それを {{htmlelement("img")}} 要素で画面に表示して、元のフェッチした画像のコピーを効果的に作成します。

```js
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
    }
  })
})
.then(stream => new Response(stream))
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
.then(url => console.log(image.src = url))
.catch(err => console.error(err));
```

`read()` の使用方法を詳しく見てみましょう。 上記の `pump()` 関数では、最初に結果オブジェクトを含む promise を返す `read()` を呼び出します。 結果オブジェクトには、次のように読み取りの結果が `{ done, value }` の形式で含まれています。

```js
return reader.read().then(({ done, value }) => {
```

結果は、次の 3 つの異なるタイプのいずれかになります。

- チャンクが読み取り可能であれば、`{ value: theChunk, done: false }` の形式のオブジェクトで promise が満たされます。
- ストリームが閉じられると、`{ value: undefined, done: true }` という形式のオブジェクトで promise が満たされます。
- ストリームにエラーが発生すると、関連するエラーで promise が拒否されます。

次に、`done` が `true` であるかどうかを確認します。 その場合、読み込むチャンクはもうないので（値は `undefined` です）、関数から戻り、{{domxref("ReadableStreamDefaultController.close()")}} でカスタムストリームを閉じます。

```js
if (done) {
  controller.close();
  return;
}
```

> **メモ:** `close()` は、ここで説明している元のストリームではなく、新しいカスタムストリームの一部です。 次のセクションでカスタムストリームについて詳しく説明します。

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

## カスタムの読み取り可能なストリームを作成する

この記事で学習している単純なストリームポンプの例には 2 番目の部分が含まれています — フェッチしたボディから画像をチャンク単位で読み取った後、独自作成の別のカスタムストリームのキューに入れます。 これをどのように作成するのでしょうか？ `ReadableStream()` コンストラクターです。

### ReadableStream() コンストラクター

Fetch の場合のように、ブラウザーが提供するストリームから簡単に読み取ることができますが、カスタムストリームを作成して、独自のチャンクを追加する必要がある場合があります。 {{domxref("ReadableStream.ReadableStream","ReadableStream()")}} コンストラクターを使用すると、最初は複雑に見えますが実際にはそれほど悪くない構文を使用してこれを行うことができます。

汎用の構文の骨組みは次のようになります。

```js
const stream = new ReadableStream({
  start(controller) {

  },
  pull(controller) {

  },
  cancel() {

  },
  type,
  autoAllocateChunkSize
}, {
  highWaterMark,
  size()
});
```

コンストラクターはパラメーターとして 2 つのオブジェクトを取ります。 最初のオブジェクトは必須であり、データの読み取り元である基になるソースのモデルを JavaScript で作成します。 2 番目のオブジェクトはオプションであり、ストリームに使用する[カスタムのキューイング戦略](/ja/docs/Web/API/Streams_API/Concepts#Internal_queues_and_queuing_strategies)を指定できます。 これを行う必要はほとんどないため、ここでは最初のものに集中します。

次のように最初のオブジェクトには最大 5 つのメンバーを含めることができますが、最初のオブジェクトのみが必要です。

1. `start(controller)` — `ReadableStream` が構築された直後に 1 回だけ呼び出されるメソッド。 このメソッド内には、ストリーム機能を設定するコードを含める必要があります。 例えば、データの生成を開始するか、ソースにアクセスします。
2. `pull(controller)` — 含まれている場合、ストリームの内部キューがいっぱいになるまで繰り返し呼び出されるメソッド。 これは、より多くのチャンクがキューに入れられるときにストリームを制御するために使用できます。
3. `cancel()` — 含まれている場合、ストリームをキャンセルすることをアプリが通知した場合に呼び出されるメソッド（例えば、{{domxref("ReadableStream.cancel()")}} が呼び出された場合）。 内容は、ストリームのソースへのアクセスを解放するために必要なことを行う必要があります。
4. `type` および `autoAllocateChunkSize` — これらが含まれている場合、ストリームがバイトストリームであることを示すために使用されます。 バイトストリームは、通常の（デフォルトの）ストリームとは目的やユースケースが多少異なるため、今後のチュートリアルで個別に取り上げます。 また、まだどこにも実装されていません。

簡単な例のコードをもう一度見ると、次のように `ReadableStream()` コンストラクターには、フェッチしたストリームからすべてのデータを読み取るための単一のメソッド `start()` のみが含まれていることがわかります。

```js
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
    }
  })
})
```

### ReadableStream コントローラー

`ReadableStream()` コンストラクターに渡される `start()` メソッドと `pull()` メソッドには `controller` パラメーターが与えられます。 これらは、ストリームの制御に使用できる {{domxref("ReadableStreamDefaultController")}} クラスのインスタンスです。

この例では、コントローラーの {{domxref("ReadableStreamDefaultController.enqueue","enqueue()")}} メソッドを使用して、値をフェッチしたボディから読み取った後、カスタムストリームのキューに入れます。

さらに、フェッチしたボディの読み取りが完了したら、コントローラーの {{domxref("ReadableStreamDefaultController.close","close()")}} メソッドを使用してカスタムストリームを閉じます。 以前にキューに入れられたチャンクはそれから読み取ることができますが、キューに入れることはできません。 読み取りが終了すると、ストリームは閉じられます。

### カスタムストリームからの読み取り

単純なストリームポンプの例では、カスタムの読み取り可能なストリームを {{domxref("Response.Response", "Response")}} コンストラクターの呼び出しに渡すことで消費し、その後 `blob()` として消費します。

```js
.then(stream => new Response(stream))
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
.then(url => console.log(image.src = url))
.catch(err => console.error(err));
```

ただし、カスタムストリームは引き続き `ReadableStream` インスタンスであるため、それにリーダーを取りつけることができます。 例として、カスタムストリームを作成し、いくつかのランダムな文字列をキューに入れてから、\[文字列の生成を停止] ボタンが押されるとストリームからデータを再度読み取る、単純なランダムストリーム（[Simple random stream](https://github.com/mdn/dom-examples/blob/master/streams/simple-random-stream/index.html)）のデモをご覧ください（[ライブも参照](https://mdn.github.io/dom-examples/streams/simple-random-stream/)）。

カスタムストリームのコンストラクターには、{{domxref("WindowTimers.setInterval()")}} 呼び出しを使用して 1 秒ごとにランダムな文字列を生成する `start()` メソッドがあります。 次に、{{domxref("ReadableStreamDefaultController.enqueue()")}} を使用してストリームにエンキューします。 ボタンが押されると、インターバルがキャンセルされ、`readStream()` と呼ばれる関数が呼び出されて、データをストリームから再度読み取ります。 また、チャンクをストリームのキューへ入れることを止めたため、ストリームを閉じます。

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();
      // ストリームに文字列を追加
      controller.enqueue(string);
      // それを画面に表示
      let listItem = document.createElement('li');
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);
    button.addEventListener('click', function() {
      clearInterval(interval);
      readStream();
      controller.close();
    })
  },
  pull(controller) {
    // この例では実際には pull は必要ありません
  },
  cancel() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    clearInterval(interval);
  }
});
```

`readStream()` 関数自体では、{{domxref("ReadableStream.getReader()")}} を使用してリーダーをストリームにロックし、先ほど見たのと同様のパターンに従います。 `read()` で各チャンクを読み取り、`done` が `true` であるかどうかを確認し、その場合はプロセスを終了し、そうでない場合は `read()` メソッドを再度実行する前に次のチャンクを読み取って処理します。

```js
function readStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

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
    let listItem = document.createElement('li');
    listItem.textContent = 'Read ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
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

## ストリームのティーイング

ストリームを 2 回同時に読み取りたい場合があります。 これは、{{domxref("ReadableStream.tee()")}} メソッドを介して実現されます — 元の読み取り可能なストリームの 2 つの同一コピーを含む配列を出力し、2 つの別々のリーダーで個別に読み取ることができます。

例えば、サーバーから応答をフェッチしてブラウザーにストリームするが、Service Worker キャッシュにもストリームする場合は、[ServiceWorker](/ja/docs/Web/API/Service_Worker_API) でこれを行うことができます。 応答のボディを複数回使用することはできず、ストリームを一度に複数のリーダーで読み取ることはできないため、これを行うには 2 つのコピーが必要です。

単純な tee の例（[Simple tee example](https://github.com/mdn/dom-examples/blob/master/streams/simple-tee-example/index.html)）でこの例を示します（[ライブも参照](https://mdn.github.io/dom-examples/streams/simple-tee-example/)）。 この例は、単純なランダムストリームとほぼ同じように機能しますが、ボタンを押してランダムな文字列の生成を停止すると、カスタムストリームが取得されて tee され、結果の両方のストリームが読み取られる点が異なります。

```js
function teeStream() {
    const teedOff = stream.tee();
    readStream(teedOff[0], list2);
    readStream(teedOff[1], list3);
  }
```

## パイプチェーン

トリームの非常に実験的な機能の 1 つは、ストリームを相互にパイプする機能です（[パイプチェーン](/ja/docs/Web/API/Streams_API/Concepts#Pipe_chains)と呼ばれます）。 これには 2 つのメソッドが含まれます。 {{domxref("ReadableStream.pipeThrough()")}} は、読み取り可能ストリームをライター/リーダーのペアにパイプしてデータ形式を別の形式に変換し、{{domxref("ReadableStream.pipeTo()")}} は読み取り可能ストリームをパイプチェーンの終点として動作するライターにパイプします。

この機能は非常に実験的な段階であり、変更される可能性があるため、現時点ではあまり深く探求していません。

画像をストリームとしてフェッチし、それをバイナリデータストリームから PNG チャンクを取得するカスタム PNG 変換ストリームにパイプする PNG のチャンクをアンパック（[Unpack Chunks of a PNG](https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream)）という例を作成しました（[ライブも参照](https://mdn.github.io/dom-examples/streams/png-transform-stream/)）。

```js
// 元の画像をフェッチ
fetch('png-logo.png')
// その body を ReadableStream として取得
.then(response => response.body)
// 元の画像からグレースケール PNG ストリームを作成
.then(rs => logReadableStream('Fetch Response Stream', rs))
.then(body => body.pipeThrough(new PNGTransformStream()))
.then(rs => logReadableStream('PNG Chunk Stream', rs))
```

## まとめ

これは、「デフォルト」の読み取り可能なストリームの基本を説明しています。 バイトストリームがブラウザーで利用可能になったら、今後の別の記事でバイトストリームについて説明します。

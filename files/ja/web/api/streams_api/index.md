---
title: Streams API
slug: Web/API/Streams_API
---

{{SeeCompatTable}}{{DefaultAPISidebar("Streams")}}

Streams API を使用すると、JavaScript がネットワーク経由で受信したデータのストリームにプログラムでアクセスし、開発者の希望どおりに処理できます。

## 概念と使用方法

ストリーミングでは、ネットワーク経由で受信するリソースを小さなチャンクに分割し、少しずつ処理します。 これは、ブラウザーがウェブページに表示されるアセットを受信するときにとにかく行うことです — 動画がバッファされて徐々に再生可能になり、画像が読み込まれるにつれて徐々に表示されることもあります。

しかし、これはこれまで JavaScript で利用できたことはありません。 以前は、何らかの種類のリソース（動画、テキストファイルなど）を処理したい場合は、ファイル全体をダウンロードし、適切な形式にデシリアライズされるのを待ってから、完全に受信した後に全部まとめて処理する必要がありました。

Streams が JavaScript で利用できるようになったことで、これがすべて変わりました — クライアント側で利用可能になると、バッファ、文字列、または blob を生成せずに、JavaScript で少しずつ生データの処理を開始できます。

![](https://mdn.mozillademos.org/files/15817/Concept.png)

さらに利点もあります。 ストリームの開始または終了の検出、ストリームの連鎖、エラー処理と必要に応じたストリームのキャンセル、ストリームの読み取り速度への対応が可能です。

Streams の基本的な使用法は、応答をストリームとして利用可能にすることにかかっています。 例えば、成功した[フェッチ要求](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch)によって返された応答の {{domxref("Body")}} は、{{domxref("ReadableStream")}} として公開できます。 その後、{{domxref("ReadableStream.getReader()")}} で作成したリーダーを使用して読み取り、{{domxref("ReadableStream.cancel()")}} でキャンセルできます。

より複雑な用途では、例えば[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)内でデータを処理するために、{{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターを使用して独自のストリームを作成します。

{{domxref("WritableStream")}} を使用してストリームにデータを書き込むこともできます。

> **メモ:** ストリームの理論と実践の詳細については、[Streams API の概念](/ja/docs/Web/API/Streams_API/Concepts)、[読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)、[書き込み可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_writable_streams)の記事をご覧ください。

## ストリームのインターフェイス

### 読み取り可能なストリーム

- {{domxref("ReadableStream")}}
  - : 読み取り可能なデータのストリームを表します。 [Fetch API](/ja/docs/Web/API/Fetch_API) の応答ストリーム、または開発者定義のストリーム（カスタムの {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターなど）を処理するために使用できます。
- {{domxref("ReadableStreamDefaultReader")}}
  - : ネットワークから提供されたストリームデータ（フェッチ要求など）を読み取るために使用できるデフォルトのリーダーを表します。
- {{domxref("ReadableStreamDefaultController")}}
  - : {{domxref("ReadableStream")}} の状態と内部キューの制御を許可するコントローラーを表します。 デフォルトのコントローラーは、バイトストリームではないストリーム用です。

### 書き込み可能なストリーム

- {{domxref("WritableStream")}}
  - : シンク（sink）と呼ばれる宛先にストリーミングデータを書き込むための標準的な抽象化を提供します。 このオブジェクトには、組み込みのバックプレッシャー（受信側のバッファあふれの予防）とキューイングが付属しています。
- {{domxref("WritableStreamDefaultWriter")}}
  - : データのチャンクを書き込み可能なストリームに書き込むために使用できるデフォルトの書き込み可能なストリームのライターを表します。
- {{domxref("WritableStreamDefaultController")}}
  - : {{domxref("WritableStream")}} の状態の制御を許可するコントローラーを表します。 `WritableStream` を構築するとき、基になるシンクには、対応する `WritableStreamDefaultController` インスタンスが与えられて操作します。

### 関連するストリームの API と操作

- {{domxref("ByteLengthQueuingStrategy")}}
  - : ストリームを構築するときに使用できる組み込みのバイト長キューイング戦略（byte length queuing strategy）を提供します。
- {{domxref("CountQueuingStrategy")}}
  - : ストリームを構築するときに使用できる組み込みのチャンクカウントキューイング戦略（chunk counting queuing strategy）を提供します。

### 他の API の拡張

- {{domxref("Request")}}
  - : 新しい `Request` オブジェクトが構築されると、その `RequestInit` ディクショナリの `body` プロパティで {{domxref("ReadableStream")}} を渡すことができます。 次に、この `Request` を {{domxref("WindowOrWorkerGlobalScope.fetch()")}} に渡して、ストリームのフェッチを開始できます。
- {{domxref("Body")}}
  - : 成功した[フェッチ要求](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch)によって返された応答の {{domxref("Body")}} は、デフォルトで {{domxref("ReadableStream")}} として公開され、リーダーを取りつけることができます。

### ByteStream 関連のインターフェイス

> **警告:** これらはまだどこにも実装されておらず、仕様の詳細が実装に十分な完成状態にあるかどうかについて疑問が提起されています。 これは時間とともに変化する可能性があります。

- {{domxref("ReadableStreamBYOBReader")}}
  - : 開発者が提供するストリームデータの読み取りに使用できる BYOB（bring your own buffer、独自のバッファを持ち込む）リーダーを表します（カスタムの {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターなど）。
- {{domxref("ReadableByteStreamController")}}
  - : {{domxref("ReadableStream")}} の状態と内部キューの制御を許可するコントローラーを表します。 バイトストリームコントローラーは、バイトストリーム用です。
- {{domxref("ReadableStreamBYOBRequest")}}
  - : {{domxref("ReadableByteStreamController")}} 内のプルインリクエストを表します。

## 例

Streams API のドキュメントに合わせてサンプルのディレクトリを作成しました。 [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams) を参照してください。 例は次のとおりです。

- [Simple stream pump](http://mdn.github.io/dom-examples/streams/simple-pump/)（単純なストリームポンプ）: この例は、`ReadableStream` を使用してそのデータを別のストリームに渡す方法を示しています。
- [Grayscale a PNG](http://mdn.github.io/dom-examples/streams/grayscale-png/)（PNG のグレースケール化）: この例は、PNG の `ReadableStream` をグレースケールに変換する方法を示しています。
- [Simple random stream](http://mdn.github.io/dom-examples/streams/simple-random-stream/)（単純なランダムストリーム）: この例は、カスタムストリームを使用してランダムな文字列を生成し、それらをチャンクとしてキューに入れてから、再度読み取る方法を示しています。
- [Simple tee example](http://mdn.github.io/dom-examples/streams/simple-tee-example/)（単純な tee の例）: この例は、単純なランダムストリームの例を拡張したもので、ストリームを tee 化して、両方の結果のストリームの独立して読み取る方法を示しています。
- [Simple writer](http://mdn.github.io/dom-examples/streams/simple-writer/)（単純なライター）: この例では、書き込み可能なストリームに書き込み、ストリームをデコードして、コンテンツを UI に書き込む方法を示します。
- [Unpack chunks of a PNG](http://mdn.github.io/dom-examples/streams/png-transform-stream/)（PNG のチャンクをアンパックする）: この例は、PNG ファイルのデータを PNG チャンクのストリームに変換することにより、{{domxref("ReadableStream.pipeThrough","pipeThrough()")}} を使用して `ReadableStream` を他のデータ型のストリームに変換する方法を示します。

他の開発者による例

- [Streams、Service Worker、および Fetch を含む進行状況インジケーター](https://fetch-progress.anthum.com/)（英語）。

## 仕様書

| 仕様書                           | 状態                         | 備考     |
| -------------------------------- | ---------------------------- | -------- |
| {{SpecName('Streams')}} | {{Spec2('Streams')}} | 初回定義 |

## ブラウザーの互換性

### ReadableStream

{{Compat("api.ReadableStream")}}

### WritableStream

{{Compat("api.WritableStream")}}

## 関連情報

- [Streams API の概念](/ja/docs/Web/API/Streams_API/Concepts)
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- [書き込み可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_writable_streams)

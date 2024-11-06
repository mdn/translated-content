---
title: ストリーム API
slug: Web/API/Streams_API
l10n:
  sourceCommit: 2be3cb7ebebc76afa53a5604dc8be000d5ccd1c6
---

{{DefaultAPISidebar("Streams")}}

ストリーム API を使用すると、 JavaScript がネットワーク経由で受信したデータのストリームにプログラムでアクセスし、開発者の希望どおりに処理できます。

{{AvailableInWorkers}}

## 概念と使用方法

ストリーミングでは、ネットワーク経由で受信するリソースを小さなチャンク（塊）に分割し、少しずつ処理します。ブラウザーはメディア資産を受信する際にすでにこのような動作を行っています。動画はコンテンツのダウンロードが進むにつれてバッファーされ再生されますし、画像も読み込みが進むにつれて徐々に表示されることがあります。

しかし、この機能はこれまで JavaScript では利用できませんでした。以前は、ある種のリソース（動画やテキストファイルなど）を処理したい場合、ファイル全体をダウンロードして、適切な形式にデシリアライズされるのを待ち、それからすべてのデータを処理しなければなりませんでした。

ストリーム API を使えば、バッファーや文字列、blob などを生成する必要なく、利用できるようになったらすぐに、JavaScript で生のデータを少しずつ処理し始めることができます。

![ストリーム API の基本概念は、ネットワークからデータをいくつかのデータパケットに分割して取得することです。データは処理され、データパケットのストリームとしてブラウザーに送信されます。](concept.png)

さらに利点もあります。 ストリームの開始または終了の検出、ストリームの連鎖、エラー処理と必要に応じたストリームのキャンセル、ストリームの読み取り速度への対応が可能です。

ストリームの使い方は、レスポンスをストリームとして利用できるかどうかにかかっています。例えば、[読み取りリクエスト](/ja/docs/Web/API/Window/fetch)が成功すると返されるレスポンス本体は {{domxref("ReadableStream")}} となり、{{domxref("ReadableStream.getReader()")}} で作成したリーダーで読み取ることができます。

より複雑な用途では、例えば[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)内でデータを処理するために、 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターを使用して独自のストリームを作成することができます。

{{domxref("WritableStream")}} を使用してストリームにデータを書き込むこともできます。

> [!NOTE]
> ストリームの理論と実践の詳細については、[ストリーム API の概念](/ja/docs/Web/API/Streams_API/Concepts)、[読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)、[読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)、[書き込み可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_writable_streams)の記事をご覧ください。

## ストリームのインターフェイス

### 読み取り可能なストリーム

- {{domxref("ReadableStream")}}
  - : 読み取り可能なデータのストリームを表します。 [Fetch API](/ja/docs/Web/API/Fetch_API) のレスポンスストリーム、または開発者定義のストリーム（独自の {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターなど）を処理するために使用できます。
- {{domxref("ReadableStreamDefaultReader")}}
  - : ネットワークから提供されたストリームデータ（フェッチリクエストなど）を読み取るために使用できる既定のリーダーを表します。
- {{domxref("ReadableStreamDefaultController")}}
  - : {{domxref("ReadableStream")}} の状態と内部キューを制御できるコントローラーを表します。既定のコントローラーは、バイトストリーム向けではないストリーム用です。

### 書き込み可能なストリーム

- {{domxref("WritableStream")}}
  - : シンク (sink) と呼ばれる宛先にストリーミングデータを書き込むための標準的な抽象化を提供します。このオブジェクトには、組み込みの背圧とキューイング機能があります。
- {{domxref("WritableStreamDefaultWriter")}}
  - : データのチャンクを書き込み可能なストリームに書き込むために使用できる既定の書き込み可能なストリームのライターを表します。
- {{domxref("WritableStreamDefaultController")}}
  - : {{domxref("WritableStream")}} の状態を制御できるコントローラーを表します。 `WritableStream` を構築するとき、基になるシンクには、対応する `WritableStreamDefaultController` インスタンスが与えられて操作します。

### 変換ストリーム

- {{domxref("TransformStream")}}
  - : ストリームオブジェクトの[パイプチェーン](/ja/docs/Web/API/Streams_API/Concepts#pipe_chains)を通して渡されるデータを変換するストリームオブジェクトの抽象化したものを表します。
- {{domxref("TransformStreamDefaultController")}}
  - : 変換ストリームに関連付けられた {{domxref("ReadableStream")}} と {{domxref("WritableStream")}} を操作するためのメソッドを提供します。

### 関連するストリームの API と操作

- {{domxref("ByteLengthQueuingStrategy")}}
  - : ストリームを構築するときに使用できる組み込みのバイト長キューイング戦略 (byte length queuing strategy) を提供します。
- {{domxref("CountQueuingStrategy")}}
  - : ストリームを構築するときに使用できる組み込みのチャンクカウントキューイング戦略 (chunk counting queuing strategy) を提供します。

### 他の API の拡張

- {{domxref("Request")}}
  - : 新しい `Request` オブジェクトが構築されると、その `RequestInit` 辞書の `body` プロパティで {{domxref("ReadableStream")}} を渡すことができます。 次に、この `Request` を {{domxref("Window/fetch", "fetch()")}} に渡して、ストリームのフェッチを開始することができます。
- {{domxref("Response.body")}}
  - : 成功した[フェッチリクエスト](/ja/docs/Web/API/Window/fetch)によって返されたレスポンスの本体で、既定で {{domxref("ReadableStream")}} として取り出すことができ、リーダーを装着することができます。

### ByteStream 関連のインターフェイス

- {{domxref("ReadableStreamBYOBReader")}}
  - : 開発者が提供するストリームデータの読み取りに使用できる BYOB（"bring your own buffer"、独自のバッファーを持ち込む）リーダー（独自の {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクターなど）を表します。
- {{domxref("ReadableByteStreamController")}}
  - : {{domxref("ReadableStream")}} の状態と内部キューを制御するためのコントローラーを表します。 バイトストリームコントローラーは、バイトストリーム用のものです。
- {{domxref("ReadableStreamBYOBRequest")}}
  - : {{domxref("ReadableByteStreamController")}} 内のプルインリクエストを表します。

## 例

ストリーム API のドキュメントに合わせてサンプルのディレクトリーを作成しました。 [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) を参照してください。例として、次のものがあります。

- [Simple stream pump](https://mdn.github.io/dom-examples/streams/simple-pump/)（単純なストリームポンプ）: この例は、 ReadableStream を使用してそのデータを別のストリームに渡す方法を示しています。
- [Grayscale a PNG](https://mdn.github.io/dom-examples/streams/grayscale-png/)（PNG のグレースケール化）: この例は、PNG の ReadableStream をグレースケールに変換する方法を示しています。
- [Simple random stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/)（単純なランダムストリーム）: この例は、カスタムストリームを使用してランダムな文字列を生成し、それらをチャンクとしてキューに入れてから、再度読み取る方法を示しています。
- [Simple tee example](https://mdn.github.io/dom-examples/streams/simple-tee-example/)（単純な tee の例）: この例は、単純なランダムストリームの例を拡張したもので、ストリームを tee 化して、両方の結果のストリームの独立して読み取る方法を示しています。
- [Simple writer](https://mdn.github.io/dom-examples/streams/simple-writer/)（単純なライター）: この例では、書き込み可能なストリームに書き込み、ストリームをデコードして、コンテンツを UI に書き込む方法を示します。
- [Unpack chunks of a PNG](https://mdn.github.io/dom-examples/streams/png-transform-stream/)（PNG のチャンクをアンパックする）: この例は、PNG ファイルのデータを PNG のチャンクのストリームに変換することにより、 [`pipeThrough()`](/ja/docs/Web/API/ReadableStream/pipeThrough) を使用して ReadableStream を他のデータ型のストリームに変換する方法を示します。

他の開発者による例

- [Progress Indicators with Streams, Service Workers, & Fetch](https://fetch-progress.anthum.com/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ストリーム API の概念](/ja/docs/Web/API/Streams_API/Concepts)
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [書き込み可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_writable_streams)

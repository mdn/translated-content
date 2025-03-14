---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`ReadableByteStreamController`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、[読み取り可能なバイトストリーム](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)コントローラーを表します。
これは、基礎となるバイトソースを持つ {{domxref("ReadableStream")}} の状態と内部キューを制御し、ストリームの内部キューが空の場合に、基礎となるソースからコンシューマーへの効率的なゼロコピーデータ移譲を可能にします。

このコントローラ型のインスタンスは、 `underlyingSource` オブジェクトに `type="bytes"` プロパティを設定して [`ReadableStream()` コンストラクター](/ja/docs/Web/API/ReadableStream/ReadableStream#type)の引数として渡された場合に作成されます。
`underlyingSource` オブジェクトは [`start()`](/ja/docs/Web/API/ReadableStream/ReadableStream#start) および [`pull()`](/ja/docs/Web/API/ReadableStream/ReadableStream#pull) コールバック関数を定義することもできます。
これらは、コントローラーを引数として呼び出され、 基盤となるソースを設定し、必要に応じてデータをリクエストします。

基盤となるソースは、コントローラーを使用して [`byobRequest`](#readablebytestreamcontroller.byobrequest) プロパティまたは [`enqueue()`](#readablebytestreamcontroller.enqueue) メソッドでストリームにデータを供給します。
[`byobRequest`](#readablebytestreamcontroller.byobrequest) は {{domxref("ReadableStreamBYOBRequest")}} オブジェクトで、コンシューマーから直接コンシューマーにゼロコピーでデータを移譲するための待機リクエストを表します。
データが存在する場合は、`byobRequest` を使用してデータをコピーする必要があります（この場合は `enqueue()` を使用しないでください）。
基盤となるソースがストリームにデータを渡す必要があり、 `byobRequest` が `null` の場合、ソースは [`enqueue()`](#readablebytestreamcontroller.enqueue) を呼び出して、ストリーム内部のキューにデータを追加することができます。

[`byobRequest`](#readablebytestreamcontroller.byobrequest) は、リーダーからのリクエストがあり、ストリームの内部キューが空の場合にのみ、「BYOB モード」で作成されることに注意してください。
「BYOB モード」は、 {{domxref("ReadableStreamBYOBReader")}} （通常、 {{domxref("ReadableStream.getReader()")}} を引数 `{ mode: 'byob' }` で呼び出すことで構築されます）を使用している場合に有効になります。
既定値でリーダーを使用し、 [`autoAllocateChunkSize`](/ja/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) が [`ReadableController()` コンストラクター](/ja/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) で指定されている場合にも有効になります。

基盤となるバイトソースは、コントローラーを使用して、すべてのデータが送信されたときにストリームを閉じたり ([`close()`](#readablebytestreamcontroller.close))、 [`error()`](#readablebytestreamcontroller.error) を使用して基盤となるソースからエラーを報告したりすることもできます。
コントローラーの [`desiredSize`](#readablebytestreamcontroller.desiredsize) プロパティを使用して「背圧」をかけ、基盤となるソースに内部キューのサイズを通知します（値が小さいと、キューがいっぱいになっていることを示し、基盤となるソースに流入を一時停止またはスロットルすることが望ましいことを示唆します）。

たとえコントローラーが主に基盤となるバイトソースによって使用されるとしても、ストリームの指示のためにシステムの他の部分によって格納することができない理由はないことに注意してください。

## コンストラクター

なし。 `ReadableByteStreamController` インスタンスは、 `underlyingSource` に `type="bytes"` プロパティが設定されたものが [`ReadableStream()` コンストラクター](/ja/docs/Web/API/ReadableStream/ReadableStream#type)に渡された場合、自動的に作成されます。

## インスタンスプロパティ

- {{domxref("ReadableByteStreamController.byobRequest")}} {{ReadOnlyInline}}
  - : 現在の BYOB プルリクエストを返します。未処理のリクエストがない場合は `null` となります。
- {{domxref("ReadableByteStreamController.desiredSize")}} {{ReadOnlyInline}}
  - : ストリームの内部キューを満たすために必要な希望サイズを返します。

## インスタンスメソッド

- {{domxref("ReadableByteStreamController.close()")}}
  - : 関連するストリームを閉じます。
- {{domxref("ReadableByteStreamController.enqueue()")}}
  - : 所与のチャンクを関連するストリームのキューに入れます。
- {{domxref("ReadableByteStreamController.error()")}}
  - : 関連するストリームとの今後のやり取りでエラーが発生します。

## 例

コントローラーは、データを移譲またはエンキューしたり、ストリームにデータがない（閉じられた）またはエラーとされていたことを指示するために、基盤となるソースによって使用されます。また、 {{domxref("ReadableByteStreamController.desiredSize","desiredSize")}} を使用して、希望するデータレートの「上流」から基盤ソースに指示するためにも使用します。

[読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)の例、特に[読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#読み取り可能なソケットプッシュバイトストリームの作成)がこれらのほとんどの場合を示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ストリーム API の概念](/ja/docs/Web/API/Streams_API)
- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) or [sd-streams](https://github.com/stardazed/sd-streams) - polyfills

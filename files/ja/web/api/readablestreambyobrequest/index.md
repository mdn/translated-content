---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
l10n:
  sourceCommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{APIRef("Streams")}}

**`ReadableStreamBYOBRequest`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、は、コンシューマーにゼロコピーで移譲される（ストリーム内部のキューをバイパスする）基盤からのデータの「プルリクエスト」を表します。

`ReadableStreamBYOBRequest` オブジェクトは、コンシューマーがデータのリクエストを行い、ストリームの内部キューが空である場合に、「BYOBモード」で作成されます。
（ストリームがすでにバッファーされたデータを持っている場合、ストリームはコンシューマーのリクエストを直接解決します。）
基盤のバイトソースは、コントローラの {{domxref("ReadableByteStreamController.byobRequest")}} プロパティを通してアクティブな BYOB リクエストにアクセスすることができます。

「BYOB モード」に対応している基盤ソースは、 {{domxref("ReadableByteStreamController.byobRequest")}} を調べ、存在する場合はそれを使用してデータを移譲しなければなりません。
もし {{domxref("ReadableByteStreamController.byobRequest")}} が `null` の時に基盤からデータが到着した場合、 {{domxref("ReadableByteStreamController.enqueue()")}} を使用してキューに入れることができます。
これは、ストリームの内部バッファーが空でないときに、基盤のプッシュソースが新しいデータを受信した場合に発生する可能性があります。

基盤ソースは、 BYOB リクエストの [`view`](#readablestreambyobrequest.view) にデータを書き込んでから [`respond()`](#readablestreambyobrequest.respond) を呼び出すか、 [`respondWithNewView()`](#readablestreambyobrequest.respondwithnewview) を呼び出して新しいビューを引数として渡すことで、リクエストを使用します。
「新しいビュー」は、実際には元の `view` と同じバッファー上で、同じオフセットから始まるビューでなければならないことに注意してください。
これは、基盤が元のビュー全体を満たすことができない場合に、より短いバッファーを返すために使用することができます。

なお、 {{domxref("ReadableByteStreamController")}} は [`ReadableStream()` コンストラクター](/ja/docs/Web/API/ReadableStream/ReadableStream#type)で `type="bytes"` を指定した場合のみ、が基盤ソースに対して作成されます。
「BYOB モード」は [`autoAllocateChunkSize`](/ja/docs/Web/API/ReadableStream#autoallocatechunksize) を [`ReadableController()` コンストラクター](/ja/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize)で指定した場合、または {{domxref("ReadableStreamBYOBReader")}} （ふつうは {{domxref("ReadableStream.getReader()")}} に引数 `{ mode: 'byob' }` 付きで呼び出すことで構築される）を使用した場合にに有効になります。

## コンストラクター

なし。 `ReadableStreamBYOBRequest` インスタンスは `ReadableByteStreamController` によって必要に応じて作成されます。

## インスタンスプロパティ

- {{domxref("ReadableStreamBYOBRequest.view")}} {{ReadOnlyInline}}
  - : 現在のビューを返します。
    `ReadableStreamBYOBRequest.respond()` が呼び出されたときにコンシューマーに移譲されるバッファーに関するビューです。

## インスタンスメソッド

- {{domxref("ReadableStreamBYOBRequest.respond()")}}
  - : 関連付けられた読み取り可能なバイトストリームに、指定したバイト数が現在の [`view`](#readablestreambyobrequest.view) に書き込まれたことを通知し、コンシューマーからの待機中のリクエストを解決させます。
    このメソッドが呼び出された後、`view`は移譲され、変更できなくなることに注意してください。
- {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}}
  - : 引数として渡された、読み取り可能なバイトストリームのコンシューマーに転送される、関連付けられた読み取り可能なストリームビューへ通知します。
    この新しいビューは、元の [`view`](#readablestreambyobrequest.view) と同じバッファーを使用し、同じオフセットから始まり、同じ長さかそれ以下でなければなりません。
    このメソッドが呼び出された後、 `view` は移譲され、変更できなくなることに注意してください。

## 例

以下のコードは、[読み取り可能なバイトストリーム > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#読み取り可能なソケットプッシュバイトストリームの作成)のライブ例から引用したものです。

データを移譲するプッシュ基盤バイトソースは、最初に {{domxref("ReadableByteStreamController.byobRequest","controller.byobRequest")}} が `null` でないことを調べる必要があります。
このチェックが必要なのは、自動チャンク割り当てが有効でなく、既定のリーダーで使用する場合のみです。

```js
if (controller.byobRequest) {
  /* code to transfer data */
}
```

`ReadableStreamBYOBRequest` にデータを読み込んでそれを移譲するには 2 つの方法があります。
最初の方法は {{domxref("ReadableStreamBYOBRequest.view")}} プロパティにデータを書き込んでから {{domxref("ReadableStreamBYOBRequest.respond()")}} を呼び出して移譲するデータ量を示す方法です。
処理後、 `byobRequest.view` を切り離し、リクエストを破棄すべきです。

下記のコードはこの用途を示すもので、データをビューにコピーするために `readInto()` メソッドを使用しています。

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

他にも、 {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} を呼び出して、同じ基盤バッキングデータに自分自身でビューを渡す、という手法があります。
これは単に、実際に移譲される基盤バッファー/メモリーバッキングの範囲を指定する別の方法であることに注意してください。
上のコードと同等の `respondWithNewView` は次のようになります。

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
const newView = new Uint8Array(v.buffer, v.byteOffset, bytesRead);
controller.byobRequest.respondWithNewView(newView);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
